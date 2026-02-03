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