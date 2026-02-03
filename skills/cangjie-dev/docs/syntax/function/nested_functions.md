# 嵌套函数

定义在源文件顶层的函数被称为全局函数。定义在函数体内的函数被称为嵌套函数。

示例，函数 `foo` 内定义了一个嵌套函数 `nestAdd`，可以在 `foo` 内调用该嵌套函数 `nestAdd`，也可以将嵌套函数 `nestAdd` 作为返回值返回，在 `foo` 外对其进行调用：

<!-- verify -->

```cangjie
func foo() {
    func nestAdd(a: Int64, b: Int64) {
        a + b + 3
    }

    println(nestAdd(1, 2))  // 6

    return nestAdd
}

main() {
    let f = foo()
    let x = f(1, 2)
    println("result: ${x}")
}
```

程序会输出：

```text
6
result: 6
```
