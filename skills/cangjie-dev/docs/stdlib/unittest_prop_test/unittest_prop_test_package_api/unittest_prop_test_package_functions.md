# 函数

## func emptyIterable\<T>()

```cangjie
public func emptyIterable<T>(): Iterable<T>
```

功能：创建一个空的迭代器。

返回值：

- [Iterator](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T> - 空迭代器。

## func random\<T>() where T <: Arbitrary\<T>

```cangjie
public func random<T>(): RandomDataStrategy<T> where T <: Arbitrary<T>
```

功能：该函数生成 T 类型的随机数据，其中 T 必须实现接口 [Arbitrary](./unittest_prop_test_package_interfaces.md#interface-arbitrary)\<T> 。该函数的返回值是参数化测试的一种参数源。

返回值：

- [Arbitrary](./unittest_prop_test_package_interfaces.md#interface-arbitrary)\<T> - 使用随机数据生成的 [RandomDataStrategy](../../unittest/unittest_package_api/unittest_package_classes.md#class-randomdatastrategyt) 接口的实例。
