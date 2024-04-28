# 元数据项编写格式

## 在插件中编写元数据

在`.csproj`中的元数据项均以字符串格式填写,程序会自动转换为你预先设计的类型

请查阅: [编写插件元数据](/zh/plugin/create#编写默认元数据)

## 支持的元数据项类型

| 基本类型       |      可空形式      |  数组形式 |
| ------------- | :-----------: | ---- | 
| `string`      | - | `string[]` | 
| `int`      | `int?` | `int[]` | 
| `uint`      | `uint?` | `uint[]` | 
| `short`      | `short?` | `short[]` | 
| `ushort`      | `ushort?` | `ushort[]` | 
| `long`      | `long?` | `long[]` | 
| `ulong`      | `ulong?` | `ulong[]` | 
| `bool`      | `bool?` | `bool[]` | 
| `float`      | `float?` | `float[]` | 
| `double`      | `double?` | `double[]` | 
| `decimal`      | `decimal?` | `decimal[]` | 

