# 结构体

## struct OptionInfo

```cangjie
public struct OptionInfo {
    public let description: ?String
    public let name: String
    public let types!: HashMap<String, ?String> = HashMap()
    public let userDefined: Bool
}
```

功能: 打印帮助页面时可以使用的选项的信息。

### let description

```cangjie
public let description: ?String
```

功能：选项描述信息。

类型：?[String](../../../std/core/core_package_api/core_package_structs.md#struct-string)

### let name

```cangjie
public let name: String
```

功能：选项名称。

类型：[String](../../../std/core/core_package_api/core_package_structs.md#struct-string)

### let types

```cangjie
public let types!: HashMap<String, ?String> = HashMap()
```

功能：从选项类型名称映射到值的含义。

类型： HashMap<[String](../../../std/core/core_package_api/core_package_structs.md#struct-string), ?[String](../../../std/core/core_package_api/core_package_structs.md#struct-string)>

### let userDefined

```cangjie
public let userDefined: Bool
```

功能：选项是否已被定义。

类型：[Bool](../../../std/core/core_package_api/core_package_intrinsics.md#bool)
