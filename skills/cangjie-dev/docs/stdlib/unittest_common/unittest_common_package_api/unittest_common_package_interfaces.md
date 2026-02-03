# 接口

## interface DataProvider

```cangjie
public interface DataProvider<T> {
    func provide(): Iterable<T>
    func positions(): Array<Int64>
    prop isInfinite: Bool
}
```

功能：[DataStrategy](#interface-datastrategy) 的组件，用于提供测试数据，T 指定提供者提供的数据类型。

### prop isInfinite

```cangjie
prop isInfinite: Bool
```

功能：是否无法穷尽。

类型：[Bool](../../core/core_package_api/core_package_intrinsics.md#bool)

### func provide()

```cangjie
func provide(): Iterable<T>
```

功能：获取数据迭代器。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T> - 数据迭代器。

### func positions()

```cangjie
func positions(): Array<Int64>
```

功能：获取位置信息。

返回值：

- [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<Int64> - 位置信息。

### extend\<T> Array\<T> <: DataProvider\<T>

```cangjie
extend<T> Array<T> <: DataProvider<T>
```

功能：为 [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt) 实现了 [DataProvider](#interface-dataprovider)\<T> 接口。使如下配置形式可用：

```cangjie
@Test[x in [1,2,3]]
func test(x: Int64) {}
```

父类型：

- [DataProvider](#interface-dataprovider)\<T>

### extend\<T> Range\<T> <: DataProvider\<T>

```cangjie
extend<T> Range<T> <: DataProvider<T>
```

功能：为 [Range](../../core/core_package_api/core_package_structs.md#struct-ranget-where-t--countablet--comparablet--equatablet) 实现了 [DataProvider](../../unittest_common/unittest_common_package_api/unittest_common_package_interfaces.md#interface-dataprovider)\<T> 接口。使如下配置形式可用：

```cangjie
@Test[x in (0..5)]
func test(x: Int64) {}
```

父类型：

- [DataProvider](#interface-dataprovider)\<T>

## interface DataShrinker\<T>

```cangjie
public interface DataShrinker<T> {
    func shrink(value: T): Iterable<T>
}
```

功能：[DataStrategy](#interface-datastrategy) 的组件，用于在测试期间缩减数据，T 指定该收缩器处理的数据类型。

### func shrink(T)

```cangjie
func shrink(value: T): Iterable<T>
```

功能：获取类型 T 的值并生成较小值的集合。什么被认为是“较小”取决于数据的类型。

参数：

- value: T - 被缩减的值。

返回值：

- [Iterable](../../core/core_package_api/core_package_interfaces.md#interface-iterablee)\<T> - 较小值的集合，当数据无法再被缩减时返回空集合。

## interface DataStrategy

```cangjie
public interface DataStrategy<T> {
    func provider(configuration: Configuration): DataProvider<T>
    func shrinker(configuration: Configuration): DataShrinker<T>
}
```

功能：为参数化测试提供数据的策略，T 指定该策略操作的数据类型。

### func provider(Configuration)

```cangjie
func provider(configuration: Configuration): DataProvider<T>
```

功能：获取提供测试数据组件。

参数：

- configuration: [Configuration](unittest_common_package_classes.md#class-configuration) - 配置信息。

返回值：

- [DataProvider](../../unittest_common/unittest_common_package_api/unittest_common_package_interfaces.md#interface-dataprovider)\<T> - 提供测试数据的组件对象。

### func shrinker(Configuration)

```cangjie
open func shrinker(configuration: Configuration): DataShrinker<T>
```

功能：获取缩减测试数据的组件。

参数：

- configuration: [Configuration](unittest_common_package_classes.md#class-configuration) - 配置信息。

返回值：

- [DataShrinker](#interface-datashrinkert)\<T> - 缩减测试数据的组件对象。

### extend\<T> Array\<T> <: DataStrategy\<T>

```cangjie
extend<T> Array<T> <: DataStrategy<T>
```

功能：为 [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt) 实现了 [DataStrategy](#interface-datastrategy)\<T> 接口。使如下配置形式可用：

```cangjie
@Test[x in [1,2,3]]
func test(x: Int64) {}
```

父类型：

- [DataStrategy](#interface-datastrategy)\<T>

### extend\<T> Range\<T> <: DataStrategy\<T>

```cangjie
extend<T> Range<T> <: DataStrategy<T>
```

功能：为 [Range](../../core/core_package_api/core_package_structs.md#struct-ranget-where-t--countablet--comparablet--equatablet) 实现了 [DataStrategy](#interface-datastrategy)\<T> 接口。使如下配置形式可用：

```cangjie
@Test[x in (0..5)]
func test(x: Int64) {}
```

父类型：

- [DataStrategy](#interface-datastrategy)\<T>

## interface PrettyPrintable

```cangjie
public interface PrettyPrintable {
    func pprint(to: PrettyPrinter): PrettyPrinter
}
```

功能：类型实现该接口表示可以较好地进行颜色及缩进格式的打印。

### func pprint(PrettyPrinter)

```cangjie
func pprint(to: PrettyPrinter): PrettyPrinter
```

功能：将类型值打印到指定的打印器中。

参数：

- to: [PrettyPrinter](./unittest_common_package_classes.md#class-prettyprinter) - 打印器。

返回值：

- [PrettyPrinter](./unittest_common_package_classes.md#class-prettyprinter) - 打印器。

### extend\<T> Array\<T> <: PrettyPrintable where T <: PrettyPrintable

```cangjie
extend<T> Array<T> <: PrettyPrintable where T <: PrettyPrintable {
}
```

功能：为 [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt) 类型扩展了 [PrettyPrintable](#interface-prettyprintable) 接口。

父类型：

- [PrettyPrintable](#interface-prettyprintable)

#### func pprint(PrettyPrinter)

```cangjie
public func pprint(to: PrettyPrinter): PrettyPrinter
```

功能：将 [Array](../../core/core_package_api/core_package_structs.md#struct-arrayt)\<T> 打印到指定的打印器中。

参数：

- to: [PrettyPrinter](./unittest_common_package_classes.md#class-prettyprinter) - 打印器。

返回值：

- [PrettyPrinter](./unittest_common_package_classes.md#class-prettyprinter) - 打印器。

### extend\<T> ArrayList\<T> <: PrettyPrintable where T <: PrettyPrintable

```cangjie
extend<T> ArrayList<T> <: PrettyPrintable where T <: PrettyPrintable {
}
```

功能：为 [ArrayList](../../collection/collection_package_api/collection_package_class.md#class-arraylistt) 类型扩展了 [PrettyPrintable](#interface-prettyprintable) 接口。

父类型：

- [PrettyPrintable](#interface-prettyprintable)

#### func pprint(PrettyPrinter)

```cangjie
public func pprint(to: PrettyPrinter): PrettyPrinter
```

功能：将 ArrayList\<T> 打印到指定的打印器中。

参数：

- to: [PrettyPrinter](./unittest_common_package_classes.md#class-prettyprinter) - 打印器。

返回值：

- [PrettyPrinter](./unittest_common_package_classes.md#class-prettyprinter) - 打印器。

## interface KeyFor

```cangjie
public interface KeyFor<T> {
    prop name: String
}
```

功能：[Configuration](../../unittest_common/unittest_common_package_api/unittest_common_package_classes.md#class-configuration) 中配置型的键的类型。

可以通过 [@UnitestOption](./../../unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.md#unittestoption-宏) 定义自定义配置项键值。内置的 unittest 配置项可以根据[命名规则](../../unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.md#customassertion-宏)获取。例如，可以通过 `KeyRandomSeed.randomSeed` 键从 [Configuration](../../unittest_common/unittest_common_package_api/unittest_common_package_classes.md#class-configuration) 中提取 `randomSeed` 。

### prop name

```cangjie
prop name: String
```

功能：[Configuration](./unittest_common_package_classes.md#class-configuration) 中使用的键名称的字符串表示形式。

类型：[String](../../core/core_package_api/core_package_structs.md#struct-string)
