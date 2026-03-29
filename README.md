<div align="center">
  <img src="images/icon.png" alt="Git AutoPilot Logo" width="128" height="128">
  <h1>Git AutoPilot</h1>
  <p>Push your workspace to GitHub with a single click — straight from the VS Code status bar.</p>

  [![VS Marketplace](https://img.shields.io/visual-studio-marketplace/v/rmabir71.git-autopilot?style=for-the-badge&label=VS%20Marketplace&color=0078d4)](https://marketplace.visualstudio.com/items?itemName=rmabir71.git-autopilot)
  [![Downloads](https://img.shields.io/visual-studio-marketplace/d/rmabir71.git-autopilot?style=for-the-badge&color=0078d4)](https://marketplace.visualstudio.com/items?itemName=rmabir71.git-autopilot)
  [![Rating](https://img.shields.io/visual-studio-marketplace/r/rmabir71.git-autopilot?style=for-the-badge&color=0078d4)](https://marketplace.visualstudio.com/items?itemName=rmabir71.git-autopilot)
  [![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE.md)

</div>

---

## Why Git AutoPilot?

Tired of the repetitive **add → commit → push** cycle? Git AutoPilot automates your entire Git workflow into a **single click** from the VS Code status bar. Whether you're prototyping, saving progress, or deploying — it handles the boilerplate so you can focus on writing code.

---

## Features

| Feature | Description |
|---------|-------------|
| **One-Click Push** | A status bar button that stages, commits, and pushes in one action |
| **Auto-Init** | Automatically initializes a Git repository if the workspace isn't one yet |
| **Remote Setup** | Prompts for a GitHub URL if no `origin` remote is configured |
| **Configurable Messages** | Use a custom commit message template with `${date}` for ISO timestamps |
| **Zero Configuration** | Works out of the box — no setup required |

---

## How It Works

```
  Click "Auto-Push"
        │
        ▼
  ┌─────────────┐
  │  git init    │  (if not a repo)
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │ git remote   │  (prompt if no origin)
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │  git add .   │  (stage all changes)
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │ git commit   │  (with custom template)
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │  git push    │  (push to origin)
  └─────────────┘
```

---

## Installation

### From VS Code Marketplace

1. Open **VS Code**
2. Go to **Extensions** (`Ctrl+Shift+X`)
3. Search for **Git AutoPilot**
4. Click **Install**

### From VSIX File

1. Download the `.vsix` file from the [Releases](https://github.com/Abir7109/git-autopilot/releases) page
2. Open **VS Code**
3. Go to **Extensions** → `...` menu → **Install from VSIX...**
4. Select the downloaded `.vsix` file

---

## Usage

1. Open a folder in VS Code
2. Click the **$(cloud-upload) Auto-Push** button in the status bar (bottom-left)
3. Alternatively, open the Command Palette (`Ctrl+Shift+P`) and run **Git AutoPilot: Push Workspace**
4. On the first run, you may be prompted for your GitHub repository URL

---

## Configuration

Open **Settings** (`Ctrl+,`) → search for **Git AutoPilot**:

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `gitAutopilot.commitMessageTemplate` | `string` | `"Auto-commit ${date}"` | Template for the auto-commit message. Use `${date}` to insert an ISO timestamp. |

### Example

```json
{
  "gitAutopilot.commitMessageTemplate": "chore: auto-save ${date}"
}
```

---

## Requirements

- **Git** must be installed and available in your system `PATH`
- **VS Code** `1.80.0` or higher

---

## Development

```bash
# Clone the repository
git clone https://github.com/Abir7109/git-autopilot.git
cd git-autopilot

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Watch for changes during development
npm run watch

# Package the extension
npm run package
```

Press `F5` in VS Code to launch the Extension Development Host for testing.

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

[MIT](LICENSE.md) &copy; 2026 [Abir](https://github.com/Abir7109)

---

<div align="center">
  <sub>Built with TypeScript for VS Code</sub>
</div>
