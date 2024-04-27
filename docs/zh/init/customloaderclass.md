# 创建插件加载器类

::: warning 注意

你应当先设计[插件元数据](/zh/init/metaplugin),[插件基类](/zh/init/iplugin),后再来创建加载器类

:::

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
        APluginLoader<ExampleMetaData, AExamplePlugin>.Services = Services; // 设置插件加载器的Services
        Services.Register<ShadowExamplePluginLoader>(reuse: Reuse.Singleton); // 注册插件加载器
    }

}
```


### 自定义插件加载过程

有的时候我们想自定义插件加载过程,比如加载插件时需要先进行一些验证

我们可以覆写默认的加载逻辑