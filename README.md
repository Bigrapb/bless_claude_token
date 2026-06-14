<div align="center">
  <img src="https://private-user-images.githubusercontent.com/90824230/607627993-3ea8d29d-fff4-482b-be67-1388c4c9aaf6.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODE0NjM1MzAsIm5iZiI6MTc4MTQ2MzIzMCwicGF0aCI6Ii85MDgyNDIzMC82MDc2Mjc5OTMtM2VhOGQyOWQtZmZmNC00ODJiLWJlNjctMTM4OGM0YzlhYWY2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA2MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNjE0VDE4NTM1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJjMjQ5ZDM2NjExMDA4MTdkMGMyNzg4MjdhZmU2NTUxZDM4YTg2NmIwNDE3ZDc1YWZkMzlmMzc5YTdkYTAxZmEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.J8Ol1Sw98wNWeg5lgPv_DfC_u6Qhit5R4w7cAPYeRpA" alt="bless_claude_token banner" width="100%" />

  # 🧠 bless_claude_token

  *An advanced, token-economizing System Prompt for Claude to radically optimize API costs, context limits, and multi-AI task delegation.*

  [![GitHub release](https://img.shields.io/github/v/release/Bigrapb/bless_claude_token?style=flat-square)](https://github.com/Bigrapb/bless_claude_token/releases)
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
  [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
</div>

---

## 📖 Overview

**bless_claude_token** is an engineered System Prompt that transforms Claude into a Senior Software Architect and strict Token Economist. It is designed to aggressively protect your context window during massive development sessions, preventing "hallucinations" and saving up to 80% on output tokens.

## ✨ Core Features

* 🛡️ **Strict Diff Patching:** Forces Claude to NEVER rewrite entire files. It outputs only exact Git-style diff patches for the specific lines modified.
* 🤖 **Multi-AI Auto-Delegation:** Claude analyzes your request and writes exact prompts for you to copy/paste into faster, free inference models (like Llama 3 or Gemini Flash) for boilerplate, HTML/CSS, and basic terminal scripts.
* 💾 **State Hibernation (`/save`):** Generates a 300-word Markdown mental map of your project's architecture, allowing you to migrate to a fresh chat context without spending tokens reading old code.
* 🔇 **Anti-Noise Filter:** Automatically stops processing massive error logs dumped into the prompt, guiding you to filter terminal outputs instead.

---

## ⚙️ Detailed Installation Guide

Choose the deployment method that best fits your development environment:

### 1. Official Anthropic Claude Web UI & Projects (Manual Setup)
For direct usage within the official chat interface:
* **Claude Pro Projects:** 1. Open your Project dashboard.
  2. Click on **Project Instructions** in the right-side configuration bar.
  3. Copy the full raw contents of [`prompt_maestro.md`](prompt_maestro.md) and paste it inside.
* **Standard Chat Sessions:**
  1. Simply paste the contents of `prompt_maestro.md` as the very first message of a new chat to initialize the Token Economist protocols.

### 2. PC Local Setup via PowerShell (Windows Developer Environments)
For developers wishing to clone and pipe the skill straight to their system clipboard using native Windows terminal tools:

```powershell
# Clone the repository to your local drive
git clone [https://github.com/Bigrapb/bless_claude_token.git](https://github.com/Bigrapb/bless_claude_token.git)

# Enter the project directory
cd bless_claude_token

# Stream the prompt directly into your Windows clipboard
Get-Content prompt_maestro.md | Set-Clipboard
