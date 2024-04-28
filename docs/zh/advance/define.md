# 元数据定义文件

本项目使用的`define`为`JSON Schema`的变体

在`Tool.Config.props`中启用`<IsPluginLoader>`后,会在生成时自动导出使用`[ExportMeta]`特性的类为`plugin.d.json`文件

例如:
```json
{
  "Namespace": "ShadowViewer.Plugins",
  "Type": "PluginMetaData",
  "Properties": {
    "Id": {
      "Type": "string",
      "PropertyGroupName": "Id"
    },
    "Name": {
      "Type": "string",
      "PropertyGroupName": "Name"
    },
    "Version": {
      "Type": "string",
      "PropertyGroupName": "Version",
      "Regex":"^[0-9]+\.[0-9]+\.[0-9]+$"
    },
    "Dependencies": {
      "Type": "string[]",
      "PropertyGroupName": "Dependencies"
    }
  },
  "Required": [
    "Id",
    "Name",
    "Version",
    "Dependencies"
  ]
}
```
| 名称       |      类型       | 说明 |
| ------------- | :-----------:  | ---- |
| `Namespace`      | `string`  | 元数据类所在的命名空间 |
| `Type`      |   `string`    |  元数据类名,[支持的元数据项类型](/zh/advance/meta#支持的元数据项类型) |
| `Properties` |   `Object`     |  元数据项,具体可配置项可查阅[`[Meta]`特性](/zh/init/metaplugin.html#元数据项的额外配置) |
| `Required` |   `string[]`    |  必须填写的元数据项 |
