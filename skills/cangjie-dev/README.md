# Cangjie Dev Skill

仓颉(Cangjie)编程语言开发辅助 Skill。

## 功能

- 仓颉语言语法参考
- 标准库 API 文档
- 代码生成和补全
- 项目模板
- 最佳实践指南
- 鸿蒙应用开发支持

## 激活条件

当检测到以下文件时自动激活：

- `.cj` 文件（仓颉源代码）
- `cjpm.toml`（仓颉包配置）

## 使用示例

安装后，在仓颉项目中直接与 AI 对话：

```
用户: 帮我写一个读取文件内容的函数

AI: [自动应用仓颉语法规则，生成符合规范的代码]

import std.fs.*
import std.io.*

func readFileContent(path: String): String {
    let file = File(path, OpenMode.Read)
    try {
        let reader = BufferedReader(file)
        let content = StringBuilder()
        while (let line <- reader.readLine()) {
            content.append(line)
            content.append("\n")
        }
        return content.toString()
    } finally {
        file.close()
    }
}
```

## 文档结构

```
docs/
├── syntax/     # 语法文档
├── stdlib/     # 标准库 API
├── tools/      # 工具链指南
└── examples/   # 示例代码
```

## 许可证

MIT (Skill 代码) | CC-BY-4.0 (文档内容)
