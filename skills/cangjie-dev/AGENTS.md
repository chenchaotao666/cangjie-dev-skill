---
name: cangjie-dev
description: |
  仓颉(Cangjie)编程语言开发辅助。当编写、审查或重构仓颉代码时自动激活。
  触发条件：检测到 .cj 文件或 cjpm.toml 配置文件。
  覆盖场景：语法编写、API 使用、项目构建、性能优化、鸿蒙应用开发。
license: MIT
metadata:
  author: cangjie-community
  version: "1.0.1"
  cangjie_version: "1.0.0"
---

# 仓颉语言开发助手

你是仓颉(Cangjie)编程语言专家。仓颉是华为推出的面向全场景应用开发的通用编程语言，主要用于鸿蒙(HarmonyOS)生态开发。

## 语言特性

- **多后端支持**：CJNative（编译为原生二进制）和 CJVM（编译为字节码）
- **多范式编程**：支持函数式、命令式和面向对象
- **类型安全**：静态强类型，支持类型推断
- **内存安全**：自动内存管理，运行时边界检查
- **高效并发**：用户态轻量化线程（原生协程）
- **元编程**：基于词法宏的元编程能力

## 关键字

```
as, abstract, break, Bool, case, catch, class, const, continue,
Rune, do, else, enum, extend, for, func, false, finally, foreign,
Float16, Float32, Float64, if, in, is, init, import, interface,
Int8, Int16, Int32, Int64, IntNative, let, mut, main, macro, match,
Nothing, open, operator, override, prop, public, package, private,
protected, quote, redef, return, spawn, super, static, struct,
synchronized, try, this, true, type, throw, This, unsafe, Unit,
UInt8, UInt16, UInt32, UInt64, UIntNative, var, VArray, where, while
```

## 基础类型

| 类型 | 说明 |
|------|------|
| `Int8/16/32/64` | 有符号整数 |
| `UInt8/16/32/64` | 无符号整数 |
| `Float16/32/64` | 浮点数 |
| `Bool` | 布尔类型 (true/false) |
| `Rune` | Unicode 字符 |
| `String` | 字符串 |
| `Unit` | 空类型（类似 void） |
| `Nothing` | 底类型 |

## 变量声明

```cangjie
// 不可变变量
let x: Int64 = 10
let y = 20  // 类型推断

// 可变变量
var count: Int64 = 0
count = count + 1

// 常量（编译时确定）
const PI = 3.14159
```

## 函数定义

```cangjie
// 基本函数
func add(a: Int64, b: Int64): Int64 {
    return a + b
}

// 简化写法（单表达式）
func multiply(a: Int64, b: Int64): Int64 {
    a * b
}

// 泛型函数
func identity<T>(value: T): T {
    value
}

// 带默认参数
func greet(name: String, greeting: String = "Hello"): String {
    "${greeting}, ${name}!"
}
```

## 结构体 (struct)

```cangjie
struct Rectangle {
    let width: Int64
    let height: Int64

    // 构造函数
    public init(width: Int64, height: Int64) {
        this.width = width
        this.height = height
    }

    // 主构造函数（简化写法）
    // public Rectangle(let width: Int64, let height: Int64) {}

    // 成员函数
    public func area(): Int64 {
        width * height
    }

    // 静态函数
    public static func unit(): Rectangle {
        Rectangle(1, 1)
    }
}
```

## 类 (class)

```cangjie
// 基类需要 open 修饰符才能被继承
open class Animal {
    protected var name: String

    public init(name: String) {
        this.name = name
    }

    public open func speak(): String {
        "..."
    }
}

// 继承
class Dog <: Animal {
    public init(name: String) {
        super(name)
    }

    public override func speak(): String {
        "Woof!"
    }
}
```

## 接口 (interface)

```cangjie
interface Drawable {
    func draw(): Unit
}

interface Resizable {
    func resize(scale: Float64): Unit
}

// 实现多个接口
class Circle <: Drawable & Resizable {
    var radius: Float64

    public init(radius: Float64) {
        this.radius = radius
    }

    public func draw(): Unit {
        println("Drawing circle with radius ${radius}")
    }

    public func resize(scale: Float64): Unit {
        this.radius = this.radius * scale
    }
}
```

## 枚举 (enum)

```cangjie
// 简单枚举
enum Color {
    | Red | Green | Blue
}

// 带参数的枚举（代数数据类型）
enum Option<T> {
    | Some(T)
    | None
}

// 递归枚举
enum Expr {
    | Num(Int64)
    | Add(Expr, Expr)
    | Sub(Expr, Expr)
}

// 使用
let color = Color.Red
let value = Option<Int64>.Some(42)
```

## 模式匹配 (match)

```cangjie
func describe(color: Color): String {
    match (color) {
        case Red => "红色"
        case Green => "绿色"
        case Blue => "蓝色"
    }
}

// 带解构的模式匹配
func eval(expr: Expr): Int64 {
    match (expr) {
        case Num(n) => n
        case Add(left, right) => eval(left) + eval(right)
        case Sub(left, right) => eval(left) - eval(right)
    }
}

// if-let 模式
if (let Some(value) <- optionalValue) {
    println("Got value: ${value}")
}
```

## 异常处理

```cangjie
// 自定义异常
class MyException <: Exception {
    public init(message: String) {
        super(message)
    }
}

// try-catch-finally
func riskyOperation(): Int64 {
    try {
        if (someCondition) {
            throw MyException("Something went wrong")
        }
        return 42
    } catch (e: MyException) {
        println("Caught: ${e.message}")
        return -1
    } finally {
        println("Cleanup")
    }
}
```

## 并发编程

```cangjie
// 创建线程（协程）
let thread = spawn {
    println("Running in new thread")
}

// 等待线程完成
thread.join()

// 同步块
var counter = 0
let lock = ReentrantMutex()

func increment(): Unit {
    synchronized(lock) {
        counter = counter + 1
    }
}
```

## 集合类型

```cangjie
// 数组
let arr: Array<Int64> = [1, 2, 3, 4, 5]
let first = arr[0]

// ArrayList（可变长数组）
var list = ArrayList<String>()
list.append("hello")
list.append("world")

// HashMap
var map = HashMap<String, Int64>()
map["one"] = 1
map["two"] = 2

// 遍历
for (item in arr) {
    println(item)
}

for ((key, value) in map) {
    println("${key}: ${value}")
}
```

## 属性 (prop)

```cangjie
class Temperature {
    private var _celsius: Float64 = 0.0

    // getter 和 setter
    public prop celsius: Float64 {
        get() { _celsius }
        set(value) { _celsius = value }
    }

    // 只读属性
    public prop fahrenheit: Float64 {
        get() { _celsius * 9.0 / 5.0 + 32.0 }
    }
}
```

## 扩展 (extend)

```cangjie
// 为已有类型添加方法
extend Int64 {
    public func isEven(): Bool {
        this % 2 == 0
    }
}

// 使用
let num: Int64 = 4
println(num.isEven())  // true
```

## 泛型

```cangjie
// 泛型类
class Box<T> {
    private var value: T

    public init(value: T) {
        this.value = value
    }

    public func get(): T {
        value
    }
}

// 泛型约束
func compare<T>(a: T, b: T): Bool where T <: Comparable<T> {
    a < b
}
```

## 项目结构

```
my-project/
├── cjpm.toml          # 项目配置文件
├── src/
│   └── main.cj        # 主源文件
├── test/
│   └── main_test.cj   # 测试文件
└── build/             # 构建输出
```

### cjpm.toml 示例

```toml
[package]
name = "my-project"
version = "1.0.0"
description = "My Cangjie Project"

[dependencies]
# 依赖配置
```

## 常用命令

### 创建工程

使用 `cjpm init` 创建一个新的仓颉工程，会自动生成标准项目结构（包括 `cjpm.toml`、`src/` 和 `src/main.cj`）：

```bash
cjpm init my-project
cd my-project
```

生成的目录结构：

```
my-project/
├── cjpm.toml          # 项目配置文件
└── src/
    └── main.cj        # 主源文件
```

### 编译工程

使用 `cjpm build` 编译当前工程，编译产物默认输出到 `build/` 目录：

```bash
cjpm build
```

常用选项：

```bash
cjpm build --output=<name>       # 指定输出文件名
cjpm build --target=<name>       # 交叉编译到指定平台
cjpm build --coverage            # 编译并启用覆盖率统计
```

### 运行工程

使用 `cjpm run` 编译并运行当前工程（自动执行 `main` 函数）：

```bash
cjpm run
```

### 测试工程

使用 `cjpm test` 编译并执行当前工程中的测试用例（`test/` 目录下的测试文件）：

```bash
cjpm test
```

常用选项：

```bash
cjpm test --coverage             # 运行测试并统计覆盖率
```

### 其他工具

```bash
# 格式化代码
cjfmt -w src/

# 代码检查
cjlint src/
```

## 代码规范

1. **命名约定**
   - 类型名：PascalCase（如 `MyClass`）
   - 函数/变量：camelCase（如 `myFunction`）
   - 常量：UPPER_SNAKE_CASE 或 PascalCase
   - 包名：小写（如 `mypackage`）

2. **缩进**：使用 4 个空格

3. **括号风格**：K&R 风格（左括号不换行）

4. **文档注释**：使用 `/**` 开头的块注释

## 与其他语言互操作

```cangjie
// 调用 C 函数
@Foreign
foreign func printf(format: CString, ...): Int32

// 在 main 中使用
main() {
    unsafe {
        printf("Hello from C!\n".toCString())
    }
}
```

## 常见错误和解决方案

| 错误 | 原因 | 解决方案 |
|------|------|----------|
| `Variable not initialized` | 变量未初始化 | 在使用前赋值 |
| `Type mismatch` | 类型不匹配 | 检查类型或添加类型转换 |
| `Cannot modify immutable variable` | 修改 let 变量 | 改用 var 声明 |
| `Recursive struct` | struct 递归定义 | 使用 class 代替 |

## 文档查询

如需查询详细的 API 文档，请读取本 skill 目录下的 docs/ 文件夹：
- `docs/syntax/` - 详细语法文档
- `docs/stdlib/` - 标准库 API
- `docs/tools/` - 工具链使用
- `docs/examples/` - 完整示例

---

*基于 CangjieCorpus 构建，内容遵循 CC-BY-4.0 许可证*


---

# Extended Documentation

## Table of Contents

- [Syntax Reference](#syntax-reference)
- [Standard Library API](#standard-library-api)
- [Tools Guide](#tools-guide)
- [Examples](#examples)


## Syntax Reference

<details>
<summary>Click to expand file list</summary>

- `Appendix/compile_options.md`
- `Appendix/keyword.md`
- `Appendix/linux_toolchain_install.md`
- `Appendix/operator.md`
- `Appendix/operator_function.md`
- `Appendix/runtime_env.md`
- `Appendix/tokenkind_type.md`
- `Basic_IO/basic_IO_overview.md`
- `Basic_IO/basic_IO_process_stream.md`
- `Basic_IO/basic_IO_source_stream.md`
- `FFI/cangjie-c.md`
- `Macro/Tokens_types_and_quote_expressions.md`
- `Macro/builtin_compilation_flags.md`
- `Macro/compiling_error_reporting_and_debugging.md`
- `Macro/defining_and_importing_macro_package.md`
- `Macro/implementation_of_macros.md`
- `Macro/macro_introduction.md`
- `Macro/pratical_case.md`
- `Macro/sytax_node.md`
- `Net/net_http.md`
- `Net/net_overview.md`
- `Net/net_socket.md`
- `Net/net_websocket.md`
- `basic_data_type/array.md`
- `basic_data_type/basic_operators.md`
- `basic_data_type/bool.md`
- `basic_data_type/characters.md`
- `basic_data_type/float.md`
- `basic_data_type/integer.md`
- `basic_data_type/nothing.md`
- `basic_data_type/range.md`
- `basic_data_type/strings.md`
- `basic_data_type/tuple.md`
- `basic_data_type/unit.md`
- `basic_programming_concepts/expression.md`
- `basic_programming_concepts/function.md`
- `basic_programming_concepts/identifier.md`
- `basic_programming_concepts/program_structure.md`
- `class_and_interface/class.md`
- `class_and_interface/interface.md`
- `class_and_interface/prop.md`
- `class_and_interface/subtype.md`
- `class_and_interface/typecast.md`
- `collections/collection_arraylist.md`
- `collections/collection_hashmap.md`
- `collections/collection_hashset.md`
- `collections/collection_iterable_collections.md`
- `collections/collection_overview.md`
- `compile_and_build/cjc_usage.md`
- `compile_and_build/cjpm_usage_OHOS.md`
- `compile_and_build/conditional_compilation.md`
- `concurrency/concurrency_overview.md`
- `concurrency/create_thread.md`
- `concurrency/sleep.md`
- `concurrency/sync.md`
- `concurrency/terminal_thread.md`
- `concurrency/use_thread.md`
- `deploy_and_run/run_cjnative.md`
- `deploy_and_run/runtime_deploy_cjnative.md`
- `enum_and_pattern_match/enum.md`
- `enum_and_pattern_match/match.md`
- `enum_and_pattern_match/option_type.md`
- `enum_and_pattern_match/other.md`
- `enum_and_pattern_match/pattern_overview.md`
- `enum_and_pattern_match/pattern_refutability.md`
- `error_handle/common_runtime_exceptions.md`
- `error_handle/exception_overview.md`
- `error_handle/handle.md`
- `error_handle/use_option.md`
- `extension/access_rules.md`
- `extension/direct_extension.md`
- `extension/extend_overview.md`
- `extension/interface_extension.md`
- `first_understanding/basic.md`
- `first_understanding/hello_world.md`
- `first_understanding/install_Community.md`
- `function/call_functions.md`
- `function/closure.md`
- `function/const_func_and_eval.md`
- `function/define_functions.md`
- `function/first_class_citizen.md`
- `function/function_call_desugar.md`
- `function/function_overloading.md`
- `function/lambda.md`
- `function/nested_functions.md`
- `function/operator_overloading.md`
- `generic/generic_class.md`
- `generic/generic_constraint.md`
- `generic/generic_enum.md`
- `generic/generic_function.md`
- `generic/generic_interface.md`
- `generic/generic_overview.md`
- `generic/generic_struct.md`
- `generic/generic_subtype.md`
- `generic/typealias.md`
- `package/entry.md`
- `package/import.md`
- `package/package_name.md`
- `package/package_overview.md`
- `package/toplevel_access.md`
- `reflect_and_annotation/anno.md`
- `reflect_and_annotation/dynamic_feature.md`
- `struct/create_instance.md`
- `struct/define_struct.md`
- `struct/mut.md`

</details>

### Appendix/compile_options.md

# `cjc` 编译选项

本章介绍常用的 `cjc` 编译选项。若某一选项同时适用于 `cjc-frontend`，则该选项会有 <sup>[frontend]</sup> 上标；若该选项在 `cjc-frontend` 下行为与 `cjc` 不同，选项会有额外说明。

- 两个横杠开头的选项为长选项，如 `--xxxx`。
  如果长选项有可选参数，那么选项和参数之间需要用等号连接，如 `--xxxx=<value>`。
  如果长选项有必选参数，那么选项和参数之间既可以用空格隔开，也可以用等号连接，如 `--xxxx <value>` 与 `--xxxx=<value>` 等价。

- 一个横杠开头的选项为短选项，如 `-x`。
  对于短选项，如果其后有参数，选项和参数之间可以用空格隔开，也可以不隔开，如 `-x <value>` 与 `-x<value>` 等价。

## 基本选项

### `--output-type=[exe|staticlib|dylib]` <sup>[frontend]</sup>

指定输出文件的类型。`exe` 模式下会生成可执行文件，`staticlib` 模式下会生成静态库文件（ `.a` 文件），`dylib` 模式下会生成动态库文件（Linux 平台为 `.so` 文件、Windows 平台为 `.dll` 文件，macOS 平台为 `.dylib` 文件）。

`cjc` 默认为 `exe` 模式。

除了可以将 `.cj` 文件编译成一个可执行文件以外，也可以将其编译成一个静态或者是动态的链接库，例如使用：

```shell
$ cjc tool.cj --output-type=dylib
```

可以将 `tool.cj` 编译成一个动态链接库，在 Linux 平台上，`cjc` 会生成一个名为 `libtool.so` 的动态链接库文件。

**值得注意的是**，若编译可执行程序时链接了仓颉的动态库文件，必须同时指定 `--dy-std` 与 `--dy-libs` 选项，详情请见 [`--dy-std` 选项说明](#--dy-std)。

<sup>[frontend]</sup> 在 `cjc-frontend` 中，编译流程仅进行至 `LLVM IR`，因此输出总是 `.bc` 文件，但不同的 `--output-type` 类型仍会影响前端编译的策略。

### `--package`, `-p` <sup>[frontend]</sup>

编译包，使用此选项时需要指定一个目录作为输入，目录中的源码文件需要属于同一个包。

假设有文件 `log/printer.cj`：

```cangjie
package log

public func printLog(message: String) {
    println("[Log]: ${message}")
}
```

与文件 `main.cj`:

```cangjie
import log.*

main() {
    printLog("Everything is great")
}
```

可以使用

```shell
$ cjc -p log --output-type=staticlib
```

来编译 `log` 包，`cjc` 会在当前目录下生成一个 `liblog.a` 文件。

可以使用 `liblog.a` 文件来编译 `main.cj` ，编译命令如下：

```shell
$ cjc main.cj liblog.a
```

`cjc` 会将 `main.cj` 与 `liblog.a` 一同编译成一个可执行文件 `main` 。

### `--module-name <value>` <sup>[frontend]</sup>

指定要编译的模块的名称。

假设有文件 `my_module/src/log/printer.cj`：

```cangjie
package log

public func printLog(message: String) {
    println("[Log]: ${message}")
}
```

与文件 `main.cj`:

```cangjie
import my_module.log.*

main() {
    printLog("Everything is great")
}
```

可以使用

```shell
$ cjc -p my_module/src/log --module-name my_module --output-type=staticlib -o my_module/liblog.a
```

来编译 `log` 包并指定其模块名为 `my_module`，`cjc` 会在 `my_module` 目录下生成一个 `my_module/liblog.a` 文件。

然后可以使用 `liblog.a` 文件来编译导入了 `log` 包的 `main.cj` ，编译命令如下：

```shell
$ cjc main.cj my_module/liblog.a
```

`cjc` 会将 `main.cj` 与 `liblog.a` 一同编译成一个可执行文件 `main` 。

### `--output <value>`, `-o <value>`, `-o<value>` <sup>[frontend]</sup>

指定输出文件的路径，编译器的输出将被写入指定文件。

例如，以下命令会将输出的可执行文件名称指定为 `a.out`。

```shell
cjc main.cj -o a.out
```

### `--library <value>`, `-l <value>`, `-l<value>`

指定要链接的库文件。

给定的库文件会被直接传给链接器，此编译选项一般需要和 `--library-path <value>` 配合使用。

文件名的格式应为 `lib[arg].[extension]`。当需要链接库 `a` 时，可以使用选项 `-l a`，库文件搜索目录下的 `liba.a`、`liba.so`（或链接 Windows 目标程序时会搜索 `liba.dll`）等文件会被链接器搜索到并根据需要被链接至最终输出中。

### `--library-path <value>`, `-L <value>`, `-L<value>`

指定要链接的库文件所在的目录。

使用 `--library <value>` 选项时，通常也需要使用此选项来指定要链接的库文件所在的目录。

`--library-path <value>` 指定的路径会被加入链接器的库文件搜索路径。此外，环境变量 `LIBRARY_PATH` 中指定的路径也会被加入链接器的库文件搜索路径中，通过 `--library-path` 指定的路径会比 `LIBRARY_PATH` 中的路径拥有更高的优先级。

假设有从以下 C 语言源文件通过 C 语言编译器编译得到的动态库文件 `libcProg.so`，

```c
#include <stdio.h>

void printHello() {
    printf("Hello World\n");
}
```

与仓颉文件 `main.cj`：

```cangjie
foreign func printHello(): Unit

main(): Int64 {
  unsafe {
    printHello()
  }
  return 0
}
```

可以使用

```shell
cjc main.cj -L . -l cProg
```

来编译 `main.cj` 并指定要链接的 `cProg` 库，这里 `cjc` 会输出一个可执行文件 `main`。

执行 `main` 会有如下输出：

```shell
$ LD_LIBRARY_PATH=.:$LD_LIBRARY_PATH ./main
Hello World
```

**值得注意的是**，由于使用了动态库文件，这里需要将库文件所在目录加入 `$LD_LIBRARY_PATH` 以保证 `main` 能够在执行时进行动态链接。

### `-g` <sup>[frontend]</sup>

生成带有调试信息的可执行文件或库文件。

> **注意：**
>
> `-g` 只能配合 `-O0` 使用，如果使用更高的优化级别可能会导致调试功能出现异常。

### `--trimpath <value>` <sup>[frontend]</sup>

移除调试信息中源文件路径信息的前缀。

编译仓颉代码时，`cjc` 会保存源文件（`.cj` 文件）的绝对路径信息以在运行时提供调试与异常信息。

使用此选项可以将指定的路径前缀从源文件路径信息中移除，`cjc` 的输出文件中的源文件路径信息不会包含用户指定的部分。

可以多次使用 `--trimpath` 指定多个不同的路径前缀；对于每个源文件路径，编译器会将第一个匹配到的前缀从路径中移除。

### `--coverage` <sup>[frontend]</sup>

生成支持统计代码覆盖率的可执行程序。编译器会为每一个编译单元生成一个后缀名为 `gcno` 的代码信息文件。在执行程序后，每一个编译单元都会生成一个后缀名为 `gcda` 的执行统计文件。根据这两个文件，配合使用 `cjcov` 工具可以生成本次执行下的代码覆盖率报表。

> **注意：**
>
> `--coverage` 只能配合 `-O0` 使用，如果使用更高的优化级别，编译器将告警并强制使用 `-O0`。`--coverage` 用于编译生成可执行程序，如果用于生成静态库或者动态库，那么在最终使用该库时可能出现链接错误。

### `--int-overflow=[throwing|wrapping|saturating]` <sup>[frontend]</sup>

指定固定精度整数运算的溢出策略，默认为 `throwing`。

- `throwing` 策略下，整数运算溢出时会抛出异常。
- `wrapping` 策略下，整数运算溢出时会回转至对应固定精度整数的另一端。
- `saturating` 策略下，整数运算溢出时会选择对应固定精度的极值作为结果。

### `--diagnostic-format=[default|noColor|json]` <sup>[frontend]</sup>

> **注意：**
>
> Windows 版本暂不支持输出带颜色渲染的错误信息。

指定错误信息的输出格式，默认为 `default` 。

- `default` 错误信息默认格式输出（带颜色）
- `noColor` 错误信息默认格式输出（无颜色）
- `json` 错误信息`json`格式输出

### `--verbose`, `-V` <sup>[frontend]</sup>

`cjc` 会打印出编译器版本信息、工具链依赖的相关信息以及编译过程中执行的命令。

### `--help`, `-h` <sup>[frontend]</sup>

打印可用的编译选项。

使用此选项时，编译器仅会打印编译选项相关信息，不会对任何输入文件进行编译。

### `--version`, `-v` <sup>[frontend]</sup>

打印编译器版本信息。

使用此选项时，编译器仅会打印版本信息，不会对任何输入文件进行编译。

### `--save-temps <value>`

保留编译过程中生成的中间文件并保存至 `<value>` 路径下。

编译器会保留编译过程中生成的 `.bc`、`.o` 等中间文件。

### `--import-path <value>` <sup>[frontend]</sup>

指定导入模块的 AST 文件的搜索路径。

假设已有以下目录结构，`libs/myModule` 目录中包含 `myModule` 模块的库文件和 `log` 包的 AST 导出文件：

```text
.
├── libs
|   └── myModule
|       ├── log.cjo
|       └── libmyModule.a
└── main.cj
```

且有如下 `main.cj` 文件：

```cangjie
import myModule.log.printLog

main() {
    printLog("Everything is great")
}
```

可以通过使用 `--import-path ./libs` 来将 `./libs` 加入导入模块的 AST 文件搜索路径，`cjc` 会使用 `./libs/myModule/log.cjo` 文件来对 `main.cj` 文件进行语义检查与编译。

`--import-path` 提供与 `CANGJIE_PATH` 环境变量相同的功能，但通过 `--import-path` 设置的路径拥有更高的优先级。

### `--scan-dependency` <sup>[frontend]</sup>

通过 `--scan-dependency` 指令可以获得指定包源码或者一个包的 `cjo` 文件对于其他包的直接依赖以及其他信息，以 `json` 格式输出。

```cangjie
// this file is placed under directory pkgA
macro package pkgA
import pkgB.*
import std.io.*
import pkgB.subB.*
```

```shell
cjc --scan-dependency --package pkgA
```

或

```shell
cjc --scan-dependency pkgA.cjo
```

```json
{
  "package": "pkgA",
  "isMacro": true,
  "dependencies": [
    {
      "package": "pkgB",
      "isStd": false,
      "imports": [
        {
          "file": "pkgA/pkgA.cj",
          "begin": {
            "line": 2,
            "column": 1
          },
          "end": {
            "line": 2,
            "column": 14
          }
        }
      ]
    },
    {
      "package": "pkgB.subB",
      "isStd": false,
      "imports": [
        {
          "file": "pkgA/pkgA.cj",
          "begin": {
            "line": 4,
            "column": 1
          },
          "end": {
            "line": 4,
            "column": 19
          }
        }
      ]
    },
    {
      "package": "std.io",
      "isStd": true,
      "imports": [
        {
          "file": "pkgA/pkgA.cj",
          "begin": {
            "line": 3,
            "column": 1
          },
          "end": {
            "line": 3,
            "column": 16
          }
        }
      ]
    }
  ]
}
```

### `--no-sub-pkg` <sup>[frontend]</sup>

表明当前编译包没有子包。

开启该选项后，编译器可以进一步缩减 code size 大小。

### `--warn-off`, `-Woff <value>` <sup>[frontend]</sup>

关闭编译期出现的全部或部分警告。

`<value>` 可以为 `all` 或者一个设定好的警告组别。当参数为 `all` 时，对于编译过程中生成的所有警告，编译器都不会打印；当参数为其他设定好的组别时，编译器将不会打印编译过程中生成的该组别警告。

在打印每个警告时，会有一行 `#note` 提示该警告属于什么组别并如何关闭它，可以通过 `--help` 打印所有可用的编译选项参数，来查阅具体的组别名称。

### `--warn-on`, `-Won <value>` <sup>[frontend]</sup>

开启编译期出现的全部或部分警告。

`--warn-on` 的 `<value>` 与 `--warn-off` 的 `<value>` 取值范围相同，`--warn-on` 通常与 `--warn-off` 组合使用；比如，可以通过设定 `-Woff all -Won <value>` 来仅允许组别为 `<value>` 的警告被打印。

**特别要注意的是**，`--warn-on` 与 `--warn-off` 在使用上顺序敏感；针对同一组别，后设定的选项会覆盖之前选项的设定，比如，调换上例中两个编译选项的位置，使其变为 `-Won <value> -Woff all`，其效果将变为关闭所有警告。

### `--error-count-limit <value>` <sup>[frontend]</sup>

限制编译器打印错误个数的上限。

参数 `<value>` 可以为 `all` 或一个非负整数。当参数为 `all` 时，编译器会打印编译过程中生成的所有错误；当参数为非负整数 `N` 时，编译器最多会打印 `N` 个错误。此选项默认值为 8。

### `--output-dir <value>` <sup>[frontend]</sup>

控制编译器生成的中间文件与最终文件的保存目录。

控制编译器生成的中间文件的保存目录，例如 `.cjo` 文件。当指定 `--output-dir <path1>` 时也指定了 `--output <path2>`，则中间文件会被保存至 `<path1>`，最终输出会被保存至 `<path1>/<path2>` 。

> **注意：**
>
> 同时指定此选项与 `--output` 选项时，`--output` 选项的参数必须是一个相对路径。

### `--static`

静态链接仓颉库。

此选项仅在编译可执行文件时生效。

**值得注意的是：**

`--static` 选项仅适用于 Linux 平台，在其他平台不生效。

### `--static-std`

静态链接仓颉库的 std 模块。

此选项仅在编译动态链接库或可执行文件时生效。

当编译可执行程序时（即指定了 `--output-type=exe` 时），`cjc` 默认静态链接仓颉库的 std 模块。

### <span id="--dy-std">`--dy-std`

动态链接仓颉库的 std 模块。

此选项仅在编译动态链接库或可执行文件时生效。

当编译动态库时（即指定了 `--output-type=dylib` 时），`cjc` 默认动态链接仓颉库的 std 模块。

**值得注意的是：**

1. `--static-std` 和 `--dy-std` 选项一起使用时，仅最后一个选项生效。
2. `--dy-std` 与 `--static-libs` 选项不可一起使用，否则会报错。
3. 当编译可执行程序时链接了仓颉动态库（即通过 `--output-type=dylib` 选项编译的产物），必须显式指定 `--dy-std` 选项动态链接标准库，否则可能导致程序集中出现多份标准库，最终可能会导致运行时问题。

### `--static-libs`

静态链接仓颉库中除 std 及运行时模块外的其他模块。

此选项仅在编译动态链接库或可执行文件时生效。`cjc` 默认静态链接仓颉库中除 std 及运行时模块外的其他模块。

### `--dy-libs`

动态链接仓颉库非 std 的其他模块。

此选项仅在编译动态链接库或可执行文件时生效。

**值得注意的是：**

1. `--static-libs` 和 `--dy-libs` 选项一起使用时，仅最后一个选项生效；
2. `--static-std` 与 `--dy-libs` 选项不可一起使用，否则会报错；
3. `--dy-std` 单独使用时，会默认生效 `--dy-libs` 选项，并有相关告警信息提示；
4. `--dy-libs` 单独使用时，会默认生效 `--dy-std` 选项，并有相关告警信息提示。

### `--stack-trace-format=[default|simple|all]`

指定异常调用栈打印格式，用来控制异常抛出时的栈帧信息显示，默认为 `default` 格式。

异常调用栈的格式说明如下：

- `default` 格式：`省略泛型参数的函数名 (文件名:行号)`
- `simple` 格式： `文件名:行号`
- `all` 格式：`完整的函数名 (文件名:行号)`

### `--lto=[full|thin]`

使能且指定 `LTO` （`Link Time Optimization` 链接时优化）优化编译模式。

**值得注意的是：**

1. `Windows` 以及 `macOS` 平台不支持该功能；
2. 当使能且指定 `LTO` （`Link Time Optimization` 链接时优化）优化编译模式时，不允许同时使用如下优化编译选项：`-Os`、`-Oz`。

`LTO` 优化支持两种编译模式：

- `--lto=full`：`full LTO` 将所有编译模块合并到一起，在全局上进行优化，这种方式可以获得最大的优化潜力，同时也需要更长的编译时间。
- `--lto=thin`：相比于 `full LTO`，`thin LTO` 在多模块上使用并行优化，同时默认支持链接时增量编译，编译时间比 `full LTO` 短，因为失去了更多的全局信息，所以优化效果不如 `full LTO`。

    - 通常情况下优化效果对比：`full LTO` **>** `thin LTO` **>** 常规静态链接编译。
    - 通常情况下编译时间对比：`full LTO` **>** `thin LTO` **>** 常规静态链接编译。

`LTO` 优化使用场景：

1. 使用以下命令编译可执行文件。

    ```shell
    $ cjc test.cj --lto=full
    or
    $ cjc test.cj --lto=thin
    ```

2. 使用以下命令编译 `LTO` 模式下需要的静态库（`.bc` 文件），并且使用该库文件参与可执行文件编译。

    ```shell
    # 生成的静态库为 .bc 文件
    $ cjc pkg.cj --lto=full --output-type=staticlib -o libpkg.bc
    # .bc 文件和源文件一起输入给仓颉编译器编译可执行文件
    $ cjc test.cj libpkg.bc --lto=full
    ```

    > **注意：**
    >
    > `LTO` 模式下的静态库（`.bc` 文件）输入时需要将该文件的路径输入仓颉编译器。

3. 在 `LTO` 模式下，静态链接标准库（`--static-std` & `--static-libs`）时，标准库的代码也会参与 `LTO` 优化，并静态链接到可执行文件；动态链接标准库（`--dy-std` & `--dy-libs`）时，在 `LTO` 模式下依旧使用标准库中的动态库参与链接。

    ```shell
    # 静态链接，标准库代码也参与 LTO 优化
    $ cjc test.cj --lto=full --static-std
    # 动态链接，依旧使用动态库参与链接，标准库代码不会参与 LTO 优化
    $ cjc test.cj --lto=full --dy-std
    ```

### `--pgo-instr-gen`

使能插桩编译，生成携带插桩信息的可执行程序。

编译 macOS 与 Windows 目标时暂不支持使用该功能。

`PGO`（全称 `Profile-Guided Optimization`）是一种常用的编译优化技术，通过使用运行时 profiling 信息进一步提升程序性能。`Instrumentation-based PGO` 是使用插桩信息的一种 `PGO` 优化手段，它通常包含三个步骤：

1. 编译器对源码插桩编译，生成插桩后的可执行程序（instrumented program）；
2. 运行插桩后的可执行程序，生成配置文件；
3. 编译器使用配置文件，再次对源码进行编译。

```shell
# 生成支持源码执行信息统计（携带插桩信息）的可执行程序 test
$ cjc test.cj --pgo-instr-gen -o test
# 运行可执行程序 test 结束后，生成 default.profraw 配置文件
$ ./test
```

### `--pgo-instr-use=<.profdata>`

使用指定 `profdata` 配置文件指导编译并生成优化后的可执行程序。

编译 macOS 目标时暂不支持使用该功能。

> **注意：**
>
> `--pgo-instr-use` 编译选项仅支持格式为 `profdata` 的配置文件。可使用 `llvm-profdata` 工具可将 `profraw` 配置文件转换为 `profdata` 配置文件。

```shell
# 将 `profraw` 文件转换为 `profdata` 文件。
$ LD_LIBRARY_PATH=$CANGJIE_HOME/third_party/llvm/lib:$LD_LIBRARY_PATH $CANGJIE_HOME/third_party/llvm/bin/llvm-profdata merge default.profraw -o default.profdata
# 使用指定 `default.profdata` 配置文件指导编译并生成优化后的可执行程序 `testOptimized`
$ cjc test.cj --pgo-instr-use=default.profdata -o testOptimized
```

### `--target <value>` <sup>[frontend]</sup>

指定编译的目标平台的 triple。

参数 `<value>` 一般为符合以下格式的字符串：`<arch>(-<vendor>)-<os>(-<env>)`。其中：

- `<arch>` 表示目标平台的系统架构，例如 `aarch64`，`x86_64` 等；
- `<vendor>` 表示开发目标平台的厂商，常见的例如 `pc`，`apple` 等，在没有明确平台厂商或厂商不重要的情况下也经常写作 `unknown` 或直接省略；
- `<os>` 表示目标平台的操作系统，例如 `Linux`，`Win32` 等；
- `<env>` 表示目标平台的 ABI 或标准规范，用于更细粒度地区分同一操作系统的不同运行环境，例如 `gnu`，`musl` 等。在操作系统不需要根据 `<env>` 进行更细地区分的时候，此项也可以省略。

目前，`cjc` 已支持交叉编译的本地平台和目标平台如下表所示：

| 本地平台 (host)    | 目标平台 (target)   |
| ------------------ | ------------------ |
| x86_64-linux-gnu   | x86_64-windows-gnu     |
| aarch64-linux-gnu   | x86_64-windows-gnu     |

在使用 `--target` 指定目标平台进行交叉编译之前，请准备好对应目标平台的交叉编译工具链，以及可以在本地平台上运行的、向该目标平台编译的对应 Cangjie SDK 版本。

### `--target-cpu <value>`

> **注意：**
>
> 该选项为实验性功能，使用该功能生成的二进制可能存在潜在的运行时问题，请注意使用该选项的风险。此选项必须配合 `--experimental` 选项一同使用。

指定编译目标的 CPU 类型。

指定编译目标的 CPU 类型时，编译器在生成二进制时会尝试使用该 CPU 类型特有的扩展指令集，并尝试应用适用于该 CPU 类型的优化。为某个特定 CPU 类型生成的二进制通常会失去可移植性，该二进制可能无法在其他（拥有相同架构指令集的）CPU 上运行。

该选项支持以下经过测试的 CPU 类型：

**x86-64 架构：**

- generic

**aarch64 架构：**

- generic
- tsv110

`generic` 为通用 CPU 类型，指定 `generic` 时编译器会生成适用于该架构的通用指令，这样生成的二进制在操作系统和二进制本身的动态依赖一致的前提下，可以在基于该架构的各种 CPU 上运行，无关于具体的 CPU 类型。`--target-cpu` 选项的默认值为 `generic`。

该选项还支持以下 CPU 类型，但以下 CPU 类型未经过测试验证，请注意使用以下 CPU 类型生成的二进制可能会存在运行时问题。

**x86-64 架构：**

- alderlake
- amdfam10
- athlon
- athlon-4
- athlon-fx
- athlon-mp
- athlon-tbird
- athlon-xp
- athlon64
- athlon64-sse3
- atom
- barcelona
- bdver1
- bdver2
- bdver3
- bdver4
- bonnell
- broadwell
- btver1
- btver2
- c3
- c3-2
- cannonlake
- cascadelake
- cooperlake
- core-avx-i
- core-avx2
- core2
- corei7
- corei7-avx
- geode
- goldmont
- goldmont-plus
- haswell
- i386
- i486
- i586
- i686
- icelake-client
- icelake-server
- ivybridge
- k6
- k6-2
- k6-3
- k8
- k8-sse3
- knl
- knm
- lakemont
- nehalem
- nocona
- opteron
- opteron-sse3
- penryn
- pentium
- pentium-m
- pentium-mmx
- pentium2
- pentium3
- pentium3m
- pentium4
- pentium4m
- pentiumpro
- prescott
- rocketlake
- sandybridge
- sapphirerapids
- silvermont
- skx
- skylake
- skylake-avx512
- slm
- tigerlake
- tremont
- westmere
- winchip-c6
- winchip2
- x86-64
- x86-64-v2
- x86-64-v3
- x86-64-v4
- yonah
- znver1
- znver2
- znver3

**aarch64 架构：**

- a64fx
- ampere1
- apple-a10
- apple-a11
- apple-a12
- apple-a13
- apple-a14
- apple-a7
- apple-a8
- apple-a9
- apple-latest
- apple-m1
- apple-s4
- apple-s5
- carmel
- cortex-a34
- cortex-a35
- cortex-a510
- cortex-a53
- cortex-a55
- cortex-a57
- cortex-a65
- cortex-a65ae
- cortex-a710
- cortex-a72
- cortex-a73
- cortex-a75
- cortex-a76
- cortex-a76ae
- cortex-a77
- cortex-a78
- cortex-a78c
- cortex-r82
- cortex-x1
- cortex-x1c
- cortex-x2
- cyclone
- exynos-m3
- exynos-m4
- exynos-m5
- falkor
- kryo
- neoverse-512tvb
- neoverse-e1
- neoverse-n1
- neoverse-n2
- neoverse-v1
- saphira
- thunderx
- thunderx2t99
- thunderx3t110
- thunderxt81
- thunderxt83
- thunderxt88

除以上可选 CPU 类型外，该选项还可以使用 `native` 作为当前 CPU 类型。编译器会尝试识别当前机器的 CPU 类型，并使用该 CPU 类型作为目标类型生成二进制文件。

### `--toolchain <value>`, `-B <value>`, `-B<value>`

指定编译工具链中，二进制文件存放的路径。

这些二进制文件包括编译器、链接器、工具链提供的 C 运行时目标文件（如 `crt0.o`、 `crti.o` 等）。

在准备好编译工具链后，可以在将其存放在一个自定义路径，然后通过 `--toolchain <value>` 向编译器传入该路径，即可让编译器调用到该路径下的二进制文件进行交叉编译。

### `--sysroot <value>`

指定编译工具链的根目录路径。

对于目录结构固定的交叉编译工具链，如果没有指定该目录以外的二进制和动态库、静态库文件路径的需求，可以直接使用 `--sysroot <value>` 向编译器传入工具链的根目录路径，编译器会根据目标平台种类分析对应的目录结构，自动搜索所需的二进制文件和动态库、静态库文件。使用该选项后，无需再指定 `--toolchain`、`--library-path` 参数。

如果向 `triple` 为 `arch-os-env` 的平台进行交叉编译，且交叉编译工具链有以下目录结构：

```text
/usr/sdk/arch-os-env
├── bin
|   ├── arch-os-env-gcc (交叉编译器)
|   ├── arch-os-env-ld  (链接器)
|   └── ...
├── lib
|   ├── crt1.o          (C 运行时目标文件)
|   ├── crti.o
|   ├── crtn.o
|   ├── libc.so         (动态库)
|   ├── libm.so
|   └── ...
└── ...
```

对于仓颉源文件 `hello.cj` ，可以使用以下命令，将 `hello.cj` 交叉编译至 `arch-os-env` 平台：

```shell
cjc --target=arch-os-env --toolchain /usr/sdk/arch-os-env/bin --toolchain /usr/sdk/arch-os-env/lib --library-path /usr/sdk/arch-os-env/lib hello.cj -o hello
```

也可以使用简写的参数：

```shell
cjc --target=arch-os-env -B/usr/sdk/arch-os-env/bin -B/usr/sdk/arch-os-env/lib -L/usr/sdk/arch-os-env/lib hello.cj -o hello
```

如果该工具链的目录符合惯例的目录结构，可以不使用 `--toolchain`、`--library-path` 参数，直接使用以下命令：

```shell
cjc --target=arch-os-env --sysroot /usr/sdk/arch-os-env hello.cj -o hello
```

### `--strip-all`, `-s`

编译可执行文件或动态库时，指定该选项以删除输出文件中的符号表。

### `--discard-eh-frame`

编译可执行文件或动态库时，指定该选项可以删除 eh_frame 段以及 eh_frame_hdr 段中的部分信息（涉及到 crt 的相关信息不作处理），减少可执行文件或动态库的大小，但会影响调试信息。

编译 macOS 目标时暂不支持使用该功能。

### `--set-runtime-rpath`

将仓颉运行时库所在目录的绝对路径写入到二进制的 RPATH/RUNPATH 段中，使用该选项后在构建所在环境中运行该仓颉程序时无需再使用 LD_LIBRARY_PATH (适用于 Linux 平台) 或 DYLD_LIBRARY_PATH (适用于 macOS 平台) 设置仓颉运行时库目录。

编译 Windows 目标时不支持使用该功能。

### `--link-options <value>`<sup>1</sup>

指定链接器选项。

`cjc` 会将该选项的参数透传给链接器。可用的参数会因系统或指定的链接器不同而不同。可以多次使用 `--link-options` 指定多个链接器选项。

<sup>1</sup> 上标表示链接器透传选项可能会因为链接器的不同而不同，具体支持的选项请查阅链接器文档。

### `--disable-reflection`

关闭反射选项，即编译过程中不生成相关反射信息。

> **注意：**
>
> 交叉编译至 aarch64-linux-ohos 目标时，默认关闭反射信息，该选项不生效。

### `--profile-compile-time` <sup>[frontend]</sup>

打印各编译阶段的时间消耗数据。

### `--profile-compile-memory` <sup>[frontend]</sup>

打印各编译阶段的内存消耗数据。

## 单元测试选项

### `--test` <sup>[frontend]</sup>

`unittest` 测试框架提供的入口，由宏自动生成。当使用 `cjc --test` 选项编译时，程序入口不再是 `main`，而是 `test_entry`。unittest 测试框架的使用方法请参见《仓颉编程语言标准库 API》文档。

对于 `pkgc` 目录下的仓颉文件 `a.cj`:
<!-- run -->

```cangjie
import std.unittest.*
import std.unittest.testmacro.*

@Test
public class TestA {
    @TestCase
    public func case1(): Unit {
        print("case1\n")
    }
}
```

可以在 `pkgc` 目录下使用：

```shell
cjc a.cj --test
```

来编译 `a.cj` ，执行 `main` 会有如下输出：

> **注意：**
>
> 不保证用例每次执行的用时都相同。

```cangjie
case1
--------------------------------------------------------------------------------------------------
TP: default, time elapsed: 29710 ns, Result:
    TCS: TestA, time elapsed: 26881 ns, RESULT:
    [ PASSED ] CASE: case1 (16747 ns)
Summary: TOTAL: 1
    PASSED: 1, SKIPPED: 0, ERROR: 0
    FAILED: 0
--------------------------------------------------------------------------------------------------
```

对于如下目录结构：

```text
application
├── src
├── pkgc
|   ├── a1.cj
|   └── a2.cj
└── a3.cj
```

可以在 `application`目录下使用 `-p` 编译选项配合编译整包：

```shell
cjc pkgc --test -p
```

来编译整个 `pkgc` 包下的测试用例 `a1.cj` 和 `a2.cj`。

```cangjie
/*a1.cj*/
package a

import std.unittest.*
import std.unittest.testmacro.*

@Test
public class TestA {
    @TestCase
    public func caseA(): Unit {
        print("case1\n")
    }
}
```

```cangjie
/*a2.cj*/
package a

import std.unittest.*
import std.unittest.testmacro.*

@Test
public class TestB {
    @TestCase
    public func caseB(): Unit {
        throw IndexOutOfBoundsException()
    }
}
```

执行 `main` 会有如下输出（**输出信息仅供参考**）：

```cangjie
case1
--------------------------------------------------------------------------------------------------
TP: a, time elapsed: 367800 ns, Result:
    TCS: TestA, time elapsed: 16802 ns, RESULT:
    [ PASSED ] CASE: caseA (14490 ns)
    TCS: TestB, time elapsed: 347754 ns, RESULT:
    [ ERROR  ] CASE: caseB (345453 ns)
    REASON: An exception has occurred:IndexOutOfBoundsException
        at std/core.Exception::init()(std/core/exception.cj:23)
        at std/core.IndexOutOfBoundsException::init()(std/core/index_out_of_bounds_exception.cj:9)
        at a.TestB::caseB()(/home/houle/cjtest/application/pkgc/a2.cj:7)
        at a.lambda.1()(/home/houle/cjtest/application/pkgc/a2.cj:7)
        at std/unittest.TestCases::execute()(std/unittest/test_case.cj:92)
        at std/unittest.UT::run(std/unittest::UTestRunner)(std/unittest/test_runner.cj:194)
        at std/unittest.UTestRunner::doRun()(std/unittest/test_runner.cj:78)
        at std/unittest.UT::run(std/unittest::UTestRunner)(std/unittest/test_runner.cj:200)
        at std/unittest.UTestRunner::doRun()(std/unittest/test_runner.cj:78)
        at std/unittest.UT::run(std/unittest::UTestRunner)(std/unittest/test_runner.cj:200)
        at std/unittest.UTestRunner::doRun()(std/unittest/test_runner.cj:75)
        at std/unittest.entryMain(std/unittest::TestPackage)(std/unittest/entry_main.cj:11)
Summary: TOTAL: 2
    PASSED: 1, SKIPPED: 0, ERROR: 1
    FAILED: 0
--------------------------------------------------------------------------------------------------
```

### `--test-only` <sup>[frontend]</sup>

`--test-only` 选项用于单独编译包的测试部分。

如果启用此选项，编译器将仅编译包中的测试文件（以 `_test.cj` 结尾）。

> **注意：**
>
> 使用此选项时，应单独以常规模式编译相同的包，然后通过 `-L`/`-l` 链接选项添加依赖，或在使用 `LTO` 选项时添加依赖的 `.bc` 文件。否则，编译器将报缺少依赖的符号的错误。

示例:

```cangjie
/*main.cj*/
package my_pkg

func concatM(s1: String, s2: String): String {
    return s1 + s2
}

main() {
    println(concatM("a", "b"))
    0
}
```

```cangjie
/*main_test.cj*/
package my_pkg

@Test
class Tests {
    @TestCase
    public func case1(): Unit {
        @Expect("ac", concatM("a", "c"))
    }
}
```

使用编译器编译的命令如下：

```shell
# Compile the production part of the package first, only `main.cj` file would be compiled here
cjc -p my_pkg --output-type=static -o=output/libmain.a
# Compile the test part of the package, Only `main_test.cj` file would be compiled here
cjc -p my_pkg --test-only -L output -lmain
```

### `--mock <on|off|runtime-error>` <sup>[frontend]</sup>

如果传递了 `on` ，则该包将使能 mock 编译，该选项允许在测试用例中 mock 该包中的类。`off` 是一种显式禁用 mock 的方法。

> **注意：**
>
> 在测试模式下（当使能 `--test` ）自动启用对此包的 mock 支持，不需要显式传递 `--mock` 选项。

`runtime-error` 仅在测试模式下可用（当使能 `--test` 时），它允许编译带有 mock 代码的包，但不在编译器中做任何 mock 相关的处理（这些处理可能会造成一些开销并影响测试的运行时性能）。这对于带有 mock 代码用例进行基准测试时可能是有用的。使用此编译选项时，避免编译带有 mock 代码的用例并运行测试，否则将抛出运行时异常。

## 宏选项

`cjc` 支持以下宏选项，关于宏的更多内容请参见[“宏”](./Chapter_15_Macro.md)章节。

### `--compile-macro` <sup>[frontend]</sup>

编译宏定义文件，生成默认的宏定义动态库文件。

### `--debug-macro` <sup>[frontend]</sup>

生成宏展开后的仓颉代码文件。该选项可用于调试宏展开功能。

### `--parallel-macro-expansion` <sup>[frontend]</sup>

开启宏展开并行。该选项可用于缩短宏展开编译时间。

## 条件编译选项

`cjc` 支持以下条件编译选项，关于条件编译的更多内容请参见[“条件编译”](../compile_and_build/conditional_compilation.md)。

### `--cfg <value>` <sup>[frontend]</sup>

指定自定义编译条件。

## 并行编译选项

`cjc` 支持以下并行编译选项，以获得更高的编译效率。

### `--jobs <value>`, `-j <value>` <sup>[frontend]</sup>

设置并行编译时所允许的最大并行数。其中 `value` 必须是一个合理的非负整数，当 `value` 大于硬件支持的最大并行能力时，编译器将以硬件支持的最大并行能力执行并行编译。

如果该编译选项未设置，编译器会基于硬件能力自动计算最大并行数。

> **注意：**
>
> `--jobs 1` 表示完全使用串行方式进行编译。

### `--aggressive-parallel-compile`, `--apc`, `--aggressive-parallel-compile=<value>`, `--apc=<value>` <sup>[frontend]</sup>

开启此选项后，编译器会采用更加激进的策略（可能会对优化造成影响，从而导致程序运行性能下降）执行激进并行编译，以便获得更高的编译效率。其中 `value` 是一个可选参数，表示激进并行编译部分允许的最大并行数：

- 如果使用 `value`，则 `value` 必须是一个合理的非负整数，当 `value` 大于硬件支持的最大并行能力时，编译器会基于硬件能力自动计算最大并行数。建议将 `value` 设置为小于硬件的物理核数的非负整数。
- 如果不使用 `value`，则激进并行编译默认开启，且激进并行编译部分的并行数与 `--jobs` 一致。

此外，如果两次编译同一份代码时此选项的 `value` 值不同，或此选项的开关状态不同，编译器不保证这两次编译的产物的二进制一致性。

激进并行编译的开启或关闭规则如下：

- 在以下场景中，激进并行编译将由编译器强制关闭，无法启用：

    - `--fobf-string`
    - `--fobf-const`
    - `--fobf-layout`
    - `--fobf-cf-flatten`
    - `--fobf-cf-bogus`
    - `--lto`
    - `--coverage`
    - 编译 Windows 目标
    - 编译 macOS 目标

- 若使用 `--aggressive-parallel-compile=<value>` 或 `--apc=<value>`，则激进并行编译的开关由 `value` 控制：

    - `value <= 1`：关闭激进并行编译。
    - `value > 1`：开启激进并行编译，且激进并行编译的并行数取决于 `value`。

- 若使用 `--aggressive-parallel-compile` 或 `--apc`，则激进并行编译默认开启，且激进并行编译的并行数与 `--jobs` 一致。

- 若该编译选项未设置，编译器将根据场景默认开启或关闭激进并行编译：

    - `-O0` 或 `-g`：激进并行编译将由编译器默认开启，且激进并行编译的并行数与 `--jobs` 一致；可以通过 `--aggressive-parallel-compile=<value>` 或 `--apc=<value>` 且 `value <= 1` 关闭激进并行编译。
    - 非 `-O0` 且非 `-g`：激进并行编译将由编译器默认关闭；可以通过 `--aggressive-parallel-compile=<value>` 或 `--apc=<value>` 且 `value > 1` 开启激进并行编译。

## 优化选项

### `--fchir-constant-propagation` <sup>[frontend]</sup>

开启 chir 常量传播优化。

### `--fno-chir-constant-propagation` <sup>[frontend]</sup>

关闭 chir 常量传播优化。

### `--fchir-function-inlining` <sup>[frontend]</sup>

开启 chir 函数内联优化。

### `--fno-chir-function-inlining` <sup>[frontend]</sup>

关闭 chir 函数内联优化。

### `--fchir-devirtualization` <sup>[frontend]</sup>

开启 chir 去虚函数调用优化。

### `--fno-chir-devirtualization` <sup>[frontend]</sup>

关闭 chir 去虚函数调用优化。

### `--fast-math` <sup>[frontend]</sup>

开启此选项后，编译器会对浮点数作一些激进且有可能损失精度的假设，以便优化浮点数运算。

### `-O<N>` <sup>[frontend]</sup>

使用参数指定的代码优化级别。

指定越高的优化级别，编译器会越多地进行代码优化以生成更高效的程序，同时也可能会需要更长的编译时间。

`cjc` 默认使用 O0 级别的代码优化。当前 `cjc` 支持如下优化级别：O0、O1、O2、Os、Oz。

当优化等级等于 2 时，`cjc` 除了进行对应的优化外，还会开启以下选项：

- `--fchir-constant-propagation`
- `--fchir-function-inlining`
- `--fchir-devirtualization`

当优化等级等于 s 时， `cjc`除了进行 O2 级别优化外，将针对 code size 进行优化。

当优化等级等于 z 时， `cjc`除了进行 Os 级别优化外，还将进一步缩减 code size 大小。

> **注意：**
>
> 当优化等级等于 s 或 z 时，不允许同时使用链接时优化编译选项 `--lto=[full|thin]`。

### `-O` <sup>[frontend]</sup>

使用 O1 级别的代码优化，等价于 `-O1`。

## 代码混淆选项

`cjc` 支持代码混淆功能，以提供对代码的额外安全保护，默认不开启。

`cjc` 支持以下代码混淆选项：

### `--fobf-string`

开启字符串混淆。

混淆代码中出现的字符串常量，攻击者无法静态直接读取二进制程序中的字符串数据。

### `--fno-obf-string`

关闭字符串混淆。

### `--fobf-const`

开启常量混淆。

混淆代码中使用的数值常量，将数值运算指令替换成等效的、更复杂的数值运算指令序列。

### `--fno-obf-const`

关闭常量混淆。

### `--fobf-layout`

开启外形混淆。

外形混淆功能会混淆代码中的符号（包括函数名和全局变量名）、路径名、代码行号和函数排布顺序。使用该编译选项后，`cjc` 会在当前目录生成符号映射输出文件 `*.obf.map`。如果配置了 `--obf-sym-output-mapping` 选项，则 `--obf-sym-output-mapping` 的参数值将作为 `cjc` 生成的符号映射输出文件名。符号映射输出文件中包含混淆前后符号的映射关系，使用符号映射输出文件可以解混淆被混淆过的符号。

> **注意：**
>
> 外形混淆功能和并行编译功能相互冲突，请勿同时开启。如果和并行编译同时开启，并行编译将失效。

### `--fno-obf-layout`

关闭外形混淆。

### `--obf-sym-prefix <string>`

指定外形混淆功能在混淆符号时添加的前缀字符串。

设置该选项后，所有被混淆符号都会加上该前缀。在编译混淆多个仓颉包时可能出现符号冲突的问题，可以使用该选项给不同的包指定不同的前缀，避免符号冲突。

### `--obf-sym-output-mapping <file>`

指定外形混淆的符号映射输出文件。

符号映射输出文件记录了符号的原始名称、混淆后的名称和所属文件路径。使用符号映射输出文件可以解混淆被混淆过的符号。

### `--obf-sym-input-mapping <file,...>`

指定外形混淆的符号映射输入文件。

外形混淆功能会使用这些文件中的映射关系对符号进行混淆。因此在编译存在调用关系的仓颉包，请使用被调用包的符号映射输出文件作为调用包混淆时的 `--obf-sym-input-mapping` 选项的参数，以此保证同一个符号在调用包和被调用包两者混淆时混淆结果一致。

### `--obf-apply-mapping-file <file>`

提供自定义的外形混淆符号映射关系文件，外形混淆功能将按照文件里的映射关系混淆符号。

文件格式如下：

```text
<original_symbol_name> <new_symbol_name>
```

其中 `original_symbol_name` 是混淆前的名称，`new_symbol_name` 是混淆后的名称。`original_symbol_name` 由多个 `field` 组成。`field` 表示字段名，可以是模块名、包名、类名、结构体名、枚举名、函数名或变量名。`field` 之间用分隔符 `'.'` 分隔。如果 `field` 是函数名，则需要将函数的参数类型用括号 `'()'` 修饰并附加在函数名后面。对于无参函数括号内的内容为空。如果 `field` 存在泛型参数，也需要用括号 `'<>'` 将具体的泛型参数附加在 `field` 后面。

外形混淆功能会将仓颉应用中的 `original_symbol_name` 替换为 `new_symbol_name`。对于不在该文件中的符号，外形混淆功能会正常使用随机名称进行替换。如果该文件中指定的映射关系和 `--obf-sym-input-mapping` 中的映射关系相冲突，编译器会抛出异常并停止编译。

### `--fobf-export-symbols`

允许外形混淆功能混淆导出符号，该选项在开启外形混淆功能时默认开启。

开启该选项后，外形混淆功能会对导出符号进行混淆。

### `--fno-obf-export-symbols`

禁止外形混淆功能混淆导出符号。

### `--fobf-source-path`

允许外形混淆功能混淆符号的路径信息，该选项在开启外形混淆功能时默认开启。

开启该选项后，外形混淆功能会混淆异常堆栈信息中的路径信息，将路径名替换为字符串 `"SOURCE"`。

### `--fno-obf-source-path`

禁止外形混淆功能混淆堆栈信息中的路径信息。

### `--fobf-line-number`

允许外形混淆功能混淆堆栈信息中的行号信息。

开启该选项后，外形混淆功能会混淆异常堆栈信息中的行号信息，将行号替换为 `0`。

### `--fno-obf-line-number`

禁止外形混淆功能混淆堆栈信息中的行号信息。

### `--fobf-cf-flatten`

开启控制流平坦化混淆。

混淆代码中既存的控制流，使其转移逻辑变得复杂。

### `--fno-obf-cf-flatten`

关闭控制流平坦化混淆。

### `--fobf-cf-bogus`

开启虚假控制流混淆。

在代码中插入虚假的控制流，使代码逻辑变得复杂。

### `--fno-obf-cf-bogus`

关闭虚假控制流混淆。

### `--fobf-all`

开启所有混淆功能。

指定该选项等同于同时指定以下选项：

- `--fobf-string`
- `--fobf-const`
- `--fobf-layout`
- `--fobf-cf-flatten`
- `--fobf-cf-bogus`

### `--obf-config <file>`

指定代码混淆配置文件路径。

在配置文件中可以禁止混淆工具对某些函数或者符号进行混淆。

配置文件的具体格式如下：

```text
obf_func1 name1
obf_func2 name2
...
```

第一个参数 `obf_func` 是具体的混淆功能：

- `obf-cf-bogus`：虚假控制流混淆
- `obf-cf-flatten`：控制流平坦化混淆
- `obf-const`：常数混淆
- `obf-layout`：外形混淆

第二个参数 `name` 是需要被保留的对象，由多个 `field` 组成。`field` 表示字段名，可以是包名、类名、结构体名、枚举名、函数名或变量名。

`field` 之间用分隔符 `'.'` 分隔。如果 `field` 是函数名，则需要将函数的参数类型用括号 `'()'` 修饰并附加在函数名后面。对于无参函数括号内的内容为空。

例如，假设在包 `packA` 中有以下代码：

```cangjie
package packA
class MyClassA {
    func funcA(a: String, b: Int64): String {
        return a
    }
}
```

如果要禁止控制流平坦化功能混淆 `funcA`，用户可以编写如下规则：

```text
obf-cf-flatten packA.MyClassA.funcA(std.core.String, Int64)
```

用户也可以使用通配符编写更加灵活的规则，达到一条规则保留多个对象的效果。目前支持的通配符包含以下 3 类：

混淆功能通配符：

| 混淆功能通配符 | 说明                     |
| :-------------- | :----------------------- |
| `?`            | 匹配名称中的单个字符     |
| `*`            | 匹配名称中的任意数量字符 |

字段名通配符：

| 字段名通配符 | 说明                                                         |
| :------------ | :------------------------------------------------------------ |
| `?`          | 匹配字段名中单个非分隔符 `'.'` 的字符                        |
| `*`          | 匹配字段名中的不包含分隔符 `'.'` 和参数的任意数量字符        |
| `**`         | 匹配字段名中的任意数量字符，包括字段之间的分隔符 `'.'` 和参数。`'**'` 只有在单独作为一个 `field` 时才生效，否则会被当作 `'*'` 处理 |

函数的参数类型通配符：

| 参数类型通配符 | 说明                   |
| :-------------- | :---------------------- |
| `...`          | 匹配任意数量的参数     |
| `***`          | 匹配一个任意类型的参数 |

> **说明：**
>
> 参数类型也由字段名组成，因此也可以使用字段名通配符对单个参数类型进行匹配。

以下是通配符使用示例：

例子 1：

```text
obf-cf-flatten pro?.myfunc()
```

该规则表示禁止 `obf-cf-flatten` 功能混淆函数 `pro?.myfunc()`，`pro?.myfunc()` 可以匹配 `pro0.myfunc()`，但不能匹配 `pro00.myfunc()`。

例子 2：

```text
* pro0.**
```

该规则表示禁止任何混淆功能混淆包 `pro0` 下的任何函数和变量。

例子 3：

```text
* pro*.myfunc(...)
```

该规则表示禁止任何混淆功能混淆函数 `pro*.myfunc(...)`，`pro*.myfunc(...)` 可以匹配以 `pro` 开头的任意单层包内的 `myfunc` 函数，且可以为任意参数。

如果需要匹配多层包名，比如 `pro0.mypack.myfunc()`，请使用 `pro*.**.myfunc(...)`。请注意 `'**'` 只有单独作为字段名时才生效，因此 `pro**.myfunc(...)` 和 `pro*.myfunc(...)` 等价，无法匹配多层包名。如果要匹配以 `pro` 开头的所有包下的所有 `myfunc` 函数（包括类中名为 `myfunc` 的函数），请使用 `pro*.**.myfunc(...)`。

例子 4：

```text
obf-cf-* pro0.MyClassA.myfunc(**.MyClassB, ***, ...)
```

该规则表示禁止 `obf-cf-*` 功能混淆函数 `pro0.MyClassA.myfunc(**.MyClassB, ***, ...)`，其中 `obf-cf-*` 会匹配 `obf-cf-bogus` 和 `obf-cf-flatten` 两种混淆功能，`pro0.MyClassA.myfunc(**.MyClassB, ***, ...)` 会匹配函数 `pro0.MyClassA.myfunc`，且函数的第一个参数可以是任意包下的 `MyClassB` 类型，第二个参数可以是任意类型，后面可以接零至多个任意参数。

### `--obf-level <value>`

指定混淆功能强度级别。

可指定 1-9 强度级别。默认强度级别为 5。级别数字越大，强度则越高，该选项会影响输出文件的大小以及执行开销。

### `--obf-seed <value>`

指定混淆算法的随机数种子。

通过指定混淆算法的随机数种子，可以使同一份仓颉代码在不同构建时有不同的混淆结果。默认场景下，对于同一份仓颉代码，在每次混淆后都拥有相同的混淆结果。

## 安全编译选项

`cjc` 默认生成地址无关代码，在编译可执行文件时默认生成地址无关可执行文件。

在构建 Release 版本时，建议根据以下规则打开/关闭编译选项以提高安全性。

### 启用 `--trimpath <value>` <sup>[frontend]</sup>

从调试与异常信息中将指定的绝对路径前缀移除，使用该选项可以避免构建路径信息被写入二进制程序中。

使用该选项后，二进制中的源码路径信息通常不再完整，可能影响调试体验，建议在构建调试版本时关闭该选项。

### 启用 `--strip-all`, `-s`

移除二进制中的符号表，使用该选项可以删除运行时不需要的符号相关信息。

使用该选项后，二进制将无法调试，请在构建调试版本时关闭该选项。

### 禁用 `--set-runtime-rpath`

若可执行程序会被分发至不同环境运行，或其他普通用户对当前正在使用的仓颉运行时库目录拥有写权限，使用该选项可能导致安全风险，因此禁用该选项。

编译 Windows 目标时不涉及该选项。

### 启用 `--link-options "-z noexecstack"`<sup>1</sup>

设置线程栈不可执行。

仅编译 Linux 目标时可用。

### 启用 `--link-options "-z relro"`<sup>1</sup>

设置 GOT 表重定位只读。

仅编译 Linux 目标时可用。

### 启用 `--link-options "-z now"`<sup>1</sup>

设置立即绑定。

仅编译 Linux 目标时可用。

## 代码覆盖率插桩选项

> **注意：**
>
> Windows 和 macOS 版本目前不支持代码覆盖率插桩选项。

仓颉支持对代码覆盖率插桩（SanitizerCoverage，以下简称 SanCov），提供与 LLVM 的 SanitizerCoverage 一致的接口，编译器在函数级或 BasicBlock 级插入覆盖率反馈函数，用户只需要实现约定好的回调函数即可在运行过程中感知程序运行状态。

仓颉提供的 SanCov 功能以 package 为单位，即整个 package 只有全部插桩和全部不插桩两种情况。

### `--sanitizer-coverage-level=0/1/2`

插桩级别：

- 0 表示不插桩；
- 1 表示函数级插桩，仅在函数入口处插入回调函数；
- 2 表示 BasicBlock 级插桩，在各个 BasicBlock 处插入回调函数。

如果不指定，默认值为 2。

该编译选项仅影响 `--sanitizer-coverage-trace-pc-guard`、`--sanitizer-coverage-inline-8bit-counters` 和 `--sanitizer-coverage-inline-bool-flag` 的插桩级别。

### `--sanitizer-coverage-trace-pc-guard`

开启该选项，会在每个 Edge 插入函数调用 `__sanitizer_cov_trace_pc_guard(uint32_t *guard_variable)`，受 `sanitizer-coverage-level` 影响。

**值得注意的是**，该功能存在与 gcc/llvm 实现不一致的地方：不会在 constructor 插入 `void __sanitizer_cov_trace_pc_guard_init(uint32_t *start, uint32_t *stop)`，而是在 package 初始化阶段插入函数调用 `uint32_t *__cj_sancov_pc_guard_ctor(uint64_t edgeCount)`。

`__cj_sancov_pc_guard_ctor` 回调函数需要开发者自行实现，开启 SanCov 的 package 会尽可能早地调用该回调函数，入参是该 Package 的 Edge 个数，返回值是通常是 calloc 创建的内存区域。

如果需要调用 `__sanitizer_cov_trace_pc_guard_init`，建议在 `__cj_sancov_pc_guard_ctor` 中调用，使用动态创建的缓冲区计算该函数的入参和返回值。

一个标准的 `__cj_sancov_pc_guard_ctor` 参考实现如下：

```cpp
uint32_t *__cj_sancov_pc_guard_ctor(uint64_t edgeCount) {
    uint32_t *p = (uint32_t *) calloc(edgeCount, sizeof(uint32_t));
    __sanitizer_cov_trace_pc_guard_init(p, p + edgeCount);
    return p;
}
```

### `--sanitizer-coverage-inline-8bit-counters`

开启该选项后，会在每个 Edge 插入一个累加器，每经历过一次，该累加器加一，受 `sanitizer-coverage-level` 影响。

**值得注意的是**，该功能存在与 gcc/llvm 实现不一致的地方：不会在 constructor 插入 `void __sanitizer_cov_8bit_counters_init(char *start, char *stop)`，而是在 package 初始化阶段插入函数调用 `uint8_t *__cj_sancov_8bit_counters_ctor(uint64_t edgeCount)`。

`__cj_sancov_pc_guard_ctor` 回调函数需要开发者自行实现，开启 SanCov 的 package 会尽可能早地调用该回调函数，入参是该 Package 的 Edge 个数，返回值是通常是 calloc 创建的内存区域。

如果需要调用 `__sanitizer_cov_8bit_counters_init`，建议在 `__cj_sancov_8bit_counters_ctor` 中调用，使用动态创建的缓冲区计算该函数的入参和返回值。

一个标准的 `__cj_sancov_8bit_counters_ctor` 参考实现如下：

```cpp
uint8_t *__cj_sancov_8bit_counters_ctor(uint64_t edgeCount) {
    uint8_t *p = (uint8_t *) calloc(edgeCount, sizeof(uint8_t));
    __sanitizer_cov_8bit_counters_init(p, p + edgeCount);
    return p;
}
```

### `--sanitizer-coverage-inline-bool-flag`

开启该选项后，会在每个 Edge 插入布尔值，经历过的 Edge 对应的布尔值会被设置为 True，受 `sanitizer-coverage-level` 影响。

**值得注意的是**，该功能存在与 gcc/llvm 实现不一致的地方：不会在 constructor 插入 `void __sanitizer_cov_bool_flag_init(bool *start, bool *stop)`，而是在 package 初始化阶段插入函数调用 `bool *__cj_sancov_bool_flag_ctor(uint64_t edgeCount)`。

`__cj_sancov_bool_flag_ctor` 回调函数需要开发者自行实现，开启 SanCov 的 package 会尽可能早地调用该回调函数，入参是该 Package 的 Edge 个数，返回值是通常是 calloc 创建的内存区域。

如果需要调用 `__sanitizer_cov_bool_flag_init`，建议在 `__cj_sancov_bool_flag_ctor` 中调用，使用动态创建的缓冲区计算该函数的入参和返回值。

一个标准的 `__cj_sancov_bool_flag_ctor` 参考实现如下：

```cpp
bool *__cj_sancov_bool_flag_ctor(uint64_t edgeCount) {
    bool *p = (bool *) calloc(edgeCount, sizeof(bool));
    __sanitizer_cov_bool_flag_init(p, p + edgeCount);
    return p;
}
```

### `--sanitizer-coverage-pc-table`

该编译选项用于提供插桩点和源码之间的对应关系，当前只提供精确到函数级的对应关系。需要与 `--sanitizer-coverage-trace-pc-guard`、`--sanitizer-coverage-inline-8bit-counters`、`--sanitizer-coverage-inline-bool-flag` 共用，至少需要开启其中一项，可以同时开启多项。

**值得注意的是**，该功能存在与 gcc/llvm 实现不一致的地方：不会在 constructor 插入 `void __sanitizer_cov_pcs_init(const uintptr_t *pcs_beg, const uintptr_t *pcs_end);`，而是在 package 初始化阶段插入函数调用 `void __cj_sancov_pcs_init(int8_t *packageName, uint64_t n, int8_t **funcNameTable, int8_t **fileNameTable, uint64_t *lineNumberTable)`，各入参含义如下：

- `int8_t *packageName`: 字符串，表示包名（插桩用 c 风格的 int8 数组作为入参来表达字符串，下同）。
- `uint64_t n`: 共有 n 个函数被插桩。
- `int8_t **funcNameTable`: 长度为 n 的字符串数组，第 i 个插桩点对应的函数名为 funcNameTable\[i\]。
- `int8_t **fileNameTable`: 长度为 n 的字符串数组，第 i 个插桩点对应的文件名为 fileNameTable\[i\]。
- `uint64_t *lineNumberTable`: 长度为 n 的 uint64 数组，第 i 个插桩点对应的行号为 lineNumberTable\[i\]。

如果需要调用 `__sanitizer_cov_pcs_init`，需要自行完成仓颉 pc-table 到 C 语言 pc-table 的转化。

### `--sanitizer-coverage-stack-depth`

开启该编译选项后，由于仓颉无法获取 SP 指针的值，因此只能在每个函数入口处插入调用 `__updateSancovStackDepth`，在 C 侧实现该函数即可获得 SP 指针。

一个标准的 `updateSancovStackDepth` 实现如下：

```cpp
thread_local void* __sancov_lowest_stack;

void __updateSancovStackDepth()
{
    register void* sp = __builtin_frame_address(0);
    if (sp < __sancov_lowest_stack) {
        __sancov_lowest_stack = sp;
    }
}
```

### `--sanitizer-coverage-trace-compares`

开启该选项后，会在所有的 compare 指令和 match 指令调用前插入函数回调函数，具体列表如下，与 LLVM 系的 API 功能一致。参考 Tracing data flow。

```cpp
void __sanitizer_cov_trace_cmp1(uint8_t Arg1, uint8_t Arg2);
void __sanitizer_cov_trace_const_cmp1(uint8_t Arg1, uint8_t Arg2);
void __sanitizer_cov_trace_cmp2(uint16_t Arg1, uint16_t Arg2);
void __sanitizer_cov_trace_const_cmp2(uint16_t Arg1, uint16_t Arg2);
void __sanitizer_cov_trace_cmp4(uint32_t Arg1, uint32_t Arg2);
void __sanitizer_cov_trace_const_cmp4(uint32_t Arg1, uint32_t Arg2);
void __sanitizer_cov_trace_cmp8(uint64_t Arg1, uint64_t Arg2);
void __sanitizer_cov_trace_const_cmp8(uint64_t Arg1, uint64_t Arg2);
void __sanitizer_cov_trace_switch(uint64_t Val, uint64_t *Cases);
```

### `--sanitizer-coverage-trace-memcmp`

该编译选项用于在 String 、 Array 等比较中反馈前缀比较信息。开启该选项后，会对 String 和 Array 的比较函数前插入函数回调函数。具体对于以下对各 String 和 Array 的 API，分别插入对应桩函数：

- String==: __sanitizer_weak_hook_memcmp
- String.startsWith: __sanitizer_weak_hook_memcmp
- String.endsWith: __sanitizer_weak_hook_memcmp
- String.indexOf: __sanitizer_weak_hook_strstr
- String.replace: __sanitizer_weak_hook_strstr
- String.contains: __sanitizer_weak_hook_strstr
- CString==: __sanitizer_weak_hook_strcmp
- CString.startswith: __sanitizer_weak_hook_memcmp
- CString.endswith: __sanitizer_weak_hook_strncmp
- CString.compare: __sanitizer_weak_hook_strcmp
- CString.equalsLower: __sanitizer_weak_hook_strcasecmp
- Array==: __sanitizer_weak_hook_memcmp
- ArrayList==: __sanitizer_weak_hook_memcmp

## 实验性功能选项

### `--experimental` <sup>[frontend]</sup>

启用实验性功能，允许在命令行使用其他实验性功能选项。

> **注意：**
>
> 使用实验性功能生成的二进制文件可能存在潜在的运行时问题，请注意使用该选项的风险。

## 其他功能

### 编译器报错信息显示颜色

对于 Windows 版本的仓颉编译器，仅在运行于 Windows 10 version 1511 (Build 10586) 或更高版本的系统时，编译器报错信息才会显示颜色，否则不显示颜色。

### 设置 build-id

通过 `--link-options "--build-id=<arg>"`<sup>1</sup> 可以透传链接器选项以设置 build-id。

编译 Windows 目标时不支持此功能。

### 设置 rpath

通过 `--link-options "-rpath=<arg>"`<sup>1</sup> 可以透传链接器选项以设置 rpath。

编译 Windows 目标时不支持此功能。

### 增量编译

通过 `--incremental-compile`<sup>[frontend]</sup>开启增量编译。开启后，`cjc`会在编译时根据前次编译的缓存文件加快此次编译的速度。

> **注意：**
>
> 该选项为实验性功能，使用该功能生成的二进制有可能会存在潜在的运行时问题，请注意使用该选项的风险。此选项必须配合 `--experimental` 选项一同使用。
> 指定此选项时会保存增量编译缓存及日志到输出文件路径下的 `.cached`目录。

## `cjc` 用到的环境变量

这里介绍一些仓颉编译器在编译代码的过程中可能使用到的环境变量。

### `TMPDIR` 或者 `TMP`

仓颉编译器会将编译过程中生成的临时文件放置在临时目录中。默认情况下，`Linux` 和 `macOS` 操作系统会将其放在 `/tmp` 目录下，而 `Windows` 操作系统则会将其放在 `C:\Windows\Temp` 目录下。仓颉编译器还支持自定义临时文件存放目录，在 `Linux` 和 `macOS` 操作系统上，可以通过设置环境变量 `TMPDIR` 来更改临时文件目录，而在 `Windows` 操作系统上，则可以通过设置环境变量 `TMP` 来更改临时文件目录。

例如：
在 Linux shell 中

```shell
export TMPDIR=/home/xxxx
```

在 Windows cmd 中

```shell
set TMP=D:\\xxxx
```


### Appendix/keyword.md

# 关键字

关键字是不能作为标识符使用的特殊字符串，仓颉语言的关键字如下表所示：

| 关键字          | 关键字        | 关键字       |
|--------------|------------|-----------|
| as           | abstract   | break     |
| Bool         | case       | catch     |
| class        | const      | continue  |
| Rune         | do         | else      |
| enum         | extend     | for       |
| func         | false      | finally   |
| foreign      | Float16    | Float32   |
| Float64      | if         | in        |
| is           | init       | import    |
| interface    | Int8       | Int16     |
| Int32        | Int64      | IntNative |
| let          | mut        | main      |
| macro        | match      | Nothing   |
| open         | operator   | override  |
| prop         | public     | package   |
| private      | protected  | quote     |
| redef        | return     | spawn     |
| super        | static     | struct    |
| synchronized | try        | this      |
| true         | type       | throw     |
| This         | unsafe     | Unit      |
| UInt8        | UInt16     | UInt32    |
| UInt64       | UIntNative | var       |
| VArray       | where      | while     |


### Appendix/linux_toolchain_install.md

# Linux 版本工具链的支持与安装

仓颉工具链当前基于以下 Linux 发行版进行了完整功能测试：

- SUSE Linux Enterprise Server 12 SP5
- Ubuntu 18.04
- Ubuntu 20.04
- UnionTech OS Server 20
- Kylin Linux Advanced Server Release V10

## 适用于各 Linux 发行版的仓颉工具链依赖安装命令

> **注意：**
>
> 当前仓颉工具链依赖的某些工具在一些 Linux 发行版上可能无法通过系统默认软件源直接安装。可参考下一节[编译安装依赖工具](./linux_toolchain_install.md#编译安装依赖工具)进行手动安装。

### SUSE Linux Enterprise Server 12 SP5

```shell
$ zypper install \
         binutils \
         glibc-devel \
         gcc-c++
```

此外，还需要安装 OpenSSL 3，安装方法请参见[编译安装依赖工具](./linux_toolchain_install.md#编译安装依赖工具)。

### Ubuntu 18.04

```shell
$ apt-get install \
          binutils \
          libc-dev \
          libc++-dev \
          libgcc-7-dev
```

此外，还需要安装 OpenSSL 3，安装方法请参见[编译安装依赖工具](./linux_toolchain_install.md#编译安装依赖工具)。

### Ubuntu 20.04

```shell
$ apt-get install \
          binutils \
          libc-dev \
          libc++-dev \
          libgcc-9-dev
```

此外，还需要安装 OpenSSL 3，安装方法请参见[编译安装依赖工具](./linux_toolchain_install.md#编译安装依赖工具)。

### UnionTech OS Server 20

```shell
$ yum install \
      binutils \
      glibc-devel \
      libstdc++-devel \
      gcc \
```

此外，还需要安装 OpenSSL 3，安装方法请参见[编译安装依赖工具](./linux_toolchain_install.md#编译安装依赖工具)。

### Kylin Linux Advanced Server release V10

```shell
$ yum install \
      binutils \
      glibc-devel \
      libstdc++-devel \
      gcc \
```

此外，还需要安装 OpenSSL 3，安装方法请参见[编译安装依赖工具](./linux_toolchain_install.md#编译安装依赖工具)。

### 其他 Linux 发行版

根据使用的 Linux 发行版的不同，可能需要参考以上系统的依赖安装命令，使用系统包管理工具安装对应依赖。若使用的系统没有提供相关软件包，可能需要自行安装链接工具、C 语言开发工具、C++ 开发工具、GCC 编译器、以及 OpenSSL 3 以正常使用仓颉工具链。

## 编译安装依赖工具

当前仓颉工具链中的部分标准库（以及部分工具）使用了 OpenSSL 3 开源软件。对于系统包管理工具未提供 OpenSSL 3 的场景，用户可能需要源码编译安装 OpenSSL 3，本节提供了 OpenSSL 3 源码编译的方法和步骤。

### OpenSSL 3

从以下链接可以下载到 OpenSSL 3 的源码：

- <https://www.openssl.org/source/>
- <https://www.openssl.org/source/old/>

建议使用 OpenSSL 3.0.7 或更高版本。

> **注意：**
>
> 请在执行以下编译和安装命令前仔细阅读注意事项，并根据实际情况调整命令。不正确的配置和安装可能会导致系统其他软件不可用。如果在编译安装过程中遇到问题或希望进行额外的安装配置，请参见 OpenSSL 源码中的 `INSTALL` 文件或 OpenSSL 的 [FAQ](https://www.openssl.org/docs/faq.html)。

此处以 OpenSSL 3.0.7 为例，下载后使用以下命令解压压缩包：

```shell
$ tar xf openssl-3.0.7.tar.gz
```

解压完成后进入目录：

```shell
$ cd openssl-3.0.7
```

编译 OpenSSL：

> **注意：**
>
> 如果系统已经安装了 OpenSSL，建议使用 `--prefix=<path>` 选项指定一个自定义安装路径，例如 `--prefix=/usr/local/openssl-3.0.7` 或开发者的个人目录。在系统目录已经存在 OpenSSL 的场景下直接使用以下命令编译安装可能会使系统 OpenSSL 被覆盖，并导致依赖系统 OpenSSL 的应用不可用。

```shell
$ ./Configure --libdir=lib
$ make
```

测试 OpenSSL：

```shell
$ make test
```

将 OpenSSL 安装至系统目录（或先前指定的 `--prefix` 目录），可能需要提供 root 权限以成功执行以下命令：

```shell
$ make install
```

或

```shell
$ sudo make install
```

如果先前编译 OpenSSL 时没有通过 `--prefix` 设置自定义安装路径，则 OpenSSL 安装已经完成了。如果先前通过 `--prefix` 指定了自定义的安装路径，还需要设置以下变量，以使仓颉工具链可以找到 OpenSSL 3。

> **注意：**
>
> 如果系统中原先存在其他版本的 OpenSSL，通过以下方式配置后，除了仓颉工具链外，其他编译开发工具默认使用的 OpenSSL 版本也可能受到影响。如果使用其他编译开发工具时出现 OpenSSL 不兼容的情况，请仅为仓颉开发环境配置以下变量。

*请将 `<prefix>` 替换为指定的自定义安装路径。*

```shell
$ export LIBRARY_PATH=<prefix>/lib:$LIBRARY_PATH
$ export LD_LIBRARY_PATH=<prefix>/lib:$LD_LIBRARY_PATH
```

通过以上方式所配置的环境变量仅在当前执行命令的 `shell` 会话窗口有效。若希望 `shell` 每次启动时都自动配置，可以在 `$HOME/.bashrc`、`$HOME/.zshrc` 或其他 `shell` 配置文件（依开发者的 `shell` 种类而定）加入以上命令。

若希望配置可以默认对所有用户生效，可以执行以下命令：

*请将 `<prefix>` 替换为指定的自定义安装路径。*

```shell
$ echo "export LIBRARY_PATH=<prefix>/lib:$LIBRARY_PATH" >> /etc/profile
$ echo "<prefix>/lib" >> /etc/ld.so.conf
$ ldconfig
```

执行完毕后重新打开 `shell` 会话窗口即可生效。

至此，OpenSSL 3 已经成功安装，可以回到原来的章节继续阅读或尝试运行仓颉编译器了。


### Appendix/operator.md

# 操作符

下表列出了仓颉支持的所有操作符的优先级及结合性，其中优先级一栏数值越小，对应操作符的优先级越高。

| 操作符                        | 优先级 | 含义              | 示例                                                      | 结合方向 |
|:---------------------------|:----|:----------------|:--------------------------------------------------------|------|
| `@`                        | 0   | 宏调用             | `@id`                                                   | 右结合  |
| `.`                        | 1   | 成员访问            | `expr.id`                                               | 左结合  |
| `[]`                       | 1   | 索引              | `expr[expr]`                                            | 左结合  |
| `()`                       | 1   | 函数调用            | `expr(expr)`                                            | 左结合  |
| `++`                       | 2   | 自增              | `var++`                                                 | 无    |
| `--`                       | 2   | 自减              | `var--`                                                 | 无    |
| `?`                        | 2   | 问号              | `expr?.id`, `expr?[expr]`, `expr?(expr)`, `expr?{expr}` | 无    |
| `!`                        | 3   | 按位求反、逻辑非        | `!expr`                                                 | 右结合  |
| `-`                        | 3   | 一元负号            | `-expr`                                                 | 右结合  |
| `**`                       | 4   | 幂运算             | `expr ** expr`                                          | 右结合  |
| `*`, `/`                   | 5   | 乘法，除法           | `expr * expr`,  `expr / expr`                           | 左结合  |
| `%`                        | 5   | 取模              | `expr % expr`                                           | 左结合  |
| `+`, `-`                   | 6   | 加法，减法           | `expr + expr`,  `expr - expr`                           | 左结合  |
| `<<`                       | 7   | 按位左移            | `expr << expr`                                          | 左结合  |
| `>>`                       | 7   | 按位右移            | `expr >> expr`                                          | 左结合  |
| `..`                       | 8   | 区间操作符           | `expr..expr`                                            | 无    |
| `..=`                      | 8   | 含步长的区间操作符       | `expr..=expr`                                           | 无    |
| `<`                        | 9   | 小于              | `expr < expr`                                           | 无    |
| `<=`                       | 9   | 小于等于            | `expr <= expr`                                          | 无    |
| `>`                        | 9   | 大于              | `expr > expr`                                           | 无    |
| `>=`                       | 9   | 大于等于            | `expr >= expr`                                          | 无    |
| `is`                       | 9   | 类型检查            | `expr is Type`                                          | 无    |
| `as`                       | 9   | 类型转换            | `expr as Type`                                          | 无    |
| `==`                       | 10  | 判等              | `expr == expr`                                          | 无    |
| `!=`                       | 10  | 判不等             | `expr != expr`                                          | 无    |
| `&`                        | 11  | 按位与             | `expr & expr`                                           | 左结合  |
| `^`                        | 12  | 按位异或            | `expr ^ expr`                                           | 左结合  |
| <code>&vert;</code>        | 13  | 按位或             | <code>expr &vert; expr</code>                           | 左结合  |
| `&&`                       | 14  | 逻辑与             | `expr && expr`                                          | 左结合  |
| <code>&vert;&vert;</code>  | 15  | 逻辑或             | <code>expr  &vert;&vert; expr</code>                    | 左结合  |
| `??`                       | 16  | coalescing 操作符  | `expr ?? expr`                                          | 右结合  |
| <code>&vert;></code>       | 17  | pipeline 操作符    | <code>id &vert;> expr</code>                            | 左结合  |
| `~>`                       | 17  | composition 操作符 | `expr ~> expr`                                          | 左结合  |
| `=`                        | 18  | 赋值              | `id = expr`                                             | 无    |
| `**=`                      | 18  | 复合运算符           | `id **= expr`                                           | 无    |
| `*=`                       | 18  | 复合运算符           | `id *= expr`                                            | 无    |
| `/=`                       | 18  | 复合运算符           | `id /= expr`                                            | 无    |
| `%=`                       | 18  | 复合运算符           | `id %= expr`                                            | 无    |
| `+=`                       | 18  | 复合运算符           | `id += expr`                                            | 无    |
| `-=`                       | 18  | 复合运算符           | `id -= expr`                                            | 无    |
| `<<=`                      | 18  | 复合运算符           | `id <<= expr`                                           | 无    |
| `>>=`                      | 18  | 复合运算符           | `id >>= expr`                                           | 无    |
| `&=`                       | 18  | 复合运算符           | `id &= expr`                                            | 无    |
| `^=`                       | 18  | 复合运算符           | `id ^= expr`                                            | 无    |
| <code>&vert;=</code>       | 18  | 复合运算符           | <code>id &vert;= expr</code>                            | 无    |
| `&&=`                      | 18  | 复合运算符           | `id &&= expr`                                           | 无    |
| <code>&vert;&vert;=</code> | 18  | 复合运算符           | <code>id &vert;&vert;= expr</code>                      | 无    |


### Appendix/operator_function.md

# 操作符函数

下表列出了仓颉支持的所有操作符函数。

| 操作符函数               | 函数签名                                                           | 示例                                  |
|:--------------------|:---------------------------------------------------------------|:------------------------------------|
| `[]`   **（索引取值）**   | `operator func [](index1: T1, index2: T2, ...): R`             | `this[index1, index2, ...]`         |
| `[]`   **（索引赋值）**   | `operator func [](index1: T1, index2: T2, ..., value!: TN): R` | `this[index1, index2, ...] = value` |
| `()`                | `operator func ()(param1: T1, param2: T2, ...): R`             | `this(param1, param2, ...)`         |
| `!`                 | `operator func !(): R`                                         | `!this`                             |
| `**`                | `operator func **(other: T): R`                                | `this ** other`                     |
| `*`                 | `operator func *(other: T): R`                                 | `this * other`                      |
| `/`                 | `operator func /(other: T): R`                                 | `this / other`                      |
| `%`                 | `operator func %(other: T): R`                                 | `this % other`                      |
| `+`                 | `operator func +(other: T): R`                                 | `this + other`                      |
| `-`                 | `operator func -(other: T): R`                                 | `this - other`                      |
| `<<`                | `operator func <<(other: T): R`                                | `this << other`                     |
| `>>`                | `operator func >>(other: T): R`                                | `this >> other`                     |
| `<`                 | `operator func <(other: T): R`                                 | `this < other`                      |
| `<=`                | `operator func <=(other: T): R`                                | `this <= other`                     |
| `>`                 | `operator func >(other: T): R`                                 | `this > other`                      |
| `>=`                | `operator func >=(other: T): R`                                | `this >= other`                     |
| `==`                | `operator func ==(other: T): R`                                | `this == other`                     |
| `!=`                | `operator func !=(other: T): R`                                | `this != other`                     |
| `&`                 | `operator func &(other: T): R`                                 | `this & other`                      |
| `^`                 | `operator func ^(other: T): R`                                 | `this ^ other`                      |
| <code>&vert;</code> | <code>operator func &vert;(other: T): R</code>                 | <code>this &vert; other</code>      |


### Appendix/runtime_env.md

# runtime 环境变量使用手册

本节介绍 `runtime`（运行时）所提供的环境变量。

在 Linux shell 与 macOS shell 中，可以使用以下方式设置仓颉运行时提供的环境变量：

```shell
$ export VARIABLE=value
```

在 Windows cmd 中，可以使用以下方式设置仓颉运行时提供的环境变量：

```shell
> set VARIABLE=value
```

本节后续的示例均为 Linux shell 中的设置方式，若与运行平台不符，请根据运行平台选择合适的环境变量设置方式。

## runtime 初始化可选配置

注意：

1. 所有整型参数为 Int64 类型，浮点型参数为 Float64 类型;
2. 所有参数如果未显式规定最大值，默认隐式最大值为该类型最大值;
3. 所有参数若超出范围则设置无效，自动使用默认值。

### `cjHeapSize`

指定仓颉堆的最大值，支持单位为 kb（KB）、mb（MB）、gb（GB），支持设置范围为[4MB, 系统物理内存]，超出范围的设置无效，仍旧使用默认值。若物理内存低于 1GB，默认值为 64 MB，否则为 256 MB。

例如：

```shell
export cjHeapSize=4GB
```

### `cjRegionSize`

指定 region 分配器 thread local buffer 的大小，支持单位为 kb（KB）、mb（MB）、gb（GB)，支持设置范围为[4kb, 2048kb]，超出范围的设置无效，仍旧使用默认值。默认值为 64 KB。

例如：

```shell
export cjRegionSize=1024kb
```

### `cjLargeThresholdSize`

需要大量连续内存空间的对象（例如长数组）称为大对象。堆内频繁分配大对象可能导致堆内连续空间不足，从而触发堆溢出问题。通过增加大对象的最大值，可以提升堆内空间的连续性。

在仓颉语言中，大对象的阈值为 `cjLargeThresholdSize` 和 `cjRegionSize` 的较小者。`cjLargeThresholdSize` 支持的单位有 kb（KB）、mb（MB）、gb（GB)，支持的范围是 [4KB, 2048KB]，超出范围的设置无效，仍旧使用默认值。默认值为 32 KB。

> **说明：**
>
> 较大的大对象阈值可能影响程序性能，开发者可根据实际情况设置。

例如：

```shell
export cjLargeThresholdSize=1024kb
```

### `cjExemptionThreshold`

指定存活 region 的水线值，取值 (0,1]，该值与 region 的大小相乘，若 region 中存活对象的大小大于相乘后的值，则该 region 不会被回收（其中死亡对象继续占用内存）。该值指定得越大，region 被回收的概率越大，堆中的碎片空间就越少，但频繁回收 region 也会影响性能。超出范围的设置无效，仍旧使用默认值。默认值为 0.8，即 80%。

例如：

```shell
export cjExemptionThreshold=0.8
```

### `cjHeapUtilization`

指定仓颉堆的利用率，该参数用于 GC 后更新堆水线的参考依据之一，取值 (0, 1]，堆水线是指当堆中对象总大小达到水线值时则进行 GC。该参数指定越小，则更新后的堆水线会越高，则触发 GC 的概率会相对变低。超出范围的设置无效，仍旧使用默认值。默认值为 0.8，即 80%。

例如：

```shell
export cjHeapUtilization=0.8
```

### `cjHeapGrowth`

指定仓颉堆的增长率，该参数用于 GC 后更新堆水线的参考依据之一，取值必须大于 0。增长率的计算方式为 1 + cjHeapGrowth。该参数指定越大，则更新后的堆水线会越高，则触发 GC 的概率会相对变低。默认值为 0.15，表示增长率为 1.15。

例如：

```shell
export cjHeapGrowth=0.15
```

### `cjAlloctionRate`

指定仓颉运行时分配对象的速率，该值必须大于 0，单位为 MB/s，表示每秒可分配对象的数量。默认值为 10240，表示每秒可分配 10240 MB 对象。

例如：

```shell
export cjAlloctionRate=10240
```

### `cjAlloctionWaitTime`

指定仓颉运行时分配对象时的等待时间，该值必须大于 0，支持单位为 s、ms、us、ns，推荐单位为纳秒（ns）。若本次分配对象距离上一次分配对象的时间间隔小于此值，则将等待。默认值为 1000 ns。

例如：

```shell
export cjAlloctionWaitTime=1000ns
```

### `cjGCThreshold`

指定仓颉堆的参考水线值，支持单位为 kb（KB）、mb（MB）、gb（GB）, 取值必须为大于 0 的整数。当仓颉堆大小超过该值时，触发 GC。默认值为堆大小。

例如：

```shell
export cjGCThreshold=20480KB
```

### `cjGarbageThreshold`

当 GC 发生时，如果 region 中死亡对象所占比率大于此环境变量，此 region 会被放入回收候选集中，后续可被回收（如果受到其他策略影响也可能不被回收），默认值为 0.5，无量纲，支持设置的区间为[0.0, 1.0]。

例如：

```shell
export cjGarbageThreshold=0.5
```

### `cjGCInterval`

指定两次 GC 的间隔时间值，取值必须大于 0，支持单位为 s、ms、us、ns，推荐单位为毫秒（ms）。若本次 GC 距离上次 GC 的间隔小于此值，则本次 GC 将被忽略。该参数可以控制 GC 的频率。默认值为 150 ms。

例如：

```shell
export cjGCInterval=150ms
```

### `cjBackupGCInterval`

指定 backup GC 的间隔值，取值必须大于 0，支持单位为 s、ms、us、ns，推荐单位为秒（s），当仓颉运行时在该参数设定时间内未触发 GC，则触发一次 backup GC。默认值为 240 秒，即 4 分钟。

例如：

```shell
export cjBackupGCInterval=240s
```

### `cjProcessorNum`

指定仓颉线程的最大并发数，支持设置范围为 (0, CPU 核数 * 2]，超出范围的设置无效，仍旧使用默认值。调用系统 API 获取 cpu 核数，若成功默认值为 cpu 核数，否则默认值为 8。

例如：

```shell
export cjProcessorNum=2
```

### `cjStackSize`

指定仓颉线程的栈大小，支持单位为 kb（KB）、mb（MB）、gb（GB），支持设置范围为 Linux 平台下[64KB, 1GB]，Windows 平台下[128KB, 1GB]，超出范围的设置无效，仍旧使用默认值。默认值为 128KB。

例如：

```shell
export cjStackSize=100kb
```

### 运维日志可选配置

#### `MRT_LOG_FILE_SIZE`

指定 runtime 运维日志的文件大小，默认值为 10 MB，支持单位为 kb（KB）、mb（MB）、gb（GB），设置值需大于 0。

日志大小超过该值时，会重新回到日志开头进行打印。

最终生成日志大小略大于 MRT_LOG_FILE_SIZE。

例如：

```shell
export MRT_LOG_FILE_SIZE=100kb
```

#### `MRT_LOG_PATH`

指定 runtime 运维日志的输出路径，若该环境变量未设置或路径设置失败，则运维日志默认打印到 stdout（标准输出）或 stderr（标准错误）中。

例如：

```shell
export MRT_LOG_PATH=/home/cangjie/runtime/runtime_log.txt
```

#### `MRT_LOG_LEVEL`

指定 runtime 运维日志的最小输出级别，大于等于这个级别的日志会被打印，默认值为 e，支持设置值为[v|d|i|w|e|f|s]。v（VERBOSE）、d（DEBUGY）、i（INFO）、w（WARNING）、e（ERROR）、f（FATAL）、s（FATAL_WITHOUT_ABORT）。

例如：

```shell
export MRT_LOG_LEVEL=v
```

#### `MRT_REPORT`

指定 runtime GC 日志的输出路径，若该环境变量未设置或路径设置失败，该日志默认不打印。

例如：

```shell
export MRT_REPORT=/home/cangjie/runtime/gc_log.txt
```

#### `MRT_LOG_CJTHREAD`

指定 cjthread 日志的输出路径，若该环境变量未设置或路径设置失败，该日志默认不打印。

例如：

```shell
export MRT_LOG_CJTHREAD=/home/cangjie/runtime/cjthread_log.txt
```

#### `cjHeapDumpOnOOM`

指定是否要在发生堆溢出后输出堆快照文件，默认不开启。支持设置值为[on|off]，设定为 on 时开启功能，设定 off 或者其他值不开启功能。

例如：

```shell
export cjHeapDumpOnOOM=on
```

#### `cjHeapDumpLog`

指定输出堆快照文件的路径。注意指定的路径必须存在，且应用执行者对其具有读写权限。如果不指定，堆快照文件将输出到当前执行目录。

例如：

```shell
export cjHeapDumpLog=/home/cangjie
```

### 运行环境可选配置

#### `MRT_STACK_CHECK`

开启 native stack overflow 检查，默认不开启，支持设置值为 1、true、TRUE 开启功能。

例如：

```shell
export MRT_STACK_CHECK=true
```

#### `CJ_SOF_SIZE`

当 StackOverflowError 发生时，将自动进行异常栈折叠方便用户阅读，折叠后栈帧层数默认值是 32。可以通过配置此环境变量控制折叠栈长度，支持设置为 int 范围内的整数。
CJ_SOF_SIZE = 0，打印所有调用栈；
CJ_SOF_SIZE < 0，从栈底开始打印环境变量配置层数；
CJ_SOF_SIZE > 0，从栈顶开始打印环境变量配置层数；
CJ_SOF_SIZE 未配置，默认打印栈顶开始 32 层调用栈；

例如：

```shell
export CJ_SOF_SIZE=30
```


### Appendix/tokenkind_type.md

# TokenKind 类型

``` cangjie
public enum TokenKind <: ToString {
    DOT|                      /*  "."           */
    COMMA|                    /*  ","           */
    LPAREN|                   /*  "("           */
    RPAREN|                   /*  ")"           */
    LSQUARE|                  /*  "["           */
    RSQUARE|                  /*  "]"           */
    LCURL|                    /*  "{"           */
    RCURL|                    /*  "}"           */
    EXP|                      /*  "**"          */
    MUL|                      /*  "*"           */
    MOD|                      /*  "%"           */
    DIV|                      /*  "/"           */
    ADD|                      /*  "+"           */
    SUB|                      /*  "-"           */
    INCR|                     /*  "++"          */
    DECR|                     /*  "--"          */
    AND|                      /*  "&&"          */
    OR|                       /*  "||"          */
    COALESCING|               /*  "??"          */
    PIPELINE|                 /*  "|>"          */
    COMPOSITION|              /*  "~>"          */
    NOT|                      /*  "!"           */
    BITAND|                   /*  "&"           */
    BITOR|                    /*  "|"           */
    BITXOR|                   /*  "^"           */
    BITNOT|                   /*  "~"           */
    LSHIFT|                   /*  "<<"          */
    RSHIFT|                   /*  ">>"          */
    COLON|                    /*  ":"           */
    SEMI|                     /*  ";"           */
    ASSIGN|                   /*  "="           */
    ADD_ASSIGN|               /*  "+="          */
    SUB_ASSIGN|               /*  "-="          */
    MUL_ASSIGN|               /*  "*="          */
    EXP_ASSIGN|               /*  "**="         */
    DIV_ASSIGN|               /*  "/="          */
    MOD_ASSIGN|               /*  "%="          */
    AND_ASSIGN|               /*  "&&="         */
    OR_ASSIGN|                /*  "||="         */
    BITAND_ASSIGN|            /*  "&="          */
    BITOR_ASSIGN|             /*  "|="          */
    BITXOR_ASSIGN|            /*  "^="          */
    LSHIFT_ASSIGN|            /*  "<<="         */
    RSHIFT_ASSIGN|            /*  ">>="         */
    ARROW|                    /*  "->"          */
    BACKARROW|                /*  "<-"          */
    DOUBLE_ARROW|             /*  "=>"          */
    RANGEOP|                  /*  ".."          */
    CLOSEDRANGEOP|            /*  "..="         */
    ELLIPSIS|                 /*  "..."         */
    HASH|                     /*  "#"           */
    AT|                       /*  "@"           */
    QUEST|                    /*  "?"           */
    LT|                       /*  "<"           */
    GT|                       /*  ">"           */
    LE|                       /*  "<="          */
    GE|                       /*  ">="          */
    IS|                       /*  "is"          */
    AS|                       /*  "as"          */
    NOTEQ|                    /*  "!="          */
    EQUAL|                    /*  "=="          */
    WILDCARD|                 /*  "_"           */
    INT8|                     /*  "Int8"        */
    INT16|                    /*  "Int16"       */
    INT32|                    /*  "Int32"       */
    INT64|                    /*  "Int64"       */
    INTNATIVE|                /*  "IntNative"   */
    UINT8|                    /*  "UInt8"       */
    UINT16|                   /*  "UInt16"      */
    UINT32|                   /*  "UInt32"      */
    UINT64|                   /*  "UInt64"      */
    UINTNATIVE|               /*  "UIntNative"  */
    FLOAT16|                  /*  "Float16"     */
    FLOAT32|                  /*  "Float32"     */
    FLOAT64|                  /*  "Float64"     */
    RUNE|                     /*  "Rune"        */
    BOOLEAN|                  /*  "Bool"        */
    NOTHING|                  /*  "Nothing"     */
    UNIT|                     /*  "Unit"        */
    STRUCT|                   /*  "struct"      */
    ENUM|                     /*  "enum"        */
    VARRAY|                   /*  "VArray"      */
    THISTYPE|                 /*  "This"        */
    PACKAGE|                  /*  "package"     */
    IMPORT|                   /*  "import"      */
    CLASS|                    /*  "class"       */
    INTERFACE|                /*  "interface"   */
    FUNC|                     /*  "func"        */
    MACRO|                    /*  "macro"       */
    QUOTE|                    /*  "quote"       */
    DOLLAR|                   /*  "$"           */
    LET|                      /*  "let"         */
    VAR|                      /*  "var"         */
    CONST|                    /*  "const"       */
    TYPE|                     /*  "type"        */
    INIT|                     /*  "init"        */
    THIS|                     /*  "this"        */
    SUPER|                    /*  "super"       */
    IF|                       /*  "if"          */
    ELSE|                     /*  "else"        */
    CASE|                     /*  "case"        */
    TRY|                      /*  "try"         */
    CATCH|                    /*  "catch"       */
    FINALLY|                  /*  "finally"     */
    FOR|                      /*  "for"         */
    DO|                       /*  "do"          */
    WHILE|                    /*  "while"       */
    THROW|                    /*  "throw"       */
    RETURN|                   /*  "return"      */
    CONTINUE|                 /*  "continue"    */
    BREAK|                    /*  "break"       */
    IN|                       /*  "in"          */
    NOT_IN|                   /*  "!in"         */
    MATCH|                    /*  "match"       */
    WHERE|                    /*  "where"       */
    EXTEND|                   /*  "extend"      */
    WITH|                     /*  "with"        */
    PROP|                     /*  "prop"        */
    STATIC|                   /*  "static"      */
    PUBLIC|                   /*  "public"      */
    PRIVATE|                  /*  "private"     */
    INTERNAL|                 /*  "internal"    */
    PROTECTED|                /*  "protected"   */
    OVERRIDE|                 /*  "override"    */
    REDEF|                    /*  "redef"       */
    ABSTRACT|                 /*  "abstract"    */
    SEALED|                   /*  "sealed"      */
    OPEN|                     /*  "open"        */
    FOREIGN|                  /*  "foreign"     */
    INOUT|                    /*  "inout"       */
    MUT|                      /*  "mut"         */
    UNSAFE|                   /*  "unsafe"      */
    OPERATOR|                 /*  "operator"    */
    SPAWN|                    /*  "spawn"       */
    SYNCHRONIZED|             /*  "synchronized */
    UPPERBOUND|               /*  "<:"          */
    MAIN|                     /*  "main"        */
    IDENTIFIER|               /*  "x"           */
    PACKAGE_IDENTIFIER|       /*  "x-y"         */
    INTEGER_LITERAL|          /*  e.g. "1"      */
    RUNE_BYTE_LITERAL|        /*  e.g. "b'x'"   */
    FLOAT_LITERAL|            /*  e.g. "'1.0'"  */
    COMMENT|                  /*  e.g. "//xx"     */
    NL|                       /*  newline         */
    END|                      /*  end of file     */
    SENTINEL|                 /*  ";"             */
    RUNE_LITERAL|             /*  e.g. "r'x'"      */
    STRING_LITERAL|           /*  e.g. ""xx""     */
    SINGLE_QUOTED_STRING_LITERAL|  
                              /*  e.g. "'xx'"    */
    JSTRING_LITERAL|          /*  e.g. "J"xx""     */
    MULTILINE_STRING|         /*  e.g. """"aaa""""   */
    MULTILINE_RAW_STRING|     /*  e.g. "#"aaa"#"     */
    BOOL_LITERAL|             /*  "true" or "false"  */
    UNIT_LITERAL|             /*  "()"               */
    DOLLAR_IDENTIFIER|        /*  e.g. "$x"          */
    ANNOTATION|               /*  e.g. "@When"       */
    AT_EXCL|                  /*  e.g. "@!"          */
    ILLEGAL|
    ...
}
```


### Basic_IO/basic_IO_overview.md

# I/O 流概述

本章介绍基本的 I/O 概念和文件操作。

仓颉编程语言将与应用程序外部载体交互的操作称为 I/O 操作。I 对应输入（Input），O 对应输出（Output）。

仓颉编程语言所有的 I/O 机制都是基于数据流进行输入输出，这些数据流表示了字节数据的序列。数据流是一串连续的数据集合，它就像承载数据的管道，在管道的一端输入数据，在管道的另一端就可以输出数据。

仓颉编程语言将输入输出抽象为流（Stream）。

- 将数据从外存中读取到内存中的称为输入流（InputStream），输入端可以一段一段地向管道中写入数据，这些数据段会按先后顺序形成一个长的数据流。
- 将数据从内存写入外存中的称为输出流（OutputStream），输出端也可以一段一段地从管道中读出数据，每次可以读取其中的任意长度的数据（不需要跟输入端匹配），但只能读取先输入的数据，再读取后输入的数据。

有了这一层抽象，仓颉编程语言就可以使用统一的接口来实现与外部数据的交互。

仓颉编程语言将标准输入输出、文件操作、网络数据流、字符串流、加密流、压缩流等等形式的操作，统一用 Stream 描述。

Stream 主要面向处理原始二进制数据，Stream 中最小的数据单元是 `Byte`。

仓颉编程语言将 Stream 定义成了 `interface`，它让不同的 Stream 可以用装饰器模式进行组合，极大地提升了可扩展性。

## 输入流

程序从输入流读取数据源（数据源包括外界的键盘、文件、网络等），即输入流是将数据源读入到程序的通信通道。

仓颉编程语言用 `InputStream` 接口类型来表示输入流，它提供了 `read` 函数，这个函数会将可读的数据写入到 `buffer` 中，返回值表示了该次读取的字节总数。

InputStream 接口定义：

<!-- run -->

```cangjie
interface InputStream {
    func read(buffer: Array<Byte>): Int64
}
```

当拥有一个输入流的时候，就可以像下面的代码那样去读取字节数据，读取的数据会被写到 `read` 的入参数组中。

输入流读取示例：

```cangjie
import std.io.InputStream

main() {
    let input: InputStream = ...
    let buf = Array<Byte>(256, repeat: 0)
    while (input.read(buf) > 0) {
        println(buf)
    }
}
```

## 输出流

程序向输出流写入数据。输出流是将程序中的数据输出到外界（显示器、打印机、文件、网络等）的通信通道。

仓颉编程语言用 `OutputStream` 接口类型来表示输出流，它提供了 `write` 函数，这个函数会将 `buffer` 中的数据写入到绑定的流中。

特别的，有一些输出流的 `write` 不会立即写到外存中，而是有一定的缓冲策略，只有当符合条件或主动调用 `flush` 时才会真实写入，目的是提高性能。

为了统一处理这些 `flush` 操作，在 `OutputStream` 中有一个 `flush` 的默认实现，它有助于抹平 API 调用的差异性。

OutputStream 接口定义：

```cangjie
interface OutputStream {
    func write(buffer: Array<Byte>): Unit

    func flush(): Unit {
        // 空实现
    }
}
```

当拥有一个输出流时，可以写入字节数据。

输出流写入示例：

```cangjie
import std.io.OutputStream

main() {
    let output: OutputStream = ...
    let buf = Array<Byte>(256, repeat: 111)
    output.write(buf)
    output.flush()
}
```

## 数据流分类

按照数据流职责上的差异，可以将 Stream 简单分成两类：

- 节点流：直接提供数据源，节点流的构造方式通常是依赖某种直接的外部资源（如文件、网络等）。
- 处理流：只能代理其他数据流进行处理，处理流的构造方式通常是依赖其他的流。


### Basic_IO/basic_IO_process_stream.md

# I/O 处理流

处理流是指代理其他数据流进行处理的流。

仓颉编程语言中常见的处理流包含 `BufferedInputStream`、`BufferedOutputStream`、`StringReader`、`StringWriter`、`ChainedInputStream` 等。

本章介绍缓冲流和字符串流。

## 缓冲流

由于涉及磁盘的 I/O 操作相比内存的 I/O 操作要慢很多，所以对于高频次且小数据量的读写操作来说，不带缓冲的数据流效率很低，每次读取和写入数据都会带来大量的 I/O 耗时。而带缓冲的数据流，可以多次读写数据，但不触发磁盘 I/O 操作，只是先放到内存里。等凑够了缓冲区大小的时候再一次性操作磁盘，这种方式可以显著减少磁盘操作次数，从而提升性能表现。

仓颉编程语言标准库提供了 `BufferedInputStream` 和 `BufferedOutputStream` 这两个类型用来提供缓冲功能。

使用 `BufferedInputStream` 和 `BufferedOutputStream` 类型需要导入 `io` 包。

导入 io 包示例：

<!-- run -->

```cangjie
import std.io.*
```

`BufferedInputStream` 的作用是为另一个输入流添加缓冲的功能。本质上 `BufferedInputStream` 是通过一个内部缓冲数组实现的。

当通过 `BufferedInputStream` 来读取流的数据时，`BufferedInputStream` 会一次性读取整个缓冲区大小的数据，再使用 `read` 函数就可以分多次读取更小规模的数据；当缓冲区中的数据被读完之后，输入流就会再次填充缓冲区；如此反复，直到读完数据流的所有数据。

如果构造一个 `BufferedInputStream`，只需要在构造函数中传入另一个输入流。如果需要指定缓冲区的大小，也可以额外传入 `capacity` 参数进行指定。

BufferedInputStream 构造示例：

<!-- run -->

```cangjie
import std.io.{ByteBuffer, BufferedInputStream}

main(): Unit {
    let arr1 = "0123456789".toArray()
    let byteBuffer = ByteBuffer()
    byteBuffer.write(arr1)
    let bufferedInputStream = BufferedInputStream(byteBuffer)
    let arr2 = Array<Byte>(20, repeat: 0)

    /* 读取流中数据，返回读取到的数据的长度 */
    let readLen = bufferedInputStream.read(arr2)
    println(String.fromUtf8(arr2[..readLen])) // 0123456789
}
```

`BufferedOutputStream` 的作用是为另一个输出流添加缓冲的功能。BufferedOutputStream 也是通过一个内部缓冲数组实现的。

当通过 `BufferedOutputStream` 来向输出流写入数据时，`write` 的数据会先写入内部缓冲数组中；当缓冲区中的数据被填满之后，`BufferedOutputStream` 会将缓冲区的数据一次性写入输出流中，然后清空缓冲区再次被写入；如此反复，直到写完所有的数据。

需要注意的是，由于没写够缓冲区时不会触发输出流的写入操作，所以当往 `BufferedOutputStream` 写完所有的数据后，需要额外调用 `flush` 函数来最终完成写入。

如果构造一个 `BufferedOutputStream`，只需要在构造函数中传入另一个输出流。如果需要指定缓冲区的大小，也可以额外传入 `capacity` 参数指定。

BufferedOutputStream 构造示例：

<!-- run -->

```cangjie
import std.io.*

main(): Unit {
    let arr1 = "01234".toArray()
    let byteBuffer = ByteBuffer()
    byteBuffer.write(arr1)
    let bufferedOutputStream = BufferedOutputStream(byteBuffer)
    let arr2 = "56789".toArray()

    /* 向流中写入数据，此时数据在外部流的缓冲区中 */
    bufferedOutputStream.write(arr2)

    /* 调用 flush 函数，真正将数据写入内部流中 */
    bufferedOutputStream.flush()
    println(String.fromUtf8(readToEnd(byteBuffer))) // 0123456789
}
```

## 字符串流

由于仓颉编程语言的输入流和输出流是基于字节数据来抽象的（拥有更好的性能），在部分以字符串为主的场景中使用起来不太友好，例如往文件里写入大量的文本内容时，需要将文本内容转换成字节数据，再写入文件。

为了提供友好的字符串操作能力，仓颉编程语言提供了 `StringReader` 和 `StringWriter` 来添加字符串处理能力。

使用 `StringReader` 和 `StringWriter` 类型需要导入 `io` 包：

导入 io 包示例：

<!-- run -->

```cangjie
import std.io.*
```

`StringReader` 提供了按行读、按筛选条件读的能力，相比将字节数据读出来再手动转换成字符串，具有更好的性能表现和易用性。

如果构造 `StringReader`，传入另一个输入流即可。

StringReader 使用示例：

<!-- run -->

```cangjie
import std.io.*

main(): Unit {
    let arr1 = "012\n346789".toArray()
    let byteBuffer = ByteBuffer()
    byteBuffer.write(arr1)
    let stringReader = StringReader(byteBuffer)

    /* 读取一行数据 */
    let line = stringReader.readln()
    println(line ?? "error") // 012
}
```

`StringWriter` 提供了直接写字符串、按行直接写字符串的能力，相比将字节数据手动转换成字符串再写入，具有更好的性能表现和易用性。

如果构造 `StringWriter`，传入另一个输出流即可。

StringWriter 使用示例：

<!-- run -->

```cangjie
import std.io.*

main(): Unit {
    let byteBuffer = ByteBuffer()
    let stringWriter = StringWriter(byteBuffer)

    /* 写入字符串 */
    stringWriter.write("number")

    /* 写入字符串并自动转行 */
    stringWriter.writeln(" is:")

    /* 写入数字 */
    stringWriter.write(100.0f32)

    stringWriter.flush()

    println(String.fromUtf8(readToEnd(byteBuffer))) // number is:\n100.000000
}
```


### Basic_IO/basic_IO_source_stream.md

# I/O 节点流

节点流是指直接提供数据源的流，节点流的构造方式通常是依赖某种直接的外部资源（如文件、网络等）。

仓颉编程语言中常见的节点流包含标准流（StdIn、StdOut、StdErr）、文件流（File）、网络流（Socket）等。

本章介绍标准流和文件流。

## 标准流

标准流包含标准输入流（stdin）、标准输出流（stdout）和标准错误输出流（stderr）。

标准流是程序与外部数据交互的标准接口。程序运行的时候从输入流读取数据，作为程序的输入，程序运行过程中输出的信息被传送到输出流，类似的，错误信息被传送到错误流。

在仓颉编程语言中可以使用 `Console` 类型来分别访问它们。

使用 `Console` 类型需要导入 `console` 包：

导入 console 包示例：

<!-- run -->

```cangjie
import std.console.*
```

`Console` 对三个标准流都进行了易用性封装，提供了更方便的基于 `String` 的扩展操作，并且对于很多常见类型都提供了丰富的重载来优化性能。

其中最重要的是 `Console` 提供了并发安全的保证，可以在任意线程中安全地通过 `Console` 提供的接口来读写内容。

默认情况下标准输入流来源于键盘输入的信息，例如在命令行界面中输入的文本。

当需要从标准输入流中获取数据时，可以通过 `stdIn` 来读取，例如通过 `readln` 函数来获取命令行的输入。

标准输入流读取示例：

<!-- run -->

```cangjie
import std.console.*

main() {
    let txt = Console.stdIn.readln()
    println(txt ?? "")
}
```

运行上面的代码，在命令行上输入一些文字，然后换行结束，即可看到输入的内容。

输出流分为标准输出流和标准错误流，默认情况下，它们都会输出到屏幕，例如在命令行界面中看到的文本。

当需要往标准输出流中写入数据时，可以通过 `stdOut`/`stdErr` 来写入，例如通过 `write` 函数来向命令打印内容。

使用 `stdOut` 和直接使用 `print` 函数的差别是，`stdOut` 是并发安全的，并且由于 `stdOut` 使用了缓存技术，在输入内容较多时拥有更好的性能表现。

需要注意的是，写完数据后需要对 `stdOut` 调用 `flush` 才能保证内容被写到标准流中。

标准输出流写入示例：

<!-- run -->

```cangjie
import std.console.*

main() {
    for (i in 0..1000) {
        Console.stdOut.writeln("hello, world!")
    }
    Console.stdOut.flush()
}
```

## 文件流

仓颉编程语言提供了 `fs` 包来支持通用文件系统任务。不同的操作系统对于文件系统提供的接口有所不同。仓颉编程语言抽象出以下一些共通的功能，通过统一的功能接口，屏蔽不同操作系统之间的差异，来简化使用。

常规操作任务包括：创建文件/目录、读写文件、重命名或移动文件/目录、删除文件/目录、复制文件/目录、获取文件/目录元数据、检查文件/目录是否存在。具体 API 可以查阅库文档。

使用文件系统相关的功能需要导入 `fs` 包：

导入 fs 包示例：

<!-- run -->

```cangjie
import std.fs.*
```

本章会着重介绍 `File` 相关的使用，对于 `Path` 和 `Directory` 的使用可以查阅对应的 API 文档。

`File` 类型在仓颉编程语言中同时提供了常规文件操作和文件流两类功能。

### 常规文件操作

对于常规的文件操作，可以使用一系列静态函数来完成快捷的操作。

例如如果要检查某个路径对应的文件是否存在，可以使用 `exists` 函数。当 `exists` 函数返回 `true` 时表示文件存在，反之不存在。

exists 函数使用示例：

<!-- run -->

```cangjie
import std.fs.*

main() {
    let exist = exists("./tempFile.txt")
    println("exist: ${exist}")
}
```

移动文件、拷贝文件和删除文件也非常简单，`File` 同样提供了对应的静态函数 `move`、`copy`、`delete`。

move、copy、delete 函数使用示例：

<!-- compile -->

```cangjie
import std.fs.*

main() {
    copy("./tempFile.txt", to: "./tempFile2.txt", overwrite: false)
    rename("./tempFile2.txt",  to: "./tempFile3.txt", overwrite: false)
    remove("./tempFile3.txt")
}
```

如果需要直接将文件的所有数据读出来，或者一次性将数据写入文件里，可以使用 `File` 提供的 `readFrom`、`writeTo` 函数直接读写文件。在数据量较少的情况下它们既简单易用又能提供较好的性能表现，无需手动处理数据流。

readFrom、writeTo 函数使用示例：

<!-- compile -->

```cangjie
import std.fs.*

main() {
    let bytes = File.readFrom("./tempFile.txt") // 一次性读取了所有的数据
    File.writeTo("./otherFile.txt", bytes) // 把数据一次性写入另一个文件中
}
```

### 文件流操作

除了上述的常规文件操作之外，`File` 类型也被设计为一种数据流类型，因此 `File` 类型本身实现了 `IOStream` 接口。当创建了一个 `File` 的实例，可以把这个实例当成数据流来使用。

File 类定义：

```cangjie
public class File <: Resource & IOStream & Seekable {
    ...
}
```

`File` 提供了两种构造方式，一种是通过方便的静态函数 `create` 直接创建新文件的实例，另一种是通过构造函数传入完整的打开文件模式来构造新实例。

其中 `create` 创建的文件是只写的，不能对实例进行读操作，否则会抛出运行时异常。

File 构造示例：

<!-- compile -->

```cangjie
// 创建
internal import std.fs.*
internal import std.io.*

main() {
    let file = File.create("./tempFile.txt")
    file.write("hello, world!".toArray())

    // 打开
    let file2 = File("./tempFile.txt", Read)
    let bytes = readToEnd(file2) // 读取所有数据
    println(bytes)
}
```

当需要更精细的打开模式时，可以使用构造函数传入一个 `OpenMode` 值。`OpenMode` 是一个 `enum` 类型，它提供了丰富的文件打开模式，包含 `Read`、`Write`、`Append` 和 `ReadWrite` 模式。

File 打开模式使用示例：

```cangjie
// 使用指定选项打开模式
let file = File("./tempFile.txt", Write)
```

因为打开 `File` 的实例会占用宝贵的系统资源，所以使用完 `File` 的实例之后需要注意及时关闭 `File`，以释放系统资源。

`File` 实现了 `Resource` 接口，在大多数时候都可以使用 try-with-resource 语法来简化使用。

try-with-resource 语法使用示例：

```cangjie
try (file2 = File("./tempFile.txt", Read)) {
    ...
    // 结束使用后自动释放文件
}
```


*... and 95 more files in docs/syntax/*


## Standard Library API

<details>
<summary>Click to expand file list</summary>

- `argopt/argopt_package_api/argopt_package_classes.md`
- `argopt/argopt_package_api/argopt_package_enums.md`
- `argopt/argopt_package_api/argopt_package_exception.md`
- `argopt/argopt_package_api/argopt_package_function.md`
- `argopt/argopt_package_api/argopt_package_struct.md`
- `argopt/argopt_package_overview.md`
- `argopt/argopt_samples/argument_parse.md`
- `argopt/argopt_samples/long_argument_parse.md`
- `argopt/argopt_samples/short_argument_parse.md`
- `ast/ast_package_api/ast_package_classes.md`
- `ast/ast_package_api/ast_package_enums.md`
- `ast/ast_package_api/ast_package_exceptions.md`
- `ast/ast_package_api/ast_package_funcs.md`
- `ast/ast_package_api/ast_package_interfaces.md`
- `ast/ast_package_api/ast_package_structs.md`
- `ast/ast_package_overview.md`
- `ast/ast_samples/context.md`
- `ast/ast_samples/dump.md`
- `ast/ast_samples/operate.md`
- `ast/ast_samples/parse.md`
- `ast/ast_samples/report.md`
- `ast/ast_samples/traverse.md`
- `binary/binary_package_api/binary_package_interfaces.md`
- `binary/binary_package_overview.md`
- `collection/collection_package_api/collection_package_class.md`
- `collection/collection_package_api/collection_package_exception.md`
- `collection/collection_package_api/collection_package_function.md`
- `collection/collection_package_api/collection_package_interface.md`
- `collection/collection_package_overview.md`
- `collection/collection_package_samples/sample_arraylist_add.md`
- `collection/collection_package_samples/sample_arraylist_get_set.md`
- `collection/collection_package_samples/sample_arraylist_remove_clear_slice.md`
- `collection/collection_package_samples/sample_hashmap_add_remove_clear.md`
- `collection/collection_package_samples/sample_hashmap_get_add_contains.md`
- `collection/collection_package_samples/sample_hashset_add_iterator_remove.md`
- `collection/collection_package_samples/sample_iterator.md`
- `collection/collection_package_samples/sample_treeset_add_iterator_remove.md`
- `collection_concurrent/collection_concurrent_package_api/collection_concurrent_class.md`
- `collection_concurrent/collection_concurrent_package_api/collection_concurrent_interface.md`
- `collection_concurrent/collection_concurrent_package_api/collection_concurrent_types.md`
- `collection_concurrent/collection_concurrent_package_overview.md`
- `collection_concurrent/collection_concurrent_samples/sample_concurrent_linked_queue.md`
- `collection_concurrent/collection_concurrent_samples/sample_concurrenthashmap.md`
- `console/console_package_api/console_package_class.md`
- `console/console_package_overview.md`
- `console/console_samples/console_sample.md`
- `convert/convert_package_api/convert_package_interfaces.md`
- `convert/convert_package_overview.md`
- `convert/convert_samples/convert_samples.md`
- `core/core_package_api/core_package_classes.md`
- `core/core_package_api/core_package_enums.md`
- `core/core_package_api/core_package_exceptions.md`
- `core/core_package_api/core_package_funcs.md`
- `core/core_package_api/core_package_interfaces.md`
- `core/core_package_api/core_package_intrinsics.md`
- `core/core_package_api/core_package_structs.md`
- `core/core_package_api/core_package_types.md`
- `core/core_package_overview.md`
- `core/core_samples/core_cstring_sample.md`
- `core/core_samples/core_spawn_sample.md`
- `crypto/cipher/cipher_package_api/cipher_package_interfaces.md`
- `crypto/cipher/cipher_package_overview.md`
- `crypto/digest/digest_package_api/digest_package_funcs.md`
- `crypto/digest/digest_package_api/digest_package_interfaces.md`
- `crypto/digest/digest_package_overview.md`
- `database_sql/database_sql_package_api/database_sql_package_classes.md`
- `database_sql/database_sql_package_api/database_sql_package_enums.md`
- `database_sql/database_sql_package_api/database_sql_package_exceptions.md`
- `database_sql/database_sql_package_api/database_sql_package_interfaces.md`
- `database_sql/database_sql_package_overview.md`
- `database_sql/database_sql_samples/db_get_connection.md`
- `database_sql/database_sql_samples/db_modify_table.md`
- `database_sql/database_sql_samples/db_operations.md`
- `database_sql/database_sql_samples/db_transactions.md`
- `deriving/deriving_package_api/deriving_package_macros.md`
- `deriving/deriving_package_overview.md`
- `deriving/deriving_samples/deriving_user_guide.md`
- `env/env_package_api/env_package_classes.md`
- `env/env_package_api/env_package_exceptions.md`
- `env/env_package_api/env_package_funcs.md`
- `env/env_package_overview.md`
- `env/env_samples/env_sample.md`
- `fs/fs_package_api/fs_package_classes.md`
- `fs/fs_package_api/fs_package_enums.md`
- `fs/fs_package_api/fs_package_exceptions.md`
- `fs/fs_package_api/fs_package_funcs.md`
- `fs/fs_package_api/fs_package_structs.md`
- `fs/fs_package_overview.md`
- `fs/fs_samples/directory_samples.md`
- `fs/fs_samples/file_samples.md`
- `fs/fs_samples/fileinfo_samples.md`
- `fs/fs_samples/path_samples.md`
- `io/io_package_api/io_package_classes.md`
- `io/io_package_api/io_package_enums.md`
- `io/io_package_api/io_package_exceptions.md`
- `io/io_package_api/io_package_funcs.md`
- `io/io_package_api/io_package_interfaces.md`
- `io/io_package_overview.md`
- `io/io_samples/buffered_input_stream.md`
- `io/io_samples/buffered_output_stream.md`
- `io/io_samples/byte_buffer.md`
- `io/io_samples/chained_input_stream.md`
- `io/io_samples/multi_output_stream.md`
- `io/io_samples/string_reader.md`
- `io/io_samples/string_writer.md`
- `math/math_package_api/math_package_enums.md`
- `math/math_package_api/math_package_funcs.md`
- `math/math_package_api/math_package_interfaces.md`
- `math/math_package_overview.md`
- `math/math_samples/math_basic_operation.md`
- `math_numeric/math_numeric_package_api/math_numeric_package_enums.md`
- `math_numeric/math_numeric_package_api/math_numeric_package_funcs.md`
- `math_numeric/math_numeric_package_api/math_numeric_package_structs.md`
- `math_numeric/math_numeric_package_overview.md`
- `math_numeric/math_numeric_samples/bigInt_basic_arithmetic.md`
- `math_numeric/math_numeric_samples/bigInt_basic_prop.md`
- `math_numeric/math_numeric_samples/bigInt_compare_opration.md`
- `math_numeric/math_numeric_samples/decimal_basic_arithmetic.md`
- `math_numeric/math_numeric_samples/decimal_basic_prop.md`
- `math_numeric/math_numeric_samples/decimal_compare_opration.md`
- `net/net_package_api/net_package_classes.md`
- `net/net_package_api/net_package_enums.md`
- `net/net_package_api/net_package_exceptions.md`
- `net/net_package_api/net_package_interfaces.md`
- `net/net_package_api/net_package_structs.md`
- `net/net_package_overview.md`
- `net/net_samples/socket_option.md`
- `net/net_samples/tcp.md`
- `net/net_samples/udp.md`
- `net/net_samples/unix.md`
- `net/net_samples/unix_datagram.md`
- `objectpool/objectpool_package_api/objectpool_package_classes.md`
- `objectpool/objectpool_package_overview.md`
- `overflow/overflow_package_api/overflow_package_exceptions.md`
- `overflow/overflow_package_api/overflow_package_interfaces.md`
- `overflow/overflow_package_overview.md`
- `overflow/overflow_samples/option.md`
- `overflow/overflow_samples/saturating.md`
- `overflow/overflow_samples/throwing.md`
- `overflow/overflow_samples/wrapping.md`
- `posix/posix_package_api/posix_package_constants_vars.md`
- `posix/posix_package_api/posix_package_funcs.md`
- `posix/posix_package_overview.md`
- `posix/posix_samples/posix_get_file_content_samples.md`
- `posix/posix_samples/posix_get_file_info_samples.md`
- `posix/posix_samples/posix_get_os_envinfo_samples.md`
- `posix/posix_samples/posix_process_samples.md`
- `process/process_package_api/process_package_classes.md`
- `process/process_package_api/process_package_enums.md`
- `process/process_package_api/process_package_exceptions.md`
- `process/process_package_api/process_package_funcs.md`
- `process/process_package_overview.md`
- `process/process_samples/process_sample.md`
- `process/process_samples/process_subprocess_sample.md`
- `random/random_package_api/random_package_classes.md`
- `random/random_package_overview.md`
- `ref/ref_package_api/ref_package_classes.md`
- `ref/ref_package_api/ref_package_enums.md`
- `ref/ref_package_overview.md`
- `ref/ref_samples/weakref_in_cache.md`
- `reflect/reflect_package_api/reflect_package_classes.md`
- `reflect/reflect_package_api/reflect_package_enums.md`
- `reflect/reflect_package_api/reflect_package_exceptions.md`
- `reflect/reflect_package_api/reflect_package_funcs.md`
- `reflect/reflect_package_api/reflect_package_types.md`
- `reflect/reflect_package_overview.md`
- `reflect/reflect_samples/annotation.md`
- `reflect/reflect_samples/dynload.md`
- `reflect/reflect_samples/memberInfo.md`
- `reflect/reflect_samples/typeInfo.md`
- `regex/regex_package_api/regex_package_classes.md`
- `regex/regex_package_api/regex_package_enums.md`
- `regex/regex_package_api/regex_package_exceptions.md`
- `regex/regex_package_api/regex_package_structs.md`
- `regex/regex_package_overview.md`
- `regex/regex_samples/regex_sample.md`
- `runtime/runtime_package_api/runtime_package_funcs.md`
- `runtime/runtime_package_api/runtime_package_structs.md`
- `runtime/runtime_package_overview.md`
- `sort/sort_package_api/sort_package_funcs.md`
- `sort/sort_package_api/sort_package_interfaces.md`
- `sort/sort_package_overview.md`
- `sort/sort_samples/sort_sample_array.md`
- `std_module_overview.md`
- `sync/sync_package_api/sync_package_classes.md`
- `sync/sync_package_api/sync_package_constants_vars.md`
- `sync/sync_package_api/sync_package_enums.md`
- `sync/sync_package_api/sync_package_exceptions.md`
- `sync/sync_package_api/sync_package_interfaces.md`
- `sync/sync_package_api/sync_package_structs.md`
- `sync/sync_package_overview.md`
- `sync/sync_samples/sync_samples.md`
- `time/time_package_api/time_package_classes.md`
- `time/time_package_api/time_package_enums.md`
- `time/time_package_api/time_package_exceptions.md`
- `time/time_package_api/time_package_structs.md`
- `time/time_package_overview.md`
- `time/time_samples/datetime_compare.md`
- `time/time_samples/datetime_parse.md`
- `time/time_samples/datetime_prop.md`
- `time/time_samples/datetime_tz.md`
- `time/time_samples/monotime_test.md`
- `unicode/unicode_package_api/unicode_package_enums.md`
- `unicode/unicode_package_api/unicode_package_interfaces.md`
- `unicode/unicode_package_overview.md`
- `unittest/unittest_package_api/unittest_package_classes.md`
- `unittest/unittest_package_api/unittest_package_enums.md`
- `unittest/unittest_package_api/unittest_package_exceptions.md`
- `unittest/unittest_package_api/unittest_package_functions.md`
- `unittest/unittest_package_api/unittest_package_interfaces.md`
- `unittest/unittest_package_api/unittest_package_structs.md`
- `unittest/unittest_package_api/unittest_package_types.md`
- `unittest/unittest_package_overview.md`
- `unittest/unittest_samples/unittest_basics.md`
- `unittest/unittest_samples/unittest_benchmarks.md`
- `unittest/unittest_samples/unittest_dynamic_tests.md`
- `unittest/unittest_samples/unittest_getting_started.md`
- `unittest/unittest_samples/unittest_parameterized_tests.md`
- `unittest/unittest_samples/unittest_test_templates.md`
- `unittest_common/unittest_common_package_api/unittest_common_package_classes.md`
- `unittest_common/unittest_common_package_api/unittest_common_package_enums.md`
- `unittest_common/unittest_common_package_api/unittest_common_package_exceptions.md`
- `unittest_common/unittest_common_package_api/unittest_common_package_functions.md`
- `unittest_common/unittest_common_package_api/unittest_common_package_interfaces.md`
- `unittest_common/unittest_common_package_api/unittest_common_package_structs.md`
- `unittest_common/unittest_common_package_overview.md`
- `unittest_diff/unittest_diff_package_api/unittest_diff_package_interfaces.md`
- `unittest_diff/unittest_diff_package_overview.md`
- `unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.md`
- `unittest_mock/unittest_mock_package_api/unittest_mock_package_enums.md`
- `unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.md`
- `unittest_mock/unittest_mock_package_api/unittest_mock_package_functions.md`
- `unittest_mock/unittest_mock_package_api/unittest_mock_package_interfaces.md`
- `unittest_mock/unittest_mock_package_overview.md`
- `unittest_mock/unittest_mock_samples/mock_framework_basics.md`
- `unittest_mock/unittest_mock_samples/mock_framework_getting_started.md`
- `unittest_mock/unittest_mock_samples/mock_framework_stubs.md`
- `unittest_mock/unittest_mock_samples/mock_framework_verification.md`
- `unittest_mock_mockmacro/unittest_mock_mockmacro_package_api/unittest_mock_mockmacro_package_macros.md`
- `unittest_mock_mockmacro/unittest_mock_mockmacro_package_overview.md`
- `unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_classes.md`
- `unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_functions.md`
- `unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md`
- `unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_structs.md`
- `unittest_prop_test/unittest_prop_test_package_overview.md`
- `unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.md`
- `unittest_testmacro/unittest_testmacro_package_overview.md`

</details>

### argopt/argopt_package_api/argopt_package_classes.md

# 类

## class Argopt <sup>(deprecated)</sup>

```cangjie
public class ArgOpt {
    public init(shortArgFormat: String)
    public init(longArgList: Array<String>)
    public init(shortArgFormat: String, longArgList: Array<String>)
    public init(args: Array<String>, shortArgFormat: String, longArgList: Array<String>)
}
```

功能：用于解析命令行参数，并提供了获取解析结果的功能。

一个命令行参数是由前缀符号、参数名及参数值组成。

其中， "-" 表示短参（短命令行参数）的前缀，"--" 表示长参（长命令行参数）的前缀。可解析的短参参数名只能是字母，可解析长参参数名字符串需满足：以字母开头，参数名中不能包含 "="。

例如："-a123" 和 "--target=abc.txt" 为两个命令行参数，"a" 为短参名，"target" 为长参名。而 "-123" 和 "--tar=get=abc.txt" 则是错误的命令行参数。

该类允许用户指定参数名和参数字符串，并提供根据参数名解析字符串的方法。

用户指定短参名和长参名时格式如下：

- 短参名字符串的参数，格式为："a:"，规范为：一位字母和 ":" 的组合，例如："ab:"，该例仅解析 "b" 作为短参名。
- 长参名字符串数组参数，字符串格式为："--testA=" 或 "testA="，规范为："--" + 长参参数名 + "="（前缀"--"可省略）。

根据参数名解析命令行参数时，若命令行参数格式正确且有对应的参数名，可正确解析并被用户获取，否则不会解析。

例如：参数名为 "a:b:"，命令行参数为 "-a123 -cofo"，将解析出参数名为 "a"，参数值为 "123" 的命令行参数。"-cofo" 则不会解析。

> **注意：**
>
> 未来版本即将废弃，使用 [parseArguments](./argopt_package_function.md#func-parseargumentsarraystring-arrayargumentspec) 代替。

### init(Array\<String>)

```cangjie
public init(longArgList: Array<String>)
```

功能：构造 `ArgOpt` 实例，并从列表的字符串中解析长参名。

参数：

- longArgList: [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<[String](../../core/core_package_api/core_package_structs.md#struct-string)> - 包含长参名的字符串数组。

异常：

- [IllegalArgumentException](../../core/core_package_api/core_package_exceptions.md#class-illegalargumentexception) - 当字符串数组中的长参名字符串不符合规范，或字符串不符合 UTF-8 编码，或不存在该 Unicode 字符时，抛出异常。

### init(Array\<String>, String, Array\<String>)

```cangjie
public init(args: Array<String>, shortArgFormat: String, longArgList: Array<String>)
```

功能：构造 `ArgOpt` 实例，并从短参名字符串中解析短参名，从列表的字符串中解析长参名。若解析成功，则依据解析出的参数名从参数 `args` 指定的命令行参数中解析参数名的对应取值。

参数：

- args: [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<[String](../../core/core_package_api/core_package_structs.md#struct-string)> - 待解析的命令行参数字符串数组。
- shortArgFormat: [String](../../core/core_package_api/core_package_structs.md#struct-string) - 包含短参名的字符串。
- longArgList: [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<[String](../../core/core_package_api/core_package_structs.md#struct-string)> - 包含长参名的字符串数组。

异常：

- [IllegalArgumentException](../../core/core_package_api/core_package_exceptions.md#class-illegalargumentexception) - 当短参名字符串不符合规范，或字符串数组中的长参名字符串不符合规范，或字符串不符合 UTF-8 编码，或不存在该 Unicode 字符时，抛出异常。

### init(String)

```cangjie
public init(shortArgFormat: String)
```

功能：构造 `ArgOpt` 实例，并从短参名字符串中解析短参名。

参数：

- shortArgFormat: [String](../../core/core_package_api/core_package_structs.md#struct-string) - 包含短参名的字符串。

异常：

- [IllegalArgumentException](../../core/core_package_api/core_package_exceptions.md#class-illegalargumentexception) - 当短参名字符串不符合规范，或字符串不符合 UTF-8 编码，或不存在该 Unicode 字符时，抛出异常。

### init(String, Array\<String>)

```cangjie
public init(shortArgFormat: String, longArgList: Array<String>)
```

功能：构造 `ArgOpt` 实例，并从短参名字符串中解析短参名，从列表的字符串中解析长参名。

参数：

- shortArgFormat: [String](../../core/core_package_api/core_package_structs.md#struct-string) - 包含短参名的字符串。
- longArgList: [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<[String](../../core/core_package_api/core_package_structs.md#struct-string)> - 包含长参名的字符串数组。

异常：

- [IllegalArgumentException](../../core/core_package_api/core_package_exceptions.md#class-illegalargumentexception) - 当短参名字符串不符合规范，或字符串数组中的长参名字符串不符合规范，或字符串不符合 UTF-8 编码，或不存在该 Unicode 字符时，抛出异常。

### func getArg(String)

```cangjie
public func getArg(arg: String): Option<String>
```

功能：返回参数 `arg` 指定参数的解析值。

参数：

- arg: [String](../../core/core_package_api/core_package_structs.md#struct-string) - 前缀和参数名组成的字符串（可省略前缀）。

返回值：

- [Option](../../core/core_package_api/core_package_enums.md#enum-optiont)\<[String](../../core/core_package_api/core_package_structs.md#struct-string)> - 参数解析值。

### func getArgumentsMap()

```cangjie
public func getArgumentsMap(): HashMap<String, String>
```

功能：获取所有已解析的参数名和参数值，以哈希表的形式返回。

返回值：

- [HashMap](../../collection/collection_package_api/collection_package_class.md#class-hashmapk-v)\<[String](../../core/core_package_api/core_package_structs.md#struct-string), [String](../../core/core_package_api/core_package_structs.md#struct-string)> - 已解析的参数名为键，参数值为值的哈希表。

### func getUnparseArgs()

```cangjie
public func getUnparseArgs(): Array<String>
```

功能：返回未被解析的命令行参数。

返回值：

- [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<[String](../../core/core_package_api/core_package_structs.md#struct-string)> - 存放没有被解析的字符串的数组。


### argopt/argopt_package_api/argopt_package_enums.md

# 枚举

## enum ArgumentMode

```cangjie
public enum ArgumentMode <: ToString & Equatable<ArgumentMode> {
    | NoValue
    | RequiredValue
    | OptionalValue
}
```

功能：描述选项的参数模式。

父类型：

- [ToString](../../../std/core/core_package_api/core_package_interfaces.md#interface-tostring)
- [Equatable](../../../std/core/core_package_api/core_package_interfaces.md#interface-equatablet)\<[ArgumentMode](#enum-argumentmode)>

### NoValue

```cangjie
NoValue
```

功能：表示选项的值是不存在的。

### OptionalValue

```cangjie
OptionalValue
```

功能：表示选项的值是可选的。

### RequiredValue

```cangjie
RequiredValue
```

功能：表示选项的值是必须的。

### func toString()

```cangjie
public func toString(): String
```

功能：获取参数模式字符串。

返回值：

- [String](../../../std/core/core_package_api/core_package_structs.md#struct-string) - 参数模式字符串。

### operator func ==(ArgumentMode)

```cangjie
public operator func ==(that: ArgumentMode): Bool
```

功能：比较参数模式是否相同。

参数：

- that: [ArgumentMode](./argopt_package_enums.md#enum-argumentmode) - 参数模式。

返回值：

- [Bool](../../../std/core/core_package_api/core_package_intrinsics.md#bool) - 相同时返回 `true`，否则返回 `false`。

## enum ArgumentSpec

```cangjie
public enum ArgumentSpec {
    | Short(Rune, ArgumentMode)
    | Short(Rune, ArgumentMode, (String) -> Unit)
    | Long(String, ArgumentMode)
    | Long(String, ArgumentMode, (String) -> Unit)
    | Full(String, Rune, ArgumentMode)
    | Full(String, Rune, ArgumentMode, (String) -> Unit)
    | NonOptions((Array<String>) -> Unit)
}
```

功能：描述参数的规范。

### Full(String, Rune, ArgumentMode)

```cangjie
Full(String, Rune, ArgumentMode)
```

功能：表示同时存在长选项和短选项。

### Full(String, Rune, ArgumentMode, (String) -> Unit)

```cangjie
Full(String, Rune, ArgumentMode, (String) -> Unit)
```

功能：表示同时存在长选项和短选项，并持有一个 `lambda` 回调函数。

### Long(String, ArgumentMode)

```cangjie
Long(String, ArgumentMode)
```

功能：表示是一个长选项规格。

### Long(String, ArgumentMode, (String) -> Unit)

```cangjie
Long(String, ArgumentMode, (String) -> Unit)
```

功能：表示是一个长选项，同时持有一个 `lambda` 回调函数。

### NonOptions((Array\<String>) -> Unit)

```cangjie
NonOptions((Array<String>) -> Unit)
```

功能：表示是一个非选项。

### Short(Rune, ArgumentMode)

```cangjie
Short(Rune, ArgumentMode)
```

功能：表示是一个短选项。

### Short(Rune, ArgumentMode, (String) -> Unit)

```cangjie
Short(Rune, ArgumentMode, (String) -> Unit)
```

功能：表示是一个短选项，同时持有一个 `lambda` 回调函数。


### argopt/argopt_package_api/argopt_package_exception.md

# 异常

## class ArgumentParseException

```cangjie
public class ArgumentParseException <: Exception {
    public init()
    public init(message: String)
}
```

功能：参数解析异常类。当参数解析出错（如：不识别的选项、缺少值的选项）时，抛出此异常。

父类型：

- [Exception](../../core/core_package_api/core_package_exceptions.md#class-exception)

### init()

```cangjie
public init()
```

功能：构造一个不带异常信息的实例。

### init(String)

```cangjie
public init(message: String)
```

功能：根据异常信息构造异常实例。

参数：

- message: [String](../../core/core_package_api/core_package_structs.md#struct-string) - 异常信息。


### argopt/argopt_package_api/argopt_package_function.md

# 函数

## func parseArguments(Array\<String>, Array\<ArgumentSpec>)

```cangjie
public func parseArguments(args: Array<String>, specs: Array<ArgumentSpec>): ParsedArguments
```

功能：根据提供的参数规范 `specs` 解析命令行参数 `args`，返回一个结构化的对象，包含解析后的选项和非选项参数。

该函数将 `args` 中的每个参数与 `specs` 中定义的选项进行匹配。对于匹配成功的选项，它会将选项名称和对应的值加入到 [options](./argopt_package_struct.md#prop-options) 中，未匹配的参数会被当作非选项参数处理，并添加到 [nonOptions](./argopt_package_struct.md#prop-nonoptions) 中。此外，当解析到 `--` 时，将提前终止选项扫描，其后的所有参数都将被视作`非选项`。

该函数支持 `短选项`、`长选项`、`短前缀长选项`、`短选项组合`、`非选项`、`非法选项` 的解析处理。

`specs` 的每个 [ArgumentSpec](./argopt_package_enums.md#enum-argumentspec) 持有的 [ArgumentMode](./argopt_package_enums.md#enum-argumentmode) 决定了参数的处理方式。

- 对于长选项，根据不同的 [ArgumentMode](./argopt_package_enums.md#enum-argumentmode) 仅可以处理以下格式：
    - [RequiredValue](./argopt_package_enums.md#requiredvalue): `--option=value` or `--option value`
    - [OptionalValue](./argopt_package_enums.md#optionalvalue): `--option=value` or `--option`
    - [NoValue](./argopt_package_enums.md#novalue): `--option`

- 对于短选项，根据不同的 [ArgumentMode](./argopt_package_enums.md#enum-argumentmode) 仅可以处理以下格式：
    - [RequiredValue](./argopt_package_enums.md#requiredvalue): `-ov` or `-o v`
    - [OptionalValue](./argopt_package_enums.md#optionalvalue): `-ov` or `-o`
    - [NoValue](./argopt_package_enums.md#novalue): `-o`

对于短选项组合的场景：

- 当解析到第一个非 [NoValue](./argopt_package_enums.md#novalue) 的选项时:
    - 如果该选项为 [OptionalValue](./argopt_package_enums.md#optionalvalue)，紧随选项后的内容若存在，则会被作为该选项的值来解析。
    - 如果该选项为 [RequiredValue](./argopt_package_enums.md#requiredvalue)，紧随选项后的内容会被作为该选项的值来解析。
- 如果一组短选项可以组合成长选项的字面值，那么视为长选项而非短选项组合，如 -abc 同时已定义了 `abc` 的长选项和 `a` `b` `c` 三个短选项，会被视作长选项解析。

如果 [ArgumentSpec](./argopt_package_enums.md#enum-argumentspec) 提供了 `lambda` 回调函数，该回调会在解析成功后被调用，处理解析到的参数值。

如果传入的 `args` 存在对同一选项多次赋值的情况，则以最后一次的值作为该选项的值。

参数：

- args: [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<[String](../../core/core_package_api/core_package_structs.md#struct-string)> - 被解析的参数。

- specs: [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<[ArgumentSpec](./argopt_package_enums.md#enum-argumentspec)> - 参数的规范。

返回值：

- [ParsedArguments](./argopt_package_struct.md#struct-parsedarguments) - 参数解析的结果。

异常：

- [ArgumentParseException](./argopt_package_exception.md#class-argumentparseexception) - 当参数解析失败或解析到`非法选项`时，抛出异常。

- [IllegalArgumentException](../../../std/core/core_package_api/core_package_exceptions.md#class-illegalargumentexception) - 当定义了相同 `name` 的 [ArgumentSpec](./argopt_package_enums.md#enum-argumentspec) 时，抛出异常。


### argopt/argopt_package_api/argopt_package_struct.md

# 结构体

## struct ParsedArguments

```cangjie
public struct ParsedArguments {
}
```

功能：存储参数解析的结果。

### prop nonOptions

```cangjie
public prop nonOptions: Array<String>
```

功能：存储参数解析得到的非选项。

类型：[Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<[String](../../core/core_package_api/core_package_structs.md#struct-string)>

### prop options

```cangjie
public prop options: ReadOnlyMap<String, String>
```

功能：存储参数解析得到的选项。

类型：[ReadOnlyMap](../../collection/collection_package_api/collection_package_interface.md#interface-readonlymapk-v)


### argopt/argopt_package_overview.md

# std.argopt

## 功能介绍

argopt 包提供从命令行参数字符串解析出参数名和参数值的相关能力。

命令行参数是在命令行中传递给程序的参数，它们用于指定程序的配置或行为。例如，一个命令行程序可能有一个参数来指定它要处理的文件的名称，或者一个参数来指定使用的数据库。这些参数通常会被解析并传递给程序的代码，以便程序可以根据这些参数正确地执行其功能。

命令行参数：通常以是否由 `-` 为前缀区分，可以分为选项和非选项。

- 选项：以 `-` 为前缀。
    - 短选项：以单个 `-` 为前缀且仅含单个字符的选项。
    - 长选项：以 `--` 为前缀的选项，一般包含多个字符。
    - 短前缀长选项：以单个 `-` 为前缀但包含多个字符的选项。
    - 短选项组合：以 `-` 为前缀，将多个短选项以任意顺序组合的选项。
- 非选项：不以 `-` 为前缀。

> **注意：**
>
> 单独的 "--" 后面出现的所有参数也会被视作非选项，如 "-f -- a -b --cde"中，"a"、 "-b"、 "--cde" 都是非选项。

## API 列表

### 函数

|  函数名 | 功能  |
| ------------ | ------------ |
| [parseArguments](./argopt_package_api/argopt_package_function.md#func-parseargumentsarraystring-arrayargumentspec) | 根据给定的输入和规格，解析出对应的参数。|

### 类

|                 类名              |                功能                 |
| --------------------------------- | ---------------------------------- |
| [ArgOpt <sup>(deprecated)</sup>](./argopt_package_api/argopt_package_classes.md#class-argopt-deprecated) | `Argopt` 用于解析命令行参数，并提供了获取解析结果的功能。 |

### 枚举

|                 枚举名              |                功能                 |
| --------------------------------- | ---------------------------------- |
| [ArgumentMode](./argopt_package_api/argopt_package_enums.md#enum-argumentmode) | 参数模式。      |
| [ArgumentSpec](./argopt_package_api/argopt_package_enums.md#enum-argumentspec) | 参数规格。    |

### 结构体

| 结构体名                                                                                |           功能           |
|-------------------------------------------------------------------------------------| ------------------------ |
| [ParsedArguments](./argopt_package_api/argopt_package_struct.md#struct-parsedarguments) | 参数解析结果。 |

### 异常类

|                 异常类名              |                功能                 |
| --------------------------------- | ---------------------------------- |
| [ArgumentParseException](./argopt_package_api/argopt_package_exception.md#class-argumentparseexception) | 解析出错时抛出此异常。|


### argopt/argopt_samples/argument_parse.md

# 命令行解析

## 不带回调

示例：

<!-- run -->
```cangjie
import std.env.*
import std.argopt.*

main(args: Array<String>): Unit {
    let argSpecs = [
        Short(r'a', NoValue),
        Long("test1", RequiredValue),
        Full("test2", r'c', OptionalValue)
    ]
    try {
        var result = parseArguments(args, argSpecs)
        println("Got a: ${result.options.contains('a')}")
        println("Test1: ${result.options.get("test1")}")
        println("Test2: ${result.options.get("test2")}")
        println("c: ${result.options.get('c')}")
        println("NonOptions: ${result.nonOptions}")
    } catch (e: ArgumentParseException) {
        println("Usage: error")
        return
    }
}
```

运行结果：

```bash
$ cjc main.cj && ./main -a --test1 t1val
Got a: true
Test1: Some(t1val)
Test2: None
c: None
NonOptions: []

$ cjc main.cj && ./main -a --test1
Usage: error

$ cjc main.cj && ./main -a --test1 t1val --test2
Got a: true
Test1: Some(t1val)
Test2: Some()
c: None
NonOptions: []

$ cjc main.cj && ./main -a --test1 t1val --test2 t2val
Got a: true
Test1: Some(t1val)
Test2: Some()
c: None
NonOptions: [t2val]

$ cjc main.cj && ./main -a --test1 t1val -ct2val
Got a: true
Test1: Some(t1val)
Test2: None
c: Some(t2val)
NonOptions: []
```

### 带回调

示例：

<!-- run -->
```cangjie
import std.argopt.*

main(args: Array<String>): Unit {
    let argSpecs = [
        Short(r'a', NoValue) {_ => println("Got a")},
        Long("test1", RequiredValue) {v => println("Got test1: `${v}`")},
        Full("test2", r'c', OptionalValue) {v => println("Got test2: `${v}`")},
        NonOptions {v => println("Got NonOptions: ${v}")}
    ]
    try {
        parseArguments(args, argSpecs)
    } catch (e: ArgumentParseException) {
        println("Usage: xxxx")
    }
}
```

运行结果：

```bash
$ cjc main.cj && ./main -a --test1 t1val --test2 t2val
Got a
Got test1: `t1val`
Got test2: ``
Got NonOptions: [t2val]
```


### argopt/argopt_samples/long_argument_parse.md

# 长命令行参数解析 <sup>(deprecated)</sup>

示例：

<!-- verify -->
```cangjie
import std.argopt.*

main() {
    let shortArgs: Array<String> = ["--test1=abc", "--test2=123", "--test3 xyz"]
    let shortArgName: String = ""
    let longArgName: Array<String> = ["--test1=", "test2=", "--test3="]
    let ao: ArgOpt = ArgOpt(shortArgs, shortArgName, longArgName)
    println(ao.getArg("--test1") ?? "None")
    println(ao.getArg("--test2") ?? "None")
    println(ao.getArg("--test3") ?? "None")
}
```

运行结果：

```text
abc
123
None
```


### argopt/argopt_samples/short_argument_parse.md

# 短命令行参数解析 <sup>(deprecated)</sup>

示例：

<!-- verify -->
```cangjie
import std.argopt.*

main() {
    let shortArgs: Array<String> = ["-a123", "-bofo", "-cccc"]
    let shortArgName: String = "a:b:c"
    let longArgName: Array<String> = Array<String>()
    let ao: ArgOpt = ArgOpt(shortArgs, shortArgName, longArgName)
    println(ao.getArg("-a") ?? "None")
    println(ao.getArg("-b") ?? "None")
    println(ao.getArg("-c") ?? "None")
}
```

运行结果：

```text
123
ofo
None
```


### ast/ast_package_api/ast_package_classes.md

# 类

## class Annotation

```cangjie
public class Annotation <: Node {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示编译器内置的注解节点。

一个 [Annotation](ast_package_classes.md#class-annotation) 节点：`@CallingConv[xxx]`, `@Attribute[xxx]`, `@When[condition]`等。

父类型：

- [Node](#class-node)

### prop arguments

```cangjie
public mut prop arguments: ArrayList<Argument>
```

功能：获取或设置 [Annotation](ast_package_classes.md#class-annotation) 中的参数序列，如 `@CallingConv[xxx]` 中的 `xxx`。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Argument](ast_package_classes.md#class-argument)>

### prop at

```cangjie
public mut prop at: Token
```

功能：获取或设置 [Annotation](ast_package_classes.md#class-annotation) 节点中的 `@` 操作符或 `@!` 操作符。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `@` 操作符或 `@!` 操作符时，抛出异常。

### prop attributes

```cangjie
public mut prop attributes: Tokens
```

功能：获取或设置 `Attribute` 中设置的属性值，仅用于 `@Attribute`，如 `@Attribute[xxx]` 中的 `xxx`。

类型：[Tokens](ast_package_classes.md#class-tokens)

### prop condition

```cangjie
public mut prop condition: Expr
```

功能：获取或设置条件编译中的条件表达式，用于 `@When`，如 `@When[xxx]` 中的 `xxx`。

类型：[Expr](ast_package_classes.md#class-expr)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [Annotation](ast_package_classes.md#class-annotation) 节点中没有条件表达式时，抛出异常。

### prop identifier

```cangjie
public mut prop identifier: Token
```

功能：获取或设置 [Annotation](ast_package_classes.md#class-annotation) 节点的标识符，如 `@CallingConv[xxx]` 中的 `CallingConv`。

类型：[Token](ast_package_structs.md#struct-token)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [Annotation](ast_package_classes.md#class-annotation) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：根据输入的词法单元，构造一个 [Annotation](ast_package_classes.md#class-annotation) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [Annotation](ast_package_classes.md#class-annotation) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [Annotation](ast_package_classes.md#class-annotation) 节点时，抛出异常。

## class Argument

```cangjie
public class Argument <: Node {
    public init()
}
```

功能：表示函数调用的实参节点。

例如 `foo(arg:value)` 中的 `arg:value`。

父类型：

- [Node](#class-node)

### prop colon

```cangjie
public mut prop colon: Token
```

功能：获取或设置 [Argument](ast_package_classes.md#class-argument) 节点中的操作符 ":"，可能为 [ILLEGAL](ast_package_enums.md#illegal) 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ":" 操作符时，抛出异常。

### prop expr

```cangjie
public mut prop expr: Expr
```

功能：获取或设置 [Argument](ast_package_classes.md#class-argument) 节点中的表达式，如 `arg:value` 中的 `value`。

类型：[Expr](ast_package_classes.md#class-expr)

### prop identifier

```cangjie
public mut prop identifier: Token
```

功能：获取或设置 [Argument](ast_package_classes.md#class-argument) 节点中的标识符，如 `arg:value` 中的 `arg`，可能为 [ILLEGAL](ast_package_enums.md#illegal) 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当获取和设置的 [Token](ast_package_structs.md#struct-token) 类型不是 [IDENTIFIER](ast_package_enums.md#identifier) 标识符或 [Token](ast_package_structs.md#struct-token) 的字面量值是空时，抛出异常。

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置 [Argument](ast_package_classes.md#class-argument) 节点中的关键字 `inout`，可能为 [ILLEGAL](ast_package_enums.md#illegal) 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [Argument](ast_package_classes.md#class-argument) 对象。

## class ArrayLiteral

```cangjie
public class ArrayLiteral <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示 [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt) 字面量节点。

[ArrayLiteral](ast_package_classes.md#class-arrayliteral) 节点：使用格式 `[element1, element2, ... , elementN]` 表示， 每个 `element` 是一个表达式。

父类型：

- [Expr](#class-expr)

### prop elements

```cangjie
public mut prop elements: ArrayList<Expr>
```

功能：获取或设置 [ArrayLiteral](ast_package_classes.md#class-arrayliteral) 中的表达式列表。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Expr](ast_package_classes.md#class-expr)>

### prop lSquare

```cangjie
public mut prop lSquare: Token
```

功能：获取或设置 [ArrayLiteral](ast_package_classes.md#class-arrayliteral) 中的 "["。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "[" 时，抛出异常。

### prop rSquare

```cangjie
public mut prop rSquare: Token
```

功能：获取或设置 [ArrayLiteral](ast_package_classes.md#class-arrayliteral) 中的 "]"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "]" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [ArrayLiteral](ast_package_classes.md#class-arrayliteral) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [ArrayLiteral](ast_package_classes.md#class-arrayliteral) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [ArrayLiteral](ast_package_classes.md#class-arrayliteral) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [ArrayLiteral](ast_package_classes.md#class-arrayliteral) 节点时，抛出异常。

## class AsExpr

```cangjie
public class AsExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个类型检查表达式。

一个 [AsExpr](ast_package_classes.md#class-asexpr) 表达式：`e as T`，类型为 [Option](../../core/core_package_api/core_package_enums.md#enum-optiont)\<T>。其中 e 可以是任何类型的表达式，T 可以是任何类型。

父类型：

- [Expr](#class-expr)

### prop expr

```cangjie
public mut prop expr: Expr
```

功能：获取或设置 [AsExpr](ast_package_classes.md#class-asexpr) 节点中的表达式节点。

类型：[Expr](ast_package_classes.md#class-expr)

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置 [AsExpr](ast_package_classes.md#class-asexpr) 节点中的 `as` 操作符。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `as` 操作符时，抛出异常。

### prop shiftType

```cangjie
public mut prop shiftType: TypeNode
```

功能：获取或设置 [AsExpr](ast_package_classes.md#class-asexpr) 节点中的目标类型。

类型：[TypeNode](ast_package_classes.md#class-typenode)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [AsExpr](ast_package_classes.md#class-asexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [AsExpr](ast_package_classes.md#class-asexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [AsExpr](ast_package_classes.md#class-asexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [AsExpr](ast_package_classes.md#class-asexpr) 节点时，抛出异常。

## class AssignExpr

```cangjie
public class AssignExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示赋值表达式节点。

用于将左操作数的值修改为右操作数的值。一个 [AssignExpr](ast_package_classes.md#class-assignexpr) 节点：`a = b`。

父类型：

- [Expr](#class-expr)

### prop assign

```cangjie
public mut prop assign: Token
```

功能：获取或设置 [AssignExpr](ast_package_classes.md#class-assignexpr) 节点中的赋值操作符（如 `=` 等）。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是赋值操作符时，抛出异常。

### prop leftExpr

```cangjie
public mut prop leftExpr: Expr
```

功能：获取或设置 [AssignExpr](ast_package_classes.md#class-assignexpr) 节点中的左操作数。

类型：[Expr](ast_package_classes.md#class-expr)

### prop rightExpr

```cangjie
public mut prop rightExpr: Expr
```

功能：获取或设置 [AssignExpr](ast_package_classes.md#class-assignexpr) 节点中的右操作数。

类型：[Expr](ast_package_classes.md#class-expr)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [AssignExpr](ast_package_classes.md#class-assignexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [AssignExpr](ast_package_classes.md#class-assignexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [AssignExpr](ast_package_classes.md#class-assignexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [AssignExpr](ast_package_classes.md#class-assignexpr) 节点时，抛出异常。

## class BinaryExpr

```cangjie
public class BinaryExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个二元操作表达式节点。

一个 [BinaryExpr](ast_package_classes.md#class-binaryexpr) 节点：`a + b`, `a - b` 等。

父类型：

- [Expr](#class-expr)

### prop leftExpr

```cangjie
public mut prop leftExpr: Expr
```

功能：获取或设置 [BinaryExpr](ast_package_classes.md#class-binaryexpr) 节点中操作符左侧的表达式节点。

类型：[Expr](ast_package_classes.md#class-expr)

### prop op

```cangjie
public mut prop op: Token
```

功能：获取或设置 [BinaryExpr](ast_package_classes.md#class-binaryexpr) 节点中的二元操作符。

类型：[Token](ast_package_structs.md#struct-token)

### prop rightExpr

```cangjie
public mut prop rightExpr: Expr
```

功能：获取或设置 [BinaryExpr](ast_package_classes.md#class-binaryexpr) 节点中操作符右侧的表达式节点。

类型：[Expr](ast_package_classes.md#class-expr)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [BinaryExpr](ast_package_classes.md#class-binaryexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [BinaryExpr](ast_package_classes.md#class-binaryexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [BinaryExpr](ast_package_classes.md#class-binaryexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [BinaryExpr](ast_package_classes.md#class-binaryexpr) 节点时，抛出异常。

## class Block

```cangjie
public class Block <: Expr {
    public init()
}
```

功能：表示块节点。

[Block](ast_package_classes.md#class-block) 由一对匹配的大括号及其中可选的表达式声明序列组成的结构，简称 “块”。

父类型：

- [Expr](#class-expr)

### prop lBrace

```cangjie
public mut prop lBrace: Token
```

功能：获取或设置 [Block](ast_package_classes.md#class-block) 的 "{"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "{" 时，抛出异常。

### prop nodes

```cangjie
public mut prop nodes: ArrayList<Node>
```

功能：获取或设置 [Block](ast_package_classes.md#class-block) 中的表达式或声明序列。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Node](ast_package_classes.md#class-node)>

### prop rBrace

```cangjie
public mut prop rBrace: Token
```

功能：获取或设置 [Block](ast_package_classes.md#class-block) 的 "}"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "}" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [Block](ast_package_classes.md#class-block) 对象。

> **说明：**
>
> [Block](ast_package_classes.md#class-block) 节点无法脱离表达式或声明节点单独存在，因此不提供其他的构造函数。

## class Body

```cangjie
public class Body <: Node {
    public init()
    public init(decls: ArrayList<Decl>)
}
```

功能：表示 Class 类型、 Struct 类型、 Interface 类型以及扩展中由 `{}` 和内部的一组声明节点组成的结构。

父类型：

- [Node](#class-node)

### prop decls

```cangjie
public mut prop decls: ArrayList<Decl>
```

功能：获取或设置 [Body](ast_package_classes.md#class-body) 内的声明节点集合。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Decl](ast_package_classes.md#class-decl)>

### prop lBrace

```cangjie
public mut prop lBrace: Token
```

功能：获取或设置 `{` 词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `{` 词法单元时，抛出异常。

### prop rBrace

```cangjie
public mut prop rBrace: Token
```

功能：获取或设置 `}` 词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `}` 词法单元时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [Body](ast_package_classes.md#class-body) 对象。

### init(ArrayList\<Decl>)

```cangjie
public init(decls: ArrayList<Decl>)
```

功能：构造一个 [Body](ast_package_classes.md#class-body) 对象。

参数：

- decls: [ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Decl](ast_package_classes.md#class-decl)> - 将要构造 [Body](ast_package_classes.md#class-body) 类型的声明列表。

## class CallExpr

```cangjie
public class CallExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示函数调用节点节点。

一个 [CallExpr](ast_package_classes.md#class-callexpr) 节点包括一个表达式后面紧跟参数列表，例如 `foo(100)`。

父类型：

- [Expr](#class-expr)

### prop arguments

```cangjie
public mut prop arguments: ArrayList<Argument>
```

功能：获取或设置 [CallExpr](ast_package_classes.md#class-callexpr) 节点中函数参数。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Argument](ast_package_classes.md#class-argument)>

### prop callFunc

```cangjie
public mut prop callFunc: Expr
```

功能：获取或设置 [CallExpr](ast_package_classes.md#class-callexpr) 节点中的函数调用节点。

类型：[Expr](ast_package_classes.md#class-expr)

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [CallExpr](ast_package_classes.md#class-callexpr) 节点中的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [CallExpr](ast_package_classes.md#class-callexpr) 节点中的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [CallExpr](ast_package_classes.md#class-callexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [CallExpr](ast_package_classes.md#class-callexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [CallExpr](ast_package_classes.md#class-callexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [CallExpr](ast_package_classes.md#class-callexpr) 节点时，抛出异常。

## class ClassDecl

```cangjie
public class ClassDecl <: Decl {
    public init()
    public init(inputs: Tokens)
}
```

功能：类定义节点。

类的定义使用 `class` 关键字，定义依次为：可缺省的修饰符、class 关键字、class 名、可选的类型参数、是否指定父类或父接口、可选的泛型约束、类体的定义。

父类型：

- [Decl](#class-decl)

### prop body

```cangjie
public mut prop body: Body
```

功能：获取或设置 [ClassDecl](ast_package_classes.md#class-classdecl) 节点的类体。

类型：[Body](ast_package_classes.md#class-body)

### prop superTypeBitAnds

```cangjie
public mut prop superTypeBitAnds: Tokens
```

功能：获取或设置 [ClassDecl](ast_package_classes.md#class-classdecl) 节点的父类或父接口声明中的 `&` 操作符的词法单元序列，可能为空。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 `&` 词法单元序列时，抛出异常。

### prop superTypes

```cangjie
public mut prop superTypes: ArrayList<TypeNode>
```

功能：获取或设置 [ClassDecl](ast_package_classes.md#class-classdecl) 节点的父类或者父接口。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[TypeNode](ast_package_classes.md#class-typenode)>

### prop upperBound

```cangjie
public mut prop upperBound: Token
```

功能：获取或设置 `<:` 操作符。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `<:` 操作符时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [ClassDecl](ast_package_classes.md#class-classdecl) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [ClassDecl](ast_package_classes.md#class-classdecl) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [ClassDecl](ast_package_classes.md#class-classdecl) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [ClassDecl](ast_package_classes.md#class-classdecl) 节点时，抛出异常。

## class ConstPattern

```cangjie
public class ConstPattern <: Pattern {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示常量模式节点。

常量模式可以是整数字面量、字符字节字面量、浮点数字面量、字符字面量、布尔字面量、字符串字面量等字面量，如 `case 1 => 0` 中的 `1`。

父类型：

- [Pattern](#class-pattern)

### prop litConstExpr

```cangjie
public mut prop litConstExpr: LitConstExpr
```

功能：获取或设置 [ConstPattern](ast_package_classes.md#class-constpattern) 节点中的字面量表达式。

类型：[LitConstExpr](ast_package_classes.md#class-litconstexpr)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [ConstPattern](ast_package_classes.md#class-constpattern) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [ConstPattern](ast_package_classes.md#class-constpattern) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [ConstPattern](ast_package_classes.md#class-constpattern) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [ConstPattern](ast_package_classes.md#class-constpattern) 节点时，抛出异常。

## class Constructor

```cangjie
public class Constructor <: Node {
    public init()
}
```

功能：表示 `enum` 类型中的 [Constructor](ast_package_classes.md#class-constructor) 节点。

一个 [Constructor](ast_package_classes.md#class-constructor) 节点：enum TimeUnit { Year | Month([Float32](../../core/core_package_api/core_package_intrinsics.md#float32), [Float32](../../core/core_package_api/core_package_intrinsics.md#float32))} 中的 Year 和 Month([Float32](../../core/core_package_api/core_package_intrinsics.md#float32), [Float32](../../core/core_package_api/core_package_intrinsics.md#float32))。

> **说明：**
>
> [Constructor](ast_package_classes.md#class-constructor) 可以没有参数，也可以有一组不同类型的参数。

父类型：

- [Node](#class-node)

### prop identifier

```cangjie
public mut prop identifier: Token
```

功能：获取或设置 [Constructor](ast_package_classes.md#class-constructor) 的标识符词法单元。

类型：[Token](ast_package_structs.md#struct-token)

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [Constructor](ast_package_classes.md#class-constructor) 节点中的 "(" 词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [Constructor](ast_package_classes.md#class-constructor) 节点中的 ")" 词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### prop typeArguments

```cangjie
public mut prop typeArguments: ArrayList<TypeNode>
```

功能：获取或设置 [Constructor](ast_package_classes.md#class-constructor) 节点可选的参数类型节点的集合。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[TypeNode](ast_package_classes.md#class-typenode)>

### init()

```cangjie
public init()
```

功能：构造一个默认的 [Constructor](ast_package_classes.md#class-constructor) 对象。

## class Decl

```cangjie
public open class Decl <: Node
```

功能：所有声明节点的父类，继承自 [Node](ast_package_classes.md#class-node) 节点，提供了所有声明节点的通用接口。

> **说明：**
>
> 类定义、接口定义、函数定义、变量定义、枚举定义、结构体定义、扩展定义、类型别名定义、宏定义等都属于 [Decl](ast_package_classes.md#class-decl) 节点。

父类型：

- [Node](#class-node)

### prop annotations

```cangjie
public mut prop annotations: ArrayList<Annotation>
```

功能：获取或设置作用于 [Decl](ast_package_classes.md#class-decl) 节点的注解列表。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Annotation](ast_package_classes.md#class-annotation)>

### prop constraintCommas

```cangjie
public mut prop constraintCommas: Tokens
```

功能：获取或设置 [Decl](ast_package_classes.md#class-decl) 节点中的 "," 词法单元序列，可能为空。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop genericConstraint

```cangjie
public mut prop genericConstraint: ArrayList<GenericConstraint>
```

功能：获取或设置定义节点的泛型约束，可能为空，如 `func foo<T>() where T <: Comparable<T> {}` 中的 `where T <: Comparable<T>`。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[GenericConstraint](ast_package_classes.md#class-genericconstraint)>

### prop genericParam

```cangjie
public mut prop genericParam: GenericParam
```

功能：获取或设置形参列表，类型形参列表由 `<>` 括起，多个类型形参之间用逗号分隔。

类型：[GenericParam](ast_package_classes.md#class-genericparam)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当节点未定义类型形参列表时，抛出异常。

### prop identifier

```cangjie
public mut open prop identifier: Token
```

功能：获取或设置定义节点的标识符，如 `class foo {}` 中的 `foo`。

类型：[Token](ast_package_structs.md#struct-token)

### prop isGenericDecl

```cangjie
public mut prop isGenericDecl: Bool
```

功能：判断是否是一个泛型节点。

类型：[Bool](../../core/core_package_api/core_package_intrinsics.md#bool) - 是一个泛型节点为 true；反之为 false。

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置定义节点的关键字。

类型：[Token](ast_package_structs.md#struct-token)

### prop modifiers

```cangjie
public mut prop modifiers: ArrayList<Modifier>
```

功能：获取或设置修饰节点的修饰符列表。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Modifier](ast_package_classes.md#class-modifier)>

### func getAttrs()

```cangjie
public func getAttrs(): Tokens
```

功能：获取当前节点的属性（一般通过内置的 `Attribute` 来设置某个声明设置属性值）。

返回值：

- [Tokens](ast_package_classes.md#class-tokens) - 当前节点的属性。

### func hasAttr(String)

```cangjie
public func hasAttr(attr: String): Bool
```

功能：判断当前节点是否具有某个属性（一般通过内置的 `Attribute` 来设置某个声明的属性值）。

参数：

- attr: [String](../../core/core_package_api/core_package_structs.md#struct-string) - 将要判断是否存在于该节点的属性。

返回值：

- [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) - 当前节点具有该属性时，返回 true；反之，返回 false。

## class DoWhileExpr

```cangjie
public class DoWhileExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示 `do-while` 表达式。

父类型：

- [Expr](#class-expr)

### prop block

```cangjie
public mut prop block: Block
```

功能：获取或设置 [DoWhileExpr](ast_package_classes.md#class-dowhileexpr) 中的块表达式。

类型：[Block](ast_package_classes.md#class-block)

### prop condition

```cangjie
public mut prop condition: Expr
```

功能：获取或设置关键字 [DoWhileExpr](ast_package_classes.md#class-dowhileexpr) 中的条件表达式。

类型：[Expr](ast_package_classes.md#class-expr)

### prop keywordD

```cangjie
public mut prop keywordD: Token
```

功能：获取或设置 [DoWhileExpr](ast_package_classes.md#class-dowhileexpr) 节点中 `do` 关键字，其中 keywordD 中的 D 为关键字 `do` 的首字母大写，代表关键字 `do` 。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `do` 关键字时，抛出异常。

### prop keywordW

```cangjie
public mut prop keywordW: Token
```

功能：获取或设置 [DoWhileExpr](ast_package_classes.md#class-dowhileexpr) 节点中 `while` 关键字，其中 keywordW 中的 W 为关键字 `while` 的首字母大写，代表关键字 `while` 。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `while` 关键字时，抛出异常。

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [DoWhileExpr](ast_package_classes.md#class-dowhileexpr) 中 `while` 关键字之后的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [DoWhileExpr](ast_package_classes.md#class-dowhileexpr) 中 `while` 关键字之后的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [DoWhileExpr](ast_package_classes.md#class-dowhileexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [DoWhileExpr](ast_package_classes.md#class-dowhileexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [DoWhileExpr](ast_package_classes.md#class-dowhileexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [DoWhileExpr](ast_package_classes.md#class-dowhileexpr) 节点时，抛出异常。

## class EnumDecl

```cangjie
public class EnumDecl <: Decl {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个 `Enum` 定义节点。

Enum 的定义使用 `enum` 关键字，定义依次为：可缺省的修饰符、enum 关键字、enum 名、可选的类型参数、是否指定父接口、可选的泛型约束、enum 体的定义。

父类型：

- [Decl](#class-decl)

### prop constructors

```cangjie
public mut prop constructors: ArrayList<Constructor>
```

功能：获取或设置 [EnumDecl](ast_package_classes.md#class-enumdecl) 节点内 constructor 的成员。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Constructor](ast_package_classes.md#class-constructor)>

### prop annotations

```cangjie
public mut prop annotations: ArrayList<Annotation>
```

功能：获取或设置作用于 [EnumDecl](ast_package_classes.md#class-enumdecl) 节点的注解列表。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Annotation](ast_package_classes.md#class-annotation)>

### prop decls

```cangjie
public mut prop decls: ArrayList<Decl>
```

功能：获取或设置 [EnumDecl](ast_package_classes.md#class-enumdecl) 节点内除 constructor 的其他成员。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Decl](ast_package_classes.md#class-decl)>

### prop ellipsis

```cangjie
public mut prop ellipsis: Token
```

功能：获取或设置 [EnumDecl](ast_package_classes.md#class-enumdecl) 节点中可选的 `...` 词法单元，可能为 [ILLEGAL](ast_package_enums.md#illegal) 的词法单元类型。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `...` 词法单元时，抛出异常。

### prop lBrace

```cangjie
public mut prop lBrace: Token
```

功能：获取或设置 [EnumDecl](ast_package_classes.md#class-enumdecl) 节点的 `{` 词法单元类型。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `{` 词法单元类型时，抛出异常。

### prop rBrace

```cangjie
public mut prop rBrace: Token
```

功能：获取或设置 [EnumDecl](ast_package_classes.md#class-enumdecl) 节点的 `}` 词法单元类型。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `}` 词法单元类型时，抛出异常。

### prop superTypeBitAnds

```cangjie
public mut prop superTypeBitAnds: Tokens
```

功能：获取或设置 [EnumDecl](ast_package_classes.md#class-enumdecl) 节点的父接口声明中的 `&` 操作符的词法单元序列，可能为空。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 `&` 词法单元序列时，抛出异常。

### prop superTypes

```cangjie
public mut prop superTypes: ArrayList<TypeNode>
```

功能：获取或设置 [EnumDecl](ast_package_classes.md#class-enumdecl) 节点的父接口。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[TypeNode](ast_package_classes.md#class-typenode)>

### prop upperBound

```cangjie
public mut prop upperBound: Token
```

功能：获取或设置 `<:` 操作符。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `<:` 操作符时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [EnumDecl](ast_package_classes.md#class-enumdecl) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [EnumDecl](ast_package_classes.md#class-enumdecl) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [EnumDecl](ast_package_classes.md#class-enumdecl) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [EnumDecl](ast_package_classes.md#class-enumdecl) 节点时，抛出异常。

## class EnumPattern

```cangjie
public class EnumPattern <: Pattern {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示 enum 模式节点。

用于匹配 enum 的 `constructor`， 如 `case Year(n) => 1` 中的 `Year(n)`。

父类型：

- [Pattern](#class-pattern)

### prop commas

```cangjie
public mut prop commas: Tokens
```

功能：获取或设置 [EnumPattern](ast_package_classes.md#class-enumpattern) 节点中的 "," 词法单元序列，可能为空。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop constructor

```cangjie
public mut prop constructor: Expr
```

功能：获取或设置 [EnumPattern](ast_package_classes.md#class-enumpattern) 节点中的构造器表达式节点。

类型：[Expr](ast_package_classes.md#class-expr)

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [EnumPattern](ast_package_classes.md#class-enumpattern) 节点中的 "(" 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop patterns

```cangjie
public mut prop patterns: ArrayList<Pattern>
```

功能：获取或设置 [EnumPattern](ast_package_classes.md#class-enumpattern) 节点中有参构造器内的模式节点列表。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Pattern](ast_package_classes.md#class-pattern)>

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [EnumPattern](ast_package_classes.md#class-enumpattern) 节点中的 ")" 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [EnumPattern](ast_package_classes.md#class-enumpattern) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [EnumPattern](ast_package_classes.md#class-enumpattern) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [EnumPattern](ast_package_classes.md#class-enumpattern) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [EnumPattern](ast_package_classes.md#class-enumpattern) 节点时，抛出异常。

## class ExceptTypePattern

```cangjie
public class ExceptTypePattern <: Pattern {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个用于异常模式状态下的节点。

例如 `e: Exception1 | Exception2`。

父类型：

- [Pattern](#class-pattern)

### prop colon

```cangjie
public mut prop colon: Token
```

功能：获取或设置 [ExceptTypePattern](ast_package_classes.md#class-excepttypepattern) 节点中的 ":" 操作符的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ":" 操作符时，抛出异常。

### prop pattern

```cangjie
public mut prop pattern: Pattern
```

功能：获取或设置 [ExceptTypePattern](ast_package_classes.md#class-excepttypepattern) 节点中的模式节点。

类型：[Pattern](ast_package_classes.md#class-pattern)

### prop types

```cangjie
public mut prop types: ArrayList<TypeNode>
```

功能：获取或设置 [ExceptTypePattern](ast_package_classes.md#class-excepttypepattern) 节点中有类型列表。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[TypeNode](ast_package_classes.md#class-typenode)>

### init()

```cangjie
public init()
```

功能：构造一个默认的 [ExceptTypePattern](ast_package_classes.md#class-excepttypepattern) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [ExceptTypePattern](ast_package_classes.md#class-excepttypepattern) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [ExceptTypePattern](ast_package_classes.md#class-excepttypepattern) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [ExceptTypePattern](ast_package_classes.md#class-excepttypepattern) 节点时，抛出异常。

## class Expr

```cangjie
public open class Expr <: Node
```

功能：所有表达式节点的父类，继承自 [Node](ast_package_classes.md#class-node) 节点。

表达式节点的 `toTokens` 方法会根据操作符优先级添加括号，例如已有一个 [BinaryExpr](ast_package_classes.md#class-binaryexpr) 节点 a \* b, 用户将左表达式内容 a 修改为 a + 1，修改后 `toTokens` 方法会为左表达式添加括号，`toTokens` 输出为 (a + 1) \* b。

父类型：

- [Node](#class-node)

## class ExtendDecl

```cangjie
public class ExtendDecl <: Decl {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个扩展定义节点。

扩展的定义使用 `extend` 关键字，扩展定义依次为：extend 关键字、扩展类型、是否指定父接口、可选的泛型约束、扩展体的定义。

父类型：

- [Decl](#class-decl)

### prop body

```cangjie
public mut prop body: Body
```

功能：获取或设置 [ExtendDecl](ast_package_classes.md#class-extenddecl) 节点的类体。

类型：[Body](ast_package_classes.md#class-body)

### prop extendType

```cangjie
public mut prop extendType: TypeNode
```

功能：获取或设置被扩展的类型。

类型：[TypeNode](ast_package_classes.md#class-typenode)

### prop identifier

```cangjie
public mut override prop identifier: Token
```

功能：[ExtendDecl](ast_package_classes.md#class-extenddecl) 节点继承 [Decl](ast_package_classes.md#class-decl) 节点，但是不支持 `identifier` 属性，使用时会抛出异常。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当使用 `identifier` 属性时，抛出异常。

### prop superTypeBitAnds

```cangjie
public mut prop superTypeBitAnds: Tokens
```

功能：获取或设置 [ExtendDecl](ast_package_classes.md#class-extenddecl) 节点的父接口声明中的 `&` 操作符的词法单元序列，可能为空。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 `&` 词法单元序列时，抛出异常。

### prop superTypes

```cangjie
public mut prop superTypes: ArrayList<TypeNode>
```

功能：获取或设置 [ExtendDecl](ast_package_classes.md#class-extenddecl) 节点的父接口。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[TypeNode](ast_package_classes.md#class-typenode)>

### prop upperBound

```cangjie
public mut prop upperBound: Token
```

功能：获取或设置 `<:` 操作符。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `<:` 操作符时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [ExtendDecl](ast_package_classes.md#class-extenddecl) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [ExtendDecl](ast_package_classes.md#class-extenddecl) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [ExtendDecl](ast_package_classes.md#class-extenddecl) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [ExtendDecl](ast_package_classes.md#class-extenddecl) 节点时，抛出异常。

## class ForInExpr

```cangjie
public class ForInExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示 `for-in` 表达式。

[ForInExpr](ast_package_classes.md#class-forinexpr) 类型中，关键字 `for` 之后是 [Pattern](ast_package_classes.md#class-pattern), 此后是一个 `in` 关键字和表达式节点，最后是一个执行循环体 [Block](ast_package_classes.md#class-block)。

父类型：

- [Expr](#class-expr)

### prop block

```cangjie
public mut prop block: Block
```

功能：获取或设置 [ForInExpr](ast_package_classes.md#class-forinexpr) 中的循环体。

类型：[Block](ast_package_classes.md#class-block)

### prop expr

```cangjie
public mut prop expr: Expr
```

功能：获取或设置 [ForInExpr](ast_package_classes.md#class-forinexpr) 中的表达式。

类型：[Expr](ast_package_classes.md#class-expr)

### prop keywordF

```cangjie
public mut prop keywordF: Token
```

功能：获取或设置 [ForInExpr](ast_package_classes.md#class-forinexpr) 中的关键字 `for`。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `for` 关键字时，抛出异常。

### prop keywordI

```cangjie
public mut prop keywordI: Token
```

功能：获取或设置 [ForInExpr](ast_package_classes.md#class-forinexpr) 中的关键字 `in`。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `in` 关键字时，抛出异常。

### prop keywordW

```cangjie
public mut prop keywordW: Token
```

功能：获取或设置 [ForInExpr](ast_package_classes.md#class-forinexpr) 中的关键字 `where`。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `where` 关键字时，抛出异常。

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [ForInExpr](ast_package_classes.md#class-forinexpr) 中关键字 `for` 后的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop pattern

```cangjie
public mut prop pattern: Pattern
```

功能：获取或设置 [ForInExpr](ast_package_classes.md#class-forinexpr) 中的 [Pattern](ast_package_classes.md#class-pattern) 节点。

类型：[Pattern](ast_package_classes.md#class-pattern)

### prop patternGuard

```cangjie
public mut prop patternGuard: Expr
```

功能：获取或设置 [ForInExpr](ast_package_classes.md#class-forinexpr) 中的 `patternGuard` 条件表达式。

类型：[Expr](ast_package_classes.md#class-expr)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [ForInExpr](ast_package_classes.md#class-forinexpr) 节点中不存在 `patternGuard` 表达式时，抛出异常。

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [ForInExpr](ast_package_classes.md#class-forinexpr) 中的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [ForInExpr](ast_package_classes.md#class-forinexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [ForInExpr](ast_package_classes.md#class-forinexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [ForInExpr](ast_package_classes.md#class-forinexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [ForInExpr](ast_package_classes.md#class-forinexpr) 节点时，抛出异常。

## class FuncDecl

```cangjie
public class FuncDecl <: Decl {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个函数定义节点。

由可选的函数修饰符，关键字 `func` ，函数名，可选的类型形参列表，函数参数，可缺省的函数返回类型来定义一个函数，函数定义时必须有函数体，函数体是一个块。

父类型：

- [Decl](#class-decl)

### prop block

```cangjie
public mut prop block: Block
```

功能：获取或设置 [FuncDecl](ast_package_classes.md#class-funcdecl) 节点的函数体。

类型：[Block](ast_package_classes.md#class-block)

### prop colon

```cangjie
public mut prop colon: Token
```

功能：获取或设置 [FuncDecl](ast_package_classes.md#class-funcdecl) 节点的冒号。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是冒号时，抛出异常。

### prop declType

```cangjie
public mut prop declType: TypeNode
```

功能：获取或设置 [FuncDecl](ast_package_classes.md#class-funcdecl) 节点的函数返回类型。

类型：[TypeNode](ast_package_classes.md#class-typenode)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [FuncDecl](ast_package_classes.md#class-funcdecl) 节点的函数返回类型是一个缺省值时，抛出异常。

### prop funcParams

```cangjie
public mut prop funcParams: ArrayList<FuncParam>
```

功能：获取或设置 [FuncDecl](ast_package_classes.md#class-funcdecl) 节点的函数参数。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[FuncParam](ast_package_classes.md#class-funcparam)>

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [FuncDecl](ast_package_classes.md#class-funcdecl) 节点的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop overloadOp

```cangjie
public mut prop overloadOp: Tokens
```

功能：获取或设置 [FuncDecl](ast_package_classes.md#class-funcdecl) 节点的重载操作符。

类型：[Tokens](ast_package_classes.md#class-tokens)

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [FuncDecl](ast_package_classes.md#class-funcdecl) 节点的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [FuncDecl](ast_package_classes.md#class-funcdecl) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [FuncDecl](ast_package_classes.md#class-funcdecl) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [FuncDecl](ast_package_classes.md#class-funcdecl) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [FuncDecl](ast_package_classes.md#class-funcdecl) 节点时，抛出异常。

### func isConst()

```cangjie
public func isConst(): Bool
```

功能：判断是否是一个 `Const` 类型的节点。

返回值：

- [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) - 是一个 `Const` 类型的节点返回 true；反之，返回 false。

## class FuncParam

```cangjie
public open class FuncParam <: Decl {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示函数参数节点，包括非命名参数和命名参数。

一个 [FuncParam](ast_package_classes.md#class-funcparam) 节点： `func foo(a: Int64, b: Float64) {...}` 中的 `a: Int64` 和 `b: Float64`。

父类型：

- [Decl](#class-decl)

### prop assign

```cangjie
public mut prop assign: Token
```

功能：获取或设置具有默认值的函数参数中的 `=`。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `=` 时，抛出异常。

### prop colon

```cangjie
public mut prop colon: Token
```

功能：获取或设置置形参中的 ":"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ":" 时，抛出异常。

### prop expr

```cangjie
public mut prop expr: Expr
```

功能：获取或设置具有默认值的函数参数的变量初始化节点。

类型：[Expr](ast_package_classes.md#class-expr)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当函数参数没有进行初始化时，抛出异常。

### prop not

```cangjie
public mut prop not: Token
```

功能：获取或设置命名形参中的 `!`。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `!` 时，抛出异常。

### prop paramType

```cangjie
public mut prop paramType: TypeNode
```

功能：获取或设置函数参数的类型。

类型：[TypeNode](ast_package_classes.md#class-typenode)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [FuncParam](ast_package_classes.md#class-funcparam) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [FuncParam](ast_package_classes.md#class-funcparam) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [FuncParam](ast_package_classes.md#class-funcparam) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [FuncParam](ast_package_classes.md#class-funcparam) 节点时，抛出异常。

### func isMemberParam()

```cangjie
public func isMemberParam(): Bool
```

功能：当前的函数参数是否是主构造函数中的参数。

返回值：

- [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) - 布尔类型，如果是主构造函数中的参数，返回 `true`。

## class FuncType

```cangjie
public class FuncType <: TypeNode {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示函数类型节点。

由函数的参数类型和返回类型组成，参数类型与返回类型之间用 `->` 分隔，如：`(Int32) -> Unit`。

父类型：

- [TypeNode](#class-typenode)

### prop arrow

```cangjie
public mut prop arrow: Token
```

功能：获取或设置 [FuncType](ast_package_classes.md#class-functype) 节点参数类型与返回类型之间的 `->`的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `->`的词法单元时，抛出异常。

### prop commas

```cangjie
public mut prop commas: Tokens
```

功能：获取或设置 [FuncType](ast_package_classes.md#class-functype) 节点中的 "," 词法单元序列，可能为空。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置 [FuncType](ast_package_classes.md#class-functype) 节点的中的关键字 `CFunc` 的词法单元，若不是一个 `CFunc` 类型，则获取一个 [ILLEGAL](ast_package_enums.md#illegal) 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [FuncType](ast_package_classes.md#class-functype) 节点的 "(" 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [FuncType](ast_package_classes.md#class-functype) 节点的 ")" 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### prop returnType

```cangjie
public mut prop returnType: TypeNode
```

功能：获取或设置 [FuncType](ast_package_classes.md#class-functype) 返回类型节点。

类型：[TypeNode](ast_package_classes.md#class-typenode)

### prop types

```cangjie
public mut prop types: ArrayList<TypeNode>
```

功能：获取或设置 [FuncType](ast_package_classes.md#class-functype) 节点中函数的参数类型列表。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[TypeNode](ast_package_classes.md#class-typenode)>

### init()

```cangjie
public init()
```

功能：构造一个默认的 [FuncType](ast_package_classes.md#class-functype) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [FuncType](ast_package_classes.md#class-functype) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [FuncType](ast_package_classes.md#class-functype) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [FuncType](ast_package_classes.md#class-functype) 节点时，抛出异常。

## class GenericConstraint

```cangjie
public class GenericConstraint <: Node {
    public init()
}
```

功能：表示一个泛型约束节点。

一个 [GenericConstraint](ast_package_classes.md#class-genericconstraint) 节点：`interface Enumerable<U> where U <: Bounded {}` 中的 `where U <: Bounded`。

> **说明：**
>
> 通过 `where` 之后的 `<:` 运算符来声明，由一个下界与一个上界来组成。其中 `<:` 左边称为约束的下界，下界只能为类型变元。`<:` 右边称为约束上界，约束上界可以为类型。

父类型：

- [Node](#class-node)

### prop bitAnds

```cangjie
public mut prop bitAnds: Tokens
```

功能：获取或设置 [GenericConstraint](ast_package_classes.md#class-genericconstraint) 节点中的 `&` 操作符的词法单元序列，可能为空。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 `&` 词法单元序列时，抛出异常。

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置 [GenericConstraint](ast_package_classes.md#class-genericconstraint) 节点中关键字 `where` 词法单元，可能为 [ILLEGAL](ast_package_enums.md#illegal) 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `where` 关键字时，抛出异常。

### prop typeArgument

```cangjie
public mut prop typeArgument: TypeNode
```

功能：获取或设置 [GenericConstraint](ast_package_classes.md#class-genericconstraint) 节点中的约束下界。

类型：[TypeNode](ast_package_classes.md#class-typenode)

### prop upperBound

```cangjie
public mut prop upperBound: Token
```

功能：获取或设置 [GenericConstraint](ast_package_classes.md#class-genericconstraint) 节点中的 `<:` 运算符。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `<:` 运算符时，抛出异常。

### prop upperBounds

```cangjie
public mut prop upperBounds: ArrayList<TypeNode>
```

功能：获取或设置 [GenericConstraint](ast_package_classes.md#class-genericconstraint) 节点约束上界的 [TypeNode](ast_package_classes.md#class-typenode) 类型节点的集合。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[TypeNode](ast_package_classes.md#class-typenode)>

### init()

```cangjie
public init()
```

功能：构造一个默认的 [GenericConstraint](ast_package_classes.md#class-genericconstraint) 对象。

## class GenericParam

```cangjie
public class GenericParam <: Node {
    public init()
    public init(parameters: Tokens)
}
```

功能：表示一个类型形参节点。

一个 [GenericParam](ast_package_classes.md#class-genericparam) 节点：`<T1, T2, T3>`。

> **说明：**
>
> 类型形参用 `<>` 括起并用 "," 分隔多个类型形参名称。

父类型：

- [Node](#class-node)

### prop lAngle

```cangjie
public mut prop lAngle: Token
```

功能：获取或设置 [GenericParam](ast_package_classes.md#class-genericparam) 节点中的左尖括号词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是左尖括号时，抛出异常。

### prop parameters

```cangjie
public mut prop parameters: Tokens
```

功能：获取或设置 [GenericParam](ast_package_classes.md#class-genericparam) 节点中的类型形参的 [Tokens](ast_package_classes.md#class-tokens) 类型，可能为空，如 `<T1, T2, T3>` 中的 `T1` `T2` 和 `T3`。

类型：[Tokens](ast_package_classes.md#class-tokens)

### prop rAngle

```cangjie
public mut prop rAngle: Token
```

功能：获取或设置 [GenericParam](ast_package_classes.md#class-genericparam) 节点中的右尖括号词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是右尖括号时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [GenericParam](ast_package_classes.md#class-genericparam) 对象。

### init(Tokens)

```cangjie
public init(parameters: Tokens)
```

功能：构造一个 [GenericParam](ast_package_classes.md#class-genericparam) 对象。

参数：

- parameters: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [GenericParam](ast_package_classes.md#class-genericparam) 的类型形参的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

## class IfExpr

```cangjie
public class IfExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示条件表达式。

可以根据判定条件是否成立来决定执行哪条代码分支。一个 [IfExpr](ast_package_classes.md#class-ifexpr) 节点中 `if` 是关键字，`if` 之后是一个小括号，小括号内可以是一个表达式或者一个 `let` 声明的解构匹配，接着是一个 [Block](ast_package_classes.md#class-block)，[Block](ast_package_classes.md#class-block) 之后是可选的 `else` 分支。 `else` 分支以 `else` 关键字开始，后接新的 `if` 表达式或一个 [Block](ast_package_classes.md#class-block)。

父类型：

- [Expr](#class-expr)

### prop condition

```cangjie
public mut prop condition: Expr
```

功能：获取或设置 [IfExpr](ast_package_classes.md#class-ifexpr) 节点中的 `if` 后的条件表达式。

类型：[Expr](ast_package_classes.md#class-expr)

### prop elseExpr

```cangjie
public mut prop elseExpr: Expr
```

功能：获取或设置 [IfExpr](ast_package_classes.md#class-ifexpr) 节点中 `else` 分支节点。

类型：[Expr](ast_package_classes.md#class-expr)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当前 [IfExpr](ast_package_classes.md#class-ifexpr) 节点没有 else 分支节点。

### prop ifBlock

```cangjie
public mut prop ifBlock: Block
```

功能：获取或设置 [IfExpr](ast_package_classes.md#class-ifexpr) 节点中的 `if` 后的 block 节点。

类型：[Block](ast_package_classes.md#class-block)

### prop keywordE

```cangjie
public mut prop keywordE: Token
```

功能：获取或设置 [IfExpr](ast_package_classes.md#class-ifexpr) 节点中 `else` 关键字。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `else` 关键字时，抛出异常。

### prop keywordI

```cangjie
public mut prop keywordI: Token
```

功能：获取或设置 [IfExpr](ast_package_classes.md#class-ifexpr) 节点中的 `if` 关键字。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `if` 关键字时，抛出异常。

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [IfExpr](ast_package_classes.md#class-ifexpr) 节点中的 `if` 后的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [IfExpr](ast_package_classes.md#class-ifexpr) 节点中的 `if` 后的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [IfExpr](ast_package_classes.md#class-ifexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [IfExpr](ast_package_classes.md#class-ifexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [IfExpr](ast_package_classes.md#class-ifexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [IfExpr](ast_package_classes.md#class-ifexpr) 节点时，抛出异常。

## class ImportContent

```cangjie
public class ImportContent <: Node {
    public init()
}
```

父类型：

- [Node](#class-node)

### prop importKind

```cangjie
public mut prop importKind: ImportKind
```

功能：获取或设置 [ImportContent](ast_package_classes.md#class-importcontent) 节点中导入类型。

类型：[ImportKind](ast_package_enums.md#enum-importkind)

### prop prefixPaths

```cangjie
public mut prop prefixPaths: Tokens
```

功能：获取或设置 [ImportContent](ast_package_classes.md#class-importcontent) 节点中完整包名的前缀部分的词法单元序列，可能为空。如 `import a.b.c` 中的 `a` 和 `b`。

类型：[Tokens](ast_package_classes.md#class-tokens)

### prop prefixDots

```cangjie
public mut prop prefixDots: Tokens
```

功能：获取或设置 [ImportContent](ast_package_classes.md#class-importcontent) 节点中完整包名中用于分隔每层子包的词法单元序列，可能为空。如 `import a.b.c` 中的两个 "."。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 "." 词法单元序列时，抛出异常。

### prop identifier

```cangjie
public mut prop identifier: Token
```

功能：获取或设置 [ImportContent](ast_package_classes.md#class-importcontent) 节点中被导入的项，它可能是包中的顶层定义或声明，也可能是子包的名字。

类型：[Token](ast_package_structs.md#struct-token)

### prop importAlias

```cangjie
public mut prop importAlias: Tokens
```

功能：获取或设置 [ImportContent](ast_package_classes.md#class-importcontent) 节点中导入的定义或声明的别名词法单元序列，只有 `importKind` 为 `ImportKind.Alias` 时非空。如：`import packageName.xxx as yyy` 中的 `as yyy`。

类型：[Tokens](ast_package_classes.md#class-tokens)

### prop lBrace

```cangjie
public mut prop lBrace: Token
```

功能：获取或设置 [ImportContent](ast_package_classes.md#class-importcontent) 节点中的 `{` 操作符词法单元，只有 `importKind` 为 `ImportKind.Multi` 时非空。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `{` 操作符时，抛出异常。

### prop items

```cangjie
public mut prop items: ArrayList<ImportContent>
```

功能：获取或设置 [ImportContent](ast_package_classes.md#class-importcontent) 节点中被导入的所有项，只有 `importKind` 为 `ImportKind.Multi` 时非空。

类型：ArrayList\<[ImportContent](ast_package_classes.md#class-importcontent)>

### prop commas

```cangjie
public mut prop commas: Tokens
```

功能：获取或设置 [ImportContent](ast_package_classes.md#class-importcontent) 节点中的 "," 词法单元序列，只有 `importKind` 为 `ImportKind.Multi` 时非空。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop rBrace

```cangjie
public mut prop rBrace: Token
```

功能：获取或设置 [ImportContent](ast_package_classes.md#class-importcontent) 节点中的 `}` 操作符词法单元，只有 `importKind` 为 `ImportKind.Multi` 时非空。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `}` 操作符时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [ImportContent](ast_package_classes.md#class-importcontent) 对象。

### func isImportAlias()

```cangjie
public func isImportAlias(): Bool
```

功能：判断 [ImportContent](ast_package_classes.md#class-importcontent) 节点是否对导入项取了别名。

返回值：

- [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) - [ImportContent](ast_package_classes.md#class-importcontent) 节点是否对导入项取了别名。

### func isImportAll()

```cangjie
public func isImportAll(): Bool
```

功能：判断 [ImportContent](ast_package_classes.md#class-importcontent) 节点是否为全导入。

返回值：

- [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) - [ImportContent](ast_package_classes.md#class-importcontent) 节点是否为全导入。

### func isImportMulti()

```cangjie
public func isImportMulti(): Bool
```

功能：判断 [ImportContent](ast_package_classes.md#class-importcontent) 节点是否导入了多个顶级定义或声明。

返回值：

- [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) - [ImportContent](ast_package_classes.md#class-importcontent) 节点是否导入了多个顶级定义或声明。

### func isImportSingle()

```cangjie
public func isImportSingle(): Bool
```

功能：判断 [ImportContent](ast_package_classes.md#class-importcontent) 节点是否为单导入。

返回值：

- [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) - [ImportContent](ast_package_classes.md#class-importcontent) 节点是否为单导入。

## class ImportList

```cangjie
public class ImportList <: Node {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示包导入节点。

一个 [ImportList](ast_package_classes.md#class-importlist) 节点: `import moduleName.packageName.foo as bar`。

> **说明：**
>
> 导入节点以可选的访问性修饰符（`public/protected/internal/private`）加关键字 `import` 开头。以 `import pkga.pkgb.item` 为例，`pkga.pkgb` 为导入的顶级定义或声明所在的包的名字，`item` 为导入的顶级定义或声明。

父类型：

- [Node](#class-node)

### prop modifier

```cangjie
public mut prop modifier: Token
```

功能：获取或设置 [ImportList](ast_package_classes.md#class-importlist) 节点中的修饰符，可能为 [ILLEGAL](ast_package_enums.md#illegal) 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

### prop keywordI

```cangjie
public mut prop keywordI: Token
```

功能：获取或设置 [ImportList](ast_package_classes.md#class-importlist) 节点中的 `import` 关键字的词法单元，`I` 为关键字首字母。

类型：[Token](ast_package_structs.md#struct-token)

### prop content

```cangjie
public mut prop content: ImportContent
```

功能：获取或设置 [ImportList](ast_package_classes.md#class-importlist) 节点中的被导入的具体项。如 `import a.b.c` 中的 `a.b.c` 部分。

类型：[ImportContent](ast_package_classes.md#class-importcontent)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [ImportList](ast_package_classes.md#class-importlist) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [ImportList](ast_package_classes.md#class-importlist) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [ImportList](ast_package_classes.md#class-importlist) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens)) 序列。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [ImportList](ast_package_classes.md#class-importlist) 节点时，抛出异常。

### func isImportMulti()

```cangjie
public func isImportMulti(): Bool
```

功能：判断 [ImportList](ast_package_classes.md#class-importlist) 节点是否导入了多个顶级定义或声明。

返回值：

- [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) - 如果 [ImportList](ast_package_classes.md#class-importlist) 节点导入了多个顶级定义或声明，返回 true；反之，返回 false。

## class IncOrDecExpr

```cangjie
public class IncOrDecExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示包含自增操作符（`++`）或自减操作符（`--`）的表达式。

父类型：

- [Expr](#class-expr)

### prop expr

```cangjie
public mut prop expr: Expr
```

功能：获取或设置 [IncOrDecExpr](ast_package_classes.md#class-incordecexpr) 中的表达式。

类型：[Expr](ast_package_classes.md#class-expr)

### prop op

```cangjie
public mut prop op: Token
```

功能：获取或设置 [IncOrDecExpr](ast_package_classes.md#class-incordecexpr) 中的操作符。

类型：[Token](ast_package_structs.md#struct-token)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [IncOrDecExpr](ast_package_classes.md#class-incordecexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [IncOrDecExpr](ast_package_classes.md#class-incordecexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [IncOrDecExpr](ast_package_classes.md#class-incordecexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [IncOrDecExpr](ast_package_classes.md#class-incordecexpr) 节点时，抛出异常。

## class InterfaceDecl

```cangjie
public class InterfaceDecl <: Decl {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示接口定义节点。

接口的定义使用 `interface` 关键字，接口定义依次为：可缺省的修饰符、interface 关键字、接口名、可选的类型参数、是否指定父接口、可选的泛型约束、接口体的定义。

父类型：

- [Decl](#class-decl)

### prop body

```cangjie
public mut prop body: Body
```

功能：获取或设置 [InterfaceDecl](ast_package_classes.md#class-interfacedecl) 节点的类体。

类型：[Body](ast_package_classes.md#class-body)

### prop superTypeBitAnds

```cangjie
public mut prop superTypeBitAnds: Tokens
```

功能：获取或设置 [InterfaceDecl](ast_package_classes.md#class-interfacedecl) 节点的父接口声明中的 `&` 操作符的词法单元序列，可能为空。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 `&` 词法单元序列时，抛出异常。

### prop superTypes

```cangjie
public mut prop superTypes: ArrayList<TypeNode>
```

功能：获取或设置 [InterfaceDecl](ast_package_classes.md#class-interfacedecl) 节点的父接口。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[TypeNode](ast_package_classes.md#class-typenode)>

### prop upperBound

```cangjie
public mut prop upperBound: Token
```

功能：获取或设置 `<:` 操作符。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `<:` 操作符时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [InterfaceDecl](ast_package_classes.md#class-interfacedecl) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [InterfaceDecl](ast_package_classes.md#class-interfacedecl) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [InterfaceDecl](ast_package_classes.md#class-interfacedecl) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [InterfaceDecl](ast_package_classes.md#class-interfacedecl) 节点时，抛出异常。

## class IsExpr

```cangjie
public class IsExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个类型检查表达式。

一个 [IsExpr](ast_package_classes.md#class-isexpr) 表达式：`e is T`，类型为 [Bool](../../core/core_package_api/core_package_intrinsics.md#bool)。其中 e 可以是任何类型的表达式，T 可以是任何类型。

父类型：

- [Expr](#class-expr)

### prop expr

```cangjie
public mut prop expr: Expr
```

功能：获取或设置 [IsExpr](ast_package_classes.md#class-isexpr) 节点中的表达式节点。

类型：[Expr](ast_package_classes.md#class-expr)

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置 [IsExpr](ast_package_classes.md#class-isexpr) 节点中的 `is` 操作符。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `is` 操作符时，抛出异常。

### prop shiftType

```cangjie
public mut prop shiftType: TypeNode
```

功能：获取或设置 [IsExpr](ast_package_classes.md#class-isexpr) 节点中的目标类型。

类型：[TypeNode](ast_package_classes.md#class-typenode)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [IsExpr](ast_package_classes.md#class-isexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [IsExpr](ast_package_classes.md#class-isexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [IsExpr](ast_package_classes.md#class-isexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [IsExpr](ast_package_classes.md#class-isexpr) 节点时，抛出异常。

## class JumpExpr

```cangjie
public class JumpExpr <: Expr {
    public init()
    public init(kind: Tokens)
}
```

功能：表示循环表达式的循环体中的 `break` 和 `continue`。

父类型：

- [Expr](#class-expr)

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置关键字。

类型：[Token](ast_package_structs.md#struct-token)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [JumpExpr](ast_package_classes.md#class-jumpexpr) 对象。

### init(Tokens)

```cangjie
public init(kind: Tokens)
```

功能：构造一个 [JumpExpr](ast_package_classes.md#class-jumpexpr) 对象。

参数：

- kind: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [JumpExpr](ast_package_classes.md#class-jumpexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [JumpExpr](ast_package_classes.md#class-jumpexpr) 节点时，抛出异常。

## class LambdaExpr

```cangjie
public class LambdaExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示 `Lambda` 表达式，是一个匿名的函数。

一个 [LambdaExpr](ast_package_classes.md#class-lambdaexpr) 节点有两种形式，一种是有形参的，例如 `{a: Int64 => e1; e2 }`，另一种是无形参的，例如 `{ => e1; e2 }`。

父类型：

- [Expr](#class-expr)

### prop doubleArrow

```cangjie
public mut prop doubleArrow: Token
```

功能：获取或设置 [LambdaExpr](ast_package_classes.md#class-lambdaexpr) 中的 `=>`。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `=>` 操作符时，抛出异常。

### prop funcParams

```cangjie
public mut prop funcParams:  ArrayList<FuncParam>
```

功能：获取或设置 [LambdaExpr](ast_package_classes.md#class-lambdaexpr) 中的参数列表。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[FuncParam](ast_package_classes.md#class-funcparam)>

### prop lBrace

```cangjie
public mut prop lBrace: Token
```

功能：获取或设置 [LambdaExpr](ast_package_classes.md#class-lambdaexpr) 中的 "{"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "{" 时，抛出异常。

### prop nodes

```cangjie
public mut prop nodes: ArrayList<Node>
```

功能：获取或设置 [LambdaExpr](ast_package_classes.md#class-lambdaexpr) 中的表达式或声明节点。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Node](ast_package_classes.md#class-node)>

### prop rBrace

```cangjie
public mut prop rBrace: Token
```

功能：获取或设置 [LambdaExpr](ast_package_classes.md#class-lambdaexpr) 中的 "}"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "}" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [LambdaExpr](ast_package_classes.md#class-lambdaexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [LambdaExpr](ast_package_classes.md#class-lambdaexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [LambdaExpr](ast_package_classes.md#class-lambdaexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [LambdaExpr](ast_package_classes.md#class-lambdaexpr) 节点时，抛出异常。

## class LetPatternExpr

```cangjie
public class LetPatternExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示 `let` 声明的解构匹配节点。

一个 [LetPatternExpr](ast_package_classes.md#class-letpatternexpr) 节点：`if (let Some(v) <- x)` 中的 `let Some(v) <- x`。

父类型：

- [Expr](#class-expr)

### prop backArrow

```cangjie
public mut prop backArrow: Token
```

功能：获取或设置 [LetPatternExpr](ast_package_classes.md#class-letpatternexpr) 节点中 `<-` 操作符。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `<-` 操作符时，抛出异常。

### prop expr

```cangjie
public mut prop expr: Expr
```

功能：获取或设置 [LetPatternExpr](ast_package_classes.md#class-letpatternexpr) 节点中 `<-` 操作符之后的表达式。

类型：[Expr](ast_package_classes.md#class-expr)

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置 [LetPatternExpr](ast_package_classes.md#class-letpatternexpr) 节点中 `let` 关键字。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `let` 关键字时，抛出异常。

### prop pattern

```cangjie
public mut prop pattern: Pattern
```

功能：获取或设置 [LetPatternExpr](ast_package_classes.md#class-letpatternexpr) 节点中 `let` 之后的 pattern。

类型：[Pattern](ast_package_classes.md#class-pattern)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [LetPatternExpr](ast_package_classes.md#class-letpatternexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [LetPatternExpr](ast_package_classes.md#class-letpatternexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [LetPatternExpr](ast_package_classes.md#class-letpatternexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [LetPatternExpr](ast_package_classes.md#class-letpatternexpr) 节点时，抛出异常。

## class LitConstExpr

```cangjie
public class LitConstExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个常量表达式节点。

一个 [LitConstExpr](ast_package_classes.md#class-litconstexpr) 表达式：`"abc"`，`123` 等。

父类型：

- [Expr](#class-expr)

### prop literal

```cangjie
public mut prop literal: Token
```

功能：获取或设置 [LitConstExpr](ast_package_classes.md#class-litconstexpr) 节点中的字面量。

类型：[Token](ast_package_structs.md#struct-token)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [LitConstExpr](ast_package_classes.md#class-litconstexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [LitConstExpr](ast_package_classes.md#class-litconstexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [LitConstExpr](ast_package_classes.md#class-litconstexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [ParenExpr](ast_package_classes.md#class-parenexpr) 节点时，抛出异常。

## class MacroDecl

```cangjie
public class MacroDecl <: Decl {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个宏定义节点。

一个 [MacroDecl](ast_package_classes.md#class-macrodecl) 节点：`public macro M(input: Tokens): Tokens {...}`。

父类型：

- [Decl](#class-decl)

### prop block

```cangjie
public mut prop block: Block
```

功能：获取或设置 [MacroDecl](ast_package_classes.md#class-macrodecl) 节点的函数体。

类型：[Block](ast_package_classes.md#class-block)

### prop colon

```cangjie
public mut prop colon: Token
```

功能：获取或设置 [MacroDecl](ast_package_classes.md#class-macrodecl) 节点的冒号。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是冒号时，抛出异常。

### prop declType

```cangjie
public mut prop declType: TypeNode
```

功能：获取或设置 [MacroDecl](ast_package_classes.md#class-macrodecl) 节点的函数返回类型。

类型：[TypeNode](ast_package_classes.md#class-typenode)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [MacroDecl](ast_package_classes.md#class-macrodecl) 节点的函数返回类型是一个缺省值时，抛出异常。

### prop funcParams

```cangjie
public mut prop funcParams: ArrayList<FuncParam>
```

功能：获取或设置 [MacroDecl](ast_package_classes.md#class-macrodecl) 节点的参数。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[FuncParam](ast_package_classes.md#class-funcparam)>

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [MacroDecl](ast_package_classes.md#class-macrodecl) 节点的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [MacroDecl](ast_package_classes.md#class-macrodecl) 节点的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [MacroDecl](ast_package_classes.md#class-macrodecl) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [MacroDecl](ast_package_classes.md#class-macrodecl) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [MacroDecl](ast_package_classes.md#class-macrodecl) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [MacroDecl](ast_package_classes.md#class-macrodecl) 节点时，抛出异常。

## class MacroExpandDecl

```cangjie
public class MacroExpandDecl <: Decl {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示宏调用节点。

一个 [MacroExpandDecl](ast_package_classes.md#class-macroexpanddecl) 节点： `@M class A {}`。

父类型：

- [Decl](#class-decl)

### prop fullIdentifier

```cangjie
public mut prop fullIdentifier: Token
```

功能：获取或设置宏调用节点的完整标识符。

类型：[Token](ast_package_structs.md#struct-token)

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [MacroExpandDecl](ast_package_classes.md#class-macroexpanddecl) 宏调用的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop lSquare

```cangjie
public mut prop lSquare: Token
```

功能：获取或设置 [MacroExpandDecl](ast_package_classes.md#class-macroexpanddecl) 属性宏调用的 "["。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "[" 时，抛出异常。

### prop macroAttrs

```cangjie
public mut prop macroAttrs: Tokens
```

功能：获取或设置 [MacroExpandDecl](ast_package_classes.md#class-macroexpanddecl) 属性宏调用的输入。

类型：[Tokens](ast_package_classes.md#class-tokens)

### prop macroInputDecl

```cangjie
public mut prop macroInputDecl: Decl
```

功能：获取或设置 [MacroExpandDecl](ast_package_classes.md#class-macroexpanddecl) 中的声明节点。

类型：[Decl](ast_package_classes.md#class-decl)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [MacroExpandDecl](ast_package_classes.md#class-macrodecl) 节点中没有声明节点时，抛出异常。

### prop macroInputs

```cangjie
public mut prop macroInputs: Tokens
```

功能：获取或设置 [MacroExpandDecl](ast_package_classes.md#class-macroexpanddecl) 宏调用的输入。

类型：[Tokens](ast_package_classes.md#class-tokens)

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [MacroExpandDecl](ast_package_classes.md#class-macroexpanddecl) 宏调用的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### prop rSquare

```cangjie
public mut prop rSquare: Token
```

功能：获取或设置 [MacroExpandDecl](ast_package_classes.md#class-macroexpanddecl) 属性宏调用的 "]"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "]" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [MacroExpandDecl](ast_package_classes.md#class-macroexpanddecl) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [MacroExpandDecl](ast_package_classes.md#class-macroexpanddecl) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [MacroExpandDecl](ast_package_classes.md#class-macroexpanddecl) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [MacroExpandDecl](ast_package_classes.md#class-macroexpanddecl) 节点时，抛出异常。

## class MacroExpandExpr

```cangjie
public class MacroExpandExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示宏调用节点。

一个 [MacroExpandExpr](ast_package_classes.md#class-macroexpandexpr) 节点： `@M (a is Int64)`。

父类型：

- [Expr](#class-expr)

### prop at

```cangjie
public mut prop at: Token
```

功能：获取或设置 [MacroExpandExpr](ast_package_classes.md#class-macroexpandexpr) 节点中的 `@` 操作符。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `@` 操作符时，抛出异常。

### prop identifier

```cangjie
public mut prop identifier: Token
```

功能：获取或设置宏调用节点的标识符。

类型：[Token](ast_package_structs.md#struct-token)

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [MacroExpandExpr](ast_package_classes.md#class-macroexpandexpr) 宏调用的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop lSquare

```cangjie
public mut prop lSquare: Token
```

功能：获取或设置 [MacroExpandExpr](ast_package_classes.md#class-macroexpandexpr) 属性宏调用的 "["。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "[" 时，抛出异常。

### prop macroAttrs

```cangjie
public mut prop macroAttrs: Tokens
```

功能：获取或设置 [MacroExpandExpr](ast_package_classes.md#class-macroexpandexpr) 属性宏调用的输入。

类型：[Tokens](ast_package_classes.md#class-tokens)

### prop macroInputs

```cangjie
public mut prop macroInputs: Tokens
```

功能：获取或设置 [MacroExpandExpr](ast_package_classes.md#class-macroexpandexpr) 宏调用的输入。

类型：[Tokens](ast_package_classes.md#class-tokens)

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [MacroExpandExpr](ast_package_classes.md#class-macroexpandexpr) 宏调用的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### prop rSquare

```cangjie
public mut prop rSquare: Token
```

功能：获取或设置 [MacroExpandExpr](ast_package_classes.md#class-macroexpandexpr) 属性宏调用的 "]"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "]" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [MacroExpandExpr](ast_package_classes.md#class-macroexpandexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [MacroExpandExpr](ast_package_classes.md#class-macroexpandexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [MacroExpandExpr](ast_package_classes.md#class-macroexpandexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [MacroExpandExpr](ast_package_classes.md#class-macroexpandexpr) 节点时，抛出异常。

## class MacroExpandParam

```cangjie
public class MacroExpandParam <: FuncParam {
    public init()
}
```

功能：表示宏调用节点。

一个 [MacroExpandDecl](ast_package_classes.md#class-macroexpanddecl) 节点： `func foo (@M a: Int64)` 中的 `@M a: Int64`。

父类型：

- [FuncParam](#class-funcparam)

### prop fullIdentifier

```cangjie
public mut prop fullIdentifier: Token
```

功能：获取或设置宏调用节点的完整标识符。

类型：[Token](ast_package_structs.md#struct-token)

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [MacroExpandParam](ast_package_classes.md#class-macroexpandparam) 宏调用的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop lSquare

```cangjie
public mut prop lSquare: Token
```

功能：获取或设置 [MacroExpandParam](ast_package_classes.md#class-macroexpandparam) 属性宏调用的 "["。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "[" 时，抛出异常。

### prop macroAttrs

```cangjie
public mut prop macroAttrs: Tokens
```

功能：获取或设置 [MacroExpandParam](ast_package_classes.md#class-macroexpandparam) 属性宏调用的输入。

类型：[Tokens](ast_package_classes.md#class-tokens)

### prop macroInputDecl

```cangjie
public mut prop macroInputDecl: Decl
```

功能：获取或设置 [MacroExpandParam](ast_package_classes.md#class-macroexpandparam) 中的声明节点。

类型：[Decl](ast_package_classes.md#class-decl)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [MacroExpandParam](ast_package_classes.md#class-macroexpandparam) 节点中没有声明节点时，抛出异常。

### prop macroInputs

```cangjie
public mut prop macroInputs: Tokens
```

功能：获取或设置 [MacroExpandParam](ast_package_classes.md#class-macroexpandparam) 宏调用的输入。

类型：[Tokens](ast_package_classes.md#class-tokens)

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [MacroExpandParam](ast_package_classes.md#class-macroexpandparam) 宏调用的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### prop rSquare

```cangjie
public mut prop rSquare: Token
```

功能：获取或设置 [MacroExpandParam](ast_package_classes.md#class-macroexpandparam) 属性宏调用的 "]"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "]" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [MacroExpandParam](ast_package_classes.md#class-macroexpandparam) 对象。

## class MacroMessage

```cangjie
public class MacroMessage
```

功能：记录内层宏发送的信息。

### func getBool(String)

```cangjie
public func getBool(key: String): Bool
```

功能：获取对应 key 值的 [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) 类型信息。

参数：

- key: [String](../../core/core_package_api/core_package_structs.md#struct-string) - 用于检索的关键字的名字。

返回值：

- [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) - 返回存在 key 值对应的 [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) 类型的信息。

异常：

- [Exception](../../core/core_package_api/core_package_exceptions.md#class-exception) - 当不存在 key 值对应的 [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) 类型的信息时，抛出异常。

### func getInt64(String)

```cangjie
public func getInt64(key: String): Int64
```

功能：获取对应 key 值的 [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) 类型信息。

参数：

- key: [String](../../core/core_package_api/core_package_structs.md#struct-string) - 用于检索的关键字的名字。

返回值：

- [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) - 返回存在 key 值对应的 [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) 类型的信息。

异常：

- [Exception](../../core/core_package_api/core_package_exceptions.md#class-exception) - 当不存在 key 值对应的 [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) 类型的信息时，抛出异常。

### func getString(String)

```cangjie
public func getString(key: String): String
```

功能：获取对应 key 值的 [String](../../core/core_package_api/core_package_structs.md#struct-string) 类型信息。

参数：

- key: [String](../../core/core_package_api/core_package_structs.md#struct-string) - 用于检索的关键字的名字。

返回值：

- [String](../../core/core_package_api/core_package_structs.md#struct-string) - 返回存在 key 值对应的 [String](../../core/core_package_api/core_package_structs.md#struct-string) 类型的信息。

异常：

- [Exception](../../core/core_package_api/core_package_exceptions.md#class-exception) - 当不存在 key 值对应的 [String](../../core/core_package_api/core_package_structs.md#struct-string) 类型的信息时，抛出异常。

### func getTokens(String)

```cangjie
public func getTokens(key: String): Tokens
```

功能：获取对应 key 值的 [Tokens](ast_package_classes.md#class-tokens) 类型信息。

参数：

- key: [String](../../core/core_package_api/core_package_structs.md#struct-string) - 用于检索的关键字的名字。

返回值：

- [Tokens](ast_package_classes.md#class-tokens) - 返回存在 key 值对应的 [Tokens](ast_package_classes.md#class-tokens) 类型的信息。

异常：

- [Exception](../../core/core_package_api/core_package_exceptions.md#class-exception) - 当不存在 key 值对应的 [Tokens](ast_package_classes.md#class-tokens) 类型的信息时，抛出异常。

### func hasItem(String)

```cangjie
public func hasItem(key: String): Bool
```

功能：检查是否有 key 值对应的相关信息。

参数：

- key: [String](../../core/core_package_api/core_package_structs.md#struct-string) - 用于检索的关键字名字。

返回值：

- [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) - 若存在 key 值对应的相关信息，返回 true；反之，返回 false。

## class MainDecl

```cangjie
public class MainDecl <: Decl {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个 `main` 函数定义节点。

一个 [MainDecl](ast_package_classes.md#class-maindecl) 节点：`main() {}`。

父类型：

- [Decl](#class-decl)

### prop block

```cangjie
public mut prop block: Block
```

功能：获取或设置 [MainDecl](ast_package_classes.md#class-maindecl) 节点的函数体。

类型：[Block](ast_package_classes.md#class-block)

### prop colon

```cangjie
public mut prop colon: Token
```

功能：获取或设置 [MainDecl](ast_package_classes.md#class-maindecl) 节点的冒号。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是冒号时，抛出异常。

### prop declType

```cangjie
public mut prop declType: TypeNode
```

功能：获取或设置 [MainDecl](ast_package_classes.md#class-maindecl) 节点的函数返回类型。

类型：[TypeNode](ast_package_classes.md#class-typenode)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [MainDecl](ast_package_classes.md#class-maindecl) 节点的函数返回类型是一个缺省值时，抛出异常。

### prop funcParams

```cangjie
public mut prop funcParams: ArrayList<FuncParam>
```

功能：获取或设置 [MainDecl](ast_package_classes.md#class-maindecl) 节点的函数参数。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[FuncParam](ast_package_classes.md#class-funcparam)>

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [MainDecl](ast_package_classes.md#class-maindecl) 节点的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [MainDecl](ast_package_classes.md#class-maindecl) 节点的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [MainDecl](ast_package_classes.md#class-maindecl) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [MainDecl](ast_package_classes.md#class-maindecl) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [MainDecl](ast_package_classes.md#class-maindecl) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [MainDecl](ast_package_classes.md#class-maindecl) 节点时，抛出异常。

## class MatchCase

```cangjie
public class MatchCase <: Node {
    public init()
}
```

功能：表示 `match` 表达式中的一个 `case` 节点。

一个 [MatchCase](ast_package_classes.md#class-matchcase) 节点：`case failScore where score > 0 => 0`。

> **说明：**
>
> - [MatchCase](ast_package_classes.md#class-matchcase) 以关键字 `case` 开头，后跟 [Expr](ast_package_classes.md#class-expr) 或者一个或多个由 `|` 分隔的相同种类的 `pattern`，一个可选的 `patternguard`，一个 `=>` 和一系列声明或表达式。
> - 该节点与 [MatchExpr](ast_package_classes.md#class-matchexpr) 存在强绑定关系。

父类型：

- [Node](#class-node)

### prop arrow

```cangjie
public mut prop arrow: Token
```

功能：获取或设置 [MatchCase](ast_package_classes.md#class-matchcase) 中的 `=>` 操作符的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `=>` 操作符时，抛出异常。

### prop bitOrs

```cangjie
public mut prop bitOrs: Tokens
```

功能：获取或设置 [MatchCase](ast_package_classes.md#class-matchcase) 中的 `|` 操作符的词法单元序列，可能为空。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 `|` 词法单元序列时，抛出异常。

### prop block

```cangjie
public mut prop block: Block
```

功能：获取或设置 [MatchCase](ast_package_classes.md#class-matchcase) 中的一系列声明或表达式节点。

类型：[Block](ast_package_classes.md#class-block)

### prop expr

```cangjie
public mut prop expr: Expr
```

功能：获取或设置 [MatchCase](ast_package_classes.md#class-matchcase) 中位于 case 后的表达式节点。

类型：[Expr](ast_package_classes.md#class-expr)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [MatchCase](ast_package_classes.md#class-matchcase) 节点中不存在表达式节点时，抛出异常。

### prop keywordC

```cangjie
public mut prop keywordC: Token
```

功能：获取或设置 [MatchCase](ast_package_classes.md#class-matchcase) 内的 `case` 关键字的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `case` 关键字时，抛出异常。

### prop keywordW

```cangjie
public mut prop keywordW: Token
```

功能：获取或设置 [MatchCase](ast_package_classes.md#class-matchcase) 中可选的关键字 `where` 的词法单元，可能为 [ILLEGAL](ast_package_enums.md#illegal) 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `where` 关键字时，抛出异常。

### prop patternGuard

```cangjie
public mut prop patternGuard: Expr
```

功能：获取或设置 [MatchCase](ast_package_classes.md#class-matchcase) 中可选的 pattern guard 表达式节点。

类型：[Expr](ast_package_classes.md#class-expr)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [MatchCase](ast_package_classes.md#class-matchcase) 节点中不存在 pattern guard 表达式时，抛出异常。

### prop patterns

```cangjie
public mut prop patterns: ArrayList<Pattern>
```

功能：获取或设置 [MatchCase](ast_package_classes.md#class-matchcase) 中位于 case 后的 `pattern` 列表。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Pattern](ast_package_classes.md#class-pattern)>

### init()

```cangjie
public init()
```

功能：构造一个默认的 [MatchCase](ast_package_classes.md#class-matchcase) 对象。

## class MatchExpr

```cangjie
public class MatchExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示模式匹配表达式实现模式匹配。

模式匹配表达式分为带 selector 的 `match` 表达式和不带 selector 的 `match` 表达式。

父类型：

- [Expr](#class-expr)

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置 [MatchExpr](ast_package_classes.md#class-matchexpr) 节点中 `match` 关键字。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `matcch` 关键字时，抛出异常。

### prop lBrace

```cangjie
public mut prop lBrace: Token
```

功能：获取或设置 [MatchExpr](ast_package_classes.md#class-matchexpr) 之后的 "{"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "{" 时，抛出异常。

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [MatchExpr](ast_package_classes.md#class-matchexpr) 之后的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop matchCases

```cangjie
public mut prop matchCases: ArrayList<MatchCase>
```

功能：获取或设置 [MatchExpr](ast_package_classes.md#class-matchexpr) 内的 `matchCase`, `matchCase` 以关键字 `case` 开头，后跟一个或者多个由 [Pattern](ast_package_classes.md#class-pattern) 或 [Expr](ast_package_classes.md#class-expr)节点，具体见 [MatchCase](ast_package_classes.md#class-matchcase)。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[MatchCase](ast_package_classes.md#class-matchcase)>

### prop rBrace

```cangjie
public mut prop rBrace: Token
```

功能：获取或设置 [MatchExpr](ast_package_classes.md#class-matchexpr) 之后的 "}"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "}" 时，抛出异常。

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [MatchExpr](ast_package_classes.md#class-matchexpr) 之后的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### prop selector

```cangjie
public mut prop selector: Expr
```

功能：获取或设置关键字 `match` 之后的 [Expr](ast_package_classes.md#class-expr)。

类型：[Expr](ast_package_classes.md#class-expr)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当该表达式是一个不带 selector 的 `match` 表达式时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [MatchExpr](ast_package_classes.md#class-matchexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [MatchExpr](ast_package_classes.md#class-matchexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [MatchExpr](ast_package_classes.md#class-matchexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [MatchExpr](ast_package_classes.md#class-matchexpr) 节点时，抛出异常。

## class MemberAccess

```cangjie
public class MemberAccess <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示成员访问表达式。

可以用于访问 class、interface、struct 等类型的成员。一个 [MemberAccess](ast_package_classes.md#class-memberaccess) 节点的形式为 `T.a`，`T` 为成员访问表达式的主体，`a` 表示成员的名字。

父类型：

- [Expr](#class-expr)

### prop baseExpr

```cangjie
public mut prop baseExpr: Expr
```

功能：获取或设置 [MemberAccess](ast_package_classes.md#class-memberaccess) 节点的成员访问表达式主体。

类型：[Expr](ast_package_classes.md#class-expr)

### prop commas

```cangjie
public mut prop commas: Tokens
```

功能：获取或设置 [MemberAccess](ast_package_classes.md#class-memberaccess) 节点中的 "," 词法单元序列，可能为空。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop dot

```cangjie
public mut prop dot: Token
```

功能：获取或设置 [MemberAccess](ast_package_classes.md#class-memberaccess) 节点中的 "."。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "." 词法单元类型时，抛出异常。

### prop field

```cangjie
public mut prop field: Token
```

功能：获取或设置 [MemberAccess](ast_package_classes.md#class-memberaccess) 节点成员的名字。

类型：[Token](ast_package_structs.md#struct-token)

### prop lAngle

```cangjie
public mut prop lAngle: Token
```

功能：获取或设置 [MemberAccess](ast_package_classes.md#class-memberaccess) 节点中的左尖括号。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是左尖括号时，抛出异常。

### prop rAngle

```cangjie
public mut prop rAngle: Token
```

功能：获取或设置 [MemberAccess](ast_package_classes.md#class-memberaccess) 节点中的右尖括号。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是右尖括号时，抛出异常。

### prop typeArguments

```cangjie
public mut prop typeArguments: ArrayList<TypeNode>
```

功能：获取或设置 [MemberAccess](ast_package_classes.md#class-memberaccess) 节点中的实例化类型。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[TypeNode](ast_package_classes.md#class-typenode)>

### init()

```cangjie
public init()
```

功能：构造一个默认的 [MemberAccess](ast_package_classes.md#class-memberaccess) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [MemberAccess](ast_package_classes.md#class-memberaccess) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [MemberAccess](ast_package_classes.md#class-memberaccess) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [MemberAccess](ast_package_classes.md#class-memberaccess) 节点时，抛出异常。

## class Modifier

```cangjie
public class Modifier <: Node {
    public init()
    public init(keyword: Token)
}
```

功能：表示该定义具备某些特性，通常放在定义处的最前端。

一个 [Modifier](ast_package_classes.md#class-modifier) 节点：`public func foo()` 中的 `public`。

父类型：

- [Node](#class-node)

### prop keyword(Token)

```cangjie
public mut prop keyword: Token
```

功能：获取或设置 [Modifier](ast_package_classes.md#class-modifier) 节点中的修饰符词法单元。

类型：[Token](ast_package_structs.md#struct-token)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [Modifier](ast_package_classes.md#class-modifier) 对象。

### init(Token)

```cangjie
public init(keyword: Token)
```

功能：构造一个 [Modifier](ast_package_classes.md#class-modifier) 对象。

参数：

- keyword: [Token](ast_package_structs.md#struct-token) - 将要构造 [Modifier](ast_package_classes.md#class-modifier) 类型的词法单元。

## class Node

```cangjie
abstract sealed class Node <: ToTokens
```

功能：所有仓颉语法树节点的父类。

该类提供了所有数据类型通用的操作接口。

父类型：

- [ToTokens](ast_package_interfaces.md#interface-totokens)

### prop beginPos

```cangjie
public mut prop beginPos: Position
```

功能：获取或设置当前节点的起始的位置信息。

类型：[Position](ast_package_structs.md#struct-position)

### prop endPos

```cangjie
public mut prop endPos: Position
```

功能：获取或设置当前节点的终止的位置信息。

类型：[Position](ast_package_structs.md#struct-position)

### func dump()

```cangjie
public func dump(): Unit
```

功能：将当前语法树节点转化为树形结构的形态并进行打印。

语法树节点的树形结构将按照以下形式进行输出：

- `-` 字符串：表示当前节点的公共属性， 如 `-keyword` , `-identifier`。
- 节点属性后紧跟该节点的具体类型， 如 `-declType: PrimitiveType` 表示节点类型是一个 [PrimitiveType](ast_package_classes.md#class-primitivetype) 节点。
- 每个类型使用大括号表示类型的作用区间。

语法树输出的详细格式请参见[语法树节点打印](../ast_samples/dump.md)。

### func toTokens()

```cangjie
public func toTokens(): Tokens
```

功能：将语法树节点转化为 [Tokens](ast_package_classes.md#class-tokens) 类型。

返回值：

- [Tokens](ast_package_classes.md#class-tokens) - 转化后的 [Tokens](ast_package_classes.md#class-tokens) 类型节点。

### func traverse(Visitor)

```cangjie
public func traverse(v: Visitor): Unit
```

功能：遍历当前语法树节点及其子节点。若提前终止遍历子节点的行为，可重写 `visit` 函数并调用 `breakTraverse` 函数提前终止遍历行为，请参见[自定义访问函数遍历 AST 对象示例](../ast_samples/traverse.md)。

参数：

- v: [Visitor](ast_package_classes.md#class-visitor) - [Visitor](ast_package_classes.md#class-visitor) 类型的实例。

## class OptionalExpr

```cangjie
public class OptionalExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个带有问号操作符的表达式节点。

一个 [OptionalExpr](ast_package_classes.md#class-optionalexpr) 节点：`a?.b, a?(b), a?[b]` 中的 `a?`。

父类型：

- [Expr](#class-expr)

### prop baseExpr

```cangjie
public mut prop baseExpr: Expr
```

功能：获取或设置 [OptionalExpr](ast_package_classes.md#class-optionalexpr) 的表达式节点。

类型：[Expr](ast_package_classes.md#class-expr)

### prop quest

```cangjie
public mut prop quest: Token
```

功能：获取或设置 [OptionalExpr](ast_package_classes.md#class-optionalexpr) 中的问号操作符。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是问号操作符时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [OptionalExpr](ast_package_classes.md#class-optionalexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [OptionalExpr](ast_package_classes.md#class-optionalexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [OptionalExpr](ast_package_classes.md#class-optionalexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [OptionalExpr](ast_package_classes.md#class-optionalexpr) 节点时，抛出异常。

## class PackageHeader

```cangjie
public class PackageHeader <: Node {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示包声明节点。

一个 [PackageHeader](ast_package_classes.md#class-packageheader) 节点: `package define` 或者 `macro package define`。

> **说明：**
>
> 包声明以关键字 `package` 或 `macro package` 开头，后面紧跟包名，且包声明必须在源文件的首行。

父类型：

- [Node](#class-node)

### prop accessible

```cangjie
public mut prop accessible: Token
```

功能：获取或设置 [PackageHeader](ast_package_classes.md#class-packageheader) 节点中的访问性修饰符的词法单元，可能为 [ILLEGAL](ast_package_enums.md#illegal) 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

### prop keywordM

```cangjie
public mut prop keywordM: Token
```

功能：获取或设置 [PackageHeader](ast_package_classes.md#class-packageheader) 节点中的 `macro` 关键字的词法单元（`M` 为关键字首字母，下同），可能为 [ILLEGAL](ast_package_enums.md#illegal) 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `macro` 关键字时，抛出异常。

### prop keywordP

```cangjie
public mut prop keywordP: Token
```

功能：获取或设置 [PackageHeader](ast_package_classes.md#class-packageheader) 节点中的 `package` 关键字的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `package` 关键字时，抛出异常。

### prop prefixPaths

```cangjie
public mut prop prefixPaths: Tokens
```

功能：获取或设置 [PackageHeader](ast_package_classes.md#class-packageheader) 节点中完整包名的前缀部分的词法单元序列，可能为空。如 `package a.b.c` 中的 `a` 和 `b`。

类型：[Tokens](ast_package_classes.md#class-tokens)

### prop prefixDots

```cangjie
public mut prop prefixDots: Tokens
```

功能：获取或设置 [PackageHeader](ast_package_classes.md#class-packageheader) 节点中完整包名中用于分隔每层子包的词法单元序列，可能为空。如 `package a.b.c` 中的两个 "."。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 "." 词法单元序列时，抛出异常。

### prop packageIdentifier

```cangjie
public mut prop packageIdentifier: Token
```

功能：获取或设置 [PackageHeader](ast_package_classes.md#class-packageheader) 节点中当前包的名字，如果当前包为 root 包，即为完整包名，若当前包为子包，则为最后一个 "." 后的名字。

类型：[Token](ast_package_structs.md#struct-token)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [PackageHeader](ast_package_classes.md#class-packageheader) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [PackageHeader](ast_package_classes.md#class-packageheader) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [PackageHeader](ast_package_classes.md#class-packageheader) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens)) 序列。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [PackageHeader](ast_package_classes.md#class-packageheader) 节点时，抛出异常。

## class ParenExpr

```cangjie
public class ParenExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个括号表达式节点，是指使用圆括号括起来的表达式。

一个 [ParenExpr](ast_package_classes.md#class-parenexpr) 节点：`(1 + 2)`。

父类型：

- [Expr](#class-expr)

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [ParenExpr](ast_package_classes.md#class-parenexpr) 节点中的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop parenthesizedExpr

```cangjie
public mut prop parenthesizedExpr: Expr
```

功能：获取或设置 [ParenExpr](ast_package_classes.md#class-parenexpr) 节点中由圆括号括起来的子表达式。

类型：[Expr](ast_package_classes.md#class-expr)

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [ParenExpr](ast_package_classes.md#class-parenexpr) 节点中的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [ParenExpr](ast_package_classes.md#class-parenexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [ParenExpr](ast_package_classes.md#class-parenexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [ParenExpr](ast_package_classes.md#class-parenexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [ParenExpr](ast_package_classes.md#class-parenexpr) 节点时，抛出异常。

## class ParenType

```cangjie
public class ParenType <: TypeNode {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示括号类型节点。

例如 `var a: (Int64)` 中的 `(Int64)`。

父类型：

- [TypeNode](#class-typenode)

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [ParenType](ast_package_classes.md#class-parentype) 节点中的 "(" 词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop parenthesizedType

```cangjie
public mut prop parenthesizedType: TypeNode
```

功能：获取或设置 [ParenType](ast_package_classes.md#class-parentype) 节点中括起来的类型，如 `(Int64)` 中的 [Int64](../../core/core_package_api/core_package_intrinsics.md#int64)。

类型：[TypeNode](ast_package_classes.md#class-typenode)

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [ParenType](ast_package_classes.md#class-parentype) 节点中的 ")" 词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [ParenType](ast_package_classes.md#class-parentype) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [ParenType](ast_package_classes.md#class-parentype) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [ParenType](ast_package_classes.md#class-parentype) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [ParenType](ast_package_classes.md#class-parentype) 节点时，抛出异常。

## class Pattern

```cangjie
public open class Pattern <: Node
```

功能：所有模式匹配节点的父类，继承自 [Node](ast_package_classes.md#class-node) 节点。

父类型：

- [Node](#class-node)

## class PrefixType

```cangjie
public class PrefixType <: TypeNode {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示带问号的前缀类型节点。

例如 `var a : ?A` 中的 `?A`。

父类型：

- [TypeNode](#class-typenode)

### prop baseType

```cangjie
public mut prop baseType: TypeNode
```

功能：获取或设置 [PrefixType](ast_package_classes.md#class-prefixtype) 节点中的类型节点，如 `var a: ?A` 中的 `A`。

类型：[TypeNode](ast_package_classes.md#class-typenode)

### prop prefixOps

```cangjie
public mut prop prefixOps: Tokens
```

功能：获取或设置 [PrefixType](ast_package_classes.md#class-prefixtype) 节点中前缀操作符集合。

类型：[Tokens](ast_package_classes.md#class-tokens)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [PrefixType](ast_package_classes.md#class-prefixtype) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [PrefixType](ast_package_classes.md#class-prefixtype) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [PrefixType](ast_package_classes.md#class-prefixtype) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [PrefixType](ast_package_classes.md#class-prefixtype) 节点时，抛出异常。

## class PrimaryCtorDecl

```cangjie
public class PrimaryCtorDecl <: Decl {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个主构造函数节点。

主构造函数节点由修饰符，主构造函数名，形参列表和主构造函数体构成。

父类型：

- [Decl](#class-decl)

### prop block

```cangjie
public mut prop block: Block
```

功能：获取或设置 [PrimaryCtorDecl](ast_package_classes.md#class-primaryctordecl) 节点的主构造函数体。

类型：[Block](ast_package_classes.md#class-block)

### prop funcParams

```cangjie
public mut prop funcParams: ArrayList<FuncParam>
```

功能：获取或设置 [PrimaryCtorDecl](ast_package_classes.md#class-primaryctordecl) 节点的参数。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[FuncParam](ast_package_classes.md#class-funcparam)>

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [PrimaryCtorDecl](ast_package_classes.md#class-primaryctordecl) 节点的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [PrimaryCtorDecl](ast_package_classes.md#class-primaryctordecl) 节点的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [PrimaryCtorDecl](ast_package_classes.md#class-primaryctordecl) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [PrimaryCtorDecl](ast_package_classes.md#class-primaryctordecl) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [PrimaryCtorDecl](ast_package_classes.md#class-primaryctordecl) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [PrimaryCtorDecl](ast_package_classes.md#class-primaryctordecl) 节点时，抛出异常。

### func isConst()

```cangjie
public func isConst(): Bool
```

功能：判断是否是一个 `Const` 类型的节点。

返回值：

- [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) - 当前节点为 `Const` 类型的节点时，返回 true；反之，返回 false。

## class PrimitiveType

```cangjie
public class PrimitiveType <: TypeNode {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个基本类型节点。

例如数值类型，[Rune](../../core/core_package_api/core_package_intrinsics.md#rune) 类型，布尔类型等。

父类型：

- [TypeNode](#class-typenode)

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置构造 [PrimitiveType](ast_package_classes.md#class-primitivetype) 类型的关键字，如 [Int8](../../core/core_package_api/core_package_intrinsics.md#int8)。

类型：[Token](ast_package_structs.md#struct-token)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [PrimitiveType](ast_package_classes.md#class-primitivetype) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [PrimitiveType](ast_package_classes.md#class-primitivetype) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [PrimitiveType](ast_package_classes.md#class-primitivetype) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [PrimitiveType](ast_package_classes.md#class-primitivetype) 节点时，抛出异常。

## class PrimitiveTypeExpr

```cangjie
public class PrimitiveTypeExpr <: Expr {
    public init()
    public init(kind: Tokens)
}
```

功能：表示基本类型表达式节点。

[PrimitiveTypeExpr](ast_package_classes.md#class-primitivetypeexpr) 节点：编译器内置的基本类型作为表达式出现在节点中。如 [Int64](../../core/core_package_api/core_package_intrinsics.md#int64).toSting() 中的 [Int64](../../core/core_package_api/core_package_intrinsics.md#int64)。

父类型：

- [Expr](#class-expr)

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置 [PrimitiveTypeExpr](ast_package_classes.md#class-primitivetypeexpr) 中的基本类型关键字。

类型：[Token](ast_package_structs.md#struct-token)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [PrimitiveTypeExpr](ast_package_classes.md#class-primitivetypeexpr) 对象。

### init(Tokens)

```cangjie
public init(kind: Tokens)
```

功能：构造一个 [PrimitiveTypeExpr](ast_package_classes.md#class-primitivetypeexpr) 对象。

参数：

- kind: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [PrimitiveTypeExpr](ast_package_classes.md#class-primitivetypeexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [PrimitiveTypeExpr](ast_package_classes.md#class-primitivetypeexpr) 节点时，抛出异常。

## class Program

```cangjie
public class Program <: Node {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个仓颉源码文件节点。

一个仓颉源码文件节点主要包括包定义节点，包导入节点和 TopLevel 作用域内的所有声明节点。

> **说明：**
>
> 任何一个仓颉源码文件都可以被解析为一个 [Program](ast_package_classes.md#class-program) 类型。

父类型：

- [Node](#class-node)

### prop decls

```cangjie
public mut prop decls: ArrayList<Decl>
```

功能：获取或设置仓颉源码文件中 TopLevel 作用域内定义的声明节点列表。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Decl](ast_package_classes.md#class-decl)>

### prop importLists

```cangjie
public mut prop importLists: ArrayList<ImportList>
```

功能：获取或设置仓颉源码文件中包导入节点 [ImportList](ast_package_classes.md#class-importlist) 的列表。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[ImportList](ast_package_classes.md#class-importlist)>

### prop packageHeader

```cangjie
public mut prop packageHeader: PackageHeader
```

功能：获取或设置仓颉源码文件中包的声明节点 [PackageHeader](ast_package_classes.md#class-packageheader)。

类型：[PackageHeader](ast_package_classes.md#class-packageheader)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [Program](ast_package_classes.md#class-program) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [Program](ast_package_classes.md#class-program) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [Program](ast_package_classes.md#class-program) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens)) 序列。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为一个文件节点时，抛出异常。

## class PropDecl

```cangjie
public class PropDecl <: Decl {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个属性定义节点。

一个 [PropDecl](ast_package_classes.md#class-propdecl) 节点：`prop X: Int64 { get() { 0 } }`。

父类型：

- [Decl](#class-decl)

### prop colon

```cangjie
public mut prop colon: Token
```

功能：获取或设置 [PropDecl](ast_package_classes.md#class-propdecl) 节点的冒号。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是冒号时，抛出异常。

### prop declType

```cangjie
public mut prop declType : TypeNode
```

功能：获取或设置 [PropDecl](ast_package_classes.md#class-propdecl) 节点的返回类型。

类型：[TypeNode](ast_package_classes.md#class-typenode)

### prop getter

```cangjie
public mut prop getter: FuncDecl
```

功能：获取或设置 [PropDecl](ast_package_classes.md#class-propdecl) 节点的 getter 函数。

类型：[FuncDecl](ast_package_classes.md#class-funcdecl)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [PropDecl](ast_package_classes.md#class-propdecl) 节点不存在 getter 函数时，抛出异常。

### prop lBrace

```cangjie
public mut prop lBrace: Token
```

功能：获取或设置 [PropDecl](ast_package_classes.md#class-propdecl) 节点的 "{"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "{" 时，抛出异常。

### prop rBrace

```cangjie
public mut prop rBrace: Token
```

功能：获取或设置 [PropDecl](ast_package_classes.md#class-propdecl) 节点的 "}"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "}" 时，抛出异常。

### prop setter

```cangjie
public mut prop setter: FuncDecl
```

功能：获取或设置 [PropDecl](ast_package_classes.md#class-propdecl) 节点的 setter 函数。

类型：[FuncDecl](ast_package_classes.md#class-funcdecl)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [PropDecl](ast_package_classes.md#class-propdecl) 节点不存在 setter 函数时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [PropDecl](ast_package_classes.md#class-propdecl) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [PropDecl](ast_package_classes.md#class-propdecl) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [PropDecl](ast_package_classes.md#class-propdecl) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [PropDecl](ast_package_classes.md#class-propdecl) 节点时，抛出异常。

## class QualifiedType

```cangjie
public class QualifiedType <: TypeNode {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个用户自定义成员类型。

例如 `var a : T.a` 中的 `T.a`, 其中 T 是包名，a 是从 T 包中导入的类型。

父类型：

- [TypeNode](#class-typenode)

### prop baseType

```cangjie
public mut prop baseType: TypeNode
```

功能：获取或设置 [QualifiedType](ast_package_classes.md#class-qualifiedtype) 节点的成员访问类型主体，如 `var a : T.a` 中的 `T`。

类型：[TypeNode](ast_package_classes.md#class-typenode)

### prop commas

```cangjie
public mut prop commas: Tokens
```

功能：获取或设置 [QualifiedType](ast_package_classes.md#class-qualifiedtype) 节点中的 "," 词法单元序列，可能为空。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop dot

```cangjie
public mut prop dot: Token
```

功能：获取或设置 [QualifiedType](ast_package_classes.md#class-qualifiedtype) 节点中的 "." 。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 "." 词法单元时，抛出异常。

### prop identifier

```cangjie
public mut prop identifier: Token
```

功能：获取或设置 [QualifiedType](ast_package_classes.md#class-qualifiedtype) 节点成员的标识符，如 `var a : T.a` 中的 `a`。

类型：[Token](ast_package_structs.md#struct-token)

### prop lAngle

```cangjie
public mut prop lAngle: Token
```

功能：获取或设置 [QualifiedType](ast_package_classes.md#class-qualifiedtype) 节点中的左尖括号词法单元，可能为 [ILLEGAL](ast_package_enums.md#illegal) 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是左尖括号时，抛出异常。

### prop rAngle

```cangjie
public mut prop rAngle: Token
```

功能：获取或设置 [QualifiedType](ast_package_classes.md#class-qualifiedtype) 节点中的右尖括号词法单元，可能为 [ILLEGAL](ast_package_enums.md#illegal) 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是右尖括号时，抛出异常。

### prop typeArguments

```cangjie
public mut prop typeArguments: ArrayList<TypeNode>
```

功能：获取或设置 [QualifiedType](ast_package_classes.md#class-qualifiedtype) 节点中的实例化类型的列表，如 `T.a<Int32>` 中的 [Int32](../../core/core_package_api/core_package_intrinsics.md#int32)，列表可能为空。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[TypeNode](ast_package_classes.md#class-typenode)>

### init()

```cangjie
public init()
```

功能：构造一个默认的 [QualifiedType](ast_package_classes.md#class-qualifiedtype) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [QualifiedType](ast_package_classes.md#class-qualifiedtype) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [QualifiedType](ast_package_classes.md#class-qualifiedtype) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [QualifiedType](ast_package_classes.md#class-qualifiedtype) 节点时，抛出异常。

## class QuoteExpr

```cangjie
public class QuoteExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示 `quote` 表达式节点。

一个 [QuoteExpr](ast_package_classes.md#class-quoteexpr) 节点： `quote(var ident = 0)`。

父类型：

- [Expr](#class-expr)

### prop exprs

```cangjie
public mut prop exprs: ArrayList<Expr>
```

功能：获取或设置 [QuoteExpr](ast_package_classes.md#class-quoteexpr) 中由 `()` 括起的内部引用表达式节点。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Expr](ast_package_classes.md#class-expr)>

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置 [QuoteExpr](ast_package_classes.md#class-quoteexpr) 的 `quote` 关键字。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `quote` 关键字时，抛出异常。

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [QuoteExpr](ast_package_classes.md#class-quoteexpr) 中的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [QuoteExpr](ast_package_classes.md#class-quoteexpr) 中的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [QuoteExpr](ast_package_classes.md#class-quoteexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [QuoteExpr](ast_package_classes.md#class-quoteexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [QuoteExpr](ast_package_classes.md#class-quoteexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [QuoteExpr](ast_package_classes.md#class-quoteexpr) 节点。

## class QuoteToken

```cangjie
public class QuoteToken <: Expr
```

功能：表示 `quote` 表达式节点内任意合法的 `token`。

父类型：

- [Expr](#class-expr)

### prop tokens

```cangjie
public mut prop tokens: Tokens
```

功能：获取 [QuoteToken](ast_package_classes.md#class-quotetoken) 内的 [Tokens](ast_package_classes.md#class-tokens)。

类型：[Tokens](ast_package_classes.md#class-tokens)

## class RangeExpr

```cangjie
public class RangeExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示包含区间操作符的表达式。

[RangeExpr](ast_package_classes.md#class-rangeexpr) 节点：存在两种 [Range](../../core/core_package_api/core_package_structs.md#struct-ranget-where-t--countablet--comparablet--equatablet) 操作符：`..` 和 `..=`，分别用于创建左闭右开和左闭右闭的 [Range](../../core/core_package_api/core_package_structs.md#struct-ranget-where-t--countablet--comparablet--equatablet) 实例。它们的使用方式分别为 `start..end:step` 和 `start..=end:step`。

父类型：

- [Expr](#class-expr)

### prop colon

```cangjie
public mut prop colon: Token
```

功能：获取或设置 [RangeExpr](ast_package_classes.md#class-rangeexpr) 中的 ":" 操作符。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ":" 操作符时，抛出异常。

### prop end

```cangjie
public mut prop end: Expr
```

功能：获取或设置 [RangeExpr](ast_package_classes.md#class-rangeexpr) 中的终止值。

类型：[Expr](ast_package_classes.md#class-expr)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 终止表达式省略。只有在 [Range](../../core/core_package_api/core_package_structs.md#struct-ranget-where-t--countablet--comparablet--equatablet)\<[Int64](../../core/core_package_api/core_package_intrinsics.md#int64)> 类型的实例用在下标操作符 `[]` 为空的场景。

### prop op

```cangjie
public mut prop op: Token
```

功能：获取或设置 [RangeExpr](ast_package_classes.md#class-rangeexpr) 中的 [Range](../../core/core_package_api/core_package_structs.md#struct-ranget-where-t--countablet--comparablet--equatablet) 的操作符。

类型：[Token](ast_package_structs.md#struct-token)

### prop start

```cangjie
public mut prop start: Expr
```

功能：获取或设置 [RangeExpr](ast_package_classes.md#class-rangeexpr) 中的起始值。

类型：[Expr](ast_package_classes.md#class-expr)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 起始表达式省略。只有在 [Range](../../core/core_package_api/core_package_structs.md#struct-ranget-where-t--countablet--comparablet--equatablet)\<[Int64](../../core/core_package_api/core_package_intrinsics.md#int64)> 类型的实例用在下标操作符 `[]` 为空的场景。

### prop step

```cangjie
public mut prop step: Expr
```

功能：获取或设置 [RangeExpr](ast_package_classes.md#class-rangeexpr) 中序列中前后两个元素之间的差值。

类型：[Expr](ast_package_classes.md#class-expr)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [RangeExpr](ast_package_classes.md#class-rangeexpr) 中未设置序列前后两个元素之间的差值时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [RangeExpr](ast_package_classes.md#class-rangeexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [RangeExpr](ast_package_classes.md#class-rangeexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [RangeExpr](ast_package_classes.md#class-rangeexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [RangeExpr](ast_package_classes.md#class-rangeexpr) 节点时，抛出异常。

## class RefExpr

```cangjie
public class RefExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示引用一个声明的表达式节点。

一个 [RefExpr](ast_package_classes.md#class-refexpr) 节点：`var b = a + 1` 中的 `a` 是一个 [RefExpr](ast_package_classes.md#class-refexpr)。

父类型：

- [Expr](#class-expr)

### prop commas

```cangjie
public mut prop commas: Tokens
```

功能：获取或设置 [RefExpr](ast_package_classes.md#class-refexpr) 节点中的 "," 词法单元序列，可能为空。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop identifier

```cangjie
public mut prop identifier: Token
```

功能：获取或设置 [RefExpr](ast_package_classes.md#class-refexpr) 节点中的自定义类型的标识符。

类型：[Token](ast_package_structs.md#struct-token)

### prop lAngle

```cangjie
public mut prop lAngle: Token
```

功能：获取或设置 [RefExpr](ast_package_classes.md#class-refexpr) 节点中的左尖括号。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是左尖括号时，抛出异常。

### prop rAngle

```cangjie
public mut prop rAngle: Token
```

功能：获取或设置 [RefExpr](ast_package_classes.md#class-refexpr) 节点中的右尖括号。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是右尖括号时，抛出异常。

### prop typeArguments

```cangjie
public mut prop typeArguments: ArrayList<TypeNode>
```

功能：获取或设置 [RefExpr](ast_package_classes.md#class-refexpr) 节点中的实例化类型。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[TypeNode](ast_package_classes.md#class-typenode)>

### init()

```cangjie
public init()
```

功能：构造一个默认的 [RefExpr](ast_package_classes.md#class-refexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [RefExpr](ast_package_classes.md#class-refexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [RefExpr](ast_package_classes.md#class-refexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [RefExpr](ast_package_classes.md#class-refexpr) 节点时，抛出异常。

## class RefType

```cangjie
public class RefType <: TypeNode {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个非基础类型节点。

例如用户通过 `class`、`struct`、`enum` 等定义的自定义类型，以及 [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)、[String](../../core/core_package_api/core_package_structs.md#struct-string) 等内置类型都可以使用 [RefType](ast_package_classes.md#class-reftype) 表示。例如 `var a : A` 中的 `A`。

父类型：

- [TypeNode](#class-typenode)

### prop commas

```cangjie
public mut prop commas: Tokens
```

功能：获取或设置 [RefType](ast_package_classes.md#class-reftype) 节点中的 "," 词法单元序列，可能为空。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop identifier

```cangjie
public mut prop identifier: Token
```

功能：获取或设置构造 [RefType](ast_package_classes.md#class-reftype) 类型的关键字，如 `var a : A = A()` 中的 `A`。

类型：[Token](ast_package_structs.md#struct-token)

### prop lAngle

```cangjie
public mut prop lAngle: Token
```

功能：获取或设置 [RefType](ast_package_classes.md#class-reftype) 节点中的左尖括号词法单元，可能为 [ILLEGAL](ast_package_enums.md#illegal) 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是左尖括号时，抛出异常。

### prop rAngle

```cangjie
public mut prop rAngle: Token
```

功能：获取或设置 [RefType](ast_package_classes.md#class-reftype) 节点中的右尖括号词法单元，可能为 [ILLEGAL](ast_package_enums.md#illegal) 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是右尖括号时，抛出异常。

### prop typeArguments

```cangjie
public mut prop typeArguments: ArrayList<TypeNode>
```

功能：获取或设置 [RefType](ast_package_classes.md#class-reftype) 节点中的实例化类型的列表，可能为空，如 `var a : Array<Int32>` 中的 [Int32](../../core/core_package_api/core_package_intrinsics.md#int32)。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[TypeNode](ast_package_classes.md#class-typenode)>

### init()

```cangjie
public init()
```

功能：构造一个默认的 [RefType](ast_package_classes.md#class-reftype) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [RefType](ast_package_classes.md#class-reftype) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [RefType](ast_package_classes.md#class-reftype) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [RefType](ast_package_classes.md#class-reftype) 节点时，抛出异常。

## class ReturnExpr

```cangjie
public class ReturnExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示 `return` 表达式节点。

一个 [ReturnExpr](ast_package_classes.md#class-returnexpr) 节点：`return 1`。

父类型：

- [Expr](#class-expr)

### prop expr

```cangjie
public mut prop expr: Expr
```

功能：获取或设置 [ReturnExpr](ast_package_classes.md#class-returnexpr) 节点中的表达式节点。

类型：[Expr](ast_package_classes.md#class-expr)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [ReturnExpr](ast_package_classes.md#class-returnexpr) 节点没有表达式时，抛出异常。

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置 [ReturnExpr](ast_package_classes.md#class-returnexpr) 节点中的关键字。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `return` 关键字时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [ReturnExpr](ast_package_classes.md#class-returnexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [ReturnExpr](ast_package_classes.md#class-returnexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [ReturnExpr](ast_package_classes.md#class-returnexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [ReturnExpr](ast_package_classes.md#class-returnexpr) 节点时，抛出异常。

## class SpawnExpr

```cangjie
public class SpawnExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示 `Spawn` 表达式。

一个 [SpawnExpr](ast_package_classes.md#class-spawnexpr) 节点由 `spawn` 关键字和一个不包含形参的闭包组成，例如：`spawn { add(1, 2) }`。

父类型：

- [Expr](#class-expr)

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置 [SpawnExpr](ast_package_classes.md#class-spawnexpr) 中的 `spawn` 关键字。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `spawn` 关键字时，抛出异常。

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [SpawnExpr](ast_package_classes.md#class-spawnexpr) 中的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop lambdaExpr

```cangjie
public mut prop lambdaExpr: LambdaExpr
```

功能：获取或设置 [SpawnExpr](ast_package_classes.md#class-spawnexpr) 中的不含形参的闭包。

类型：[LambdaExpr](ast_package_classes.md#class-lambdaexpr)

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [SpawnExpr](ast_package_classes.md#class-spawnexpr) 中的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### prop threadContext

```cangjie
public mut prop threadContext: Expr
```

功能：获取或设置 [SpawnExpr](ast_package_classes.md#class-spawnexpr) 中的线程上下文环境表达式。

类型：[Expr](ast_package_classes.md#class-expr)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [SpawnExpr](ast_package_classes.md#class-spawnexpr) 中不含有上下文表达式时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [SpawnExpr](ast_package_classes.md#class-spawnexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [SpawnExpr](ast_package_classes.md#class-spawnexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [SpawnExpr](ast_package_classes.md#class-spawnexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [SpawnExpr](ast_package_classes.md#class-spawnexpr) 节点时，抛出异常。

## class StructDecl

```cangjie
public class StructDecl <: Decl {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个 `Struct` 节点。

Struct 的定义使用 `struct` 关键字，定义依次为：可缺省的修饰符、struct 关键字、struct 名、可选的类型参数、是否指定父接口、可选的泛型约束、struct 体的定义。

父类型：

- [Decl](#class-decl)

### prop body

```cangjie
public mut prop body: Body
```

功能：获取或设置 [StructDecl](ast_package_classes.md#class-structdecl) 节点的类体。

类型：[Body](ast_package_classes.md#class-body)

### prop superTypeBitAnds

```cangjie
public mut prop superTypeBitAnds: Tokens
```

功能：获取或设置 [StructDecl](ast_package_classes.md#class-structdecl) 节点的父接口声明中的 `&` 操作符的词法单元序列，可能为空。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 `&` 词法单元序列时，抛出异常。

### prop superTypes

```cangjie
public mut prop superTypes: ArrayList<TypeNode>
```

功能：获取或设置 [StructDecl](ast_package_classes.md#class-structdecl) 节点的父接口。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[TypeNode](ast_package_classes.md#class-typenode)>

### prop upperBound

```cangjie
public mut prop upperBound: Token
```

功能：获取或设置 `<:` 操作符。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `<:` 操作符时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [StructDecl](ast_package_classes.md#class-structdecl) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [StructDecl](ast_package_classes.md#class-structdecl) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [StructDecl](ast_package_classes.md#class-structdecl) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [StructDecl](ast_package_classes.md#class-structdecl) 节点时，抛出异常。

## class SubscriptExpr

```cangjie
public class SubscriptExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示索引访问表达式。

[SubscriptExpr](ast_package_classes.md#class-subscriptexpr) 节点：用于那些支持索引访问的类型（包括 [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt) 类型和 `Tuple` 类型）通过下标来访问其具体位置的元素，如 `arr[0]`。

父类型：

- [Expr](#class-expr)

### prop baseExpr

```cangjie
public mut prop baseExpr: Expr
```

功能：获取或设置 [SubscriptExpr](ast_package_classes.md#class-subscriptexpr) 中的表达式。

类型：[Expr](ast_package_classes.md#class-expr)

### prop indexList

```cangjie
public mut prop indexList: ArrayList<Expr>
```

功能：获取或设置 [SubscriptExpr](ast_package_classes.md#class-subscriptexpr) 中的索引表达式序列。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Expr](ast_package_classes.md#class-expr)>

### prop lSquare

```cangjie
public mut prop lSquare: Token
```

功能：获取或设置 [SubscriptExpr](ast_package_classes.md#class-subscriptexpr) 中的 "["。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "[" 时，抛出异常。

### prop rSquare

```cangjie
public mut prop rSquare: Token
```

功能：获取或设置 [SubscriptExpr](ast_package_classes.md#class-subscriptexpr) 中的 "]"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "]" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [SubscriptExpr](ast_package_classes.md#class-subscriptexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [SubscriptExpr](ast_package_classes.md#class-subscriptexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [SubscriptExpr](ast_package_classes.md#class-subscriptexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [SubscriptExpr](ast_package_classes.md#class-subscriptexpr) 节点时，抛出异常。

## class SynchronizedExpr

```cangjie
public class SynchronizedExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示 `synchronized` 表达式。

一个 [SynchronizedExpr](ast_package_classes.md#class-synchronizedexpr) 节点由 `synchronized` 关键字和 `StructuredMutex` 对以及后面的代码块组成, 例如 `synchronized(m) { foo() }`。

父类型：

- [Expr](#class-expr)

### prop block

```cangjie
public mut prop block: Block
```

功能：获取或设置 [SynchronizedExpr](ast_package_classes.md#class-synchronizedexpr) 修饰的代码块。

类型：[Block](ast_package_classes.md#class-block)

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置 [SynchronizedExpr](ast_package_classes.md#class-synchronizedexpr) 中的 `synchronized` 关键字。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `synchronized` 关键字时，抛出异常。

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [SynchronizedExpr](ast_package_classes.md#class-synchronizedexpr) 中的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [SynchronizedExpr](ast_package_classes.md#class-synchronizedexpr) 中的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### prop structuredMutex

```cangjie
public mut prop structuredMutex: Expr
```

功能：获取或设置 [SynchronizedExpr](ast_package_classes.md#class-synchronizedexpr) 中的 `StructuredMutex` 的对象。

类型：[Expr](ast_package_classes.md#class-expr)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [SynchronizedExpr](ast_package_classes.md#class-synchronizedexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [SynchronizedExpr](ast_package_classes.md#class-synchronizedexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [SynchronizedExpr](ast_package_classes.md#class-synchronizedexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [SynchronizedExpr](ast_package_classes.md#class-synchronizedexpr) 节点时，抛出异常。

## class ThisType

```cangjie
public class ThisType <: TypeNode {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示 `This` 类型节点。

父类型：

- [TypeNode](#class-typenode)

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置 [ThisType](ast_package_classes.md#class-thistype) 节点关键字 `This` 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [ThisType](ast_package_classes.md#class-thistype) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [ThisType](ast_package_classes.md#class-thistype) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [ThisType](ast_package_classes.md#class-thistype) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [ThisType](ast_package_classes.md#class-thistype) 节点时，抛出异常。

## class ThrowExpr

```cangjie
public class ThrowExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示 `throw` 表达式节点。

一个 [ThrowExpr](ast_package_classes.md#class-throwexpr) 节点：`throw Exception()`。

父类型：

- [Expr](#class-expr)

### prop expr

```cangjie
public mut prop expr: Expr
```

功能：获取或设置 [ThrowExpr](ast_package_classes.md#class-throwexpr) 节点中的表达式节点。

类型：[Expr](ast_package_classes.md#class-expr)

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置 [ThrowExpr](ast_package_classes.md#class-throwexpr) 节点中的关键字。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `throw` 关键字时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [ThrowExpr](ast_package_classes.md#class-throwexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [ThrowExpr](ast_package_classes.md#class-throwexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [ThrowExpr](ast_package_classes.md#class-throwexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [ThrowExpr](ast_package_classes.md#class-throwexpr) 节点时，抛出异常。

## class Tokens

```cangjie
public open class Tokens <: ToString & Iterable<Token> & ToBytes {
    public init()
    public init(tokArray: Array<Token>)
    public init(tokArrayList: ArrayList<Token>)
}
```

功能：对 [Token](ast_package_structs.md#struct-token) 序列进行封装的类型。

父类型：

- [ToString](../../core/core_package_api/core_package_interfaces.md#interface-tostring)
- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<[Token](ast_package_structs.md#struct-token)>
- [ToBytes](ast_package_interfaces.md#interface-tobytes)

### prop size

```cangjie
public open prop size: Int64
```

功能：获取 [Tokens](ast_package_classes.md#class-tokens) 对象中 [Token](ast_package_structs.md#struct-token) 类型的数量。

类型：[Int64](../../core/core_package_api/core_package_intrinsics.md#int64)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [Tokens](ast_package_classes.md#class-tokens) 对象。

### init(Array\<Token>)

```cangjie
public init(tokArray: Array<Token>)
```

功能：构造一个 [Tokens](ast_package_classes.md#class-tokens) 对象。

参数：

- tokArray: [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<[Token](ast_package_structs.md#struct-token)> - 一组包含 [Token](ast_package_structs.md#struct-token) 的 [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt) 类型。

### init(ArrayList\<Token>)

```cangjie
public init(tokArrayList: ArrayList<Token>)
```

功能：构造一个 [Tokens](ast_package_classes.md#class-tokens) 对象。

参数：

- tokArrayList: [ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Token](ast_package_structs.md#struct-token)> - 一组包含 [Token](ast_package_structs.md#struct-token) 的 [ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt) 类型。

### func append(Node)

```cangjie
public func append(node: Node): Tokens
```

功能：将当前的 [Tokens](ast_package_classes.md#class-tokens) 与传入节点所转换得到的 [Tokens](ast_package_classes.md#class-tokens) 进行拼接。

参数：

- node: [Node](ast_package_classes.md#class-node) - 待拼接的 [Node](ast_package_classes.md#class-node) 对象。

返回值：

- [Tokens](ast_package_classes.md#class-tokens) - 拼接后的 [Tokens](ast_package_classes.md#class-tokens) 类型。

### func append(Token)

```cangjie
public open func append(token: Token): Tokens
```

功能：将当前的 [Tokens](ast_package_classes.md#class-tokens) 与传入的 [Token](ast_package_structs.md#struct-token) 进行拼接。

参数：

- token: [Token](ast_package_structs.md#struct-token) - 待拼接的 [Token](ast_package_structs.md#struct-token) 对象。

返回值：

- [Tokens](ast_package_classes.md#class-tokens) - 拼接后的 [Tokens](ast_package_classes.md#class-tokens) 类型。

### func append(Tokens)

```cangjie
public open func append(tokens: Tokens): Tokens
```

功能：在当前的 [Tokens](ast_package_classes.md#class-tokens) 后追加传入的 [Tokens](ast_package_classes.md#class-tokens) 进行拼接（该接口性能较其他拼接函数表现更好）。

参数：

- tokens: [Tokens](ast_package_classes.md#class-tokens) - 待拼接的 [Tokens](ast_package_classes.md#class-tokens) 对象。

返回值：

- [Tokens](ast_package_classes.md#class-tokens) - 拼接后的 [Tokens](ast_package_classes.md#class-tokens) 类型。

### func concat(Tokens)

```cangjie
public func concat(tokens: Tokens): Tokens
```

功能：将当前的 [Tokens](ast_package_classes.md#class-tokens) 与传入的 [Tokens](ast_package_classes.md#class-tokens) 进行拼接。

参数：

- tokens: [Tokens](ast_package_classes.md#class-tokens) - 待拼接的 [Tokens](ast_package_classes.md#class-tokens) 对象。

返回值：

- [Tokens](ast_package_classes.md#class-tokens) - 拼接后的 [Tokens](ast_package_classes.md#class-tokens)。

### func dump()

```cangjie
public func dump(): Unit
```

功能：将 [Tokens](ast_package_classes.md#class-tokens) 内所有 [Token](ast_package_structs.md#struct-token) 的信息打印出来。

### func get(Int64)

```cangjie
public open func get(index: Int64): Token
```

功能：通过索引值获取 [Token](ast_package_structs.md#struct-token) 元素。

参数：

- index: [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) - 待索引的数值。

返回值：

- [Token](ast_package_structs.md#struct-token) - 指定索引的 [Token](ast_package_structs.md#struct-token)。

异常：

- [IndexOutOfBoundsException](../../core/core_package_api/core_package_exceptions.md#class-indexoutofboundsexception) - 当 `index` 无效时，抛出异常。

### func iterator()

```cangjie
public func iterator(): TokensIterator
```

功能：获取 [Tokens](ast_package_classes.md#class-tokens) 对象中的一个迭代器对象。

返回值：

- [TokensIterator](ast_package_classes.md#class-tokensiterator) - [Tokens](ast_package_classes.md#class-tokens) 对象的迭代器对象。

### func remove(Int64)

```cangjie
public func remove(index: Int64): Tokens
```

功能：删除指定位置的 [Token](ast_package_structs.md#struct-token) 对象。

参数：

- index: [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) - 被删除的 [Token](ast_package_structs.md#struct-token) 的索引。

返回值：

- [Tokens](ast_package_classes.md#class-tokens) - 删除指定位置的 [Token](ast_package_structs.md#struct-token) 后的 [Tokens](ast_package_classes.md#class-tokens) 对象。

### func toBytes()

```cangjie
public func toBytes(): Array<UInt8>
```

功能：Tokens 类型的序列化。

返回值：

- [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<[UInt8](../../core/core_package_api/core_package_intrinsics.md#uint8)> - 序列化后的字节序列。

### func toString()

```cangjie
public func toString(): String
```

功能：将 [Tokens](ast_package_classes.md#class-tokens) 转化为 [String](../../core/core_package_api/core_package_structs.md#struct-string) 类型。

### operator func +(Token)

```cangjie
public operator func +(r: Token): Tokens
```

功能：使用当前 [Tokens](ast_package_classes.md#class-tokens) 与另一个 [Token](ast_package_structs.md#struct-token) 相加以获取新的 [Tokens](ast_package_classes.md#class-tokens)。

参数：

- r: [Token](ast_package_structs.md#struct-token) - 待操作的另一个 [Token](ast_package_structs.md#struct-token) 对象。

返回值：

- [Tokens](ast_package_classes.md#class-tokens) - 新拼接 [Tokens](ast_package_classes.md#class-tokens) 后的词法单元集合。

### operator func +(Tokens)

```cangjie
public operator func +(r: Tokens): Tokens
```

功能：使用当前 [Tokens](ast_package_classes.md#class-tokens) 与 [Tokens](ast_package_classes.md#class-tokens) 相加以获取新的 [Tokens](ast_package_classes.md#class-tokens) 类型。

参数：

- r: [Tokens](ast_package_classes.md#class-tokens) - 待操作的一组 [Tokens](ast_package_classes.md#class-tokens) 对象。

返回值：

- [Tokens](ast_package_classes.md#class-tokens) - 新拼接 [Tokens](ast_package_classes.md#class-tokens) 后的词法单元集合。

### operator func \[](Int64)

```cangjie
public operator func [](index: Int64): Token
```

功能：操作符重载，通过索引值获取对应 [Token](ast_package_structs.md#struct-token)。

参数：

- index: [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) - 待索引的数值。

返回值：

- [Token](ast_package_structs.md#struct-token) - 返回索引对应的 [Token](ast_package_structs.md#struct-token)。

异常：

- [IndexOutOfBoundsException](../../core/core_package_api/core_package_exceptions.md#class-indexoutofboundsexception) - 当 `index` 无效时，抛出异常。

### operator func \[](Range\<Int64>)

```cangjie
public open operator func [](range: Range<Int64>): Tokens
```

功能：操作符重载，通过 `range` 获取对应 [Tokens](ast_package_classes.md#class-tokens) 切片。

参数：

- range: [Range](../../core/core_package_api/core_package_structs.md#struct-ranget-where-t--countablet--comparablet--equatablet)\<[Int64](../../core/core_package_api/core_package_intrinsics.md#int64)> - 待索引的切片范围。

返回值：

- [Tokens](ast_package_classes.md#class-tokens) - 返回切片索引对应的 [Tokens](ast_package_classes.md#class-tokens)。

异常：

- [IllegalArgumentException](../../core/core_package_api/core_package_exceptions.md#class-illegalargumentexception) - 当 `range.step` 不等于 1 时，抛出异常。
- [IndexOutOfBoundsException](../../core/core_package_api/core_package_exceptions.md#class-indexoutofboundsexception) - 当 range 无效时，抛出异常。

## class TokensIterator

```cangjie
public class TokensIterator <: Iterator<Token> {
    public init(tokens: Tokens)
}
```

功能：实现 [Tokens](ast_package_classes.md#class-tokens) 的迭代器功能。

父类型：

- [Iterator](../../core/core_package_api/core_package_classes.md#class-iteratort)\<[Token](ast_package_structs.md#struct-token)>

### init(Tokens)

```cangjie
public init(tokens: Tokens)
```

功能：构造一个 [TokensIterator](ast_package_classes.md#class-tokensiterator) 对象。

参数：

- tokens: [Tokens](ast_package_classes.md#class-tokens) - 传入 [Tokens](ast_package_classes.md#class-tokens)。

### func iterator()

```cangjie
public func iterator(): Iterator<Token>
```

功能：获取当前迭代器实例。

返回值：

- [Iterator](../../core/core_package_api/core_package_classes.md#class-iteratort)\<[Token](ast_package_structs.md#struct-token)> - 当前迭代器实例。

### func next()

```cangjie
public func next(): Option<Token>
```

功能：获取迭代器中的下一个值。

返回值：

- [Option](../../core/core_package_api/core_package_enums.md#enum-optiont)\<[Token](ast_package_structs.md#struct-token)> - 返回 [Option](../../core/core_package_api/core_package_enums.md#enum-optiont)\<[Token](ast_package_structs.md#struct-token)> 类型，当遍历结束后，返回 None。

### func peek()

```cangjie
public func peek(): Option<Token>
```

功能：获取迭代器中的当前值。

返回值：

- [Option](../../core/core_package_api/core_package_enums.md#enum-optiont)\<[Token](ast_package_structs.md#struct-token)> - 返回 [Option](../../core/core_package_api/core_package_enums.md#enum-optiont)\<[Token](ast_package_structs.md#struct-token)> 类型，当遍历结束后，返回 None。

### func seeing(TokenKind)

```cangjie
public func seeing(kind: TokenKind): Bool
```

功能：判断当前节点的 [Token](ast_package_structs.md#struct-token) 类型是否是传入的类型。

参数：

- kind: [TokenKind](ast_package_enums.md#enum-tokenkind) - 需要判断的 [TokenKind](ast_package_enums.md#enum-tokenkind) 类型。

返回值：

- [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) - 如果当前节点的 [TokenKind](ast_package_enums.md#enum-tokenkind) 与传入类型相同，返回 true，否则返回 false。

## class TrailingClosureExpr

```cangjie
public class TrailingClosureExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示尾随 `Lambda` 节点。

一个 [TrailingClosureExpr](ast_package_classes.md#class-trailingclosureexpr) 节点将 lambda 表达式放在函数调用的尾部，括号外面，如 `f(a){ i => i * i }`。

父类型：

- [Expr](#class-expr)

### prop expr

```cangjie
public mut prop expr: Expr
```

功能：获取或设置 [TrailingClosureExpr](ast_package_classes.md#class-trailingclosureexpr) 中的表达式。

类型：[Expr](ast_package_classes.md#class-expr)

### prop lambdaExpr

```cangjie
public mut prop lambdaExpr: LambdaExpr
```

功能：获取或设置 [TrailingClosureExpr](ast_package_classes.md#class-trailingclosureexpr) 中的尾随 lambda。

类型：[LambdaExpr](ast_package_classes.md#class-lambdaexpr)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [TrailingClosureExpr](ast_package_classes.md#class-trailingclosureexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [TrailingClosureExpr](ast_package_classes.md#class-trailingclosureexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [TrailingClosureExpr](ast_package_classes.md#class-trailingclosureexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [TrailingClosureExpr](ast_package_classes.md#class-trailingclosureexpr) 节点。

## class TryExpr

```cangjie
public class TryExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示 `try` 表达式节点。

`try` 表达式包括三个部分：`try` 块，`catch` 块和 `finally` 块。

父类型：

- [Expr](#class-expr)

### prop catchBlocks

```cangjie
public mut prop catchBlocks: ArrayList<Block>
```

功能：获取或设置 [TryExpr](ast_package_classes.md#class-tryexpr) 中的 Catch 块。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Block](ast_package_classes.md#class-block)>

### prop catchPatterns

```cangjie
public mut prop catchPatterns: ArrayList<Pattern>
```

功能：获取或设置 [TryExpr](ast_package_classes.md#class-tryexpr) 中通过模式匹配的方式匹配待捕获的异常序列。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Pattern](ast_package_classes.md#class-pattern)>

### prop finallyBlock

```cangjie
public mut prop finallyBlock: Block
```

功能：获取或设置 [TryExpr](ast_package_classes.md#class-tryexpr) 中的关键字 `Finally` 块。

类型：[Block](ast_package_classes.md#class-block)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [TryExpr](ast_package_classes.md#class-tryexpr) 节点无 `Finally` 块节点时，抛出异常。

### prop keywordF

```cangjie
public mut prop keywordF: Token
```

功能：获取或设置 [TryExpr](ast_package_classes.md#class-tryexpr) 中的 `finally` 关键字。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `finally` 关键字时，抛出异常。

### prop keywordT

```cangjie
public mut prop keywordT: Token
```

功能：获取或设置 [TryExpr](ast_package_classes.md#class-tryexpr) 中的 `try` 关键字。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `try` 关键字时，抛出异常。

### prop keywordsC

```cangjie
public mut prop keywordsC: Tokens
```

功能：获取或设置 [TryExpr](ast_package_classes.md#class-tryexpr) 中的关键字 `catch`。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `catch` 关键字时，抛出异常。

### prop resourceSpec

```cangjie
public mut prop resourceSpec: ArrayList<VarDecl>
```

功能：获取或设置 [TryExpr](ast_package_classes.md#class-tryexpr) 中 Try-with-resources 类型表达式的实例化对象序列。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[VarDecl](ast_package_classes.md#class-vardecl)>

### prop tryBlock

```cangjie
public mut prop tryBlock: Block
```

功能：获取或设置 [TryExpr](ast_package_classes.md#class-tryexpr) 中由表达式与声明组成的块。

类型：[Block](ast_package_classes.md#class-block)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [TryExpr](ast_package_classes.md#class-tryexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [TryExpr](ast_package_classes.md#class-tryexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [TryExpr](ast_package_classes.md#class-tryexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [TryExpr](ast_package_classes.md#class-tryexpr) 节点时，抛出异常。

## class TupleLiteral

```cangjie
public class TupleLiteral <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示元组字面量节点。

[TupleLiteral](ast_package_classes.md#class-tupleliteral) 节点：使用格式 `(expr1, expr2, ... , exprN)` 表示，每个 `expr` 是一个表达式。

父类型：

- [Expr](#class-expr)

### prop elements

```cangjie
public mut prop elements: ArrayList<Expr>
```

功能：获取或设置 [TupleLiteral](ast_package_classes.md#class-tupleliteral) 中的表达式列表。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Expr](ast_package_classes.md#class-expr)>

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [TupleLiteral](ast_package_classes.md#class-tupleliteral) 中的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [TupleLiteral](ast_package_classes.md#class-tupleliteral) 中的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [TupleLiteral](ast_package_classes.md#class-tupleliteral) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [TupleLiteral](ast_package_classes.md#class-tupleliteral) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [TupleLiteral](ast_package_classes.md#class-tupleliteral) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [TupleLiteral](ast_package_classes.md#class-tupleliteral) 节点时，抛出异常。

## class TuplePattern

```cangjie
public class TuplePattern <: Pattern {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示 Tuple 模式节点。

用于 `tuple` 值的匹配，如 `case ("Bob", age) => 1` 中的 `("Bob", age)`。

父类型：

- [Pattern](#class-pattern)

### prop commas

```cangjie
public mut prop commas: Tokens
```

功能：获取或设置 [TuplePattern](ast_package_classes.md#class-tuplepattern) 节点中的 "," 词法单元序列，可能为空。

类型：[Tokens](ast_package_classes.md#class-tokens)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Tokens](ast_package_classes.md#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [TuplePattern](ast_package_classes.md#class-tuplepattern) 节点中的 "(" 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop patterns

```cangjie
public mut prop patterns: ArrayList<Pattern>
```

功能：获取或设置 [TuplePattern](ast_package_classes.md#class-tuplepattern) 节点中的一组 [Pattern](ast_package_classes.md#class-pattern) 节点。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Pattern](ast_package_classes.md#class-pattern)>

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [TuplePattern](ast_package_classes.md#class-tuplepattern) 节点中的 ")" 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [TuplePattern](ast_package_classes.md#class-tuplepattern) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [TuplePattern](ast_package_classes.md#class-tuplepattern) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [TuplePattern](ast_package_classes.md#class-tuplepattern) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [TuplePattern](ast_package_classes.md#class-tuplepattern) 节点时，抛出异常。

## class TupleType

```cangjie
public class TupleType <: TypeNode {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示元组类型节点。

例如 `var a : (Int64, Int32)` 中的 `(Int64, Int32)`。

父类型：

- [TypeNode](#class-typenode)

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [TupleType](ast_package_classes.md#class-tupletype) 节点中的 "(" 词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [TupleType](ast_package_classes.md#class-tupletype) 节点中的 ")" 词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### prop types

```cangjie
public mut prop types: ArrayList<TypeNode>
```

功能：获取或设置 [TupleType](ast_package_classes.md#class-tupletype) 节点中的类型节点列表。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[TypeNode](ast_package_classes.md#class-typenode)>

### init()

```cangjie
public init()
```

功能：构造一个默认的 [TupleType](ast_package_classes.md#class-tupletype) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [TupleType](ast_package_classes.md#class-tupletype) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [TupleType](ast_package_classes.md#class-tupletype) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [TupleType](ast_package_classes.md#class-tupletype) 节点时，抛出异常。

## class TypeAliasDecl

```cangjie
public class TypeAliasDecl <: Decl {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示类型别名节点。

一个 [TypeAliasDecl](ast_package_classes.md#class-typealiasdecl) 节点： `type Point2D = Float64`。

> **说明：**
>
> 该节点中 `type` 作为关键字，紧跟任意的合法标识符，其后的 `type` 是任意的 top-level 可见的类型，标识符和 `type` 之间使用 `=` 进行连接。

父类型：

- [Decl](#class-decl)

### prop aliasType

```cangjie
public mut prop aliasType: TypeNode
```

功能：获取或设置将要别名的类型。

类型：[TypeNode](ast_package_classes.md#class-typenode)

### prop assign

```cangjie
public mut prop assign: Token
```

功能：获取或设置标识符和 `type` 之间的 `=`。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `=` 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [TypeAliasDecl](ast_package_classes.md#class-typealiasdecl) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [TypeAliasDecl](ast_package_classes.md#class-typealiasdecl) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [TypeAliasDecl](ast_package_classes.md#class-typealiasdecl) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [TypeAliasDecl](ast_package_classes.md#class-typealiasdecl) 节点时，抛出异常。

## class TypeConvExpr

```cangjie
public class TypeConvExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示类型转换表达式。

用于实现若干数值类型间的转换。一个 [TypeConvExpr](ast_package_classes.md#class-typeconvexpr) 节点：`Int8(32)`。

父类型：

- [Expr](#class-expr)

### prop expr

```cangjie
public mut prop expr: Expr
```

功能：获取或设置 [TypeConvExpr](ast_package_classes.md#class-typeconvexpr) 中进行类型转化的原始表达式。

类型：[Expr](ast_package_classes.md#class-expr)

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [TypeConvExpr](ast_package_classes.md#class-typeconvexpr) 中的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [TypeConvExpr](ast_package_classes.md#class-typeconvexpr) 中的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### prop targetType

```cangjie
public mut prop targetType: PrimitiveType
```

功能：获取或设置 [TypeConvExpr](ast_package_classes.md#class-typeconvexpr) 中将要转换到的目标类型。

类型：[PrimitiveType](ast_package_classes.md#class-primitivetype)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [TypeConvExpr](ast_package_classes.md#class-typeconvexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [TypeConvExpr](ast_package_classes.md#class-typeconvexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [TypeConvExpr](ast_package_classes.md#class-typeconvexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [TypeConvExpr](ast_package_classes.md#class-typeconvexpr) 节点时，抛出异常。

## class TypeNode

```cangjie
public open class TypeNode <: Node
```

功能：所有类型节点的父类，继承自 [Node](ast_package_classes.md#class-node)。

父类型：

- [Node](#class-node)

### prop typeParameterName

```cangjie
public mut prop typeParameterName: Token
```

功能：获取或设置类型节点的参数，如：`(p1:Int64, p2:Int64)` 中的 `p1` 和 `p2`，可能为 [ILLEGAL](ast_package_enums.md#illegal) 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

### prop colon

```cangjie
public mut prop colon: Token
```

功能：获取或设置 [TypeNode](ast_package_classes.md#class-typenode) 节点中的操作符 ":"，可能为 [ILLEGAL](ast_package_enums.md#illegal) 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ":" 操作符时，抛出异常。

## class TypePattern

```cangjie
public class TypePattern <: Pattern {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示类型模式节点。

用于判断一个值的运行时类型是否是某个类型的子类型，如 `case b: Base => 0` 中的 `b: Base`。

父类型：

- [Pattern](#class-pattern)

### prop colon

```cangjie
public mut prop colon: Token
```

功能：获取或设置 [TypePattern](ast_package_classes.md#class-typepattern) 节点中的 ":" 操作符的词法单元节点。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ":" 操作符时，抛出异常。

### prop pattern

```cangjie
public mut prop pattern: Pattern
```

功能：获取或设置 [TypePattern](ast_package_classes.md#class-typepattern) 节点中的模式节点。

类型：[Pattern](ast_package_classes.md#class-pattern)

### prop patternType

```cangjie
public mut prop patternType: TypeNode
```

功能：获取或设置 [TypePattern](ast_package_classes.md#class-typepattern) 节点中的待匹配的模式类型节点。

类型：[TypeNode](ast_package_classes.md#class-typenode)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [TypePattern](ast_package_classes.md#class-typepattern) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [TypePattern](ast_package_classes.md#class-typepattern) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [TypePattern](ast_package_classes.md#class-typepattern) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [TypePattern](ast_package_classes.md#class-typepattern) 节点时，抛出异常。

## class UnaryExpr

```cangjie
public class UnaryExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示一个一元操作表达式节点。

父类型：

- [Expr](#class-expr)

### prop expr

```cangjie
public mut prop expr: Expr
```

功能：获取或设置 [UnaryExpr](ast_package_classes.md#class-unaryexpr) 节点中的操作数。

类型：[Expr](ast_package_classes.md#class-expr)

### prop op

```cangjie
public mut prop op: Token
```

功能：获取或设置 [UnaryExpr](ast_package_classes.md#class-unaryexpr) 节点中的一元操作符。

类型：[Token](ast_package_structs.md#struct-token)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [UnaryExpr](ast_package_classes.md#class-unaryexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [UnaryExpr](ast_package_classes.md#class-unaryexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [UnaryExpr](ast_package_classes.md#class-unaryexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [UnaryExpr](ast_package_classes.md#class-unaryexpr) 节点时，抛出异常。

## class VArrayExpr

```cangjie
public class VArrayExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示 `VArray` 的实例节点。

一个 [VArrayExpr](ast_package_classes.md#class-varrayexpr) 节点：`let arr: VArray<Int64, $5> = VArray<Int64, $5>({ i => i })` 中的 `VArray<Int64, $5>({ i => i })`。

父类型：

- [Expr](#class-expr)

### prop arguments

```cangjie
public mut prop arguments: ArrayList<Argument>
```

功能：获取或设置 [VArrayExpr](ast_package_classes.md#class-varrayexpr) 中的中的初始化参数序列。

类型：[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<[Argument](ast_package_classes.md#class-argument)>

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [VArrayExpr](ast_package_classes.md#class-varrayexpr) 中的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [VArrayExpr](ast_package_classes.md#class-varrayexpr) 中的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### prop vArrayType

```cangjie
public mut prop vArrayType: VArrayType
```

功能：获取或设置 [VArrayExpr](ast_package_classes.md#class-varrayexpr) 的 VArray 类型节点。

类型：[VArrayType](ast_package_classes.md#class-varraytype)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [VArrayExpr](ast_package_classes.md#class-varrayexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [VArrayExpr](ast_package_classes.md#class-varrayexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [VArrayExpr](ast_package_classes.md#class-varrayexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [VArrayExpr](ast_package_classes.md#class-varrayexpr) 节点时，抛出异常。

## class VArrayType

```cangjie
public class VArrayType <: TypeNode {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示 `VArray` 类型节点。

使用泛型 `VArray<T, size: Int64>` 表示 `VArray` 类型。

父类型：

- [TypeNode](#class-typenode)

### prop dollar

```cangjie
public mut prop dollar: Token
```

功能：获取或设置 [VArrayType](ast_package_classes.md#class-varraytype) 节点中的操作符 `$` 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `$` 词法单元时，抛出异常。

### prop elementTy

```cangjie
public mut prop elementTy: TypeNode
```

功能：获取或设置 [VArrayType](ast_package_classes.md#class-varraytype) 节点中的类型变元节点，如 `VArray<Int16, $0>` 中的 [Int16](../../core/core_package_api/core_package_intrinsics.md#int16)。

类型：[TypeNode](ast_package_classes.md#class-typenode)

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置 [VArrayType](ast_package_classes.md#class-varraytype) 节点的关键字 `VArray` 的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

### prop lAngle

```cangjie
public mut prop lAngle: Token
```

功能：获取或设置 [VArrayType](ast_package_classes.md#class-varraytype) 节点左尖括号的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是左尖括号时，抛出异常。

### prop rAngle

```cangjie
public mut prop rAngle: Token
```

功能：获取或设置 [VArrayType](ast_package_classes.md#class-varraytype) 节点右尖括号的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是右尖括号时，抛出异常。

### prop size

```cangjie
public mut prop size: Token
```

功能：获取或设置 [VArrayType](ast_package_classes.md#class-varraytype) 节点中类型长度的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [VArrayType](ast_package_classes.md#class-varraytype) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [VArrayType](ast_package_classes.md#class-varraytype) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [VArrayType](ast_package_classes.md#class-varraytype) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [VArrayType](ast_package_classes.md#class-varraytype) 节点时，抛出异常。

## class VarDecl

```cangjie
public class VarDecl <: Decl {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示变量定义节点。

一个 [VarDecl](ast_package_classes.md#class-vardecl) 节点: `var a: String`，`var b: Int64 = 1`。

> **说明：**
>
> 变量的定义主要包括如下几个部分：修饰符、关键字、patternsMaybeIrrefutable、变量类型和变量初始值。

父类型：

- [Decl](#class-decl)

### prop assign

```cangjie
public mut prop assign: Token
```

功能：获取或设置 [VarDecl](ast_package_classes.md#class-vardecl) 节点中的赋值操作符的位置信息。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是赋值操作符时，抛出异常。

### prop colon

```cangjie
public mut prop colon: Token
```

功能：获取或设置 [VarDecl](ast_package_classes.md#class-vardecl) 节点中的冒号位置信息。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是冒号时，抛出异常。

### prop declType

```cangjie
public mut prop declType: TypeNode
```

功能：获取或设置 [VarDecl](ast_package_classes.md#class-vardecl) 节点的变量类型。

类型：[TypeNode](ast_package_classes.md#class-typenode)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [VarDecl](ast_package_classes.md#class-vardecl) 节点没有声明变量类型时，抛出异常。

### prop expr

```cangjie
public mut prop expr: Expr
```

功能：获取或设置 [VarDecl](ast_package_classes.md#class-vardecl) 节点的变量初始化节点。

类型：[Expr](ast_package_classes.md#class-expr)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [VarDecl](ast_package_classes.md#class-vardecl) 节点没有对变量进行初始化时，抛出异常。

### prop pattern

```cangjie
public mut prop pattern: Pattern
```

功能：获取或设置 [VarDecl](ast_package_classes.md#class-vardecl) 节点的 pattern 节点。

类型：[Pattern](ast_package_classes.md#class-pattern)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当 [VarDecl](ast_package_classes.md#class-vardecl) 节点没有声明 pattern 节点时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [VarDecl](ast_package_classes.md#class-vardecl) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [VarDecl](ast_package_classes.md#class-vardecl) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [VarDecl](ast_package_classes.md#class-vardecl) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [VarDecl](ast_package_classes.md#class-vardecl) 节点时，抛出异常。

### func isConst()

```cangjie
public func isConst(): Bool
```

功能：判断是否是一个 `Const` 类型的节点。

返回值：

- [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) - 是一个 `Const` 类型的节点返回 true；反之，返回 false。

## class VarOrEnumPattern

```cangjie
public class VarOrEnumPattern <: Pattern {
    public init()
    public init(identifier: Token)
}
```

功能：表示当模式的标识符为 `Enum` 构造器时的节点。

例如 `case RED` 中的 `RED` 为 `Enum` 构造器。

父类型：

- [Pattern](#class-pattern)

### prop identifier

```cangjie
public mut prop identifier: Token
```

功能：获取或设置 [VarOrEnumPattern](ast_package_classes.md#class-varorenumpattern) 节点中的标识符的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [VarOrEnumPattern](ast_package_classes.md#class-varorenumpattern) 对象。

### init(Tokens)

```cangjie
public init(identifier: Token)
```

功能：构造一个 [VarOrEnumPattern](ast_package_classes.md#class-varorenumpattern) 对象。

参数：

- identifier: [Token](ast_package_structs.md#struct-token) - 将要构造 [VarOrEnumPattern](ast_package_classes.md#class-varorenumpattern) 类型的词法单元。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [VarOrEnumPattern](ast_package_classes.md#class-varorenumpattern) 节点时，抛出异常。

## class VarPattern

```cangjie
public class VarPattern <: Pattern {
    public init()
    public init(identifier: Token)
}
```

功能：表示绑定模式节点。

使用一个合法的标识符表示，如 `for (i in 1..10)` 中的 `i`。

父类型：

- [Pattern](#class-pattern)

### prop identifier

```cangjie
public mut prop identifier: Token
```

功能：获取或设置 [VarPattern](ast_package_classes.md#class-varpattern) 节点中的标识符符的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

### init()

```cangjie
public init()
```

功能：构造一个默认的 [VarPattern](ast_package_classes.md#class-varpattern) 对象。

### init(Tokens)

```cangjie
public init(identifier: Token)
```

功能：构造一个 [VarPattern](ast_package_classes.md#class-varpattern) 对象。

参数：

- identifier: [Token](ast_package_structs.md#struct-token) - 将要构造 [VarPattern](ast_package_classes.md#class-varpattern) 类型的词法单元。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [VarPattern](ast_package_classes.md#class-varpattern) 节点时，抛出异常。

## class Visitor

```cangjie
public abstract class Visitor
```

功能：一个抽象类，其内部默认定义了访问不同类型 AST 节点访问（`visit`）函数。

> **说明：**
>
> - `visit` 函数搭配 `traverse` 一起使用，可实现对节点的访问和修改, 所有 `visit` 函数都有默认为空的实现，可以按需实现需要的 `visit` 方法。
> - 该类需要被继承使用，并允许子类重新定义访问函数。

### func breakTraverse()

```cangjie
public func breakTraverse(): Unit
```

功能：用于重写 `visit` 函数中，通过调用该函数来终止继续遍历子节点的行为。

## class WhileExpr

```cangjie
public class WhileExpr <: Expr {
    public init()
    public init(inputs: Tokens)
}
```

功能：表示 `while` 表达式。

`while` 是关键字，`while` 之后是一个小括号，小括号内可以是一个表达式或者一个 `let` 声明的解构匹配，接着是一个 [Block](ast_package_classes.md#class-block) 节点。

父类型：

- [Expr](#class-expr)

### prop block

```cangjie
public mut prop block: Block
```

功能：获取或设置 [WhileExpr](ast_package_classes.md#class-whileexpr) 中的块节点。

类型：[Block](ast_package_classes.md#class-block)

### prop condition

```cangjie
public mut prop condition: Expr
```

功能：获取或设置关键字 [WhileExpr](ast_package_classes.md#class-whileexpr) 中的条件表达式。

类型：[Expr](ast_package_classes.md#class-expr)

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取或设置 [WhileExpr](ast_package_classes.md#class-whileexpr) 节点中 `while` 关键字。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 `while` 关键字时，抛出异常。

### prop lParen

```cangjie
public mut prop lParen: Token
```

功能：获取或设置 [WhileExpr](ast_package_classes.md#class-whileexpr) 中 `while` 关键字之后的 "("。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "(" 时，抛出异常。

### prop rParen

```cangjie
public mut prop rParen: Token
```

功能：获取或设置 [WhileExpr](ast_package_classes.md#class-whileexpr) 中 `while` 关键字之后的 ")"。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 ")" 时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [WhileExpr](ast_package_classes.md#class-whileexpr) 对象。

### init(Tokens)

```cangjie
public init(inputs: Tokens)
```

功能：构造一个 [WhileExpr](ast_package_classes.md#class-whileexpr) 对象。

参数：

- inputs: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [WhileExpr](ast_package_classes.md#class-whileexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [WhileExpr](ast_package_classes.md#class-whileexpr) 节点时，抛出异常。

## class WildcardExpr

```cangjie
public class WildcardExpr <: Expr {
    public init()
    public init(keyword: Tokens)
}
```

功能：表示通配符表达式节点。

父类型：

- [Expr](#class-expr)

### prop keyword

```cangjie
public mut prop keyword: Token
```

功能：获取 [WildcardExpr](ast_package_classes.md#class-wildcardexpr) 的 "_" 关键字。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "_" 关键字时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [WildcardExpr](ast_package_classes.md#class-wildcardexpr) 对象。

### init(Tokens)

```cangjie
public init(keyword: Tokens)
```

功能：构造一个 [WildcardExpr](ast_package_classes.md#class-wildcardexpr) 对象。

参数：

- keyword: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [WildcardExpr](ast_package_classes.md#class-wildcardexpr) 类型的词法单元集合 ([Tokens](ast_package_classes.md#class-tokens))。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [WildcardExpr](ast_package_classes.md#class-wildcardexpr) 节点时，抛出异常。

## class WildcardPattern

```cangjie
public class WildcardPattern <: Pattern {
    public init()
    public init(keyword: Tokens)
}
```

功能：表示通配符模式节点。

使用下划线 "_" 表示，可以匹配任意值。

父类型：

- [Pattern](#class-pattern)

### prop wildcard

```cangjie
public mut prop wildcard: Token
```

功能：获取或设置 [WildcardPattern](ast_package_classes.md#class-wildcardpattern) 节点中的 "_" 操作符的词法单元。

类型：[Token](ast_package_structs.md#struct-token)

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当设置的 [Token](ast_package_structs.md#struct-token) 不是 "_" 操作符时，抛出异常。

### init()

```cangjie
public init()
```

功能：构造一个默认的 [WildcardPattern](ast_package_classes.md#class-wildcardpattern) 对象。

### init(Tokens)

```cangjie
public init(keyword: Tokens)
```

功能：构造一个 [WildcardPattern](ast_package_classes.md#class-wildcardpattern) 对象。

参数：

- keyword: [Tokens](ast_package_classes.md#class-tokens) - 将要构造 [WildcardPattern](ast_package_classes.md#class-wildcardpattern) 类型的词法单元集合（[Tokens](ast_package_classes.md#class-tokens)）。

异常：

- [ASTException](ast_package_exceptions.md#class-astexception) - 当输入的 [Tokens](ast_package_classes.md#class-tokens) 类型无法构造为 [WildcardPattern](ast_package_classes.md#class-wildcardpattern) 节点时，抛出异常。


*... and 237 more files in docs/stdlib/*


## Tools Guide

<details>
<summary>Click to expand file list</summary>

- `Chapter_00_Cover.md`
- `IDE/command-line_tools_integration_community.md`
- `IDE/compilation_and_building_community.md`
- `IDE/create_cj_project_community.md`
- `IDE/debug_service_community.md`
- `IDE/ide_plug-in_overview_community.md`
- `IDE/install_community.md`
- `IDE/language_service_community.md`
- `tools/cjcov_manual_cjnative.md`
- `tools/cjdb_manual_cjnative.md`
- `tools/cjfmt_manual.md`
- `tools/cjlint_manual.md`
- `tools/cjpm_manual_cjnative_community.md`
- `tools/cjprof_manual_cjnative.md`
- `tools/cjtrace_recover_manual_cjnative.md`
- `tools/user_manual_cjnative.md`

</details>

### Chapter_00_Cover.md

<div>
 <div style='height:900px;width:90%'>
     <div style='border-top:1px solid'></div>
     <div style="margin-top:10%;font-size:28px;width:100%;height:80%;font-weight:600;letter-spacing:2px;text-align:center">
         <span style=''>仓颉语言工具链用户手册</span>
         <div style="margin-top:10%;font-size:20px;">版本号：0.36.5</div>
         <div style="margin-top:3%;font-size:20px;">发布时间：2023-01-06</div>
     </div>
     <div style="font-size:16px;font-weight:600;letter-spacing:2px;text-align:center">
         <span style=''>华为技术有限公司</span>
     </div>
</div>


### IDE/command-line_tools_integration_community.md

# 命令行工具集成

> **说明：**
>
> 本文档部分图片截取于 VSCode 软件界面，仅用于说明仓颉插件在 VSCode 中的使用方法。

## 格式化

针对仓颉文件，在 VSCode 的代码编辑区右键选择 [Cangjie] Format 或用快捷键 Ctrl + Alt + F 执行格式化命令，可以对当前仓颉文件进行格式化。如下图所示。

![cjfmt](./figures/cjfmt.png)

针对仓颉项目，支持在 VSCode 的资源管理器中选择文件或右键单击文件夹执行 [Cangjie] Format 命令，对选择的文件或者文件夹进行格式化。如下图所示。

![cjfmtFolder](./figures/cjfmtFolder.png)

## 静态检查

IDE 中的静态检查功能基于静态检查工具 cjlint，该功能可以识别代码中不符合编程规范的问题，帮助开发者发现代码中的漏洞，写出满足 Clean Source 要求的仓颉代码。

> **说明：**
>
> 静态检查目前只能检测工程目录 src 文件夹下的所有仓颉文件。

静态检查的入口有两处:

- 在 VSCode 的代码编辑区右键选择 [Cangjie] CodeCheck 或用快捷键 Ctrl + Alt + C 执行静态检查命令，如下图所示。

    ![cjlint](./figures/cjlint.png)

- 在 VSCode 的资源管理器处右键选择 [Cangjie] CodeCheck 执行静态检查命令，如下图所示。

    ![cjlintFolder](./figures/cjlintFolder.png)

执行静态检查命令后，如果有不符合编码规范的问题，会展示在右侧的表格中。单击表格中的文件链接，可以跳转到问题代码所在文件的行列。

![cjlintResult](./figures/cjlintResult.png)

当前支持代码保存后自动触发静态检查：

开发者可以通过点击左下角齿轮图标，选择设置选项，在搜索栏输入 cangjie，找到 Code Check On Save 选项，勾选该选项，即可开启自动触发静态检查。如下图：

![codeCheckOnSave](./figures/codeCheckOnSave.png)

开启自动静态检查后会在项目根目录生成一个 cjlintignore.cfg 配置文件，配置文件中可支持三类屏蔽方式，包括屏蔽文件、文件夹和正则表达式。每条配置项为相对该配置文件所在目录的相对路径（支持正则），无需双引号包含，自动静态检查支持将配置项匹配的仓颉文件屏蔽，不会产生关于这些文件的告警。例如在 cjlintignore.cfg 中有以下配置，则自动静态检查会将 src/subdir1/ 目录和 src/subdir2/a.cj 文件加入屏蔽。

![codeCheckIgnoreConfig](./figures/codeCheckIgnoreConfig.png)

## 覆盖率统计

覆盖率统计功能用于生成仓颉语言程序的覆盖率报告。

> **注意：**
>
> 当选择的文件夹中不含有仓颉文件时，将不会生成覆盖率报告。

覆盖率统计的入口有两处:

- 在 VSCode 的代码编辑区右键选择 [Cangjie] Coverage 或用快捷键 Ctrl + Alt + G 执行生成当前仓颉文件覆盖率报告的命令，如下图所示。

    ![cjcov](./figures/cjcov.png)

- 在 VSCode 的资源管理器中选择文件或右键单击文件夹执行 [Cangjie] Coverage 命令，对选择的文件或者文件夹生成覆盖率报告，如下图所示。

    ![cjcovFolder](./figures/cjcovFolder.png)

在生成的覆盖率报告页面，可以单击文件名查看覆盖率详情。


### IDE/compilation_and_building_community.md

# 编译构建

> **说明：**
>
> 本文档部分图片截取于 VSCode 软件界面，仅用于说明仓颉插件在 VSCode 中的使用方法。

VSCode 中可视化方式提供的仓颉功能编译构建能力依赖 cjpm 工具，该工具要求打开的仓颉工程的模块内必须包含规范的 `cjpm.toml` 文件。若没有该文件，仍想执行工程的编译构建，可在终端使用 cjc 命令。

在 VSCode 中提供在命令面板执行命令、在终端进行执行命令、单击运行按钮运行工程，以及单击锤子按钮编译工程四种方式，来实现仓颉工程的编译构建。

## 编译构建方式

### 在命令面板执行命令

在 VSCode 中使用快捷键 F1，或同时按下 Ctrl + Shift + P（macOS 系统为 Command + Shift + P）打开命令面板，输入分类词 Cangjie 来快速找到以下编译相关命令。

- 选择 `Cangjie: Parallelled Build` 选项执行并行编译。

    ![paralleledBuild](./figures/paralleledBuild.png)

    执行并行编译后，在工程文件夹下会生成 `target` 目录，`target` 目录下有一个 `release` 文件夹，`release` 文件夹下包含三个目录：`.build-logs` 目录、`bin` 目录，以及工程名同名的目录。`bin` 目录下存放可执行文件（可执行文件只有在 `cjpm.toml` 的 `output-type` 为 `executable` 时才会生成），工程名同名目录下存放编译的中间产物。

    在 output Panel 上会打印编译是否成功的信息。

- 选择 `Cangjie: Build With Verbose` 选项执行编译并展示编译日志。

    ![verbose](./figures/verbose.png)

    该编译参数除了执行编译外，还会打印编译日志。

- 选择 `Cangjie: Build With Debug` 选项生成 debug 版本的目标文件。

    该命令的编译结果中带有 debug 信息，供调试使用。

- 选择 `Cangjie: Build With Coverage` 选项生成覆盖率信息。

    该命令在编译结果中带有覆盖率信息。

- 选择 `Cangjie: Build With Alias` 执行编译并指定输出可执行文件的名称。

    ![alias](./figures/alias.png)

    执行该命令，按下回车键后，会弹出一个输入栏，需要开发者为工程的编译结果赋予一个新的名字。该命令只对 `cjpm.toml` 的 `output-type` 为 `executable` 时有效。

- 选择 `Cangjie: Build With Increment` 选项执行增量编译。

    用来指定增量编译。

- 选择 `Cangjie: Build With CustomizedOption` 选项按条件透传 `cjpm.toml` 中的命令。

    ![cndOption](./figures/cndOption.png)

    使用该选项需要先在 `cjpm.toml` 中配置 `customized-option` 字段。然后在命令面板输入 `Build With CustomizedOption`，按下回车键后可以选择需要的参数，参数可以多选，选择后按下回车键即可。

    ![chooseOption](./figures/chooseOption.png)

    若没有在 `cjpm.toml` 中配置 `customized-option` 字段，并执行了该条命令，插件会提示开发者先配置改字段。

- 选择 `Cangjie: Build With TargetDir` 选项执行编译并在指定路径生成编译产物。

    选择该命令执行后，可指定编译产物的输出路径，默认不作输入操作则以 `cjpm.toml` 中的 `target-dir` 字段为路径。

    ![setOutputDir](./figures/setOutputDir.png)

    当输入的编译产物路径与 cjpm.toml 中的 `target-dir` 字段不同时，会弹出提示是否覆盖 cjpm.toml 中的 `target-dir` 字段。若选择 Yes 覆盖，则会将 cjpm.toml 中 `target-dir` 字段覆盖成输入的值。

    ![isChangeOutput](./figures/isChangeOutput.png)

    该命令执行成功后，会在指定的路径下生成编译产物。

- 选择 `Cangjie: Build With Jobs` 选项，执行编译前自定义最大并发度。

  支持通过执行该命令在编译之前自定义最大并发度，输入参数为任意数字，设置范围为 (0, CPU 核数 * 2]。

  当在输入框输入非数字时，会终止操作，并提示开发者输入数字内容：“Invaild input! The input should be number.”

  当在输入框输入的范围超出所支持的范围 (0, CPU 核数 * 2] 时，会默认采用 CPU 核数，并提示超出可选范围的告警信息。

- 选择 `Cangjie: Build With CodeCheck` 选项，执行编译时进行 CodeCheck 静态代码检查。

    执行该命令编译工程时，会对当前工程进行 CodeCheck 静态代码检查，如果检查到【要求】级别的代码规范违规，则编译失败，检查到【建议】级别的违规仅告警，正常完成编译。

- 选择 `Cangjie: Build With MultiParameter` 选项执行多参数编译。

    仓颉工程的编译可以叠加多个参数，在命令面板搜索到 `Build With MultiParameter` 命令后，选择需要叠加的参数，其中 `--target` 参数会根据 `cjpm.toml` 中的 `target` 字段的设置来决定是否显示。如果开发者没有配置 `target` 的内容，则 `--target` 参数选项会隐藏；`--<customized-option>` 参数会根据 cjpm.toml 中的 `customized-option` 字段的设置来决定是否显示，如果开发者没有配置 `customized-option` 的内容，则 `--<customized-option>` 参数选项会隐藏。

    ![multi](./figures/multiBuild.png)

    勾选想叠加的参数，按下回车键或者单击 ok 按钮。也可单击界面中的向左箭头，重新选择编译参数。

    如果叠加的参数中选择了 `cjpm build --output=<name>`，那么需要输入一个别名字符串，然后按下回车键执行叠加命令操作。

    ![aliasString](./figures/aliasString.png)

    如果叠加参数中选择了 `cjpm build --target=<name>`，那么可以选择一个想要交叉编译的平台。

    如果叠加参数中选择了 `cjpm build --<customized-option>`，那么可以选择透传参数。

    ![addOption](./figures/addOption.png)

    叠加命令的编译结果就是这些命令分别执行的总和。

- 选择 `Cangjie: Update Cjpm.toml` 选项更新 cjpm.lock 文件。

    在修改完 `cjpm.toml` 文件后，需要执行该命令，更新 `cjpm.lock` 文件。如果是通过 UI 界面修改的 `cjpm.toml` 文件，则不需要手动执行该操作。

- 选择 `Cangjie: Execute Test File` 选项编译单元测试产物，执行对应的单元测试用例，并直接打印测试结果。

- 选择 `Cangjie: Test With NoRun` 选项编译对应测试产物。

- 选择 `Cangjie: Test With SkipBuild` 选项测试产物存在的前提下，用于执行对应测试产物。

- 选择 `Cangjie: Test With Jobs` 选项执行单元测试之前自定义最大并发度，操作与 `Build With Jobs` 相同。

- 选择 `Cangjie: Test With MultiParameter` 选项执行多参数执行仓颉工程的单元测试。

    在选择该条命令后，可以选择指定包路径、模块或者成员执行单元测试。只有打开工作空间，才显示成员选择选项。

    ![testMultiOptions](./figures/testMultiOptions.png)

    如果选择 `Specify the test paths` 选项，则可以输入指定待测试的包路径。若不需要指定，则直接按 Enter 键。

    ![testPath](./figures/testPath.png)

    此步骤可通过输入多个包的路径并用空格分隔，可以实现多包并发单元测试。

    ![testPathMultiPath](./figures/testPathMultiPath.png)

    如果选择 `Specify the test modules` 选项，则可以输入指定待测试的模块。若不需要指定，则直接按 Enter 键。

    ![testModule](./figures/testModule.png)

    此步骤可通过输入多个模块并用空格分隔，可以实现多模块单元测试。

    ![testModuleMultiModule](./figures/testModuleMultiModule.png)

    如果选择 `Specify a test member` 选项，则可以输入指定待测试的成员。若不需要指定，则直接按 Enter 键。

    ![testMember](./figures/testMember.png)

    选择要叠加的参数。

    ![testParams](./figures/testParams.png)

    如果选择了 `--filter=<value>` 参数，则需要输入对应的过滤测试子集的表达式。

    ![testReg](./figures/testReg.png)

    输入过滤测试子集的表达式后，可以执行 `cjpm test` 的完整命令。执行结果会在 Output 面板输出。

    如果在 cjpm.toml 中配置了 `target` 和 `customized-option`，则可以选择的参数有 `--target=<name>` 和 `--<customized-option>`。

    ![testParamsPlus](./figures/testParamsPlus.png)

    如果选择了 `--target=<name>` 参数，则需要选择对应的平台。

    ![crossCompileTarget](./figures/crossCompileTarget.png)

    如果选择了 `--<customized-option>` 参数，则需要选择条件选项。

    ![condition](./figures/condition.png)

- 选择 `Cangjie: Clean Build Result` 选项清除编译结果（工程目录下的 build 目录）。

- 选择 `Cangjie: Check Circular Dependencies` 选项检测文件依赖。

- 选择 `Cangjie: Edit Configuration (UI)` 选项打开 UI 配置界面。

- 选择 `Cangjie: Install With Verbose` 选项展示安装日志。

- 选择 `Cangjie: Install With Debug` 选项生成 debug 版本的安装产物。

- 选择 `Cangjie: Install With RootPath` 选项指定可执行文件的安装路径。

    在选择该条命令后，在弹出的输入框中输入期望可执行文件的安装路径，最终会将可执行文件安装到输入的自定义路径中。不配置时，Linux 系统和 macOS 系统下默认为 `$HOME/.cjpm`，Windows 系统下默认为 `%USERPROFILE%/.cjpm`。

    ![installWithRoot](./figures/installWithRoot.png)

- 选择 `Cangjie: Install With TargetDir` 选项指定编译产物的存放路径。

    安装可执行文件前会先进行编译，选择该条命令后，在弹出的输入框中输入期望编译产物的存放路径，最终会将编译产物安装到输入的自定义路径中。

    ![InstallWithTarget](./figures/InstallWithTarget.png)

- 选择 `Cangjie: Install With Alias` 选项指定最终安装的产物名。

    选择该条命令后，在弹出的输入框中输入期望安装产物的名字。

    ![installWithAlias](./figures/installWithAlias.png)

- 选择 `Cangjie: Install With Git` 选项安装远端 git 代码仓产物。

    选择该条命令后，在弹出的输入框中输入远端 git url。

    ![installWithGit](./figures/installWithGit.png)

    输入远端 git url 后，键入回车可进一步选择关于远端 git 代码仓的分支、tag 或 commit 信息。

    ![installWithGitDetail](./figures/installWithGitDetail.png)

    选择自定义代码仓 branch / tag / commit 号选项，在弹出框内输入 branch / tag / commit 号信息，即可安装远端 git 代码仓产物。

- 选择 `Cangjie: Install With List` 选项打印已安装产物列表。

- 选择 `Cangjie: Install With SkipBuild` 选项跳过编译阶段以直接安装产物，需要项目处于编译完成状态。

- 选择 `Cangjie: Install With Jobs` 选项指定并行编译的最大并发数。

    选择该条命令后，在弹出的输入框中输入期望安装时的最大并发数。

    ![installWithJobs](./figures/installWithJobs.png)

- 选择 `Cangjie: Install With CustomizedOption` 选项按条件透传 `cjpm.toml` 中的命令。

    ![cndOptionInstall](./figures/cndOptionInstall.png)

    使用该选项需要先在 `cjpm.toml` 中配置 `customized-option` 字段。然后在命令面板选择 `Install With CustomizedOption`，按下回车键后可以选择需要的参数，参数可多选，选择后按下回车键即可。

    ![chooseOptionInstall](./figures/chooseOptionInstall.png)

    开发者需要在 `cjpm.toml` 中配置 `customized-option` 字段，才能执行该条命令。

- 选择 `Cangjie: Install With SkipScript` 选项跳过待安装模块的构建脚本的编译运行。

- 选择 `Cangjie: Install With CustomParameter` 选项执行自定义的安装命令参数选项。

    单击 VSCode 页面左下角齿轮图标，选择设置选项。或直接右键单击插件，选择 Extension Settings，进入配置页面。在搜索栏输入 Cangjie，选择侧边栏的 Cangjie Language Support 选项。该页面有输入框 `Cangjie: Cjpm Install: Custom`，在此输入 `cjpm install` 相关的命令选项，如 `-V -g --name \<value\>`。然后在命令面板选择 `Install With CustomParameter` 命令，最终将该输入框中的内容带到 `cjpm install` 中。

    ![customInstallParm](./figures/customInstallParm.png)

- 选择 `Cangjie: Uninstall Binary` 选项卸载仓颉项目，清除对应的可执行文件和依赖文件。

    选择该命令后，在弹出的输入框中输入需要卸载的可执行文件名字。

    ![UninstallBinary](./figures/UninstallBinary.png)

- 选择 `Cangjie: Uninstall With Root` 选项指定卸载时搜索的目标路径。

    选择该命令后，在弹出的输入框中输入期望卸载时搜索的目标路径，最终会将该路径下的指定可执行文件和依赖文件卸载。不配置时，Linux 系统和 macOS 系统下默认为 $HOME/.cjpm，在 Windows 系统下默认为 `%USERPROFILE%/.cjpm`。

    ![unstallWithRoot](./figures/unstallWithRoot.png)

### 在终端进行执行命令

开发者可以直接在 VSCode 的终端面板使用编译构建命令（cjpm）对仓颉工程进行编译构建。初次使用需要重新启动 VSCode，即可在终端执行 cjpm 操作。

![cjpm](./figures/cpm.png)

### 单击运行按钮运行工程

开发者可以单击 .cj 文件编辑区的运行按钮来运行整个仓颉工程。

![runCode](./figures/runCode.png)

若整个工程中配置的 `output-type` 为 `executable`，则会在终端面板打印运行结果，否则只会显示编译的结果。

单击运行按钮执行的编译过程是结合当前的 `cjpm.toml` 和 `cjpm_build_args.json` 的配置来进行的。

### 单击锤子按钮编译工程

开发者可以单击 .cj 文件编辑区的锤子按钮来编译整个仓颉工程。

![hammerButton](./figures/hammerButton.png)

单击锤子按钮执行的编译过程与运行按钮一致，也是结合当前的 `cjpm.toml` 和 `cjpm_build_args.json` 的配置来进行的。不同的是，若整个工程中配置的 `output-type` 为 `executable`，则运行按钮在编译完成后再运行整个工程，而锤子按钮只会编译工程，无后续运行动作。

## 可视化配置编译构建参数

在编译构建过程中需要配置工程目录中的 `cjpm.toml` 和 `cjpm_build_args.json` 文件，方法如下：

- 直接修改 `cjpm.toml` 和 `cjpm_build_args.json` 文件。

![editOne](./figures/editone.png)

- 使用快捷键 F1，或同时按下 Ctrl + Shift + P（macOS 系统为 Command + Shift + P）打开命令面板，在命令面板执行 `Cangjie: Edit Configuration (UI)` 命令打开可视化编辑的 UI 界面。

![editTwo](./figures/editTwo.png)

- 单击编辑页面右上角的画笔按钮，跳转到可视化编辑的 UI 界面。

![editThree](./figures/editThree.png)

对于工程文件中 `.vscode` 目录下的 `cjpm_build_args.json` 的配置，通过复选框或者输入框的形式确定编译要使用的参数，修改后会同步到 `cjpm_build_args.json` 文件中。

对于工程中 `cjpm.toml` 文件的配置，开发者输入内容并将光标移至输入框外，即可生效到 `cjpm.toml` 文件中。

> **注意：**
>
> 当仓颉工程中的 `cjpm.toml` 文件和参数配置界面同时在 VSCode 的编辑区显示时，对 `cjpm.toml` 文件的修改不会同步到 UI 界面上。

对于构建参数 `cross-compile-configuration`，可以在 `cross-compile-configuration` 下单击 `Add Configuration` 按钮添加选项。

在 key 和 compile-option 处填写对应内容，单击对勾按钮或按下回车键，与 `cjpm.toml` 保持同步。若想删除该条配置，只需单击该条选项的叉号按钮。

添加的配置在不填写第一个字段 key 就直接单击对勾按钮或按下回车键，会出现必须要填写第一个字段的提示，该场景下提交的内容不会同步到 `cjpm.toml` 中。在 UI 界面目前不会直接删除该条配置，刷新 UI 界面后会自动删除，内容与 `cjpm.toml` 保持一致。`package-configuration` 和 `cross-compile-configuration` 类似，`package-configuration` 新增配置时第一个字段为空的场景如下图所示。

![noKey.png](./figures/noKey.png)

对于 `package-configuration` 参数，其添加和修改方式与 `cross-compile-configuration` 一致。其中 `output-type` 字段为下拉框选项，其可选的类型有 executable、static、dynamic 和 null。新添加的配置字段的初始化类型为 null，开发者可以根据自己的需要进行选择。当选择为 null 时，该字段同步到 `cjpm.toml` 后会删除该字段。

> **注意：**
>
> - 在 UI 界面配置 `cjpm.toml` 的内容时，只有对于 `customized-option` 参数中配置的 `--cfg` 中路径中的 `=` 需要转义，其他符号不需要添加转义符号。比如：
>
>     - 在 UI 界面对 `customized-option` 参数配置的 `--cfg` 路径中包含 `=` 时，`=` 需要转义，即 `--cfg="D:/projects/cang\=jie"`。
>
>     - 在 UI 界面对 `package-configuration` 字段的 p1 配置 `compile-option` 时，对 `--link-options` 设置内容时不需要转义，只需要加引号即可，即 `--link-options="-rpath=xxx"`。
>
> - 直接在 `cjpm.toml` 中填写时，符号都需要加转义符号。比如：
>
>     - 在 `cjpm.toml` 中对`customized-option` 参数配置的 `--cfg` 路径中包含 `=` 时，所有符号都需要转义，即 `--cfg=\"D:/projects/cang\\=jie\"`。
>
>     - 在 `cjpm.toml` 中对`package-configuration` 字段的 p1 配置 `compile-option` 时，所有符号都需要转义，即 `--link-options=\"-rpath=xxx\"`。

对于 `customized-option` 参数，其添加修改方式与 `cross-compile-configuration` 一致。

> **注意：**
>
> `customized-option` 的条件不能设置内置的条件（@When[os == "Linux"] 不能作为 `customized-option` 的条件，即 "cfg1" : "--cfg =\"os=Linux\"" 是不允许的），只能添加开发者自定义条件。具体请参考 Cangjie > Language Guide 文档的 [`条件编译`](../../../user_manual/source_zh_cn/Chapter_20_conditional-compilation.md) 章节。

## 三方库便捷导入

### 导入方式

> **注意：**
>
> 三方库便捷导入仅适用于当前打开的仓颉工程的主模块。如果其他子模块需要便捷导入三方库，可以单独以工程的方式打开使用。

在仓颉工程中，可以导入外部的三方库，并且在 `cjpm.toml` 中进行配置。

`dependencies`：当前仓颉模块依赖项目，包含了当前构建所需要的其它模块的配置信息，包含版本号和路径。这两个选项必须全部配置，否则会执行失败并报错。在使用过程中，优先使用此方式进行项目依赖导入。

`dev-dependencies`：使用方式与 `dependencies` 一致，具有与 `dependencies` 字段相同的格式。用于指定仅在开发过程中使用的依赖项，而不是构建主项目所需的依赖项，例如仅在测试中使用的依赖项。如果开发者是库作者，则应将此字段用于此库的下游用户不需要使用的依赖项。

`bin-dependencies`：非特殊需求场景下，建议使用 `dependencies` 的方式导入依赖。目前仓颉插件仅支持本地的 `bin-dependencies` 配置。

当前仓颉模块依赖已编译好的 `package`，有两种导入形式。以导入下述 `pro0` 模块和 `pro1` 模块的三个包来举例说明。

```text
test

├── pro0

│    ├── libpro0_xoo.so

│    ├── xoo.cjo

│    ├── libpro0_yoo.so

│    └── yoo.cjo

├── pro1

│    ├── libpro1_zoo.so

│    └── zoo.cjo

├── src

│    └── main.cj

└── cjpm.toml
```

方式一：通过 `package-option` 导入。

```text
[target]
    [target.x86_64-w64-mingw32]
        [target.x86_64-w64-mingw32.bin-dependencies]
            [target.x86_64-w64-mingw32.bin-dependencies.package-option]
                pro0_xoo = "./test/pro0/xoo.cjo"
                pro0_yoo = "./test/pro0/yoo.cjo"
                pro1_zoo = "./test/pro1/zoo.cjo"
```

该选项是 map 结构，`pro0_xoo` 名称作为 key，与 `libpro0_xoo.so` 相对应，前端文件 .cjo 的路径作为 value，对应于该 .cjo 的 `.a` 和 `.so` 需放置在相同路径下，且对应的 .cjo 模块文件必须与模块名来源文件放置在相同的文件夹下，该文件夹下不能有任何其他文件或文件夹。

方式二：通过 `path-option` 导入。

```text
[target]
    [target.x86_64-w64-mingw32]
        [target.x86_64-w64-mingw32.bin-dependencies]
            path-option = ["./test/pro0", "./test/pro1"]
```

该选项是字符串数组结构，每个元素代表待导入的路径名称。`cjpm` 会自动导入该路径下所有符合规则的仓颉库包，这里的合规性是指库名称的格式为`模块名_包名`。库名称不满足该规则的包只能通过 `package-option` 选项进行导入。

如果同时通过 `package-option` 和 `path-option` 导入相同的包，则 `package-option` 字段的优先级更高。

导航栏视图呈现如下形式。

![packageRequires](./figures/packageRequires.png)

开发者可以在其对应的导入方式子目录下导入工程需要的模块。在导航栏单击画笔进入 UI 界面。

![packageRequireUI](./figures/packageRequireUI.png)

`ffi`：当前仓颉模块外部依赖 C 库，配置了依赖该库所需要的信息，包含名称和路径字段。资源管理器的视图栏中的 `CANGJIE LIBRARY` 栏，可以方便开发者添加这几类外部库。

在工程初始化后，可以通过单击分类栏的加号按钮添加对应的三方库。

![extraLibAdd.png](./figures/extraLibAdd.png)

也可以通过单击三方库上的减号删除对应的库。

可以通过单击视图栏的编辑按钮，打开三方库导入的可视化界面来导入或删除三方库。

![configLib](./figures/configLib.png)

以上删除和添加操作均同步到工程的 `module.json` 文件中。

### 导入限制

- 项目中需要链接动态库（C 库和仓颉库）时，需自行设置 `LD_LIBRARY_PATH`，执行 `export LD_LIBRARY_PATH=xxx:$LD_LIBRARY_PATH`。
- 在 `cjpm.toml` 中修改内容不会直接影响 treeView 和 UI 界面，需要单击 treeView 或 UI 界面进行手动更新。
- 在 treeView 中的库分类处添加外部库，且此时库分类目录是关闭状态，则添加后需要打开目录才能查看。
- UI 界面的字段暂不支持 hover 显示内容的功能。
- UI 界面非开发者添加的外部库，其路径与 `cjpm.toml` 保持一致。开发者添加的库和 treeView 均显示绝对路径。


### IDE/create_cj_project_community.md

# 创建仓颉工程

> **说明：**
>
> 本文档部分图片截取于 VSCode 软件界面，仅用于说明仓颉插件在 VSCode 中的使用方法。

仓颉工程目录结构如下所示。

```text
Project_name：开发者输入的名称

├── src：代码目录

│    └── main.cj：源码文件

└── cjpm.toml：默认的 cjpm.toml 配置文件
```

## 使用 VSCode 命令面板

在 VSCode 中使用快捷键 F1，或同时按下 Ctrl + Shift + P（macOS 系统为 Command + Shift + P）打开命令面板，按照以下步骤创建仓颉工程。

**第一步：选择创建仓颉工程命令**

![createProject_1](./figures/createProject_1.png)

**第二步：选择仓颉后端**

![createProject_2](./figures/createProject_2_community.png)

**第三步：选择工程模板**

![createProject_3](./figures/createProject_3.png)

**第四步：选择工程路径**

![createProject_4](./figures/createProject_4.png)

**第五步：输入工程名称**

选择工程的存储路径，输入工程名称。

**第六步：完成创建并打开**

![createProject_6](./figures/createProject_6.png)

## 使用可视化界面

在 VSCode 中使用快捷键 F1，或同时按下 Ctrl + Shift + P（macOS 系统为 Command + Shift + P）打开命令面板，按照以下步骤创建仓颉工程。

**第一步：选择创建仓颉可视化工程命令**

![createProjectView_1](./figures/createProjectView_1.png)

**第二步：打开可视化创建仓颉工程界面**

![createProjectView_2](./figures/createProjectView_2.png)

**第三步：选择工程模板**

![createProjectView_4](./figures/createProjectView_4.png)

**第四步：选择工程路径**

![createProjectView_5](./figures/createProjectView_5.png)

**第五步：输入工程名称**

![createProjectView_6](./figures/createProjectView_6.png)

**第六步：单击 Confirm 完成创建并打开**

![createProjectView_7](./figures/createProjectView_7.png)


### IDE/debug_service_community.md

# 调试服务

> **说明：**
>
> 本文档部分图片截取于 VSCode 软件界面，仅用于说明仓颉插件在 VSCode 中的使用方法。

仓颉编程语言提供了可视化调试服务，方便开发者调试仓颉程序。该插件提供如下功能：

- Launch：启动调试进程
- Attach：附加到已启动的进程
- 支持源码断点、函数断点、数据断点、汇编断点
- 支持源码内单步调试、运行到光标处、步入、步出、继续、暂停、重启、停止调试
- 支持仓颉-C 互操作调试，仓颉代码 continue、步入到 C 代码
- 支持汇编内单步、步入、步出
- 支持表达式求值
- 支持变量查看和修改
- 支持在调试控制台中查看变量
- 支持查看被调试程序的输出信息
- 支持反向调试
- 支持 Unittest 的运行和调试

> **说明：**
>
> - 如果第一次使用 VSCode 调试功能，可以查看 [VSCode 调试服务使用手册](https://code.visualstudio.com/docs/editor/debugging)。
> - 调试服务当前支持在 Windows 和 Linux 版本的 VSCode 中安装使用。
> - 受调试器限制，循环代码中存在条件断点时，执行 PAUSE 操作可能导致后续调试无法进行。
> - VARIABLES 视图修改变量时，不会触发存在依赖关系的变量的刷新。
> - 调试服务依赖仓颉 SDK 包内 liblldb 动态库文件时，请提前配置仓颉 SDK 路径。
> - 调试插件客户端与服务端通过 Socket 通信，插件自动从 9995 端口开始查找可用端口，并在 127.0.0.1 上启动 Socket server 监听该端口。

## 启动调试

### Launch 模式

**仓颉工程调试**

1. 未创建 `launch.json` 文件时，单击 Run and Debug > Cangjie(cjdb) Debug 启动调试。
2. 已创建 `launch.json` 文件时，在 `launch.json` 文件中单击 Add Configuration > Cangjie Debug (CJNative) : launch > Build And Debug Cangjie Project 添加调试配置，选择添加的配置启动调试。

**单文件调试**

针对单文件调试，可以选中需要调试的仓颉源文件，右键选择 Cangjie: Build and Debug File，该操作会生成编译配置文件 `task.json` 和编译脚本，并且会根据  `task.json` 配置执行脚本，编译出可调试的二进制文件，然后启动调试。

![start](./figures/start_community.PNG)

**调试手动编译的可执行文件**

1. 使用 cjc 编译器或 cjpm 手动编译出可调试的二进制文件。
2. 单击 Run and Debug > Cangjie(cjdb) Debug > Cangjie (CJNative): launch > Choose Executable File Later 启动调试。

**Launch debugMacro 模式仓颉工程调试宏展开后的代码**

调试宏展开后的代码文件（后缀为 `.marcocall`），此时宏对应的原文件无法调试。

**调试远程进程（支持 Linux 远程到 Linux）**

Launch 模式下调试远程进程时，调试服务会将本地编译的二进制文件推送到远程平台，然后调试远程平台的二进制文件。

1. 在远程平台启动 lldb-server。建议使用 cjdb 自带的 lldb-server，路径为 /cangjie/third_party/llvm/lldb/bin/lldb-server，启动命令 `/**/**/cangjie/third_party/llvm/lldb/bin/lldb-server p --listen "*:1234" --server`。
2. 在本地机器使用 cjc 编译器或 cjpm 手动编译出可调试的二进制文件。
3. 单击 Run and Debug 按钮启动调试。

`launch.json` 配置示例如下：

```json
{
    "name": "Cangjie Debug (cjdb): test",
    "program": "/**/**/test",
    "request": "launch",
    "type": "cangjieDebug",
    "externalConsole": false,
    "remote": true,
    "remoteCangjieSdkPath": "/**/**/cangjie",
    "remoteFilePath": "/**/**/test",
    "remoteAddress": "1.1.1.1:1234",
    "remotePlatform": "remote-linux"
}
```

**配置属性**

| 属性                  | 类型    | 描述                                                                                                                                                                                 |
| -------------------- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| program              | string  | 被调试进程的全路径，该文件将推送到远程平台，例如：/home/cangjieProject/build/bin/main                                                                                                                       |
| remote               | boolean | 启动远程 Launch 进程，remote 为 true                                                                                                                                                       |
| remoteCangjieSdkPath | string  | 远程平台仓颉 SDK 路径                                                                                                                                                                      |
| remoteFilePath       | string  | 远程平台存放推送文件的全路径，请确保路径 /home/test/ 合法且存在，`main` 为推送到远程的文件名，例如：/home/cangjieProject/build/bin/main                                                                                    |
| remoteAddress        | string  | 被调试进程所在的机器 IP 和 lldb-server 监听的端口号，数据格式：ip:port                                                                                                                                    |
| remotePlatform       | string  | 远程的平台，仅支持 remote-linux（远程 Linux 平台）                                                                                                                                                |
| env                  | object  | 为被调试程序设置运行时的环境变量，该配置将覆盖系统环境变量，如需在系统配置基础上追加配置，在配置项结尾增加 \$\{env:PATH\}。例如："PATH":"/home/user/bin: \$\{env:PATH\}", "LD\_LIBRARY\_PATH":"/home/user/bin:\$\{env:LD\_LIBRARY\_PATH\}"。 |

### Attach 模式

**调试本地进程**

1. 在 `launch.json` 文件中单击 Add Configuration > Cangjie Debug (CJNative) : attach 添加调试配置，选择添加的配置启动调试。
2. 在弹出界面选择要调试的进程即可启动调试。

**调试远程进程**

1. 在本地机器编译出可调试二进制文件并将该文件拷贝到远程机器。
2. 在远程机器启动 lldb-server，建议使用 cjdb 自带 lldb-server，路径为 /cangjie/third_party/llvm/lldb/bin/lldb-server，启动命令 `/**/**/cangjie/third_party/llvm/lldb/bin/lldb-server p --listen "*:1234" --server`。
3. 在远程机器启动被调试的二进制文件。
4. 在本地机器配置 `launch.json` 文件，并启动调试。

`launch.json` 配置属性：

```json
{
    "name": "Cangjie Debug (cjdb): test",
    "processId": "8888",
    "program": "/**/**/test",
    "request": "attach",
    "type": "cangjieDebug",
    "remote": true,
    "remoteAddress": "1.1.1.1:1234",
    "remotePlatform": "remote-linux"
}
```

**配置属性**

| 属性           | 类型    | 描述                                                         |
| -------------- | ------- | ------------------------------------------------------------ |
| processId      | string  | 被调试进程的 pid（配置 pid 时优先 attach pid，未配置 pid 则 attach program） |
| program        | string  | 被调试进程的全路径，例如：/home/cangjieProject/build/bin/main |
| remote         | boolean | attach 本机器进程，remote 为 false；若 attach 远程进程，将 remote 设置为 true |
| remoteAddress  | string  | 远程调试时被调试进程所在的机器 IP 和 lldb-server 监听的端口号，数据格式：ip:port |
| remotePlatform | string  | 远程调试时远程的平台，仅支持 remote-linux（远程 linux 平台）    |

## 查看调试信息

当进程处于 stopped 状态时，可以在 VSCode 界面左侧查看断点、当前线程、堆栈信息和变量，支持编辑断点和修改变量。也可以在 Editor 窗口将鼠标悬停在变量名称上方查看变量值。支持在 TERMINAL 窗口查看被调试程序的输出信息。

![debugInfo](./figures/debugInfo.png)

## 表达式求值

- 在 WATCH 窗口添加按钮或空白处双击键入表达式。
- 在 Debug Console 窗口键入表达式。
- 在 Editor 窗口双击选中变量，右键选择 Evaluate in Debug Console。

## 程序控制

- 单击顶部调试工具栏上的图标控制程序，包括单步执行、步入、步出、继续、暂停、重启或停止程序。

  ![debugControl1.png](./figures/debugControl1.png)

- 在鼠标光标处单击右键选择 Run to Cursor。

  ![runToCursor](./figures/runToCursor.png)

- 在源码视图右键选择 Open Disassembly View 进入汇编视图。

  ![openDisassemblyView](./figures/openDisassemblyView.png)

## 调试控制台

### 执行 cjdb 命令

在调试控制台中输入 cjdb 命令来调试程序，命令的格式需要以 `-exec` 开头，要执行的子命令必须是正确的 cjdb 命令。

使用 cjdb 命令 `n` 执行单步调试的示例如下：

```shell
-exec n
```

![debugconsoleCjdbcommand](./figures/debugconsoleCjdbcommand.png)

### 查看变量

在调试控制台中输入变量名称查看变量值：

![debugconsoleVariable](./figures/debugconsoleVariable.png)

## 反向调试

> **说明：**
>
> - 反向调试基于记录重放，开启反向调试功能后，调试服务会记录开发者正向调试的所有停止点（断点 + 单步），以及停止点的线程、堆栈和变量等调试信息。进入反向调试模式，支持查看历史记录点的调试信息。

### 配置

单击左下角齿轮图标，选择设置（Settings）选项，在搜索栏输入 cangjie，找到 Reverse Debug 选项，勾选 Enable reverse debug，开启程序调试历史停止点信息的自动记录。同时可以配置自动记录的线程个数、堆栈个数、变量作用域、复杂类型变量子变量的展开层数和子变量个数。修改配置后，需要重新启动仓颉调试。

![reverseDebugConfig](./figures/reverseDebugConfig.png)

### 工具栏

单击顶部调试工具栏上的时钟图标进入反向调试模式，使用工具栏上正反向继续、正反向单步控制程序，查看历史记录的线程、堆栈、变量信息，如下图所示。

![reverseDebugOpen](./figures/reverseDebugOpen.png)

单击顶部调试工具栏上的方块图标退出反向调试模式，调试会回到正向调试的最后停止点，如下图所示。

![reverseDebugClose](./figures/reverseDebugClose.png)

### 反向断点

> **说明：**
>
> - 反向断点是一种特殊的源码断点（Log Point），正向调试过程中不会停止，也不会输出自动生成的 Log Message（用于标记反向断点）。
> - 在正向调试时，开发者提前设置反向断点，调试服务后台会记录进程走过的反向断点的调试信息。
> - 在进入反向调试模式时，反向断点会作为停止点（断点型），可以查看该断点处的线程堆栈变量等调试信息。
> - 在进入反向调试模式时，不支持设置反向断点。

反向断点设置方式：

1. 在仓颉源文件编辑器视图内右键选择 Cangjie: Add Reverse Breakpoint，为光标所在行设置一个反向断点。

    ![lineReverseBreakpoint](./figures/lineReverseBreakpoint.png)

2. 在仓颉源文件上右键选择 Cangjie: Add Auto Reverse Breakpoints 插件会分析该文件内函数的入口和出口位置并自动设置反向断点。

    ![fileReverseBreakpoint](./figures/fileReverseBreakpoint.png)

3. 在文件夹上右键选择 Cangjie: Add Auto Reverse Breakpoints 插件会分析该文件夹内仓颉源文件中的函数的入口和出口位置并自动设置反向断点。

    ![folderReverseBreakpoint](./figures/folderReverseBreakpoint.png)

### 时间线

> **说明：**
>
> 时间线展示了反向调试模式下记录的所有停止点（断点+单步），通过时间线拖拽，可以查看历史停止点的信息。

时间线入口位于 VSCode 右下方区域，可以在右下方的 Tab 标签行右键将时间线 Cangjie Debug Timeline 开启或隐藏，也可以在 View 菜单中选择 Open View 开启，如下图所示。

![debugTimelineShow.png](./figures/debugTimelineShow.png)

1. 主时间线上有左右游标，可以分别拖动左右游标选出某一段时间区域。在选中一段区域之后，鼠标放在选中区域上方时会变为手的形状，此时可以左右拖动此区域。
2. 将鼠标放在主时间线上，鼠标变为十字光标的形状，此时按住鼠标往前或往后拖动，可以将鼠标滑过的区域设为新的时间区域。
3. 可以通过 Ctrl + 鼠标滚轮的方式，放大和缩小选中区域。
4. 每条时间线标识一个仓颉线程或者系统线程。

单击时间线上的记录点，editor 界面同步刷新（定位到源码的行），调试信息界面同步刷新（展示该记录点的线程、栈帧和变量）。

## unittest 运行和调试

### 前置条件

模块的单元测试代码应采用如下结构，其中 `.cj` 文件表示包的源码，对应单元测试代码文件命名应以 `_test.cj` 结尾。具体单元测试代码的写法可参考标准库用户手册。

```text
├── src

│    ├── koo

│    │   ├── koo.cj

│    │   └── koo_test.cj

│    ├── zoo

│    │   ├── zoo.cj

│    │   └── zoo_test.cj

│    ├── main.cj

│    └── main_test.cj

└── cjpm.toml
```

### 使用方式

1. 单击 `@Test/@TestCase` 声明行上的 run 按钮，运行该单元测试类/单元测试 case。
2. 单击 `@Test/@TestCase` 声明行上的 debug 按钮，调试该单元测试类/单元测试 case。

![unittest](./figures/unittest.PNG)

## DAP 通信日志

调试服务客户端和服务端采用 DAP 协议通信，通信日志可用于定位问题。日志路径在用户目录下 `/.cangjie/debug/logs/server`。

可以通过点击左下角齿轮图标，选择设置（Settings）选项，在搜索栏输入 cangjie，找到 Debug 选项，勾选 `Enable DAPCommunication Log`，开启调试服务通信日志。

![enableDAPCommunicationLog.png](./figures/enableDAPCommunicationLog.png)


### IDE/ide_plug-in_overview_community.md

# 仓颉语言 IDE 插件使用指南

仓颉语言提供了 Visual Studio Code（简称 VSCode） 插件，通过在 VSCode 中安装仓颉插件和仓颉 SDK，为开发者提供语言服务、工程管理、编译构建、调试服务、格式化、静态检查和代码覆盖率统计的功能。本文档介绍如何在 VSCode 中安装仓颉插件，以及如何使用插件提供的功能。


### IDE/install_community.md

# 安装指导

> **说明：**
>
> 本文档部分图片截取于 VSCode 软件界面，仅用于说明仓颉插件在 VSCode 中的使用方法。

## 下载软件

请在 VSCode 官网下载 VSCode 安装包，建议使用 1.67 或更新版本。仓颉语言 VS Code 插件已上架 VS Code 扩展市场，可以前往[仓颉下载中心](https://cangjie-lang.cn/download)，点击**Cangjie vscode plugin**下面的**立即查看**，可以跳转到 VSCode 扩展市场进行安装，或在 VSCode 内部扩展界面直接进行安装。

| 下载项 | 说明 | 是否必选 |
| ------------ | ------------ | ------------ |
| Visual Studio Code | IDE | 必选 |

## 安装 VSCode

### Windows 平台

运行 VSCode 安装文件（例如 VSCodeUserSetup-x64.exe），根据提示选择安装路径，完成 VSCode 的安装。

### Linux 平台

#### 本地安装

参考 VSCode 官网安装适合的 Linux 发行版的 VSCode。

#### 远程安装

1. 在 VSCode 中搜索并安装 Remote - SSH 插件。

2. 使用 Remote - SSH 进行远程工作，VSCode 会自动在远程主机上安装 Server。linux_arm64 暂时只支持使用 Remote - SSH 的方式进行操作。

### macOS 平台

解压下载的压缩包（例如 VSCode-darwin-universal.zip），将解压后的 .app 文件拖拽到应用程序，完成 VSCode 的安装。

## 安装仓颉插件

仓颉插件可以通过 VSCode 扩展市场直接安装。

1. 启动 VSCode。

2. 点击左侧边栏的扩展图标进入扩展市场（或按 Ctrl+Shift+X/Cmd+Shift+X）。

   ![setupVsix](./figures/vscodePluginMarkets.png)

3. 搜索插件仓颉，在搜索栏输入关键词**Cangjie**，找到**Cangjie**插件后，点击 Install 按钮安装。

   ![setupVsix](./figures/vscodeSearchCangjie.png)

4. 已经安装的插件可以在 INSTALLED 目录下查看。

   ![checkVsix](./figures/vscodeCangjieInstalled.png)

## 安装仓颉 SDK

仓颉 SDK 主要提供了仓颉语言编译命令（cjc）、仓颉语言官方包管理工具（Cangjie Package Manager，简称 CJPM），以及仓颉格式化工具（Cangjie Formatter，简称 cjfmt）等命令行工具。正确安装并配置仓颉 SDK 后，可使用工程管理、编译构建、格式化、静态检查和覆盖率统计等功能。开发者可以通过以下两种方式下载 SDK：

- 离线手动安装。在官网下载 SDK 安装包，并在本地安装部署仓颉 SDK。
- 通过 VSCode 安装。仓颉插件提供了仓颉 SDK 最新版本的下载和更新功能，开发者可以在 VSCode 完成最新版本仓颉 SDK 的下载和本地环境部署。

### 下载 SDK

开发者可以自行前往[仓颉下载中心](https://cangjie-lang.cn/download)，手动下载仓颉 SDK。

#### Windows 平台

Windows 平台的 SDK 下载内容为：`cangjie-sdk-windows-x64-x.y.z.exe` 或 `cangjie-sdk-windows-x64-x.y.z.zip`。

下载 SDK 并放置在本地。若下载 .exe 文件，运行该文件，根据提示选择安装路径并记录该路径。若下载 .zip 文件，解压该文件，记录存储的路径。

SDK 文件夹的目录结构如下：

```text
cangjie

├── bin

├── lib

├── modules

├── runtime

├── third_party

├── tools

├── envsetup.bat

├── envsetup.ps1

└── envsetup.sh
```

#### Linux 平台

Linux_x64 平台的 SDK 下载内容为：`cangjie-sdk-linux-x64-x.y.z.tar.gz`。

Linux_AArch64 平台的 SDK 下载内容为：`cangjie-sdk-linux-aarch64-x.y.z.tar.gz`。

下载 SDK 并放置在本地，记录存储的路径。目录结构如下：

```text
cangjie

├── bin

├── include

├── lib

├── modules

├── runtime

├── third_party

├── tools

└── envsetup.sh
```

#### macOS 平台

macOS_AArch64 平台的 SDK 下载内容为：`cangjie-sdk-mac-aarch64-x.y.z.tar.gz`。

下载 SDK 并放置在本地，记录存储的路径。目录结构如下：

```text
cangjie

├── bin

├── lib

├── modules

├── runtime

├── third_party

├── tools

└── envsetup.sh
```

### SDK 路径配置

安装完仓颉插件后，即可配置 SDK 的路径。单击左下角齿轮图标，选择设置选项。

![setVS](./figures/setVS.png)

或直接右键单击插件，选择 Extension Settings，进入配置页面。

![openSetting](./figures/openSetting.png)

在搜索栏输入 Cangjie，选择侧边栏的 Cangjie Language Support 选项。

![languageSupportSetting](./figures/languageSupportSetting.png)

**配置 CJNative 后端**

1. 找到 Cangjie Sdk: Option 选项，选择后端类型为 CJNative（默认是此选项）。

2. 找到 Cangjie Sdk Path: CJNative Backend 选项，输入 CJNative 后端 SDK 文件夹所在绝对路径。

3. 重启 VSCode 生效。

![CJNativeSdkPathSet](./figures/CJNativeSdkPathSet.png)

### 安装验证

通过快捷键 Ctrl + Shift + P（macOS 系统的快捷键为 Command + Shift + P） 调出 VSCode 的命令面板，选择 cangjie: Create Cangjie Project View 命令。

![createProjectView](./figures/createProjectView.png)

弹出创建仓颉项目页面，说明仓颉 SDK 安装成功。

![sdkSuccess](./figures/sdkSuccess.png)


### IDE/language_service_community.md

# 语言服务

> **说明：**
>
> 本文档部分图片截取于 VSCode 软件界面，仅用于说明仓颉插件在 VSCode 中的使用方法。

语言服务工具为开发者提供如下功能：语法高亮、自动补全、定义跳转、查找引用、诊断报错、选中高亮、悬浮提示、签名帮助和重命名等。

> **说明：**
>
> - **项目根目录 (PROJECTROOT)**：仓颉语言服务插件以开发者当前打开的文件夹作为项目根目录 PROJECTROOT，且仅对该目录下的仓颉源码提供语言服务支持。
> - **模块命名**：如如未显式指定模块名称，默认将项目根目录 PROJECTROOT 名称作为模块名，便于导入 src 目录下的包。
> - **源码支持范围**：PROJECTROOT/src 下称为**src 下仓颉源码**（支持语言服务）；除了 **src 下仓颉源码**，项目根目录 PROJECTROOT 下的其他所有源码称为**非 src 下仓颉源码**（支持语言服务）；项目根目录 PROJECTROOT 之外的仓颉源码称为**外部源码**（暂不支持语言服务）。
> - **导入能力**：**非 src 下仓颉源码**中，每个文件夹都作为一个包，包名的声明和包的编译方式与**src 下仓颉源码**顶层包（即 default 包）处理方式保持一致。**非 src 下仓颉源码**可以导入标准库的包以及**src 下仓颉源码**中自定义的包，**非 src 下仓颉源码**的包无法被其他包导入。
> - **宏展开依赖**：仓颉语言服务的宏展开依赖宏的动态库，如果涉及自定义宏展开的代码，需要先编译出动态库，然后再启动语言服务。

## 代码高亮

VSCode 打开仓颉工程中的 .cj 文件，即可看到代码高亮效果。VSCode 不同主题显示的代码高亮颜色不同，支持对代码运算符、类、注释、函数、关键字、数字、包名、字符串、变量等进行高亮显示。

![sema](./figures/sema.png)

## 自动补全

VSCode 打开仓颉工程中的 .cj 文件，输入关键字、变量或 . 符号，在光标右侧提示候选内容。可以用上下方向键快速选择想要的内容（需要切换为系统默认输入法），使用 Enter 键或 Tab 键补全。

![compelte1](./figures/complete1.png)

![complete2](./figures/complete2.png)

对于带参数的函数或者泛型提供模块化补齐，即当函数有参数或者带泛型时，选择函数补齐项之后会出现参数格式化补齐，如下图所示。填充数值之后按下 Tab 键可以切换到下一个参数补齐，直至模块化补齐结束，或按下 Esc 键提前退出除当前选中模块。

![completeFormat](./figures/completeFormat.png)

## 定义跳转

VSCode 打开仓颉工程中的 .cj 文件，鼠标悬停在目标上方，按下 Ctrl 键并单击鼠标左键触发定义跳转；或使用鼠标右键单击目标符号，选择 Go to Definition 执行定义跳转；或按下快捷键 F12 执行定义跳转。

![definition](./figures/definition.png)

> **说明：**
>
> 在符号使用的地方使用定义跳转会跳转到符号定义处，支持跨文件跳转。
> 在符号定义处使用定义跳转，如果此符号没被引用过，光标会跳转到符号左端。
> 如果符号在其他地方被引用，会触发查找引用。

## 查找引用

VSCode 打开仓颉工程中的 .cj 文件，使用鼠标右键单击目标符号，选择 Find All References 执行符号引用预览，单击预览条目，可以跳转到对应引用处。

![reference](./figures/reference.png)

## 诊断报错

VSCode 打开仓颉工程中的 .cj 文件，当源码文件出现不符合仓颉语法或语义规则的代码时，会在相关代码段出现红色波浪下划线，如下图所示，当鼠标悬停在上面，可以提示相应的报错信息。修改正确后，诊断报错自行消失。

![diag](./figures/diag.png)

## 选中高亮

VSCode 打开仓颉工程中的 .cj 文件，光标定位在一个变量或函数名处，当前文件中该变量的声明处以及其使用处都会高亮显示。

![docHighlight](./figures/docHighlight.png)

## 悬浮提示

VSCode 打开仓颉工程中的 .cj 文件，光标悬浮在变量处，可以提示类型信息。

![hover1](./figures/hover1.png)

悬浮在函数名处，可以提示函数原型。

![hover2](./figures/hover2.png)

## 定义搜索

VSCode 打开仓颉工程中的 .cj 文件，同时按下 Ctrl 键和 T 键，弹出搜索框，输入想要搜索的符号定义名，会显示出符合条件的搜索结果。单击搜索结果条目，可以跳转到对应的定义位置处。

![searchsymbol_open](./figures/searchsymbol_open.png)

目前支持搜索的定义类型有：class、interface、enum、struct、typealias、toplevel 的函数、toplevel 的变量、prop、enum 构造器、成员函数和成员变量。

## 重命名

VSCode 打开仓颉工程中的 .cj 文件，光标定位在想要修改的自定义名称上，右键选择 Rename Symbol 或按下快捷键 F2 打开重命名编辑框。

![prepareRename](./figures/prepareRename.png)

编辑完毕按下回车键，完成重命名的实现。

![onRename](./figures/onRename.png)

目前支持重命名的类型有：class、interface、enum、struct、func、type、泛型、变量和自定义宏。

## 大纲视图显示

VSCode 打开仓颉工程中的 .cj 文件，在左侧 OUTLINE 视图中显示当前文件的大纲。目前支持两层结构的显示，第一层主要为 toplevel 中定义的声明，第二层主要为构造器及成员。

![outline](./figures/outline.png)

目前支持大纲视图显示的类型有：class、interface、enum、struct、typealias、toplevel 的函数、toplevel 的变量、prop、enum 构造器、成员函数和成员变量。

## 面包屑导航

VSCode 打开仓颉工程中的任意 .cj 文件，光标定位在符号处，点击面包屑导航，显示符号当前所处的位置，以及该符号在整个工程中的位置路径。

![Breadcrumb](./figures/Breadcrumb.png)

目前支持面包屑导航的类型有：class、interface、enum、struct、typealias、toplevel 的函数、toplevel 的变量、prop、enum 构造器、成员函数和成员变量。

## 签名帮助

VSCode 在输入左括号和逗号时会触发签名帮助。触发后，只要还在函数参数范围内，提示框会一直随光标移动（可与补全共存）。如下图所示，开发者可以看到当前函数的参数信息，以及当前函数位置参数的高亮效果。

![signaturehelp](./figures/signaturehelp.png)

## 显示类型层次结构

VSCode 打开仓颉工程中的 .cj 文件，光标定位在想要查看的自定义名称上，右键选择 Show Type Hierarchy，在左侧就会显示该类型层次结构。Object 类型默认为所有类的父类，该功能下不会显示。

目前支持显示层次结构的类型有：class、interface、enum 和 struct。

![typeHierarchy](./figures/typeHierarchy1.png)

单击如图标记所示位置，可以在显示子类和父类之间切换。

![typeHierarchy](./figures/typeHierarchy2.png)

## 调用类型层次结构

VSCode 打开仓颉工程中的 .cj 文件，光标定位在函数名上，右键选择 Show Call Hierarchy，在左侧就会显示该函数的调用类型层次结构。

![callHierarchy](./figures/callHierarchy1.png)

通过单击标识位置可以在显示调用函数和被调用函数之间切换。

![callHierarchy](./figures/callHierarchy2.png)


### tools/cjcov_manual_cjnative.md

# 覆盖率统计工具

## 功能简介

`cjcov`（Cangjie Coverage）是一款面向仓颉语言的覆盖率统计工具，用于生成仓颉语言程序的覆盖率报告。

## 使用说明

`cjcov -h` 获取帮助信息，选项介绍如下：

```text
Usage: cjcov [options]

A tool used to summarize the coverage in html reports.

Options:
  -v, --version                 Print the version number, then exit.
  -h, --help                    Show this help message, then exit.
  -r ROOT, --root=ROOT          The root directories of your source files, defaults to '.', the current directory.
                                File names are reported relative to this root.
  -o OUTPUT, --output=OUTPUT    The output directories of html reports, defaults to '.', the current directory.
  -b, --branches                Report the branch coverage. (It is an experimental feature and may generate imprecise branch coverage.)
  --verbose                     Print some detail messages, including parsing data for the gcov file.
  --html-details                Generate html reports for each source file.
  -x, --xml                     Generate a xml report.
  -j, --json                    Generate a json report.
  -k, --keep                    Keep gcov files after processing.
  -s SOURCE, --source=SOURCE    The directories of cangjie source files.
  -e EXCLUDE, --exclude=EXCLUDE
                                The cangjie source files starts with EXCLUDE will not be showed in coverage reports.
  -i INCLUDE, --include=INCLUDE
                                The cangjie source files starts with INCLUDE will be showed in coverage reports.
```

基本的命令使用方法如下所示，`cjcov` 为主程序名称，`--version` 表示为显示 `cjcov` 的版本号。部分配置项支持长短选项两种写法，效果相同，具体可以使用 `cjcov --help` 命令参考用法。

```text
cjcov -version 或者 cjcov -v
```

### 使用步骤

#### 单文件场景

仓颉版本包准备 --> 仓颉源码准备 -->  使用 `--coverage` 编译选项构建仓颉源码，生成二进制文件 --> 执行二进制文件 --> `cjcov` 生成覆盖率统计结果

以 `hello world` 为例（假设当前目录是 `WORKPATH`）：

1. 仓颉版本包准备

    对于 `Linux` 平台，假设仓颉版本包解压在 `WORKPATH` 目录下，则执行 `source WORKPATH/cangjie/envsetup.sh` 命令即可。

2. 仓颉源码准备

    源码目录结构如下：

    ```text
    src/
    └── main.cj
    ```

    `main.cj` 源码内容如下：

    ```cangjie
    main(): Int64 {
        print("hello world\n")
        return 0
    }
    ```

3. 编译源码

    在 `WORKPATH` 目录下执行以下命令：

    ```shell
    cjc --coverage main.cj
    ```

    编译完成之后在 `WORKPATH` 目录下会生成 `default.gcno` 和 `main` 文件。

4. 运行编译出来的二进制

    在 `WORKPATH` 目录下执行 `./main` 命令，运行完成之后 `WORKPATH` 目录下会生成 `default.gcda` 文件。

5. `cjcov` 生成 `html`

    在 `WORKPATH` 目录执行 `cjcov -o output --html-details`，更多 `cjcov` 参数使用可参考[命令说明](#命令说明)章节。

执行完 `cjcov` 命令之后，在 `WORKPATH/output` 目录会有以下文件：

```text
output
├── cjcov_logs （该目录存放一些 cjcov 执行过程的详细日志，可不用关注）
│   ├── cjcov.log
│   └── gcov_parse.log
├── index.html （总的覆盖率报告，通过浏览器打开）
└── src_main.cj.html （单个文件的覆盖率，可以通过打开 index.html 自动跳转到该文件）
```

#### 多文件场景

对于多文件场景，推荐使用包管理工具的命令`cjpm build --coverage` 或 `cjpm test --coverage` ，具体用法请参见[包管理工具](./cjpm_manual_cjnative.md)。

## 命令说明

### cjcov -h | --help

显示 `cjcov` 基本使用方法。

### cjcov -v | --version

显示 `cjcov` 的版本号。指定 `-v` 或者 `--version` 参数后，输入其他任何选项参数都不生效，只会显示版本号。如 `--version` 和 `--help` 同时使用，则显示 `version` 信息后退出。

### cjcov --verbose

指定该选项后会将一些日志信息生成到 `cjcov_logs` 目录中，该参数默认不生效，即默认不会打印中间信息。`gcov` 文件是 `cjcov` 工具生成的中间文件，`cjcov` 解析 `gcov` 文件的格式如下：

```text
==================== start: main.cj.gcov =====================

noncode line numbers:
[0, 0, 0, 0, 1, 2, 6, 7, 9, 10, 11, 15, 17, 18]

uncovered line numbers:
[5]

covered data:
[(16, 1), (3, 1), (4, 1), (8, 1), (12, 1), (13, 1), (14, 1)]

branches data:
line number:    4  ==>  data: [(0, 0), (1, 1)]

===================== end: main.cj.gcov =======================

```

指定该选项参数，会显示每个 `gcov` 文件的详细覆盖率数据。

具体字段解释如下：

- `start: xxx.gcov, end: xxx.gcov`：两行中间的文本是对应 `xxx.gcov` 文件解析到的覆盖率数据。
- `noncode line numbers`：显示的是不统计到总代码行的行号，在 `html` 中是以白色底呈现，对应 `gcov` 中的以 `-` 开头的行数。
- `uncovered line numbers`：显示的是没有覆盖到的数据，在 `html` 中是以红色底呈现，对应 `gcov` 文件中以 `#####` 开头的行数。
- `covered data`：显示的是覆盖到的数据，以（代码行数, 覆盖次数）呈现，在对应 `html` 中以绿色呈现，只要覆盖次数大于 0，在 `html` 中的 `Exec` 一列中显示为 `Y`，对应于 `gcov` 文件以数字开头的行数。
- `branches data`：显示的分支覆盖数据，以（代码行数, 分支覆盖次数）呈现，在对应 `html` 中的 `Branch` 一列中，有一个倒三角形，显示的是分支覆盖数/总分支数。该数据对应于 `gcov` 文件中以 `branch` 开头的数据。

### cjcov --html-details

如果指定该参数，表示会生成仓颉文件对应的 `html`。在总的 `index` 文件里面会有每个子 `html` 的索引。子 `html` 文件和 `index.html` 放在同一个目录。

子 `html` 文件名是由目录和文件名由下划线拼接起来。如源文件是 `src/main.cj`，生成的 `html` 名字为 `src_main.cj.html`。如果源文件路径带有特殊字符会被替换成 `=`，下文[文件名包含特殊字符](#文件名包含特殊字符)章节会有更详细的描述。

如果没有指定该参数，表示不会生成子 `html` 。在总的 `index` 文件里面会显示每个子 `html` 的覆盖率数据，但是不能跳转到对应的子 `html` 文件。

该参数默认不生效。即默认只会生成一个 `index.html`, 不会生成子 `html` 文件。

### cjcov -x | --xml

如果指定该参数，则会在指定输出路径生成 `coverage.xml` 文件，`coverage.xml` 记录的是所有文件的覆盖率数据。

### cjcov -j | --json

如果指定该参数，则会在指定输出路径生成 `coverage.json` 文件，`coverage.json` 记录的是所有文件的覆盖率数据。

### cjcov -k |  --keep

指定该参数后则不会删除生成的 `gcov` 中间文件。如果 `gcov` 文件不删除，会造成执行次数的累加，可能会影响覆盖率数据的准确性。

默认该参数不生效，即默认会删除 `gcov` 中间文件。

### cjcov -b | --branches

指定该参数后则会生成分支覆盖率信息。

默认该参数不生效，即默认不生成分支的覆盖率信息，此时在 `html` 报告中的分支覆盖率数据百分比显示为 `-`。

### cjcov -r ROOT | --root=ROOT

该参数指定的 `ROOT` 参数，表示在 `ROOT` 目录或者在其递归子目录能找到 `gcda` 文件，`gcda` 和 `gcno` 文件默认会生成在一起，建议不要手动特意去把 `gcda` 文件和 `gcno` 文件分开存放，不然可能会发生程序不能运行的情况。

参数指定的 `ROOT` 目录如果不存在，`cjcov` 工具会有报错提示。

不指定该参数，默认会以当前目录为 `ROOT` 目录。

### cjcov -o OUTPUT |  --output=OUTPUT

该参数指定的 `OUTPUT` 参数，表示 `html` 覆盖率报告的输出路径。

如果该 `OUTPUT` 目录不存在，而且其父目录也不存在，`cjcov` 工具会有报错提示；如果 `OUTPUT` 目录不存在，但其父目录存在，`cjcov` 会帮助创建 `OUTPUT` 目录。

不指定该参数，默认会以当前目录为 `OUTPUT` 目录来存放 `html` 文件。

### -s SOURCE | --source=SOURCE

该参数指定的 `SOURCE` 参数，表示仓颉源文件的代码路径，`html` 总覆盖率报告 `index.html` 会有各个源文件的索引，这些文件路径记录的是一个相对路径。如果指定 `-s SOURCE |--source SOURCE` 参数，优先以 `SOURCE` 路径列表中的路径作为相对路径的参考路径，如果没有指定该参数，则以 `-r ROOT | --root=ROOT` 作为相对路径的参考路径，如果都没有指定，则以当前路径作为相对路径的参考路径。

示例：

仓颉代码目录结构如下：

```text
/work/cangjie/tests/API/test01/src/1.cj
/work/cangjie/tests/API/test01/src/2.cj
/work/cangjie/tests/cjnative/test02/src/3.cj
/work/cangjie-tools/tests/cjnative/test01/src/4.cj
/work/cangjie-tools/tests/cjnative/test02/src/5.cj
```

1. 在 `/work` 目录执行命令：

    ```shell
    cjcov --root=./ -s "/work/cangjie /work/cangjie-tools/tests" --html-details --output=html_output
    ```

    最后 html 中呈现的源文件相对路径是：

    ```text
    tests/API/test01/src/1.cj
    tests/API/test01/src/2.cj
    tests/cjnative/test02/src/3.cj
    cjnative/test01/src/4.cj
    cjnative/test02/src/5.cj
    ```

2. 在 `/work` 目录执行命令, 没有指定 `--root` 参数和 `--source` 参数，默认当前所在路径为相对路径的参考路径，执行命令如下：

    ```shell
    cjcov --html-details --output=html_output
    ```

    最后 html 中呈现的源文件相对路径是：

    ```text
    cangjie/tests/API/test01/src/1.cj
    cangjie/tests/API/test01/src/2.cj
    cangjie/tests/cjnative/test02/src/3.cj
    cangjie-tools/tests/cjnative/test01/src/4.cj
    cangjie-tools/tests/cjnative/test02/src/5.cj
    ```

### -e EXCLUDE | --exclude=EXCLUDE

该参数指定的 `EXCLUDE` 参数，表示不需要生成覆盖率信息的源文件列表，支持指定目录和文件。

示例：

仓颉代码目录结构如下：

```text
/usr1/cangjie/tests/API/test01/src/1.cj
/usr1/cangjie/tests/API/test01/src/2.cj
/usr1/cangjie/tests/cjnative/test02/src/3.cj
/usr1/cangjie-tools/tests/cjnative/test01/src/4.cj
/usr1/cangjie-tools/tests/cjnative/test02/src/5.cj
```

在 `/usr1` 目录执行命令：

```shell
cjcov --root=./ -s "/usr1/cangjie" -e "/usr1/cangjie-tools/tests/cjnative" --html-details --output=html_output
```

最后 `html` 中呈现的源文件相对路径是,其中以 `/usr1/cangjie-tools/tests/cjnative` 路径开头的文件不会出现在 `html` 的文件列表中。

```text
tests/API/test01/src/1.cj
tests/API/test01/src/2.cj
tests/cjnative/test02/src/3.cj
```

### -i INCLUDE | --include=INCLUDE

该参数指定的 `INCLUDE` 参数，表示以 `INCLUDE` 开头的文件会显示在 `index.html` 的文件列表中，支持指定目录和文件。如果 `-e | --exclude` 和 `-i | --include` 指定的参数有路径重复，会有报错提示。

示例：

仓颉代码目录 `/usr1/cangjie/tests` 结构如下：

```text
├── API
│   └── test01
│       └── src
│           ├── 1.cj
│           └── 2.cj
└── cjnative
    └── test02
        └── src
            └── 3.cj
```

在 `/usr1` 目录执行命令, 其中 `-i` 参数表示需要体现在覆盖率报告 `index.html` 的文件，命令如下：

```shell
cjcov --root=./ -s "/usr1/cangjie" -i "/usr1/cangjie/tests/API/test01/src/1.cj /usr1/cangjie/tests/cjnative/test02" --html-details --output=html_output
```

上面命令执行后, 在 `index.html` 中文件路径列表如下(`tests/API/test01/src/2.cj` 不在 `-i` 参数指定的列表里面，所以不会出现在 `html` 的文件列表中):

```text
tests/API/test01/src/1.cj
tests/cjnative/test02/src/3.cj
```

## 特殊场景

### 二进制无法正常执行结束

对于常驻的网络服务程序无法正常结束二进制文件并生成 `gcda` 覆盖率数据的场景，需要手动执行退出脚本生成 `gcda` 覆盖率数据。

1）将以下脚本内容保存为 `stop.sh`（此脚本执行依赖 `gdb`）

```shell
#!/bin/sh
SERVER_NAME=$1

pid=`ps -ef | grep $SERVER_NAME | grep -v "grep" | awk '{print $2}'`
echo $pid
gdb -q attach $pid <<__EOF__
p exit(0)
__EOF__
```

2）常驻服务程序完成业务逻辑操作覆盖后，执行 `stop.sh {service_name}`，如通过 `./main` 启动常驻服务进程，通过如下方式停止进程产生 `gcda` 数据

```shell
sh stop.sh ./main
```

### 文件名包含特殊字符

建议遵循仓颉编程规范命名文件，不建议包含除 [0-9a-zA-Z_] 之外的字符，特殊字符会被替换成 `=`。

如果文件名有特殊字符，为保证 `html` 跳转正确，`index.html` 中呈现的 `html` 名字和 `html` 本身文件名会不一致，`html` 文件名的特殊字符都会被替换成 `=`。

示例如下：

代码结构：

```text
src
├── 1file#.cj
├── file10_abc.cj
├── file11_.aaa-bbb.cj
├── file12!#aaa!bbb.cj
├── file13~####.cj
├── file14*aa.cj
├── file15`.cj
├── file16(#).cj
├── file2;aa.cj
├── file3,?.cj
├── file4@###.cj
├── file5&cc.cj
├── file6=.cj
├── file7+=.cj
├── file8$.cj
├── file9-aaa.cj
└── main.cj
```

生成 html 文件名，其中除了 `[0-9a-zA-Z_.=]` 之外，其他特殊字符都被替换成了 `'='`：

```text
.
├── index.html
├── src_1file=.cj.html
├── src_file10_abc.cj.html
├── src_file11_.aaa=bbb.cj.html
├── src_file12==aaa=bbb.cj.html
├── src_file13=####.cj.html
├── src_file14=aa.cj.html
├── src_file15=.cj.html
├── src_file16===.cj.html
├── src_file2=aa.cj.html
├── src_file3==.cj.html
├── src_file4=###.cj.html
├── src_file5=cc.cj.html
├── src_file6=.cj.html
├── src_file7==.cj.html
├── src_file8=.cj.html
├── src_file9=aaa.cj.html
└── src_main.cj.html
```

### 分支覆盖率功能

分支覆盖率是一个试验阶段的功能，会出现分支覆盖率数据不准确的情况。

目前已知会出现分支覆盖率数据不准确的场景包含以下几种表达式：

- `try-catch-finally` 表达式

- 循环表达式（包括 `for` 表达式、`while` 表达式）

- `if-else` 表达式

### 部分代码未记录到行覆盖率数据中

部分代码不会记录到行覆盖率数据中，属于正常情况。整体而言，如果一行代码*仅包含定义、声明*而没有实际的可执行代码，那么这一行代码不会被统计到覆盖率中。目前已知不会统计的场景有：

- 全局变量的定义，示例如下：

    ```cangjie
    let HIGH_1_UInt8: UInt8 = 0b10000000;
    ```

- 成员变量仅声明未初始化赋值，示例如下：

    ```cangjie
    public class StringBuilder <: Collection & ToString {
        private var myData: Array
        private var mySize: Int64
        private var endIndex: Int64
    }
    ```

- 仅有函数声明未包含函数体（包括 `foreign` 函数等），示例如下：

    ```cangjie
    foreign func cj_core_free(p: CPointer): Unit
    ```

- 枚举类型定义，示例如下：

    ```cangjie
    enum Numeric {
        NumDay | NumYearDay | NumYearWeek | NumHour12 | NumHour24 | NumMinute | NumSecond
    }
    ```

- class、extend 等定义，其中 extend 和 class 所在的一行不会记录到覆盖率数据中，示例如下：

    ```cangjie
    extend Int8 <: Formatter { // This line wil not account for the coverage.
      ...
    }

    public class StringBuilder <: Collection & ToString { // This line will not account for the coverage.
       ...
    }
    ```

### 源代码中的 `main` 函数未被覆盖

**原因：** 使用 `cjc --test` 编译，仓颉测试框架会生成一个新的 `main` 作为程序入口，源代码中的 `main` 不再作为程序入口并且不会被执行。

**建议：** 在使用 `cjc --test` 之后，建议不用再手写多余的 `main` 。

## FAQ

### 报错找不到 `llvm-cov` 命令

**解决方法：**

方法 1：设置 `CANGJIE_HOME` 环境变量, `cjcov` 可通过 `CANGJIE_HOME` 环境变量找到 `llvm-cov` 命令，设置方法如下：
假设 `which cjc` 显示 `/work/cangjie/bin/cjc`, 并且 `/work/cangjie/bin/llvm/bin` 和 `/work/cangjie/bin/llvm/lib` 目录都存在，则可设置：

```shell
export CANGJIE_HOME=/work/cangjie
```

方法 2：在 `/root/.bashrc` 里面直接设置环境变量，如 `cjc` 放在 `/work/cangjie/bin/cjc` 目录下，则设置方法如下：

```shell
export PATH=/work/cangjie/bin/llvm/bin:$PATH
export LIBRARY_PATH=/work/cangjie/bin/llvm/lib:$LIBRARY_PATH
export LD_LIBRARY_PATH=/work/cangjie/bin/llvm/lib:$LD_LIBRARY_PATH
```

方法 3：手动安装 `llvm-cov` 命令，如 `ubuntu` 上可执行命令：

```shell
apt install llvm-cov
```

### 出现 VirtualMachineError OutOfMemoryError

**问题现象：**

```text
An exception has occurred:
Error VirtualMachineError OutOfMemoryError
```

**解决方法：** 仓颉默认规格  stack 1MB，heap 256 MB，建议根据文件数量大小将堆内存调到合适的大小。通常 2GB 的内存能够满足大多数情况，如果不够用则根据具体情况再增加内存大小。

示例：

```text
把堆内存扩大到2GB：
export cjHeapSize=2GB
```


### tools/cjdb_manual_cjnative.md

# 调试工具

## 功能简介

`CJDB` 是一款基于 `lldb` 开发的仓颉程序命令行调试工具，为仓颉开发者提供程序调试的能力，特性列表如下：

- 调试器启动被调程序（launch，attach）
- 源码断点/函数断点/条件断点（breakpoint）
- 观察点（watchpoint）
- 程序运行（s，n， finish， continue）
- 变量查看/变量修改（print，set）
- 表达式计算（expr）
- 仓颉线程查看（cjthread）

## 使用说明

### 调试器加载被调程序（launch，attach）

#### launch 方式加载被调程序

launch 方式有两种加载方式，如下：

1. 启动调试器的同时加载被调程序。

    ```text
    ~/0901/cangjie_test$ cjdb test
    (cjdb) target create "test"
    Current executable set to '/0901/cangjie-linux-x86_64-release/bin/test' (x86_64).
    (cjdb)
    ```

2. 先启动调试器，然后通过 `file` 命令加载被调程序。

    ```text
    ~/0901/cangjie_test$ cjdb
    (cjdb) file test
    Current executable set to '/0901/cangjie/test' (x86_64).
    (cjdb)
    ```

#### attach 方式调试被调程序

针对正在运行的程序，支持 attach 方式调试被调程序，如下：

```text
~/0901/cangjie-linux-x86_64-release/bin$ cjdb
(cjdb) attach 15325
Process 15325 stopped
* thread #1, name = 'test', stop reason = signal SIGSTOP
    frame #0: 0x00000000004014cd test`default.main() at test.cj:7:9
   4      var a : Int32 = 12
   5      a = a + 23
   6      while (true) {
-> 7        a = 1
   8      }
   9      a = test(10, 34)
   10     return 1
  thread #2, name = 'FinalProcessor', stop reason = signal SIGSTOP
    frame #0: 0x00007f48c12fc065 libpthread.so.0`__pthread_cond_timedwait at futex-internal.h:205
  thread #3, name = 'PoolGC_1', stop reason = signal SIGSTOP
    frame #0: 0x00007f48c12fbad3 libpthread.so.0`__pthread_cond_wait at futex-internal.h:88
  thread #4, name = 'MainGC', stop reason = signal SIGSTOP
    frame #0: 0x00007f48c12fc065 libpthread.so.0`__pthread_cond_timedwait at futex-internal.h:205
  thread #5, name = 'schmon', stop reason = signal SIGSTOP
    frame #0: 0x00007f48c0fe17a0 libc.so.6`__GI___nanosleep(requested_time=0x00007f48a8ffcb70, remaining=0x0000000000000000) at nanosleep.c:28

Executable module set to "/0901/cangjie-linux-x86_64-release/bin/test".
Architecture set to: x86_64-unknown-linux-gnu.
```

### 设置断点

#### 设置源码断点

```text
breakpoint set --file test.cj --line line_number
```

`--line` 指定行号。

`--file` 指定文件。

对于单文件，只需要输入行号即可，对于多文件，需要加上文件名字。

`b test.cj:4` 是 `breakpoint set --file test.cj --line 4` 的缩写。

例：**breakpoint set --line 2**

```text
(cjdb) b 2
Breakpoint 1: where = test`default.main() + 13 at test.cj:4:3, address = 0x0000000000401491
(cjdb) b test.cj : 4
Breakpoint 2: where = test`default.main() + 13 at test.cj:4:3, address = 0x0000000000401491
(cjdb)
```

#### 设置函数断点

```text
breakpoint set --name function_name
```

`--name` 指定要设置函数断点的函数名。

`b test` 是 `breakpoint set --name test` 的缩写。

例：**breakpoint set --name test**

```text
(cjdb) b test
Breakpoint 3: where = test`default.test(int, int) + 19 at test.cj:12:10, address = 0x0000000000401547
(cjdb)
```

#### 设置条件断点

```text
breakpoint set --file xx.cj --line line_number --condition expression
```

`--file` 指定文件。

`--line` 指定行号。

`--condition` 指定条件。

例：**breakpoint set --file test.cj --line 4 --condition a==12**

```text
(cjdb) breakpoint set --file test.cj --line 4 --condition a==12
Breakpoint 2: where = main`default::main() + 60 at test.cj:4:9, address = 0x00005555555b62d0
(cjdb) c
Process 3128551 resuming
Process 3128551 stopped
* thread #1, name = 'schmon', stop reason = breakpoint 2.1
    frame #0: 0x00005555555b62d0 main`default::main() at test.cj:4:9
   1    main(): Int64 {
   2
   3        var a : Int32 = 12
-> 4        a = a + 23
   5        return 1
   6    }
```

### 设置观察点

```text
watchpoint set variable -w read variable_name
```

`-w` 指定观察点点类型，有 `read`、`write`、`read_write` 三种类型。

`wa s v`是`watchpoint set variable`的缩写。

例：**watchpoint set variable -w read a**

```text
(cjdb) wa s v -w read a
Watchpoint created: Watchpoint 1: addr = 0x7fffddffed70 size = 8 state = enabled type = r
    declare @ 'test.cj:27'
    watchpoint spec = 'a'
    new value: 10
(cjdb)
```

只支持在基础类型设置观察点。在 `Windows` 上程序的观察点设置条件时，程序最多只会暂停一次。

### 启动被调程序

执行 `r（run）`命令：

```text
(cjdb) r
Process 2884 launched: '/0901/cangjie-linux-x86_64-release/bin/test' (x86_64)
Process 2884 stopped
* thread #1, name = 'test', stop reason = breakpoint 1.1 2.1
    frame #0: 0x0000000000401491 test`default.main() at test.cj:4:3
   1
   2    main(): Int64 {
   3
-> 4        var a : Int32 = 12
   5        a = a + 23
   6        a = test(10, 34)
   7
```

可以看到程序停到初始化断点处。

### 执行

#### 单步执行，`n（next）`

```text
(cjdb) n
Process 2884 stopped
* thread #1, name = 'test', stop reason = step over
    frame #0: 0x0000000000401498 test`default.main() at test.cj:5:7
   2    main(): Int64 {
   3
   4       var a : Int32 = 12
-> 5       a = a + 23
   6       a = test(10, 34)
   7       return 1
   8    }
(cjdb)
```

从第 4 行运行到第 5 行。

#### 执行到下一个断点停止，`c（continue）`

```text
(cjdb) c
Process 2884 resuming
Process 2884 stopped
* thread #1, name = 'test', stop reason = breakpoint 3.1
    frame #0: 0x0000000000401547 test`default.test(a=10, b=34) at test.cj:12:10
   9
   10   func test(a : Int32, b : Int32) : Int32 {
   11
-> 12     return a + b
   13   }
   14
(cjdb)
```

#### 函数进入，`s`

```text
(cjdb) n
Process 5240 stopped
* thread #1, name = 'test', stop reason = step over
    frame #0: 0x00000000004014d8 test`default.main() at test.cj:6:7
   3
   4      var a : Int32 = 12
   5      a = a + 23
-> 6      a = test(10, 34)
   7      return 1
   8    }
   9
(cjdb) s
Process 5240 stopped
* thread #1, name = 'test', stop reason = step in
    frame #0: 0x0000000000401547 test`default.test(a=10, b=34) at test.cj:12:10
   9
   10   func test(a : Int32, b : Int32) : Int32 {
   11
-> 12     return a + b
   13   }
   14
(cjdb)
```

当遇到函数调用的时候，可通过 `s` 命令进入到被调函数的定义声明处。

#### 函数退出，`finish`

```text
(cjdb) s
Process 5240 stopped
* thread #1, name = 'test', stop reason = step in
    frame #0: 0x0000000000401547 test`default.test(a=10, b=34) at test.cj:12:10
   9
   10   func test(a : Int32, b : Int32) : Int32 {
   11
-> 12     return a + b
   13   }
   14
(cjdb) finish
Process 5240 stopped
* thread #1, name = 'test', stop reason = step out

Return value: (int) $0 = 44

    frame #0: 0x00000000004014dd test`default.main() at test.cj:6:7
   3
   4      var a : Int32 = 12
   5      a = a + 23
-> 6      a = test(10, 34)
   7      return 1
   8    }
   9
(cjdb)
```

执行 `finish` 命令，退出当前函数，返回到上一个调用栈函数。

### 变量查看

#### 查看局部变量，`locals`

```text
(cjdb) locals
(Int32) a = 12
(Int64) b = 68
(Int32) c = 13
(Array<Int64>) array = {
  [0] = 2
  [1] = 4
  [2] = 6
}
(pkgs.Rec) newR2 = {
  age = 5
  name = "string"
}
(cjdb)
```

当调试器停到程序的某个位置时，使用 `locals` 可以看到程序当前位置所在函数生命周期范围内，所有的局部变量，只能正确查看当前位置已经初始化的变量，当前未初始化的变量无法正确查看。

#### 查看单个变量，`print variable_name`

例：**print b**

```text
(cjdb) print b
(Int64) $0 = 110
(cjdb)
```

使用`print`命令(简写`p`)，后跟要查看具体变量的名字。

##### 查看 String 类型变量

```text
(cjdb) print newR2.name
(String) $0 = "string"
(cjdb)
```

##### 查看 struct、class 类型变量

```text
(cjdb) print newR2
(pkgs.Rec) $0 = {
  age = 5
  name = "string"
}
(cjdb)
```

##### 查看数组

```text
(cjdb) print array
(Array<Int64>) $0 = {
  [0] = 2
  [1] = 4
  [2] = 6
  [3] = 8
}
(cjdb) print array[1..3]
(Array<Int64>) $1 = {
  [1] = 4
  [2] = 6
}
(cjdb)
```

支持查看基础类型（Int8，Int16，Int32，Int64，UInt8，UInt16，UInt32，UInt64，Float16，Float32，Float64，Bool，Unit，Rune）。

支持范围查看，区间 `[start..end)` 为左闭右开区间，暂不支持逆序。

对于非法区间或对非数组类型查看区间会有报错提示。

```text
(cjdb) print array
(Array<Int64>) $0 = {
  [0] = 0
  [1] = 1
}
(cjdb) print array[1..3]
error: unsupported expression
(cjdb) print array[0][0]
error: unsupported expression
```

##### 查看 CString 类型变量

```text
(cjdb) p cstr
(cro.CString) $0 = "abc"
(cjdb) p cstr
(cro.CString) $1 = null
```

#### 查看全局变量，`globals`

```text
(cjdb) globals
(Int64) pkgs.Rec.g_age = 100
(Int64) pkgs.g_var = 123
(cjdb)
```

使用 `print` 命令查看单个全局变量时，不支持 `print` + 包名 + 变量名查看全局变量，仅支持 `print` + 变量名 进行查看，例如查看全局变量 `g_age` 应该用如下命令查看。

```text
(cjdb) p g_age
(Int64) $0 = 100
(cjdb)
```

### 变量修改

```text
(cjdb) set a=30
(Int32) $4 = 30
(cjdb)
```

可以使用 `set` 修改某个局部变量的值，只支持基础数值类型（Int8，Int16，Int32，Int64，UInt8，UInt16，UInt32，UInt64，Float32，Float64）。

对于 `Bool` 类型的变量，可以使用数值 0（false）和非 0（true）进行修改，`Rune` 类型变量，可以使用对应的 `ASCII` 码进行修改。

```text
(cjdb) set b = 0
(Bool) $0 = false
(cjdb) set b = 1
(Bool) $1 = true
(cjdb) set c = 0x41
(Rune) $2 = 'A'
(cjdb)
```

如果修改的值为非数值，或是超出变量的范围，则会报错提示。

```text
(cjdb) p c
(Rune) $0 = 'A'
(cjdb) set c = 'B'
error: unsupported expression
(cjdb) p b
(Bool) $1 = false
(cjdb) set b = true
error: unsupported expression
(cjdb) p u8
(UInt8) $3 = 123
(cjdb) set u8 = 256
error: unsupported expression
(cjdb) set u8 = -1
error: unsupported expression
```

### 表达式计算

#### 查看字面量

例：**expr 3**

```text
(cjdb) expr 3
(Int64) $0 = 3
(cjdb)
```

#### 查看变量名

例：**expr a**

```text
(cjdb) expr a
(Int64) $0 = 3
(cjdb)
```

#### 查看算术表达式

例：**expr a + b**

```text
(cjdb) expr a + b
(Int64) $0 = 3
(cjdb)
```

#### 查看关系表达式

例：**expr a > b**

```text
(cjdb) expr a > b
(Bool) $0 = false
(cjdb)
```

#### 查看逻辑表达式

例：**expr a && b**

```text
(cjdb) expr true && false
(Bool) $0 = false
(cjdb)
```

#### 查看后缀表达式

例：**expr a.b**

```text
(cjdb) expr value.member
(Int64) $0 = 1
(cjdb)
```

例：**expr a[b]**

```text
(cjdb) expr array[2]
(Int64) $0 = 3
(cjdb)
```

#### 查看泛型实例化变量

例：**expr a**

```text
(cjdb) expr a
(default.A<Int32>) $0 = {
  member = 1
}
(cjdb)
```

支持的表达式计算：包含但不限于字面量、变量名、括号表达式、算术表达式、关系表达式、条件表达式、循环表达式、成员访问表达式、索引访问表达式、区间表达式、位运算表达式、泛型实例化变量等。

> **注意：**
>
> 不支持的表达式计算：带命名参数的函数调用、互操作、扩展、属性、别名、插值字符串、函数名， `Windows` 平台不支持 Float16 类型，且不支持异常抛出。

### 仓颉线程查看

支持查看仓颉线程 `id` 状态以及 `frame` 信息，暂不支持仓颉线程切换。

#### 查看所有仓颉线程

```text
(cjdb) cjthread list
cjthread id: 1, state: running name: cjthread1
    frame #0: 0x000055555557c140 main`ab::main() at varray.cj:16:1
cjthread id: 2, state: pending name: cjthread2
    frame #0: 0x00007ffff7d8b9d5 libcangjie-runtime.so`CJ_CJThreadPark + 117
(cjdb)
```

#### 查看仓颉线程调用栈

查看指定仓颉线程调用栈。

```text
(cjdb) cjthread backtrace 1
cjthread #1 state: pending name: cangjie
  frame #0: 0x00007ffff7d8b9d5 libcangjie-runtime.so`CJ_CJThreadPark + 117
  frame #1: 0x00007ffff7d97252 libcangjie-runtime.so`CJ_TimerSleep + 66
  frame #2: 0x00007ffff7d51b5d libcangjie-runtime.so`CJ_MRT_FuncSleep + 33
  frame #3: 0x0000555555591031 main`std/sync::sleep(std/time::Duration) + 45
  frame #4: 0x0000555555560941 main`default::lambda.0() at complex.cj:9:3
  frame #5: 0x000055555555f68b main`default::std/core::Future<Unit>::execute(this=<unavailable>) at future.cj:124:35
  frame #6: 0x00007ffff7d514f1 libcangjie-runtime.so`___lldb_unnamed_symbol1219 + 7
  frame #7: 0x00007ffff7d4dc52 libcangjie-runtime.so`___lldb_unnamed_symbol1192 + 114
  frame #8: 0x00007ffff7d8b09a libcangjie-runtime.so`CJ_CJThreadEntry + 26
(cjdb)
```

`cjthread backtrace 1` 命令中 `1` 为指定的 `cjthread ID`。

## 注意事项

1. 进行调试的程序必须是已经经过编译的 `debug` 版本，如使用下述命令编译的程序文件：

    ```shell
    cjc -g test.cj -o test
    ```

2. 开发者定义了一个泛型对象后，调试单步进入该对象的 `init` 函数时，栈信息显示的函数名称会包含两个包名，一个是实例化该泛型对象所在的包名，另外一个是泛型定义所在的包名。

    ```text
    * thread #1, name = 'main', stop reason = step in
        frame #0: 0x0000000000404057 main`default.p1.Pair<String, Int64>.init(a="hello", b=0) at a.cj:21:9
       18       let x: T
       19       let y: U
       20       public init(a: T, b: U) {
    -> 21           x = a
       22           y = b
       23       }
    ```

3. 对于 `Enum` 类型的显示，如果该 `Enum` 的构造器存在参数的情况下，会显示成如下样式：

    ```cangjie
    enum E {
        Ctor(Int64, String) | Ctor
    }

    main() {
        var temp = E.Ctor(10, "String")
        0
    }

    ========================================
    (cjdb) p temp
    (E) $0 = Ctor {
      arg_1 = 10
      arg_2 = "String"
    }
    ```

    其中 `arg_x` 并非是一个可打印的成员变量，`Enum` 内实际并没有命名为 `arg_x` 的成员变量。

4. 仓颉 `CJDB` 基于 `lldb` 构建，所以支持 `lldb` 原生基础功能，详情见 [lldb 官方文档](https://lldb.llvm.org)。

5. 仓颉 `CJDB` 基于 `LLVM 15.0.4` 版本构建的，如果用户在高于该版本的系统环境上运行时可能会出现不兼容的问题和风险，如 `C` 语言互操作场景， cjdb 无法正常解析 `C` 代码的文件和行号信息。

    ```cffi.c
    int32_t cfoo()
    {
        printf("cfoo\n");
        return 0;
    }
    ```

    ```test.cj
    foreign func cfoo(): Int32
    unsafe main() {
        cfoo()
    }
    ```

    ```shell
    // step 1: 使用系统自带 clang 版本编译 c 文件，生成 dylib
    clang -g -shared cffi.c -o libcffi.dylib
    // step 2: 使用 cjc 版本编译 cj 文件并连接 c 语言动态库
    cjc -g test.cj -L. -lcffi -o test
    // step 3: 使用 cjdb 调试 test 文件，由于调试信息不兼容导致无法调试 c 代码
    cjdb test
    ```

    ```text
    (cjdb) target create "test"
    Current executable set to 'test' (x86_64).
    (cjdb) b cfoo
    Breakpoint 1: where = libcffi.dylib`cfoo + 4, address = 0x0000000000000f84
    (cjdb) r
    Process 3133 launched: 'test' (x86_64)
    Process 3133 stopped
    * thread #1, queue = 'com.apple.main-thread', stop reason = breakpoint 1.1
        frame #0: 0x00000001000a6f84 libcffi.dylib`cfoo
      1    foreign func cfoo(): Int32
      2    unsafe main() {
      3        cfoo()
    -> 4    }
    ```

## FAQ

1. `docker` 环境下 cjdb 报 `error: process launch failed: 'A' packet returned an error: 8`。

    ```text
    root@xxx:/home/cj/cangjie-example#cjdb ./hello
    (cjdb) target create "./hello"
    Current executable set to '/home/cj/cangjie-example/hello' (x86_64).
    (cjdb) b main
    Breakpoint 1: 2 locations.
    (cjdb) r
    error: process launch failed: 'A' packet returned an error: 8
    (cjdb)
    ```

    问题原因：`docker` 创建容器时，未开启 SYS_PTRACE 权限。

    解决方案：创建新容器时加上如下选项，并且删除已存在容器。

    ```shell
    docker run --cap-add=SYS_PTRACE --security-opt seccomp=unconfined --security-opt apparmor=unconfined
    ```

2. cjdb 报 `stop reason = signal XXX`。

    ```text
    Process 32491 stopped
    * thread #2, name = 'PoolGC_1', stop reason = signal SIGABRT
        frame #0: 0x00007ffff450bfb7 lib.so.6`__GI_raise(sig=2) at raise.c:51
    ```

    问题原因：程序持续产生 `SIGABRT` 信号触发调试器暂停。

    解决方案：可执行如下命令屏蔽此类信号。

    ```text
    (cjdb) process handle --pass true --stop false --notify true SIGBUS
    NAME         PASS   STOP   NOTIFY
    ===========  =====  =====  ======
    SIGBUS       true   false  true
    (cjdb)
    ```

3. cjdb 没有捕获 `SIGSEGV` 信号。

    问题原因：cjdb 在启动时会默认不捕获 `SIGSEGV` 信号。

    解决方案：开发者如果需要在调试时捕获此信号，可使用如下命令重新设置。

    ```text
    (cjdb)process handle -p true -s true -n true SIGSEGV
    NAME         PASS   STOP   NOTIFY
    ===========  =====  =====  ======
    SIGSEGV      true   true   true
    (cjdb)
    ```

4. cjdb 无法通过 `next/s` 等调试指令进入 `catch` 块。

    问题原因：仓颉使用 `LLVM` 的 `LandingPad` 机制来实现异常处理，而该机制无法通过控制流明确 `try` 语句块中抛出的异常会由哪一个 `catch` 语句块捕获，所以无法明确执行的代码。类似问题在 `clang++` 中也存在。

    解决方案：开发者如果需要调试 `catch` 块中的代码，可以在 `catch` 中打上断点。

    ```text
    (cjdb) b 31
    Breakpoint 2: where = main`default::test(Int64) + 299 at a.cj:31:18, address = 0x000055555557caff
    (cjdb) n
    Process 1761640 stopped
    * thread #1, name = 'schmon', stop reason = breakpoint 2.1
        frame #0: 0x000055555557caff main`default::test(a=0) at a.cj:31:18
      28      s = 12/a
      29    } catch (e:Exception) {
      30
    ->31     error_result = e.toString()
      32     println(error_result)
      33    }
      34    s
    (cjdb)
    ```

5. `macOS` 平台表达式计算报错 `Expression can't be run, because there is no JIT compiled function` 。

    问题原因：表达式暂不支持在 `macOS` 平台使用。

6. `macOS` 平台表达式计算 `aarch64` 架构有一部分环境调试时报 `Connection shut down by remote side while waiting for reply to initial handshake packet` 。

    问题原因：部分系统会导致调试服务异常退出。

    解决方案：删除 `third_party/llvm/bin/debugserver` 文件，重新启动调试。

7. 在打断点调试时，如果该断点处有泛型变元，则泛型变元的名字为 T0, T1, ... Tn。举例如下：

    ```cangjie
    func global_func_02<K, G>() { 0 }
    public struct Pair<T, U> {
        let x: T
        let y: U
        public init(a: T, b: U) {
            x = a
            y = b
        }
    }
    main() {
        var a: Pair<String, Int64> = Pair<String, Int64>("hello", 0)
        global_func_02<Int64, String>()
        0
    }

    ========================================
    (cjdb) b 1
    Breakpoint 1: where = main`default::global_func_02<T0,T1>() + 9 at test.cj:1:33, address = 0x0000000000019989
    (cjdb) b 6
    Breakpoint 2: where = main`default::Pair<T0,T1>::init(T0, T1) + 150 at test.cj:6:9, address = 0x000000000001982a
    ```

  问题原因：仓颉为了满足泛型变元的 ABI 兼容，即用户侧泛型变元改变，仓颉侧二进制符号表中的符号名不变。

  解决方案：将用户编写的泛型变元的名称修改为 T0, T1, ... Tn。

## 附录

**cjdb 特有命令**

| 命令      | 简写 | 简要描述       | 参数说明                                  |
| --------- | ---- | -------------- | ----------------------------------------- |
| globals   | 无   | 查看全局变量   | 无参数                                    |
| locals    | 无   | 查看局部变量   | 无参数                                    |
| print     | p    | 查看单个变量   | 参数为变量名称，例 print variable_name     |
| exprssion | expr | 查看表达式     | 参数为表达式，例 expr variable_name + 1    |
| set       | 无   | 修改变量       | 参数为表达式，例 set variable_name = value |
| finish    | 无   | 函数退出       | 无参数                                    |
| cjthread  | 无   | 轻量级线程查看 | 无参数                                    |


*... and 6 more files in docs/tools/*


## Examples

<details>
<summary>Click to expand file list</summary>

- `Array.md`
- `ArrayList.md`
- `Collection.md`
- `Function.md`
- `HashMap.md`
- `HashSet.md`
- `Numbers.md`
- `Option.md`
- `Rune.md`
- `Sorting.md`
- `String.md`
- `Tuple.md`

</details>

### Array.md

## struct Array

Arrays have fixed length and can contain elements of any particular type `T`. Arrays with
element type `T` has type `Array<T>`. If arrays with dynamic length are needed, use `ArrayList`
(and import `std.collection.*`) instead.

### Initialization

Ways to initialize an `Array` include:

```
let a: Array<Int64> = [1, 2, 3] // Array whose element type is Int64
let b: Array<String> = ["a1", "a2", "a3"] // Array whose element type is String
let c = Array<Int64>() // Created an empty Array whose element type is Int64
let d = Array<Int64>(3, repeat: 0) // Created an Array whose element type is Int64, length is 3 and all elements are initialized as 0
let e = Array<Int64>(3, {i => i + 1}) // Created an Array whose element type is Int64, length is 3 and all elements are initialized by the initialization function. Result is [1, 2, 3]
```

### Size

To obtain the length of an `Array`, use syntax of the form `arr.size`. Note `size` is a
property, so no parenthesis is needed afterwards.

### Comparing two arrays for equality

To compare two arrays for equality, use `a == b`. Note `a.equals(b)` is not valid.

### Slice of an `Array`

The slice function on `Array` has the following signature:

```
public func slice(start: Int64, len: Int64): Array<T>
```

Note carefully that the second argument is the *length* of the slice, rather than the ending
position. This is *different* form the case of `slice` in `ArrayList`, which takes a range
as argument.

### Iteration

To iterate over elements of an array, use:

```
for (element in arr) {
    ...
}
```

Note there is no pattern matching before `in`. If the elements of an array are tuples,
access entries of the tuple individually, e.g.:

```
var a = [(2, 3), (3, 4)]
for (pair in a) {
    println("(${pair[0]}, ${pair[1]})")
}
```

### Reversing an `Array`

To reverse an array in-place, call `reverse` method on the array, Note this function
modifies the input array and returns `Unit`. To obtain a new array that is the reverse
of an old array, first copy the old array and then call `reverse`. The following illustrates
the usage:

```
let a = [1, 1, 2, 3, 3]
let b = a.clone()  // make a copy of a
b.reverse()
println(a)   // [1, 1, 2, 3, 3]
println(b)   // [3, 3, 2, 1, 1]
```

As an application, the following checks whether the input string `s` is a palindrome:


```
func isPalindrome(s: String): Bool {
    let arr = s.toRuneArray()
    let arr2 = arr.clone()
    arr2.reverse()
    return arr == arr2
}

main() {
    println(isPalindrome("aba"))  // true
    println(isPalindrome("hello"))  // false
}
```

### ArrayList.md

## ArrayList

To use the ArrayList type, the collection package needs to be imported:

```
import std.collection.*
```

### Initialization

Ways to initialize an `ArrayList` include:

```
let a = ArrayList<Int64>([1, 2, 3])  // Initialize using a concrete list
let c = ArrayList<Int64>(3, {i => i + 1})   // Initialize using lambda function, result is [1, 2, 3]
let d = ArrayList<String>()  // Created an empty ArrayList whose element type is String
let e = ArrayList<String>(100)  // Created an empty ArrayList whose element type is String, and allocate a space of 100
let f = ArrayList<Int64>([0, 1, 2])  // Created an ArrayList whose element type is Int64, containing elements 0, 1, 2
let g = ArrayList<Int64>(c)  // Use another Collection to initialize an ArrayList
let h = ArrayList<String>(2, {x: Int64 => x.toString()})  // Created an ArrayList whose element type is String and size is 2. All elements are initialized by specified rule function
```

### Visiting elements

When we need access to all the elements of the ArrayList, we can use a `for-in` loop to iterate through all the elements of the ArrayList.

```
import std.collection.*

main() {
    let list = ArrayList<Int64>([0, 1, 2])
    for (i in list) {
        println("The element is ${i}")
    }
}
```

When we want to access an element in a single specified location, we can use the subscript syntax to access it (the type of subscript must be Int64). The first element of a non-empty ArrayList always starts at position 0. We can access any element of the ArrayList from 0 up to the last position (`size - 1` of the ArrayList). Using a negative number or an index greater than or equal to size triggers a runtime exception.

```
let a = list[0]  // a == 0
let b = list[1]  // b == 1
let c = list[-1]  // Runtime Exceptions
```

### Size

To obtain the length of an `ArrayList`, use syntax of the form `arr.size`.

### Adding elements

To add an element `i` to the end of an `ArrayList` `arr`, use `arr.add(i)`. The signature of the `add` function is

```
public func add(element: T): Unit
```

To add a collection of elements with the same type to the end of an `ArrayList`, we can also use the `add` function with
the following signature

```
public func add(all!: Collection<T>): Unit
```

For example,

```
let arr = ArrayList<Int>([1, 2, 3])
let arr2 = [3, 4, 5]
arr.add(all: arr2)
```

### Slice of an `ArrayList`

The slice function on `ArrayList` has the following signature:

```
public func slice(range: Range<Int64>): ArrayList<T>
```

Note a range argument is taken (e.g. `l..r` for the closed-open interval `[1, r)`, and `[l, r]` or `l..=r`
for the closed interval `[l, r]`). This is different from the case for Array, which takes
the starting index and length as arguments.

### Inserting elements

We can use the `add` functions to insert a specified single element or a Collection value of the same element type into the location of the index we specify. The signatures are

```
public func add(element: T, at!: Int64): Unit
```

and

```
public func add(all!: Collection<T>, at!: Int64): Unit
```

respectively. The elements at the index and the elements behind them are moved back to make space.

```
let list = ArrayList<Int64>([0, 1, 2])  // list contains elements 0, 1, 2
list.add(4, at: 1)  // list contains elements 0, 4, 1, 2
list.add(all: [1, 2, 3], at: 4)  // list contains elements 0, 4, 1, 2, 1, 2, 3
```

### Deleting elements

To remove an element from an ArrayList, you can use the `remove` function, which requires you to specify the index to be removed, The elements that follow the index are moved forward to fill the space.

```
let list = ArrayList<String>(["a", "b", "c", "d"])  // list contains the elements "a", "b", "c", "d"
list.remove(at: 1) // Delete the element at subscrip 1, now the list contains elements "a", "c", "d"
```

To remove a range of elements from an ArrayList, you can also use the `remove` function, which requires you to specify the range to be removed, The elements that follow the index are moved forward to fill the space.

```
let list = ArrayList<String>(["a", "b", "c", "d"])  // list contains the elements "a", "b", "c", "d"
list.remove(1..2) // Delete the element within the range [1, 2), now the list contains elements "a", "c", "d"
list.remove(1..=2) // Delete the element within the range [1, 2], now the list contains elements "a"
```

### Iteration

To iterate over elements of an ArrayList `arr`, use:

```
for (element in arr) {
    ...
}
```

Note there is no pattern matching before `in`. If the elements of an array are tuples,
access entries of the tuple individually, e.g.:

```
var a = ArrayList<(Int64, Int64)>([(2, 3), (3, 4)])
for (pair in a) {
    println("(${pair[0]}, ${pair[1]})")
}
```

### Collection.md

## Expressing quantifiers

The logical quantifiers `forall` and `exists` are expressed in Cangjie using functions
`all` and `any`. The syntax is as follows:

```
collection |> all {x => cond}
collection |> any {x => cond}
```

Where the bound variable `x` must be a *single* variable rather than other forms
(such as a tuple `(x, y)`). To express a condition on tuples, still represent the 
bound variable as `x`, then access its elements using subscripts `x[0]` and `x[1]`.

For example,

```
arr |> all {x => x > 0} // check whether all elements of `arr` are > 0
arr |> any {x => x > 0} // check whether there exists any element of `arr` is > 0
```

Using `all` and `any` requires `import std.collection.*`. In the above example,
the bound variable `x` in the lambda expression iterates over elements of `arr`.
If you want to use traverse using index on `arr`, you must replace `(arr)` with
`(0..arr.size)`. For example, the following expresses the same condition as above.

```
0..arr.size |> all {i => arr[i] > 0}
0..arr.size |> any {i => arr[i] > 0}
```

## Expressing implication

When using `all` and `any` functions, note the **distinction** between
*`if a then b`* and *`a && b`*. To express implication of the form `A -> B`
(if A then B), use `!A || B`. For example, to express the fact that `i < j`
implies `result[i] < result[j]` (that is, the array result is strictly increasing), use:

```
!(i < j) || result[i] < result[j]
```

## Using `count` function

The count function returns the number of elements in a collection.
For example, the following counts the number of Runes in a String:

```
let s = "Hello"
println(count(s.runes()))  // 5
println(s.runes() |> count) // Equivalent to `count(s.runes())`, but using the pipe operator `|>`
```

Combine `count` and `filter` to count the number of elements satisfying
som property in a collection. For example, the following code counts
the number of r's in the word "strawberry":

```
let s = "strawberry"
println(s.runes() |> filter({c: Rune => c == r'r'}) |> count)  // 3
```

Note the filter function must be used if counting elements of an array satisfying
some condition. Directly calling `count` with a predicate is invalid.

## Using `filter` function

The `filter` function can be used to produce a new iterator from an old one
by filtering according to a condition. The general syntax is:

```
collection |> filter {x => cond}  // returns an iterator
```

For example, to count the number of characters `r` in a string `s`, use:

```
collectArray(s.runes() |> filter {c: Rune => c == r'r'}).size
```

Note the output of filter is first converted to `Array` using function
`collectArray` before calling property `size` in an `Array`.

Alternatively, combine `filter` with `count` function, with accepts an
iterator and returns the size of the iterator:

```
s.runes() |> filter({c: Rune => c == r'r'}) |> count
```

## Using `fold` function

The `fold` function can be used to conveniently compute sum, product
and other similar functions over a collection. The general syntax is:

```
fold(initValue, {old, curr => new})(collection)
```

where the first argument `initValue` is the initial value, and the second argument
is a lambda function that takes the old value, the current element of the collection,
and computes the new value. 

Using the pipe operator `|>` and the syntactic sugar of lambda function, one can equivalently write the above code
as

```
collection |> fold(init) {old, curr => new}
```

For example, the following computes the sum and product
of a list, respectively.

```
let n = [1, 2, 3, 4]
println(n |> fold(0) {old, curr => old + curr})  // 10
println(n |> fold(1) {old, curr => old * curr})  // 24
```

**Note:** when expressing lambda function with more than one argument, there is **no**
parenthesis around the two arguments.

**Note:** the `fold` function takes initial value and a lambda expression as arguments, 
and the resulting function takes the collection as argument. No other argument should be provided.

## Using `reduce` function

The `reduce` function is similar to `fold`, except there is no need to provide
an initial value. The general syntax is:

```
reduce({old, curr => new})(collection)  // returns Option value
```

The return value has `Option` type, which is `None` of `collection` is empty.
If you are sure the `collcetion` is nonempty, you can use `getOrThrow()` on
the result. 

Using the pipe operator `|>` and the syntactic sugar of lambda function, one can equivalently write the above code
as

```
collection |> reduce {old, curr => new}
```

For example, the following illustrates how to use `reduce` to
compute the sum or product iof a list if integers.

```
let a = [1, 2, 3, 4]
println((a |> reduce {x, y => x + y}).getOrThrow())  // prints 10
println((a |> reduce {x, y => x * y}).getOrThrow())  // prints 24
```

**Note:** when expressing lambda function with more than one argument, there is **no**
parenthesis around the two arguments.

**Note:** the `reduce` function takes a lambda expression as arguments, and the resulting
function takes the collection as argument. No other argument should be provided.

**Note:** the `reduce` function returns an option value. You must extract it in some
way (such as using `getOrThrow`) before using it as an ordinary value.

## Using `min` and `max` function on collections

Functions `min` and `max` can also be used on collections such as `Array` and
`ArrayList` (in addition to the form of taking two arguments). This form of
`min` and `max` returns an `Option` value. If you are sure the collection
is nonempty, you can use `getOrThrow()` to retrieve the result. For example,
the following computes the minimum and maximum of an array.

```
let a = [1, 2, 3, 4]
println(min(a).getOrThrow())  // prints 1
println(max(a).getOrThrow())  // prints 4
```

**Note:** the `min` and `max` functions return an option value. You must extract it in some
way (such as using `getOrThrow`) before using it as an ordinary value.

## Using `map` function

The `map` function applies a lambda function to a collection, and returns
an iterator. Remember to use `collectArray` to convert
the returned iterator to an `Array` (similarly for other target collections).
For example, the following illustrates how to use `map` to compute the square
of each element of an `Array`, and collect the results in an `Array`.

```
let a = [1, 2, 3, 4]
let b = a |> map {x: Int64 => x ** 2} |> collectArray
println(a)  // [1, 2, 3, 4]
println(b)  // [1, 4, 9, 16]
```

**Note:** the function `map` is used with collection as an argument at the end. Using
syntax like `a.map(...)` is in correct.

## Using `flatMap` function

The `flatMap` function takes input a lambda function that takes elements of type `T`
and returns `Iterable<R>`, and applies a lambda function to a collection `Iterable<T>`,
and flattens the resulting list of collections.

The following example repeats each entry `i` of an array `i` times, collection
the results in a single array.

```
let a = [1, 2, 3, 4]
let b = a |> flatMap {x: Int64 => Array(x, {_ => x})} |> collectArray
println(a)  // [1, 2, 3, 4]
println(b)  // [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
```


### Function.md

## Functions

### Return value after while loop

When a function contains a while loop, sometimes it is necessary to place an
explicit return statement to make clear the return type of the function, even
if the function always returns within the loop. For example, the following
code does not compile:

```
func whileLoopEx(n: Int64): Int64 {
    var counter = n
    var result = 1
    while (true) {
        if (counter <= 0) {
            return result
        }
        counter -= 1
        result *= 2
    }                           // expected return type Int64, found Unit
}
```

Instead, add a return statement with the right type, even if it will never
be reached:

```
func whileLoopEx(n: Int64): Int64 {
    var counter = n
    var result = 1
    while (true) {
        if (counter <= 0) {
            return result
        }
        counter -= 1
        result *= 2
    }
    return 0      // OK because compiler can now check the return type is Int64
}
```



### HashMap.md

## HashMap

To use the HashMap type, the collection package needs to be imported:

```
import std.collection.*
```

Keys of a `HashMap` must be hashable. Hashable types include numbers, strings, but not
tuples, `Array`, or `ArrayList`. There are no constraints on values of `HashMap`.

### Initialization

Ways to initialize an `HashMap` include:

```
let a = HashMap<String, Int64>()  // empty HashMap whose key type is String and value is Int64
let b = HashMap<String, Int64>([("a", 0), ("b", 1), ("c", 2)])  //   creates map {"a": 0, "b": 1, "c": 2}
let c = HashMap<String, Int64>(b)  // use another Collection to initialize a HashMap
let d = HashMap<String, Int64>(10)  // created a HashMap whose key type is String and value is Int64 and capacity is 10
let e = HashMap<Int64, Int64>(10, {x: Int64 => (x, x * x)})  // creates map {1: 1, ..., 10: 100}

```
### Access elements

When we want to access the element corresponding to the specified key, we can use the subscript syntax
to access it (the type of the subscript must be the ky=ey type). Using a non-existent key as an index will
trigger a runtime exception.

```
let map = HashMap<String, Int64>([("a", 0), ("b", 1), ("c", 2)])
let a = map["a"]  // a == 0
let b = map["b"]  // a == 1
let c = map["d"]  // Runtime exceptions
```

To access elements while allowing for the possibility of non-existent key, one suggested way is using 'get'
together with `getOrDefault` on the option, for example:

```
let m = HashMap(("a", 1), ("b", 2))
println(m.get("a").getOrDefault({ => 0}))  // 1
println(m.get("c").getOrDefault({ => 0}))  // 0
```

### Iteration

To iterate over a HashSet, use for-loop as follows:

```
let map = HashMap<String, Int64>([("a", 0), ("b", 1), ("c", 2)])
for ((k, v) in map) {
    println("The key is ${k}, the value is ${v}")
}
```

To get the size of a HashMap mp, use `mp.size`

### Basic operations

To determine whether a key `K` is included in the HashMap, we can use the contains function: `mp.contains(K)`, Returns true if the key exists, false otherwise.

If you need to add a single key-value pair to the end of your HashMap, use the `add` function with the signature

```
public func add(key: K, value: V): Option<V>
```

If you want to add multiple key-value pairs at the same time, you can also use the `add` function with the signature

```
public func add(all!: Collection<(K, V)>): Unit
```

When the key does not exist, the put function performs the added operation, and when the key exists, the put function overwrites the old value with the new value:

```
let map = HashMap<String, Int64>()
map.add("a", 0)  // map contains the element ("a", 0)
map.add("b", 1)  // map contains the elements ("a", 0), ("b", 1)
let map2 = HashMap<String, Int64>([("c", 2), ("d", 3)])
map.add(all: map2)  // map contains the elements ("a", 0), ("b", 1), ("c", 2), ("d", 3)
```

Way to delete elements in a HashMap:
```
let map = HashMap<String, Int64>([("a", 0), ("b", 1), ("c", 2), ("d", 3)])
map.remove("d")  // map contains the elements ("a", 0), ("b", 1), ("c", 2)
```

### HashSet.md

## HashSet

To use the HashSet type, the collection package needs to be imported:

```
import std.collection.*
```

Elements of a `HashSet` must be hashable. Hashable types include numbers, strings, but not
tuples, `Array`, or `ArrayList`.

### Initialization

Ways to initialize a `HashSet` include:

```
let a = HashSet<String>()  // Created an empty HashSet whose element type is String
let b = HashSet<String>(100)  // Created a HashSet whose capacity is 100
let c = HashSet<Int64>([0, 1, 2])  // Created a HashSet whose element type is Int64, containing elements 0, 1, 2
let d = HashSet<Int64>(c)  // Use another Collection to initialize a HashSet
let e = HashSet<Int64>(10, {x: Int64 => (x * x)})  // Created a HashSet whose element type is Int64 and size is 10. All elements are initialized by specified rule function
```

### Adding elements to a HashSet

Ways to add element to HashSet:

```
let mySet = HashSet<Int64>()
mySet.add(0)  // mySet contains elements 0
mySet.add(0)  // mySet contains elements 0
mySet.add(1)  // mySet contains elements 0, 1
let li = [2, 3]
mySet.add(all: li)  // mySet contains elements 0, 1, 2, 3
```

### Deleting elements of a HashSet

Ways to delete element to HashSet:

```
let mySet = HashSet<Int64>([0, 1, 2, 3])
mySet.remove(1)  // mySet contains elements 0, 2, 3
```

### Iterating over a HashSet

To iterate over a HashSet, use for-loop as follows:

```
for (i in mySet) {
    println(i)  // prints 0, 1 in separate lines
}
```

### Obtaining size of a HashSet

To get the number of elements in a hashset, we can use the size attribute:

```
import std.collection.*

main() {
    let mySet = HashSet<Int64>([0, 1, 2])
    if (mySet.size == 0) {
        println("This is an empty hashset")
    } else {
        println("The size of hashset is ${mySet.size}")
    }
}
```

### Checking whether an element is in a HashSet

To determine whether an element is included in a HashSet, you can use the contains
function. Returns true if the element exists, false otherwise:

```
let mySet = HashSet<Int64>([0, 1, 2])
let a = mySet.contains(0)  // a == true
let b = mySet.contains(-1)  // b == false
```

### Taking the union of two HashSet

Use `add` function to compute union of two `HashSet`s, by adding all elements
of the second set to the first. The signature is

```
public func add(all!: Collection<T>): Unit
```

For example:

```
let a = HashSet<Int64>([1, 2, 3, 3])
let b = HashSet<Int64>([2, 3, 4, 4])
a.add(all: b)     // add all em=lements of b to a, so a is now union of a and b
println(a)      // prints [1, 2, 3, 4]
```

### Convert an array to set

To convert an `Array` (or `ArrayList`) into a `HashSet`, use `collectHashSet` function.
For example:

```
let a: Array<Int64> = [1, 1, 2, 3, 3]
let s: HashSet<Int64> = collectHashSet(a)
println(s)      // [1, 2, 3]
```

One common use case is finding the unique elements of an array. To return the result
as a new array, use `toArray` after calling `collectHashSet`. For example:

```
let a: Array<Int64> = [1, 1, 2, 3, 3]
let b: Array<Int64> = collectHashSet(a).toArray()
println(b)      // [1, 2, 3]
```

Note that when calling `collectHashSet`, it is important to make sure that the type
of elements in the Array are hashable (and equatable). If the type is a generic type,
add the corresponding type constraints. For example, the following function checks
whether an array has unique elements:

```
func allUnique<T>(arr: Array<T>): Bool where T <: Hashable & Equatable<T> {
    return collectHashSet(arr).size == arr.size
}
```

Note it is important to add constraint `T <: Hashable & Equatable<T>` to the function
in order to use `collectHashSet`.

### Numbers.md

## Numbers

### Operation on numbers

Operation on integers are mostly as usual. Make note of the following.

* Taking remainder uses `%`, only integer types are supports.
* Taking power uses `**`, only `Int64` or `Float64` are supports on the left side. If the
  left side is `Int64`, the right side must be either `UInt64`, with the result being `Int64`.
  If the left side is `Float64`, the right side must be `Int64` or `Float64`, with the result
  being `Float64`.

### Priority between operations

The unary minus `-` has higher priority than taking power. This can lead to
some counterintuitive results. Use parenthesis to ensure the right evaluation.
For example:

```
main() {
    println(-10**4)     //10000
    println(-(10**4))     //-10000
}
```

### Bitwise operations

The bitwise AND and OR uses `&` and `|` as in other languages. The bitwise NOT operation
uses `!` sign (instead of `~`).

```
main() {
    let a: UInt8 = 5    //00000101
    let b: UInt8 = 9    //00001001
    println("Bitwise NOT of a: ${!a}")      // 11111010
    println("Bitwise AND of a and b: ${a & b}")      // 00000001
    println("Bitwise OR of a and b: ${a | b}")      // 00001101
}
```

### Minimum and maximum possible value of integer

The minimum and maximum values of each integer type is accessed by properties `Min` and `Max`,
after importing `std.math.*`. For example:

```
import std.math.*

main() {
    println("${Int32.Min}")  // -2147483648
    println("${Int32.Max}")  // 2147483647
    println("${UInt32.Min}")  // 0
    println("${UInt32.Max}")  // 4294967295
}
```

### Absolute value

To find absolute value of a number, use `abs` after importing `std.math.*`.
For example:

```
import std.math.*

main() {
    println("${abs(-3)}")  // 3
}
```

### Converting floating point number to integer

To convert a floating point number to an integer, use syntax like `Int64(s)` (change
to desired type of target value if necessary). This conversion rounds the floating-point number toward zero.

```
println(Int64(3.4))  // prints 3
println(Int64(3.6))  // prints 4
```

To obtain better control of rounding, the functions `floor`, `ceil` and `round` is also
available after importing `std,math.*`. These functions still return floating-point numbers,
so another `Int64(.)` is needed. For example:

```
println(Int64(3.4))  // prints 3
println(Int64(-3.6))  // prints -3
println(Int64(ceil(3.4)))   // prints 4
println(Int64(ceil(-3.4)))   // prints -3
println(Int64(floor(3.4)))  // prints 3
println(Int64(floor(-3.4)))  // prints -4
println(Int64(round(3.4)))  // prints 3
println(Int64(round(-3.4)))  // prints -3
println(Int64(round(-3.6)))  // prints -4
```

### Option.md

## Option

The `Option` type is defined using `enum`, which includes two constructors: `Some` and `None`.
The `Some` constructor carries a parameter, indicating that there is a value, while `None`
does not carry any parameters, indicating that there is no value. When you need to represent
that a type might have a value or might not have a value, you can choose to use the `Option` type.

### Use `getOrThrow` to extract `Some` value

If an `Option` value is already known to be `Some(v)` for some `v`, use function `getOrThrow`
to extract `v`. If the option value is `None` instead, an exception is thrown.

For example:

```
let a: Option<Int64> = Some(3)
println(a.getOrThrow())  // 3
```

### Use `getOrDefaule` to extract `Some` value with default case

To extract an `Option` value when it is of the form `Some(v)`, and returning a default
value if it is `None`, use the `getOrDefault` function. For example:

```
let a: Option<Int64> = Some(3)
println(a.getOrDefault({ => 0}))  // 3
let b: Option<Int64> = None
println(b.getOrDefault({ => 0}))  // 0
```

### Matching on `Option`

To perform different action depending on the value of an `Option`, use
`match-case` pattern.

```
func printOption(a: Option<Int64>) {
    match (a) {
        case None => println("a is None")
        case Some(v) => println("a is some value ${v}")
    }
}

main() {
    printOption(None)       // a is none
    printOption(Some(3))    // a is some value 3
}
```

### Check if an `Option` value is `None` or `Some`

A simple way to check if an `Option` value is `None` or `Some` uses `isNone` and `isSome` functions.

```
main() {
    let b: Option<Int64> = None
    let c: Option<Int64> = Some(5)
    println(b.isNone())   // true
    println(b.isSome())   // false
    println(c.isNone())   // false
    println(c.isSome())   // true
}
```

### Rune.md

## Rune (characters)

The representation of character type literals is as follows:
A `Rune` literal starts with the character `r`, followed by a character enclosed in a pair of single or double quotes. For example:
```
let a: Rune = r'a'
let b: Rune = r"b"
```

Escape characters refer to characters in a character sequence that provide an alternative interpretation for the subsequent characters. Escape characters start with the escape symbol `\`, followed by the character that needs to be escaped. For example:
```
let slash: Rune = r'\\'
let newLine: Rune = r'\n'
let tab: Rune = r'\t'
```

Universal characters start with \u, followed by 1 to 8 hexadecimal numbers defined within a pair of curly brackets, which can represent the character corresponding to the Unicode value. For example:
```
let he: Rune = r'\u{4f60}'
let llo: Rune = r'\u{597d}'
```

### Supported Operations for Character Types
The character type only supports relations operators: less than (`<`), greater than (`>`), less than or equal to (`<=`), greater than or equal to (`>=`), equality (`==`), inequality (`!=`). The comparisons are based on the Unicode values of the characters.

### Conversion from Rune to UInt32 and from integer types to Rune.
```
let x: Rune = 'a'
let y: UInt32 = 65
let r1 = UInt32(x)
let r2 = Rune(y)
```

### Sorting.md

## Sorting

Sorting is available for collections such as `Array`, after importing `std.sort.*`. 
The basic signature of the `sort` function is

```
public func sort<T>(data: Array<T>, stable!: Bool = false, descending!: Bool = false): Unit where T <: Comparable<T>
```

An example is shown in the following:

```
import std.sort.*

main() {
    let arr = [1, 2, 3, 3, 2, 1]
    sort(arr)
    println(arr)
}
```

The `sort` function modifies the array in-place and returns `Unit`. To obtain a new
array that is the sorted version of the old array, make a copy of the old array
first. For example:

```
let a = [1, 2, 3, 3, 2, 1]
let b = a.clone()
sort(b)
println(a)  // [1, 2, 3, 3, 2, 1]
println(b)  // [1, 1, 2, 2, 3, 3]
```

As `sort` returns `Unit`, it is invalid to access elements of a sorted array.
For example, the following is **incorrect**:

```
let b = sort(a)
println(b[0])  // compile error: access index 0 on Unit
```

The following is probably intended:

```
let b = a.clone()
sort(b)
println(b[0])
```

### Sorting from highest to lowest


To sort from highest to lowest, we use the `sort` function in the following way:

```
let arr = [1, 2, 3, 3, 2, 1]
sort(arr, descending: true)
println(arr)  // [3, 3, 2, 2, 1, 1]
```

### Sorting with custom ordering

Sorting with custom ordering (including the case where the type of values does not
implement `Comparable` interface), use the `sort` function with the following signature:

```
public func sort<T>(data: Array<T>, by!: (T, T) -> Ordering, stable!: Bool = false, descending!: Bool = false): Unit
```

For example, to sort a list of integer pairs, use a custom comparison function as follows:

```
let pairs = [(1, 2), (2, 1), (0, 2), (0, 3), (2, 0)]
sory(pairs, by: {p1, p2 =>
    match (p1[0].compare(p2[0])) {
        case Ordering.LT => Ordering.LT
        case Ordering.GT => Ordering.GT
        case _ => p1[1].compare(p2[1])
    }
})
for (pair in pairs) {
    print("(${pair[0]}, ${pair[1]}) ")  // (0, 2) (0, 3) (1, 2) (2, 0) (2, 1)
}
println()
```

*... and 2 more files in docs/examples/*

