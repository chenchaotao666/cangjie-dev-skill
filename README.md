# Cangjie Dev Skill

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Cangjie Version](https://img.shields.io/badge/Cangjie-v1.0.0-orange.svg)](https://developer.huawei.com/consumer/cn/cangjie/)

AI Agent skill for [Cangjie (仓颉)](https://developer.huawei.com/consumer/cn/cangjie/) programming language development.

## Installation

```bash
npx skills add chenchaotao666/cangjie-dev-skill --yes --global
```

## Features

- **Syntax Assistance**: Complete Cangjie language syntax reference
- **API Documentation**: Standard library API with examples
- **Code Generation**: Generate idiomatic Cangjie code
- **Project Templates**: Quick project scaffolding
- **Best Practices**: Code style and design patterns
- **HarmonyOS Support**: Guidance for HarmonyOS app development

## Supported AI Agents

This skill works with:

- Claude Code
- Cursor
- GitHub Copilot
- Gemini
- And 12+ other AI agents

## Auto Activation

The skill automatically activates when:

- Working with `.cj` files (Cangjie source code)
- Detecting `cjpm.toml` (Cangjie package configuration)

## What's Included

| Directory | Content |
|-----------|---------|
| `docs/syntax/` | Language syntax documentation |
| `docs/stdlib/` | Standard library API reference |
| `docs/tools/` | cjpm, cjfmt, cjlint usage guides |
| `docs/examples/` | Code examples and templates |

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/chenchaotao666/cangjie-dev-skill.git
cd cangjie-dev-skill

# Sync documentation from CangjieCorpus
npm run sync

# Build AGENTS.md
npm run build

# Validate structure
npm run validate
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run sync` | Sync docs from CangjieCorpus |
| `npm run build` | Generate AGENTS.md |
| `npm run validate` | Validate skill structure |

## Documentation Source

Documentation is sourced from [CangjieCorpus](https://github.com/Cangjie-Pub/CangjieCorpus), a high-quality knowledge base for Cangjie language.

## License

- Skill code: [MIT](LICENSE)
- Documentation content: [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/) (from CangjieCorpus)

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## Links

- [Cangjie Official Site](https://developer.huawei.com/consumer/cn/cangjie/)
- [CangjieCorpus](https://github.com/Cangjie-Pub/CangjieCorpus)
- [skills.sh](https://skills.sh)
