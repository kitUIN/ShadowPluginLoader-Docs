# 元数据项编写格式

### 在插件中编写元数据

在`.csproj`中的元数据项均以字符串格式填写,程序会自动转换为你预先设计的类型

> 元数据项(除了`Dependencies`)均在`<PropertyGroup>`的`<PluginMeta>`中设置

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
> 元数据项`Dependencies`用于指明插件的`依赖插件`,让插件在`依赖插件`加载后再加载
> 
> 与常规元数据项不同,需要在`.csproj`中的`<ItemGroup>`里设置
>
> 同时他作为项目的`nuget`包
> 
> 必须指明`Label="Dependencies"`
> 
> ```xml
> <ItemGroup Label="Dependencies">
>     <PackageReference Include="ShadowExample.Plugin.Hello" Version="1.2.1.2" />
>     <PackageReference Include="ShadowExample.Plugin.World" Version="1.3.0.0" />
> </ItemGroup>
> ```


### 支持的元数据项类型

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

