# 创建插件项目

我们首先需要在`VS`中新建一个`WinUI`类库

![winui](/init/winui.png)

## 编写默认元数据

默认提供了四个元数据项
- `Id`:插件Id
- `Name`:插件名称
- `Version`:插件版本
- `Dependencies`:插件依赖

元数据项(除了`Dependencies`)均在`<PropertyGroup>`的`<PluginMeta>`中设置

```xml
<Project Sdk="Microsoft.NET.Sdk">
    <PropertyGroup>
        <TargetFramework>net6.0-windows10.0.19041.0</TargetFramework>
        <TargetPlatformMinVersion>10.0.17763.0</TargetPlatformMinVersion>
        <RootNamespace>ShadowExample.Plugin.Emoji</RootNamespace>
        <RuntimeIdentifiers>win10-x86;win10-x64;win10-arm64</RuntimeIdentifiers>
        <UseWinUI>true</UseWinUI>
        <GeneratePackageOnBuild>false</GeneratePackageOnBuild>
        <NoWarn>MSB3277</NoWarn>
        <!-- Nuget -->
        <PackageId>ShadowExample.Plugin.Emoji</PackageId>
        <Version>1.0.0.12</Version>
        <PluginName>emoji</PluginName>
        <!-- PluginMeta --> // [!code ++]
        <PluginMeta> // [!code ++]
            <!-- 使用上文的PackageId变量 --> // [!code ++]
            <Id>$(PackageId)</Id> // [!code ++]
            <Name>emoji</Name> // [!code ++]
            <Version>$(Version)</Version> // [!code ++]
        </PluginMeta>
    </PropertyGroup>
</Project>
```
::: tip 说明

在`<PluginMeta>`中可以使用`MSBuild`的变量

:::
元数据项`Dependencies`用于指明插件的`依赖插件`,让插件在`依赖插件`加载后再加载

与常规元数据项不同,需要在`.csproj`中的`<ItemGroup>`里设置

同时他作为项目的`nuget`包

必须指明`Label="Dependencies"`
```xml
<ItemGroup Label="Dependencies">
    <PackageReference Include="ShadowExample.Plugin.Hello" Version="1.2.1.2" />
    <PackageReference Include="ShadowExample.Plugin.World" Version="1.3.0.0" />
</ItemGroup>
```
## 编写数组形式的元数据项

有一些元数据项的类型为数组,例如:`string[]`

此时我们需要一些特殊格式进行编写

- 以`;`分割
  ```xml
    <Authors>kitUIN;Hello</Authors>
  ```
- 使用`<Item>`
  ```xml
    <Authors>
        <Item>kitUIN</Item>
        <Item>Hello</Item> 
    </Authors>
  ```

## 编写更多元数据项

在你的插件加载器中应当设置了自己的元数据项

更多的元数据项应当填写在`<PropertyGroup>`的`<PluginMeta>`中

插件加载器开发者应当说明需要哪些元数据项