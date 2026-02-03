# 接口

## interface Arbitrary\<T>

```cangjie
public interface Arbitrary<T> {
    static func arbitrary(random: RandomSource): Generator<T>
}
```

功能：生成 T 类型随机值的接口。

### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<T>
```

功能：获取生成 T 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<T> - 生成 T 类型随机值生成器。

### extend Bool <: Arbitrary\<Bool>

```cangjie
extend Bool <: Arbitrary<Bool>
```

功能：为 [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[Bool](../../core/core_package_api/core_package_intrinsics.md#bool)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<Bool>
```

功能：获取生成 T 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<Bool> - 生成 Bool 类型随机值生成器。

### extend Float16 <: Arbitrary\<Float16>

```cangjie
extend Float16 <: Arbitrary<Float16>
```

功能：为 [Float16](../../core/core_package_api/core_package_intrinsics.md#float16) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[Float16](../../core/core_package_api/core_package_intrinsics.md#float16)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<Float16>
```

功能：获取生成 T 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<Float16> - 生成 Float16 类型随机值生成器。

### extend Float32 <: Arbitrary\<Float32>

```cangjie
extend Float32 <: Arbitrary<Float32>
```

功能：为 [Float32](../../core/core_package_api/core_package_intrinsics.md#float32) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[Float32](../../core/core_package_api/core_package_intrinsics.md#float32)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<Float32>
```

功能：获取生成 T 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<Float32> - 生成 Float32 类型随机值生成器。

### extend Float64 <: Arbitrary\<Float64>

```cangjie
extend Float64 <: Arbitrary<Float64>
```

功能：为 [Float64](../../core/core_package_api/core_package_intrinsics.md#float64) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[Float64](../../core/core_package_api/core_package_intrinsics.md#float64)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<Float64>
```

功能：获取生成 T 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<Float64> - 生成 Float64 类型随机值生成器。

### extend Int16 <: Arbitrary\<Int16>

```cangjie
extend Int16 <: Arbitrary<Int16>
```

功能：为 [Int16](../../core/core_package_api/core_package_intrinsics.md#int16) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[Int16](../../core/core_package_api/core_package_intrinsics.md#int16)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<Int16>
```

功能：获取生成 T 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<Int16> - 生成 Int16 类型随机值生成器。

### extend Int32 <: Arbitrary\<Int32>

```cangjie
extend Int32 <: Arbitrary<Int32>
```

功能：为 [Int32](../../core/core_package_api/core_package_intrinsics.md#int32) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[Int32](../../core/core_package_api/core_package_intrinsics.md#int32)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<Int32>
```

功能：获取生成 T 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<Int32> - 生成 Int32 类型随机值生成器。

### extend Int64 <: Arbitrary\<Int64>

```cangjie
extend Int64 <: Arbitrary<Int64>
```

功能：为 [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[Int64](../../core/core_package_api/core_package_intrinsics.md#int64)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<Int64>
```

功能：获取生成 Int64 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<Int64> - 生成 Int64 类型随机值生成器。

### extend Int8 <: Arbitrary\<Int8>

```cangjie
extend Int8 <: Arbitrary<Int8>
```

功能：为 [Int8](../../core/core_package_api/core_package_intrinsics.md#int8) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[Int8](../../core/core_package_api/core_package_intrinsics.md#int8)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<Int8>
```

功能：获取生成 Int8 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<Int8> - 生成 Int8 类型随机值生成器。

### extend IntNative <: Arbitrary\<IntNative>

```cangjie
extend IntNative <: Arbitrary<IntNative>
```

功能：为 [IntNative](../../core/core_package_api/core_package_intrinsics.md#intnative) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[IntNative](../../core/core_package_api/core_package_intrinsics.md#intnative)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<IntNative>
```

功能：获取生成 IntNative 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<IntNative> - 生成 IntNative 类型随机值生成器。

### extend Ordering <: Arbitrary\<Ordering>

```cangjie
extend Ordering <: Arbitrary<Ordering>
```

功能：为 [Ordering](../../core/core_package_api/core_package_enums.md#enum-ordering) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[Ordering](../../core/core_package_api/core_package_enums.md#enum-ordering)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<Ordering>
```

功能：获取生成 Ordering 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<Ordering> - 生成 Ordering 类型随机值生成器。

### extend Rune <: Arbitrary\<Rune>

```cangjie
extend Rune <: Arbitrary<Rune>
```

功能：为 [Rune](../../core/core_package_api/core_package_intrinsics.md#rune) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[Rune](../../core/core_package_api/core_package_intrinsics.md#rune)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<Rune>
```

功能：获取生成 Rune 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<Rune> - 生成 Rune 类型随机值生成器。

### extend String <: Arbitrary\<String>

```cangjie
extend String <: Arbitrary<String>
```

功能：为 [String](../../core/core_package_api/core_package_structs.md#struct-string) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[String](../../core/core_package_api/core_package_structs.md#struct-string)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<String>
```

功能：获取生成 String 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<String> - 生成 String 类型随机值生成器。

### extend UInt16 <: Arbitrary\<UInt16>

```cangjie
extend UInt16 <: Arbitrary<UInt16>
```

功能：为 [UInt16](../../core/core_package_api/core_package_intrinsics.md#uint16) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[UInt16](../../core/core_package_api/core_package_intrinsics.md#uint16)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<UInt16>
```

功能：获取生成 UInt16 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<UInt16> - 生成 UInt16 类型随机值生成器。

### extend UInt32 <: Arbitrary\<UInt32>

```cangjie
extend UInt32 <: Arbitrary<UInt32>
```

功能：为 [UInt32](../../core/core_package_api/core_package_intrinsics.md#uint32) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[UInt32](../../core/core_package_api/core_package_intrinsics.md#uint32)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<UInt32>
```

功能：获取生成 UInt32 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<UInt32> - 生成 UInt32 类型随机值生成器。

### extend UInt64 <: Arbitrary\<UInt64>

```cangjie
extend UInt64 <: Arbitrary<UInt64>
```

功能：为 [UInt64](../../core/core_package_api/core_package_intrinsics.md#uint64) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[UInt64](../../core/core_package_api/core_package_intrinsics.md#uint64)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<UInt64>
```

功能：获取生成 UInt64 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<UInt64> - 生成 UInt64 类型随机值生成器。

### extend UInt8 <: Arbitrary\<UInt8>

```cangjie
extend UInt8 <: Arbitrary<UInt8>
```

功能：为 [UInt8](../../core/core_package_api/core_package_intrinsics.md#uint8) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[UInt8](../../core/core_package_api/core_package_intrinsics.md#uint8)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<UInt8>
```

功能：获取生成 UInt8 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<UInt8> - 生成 UInt8 类型随机值生成器。

### extend UIntNative <: Arbitrary\<UIntNative>

```cangjie
extend UIntNative <: Arbitrary<UIntNative>
```

功能：为 [UIntNative](../../core/core_package_api/core_package_intrinsics.md#uintnative) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[UIntNative](../../core/core_package_api/core_package_intrinsics.md#uintnative)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<UIntNative>
```

功能：获取生成 UIntNative 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<UIntNative> - 生成 UIntNative 类型随机值生成器。

### extend Unit <: Arbitrary\<Unit>

```cangjie
extend Unit <: Arbitrary<Unit>
```

功能：为 [Unit](../../core/core_package_api/core_package_intrinsics.md#unit) 实现了 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[Unit](../../core/core_package_api/core_package_intrinsics.md#unit)>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<Unit>
```

功能：获取生成 Unit 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<Unit> - 生成 Unit 类型随机值生成器。

### extend\<T> Array\<T> <: Arbitrary\<Array\<T>> where T <: Arbitrary\<T>

```cangjie
extend<T> Array<T> <: Arbitrary<Array<T>> where T <: Arbitrary<T>
```

功能：为 [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<T> 实现了 [Arbitrary](#interface-arbitraryt)\<[Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<T>> 接口，且 T 需实现 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<T>>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<Array<T>>
```

功能：获取生成 Array\<T> 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<Array\<T>> - 生成 Array\<T> 类型随机值生成器。

### extend\<T> Option\<T> <: Arbitrary\<Option\<T>> where T <: Arbitrary\<T>

```cangjie
extend<T> option<T> <: Arbitrary<Option<T>> where T <: Arbitrary<T>
```

功能：为 [Option](../../core/core_package_api/core_package_enums.md#enum-optiont)\<T>  实现了 [Arbitrary](#interface-arbitraryt)\<[Option](../../core/core_package_api/core_package_enums.md#enum-optiont)\<T>> 接口，且 T 需实现 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[Option](../../core/core_package_api/core_package_enums.md#enum-optiont)\<T>>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<option<T>>
```

功能：获取生成 option\<T> 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<option\<T>> - 生成 option\<T> 类型随机值生成器。

### extend\<T> ArrayList\<T> <: Arbitrary\<ArrayList\<T>> where T <: Arbitrary\<T>

```cangjie
extend<T> ArrayList<T> <: Arbitrary<ArrayList<T>> where T <: Arbitrary<T>
```

功能：为 [ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<T>  实现了 [Arbitrary](#interface-arbitraryt) 接口，且 T 需实现 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<T>>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<ArrayList<T>>
```

功能：获取生成 ArrayList\<T> 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<ArrayList\<T>> - 生成 ArrayList\<T> 类型随机值生成器。

### extend\<T> HashSet\<T> <: Arbitrary\<HashSet\<T>> where T <: Arbitrary\<T>

```cangjie
extend<T> HashSet<T> <: Arbitrary<HashSet<T>> where T <: Arbitrary<T>
```

功能：为 [HashSet](../../collection/collection_package_api/collection_package_class.md#class-hashsett-where-t--hashable--equatablet)\<T>  实现了 [Arbitrary](#interface-arbitraryt) 接口，且 T 需实现 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[HashSet](../../collection/collection_package_api/collection_package_class.md#class-hashsett-where-t--hashable--equatablet)\<T>>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<HashSet<T>>
```

功能：获取生成 HashSet\<T> 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<HashSet\<T>> - 生成 HashSet\<T> 类型随机值生成器。

### extend\<K, V> HashMap\<K, V> <: Arbitrary\<HashMap\<K, V>> where K <: Arbitrary\<K>, V <: Arbitrary\<V>

```cangjie
extend<K, V> HashMap<K, V> <: Arbitrary<HashMap<K, V>> where K <: Arbitrary<K>, V <: Arbitrary<V>
```

功能：为 [HashMap](../../collection/collection_package_api/collection_package_class.md#class-hashmapk-v)\<T>  实现了 [Arbitrary](#interface-arbitraryt) 接口，且 T 需实现 [Arbitrary](#interface-arbitraryt)\<T> 接口。

父类型：

- [Arbitrary](#interface-arbitraryt)\<[HashMap](../../collection/collection_package_api/collection_package_class.md#class-hashmapk-v)\<K, V>>

#### static func arbitrary(RandomSource)

```cangjie
static func arbitrary(random: RandomSource): Generator<HashMap<K, V>>
```

功能：获取生成 HashMap\<K, V> 类型随机值生成器。

参数：

- random: [RandomSource](../../unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) - 随机数。

返回值：

- [Generator](../../unittest/unittest_package_api/unittest_package_interfaces.md#interface-generatort)\<HashMap\<K, V>> - 生成 HashMap\<K, V> 类型随机值生成器。

## interface IndexAccess

```cangjie
public interface IndexAccess {
    func getElementAsAny(index: Int64): ?Any
}
```

功能：通过索引访问元组元素的实用程序接口。

### func getElementAsAny(Int64)

```cangjie
func getElementAsAny(index: Int64): ?Any
```

功能：通过索引访问元组元素。

参数：

- index: [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) - 索引值。

返回值：

- ?[Any](../../core/core_package_api/core_package_interfaces.md#interface-any) - 元素值。若未获取到则为 `None` 。

## interface RandomSource

```cangjie
public interface RandomSource {
    func nextBool(): Bool
    func nextInt8(): Int8
    func nextInt16(): Int16
    func nextInt32(): Int32
    func nextInt64(): Int64
    func nextInt8(max: Int8): Int8
    func nextInt16(max: Int16): Int16
    func nextInt32(max: Int32): Int32
    func nextInt64(max: Int64): Int64
    func nextUInt8(): UInt8
    func nextUInt16(): UInt16
    func nextUInt32(): UInt32
    func nextUInt64(): UInt64
    func nextUInt8(max: UInt8): UInt8
    func nextUInt16(max: UInt16): UInt16
    func nextUInt32(max: UInt32): UInt32
    func nextUInt64(max: UInt64): UInt64
    func nextFloat16(): Float16
    func nextFloat32(): Float32
    func nextFloat64(): Float64
    func nextGaussianFloat64(mean!: Float64, sigma!: Float64): Float64
    func nextIntNative(): IntNative
    func nextUIntNative(): UIntNative

    func suggestUInt8(): UInt8
    func suggestUInt16(): UInt16
    func suggestUInt32(): UInt32
    func suggestUInt64(): UInt64
    func suggestUIntNative(): UIntNative
    func suggestInt8(): Int8
    func suggestInt16(): Int16
    func suggestInt32(): Int32
    func suggestInt64(): Int64
    func suggestIntNative(): IntNative
    func suggestFloat16(): Float16
    func suggestFloat32(): Float32
    func suggestFloat64(): Float64
    func suggestBool(): Bool
    func suggestRune(): Rune
}
```

功能：提供 [Arbitrary](#interface-arbitraryt) 所需的随机生成基础类型数据的能力。

### func nextBool()

```cangjie
public open func nextBool(): Bool
```

功能：获取一个布尔类型的伪随机值。

返回值：

- [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) - 一个 [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) 类型的伪随机数。

### func nextFloat16()

```cangjie
public open func nextFloat16(): Float16
```

功能：获取一个 [Float16](../../core/core_package_api/core_package_intrinsics.md#float16) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

- [Float16](../../core/core_package_api/core_package_intrinsics.md#float16) - 一个 [Float16](../../core/core_package_api/core_package_intrinsics.md#float16) 类型的伪随机数。

### func nextFloat32()

```cangjie
public open func nextFloat32(): Float32
```

功能：获取一个 [Float32](../../core/core_package_api/core_package_intrinsics.md#float32) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

- [Float32](../../core/core_package_api/core_package_intrinsics.md#float32) - 一个 [Float32](../../core/core_package_api/core_package_intrinsics.md#float32) 类型的伪随机数。

### func nextFloat64()

```cangjie
public open func nextFloat64(): Float64
```

功能：获取一个 [Float64](../../core/core_package_api/core_package_intrinsics.md#float64) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

- [Float64](../../core/core_package_api/core_package_intrinsics.md#float64) - 一个 [Float64](../../core/core_package_api/core_package_intrinsics.md#float64) 类型的伪随机数。

### func nextGaussianFloat64(Float64, Float64)

```cangjie
public func nextGaussianFloat64(mean!: Float64 = 0.0, sigma!: Float64 = 1.0): Float64
```

功能：获取一个 [Float64](../../core/core_package_api/core_package_intrinsics.md#float64) 类型的符合指定均值与标准差的高斯分布的随机数。

默认获取一个 [Float64](../../core/core_package_api/core_package_intrinsics.md#float64) 类型且符合均值为 0.0 标准差为 1.0 的高斯分布的随机数。其中均值是期望值，可解释为位置参数，决定了分布的位置，标准差可解释为尺度参数，决定了分布的幅度。此函数调用了函数 `nextGaussianFloat64Implement` 得到返回值，所以当子类继承 [Random](../../random/random_package_api/random_package_classes.md#class-random) 并覆写 `nextGaussianFloat64Implement` 函数时，调用子类的该函数将会返回覆写的函数的返回值。

参数：

- mean!: [Float64](../../core/core_package_api/core_package_intrinsics.md#float64) - 均值，默认值 0.0。
- sigma!: [Float64](../../core/core_package_api/core_package_intrinsics.md#float64) - 标准差，默认值 1.0。

返回值：

- [Float64](../../core/core_package_api/core_package_intrinsics.md#float64) - 一个 [Float64](../../core/core_package_api/core_package_intrinsics.md#float64) 类型的随机数。

### func nextInt16()

```cangjie
public open func nextInt16(): Int16
```

功能：获取一个 [Int16](../../core/core_package_api/core_package_intrinsics.md#int16) 类型的伪随机数。

返回值：

- [Int16](../../core/core_package_api/core_package_intrinsics.md#int16) - 一个 [Int16](../../core/core_package_api/core_package_intrinsics.md#int16) 类型的伪随机数。

### func nextInt16(Int16)

```cangjie
public open func nextInt16(upper: Int16): Int16
```

功能：获取一个范围在 [0, `upper`) 的 [Int16](../../core/core_package_api/core_package_intrinsics.md#int16) 类型的伪随机数。

参数：

- upper: [Int16](../../core/core_package_api/core_package_intrinsics.md#int16) - 表示生成的伪随机数范围上界（不包括 `upper`），取值范围 (0, [Int16](../../core/core_package_api/core_package_intrinsics.md#int16).Max]。

返回值：

- [Int16](../../core/core_package_api/core_package_intrinsics.md#int16) - 一个 [Int16](../../core/core_package_api/core_package_intrinsics.md#int16) 类型的伪随机数。

异常：

- [IllegalArgumentException](../../core/core_package_api/core_package_exceptions.md#class-illegalargumentexception) - 如果 `upper` 小于等于 0，抛出异常。

### func nextInt32()

```cangjie
public open func nextInt32(): Int32
```

功能：获取一个 [Int32](../../core/core_package_api/core_package_intrinsics.md#int32) 类型的伪随机数。

返回值：

- [Int32](../../core/core_package_api/core_package_intrinsics.md#int32) - 一个 [Int32](../../core/core_package_api/core_package_intrinsics.md#int32) 类型的伪随机数。

### func nextInt32(Int32)

```cangjie
public open func nextInt32(upper: Int32): Int32
```

功能：获取一个范围在 [0, `upper`) 的 [Int32](../../core/core_package_api/core_package_intrinsics.md#int32) 类型的伪随机数。

参数：

- upper: [Int32](../../core/core_package_api/core_package_intrinsics.md#int32) - 表示生成的伪随机数范围上界（不包括 `upper`），取值范围 (0, [Int32](../../core/core_package_api/core_package_intrinsics.md#int32).Max]。

返回值：

- [Int32](../../core/core_package_api/core_package_intrinsics.md#int32) - 一个 [Int32](../../core/core_package_api/core_package_intrinsics.md#int32) 类型的伪随机数。

异常：

- [IllegalArgumentException](../../core/core_package_api/core_package_exceptions.md#class-illegalargumentexception) - 如果 `upper` 小于等于 0，抛出异常。

### func nextInt64()

```cangjie
public open func nextInt64(): Int64
```

功能：获取一个 [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) 类型的伪随机数。

返回值：

- [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) - 一个 [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) 类型的伪随机数。

### func nextInt64(Int64)

```cangjie
public open func nextInt64(upper: Int64): Int64
```

功能：获取一个范围在 [0, `upper`) 的 [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) 类型的伪随机数。

参数：

- upper: [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) - 生成的伪随机数范围上界（不包括 `upper`），取值范围 (0, [Int64](../../core/core_package_api/core_package_intrinsics.md#int64).Max]。

返回值：

- [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) - 一个 [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) 类型的伪随机数。

异常：

- [IllegalArgumentException](../../core/core_package_api/core_package_exceptions.md#class-illegalargumentexception) - 如果 `upper` 小于等于 0，抛出异常。

### func nextInt8()

```cangjie
public open func nextInt8(): Int8
```

功能：获取一个 [Int8](../../core/core_package_api/core_package_intrinsics.md#int8) 类型的伪随机数。

返回值：

- [Int8](../../core/core_package_api/core_package_intrinsics.md#int8) - 一个 [Int8](../../core/core_package_api/core_package_intrinsics.md#int8) 类型的伪随机数。

### func nextInt8(Int8): Int8

```cangjie
public open func nextInt8(upper: Int8): Int8
```

功能：获取一个范围在 [0, `upper`) 的 [Int8](../../core/core_package_api/core_package_intrinsics.md#int8) 类型的伪随机数。

参数：

- upper: [Int8](../../core/core_package_api/core_package_intrinsics.md#int8) - 生成的伪随机数范围上界（不包括 `upper`），取值范围 (0, [Int8](../../core/core_package_api/core_package_intrinsics.md#int8).Max]。

返回值：

- [Int8](../../core/core_package_api/core_package_intrinsics.md#int8) - 一个 [Int8](../../core/core_package_api/core_package_intrinsics.md#int8) 类型的伪随机数。

异常：

- [IllegalArgumentException](../../core/core_package_api/core_package_exceptions.md#class-illegalargumentexception) - 如果 `upper` 小于等于 0，抛出异常。

### func nextIntNative():IntNative

```cangjie
public func nextIntNative(): IntNative
```

功能：获取一个 [IntNative](../../core/core_package_api/core_package_intrinsics.md#intnative) 类型的伪随机数。

返回值：

- [IntNative](../../core/core_package_api/core_package_intrinsics.md#intnative) - 一个 [IntNative](../../core/core_package_api/core_package_intrinsics.md#intnative) 类型的伪随机数。

### func nextUInt16()

```cangjie
public open func nextUInt16(): UInt16
```

功能：获取一个 [UInt16](../../core/core_package_api/core_package_intrinsics.md#uint16) 类型的伪随机数。

返回值：

- [UInt16](../../core/core_package_api/core_package_intrinsics.md#uint16) - 一个 [UInt16](../../core/core_package_api/core_package_intrinsics.md#uint16) 类型的伪随机数。

### func nextUInt16(UInt16)

```cangjie
public open func nextUInt16(upper: UInt16): UInt16
```

功能：获取一个范围在 [0, `upper`) 的 [UInt16](../../core/core_package_api/core_package_intrinsics.md#uint16) 类型的伪随机数。

参数：

- upper: [UInt16](../../core/core_package_api/core_package_intrinsics.md#uint16) - 生成的伪随机数范围上界（不包括 `upper`），取值范围 (0, [UInt16](../../core/core_package_api/core_package_intrinsics.md#uint16).Max]。

返回值：

- [UInt16](../../core/core_package_api/core_package_intrinsics.md#uint16) - 一个 [UInt16](../../core/core_package_api/core_package_intrinsics.md#uint16) 类型的伪随机数。

异常：

- [IllegalArgumentException](../../core/core_package_api/core_package_exceptions.md#class-illegalargumentexception) - 如果 `upper` 等于 0，抛出异常。

### func nextUInt32()

```cangjie
public open func nextUInt32(): UInt32
```

功能：获取一个 [UInt32](../../core/core_package_api/core_package_intrinsics.md#uint32) 类型的伪随机数。

返回值：

- [UInt32](../../core/core_package_api/core_package_intrinsics.md#uint32) - 一个 [UInt32](../../core/core_package_api/core_package_intrinsics.md#uint32) 类型的伪随机数。

### func nextUInt32(UInt32)

```cangjie
public open func nextUInt32(upper: UInt32): UInt32
```

功能：获取一个范围在 [0, `upper`) 的 [UInt32](../../core/core_package_api/core_package_intrinsics.md#uint32) 类型的伪随机数。

参数：

- upper: [UInt32](../../core/core_package_api/core_package_intrinsics.md#uint32) - 生成的伪随机数范围上界（不包括 `upper`），取值范围 (0, [UInt32](../../core/core_package_api/core_package_intrinsics.md#uint32).Max]。

返回值：

- [UInt32](../../core/core_package_api/core_package_intrinsics.md#uint32) - 一个 [UInt32](../../core/core_package_api/core_package_intrinsics.md#uint32) 类型的伪随机数。

异常：

- [IllegalArgumentException](../../core/core_package_api/core_package_exceptions.md#class-illegalargumentexception) - 如果 `upper` 等于 0，抛出异常。

### func nextUInt64()

```cangjie
public open func nextUInt64(): UInt64
```

功能：获取一个 [UInt64](../../core/core_package_api/core_package_intrinsics.md#uint64) 类型的伪随机数。

返回值：

- [UInt64](../../core/core_package_api/core_package_intrinsics.md#uint64) - 一个 [UInt64](../../core/core_package_api/core_package_intrinsics.md#uint64) 类型的伪随机数。

### func nextUInt64(UInt64)

```cangjie
public open func nextUInt64(upper: UInt64): UInt64
```

功能：获取一个范围在 [0, `upper`) 的 [UInt64](../../core/core_package_api/core_package_intrinsics.md#uint64) 类型的伪随机数。

参数：

- upper: [UInt64](../../core/core_package_api/core_package_intrinsics.md#uint64) - 生成的伪随机数范围上界（不包括 `upper`），取值范围 (0, [UInt64](../../core/core_package_api/core_package_intrinsics.md#uint64).Max]。

返回值：

- [UInt64](../../core/core_package_api/core_package_intrinsics.md#uint64) - 一个 [UInt64](../../core/core_package_api/core_package_intrinsics.md#uint64) 类型的伪随机数。

异常：

- [IllegalArgumentException](../../core/core_package_api/core_package_exceptions.md#class-illegalargumentexception) - 如果 `upper` 等于 0，抛出异常。

### func nextUInt8()

```cangjie
public open func nextUInt8(): UInt8
```

功能：获取一个 [UInt8](../../core/core_package_api/core_package_intrinsics.md#uint8) 类型的伪随机数。

返回值：

- [UInt8](../../core/core_package_api/core_package_intrinsics.md#uint8) - 一个 [UInt8](../../core/core_package_api/core_package_intrinsics.md#uint8) 类型的伪随机数。

### func nextUInt8(UInt8)

```cangjie
public open func nextUInt8(upper: UInt8): UInt8
```

功能：获取一个范围在 [0, `upper`) 的 [UInt8](../../core/core_package_api/core_package_intrinsics.md#uint8) 类型的伪随机数。

参数：

- upper: [UInt8](../../core/core_package_api/core_package_intrinsics.md#uint8) - 生成的伪随机数范围上界（不包括 `upper`），取值范围 (0, [UInt8](../../core/core_package_api/core_package_intrinsics.md#uint8).Max]。

返回值：

- [UInt8](../../core/core_package_api/core_package_intrinsics.md#uint8) - 一个 [UInt8](../../core/core_package_api/core_package_intrinsics.md#uint8) 类型的伪随机数。

异常：

- [IllegalArgumentException](../../core/core_package_api/core_package_exceptions.md#class-illegalargumentexception) - 如果 `upper` 等于 0，抛出异常。

### func nextUIntNative():UIntNative

```cangjie
public func nextUIntNative(): UIntNative
```

功能：获取一个 [UIntNative](../../core/core_package_api/core_package_intrinsics.md#uintnative) 类型的伪随机数。

返回值：

- [UIntNative](../../core/core_package_api/core_package_intrinsics.md#uintnative) - 一个 [UIntNative](../../core/core_package_api/core_package_intrinsics.md#uintnative) 类型的伪随机数。

### func suggestBool()

```cangjie
public open func suggestBool(): Bool
```

功能：获取一个布尔类型的伪随机值。

返回值：

- [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) - 一个 [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) 类型的伪随机数。

### func suggestRune()

```cangjie
public open func suggestRune(): Rune
```

功能：获取一个 [Rune](../../core/core_package_api/core_package_intrinsics.md#rune) 类型的伪随机值。

返回值：

- [Rune](../../core/core_package_api/core_package_intrinsics.md#rune) - 一个 [Rune](../../core/core_package_api/core_package_intrinsics.md#rune) 类型的伪随机数。

### func suggestFloat16()

```cangjie
public open func suggestFloat16(): Float16
```

功能：获取一个 [Float16](../../core/core_package_api/core_package_intrinsics.md#float16) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

- [Float16](../../core/core_package_api/core_package_intrinsics.md#float16) - 一个 [Float16](../../core/core_package_api/core_package_intrinsics.md#float16) 类型的伪随机数。

### func suggestFloat32()

```cangjie
public open func suggestFloat32(): Float32
```

功能：获取一个 [Float32](../../core/core_package_api/core_package_intrinsics.md#float32) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

- [Float32](../../core/core_package_api/core_package_intrinsics.md#float32) - 一个 [Float32](../../core/core_package_api/core_package_intrinsics.md#float32) 类型的伪随机数。

### func suggestFloat64()

```cangjie
public open func suggestFloat64(): Float64
```

功能：获取一个 [Float64](../../core/core_package_api/core_package_intrinsics.md#float64) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

- [Float64](../../core/core_package_api/core_package_intrinsics.md#float64) - 一个 [Float64](../../core/core_package_api/core_package_intrinsics.md#float64) 类型的伪随机数。

### func suggestInt16()

```cangjie
public open func suggestInt16(): Int16
```

功能：获取一个 [Int16](../../core/core_package_api/core_package_intrinsics.md#int16) 类型的伪随机数。

返回值：

- [Int16](../../core/core_package_api/core_package_intrinsics.md#int16) - 一个 [Int16](../../core/core_package_api/core_package_intrinsics.md#int16) 类型的伪随机数。

### func suggestInt32()

```cangjie
public open func suggestInt32(): Int32
```

功能：获取一个 [Int32](../../core/core_package_api/core_package_intrinsics.md#int32) 类型的伪随机数。

返回值：

- [Int32](../../core/core_package_api/core_package_intrinsics.md#int32) - 一个 [Int32](../../core/core_package_api/core_package_intrinsics.md#int32) 类型的伪随机数。

### func suggestInt64()

```cangjie
public open func suggestInt64(): Int64
```

功能：获取一个 [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) 类型的伪随机数。

返回值：

- [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) - 一个 [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) 类型的伪随机数。

### func suggestInt8()

```cangjie
public open func suggestInt8(): Int8
```

功能：获取一个 [Int8](../../core/core_package_api/core_package_intrinsics.md#int8) 类型的伪随机数。

返回值：

- [Int8](../../core/core_package_api/core_package_intrinsics.md#int8) - 一个 [Int8](../../core/core_package_api/core_package_intrinsics.md#int8) 类型的伪随机数。

### func suggestIntNative():IntNative

```cangjie
public func suggestIntNative(): IntNative
```

功能：获取一个 [IntNative](../../core/core_package_api/core_package_intrinsics.md#intnative) 类型的伪随机数。

返回值：

- [IntNative](../../core/core_package_api/core_package_intrinsics.md#intnative) - 一个 [IntNative](../../core/core_package_api/core_package_intrinsics.md#intnative) 类型的伪随机数。

### func suggestUInt16()

```cangjie
public open func suggestUInt16(): UInt16
```

功能：获取一个 [UInt16](../../core/core_package_api/core_package_intrinsics.md#uint16) 类型的伪随机数。

返回值：

- [UInt16](../../core/core_package_api/core_package_intrinsics.md#uint16) - 一个 [UInt16](../../core/core_package_api/core_package_intrinsics.md#uint16) 类型的伪随机数。

### func suggestUInt32()

```cangjie
public open func suggestUInt32(): UInt32
```

功能：获取一个 [UInt32](../../core/core_package_api/core_package_intrinsics.md#uint32) 类型的伪随机数。

返回值：

- [UInt32](../../core/core_package_api/core_package_intrinsics.md#uint32) - 一个 [UInt32](../../core/core_package_api/core_package_intrinsics.md#uint32) 类型的伪随机数。

### func suggestUInt64()

```cangjie
public open func suggestUInt64(): UInt64
```

功能：获取一个 [UInt64](../../core/core_package_api/core_package_intrinsics.md#uint64) 类型的伪随机数。

返回值：

- [UInt64](../../core/core_package_api/core_package_intrinsics.md#uint64) - 一个 [UInt64](../../core/core_package_api/core_package_intrinsics.md#uint64) 类型的伪随机数。

### func suggestUInt8()

```cangjie
public open func suggestUInt8(): UInt8
```

功能：获取一个 [UInt8](../../core/core_package_api/core_package_intrinsics.md#uint8) 类型的伪随机数。

返回值：

- [UInt8](../../core/core_package_api/core_package_intrinsics.md#uint8) - 一个 [UInt8](../../core/core_package_api/core_package_intrinsics.md#uint8) 类型的伪随机数。

### func suggestUIntNative():UIntNative

```cangjie
public func suggestUIntNative(): UIntNative
```

功能：获取一个 [UIntNative](../../core/core_package_api/core_package_intrinsics.md#uintnative) 类型的伪随机数。

返回值：

- [UIntNative](../../core/core_package_api/core_package_intrinsics.md#uintnative) - 一个 [UIntNative](../../core/core_package_api/core_package_intrinsics.md#uintnative) 类型的伪随机数。

## interface Shrink\<T>

```cangjie
public interface Shrink<T> {
    func shrink(): Iterable<T>
}
```

功能：将 T 类型的值缩减到多个“更小”的值。

### func shrink()

```cangjie
func shrink(): Iterable<T>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T> - 一组可能的“较小”值的迭代器。

### extend Bool <: Shrink\<Bool>

```cangjie
extend Bool <: Shrink<Bool>
```

功能：为 [Bool](../../core/core_package_api/core_package_intrinsics.md#bool) 实现了 [Shrink](#interface-shrinkt)\<T> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[Bool](../../core/core_package_api/core_package_intrinsics.md#bool)>

#### func shrink()

```cangjie
func shrink(): Iterable<Bool>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<Bool> - 一组可能的“较小”值的迭代器。

### extend Int16 <: Shrink\<Int16>

```cangjie
extend Int16 <: Shrink<Int16>
```

功能：为 [Int16](../../core/core_package_api/core_package_intrinsics.md#int16) 实现了 [Shrink](#interface-shrinkt)\<T> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[Int16](../../core/core_package_api/core_package_intrinsics.md#int16)>

#### func shrink()

```cangjie
func shrink(): Iterable<Int16>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<Int16> - 一组可能的“较小”值的迭代器。

### extend Int32 <: Shrink\<Int32>

```cangjie
extend Int32 <: Shrink<Int32>
```

功能：为 [Int32](../../core/core_package_api/core_package_intrinsics.md#int32) 实现了 [Shrink](#interface-shrinkt)\<T> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[Int32](../../core/core_package_api/core_package_intrinsics.md#int32)>

#### func shrink()

```cangjie
func shrink(): Iterable<Int32>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<Int32> - 一组可能的“较小”值的迭代器。

### extend Int64 <: Shrink\<Int64>

```cangjie
extend Int64 <: Shrink<Int64>
```

功能：为 [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) 实现了 [Shrink](#interface-shrinkt)\<T> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[Int64](../../core/core_package_api/core_package_intrinsics.md#int64)>

#### func shrink()

```cangjie
func shrink(): Iterable<Int64>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<Int64> - 一组可能的“较小”值的迭代器。

### extend Int8 <: Shrink\<Int8>

```cangjie
extend Int8 <: Shrink<Int8>
```

功能：为 [Int8](../../core/core_package_api/core_package_intrinsics.md#int8) 实现了 [Shrink](#interface-shrinkt)\<T> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[Int8](../../core/core_package_api/core_package_intrinsics.md#int8)>

#### func shrink()

```cangjie
func shrink(): Iterable<Int8>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<Int8> - 一组可能的“较小”值的迭代器。

### extend IntNative <: Shrink\<IntNative>

```cangjie
extend IntNative <: Shrink<IntNative>
```

功能：为 [IntNative](../../core/core_package_api/core_package_intrinsics.md#intnative) 实现了 [Shrink](#interface-shrinkt)\<T> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[IntNative](../../core/core_package_api/core_package_intrinsics.md#intnative)>

#### func shrink()

```cangjie
func shrink(): Iterable<IntNative>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<IntNative> - 一组可能的“较小”值的迭代器。

### extend Rune <: Shrink\<Rune>

```cangjie
extend Rune <: Shrink<Rune>
```

功能：为 [Rune](../../core/core_package_api/core_package_intrinsics.md#rune) 实现了 [Shrink](#interface-shrinkt)\<T> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[Rune](../../core/core_package_api/core_package_intrinsics.md#rune)>

#### func shrink()

```cangjie
func shrink(): Iterable<Rune>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<Rune> - 一组可能的“较小”值的迭代器。

### extend String <: Shrink\<String>

```cangjie
extend String <: Shrink<String>
```

功能：为 [String](../../core/core_package_api/core_package_structs.md#struct-string) 实现了 [Shrink](#interface-shrinkt)\<T> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[String](../../core/core_package_api/core_package_structs.md#struct-string)>

#### func shrink()

```cangjie
func shrink(): Iterable<String>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<String> - 一组可能的“较小”值的迭代器。

### extend UInt16 <: Shrink\<UInt16>

```cangjie
extend UInt16 <: Shrink<UInt16>
```

功能：为 [UInt16](../../core/core_package_api/core_package_intrinsics.md#uint16) 实现了 [Shrink](#interface-shrinkt)\<T> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[UInt16](../../core/core_package_api/core_package_intrinsics.md#uint16)>

#### func shrink()

```cangjie
func shrink(): Iterable<UInt16>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<UInt16> - 一组可能的“较小”值的迭代器。

### extend UInt32 <: Shrink\<UInt32>

```cangjie
extend UInt32 <: Shrink<UInt32>
```

功能：为 [UInt32](../../core/core_package_api/core_package_intrinsics.md#uint32) 实现了 [Shrink](#interface-shrinkt)\<T> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[UInt32](../../core/core_package_api/core_package_intrinsics.md#uint32)>

#### func shrink()

```cangjie
func shrink(): Iterable<UInt32>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<UInt32> - 一组可能的“较小”值的迭代器。

### extend UInt64 <: Shrink\<UInt64>

```cangjie
extend UInt64 <: Shrink<UInt64>
```

功能：为 [UInt64](../../core/core_package_api/core_package_intrinsics.md#uint64) 实现了 [Shrink](#interface-shrinkt)\<T> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[UInt64](../../core/core_package_api/core_package_intrinsics.md#uint64)>

#### func shrink()

```cangjie
func shrink(): Iterable<UInt64>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<UInt64> - 一组可能的“较小”值的迭代器。

### extend UInt8 <: Shrink\<UInt8>

```cangjie
extend UInt8 <: Shrink<UInt8>
```

功能：为 [UInt8](../../core/core_package_api/core_package_intrinsics.md#uint8) 实现了 [Shrink](#interface-shrinkt)\<T> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[UInt8](../../core/core_package_api/core_package_intrinsics.md#uint8)>

#### func shrink()

```cangjie
func shrink(): Iterable<UInt8>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<UInt8> - 一组可能的“较小”值的迭代器。

### extend UIntNative <: Shrink\<UIntNative>

```cangjie
extend UIntNative <: Shrink<UIntNative>
```

功能：为 [UIntNative](../../core/core_package_api/core_package_intrinsics.md#uintnative) 实现了 [Shrink](#interface-shrinkt)\<T> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[UIntNative](../../core/core_package_api/core_package_intrinsics.md#uintnative)>

#### func shrink()

```cangjie
func shrink(): Iterable<UIntNative>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<UIntNative> - 一组可能的“较小”值的迭代器。

### extend Unit <: Shrink\<Unit>

```cangjie
extend Unit <: Shrink<Unit>
```

功能：为 [Unit](../../core/core_package_api/core_package_intrinsics.md#unit) 实现了 [Shrink](#interface-shrinkt)\<T> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[Unit](../../core/core_package_api/core_package_intrinsics.md#unit)>

#### func shrink()

```cangjie
func shrink(): Iterable<Unit>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<Unit> - 一组可能的“较小”值的迭代器。

### extend Float16 <: Shrink\<Float16>

```cangjie
extend Float16 <: Shrink<Float16>
```

功能：为 [Float16](../../core/core_package_api/core_package_intrinsics.md#float16) 实现了 [Shrink](#interface-shrinkt)\<T> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[Float16](../../core/core_package_api/core_package_intrinsics.md#float16)>

#### func shrink()

```cangjie
func shrink(): Iterable<Float16>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<Float16> - 一组可能的“较小”值的迭代器。

### extend Float32 <: Shrink\<Float32>

```cangjie
extend Float32 <: Shrink<Float32>
```

功能：为 [Float32](../../core/core_package_api/core_package_intrinsics.md#float32) 实现了 [Shrink](#interface-shrinkt)\<T> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[Float32](../../core/core_package_api/core_package_intrinsics.md#float32)>

#### func shrink()

```cangjie
func shrink(): Iterable<Float32>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<Float32> - 一组可能的“较小”值的迭代器。

### extend Float64 <: Shrink\<Float64>

```cangjie
extend Float64 <: Shrink<Float64>
```

功能：为 [Float64](../../core/core_package_api/core_package_intrinsics.md#float64) 实现了 [Shrink](#interface-shrinkt)\<T> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[Float64](../../core/core_package_api/core_package_intrinsics.md#float64)>

#### func shrink()

```cangjie
func shrink(): Iterable<Float64>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<Float64> - 一组可能的“较小”值的迭代器。

### extend\<T> Array\<T> <: Shrink\<Array\<T>>

```cangjie
extend<T> Array<T> <: Shrink<Array<T>>
```

功能：为 [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<T> 实现了 [Shrink](#interface-shrinkt)\<[Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<T>> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<T>>

#### func shrink()

```cangjie
func shrink(): Iterable<Array<T>>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<Array\<T>> - 一组可能的“较小”值的迭代器。

### extend\<T> Option\<T> <: Shrink\<Option\<T>>

```cangjie
extend<T> Option<T> <: Shrink<Option<T>>
```

功能：为 [Option](../../core/core_package_api/core_package_enums.md#enum-optiont)\<T> 实现了 [Shrink](#interface-shrinkt)\<[Option](../../core/core_package_api/core_package_enums.md#enum-optiont)\<T>> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[Option](../../core/core_package_api/core_package_enums.md#enum-optiont)\<T>>

#### func shrink()

```cangjie
func shrink(): Iterable<Option<T>>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<Option\<T>> - 一组可能的“较小”值的迭代器。

### extend\<T> ArrayList\<T> <: Shrink\<ArrayList\<T>>

```cangjie
extend<T> ArrayList<T> <: Shrink<ArrayList<T>>
```

功能：为 [ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<T> 实现了 [Shrink](#interface-shrinkt)\<[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<T>> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt)\<T>>

#### func shrink()

```cangjie
func shrink(): Iterable<ArrayList<T>>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<ArrayList\<T>> - 一组可能的“较小”值的迭代器。

### extend\<T> HashSet\<T> <: Shrink\<HashSet\<T>>

```cangjie
extend<T> HashSet<T> <: Shrink<HashSet<T>>
```

功能：为 [HashSet](../../collection/collection_package_api/collection_package_class.md#class-hashsett-where-t--hashable--equatablet)\<T> 实现了 [Shrink](#interface-shrinkt)\<[HashSet](../../collection/collection_package_api/collection_package_class.md#class-hashsett-where-t--hashable--equatablet)\<T>> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[HashSet](../../collection/collection_package_api/collection_package_class.md#class-hashsett-where-t--hashable--equatablet)\<T>>

#### func shrink()

```cangjie
func shrink(): Iterable<HashSet<T>>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<HashSet\<T>> - 一组可能的“较小”值的迭代器。

### extend\<K, V> HashMap\<K, V> <: Shrink\<HashMap\<K, V>>

```cangjie
extend<K, V> HashMap<K, V> <: Shrink<HashMap<K, V>>
```

功能：为 [HashMap](../../collection/collection_package_api/collection_package_class.md#class-hashmapk-v)\<T> 实现了 [Shrink](#interface-shrinkt)\<[HashMap](../../collection/collection_package_api/collection_package_class.md#class-hashmapk-v)\<T>> 接口。

父类型：

- [Shrink](#interface-shrinkt)\<[HashMap](../../collection/collection_package_api/collection_package_class.md#class-hashmapk-v)\<T>>

#### func shrink()

```cangjie
func shrink(): Iterable<HashMap<K, V>>
```

功能：将该值缩小为一组可能的“较小”值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<HashMap\<K, V>> - 一组可能的“较小”值的迭代器。
