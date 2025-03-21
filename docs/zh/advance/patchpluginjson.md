# 修补plugin.json

在一些情况下,我们想对`plugin.json`进行二次修改,就可以使用该功能


## 注入点

使用`[EntryPoint]`特性标明类，该类将会修补进`plugin.json`

| 可配置项       |      类型      |  默认值 | 说明 |
| ------------- | :-----------: | ---- | ---- |
| `Name`      | `string?` | 类名 | 在`plugin.json`中的注入点名称 |


> 默认情况下会将`[MainPlugin]`指示的类名修补进`plugin.json`中,以便插件加载器快速识别类

### 示例
```csharp
namespace ShadowExample.Plugin.Emoji;

[EntryPoint(Name = "EmojiReader")]
public partial class EmojiReader
{
}
```

将自动修补进`plugin.json`

```json
{
  "DllName": "ShadowExample.Plugin.Emoji",
  "Authors": [
    "kitUIN",
    "Hello"
  ],
  "Id": "Emoji",
  "Name": "emoji",
  "Version": "1.0.1.1",
  "Dependencies": [],
  "EntryPoints": {
    "MainPlugin": "ShadowExample.Plugin.Emoji.EmojiPlugin",
    "EmojiReader": "ShadowExample.Plugin.Emoji.EmojiReader"  // [!code ++]
  }
}
```