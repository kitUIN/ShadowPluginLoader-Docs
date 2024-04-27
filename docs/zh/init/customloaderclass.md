# 创建插件加载器类

### 创建插件加载器类

```csharp
using System;
using Serilog;
using ShadowExample.Core.Plugins;
using ShadowPluginLoader.WinUI;

namespace ShadowExample.Core
{
    public class ShadowExamplePluginLoader : APluginLoader<ExampleMetaData, IExamplePlugin>
    {
        public ShadowExamplePluginLoader(ILogger logger) : base(logger)
        {
        }
        public ShadowExamplePluginLoader() : base()
        {
        }

    }
}
```


### 使用依赖注入

插件加载器加载插件的功能主要由依赖注入实现

所以我们先要创建依赖注入,必须使用`DryIoc`这个库来依赖注入

以下是一个简单示例,更多请查阅`DryIoc`文档:
```csharp
using System;
using DryIoc;

namespace ShadowExample.Core;

public static class DiFactory
{
    public static Container Services { get; }
    static DiFactory()
    {
        Services = new Container(rules => rules.With(FactoryMethod.ConstructorWithResolvableArguments));
        Services.Register(
            Made.Of(() => Serilog.Log.ForContext(Arg.Index<Type>(0)), r => r.Parent.ImplementationType),
            setup: Setup.With(condition: r => r.Parent.ImplementationType != null));
        APluginLoader<ExampleMetaData, AExamplePlugin>.Services = Services;
        Services.Register<ShadowExamplePluginLoader>(reuse: Reuse.Singleton);
    }

}
```


