# 插件设置项

`ShadowPluginLoader.WinUI`版本号 >= `1.4.1`

## 插件设置项枚举

插件设置项应当设置为枚举形式,每个枚举成员对应一个设置,枚举成员名称为设置名称

## 声明设置项

使用 `ShadowSetting` 注解来声明一个设置项。

参数说明:

| 参数          |   类型   | 描述       |
| ------------- | :------: | ---------- |
| `settingType` |  `Type`  | 设置项类型 |
| `defaultVal`  | `string` | 默认值     |
| `comment`     | `string` | 备注       |

## 自动注入属性

使用 `ShadowPluginSettingClass` 注解来自动注入到插件主类的属性

参数说明:

| 参数            |   类型   | 描述                    |
| --------------- | :------: | ----------------------- |
| `pluginType`    |  `Type`  | 插件类                  |
| `accessorAlias` | `string` | 插件类中 设置的访问器名 |

## 设置类生成配置

使用 `ShadowSettingClass` 注解来对设置类进行一些配置

参数说明:

| 参数        |   类型   | 描述                 |
| ----------- | :------: | -------------------- |
| `container` | `string` | 设置所存储的容器名称 |
| `alias`     | `string` | 设置类的类名         |

## 示例

```csharp
using ShadowPluginLoader.MetaAttributes;

namespace ShadowExample.Plugin.Emoji;

[ShadowPluginSettingClass(typeof(EmojiPlugin), "Setting")]
[ShadowSettingClass("ShadowExample.Plugin.Emoji","EmojiSetting")]
public enum BikaConfigKey
{
    [ShadowSetting(typeof(int), "1", "Api分流")]
    ApiShunt,

    [ShadowSetting(typeof(bool), "true", "登陆后记住我")]
    RememberMe,

    [ShadowSetting(typeof(string), "tt",comment: "测试名称")]
    TestName
}
```

自动生成的文件如下:

```csharp
// EmojiSetting.g.cs
// Automatic Generate From ShadowPluginLoader.SourceGenerator
using ShadowPluginLoader.WinUI.Helpers;

namespace ShadowExample.Plugin.Emoji;

public partial class EmojiSetting
{
    const string Container = "ShadowExample.Plugin.Emoji";

    /// <summary>
    /// Api分流
    /// </summary>
    public System.Int32 ApiShunt
    {
        get => SettingsHelper.Get<System.Int32>(Container, "ApiShunt")!;
        set => SettingsHelper.Set(Container, "ApiShunt", value);
    }
    /// <summary>
    /// 登陆后记住我
    /// </summary>
    public System.Boolean RememberMe
    {
        get => SettingsHelper.Get<System.Boolean>(Container, "RememberMe")!;
        set => SettingsHelper.Set(Container, "RememberMe", value);
    }
    /// <summary>
    /// 测试名称
    /// </summary>
    public System.String TestName
    {
        get => SettingsHelper.Get<System.String>(Container, "TestName")!;
        set => SettingsHelper.Set(Container, "TestName", value);
    }

    public EmojiSetting()
    {
        BeforeInit();
        Init();
        AfterInit();
    }
    private void Init()
    {
        if(!SettingsHelper.Contains(Container, "ApiShunt"))
        {
            ApiShunt = 1;
        }
        if(!SettingsHelper.Contains(Container, "RememberMe"))
        {
            RememberMe = true;
        }
        if(!SettingsHelper.Contains(Container, "TestName"))
        {
            TestName = "tt";
        }
    }
    partial void BeforeInit();

    partial void AfterInit();
}

```

```csharp
// EmojiPlugin_Settings.g.cs
// Automatic Generate From ShadowPluginLoader.SourceGenerator

namespace ShadowExample.Plugin.Emoji;

public partial class EmojiPlugin
{
    /// <summary>
    /// Settings
    /// </summary>
    public static ShadowExample.Plugin.Emoji.EmojiSetting Setting { get; } = new ShadowExample.Plugin.Emoji.EmojiSetting();
}

```
