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