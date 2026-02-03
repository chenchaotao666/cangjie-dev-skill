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

