# 创建插件加载器类

::: warning 注意

你应当先设计[插件元数据](/zh/init/metaplugin),[插件基类](/zh/init/iplugin),后再来创建加载器类

:::

## 创建插件加载器类

```csharp [ShadowExamplePluginLoader.cs]
using System;
using Serilog;
using ShadowExample.Core.Plugins;
using ShadowPluginLoader.WinUI;

namespace ShadowExample.Core
{
    public class ShadowExamplePluginLoader : AbstractPluginLoader<ExampleMetaData, IExamplePlugin>
    {

        /// <inheritdoc />
        protected override string PluginFolder => Config.PluginsPath; // 应当换成你的插件文件夹路径
        
        /// <inheritdoc />
        protected override string TempFolder => Config.TempPath; // 应当换成你的临时文件夹路径

        public ShadowExamplePluginLoader(ILogger logger) : base(logger)
        {
        }
        public ShadowExamplePluginLoader() : base()
        {
        }

    }
}
```


## 使用依赖注入

插件加载器加载插件的功能主要由依赖注入实现

所以我们先要创建依赖注入,必须使用`DryIoc`这个库来依赖注入

以下是一个简单示例,更多请查阅`DryIoc`文档:

```csharp [DiHelper.cs]
using System;
using SqlSugar;

namespace ShadowViewer.Helpers;

/// <summary>
/// 依赖注入帮助类
/// </summary>
public static class DiHelper
{
    /// <summary>
    /// 初始化DI
    /// </summary>
    public static void Init()
    {  
        DiFactory.Services.Register<PluginLoader>(reuse: Reuse.Singleton);
    }
}
```

## 在主项目中使用

在`App.xaml.cs`文件中需要初始化

```csharp [App.xaml.cs]
public App()
{
    this.InitializeComponent();
    ApplicationExtensionHost.Initialize(this); //初始化反射加载器 // [!code ++]
    DiHelper.Init(); // 初始化依赖注入 // [!code ++]
}
```

## 自定义插件加载过程

有的时候我们想自定义插件加载过程,比如加载插件时需要先进行一些验证

我们可以覆写默认的加载逻辑

详见[自定义插件加载逻辑](/zh/advance/customloadplugin)