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