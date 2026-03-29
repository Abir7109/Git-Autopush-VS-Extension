<h1 align="center">
  <img src="https://raw.githubusercontent.com/Abir7109/Git-Autopilot-VS-Extension/master/images/icon.png" alt="Git AutoPilot" width="80" height="80" />
  <br>
  Git AutoPilot
</h1>

<p align="center">
  <strong>Stop wasting time on repetitive Git commands.</strong><br>
  Stage, commit & push your entire workspace to GitHub — <em>in one click.</em>
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=rmabir71.git-autopilot">
    <img src="https://img.shields.io/visual-studio-marketplace/v/rmabir71.git-autopilot?style=flat-square&label=Version&color=blue" alt="Version" />
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=rmabir71.git-autopilot">
    <img src="https://img.shields.io/visual-studio-marketplace/i/rmabir71.git-autopilot?style=flat-square&label=Installs&color=brightgreen" alt="Installs" />
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=rmabir71.git-autopilot">
    <img src="https://img.shields.io/visual-studio-marketplace/r/rmabir71.git-autopilot?style=flat-square&label=Rating&color=orange" alt="Rating" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License" />
</p>

---

### The Problem

Every time you make a change, you run the same commands:

```bash
git add .
git commit -m "..."
git push
```

Over and over. **50+ times a day.** That's time you'll never get back.

### The Solution

**One button. One click. Done.**

Git AutoPilot adds a sleek **Auto-Push** button to your VS Code status bar. Click it, and your code is staged, committed, and pushed to GitHub — automatically.

---

## What You Get

<table>
<tr>
<td width="50%">

**One-Click Push**
A single status bar button handles `git add` → `git commit` → `git push` in one seamless action.

</td>
<td width="50%">

**Auto Repository Setup**
Not a Git repo yet? No remote configured? Git AutoPilot handles it for you — just click.

</td>
</tr>
<tr>
<td width="50%">

**Smart Commit Messages**
Fully customizable commit message templates with `${date}` timestamp support.

</td>
<td width="50%">

**Zero Configuration**
Install and go. No setup wizards, no config files, no headaches.

</td>
</tr>
</table>

---

## How It Works

```
    ┌──────────────────────────────────────────┐
    │                                          │
    │   ☁️  Click "Auto-Push" in status bar    │
    │                  │                        │
    │                  ▼                        │
    │   ┌──────────────────────────┐           │
    │   │  git init (if needed)    │           │
    │   └───────────┬──────────────┘           │
    │               ▼                          │
    │   ┌──────────────────────────┐           │
    │   │  Setup remote (if needed)│           │
    │   └───────────┬──────────────┘           │
    │               ▼                          │
    │   ┌──────────────────────────┐           │
    │   │  git add . (stage all)   │           │
    │   └───────────┬──────────────┘           │
    │               ▼                          │
    │   ┌──────────────────────────┐           │
    │   │  git commit (auto msg)   │           │
    │   └───────────┬──────────────┘           │
    │               ▼                          │
    │   ┌──────────────────────────┐           │
    │   │  git push → GitHub       │           │
    │   └──────────────────────────┘           │
    │                                          │
    │          ✅ Done! Code is live.           │
    └──────────────────────────────────────────┘
```

---

## Quick Start

1. **Install** this extension from the VS Code Marketplace
2. **Open** any folder or project in VS Code
3. **Click** the `☁️ Auto-Push` button in the bottom-left status bar
4. **Done** — your code is on GitHub

> On first use, you may be prompted for your GitHub repository URL.

---

## Customize Your Commits

Open **Settings** (`Ctrl + ,`) and search for **Git AutoPilot**:

| Setting | Default | Description |
|---------|---------|-------------|
| `gitAutopilot.commitMessageTemplate` | `Auto-commit ${date}` | Custom commit message template. Use `${date}` for ISO timestamp. |

**Example:**

```json
{
  "gitAutopilot.commitMessageTemplate": "chore: auto-save ${date}"
}
```

**Output:**

```
chore: auto-save 2026-03-29T05:44:27.000Z
```

---

## Requirements

- **VS Code** 1.80.0 or higher
- **Git** installed and available in your system `PATH`

---

## Support & Feedback

Found a bug? Have a feature request?

- **Issues:** [GitHub Issues](https://github.com/Abir7109/Git-Autopilot-VS-Extension/issues)
- **Star the repo:** [GitHub](https://github.com/Abir7109/Git-Autopilot-VS-Extension)

---

<p align="center">
  <strong>Made with TypeScript</strong> — Built for developers who value their time.
</p>

<p align="center">
  <a href="https://github.com/Abir7109/Git-Autopilot-VS-Extension">⭐ Star on GitHub</a>
  &nbsp;&bull;&nbsp;
  <a href="https://marketplace.visualstudio.com/items?itemName=rmabir71.git-autopilot">📦 VS Marketplace</a>
  &nbsp;&bull;&nbsp;
  <a href="https://github.com/Abir7109/Git-Autopilot-VS-Extension/blob/master/LICENSE.md">📄 MIT License</a>
</p>
