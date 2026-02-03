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