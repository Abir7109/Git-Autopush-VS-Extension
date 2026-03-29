import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as path from 'path';

/**
 * Helper to run a shell command inside the workspace folder.
 */
function runGitCommand(command: string, cwd: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(command, { cwd }, (error, stdout, stderr) => {
      if (error) {
        const details = [stderr, error.message].filter(Boolean).join('\n');
        reject(details);
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

/**
 * Ensure the current folder is a git repo and has an "origin" remote.
 * If not, ask the user for a remote URL and set it up.
 */
async function ensureRepo(workspacePath: string): Promise<void> {
  try {
    await runGitCommand('git rev-parse --is-inside-work-tree', workspacePath);
  } catch {
    // Not a repo – init it
    await runGitCommand('git init', workspacePath);
    vscode.window.showInformationMessage('Initialized a new Git repository.');
  }

  // Check for remote "origin"
  try {
    await runGitCommand('git remote get-url origin', workspacePath);
    // remote exists – nothing to do
    return;
  } catch {
    // No origin – ask user
    const remote = await vscode.window.showInputBox({
      prompt: 'Enter GitHub repository URL (e.g. https://github.com/user/repo.git)',
      ignoreFocusOut: true,
    });
    if (remote) {
      await runGitCommand(`git remote add origin ${remote}`, workspacePath);
      vscode.window.showInformationMessage('Remote "origin" added.');
    } else {
      throw new Error('Remote URL not provided');
    }
  }
}

/**
 * Create a commit with a templated message and push to the remote.
 */
async function pushWorkspace(): Promise<void> {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders) {
    vscode.window.showErrorMessage('Open a folder before using Git Autopush.');
    return;
  }
  const workspacePath = workspaceFolders[0].uri.fsPath;
  try {
    await ensureRepo(workspacePath);
  } catch (e) {
    vscode.window.showErrorMessage(`Repo setup failed: ${e}`);
    return;
  }

  // Ensure git user identity is configured
  try {
    await runGitCommand('git config user.name', workspacePath);
  } catch {
    const setName = await vscode.window.showInputBox({
      prompt: 'Git user.name is not configured. Enter your name for commits.',
      ignoreFocusOut: true,
    });
    if (!setName) {
      vscode.window.showErrorMessage('git config user.name is required for commits.');
      return;
    }
    await runGitCommand(`git config user.name "${setName}"`, workspacePath);
  }
  try {
    await runGitCommand('git config user.email', workspacePath);
  } catch {
    const setEmail = await vscode.window.showInputBox({
      prompt: 'Git user.email is not configured. Enter your email for commits.',
      ignoreFocusOut: true,
    });
    if (!setEmail) {
      vscode.window.showErrorMessage('git config user.email is required for commits.');
      return;
    }
    await runGitCommand(`git config user.email "${setEmail}"`, workspacePath);
  }

  // Stage all changes
  try {
    await runGitCommand('git add .', workspacePath);
  } catch (e) {
    vscode.window.showErrorMessage(`git add failed: ${e}`);
    return;
  }

  // Build commit message from config
  const cfg = vscode.workspace.getConfiguration('gitAutopush');
  const template = cfg.get<string>('commitMessageTemplate') || 'Auto-commit ${date}';
  const message = template.replace('${date}', new Date().toISOString());

  // Commit (ignore if nothing to commit)
  try {
    await runGitCommand(`git commit -m "${message}"`, workspacePath);
  } catch (e) {
    if (String(e).includes('nothing to commit')) {
      // No changes – continue to push
    } else {
      vscode.window.showErrorMessage(`git commit failed: ${e}`);
      return;
    }
  }

  // Push – first push sets upstream if needed
  try {
    await runGitCommand('git push -u origin HEAD', workspacePath);
    vscode.window.showInformationMessage('✅ Project pushed to GitHub');
  } catch (e) {
    vscode.window.showErrorMessage(`git push failed: ${e}`);
  }
}

export function activate(context: vscode.ExtensionContext) {
  // Status‑bar button
  const btn = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  btn.text = '$(cloud-upload) Auto‑Push';
  btn.command = 'git-autopush.push';
  btn.tooltip = 'Push current workspace to GitHub';
  btn.show();

  const disposable = vscode.commands.registerCommand('git-autopush.push', pushWorkspace);
  context.subscriptions.push(btn, disposable);
}

export function deactivate() {}
