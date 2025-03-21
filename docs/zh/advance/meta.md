# 元数据项编写格式

## 在插件中编写元数据

在`.csproj`中的元数据项均以字符串格式填写,程序会自动转换为你预先设计的类型

请查阅: [编写插件元数据](/zh/plugin/create#编写默认元数据)

## 支持的元数据项类型

### 基本类型

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

### 自定义类型

将会读取类的所有属性,可以使用`[Meta]`特性自定义

```csharp
public class ShadowTag : IShadowTag
    {
        /// <summary>
        /// <inheritdoc />
        /// </summary>
        public string Name { get; set; } = null!;

        /// <summary>
        /// Id
        /// </summary>
        [Meta(Exclude = true)]
        public long Id { get; set; }


        /// <summary>
        /// <inheritdoc />
        /// </summary>
        public string BackgroundHex { get; set; } = null!;


        /// <summary>
        /// <inheritdoc />
        /// </summary>
        public string ForegroundHex { get; set; } = null!;

        /// <summary>
        /// <inheritdoc />
        /// </summary>
        [Meta(Exclude = true)]
        public Brush Background => new SolidColorBrush(BackgroundHex.ToColor());

        /// <summary>
        /// <inheritdoc />
        /// </summary>
        [Meta(Exclude = true)]
        public Brush Foreground => new SolidColorBrush(ForegroundHex.ToColor());


        /// <summary>
        /// <inheritdoc />
        /// </summary>
        [Meta(Required = false)]
        public string? Icon { get; set; }

        /// <summary>
        /// <inheritdoc />
        /// </summary>
        [Meta(Exclude = true)]
        public int TagType { get; set; }


        /// <summary>
        /// <inheritdoc />
        /// </summary>
        [Meta(Exclude = true)]
        public bool AllowClick { get; }
    }
```