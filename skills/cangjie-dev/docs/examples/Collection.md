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
