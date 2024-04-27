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

### 导出元数据

`ExportMeta`特性指明这个类是需要导出的元数据

你的元数据类**必须**使用`ExportMeta`

会自动导出为define文件给后续的插件使用

::: tip 说明

想了解define文件,可以查阅:

:::

### 继承

你的元数据类**必须**继承`AbstractPluginMetaData`
  
`AbstractPluginMetaData`是默认的插件元数据,包含以下内容:
- `Id`:插件Id
- `Name`:插件名称
- `Version`:插件版本
- `Dependencies`:插件描述

所以以上四个你不需要设置

### 额外的元数据属性

在上文的示例中,我们新增了一个元数据属性`Author`

```csharp
public string Author { get; init; }
```
::: warning 注意

所有的元数据都需要使用属性访问器(get/init)

:::

### 元数据属性的额外配置

```csharp
    [Meta(Required = true, PropertyGroupName = "Author")]
    public string Author { get; init; }
```
在上文中,我们使用了`Meta`特性

该特性用于配置我们的元数据属性

| 可配置项       |      类型      |  默认值 | 说明 |
| ------------- | :-----------: | ---- | ---- |
| `Required`      | `bool` | `true` | 是否为必须项 |
| `Exclude`      |   `bool`   |   `false` | 是否忽略该属性,忽略后该属性不会被导出到define文件中 |
| `Nullable` |   `bool`    |   `false` |  是否允许该属性为`null` |
| `Regex` |   `string?`    |    `null` |  正则表达式,用于匹配该属性的值 |
| `PropertyGroupName` |   `string`    | 属性名称 |  元数据的对应的`MSBuild`名称 |

::: warning 注意

请注意`PropertyGroupName`和`元数据属性`不要与`MSBuild`预留的名称冲突

是否冲突可以查阅该文档: [MSBuild 保留属性和已知属性](https://learn.microsoft.com/zh-cn/visualstudio/msbuild/msbuild-reserved-and-well-known-properties?view=vs-2022)
:::


