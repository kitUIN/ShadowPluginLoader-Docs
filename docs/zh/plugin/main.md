# 插件主类

插件主类需要继承插件加载器中的自定义的插件基类

并且必须使用`[AutoPluginMeta]`特性自动生成元数据

```csharp
// 示例的插件主类
namespace ShadowViewer.Plugin.Local;

[AutoPluginMeta]
public partial class LocalPlugin : PluginBase
{
}
```

```csharp
// 自动生成的LocalPlugin.g.cs
// Automatic Generate From ShadowPluginLoader.SourceGenerator
using ShadowViewer.Plugins;

namespace ShadowViewer.Plugin.Local
{
    [PluginMetaData(Id = "ShadowViewer.Plugin.Local", Name = "本地阅读插件", Version = "1.0.5.18")]
    public partial class LocalPlugin
    {
        /// <summary>
        /// PluginMetaData
        /// </summary>
        public static PluginMetaData Meta { get; } = new PluginMetaData
        {
            Id = "ShadowViewer.Plugin.Local",
            Name = "本地阅读插件",
            Version = "1.0.5.18"
        };
    }
}
```
你可以直接使用`LocalPlugin.Meta`来获取插件的元数据信息

## 后续编写

接下来,你可以选择覆写插件基类中的默认方法

或者
- [自定义WinUI控件](/zh/plugin/control)
- [自定义资源字典](/zh/plugin/resourcedictionary)
- [自定义资源文件](/zh/plugin/assets)