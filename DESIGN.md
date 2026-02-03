# Cangjie Dev Skill 实现方案

## 1. 项目概述

### 1.1 目标
开发一个符合 [skills.sh](https://skills.sh) 规范的 Skill，帮助 AI Agent（Claude Code、Cursor、Copilot 等）进行仓颉(Cangjie)语言项目的开发。

### 1.2 安装方式
```bash
npx skills add chenchaotao666/cangjie-dev-skill
```

### 1.3 核心价值
- 让 AI Agent 能够准确编写仓颉代码
- 提供仓颉语言的官方 API 文档查询能力
- 辅助开发者快速上手仓颉语言开发
- 支持鸿蒙生态相关的开发场景

## 2. 知识库来源（CangjieCorpus）

基于 [Cangjie-Pub/CangjieCorpus](https://github.com/Cangjie-Pub/CangjieCorpus) 项目：

| 目录 | 内容 | 用途 |
|------|------|------|
| `libs/` | API 文档 | 标准库、模块的详细说明 |
| `manual/` | 开发指南 | 语法基础、编程范式、最佳实践 |
| `tools/` | 工具指南 | IDE、命令行工具使用说明 |
| `extra/` | 扩展库 | 实践示例和场景化模板 |

## 3. 目录结构（符合 skills.sh 规范）

```
cangjie-dev-skill/
├── skills/
│   └── cangjie-dev/
│       ├── SKILL.md              # Skill 主文件（必需）
│       ├── AGENTS.md             # 编译后的完整文档（生成）
│       ├── metadata.json         # 元数据
│       ├── README.md             # Skill 说明
│       └── docs/                 # 知识库文档
│           ├── syntax/           # 语法规则
│           ├── stdlib/           # 标准库 API
│           ├── tools/            # 工具链
│           └── examples/         # 示例代码
├── scripts/
│   ├── build.js                  # 构建脚本（编译 AGENTS.md）
│   └── sync-corpus.sh            # 同步 CangjieCorpus
├── package.json
├── README.md                     # 项目说明
├── LICENSE                       # MIT 许可证
└── DESIGN.md                     # 本设计文档
```

## 4. 核心文件规范

### 4.1 SKILL.md

```markdown
---
name: cangjie-dev
description: |
  仓颉(Cangjie)编程语言开发辅助。当编写、审查或重构仓颉代码时使用此 skill。
  自动激活条件：检测到 .cj 文件或 cjpm.toml 配置文件。
license: MIT
metadata:
  author: chenchaotao666
  version: "1.0.0"
  cangjie_version: "1.0.0"
---

# 仓颉语言开发助手

你是仓颉(Cangjie)编程语言专家。当处理仓颉项目时，请遵循以下规则...

## 语法速查
[核心语法规则]

## 代码规范
[编码风格指南]

## 常见模式
[设计模式和最佳实践]
```

### 4.2 metadata.json

```json
{
  "version": "1.0.0",
  "organization": "Cangjie Community",
  "date": "2026-02",
  "abstract": "仓颉编程语言开发辅助 Skill，基于官方文档和 CangjieCorpus 语料库，提供语法指导、API 参考和最佳实践。",
  "cangjie_version": "1.0.0",
  "references": [
    "https://github.com/Cangjie-Pub/CangjieCorpus",
    "https://cangjie-lang.cn"
  ]
}
```

### 4.3 AGENTS.md（构建生成）

由 `scripts/build.js` 自动生成，合并所有文档内容：
- 完整语法规则
- 标准库 API 索引
- 代码示例
- 工具链使用指南

## 5. 内容组织

### 5.1 语法规则 (docs/syntax/)

| 文件 | 内容 |
|------|------|
| `basics.md` | 变量、类型、运算符 |
| `functions.md` | 函数定义、参数、返回值 |
| `classes.md` | 类、接口、继承 |
| `generics.md` | 泛型编程 |
| `errors.md` | 错误处理 |
| `concurrency.md` | 并发编程 |
| `macros.md` | 宏系统 |

### 5.2 标准库 API (docs/stdlib/)

从 CangjieCorpus/libs 同步，按模块组织：
- `std.core.md` - 核心类型
- `std.collection.md` - 集合类型
- `std.io.md` - 输入输出
- `std.net.md` - 网络
- `std.fs.md` - 文件系统
- ...

### 5.3 工具链 (docs/tools/)

- `cjpm.md` - 包管理器
- `cjc.md` - 编译器
- `cjfmt.md` - 代码格式化
- `ide.md` - IDE 插件

### 5.4 示例代码 (docs/examples/)

- `hello-world.md` - 入门示例
- `cli-app.md` - 命令行应用
- `web-server.md` - Web 服务
- `harmonyos.md` - 鸿蒙应用

## 6. 构建流程

### 6.1 package.json

```json
{
  "name": "cangjie-dev-skill",
  "version": "1.0.0",
  "scripts": {
    "build": "node scripts/build.js",
    "sync": "bash scripts/sync-corpus.sh",
    "validate": "node scripts/validate.js"
  }
}
```

### 6.2 构建脚本功能

1. **sync-corpus.sh**: 从 CangjieCorpus 同步最新文档
2. **build.js**:
   - 合并 docs/ 下所有文档
   - 生成 AGENTS.md
   - 验证格式正确性
3. **validate.js**: 检查文档完整性

## 7. 实现步骤

### Phase 1：项目初始化
- [ ] 创建目录结构
- [ ] 编写 package.json
- [ ] 创建 SKILL.md 基础框架
- [ ] 添加 metadata.json

### Phase 2：知识库集成
- [ ] 编写 sync-corpus.sh 脚本
- [ ] 从 CangjieCorpus 提取核心语法文档
- [ ] 整理标准库 API 文档
- [ ] 组织工具链文档

### Phase 3：构建系统
- [ ] 实现 build.js 构建脚本
- [ ] 生成 AGENTS.md
- [ ] 添加文档验证

### Phase 4：发布
- [ ] 完善 README.md
- [ ] 添加 LICENSE (MIT)
- [ ] 推送到 GitHub
- [ ] 测试 `npx skills add` 安装

## 8. 使用示例

安装后，Agent 在仓颉项目中自动激活：

```
用户: 帮我写一个仓颉的快速排序函数

Claude: [自动应用 cangjie-dev skill，生成符合仓颉规范的代码]

func quickSort<T>(arr: Array<T>, compare: (T, T) -> Int64): Unit {
    if (arr.size <= 1) {
        return
    }
    // ... 完整实现
}
```

## 9. 发布到 skills.sh

1. 确保仓库为 public
2. 包含正确的目录结构 (`skills/cangjie-dev/SKILL.md`)
3. 用户通过以下命令安装：
   ```bash
   npx skills add chenchaotao666/cangjie-dev-skill
   ```
4. Skill 会自动出现在 skills.sh 排行榜

## 10. 注意事项

1. **版本兼容**：当前基于仓颉 v1.0.0
2. **许可证**：
   - Skill 代码：MIT
   - 文档内容：遵循 CangjieCorpus 的 CC-BY-4.0
3. **更新策略**：定期同步 CangjieCorpus 更新
4. **多 Agent 支持**：符合 skills.sh 规范，支持 Claude Code、Cursor、Copilot 等

## 11. 后续扩展

- 添加仓颉代码 lint 规则
- 支持鸿蒙 ArkTS 混合开发
- 集成更多实战示例
- 构建仓颉代码片段库
