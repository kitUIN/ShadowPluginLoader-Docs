# 创建插件基类

:::  warning 注意

你应当先设计[插件元数据](/zh/init/metaplugin),再来设置插件基类

:::


```csharp
// 示例代码
using ShadowPluginLoader.WinUI;

namespace ShadowExample.Core.Plugins;

public abstract class PluginBase: AbstractPlugin
{
    public abstract string GetEmoji();
}
```

必要条件:
- 你的插件基类须为`abstract class`
- 你的插件基类必须继承`AbstractPlugin`

`AbstractPlugin`中默认设置了一些函数,你可以在此基础上增改
