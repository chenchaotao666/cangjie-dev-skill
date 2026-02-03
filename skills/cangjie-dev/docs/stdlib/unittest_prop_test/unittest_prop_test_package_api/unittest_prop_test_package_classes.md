# 类

## class Generators

```cangjie
public class Generators {}
```

功能：包含辅助函数的类，可帮助开发人员编写自己的生成器。

### static func generate\<T>(() -> T)

```cangjie
public static func generate<T>(body: () -> T): Generator<T>
```

功能：通过重复调用函数生成值的生成器。

参数：

- body: () -> T - 被调用的生成器闭包。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<T> - 生成器。

### static func iterable\<T>(RandomSource, Array\<T>)

```cangjie
public static func iterable<T>(random: RandomSource, collection: Array<T>): Generator<T>
```

功能：通过从数组中随机选取来生成值的生成器。

参数：

- random: [RandomSource](./unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。
- collection: [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<T> - 被选取数字的数组。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<T> - 生成器。

### static func lookup\<T>(RandomSource) where T <: Arbitrary\<T>

```cangjie
public static func lookup<T>(random: RandomSource): Generator<T> where T <: Arbitrary<T>
```

功能：通过 T 的 [Arbitrary](./unittest_prop_test_package_interfaces.md#interface-arbitrary) 实例提供的生成器。

参数：

- random: [RandomSource](./unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<T> - 生成器。

### static func mapped\<T, R>(RandomSource,(T) -> R) where T <: Arbitrary\<T>

```cangjie
public static func mapped<T, R>(random: RandomSource, body: (T) -> R): Generator<R> where T <: Arbitrary<T>
```

功能：获取 T 的 [Arbitrary](./unittest_prop_test_package_interfaces.md#interface-arbitrary) 实例提供的生成器，并使用函数体生成 R 类型的值。

参数：

- random: [RandomSource](./unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。
- body: (T) -> R - 生成 R 类型的值。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<T> - 生成器。

### static func mapped\<T1, T2, R>(RandomSource, (T1, T2) -> R) where T1 <: Arbitrary\<T1>, T2 <: Arbitrary\<T2>

```cangjie
 public static func mapped<T1, T2, R>(random: RandomSource, body: (T1, T2) -> R): Generator<R> where T1 <: Arbitrary<T1>, T2 <: Arbitrary<T2>
```

功能：获取 T1，T2 的 [Arbitrary](./unittest_prop_test_package_interfaces.md#interface-arbitrary) 实例提供的生成器，并使用函数体生成 R 类型的值。

参数：

- random: [RandomSource](./unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。
- body: (T1, T2) -> R - 生成 R 类型的值。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<T> - 生成器。

### static func mapped\<T1, T2, T3, R>(RandomSource, (T1, T2, T3) -> R) where T1 <: Arbitrary\<T1>, T2 <: Arbitrary\<T2>, T3 <: Arbitrary\<T3>

```cangjie
public static func mapped<T1, T2, T3, R>(random: RandomSource, body: (T1, T2, T3) -> R): Generator<R>
            where T1 <: Arbitrary<T1>, T2 <: Arbitrary<T2>, T3 <: Arbitrary<T3>
```

功能：获取 T1,T2,T3 的 [Arbitrary](./unittest_prop_test_package_interfaces.md#interface-arbitrary) 实例提供的生成器，并使用函数体生成 R 类型的值。

参数：

- random: [RandomSource](./unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。
- body: (T1, T2,T3) -> R - 生成 R 类型的值。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<T> - 生成器。

### static func mapped\<T1, T2, T3, T4, R>(RandomSource, (T1, T2, T3, T4) -> R) where T1 <: Arbitrary\<T1>, T2 <: Arbitrary\<T2>, T3 <: Arbitrary\<T3>, T4 <: Arbitrary\<T4>

```cangjie
public static func mapped<T1, T2, T3, T4, R>(random: RandomSource, body: (T1, T2, T3, T4) -> R): Generator<R>
            where T1 <: Arbitrary<T1>, T2 <: Arbitrary<T2>, T3 <: Arbitrary<T3>, T4 <: Arbitrary<T4>
```

功能：获取 T1,T2,T3,T4 的 [Arbitrary](./unittest_prop_test_package_interfaces.md#interface-arbitrary) 实例提供的生成器，并使用函数体生成 R 类型的值。

参数：

- random: [RandomSource](./unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。
- body: (T1, T2,T3,T4) -> R - 生成 R 类型的值。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<T> - 生成器。

### static func pick\<T>(RandomSource, Array\<Generator\<T>>)

```cangjie
public static func pick<T>(random: RandomSource, variants: Array<Generator<T>>): Generator<T>
```

功能：通过从生成器数组中随机选取来生成值的生成器。

参数：

- random: [RandomSource](./unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。
- variants: [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<[Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<T>> - 生成器数组。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<T> - 生成器。

### static func single\<T>(T)

```cangjie
public static func single<T>(value: T): Generator<T>
```

功能：生成器始终返回同一个值。

参数：

- value: T - 生成器返回的值。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<T> - 生成器。

### static func weighted\<T>(RandomSource, Array\<(UInt64, Generator\<T>)>)

```cangjie
public static func weighted<T>(random: RandomSource, variants: Array<(UInt64, Generator<T>)>): Generator<T>
```

功能：通过从成对数组（权重、生成器）中随机选取来生成值的生成器。

参数：

- random: [RandomSource](./unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。
- variants: [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<(UInt64, Generator\<T>)> - 数组（权重、生成器）。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<T> - 生成器。

## class LazySeq\<T>

```cangjie
public class LazySeq<T> <: Iterable<T> {
    public init()
    public init(element: T)
}
```

功能：延迟计算的 T 类型值序列。用于在迭代时计算和记忆值。
这是完全不可变的，每次操作都会产生一个新的序列。

父类型：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T>

### init()

```cangjie
public init()
```

功能：构造器。

### init(T)

```cangjie
public init(element: T)
```

功能：构造器。

参数：

- element: T - 初始元素。

### func append(T)

```cangjie
public func append(element: T): LazySeq<T>
```

功能：增加一个元素。

参数：

- element: T - 被增加的元素。

返回值：

- [LazySeq](#class-lazyseqt)\<T> - 增加元素后的序列。

### func concat(LazySeq\<T>)

```cangjie
public func concat(other: LazySeq<T>): LazySeq<T>
```

功能：增加一个序列到此序列中。复杂度为 O(1) 。

参数：

- other: [LazySeq](#class-lazyseqt)\<T> - 被增加的序列。

返回值：

- [LazySeq](#class-lazyseqt)\<T> - 增加元素后的序列。

### func iterator()

```cangjie
public func iterator(): Iterator<T>
```

功能：实现序列的迭代器。

返回值：

- [Iterator](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T> - 序列迭代器。

### func map\<U>((T) -> U)

```cangjie
public func map<U>(body: (T) -> U): LazySeq<U>
```

功能：对序列中的每个元素执行闭包处理。

参数：

- body: (T) -> U - 对每个元素执行的闭包。

返回值：

- [LazySeq](#class-lazyseqt)\<U> - 处理后的序列。

### func mixWith(LazySeq\<T>)

```cangjie
public func mixWith(other: LazySeq<T>): LazySeq<T>
```

功能：将新序列穿插进原序列中。

例如：{1,2,3,4}.mixWith({5,6,7}) -> {1,5,2,6,3,7,4}

参数：

- other: [LazySeq](#class-lazyseqt)\<T> - 待插入的序列。

返回值：

- [LazySeq](#class-lazyseqt)\<U> - 处理后的序列。

### func prepend(T)

```cangjie
public func prepend(element: T): LazySeq<T>
```

功能：将新序列插进原序列的开头。

参数：

- other: [LazySeq](#class-lazyseqt)\<T> - 待插入的序列。

返回值：

- [LazySeq](#class-lazyseqt)\<U> - 处理后的序列。

### static func mix(LazySeq\<T>,LazySeq\<T>)

```cangjie
public static func mix(l1: LazySeq<T>, l2: LazySeq<T>)
```

功能：两个序列穿插混合成一个。

例如：mix({1,2,3,4}, {5,6,7}) -> {1,5,2,6,3,7,4}

参数：

- l1: [LazySeq](#class-lazyseqt)\<T> - 待穿插的序列。
- l2: [LazySeq](#class-lazyseqt)\<T> - 待穿插的序列。

返回值：

- [LazySeq](#class-lazyseqt)\<U> - 处理后的序列。

### static func mix(LazySeq\<T>,LazySeq\<T>,LazySeq\<T>)

```cangjie
public static func mix(l1: LazySeq<T>, l2: LazySeq<T>, l3: LazySeq<T>)
```

功能：三个序列穿插混合成一个。

参数：

- l1: [LazySeq](#class-lazyseqt)\<T> - 待穿插的序列。
- l2: [LazySeq](#class-lazyseqt)\<T> - 待穿插的序列。
- l3: [LazySeq](#class-lazyseqt)\<T> - 待穿插的序列。

返回值：

- [LazySeq](#class-lazyseqt)\<U> - 处理后的序列。

### static func mix(LazySeq\<T>,LazySeq\<T>,LazySeq\<T>,LazySeq\<T>)

```cangjie
public static func mix(l1: LazySeq<T>, l2: LazySeq<T>, l3: LazySeq<T>, l4: LazySeq<T>)
```

功能：四个序列穿插混合成一个。

参数：

- l1: [LazySeq](#class-lazyseqt)\<T> - 待穿插的序列。
- l2: [LazySeq](#class-lazyseqt)\<T> - 待穿插的序列。
- l3: [LazySeq](#class-lazyseqt)\<T> - 待穿插的序列。
- l4: [LazySeq](#class-lazyseqt)\<T> - 待穿插的序列。

返回值：

- [LazySeq](#class-lazyseqt)\<U> - 处理后的序列。

### static func mix(LazySeq\<T>,LazySeq\<T>,LazySeq\<T>,LazySeq\<T>,LazySeq\<T>)

```cangjie
public static func mix(l1: LazySeq<T>, l2: LazySeq<T>, l3: LazySeq<T>, l4: LazySeq<T>, l5: LazySeq<T>)
```

功能：五个序列穿插混合成一个。

参数：

- l1: [LazySeq](#class-lazyseqt)\<T> - 待穿插的序列。
- l2: [LazySeq](#class-lazyseqt)\<T> - 待穿插的序列。
- l3: [LazySeq](#class-lazyseqt)\<T> - 待穿插的序列。
- l4: [LazySeq](#class-lazyseqt)\<T> - 待穿插的序列。
- l5: [LazySeq](#class-lazyseqt)\<T> - 待穿插的序列。

返回值：

- [LazySeq](#class-lazyseqt)\<U> - 处理后的序列。

### static func of(Iterable\<T>)

```cangjie
public static func of(iterable: Iterable<T>)
```

功能：从迭代器构造一个序列。

参数：

- iterable: [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T> - 待处理的迭代器。

返回值：

- [LazySeq](#class-lazyseqt)\<U> - 处理后的序列。

### static func of(Array\<T>)

```cangjie
public static func of(array: Array<T>)
```

功能：从数组构造一个序列。

参数：

- array: [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<T> - 待处理的数组。

返回值：

- [LazySeq](#class-lazyseqt)\<U> - 处理后的序列。

## class ShrinkHelpers

```cangjie
public class ShrinkHelpers {}
```

功能：提供对元组实现缩减迭代器的方法。

### static func shrinkTuple\<T0, T1>((T0, T1),Iterable\<T0>,Iterable\<T1>)

```cangjie
public static func shrinkTuple<T0, T1>(
    tuple: (T0, T1),
    t0: Iterable<T0>,
    t1: Iterable<T1>
): Iterable<(T0, T1)>
```

功能：实现元组的缩减迭代器。

参数：

- tuple: (T0, T1) - 被缩减的元组。
- t0: [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T0> - 第一个元组成员的缩减迭代器。
- t1: [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T1> - 第二个元组成员的缩减迭代器。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<(T0, T1)> - 元组缩减迭代器。

### static func shrinkTuple\<T0, T1, T2>((T0, T1, T2),Iterable\<T0>,Iterable\<T1>,Iterable\<T2>)

```cangjie
public static func shrinkTuple<T0, T1, T2>(
    tuple: (T0, T1, T2),
    t0: Iterable<T0>,
    t1: Iterable<T1>,
    t2: Iterable<T2>
): Iterable<(T0, T1, T2)>
```

功能：实现元组的缩减迭代器。

参数：

- tuple: (T0, T1, T2) - 被缩减的元组。
- t0: [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T0> - 第一个元组成员的缩减迭代器。
- t1: [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T1> - 第二个元组成员的缩减迭代器。
- t2: [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T2> - 第三个元组成员的缩减迭代器。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<(T0, T1, T2)> - 元组缩减迭代器。

### static func shrinkTuple\<T0, T1, T2, T3>((T0, T1, T2, T3),Iterable\<T0>,Iterable\<T1>,Iterable\<T2>,Iterable\<T3>)

```cangjie
public static func shrinkTuple<T0, T1, T2, T3>(
    tuple: (T0, T1, T2, T3),
    t0: Iterable<T0>,
    t1: Iterable<T1>,
    t2: Iterable<T2>,
    t3: Iterable<T3>
): Iterable<(T0, T1, T2, T3)>
```

功能：实现元组的缩减迭代器。

参数：

- tuple: (T0, T1, T2, T3) - 被缩减的元组。
- t0: [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T0> - 第一个元组成员的缩减迭代器。
- t1: [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T1> - 第二个元组成员的缩减迭代器。
- t2: [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T2> - 第三个元组成员的缩减迭代器。
- t3: [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T3> - 第四个元组成员的缩减迭代器。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<(T0, T1, T2,T3)> - 元组缩减迭代器。

### static func shrinkTuple\<T0, T1, T2, T3, T4>((T0, T1, T2, T3, T4),Iterable\<T0>,Iterable\<T1>,Iterable\<T2>,Iterable\<T3>,Iterable\<T4>)

```cangjie
public static func shrinkTuple<T0, T1, T2, T3, T4>(
    tuple: (T0, T1, T2, T3, T4),
    t0: Iterable<T0>,
    t1: Iterable<T1>,
    t2: Iterable<T2>,
    t3: Iterable<T3>,
    t4: Iterable<T4>
): Iterable<(T0, T1, T2, T3, T4)>
```

功能：实现元组的缩减迭代器。

参数：

- tuple: (T0, T1, T2, T3, T4) - 被缩减的元组。
- t0: [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T0> - 第一个元组成员的缩减迭代器。
- t1: [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T1> - 第二个元组成员的缩减迭代器。
- t2: [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T2> - 第三个元组成员的缩减迭代器。
- t3: [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T3> - 第四个元组成员的缩减迭代器。
- t4: [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T4> - 第五个元组成员的缩减迭代器。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<(T0, T1, T2,T3,T4)> - 元组缩减迭代器。
