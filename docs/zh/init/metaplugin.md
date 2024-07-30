# 创建插件元数据类

```csharp
// 示例代码
using ShadowPluginLoader.MetaAttributes;
using ShadowPluginLoader.WinUI.Models;

namespace ShadowExample.Core.Plugins;

[ExportMeta]
public class ExampleMetaData : AbstractPluginMetaData
{
    [Meta(Required = true, PropertyGroupName = "Author")]
    public string Author { get; init; }
}
```

## 导出元数据

`ExportMeta`特性指明这个类是需要导出的元数据

你的元数据类**必须**使用`ExportMeta`

会自动导出为`元数据定义文件`给后续的插件使用

::: tip 说明

关于`元数据定义文件`,可查阅: [元数据定义文件](/zh/advance/define)

:::

## 继承

你的元数据类**必须**继承`AbstractPluginMetaData`
  
`AbstractPluginMetaData`是默认的插件元数据,包含以下内容:
- `Id`:插件Id
- `Name`:插件名称
- `Version`:插件版本
- `Dependencies`:插件依赖

所以以上四个你不需要设置

## 额外的元数据项

在上文的示例中,我们新增了一个元数据项`Author`

```csharp
public string Author { get; init; }
```
::: warning 注意

- 所有的元数据项都需要使用属性访问器(get/init)
- 元数据项的类型必须在该列表中: [支持的元数据项类型](/zh/advance/meta#支持的元数据项类型)

:::

## 元数据项的额外配置

```csharp
    [Meta(Required = true, PropertyGroupName = "Author")]
    public string Author { get; init; }
```
在上文中,我们使用了`Meta`特性

该特性用于配置我们的元数据项

| 可配置项       |      类型      |  默认值 | 说明 |
| ------------- | :-----------: | ---- | ---- |
| `Required`      | `bool` | `true` | 是否为必须项 |
| `Exclude`      |   `bool`   |   `false` | 是否忽略该属性,忽略后该属性不会被导出到define文件中 |
| `Nullable` |   `bool`    |   `false` |  是否允许该属性为`null` |
| `Regex` |   `string?`    |    `null` |  正则表达式,用于匹配该属性的值 |
| `PropertyGroupName` |   `string`    | 属性名称 |  元数据的对应的`MSBuild`名称,大小写敏感 |



