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