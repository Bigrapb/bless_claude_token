<div align="center">
  <img src="https://via.placeholder.com/150/003366/FFFFFF?text=BCT+Logo" alt="bless_claude_token logo" width="150" />

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

## ⚙️ Installation

### Option 1: Manual Installation (Web UI)
1. Navigate to the [`prompt_maestro.md`](prompt_maestro.md) file in this repository.
2. Copy the raw text.
3. Paste it into the "System Prompt", "Project Instructions", or "Custom Instructions" section of your preferred LLM client (e
