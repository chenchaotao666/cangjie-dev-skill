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