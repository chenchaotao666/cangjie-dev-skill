# std.unittest.prop_test

## 功能介绍

unittest.prop_test 为单元测试框架提供了参数化测试所需的类型和方法。

## API 列表

### 函数

|              函数名          |           功能           |
| --------------------------- | ------------------------ |
| [emptyIterable\<T>()](./unittest_prop_test_package_api/unittest_prop_test_package_functions.md#func-emptyiterablet) | 创建一个空的迭代器。 |
| [random\<T>()](./unittest_prop_test_package_api/unittest_prop_test_package_functions.md#func-randomt-where-t--arbitraryt) | 该函数生成 T 类型的随机数据，其中 T 必须实现接口 Arbitrary\<T> 。该函数的返回值是参数化测试的一种参数源。 |

### 接口

|              接口名          |           功能           |
| --------------------------- | ------------------------ |
| [Arbitrary\<T>](./unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-arbitraryt) | 生成 T 类型随机值的接口。 |
| [IndexAccess](./unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-indexaccess) | 通过索引访问元组元素的实用程序接口。 |
| [RandomSource](./unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-randomsource) | 提供 [Arbitrary\<T>](./unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-arbitraryt) 所需的随机生成基础类型数据的能力。 |
| [Shrink](./unittest_prop_test_package_api/unittest_prop_test_package_interfaces.md#interface-shrinkt) | 将 T 类型的值缩减到多个“更小”的值。 |

### 类

|              类名          |           功能           |
| --------------------------- | ------------------------ |
| [Generators](./unittest_prop_test_package_api/unittest_prop_test_package_classes.md#class-generators) | 包含辅助函数的类，可帮助开发人员编写自己的生成器。 |
| [LazySeq\<T>](./unittest_prop_test_package_api/unittest_prop_test_package_classes.md#class-lazyseqt) | 延迟计算的 T 类型值序列。用于在迭代时计算和记忆值。 |
| [ShrinkHelpers](./unittest_prop_test_package_api/unittest_prop_test_package_classes.md#class-shrinkhelpers) | 提供对元组实现缩减迭代器的方法。 |

### 结构体

|              结构体名          |           功能           |
| --------------------------- | ------------------------ |
| [Function0Wrapper](./unittest_prop_test_package_api/unittest_prop_test_package_structs.md#struct-function0wrapperr) | 将闭包封装为结构体。 |
| [TupleWrapper2](./unittest_prop_test_package_api/unittest_prop_test_package_structs.md#struct-tuplewrapper2t0-t1) | 将闭包封装为结构体。闭包带两个参数。 |
| [TupleWrapper3](./unittest_prop_test_package_api/unittest_prop_test_package_structs.md#struct-tuplewrapper3t0-t1-t2) | 将闭包封装为结构体。闭包带三个参数。 |
| [TupleWrapper4](./unittest_prop_test_package_api/unittest_prop_test_package_structs.md#struct-tuplewrapper4t0-t1-t2-t3) | 将闭包封装为结构体。闭包带四个参数。 |
| [TupleWrapper5](./unittest_prop_test_package_api/unittest_prop_test_package_structs.md#struct-tuplewrapper5t0-t1-t2-t3-t4) | 将闭包封装为结构体。闭包带五个参数。 |
