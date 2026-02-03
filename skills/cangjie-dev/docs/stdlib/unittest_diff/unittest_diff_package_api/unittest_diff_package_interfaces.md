# 接口

## interface AssertPrintable

```cangjie
public interface AssertPrintable<T> {
    prop hasNestedDiff: Bool
    func pprintForAssertion(
        pp: PrettyPrinter, that: T, thisPrefix: String, thatPrefix: String, level: Int64
    ): PrettyPrinter
}
```

功能：提供打印 [@Assert](../../unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.md#assert-宏)/[@Expect](../../unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.md#expect-宏) 的检查结果的方法。

### prop hasNestedDiff

```cangjie
prop hasNestedDiff: Bool
```

功能：获取是否有嵌套 diff 层级。

类型：[Bool](../../core/core_package_api/core_package_intrinsics.md#bool)

### func pprintForAssertion(PrettyPrinter, T, String, String, Int64)

```cangjie
func pprintForAssertion(
    pp: PrettyPrinter, that: T, thisPrefix: String, thatPrefix: String, level: Int64
): PrettyPrinter
```

功能：打印 [@Assert](../../unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.md#assert-宏)/[@Expect](../../unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.md#expect-宏) 的检查结果的方法。

参数：

- pp: [PrettyPrinter](../../unittest_common/unittest_common_package_api/unittest_common_package_classes.md#class-prettyprinter) - 打印器。
- that: T - 待打印的信息。
- thisPrefix: [String](../../core/core_package_api/core_package_structs.md#struct-string) - 预期内容的前缀。
- thatPrefix: [String](../../core/core_package_api/core_package_structs.md#struct-string) - 实际内容的前缀。
- level: [Int64](../../core/core_package_api/core_package_intrinsics.md#int64) - 嵌套层级。

返回值：

- PrettyPrinter - 打印器。
