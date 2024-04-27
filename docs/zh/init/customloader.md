# 创建项目

## 创建项目

我们首先需要在`VS`中新建一个`WinUI`类库

![winui](/init/winui.png)

创建完成后,打开`.csproj`文件,添加以下代码

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net6.0-windows10.0.19041.0</TargetFramework>
    <TargetPlatformMinVersion>10.0.17763.0</TargetPlatformMinVersion>
    <RootNamespace>ShadowExample.Core</RootNamespace>
    <RuntimeIdentifiers>win10-x86;win10-x64;win10-arm64</RuntimeIdentifiers>
    <UseWinUI>true</UseWinUI>
	<NoWarn>MSB3277</NoWarn>

	<!-- Nuget -->  // [!code highlight]
	<Version>1.0.0.34</Version>  // [!code highlight]
	<PackageId>ShadowExample.Core</PackageId>  // [!code highlight]
	<Authors>kitUIN</Authors>  // [!code highlight]
	<GeneratePackageOnBuild>true</GeneratePackageOnBuild>  // [!code highlight]
	<PackageLicenseExpression>MIT</PackageLicenseExpression>  // [!code highlight]
	<PackageProjectUrl>https://github.com/kitUIN/ShadowPluginLoader.WinUI</PackageProjectUrl>  // [!code highlight]
	<RepositoryUrl>https://github.com/kitUIN/ShadowPluginLoader.WinUI</RepositoryUrl>  // [!code highlight]
	<Description>✨ ShadowExample.Core ✨</Description>  // [!code highlight]
	<Copyright>Copyright 2024</Copyright>  // [!code highlight]
	<PackageTags>kitUIN;wasdk;plugin-loader;plugin;extension;winui</PackageTags>  // [!code highlight]
	<PackageOutputPath>..\NugetPackages</PackageOutputPath>  // [!code highlight]
	<!-- <PackageReadmeFile>README.md</PackageReadmeFile> -->  // [!code highlight]
  </PropertyGroup>
 

  <ItemGroup>
      <PackageReference Include="Microsoft.WindowsAppSDK" Version="1.4.230913002" />
      <PackageReference Include="Microsoft.Windows.SDK.BuildTools" Version="10.0.22621.755" />
      <PackageReference Include="ShadowPluginLoader.WinUI" Version="<填写最新版本>" />  // [!code highlight]
  </ItemGroup>
	
</Project>
```

其中: 
- `ShadowPluginLoader.WinUI` 是我们必须的依赖库
  - 最新版本为: [![NuGet version (ShadowPluginLoader.WinUI)](https://img.shields.io/nuget/v/ShadowPluginLoader.WinUI?style=flat-square)](https://www.nuget.org/packages/ShadowPluginLoader.WinUI/)
- `GeneratePackageOnBuild`设置为`true`将会自动在构建时打包为`nuget`包

::: tip
- `<!-- Nuget -->` 下方的是生成`nuget`包的一些设置
- 关于`MSBuild`中`nuget`的生成可以查看该文章:[使用 MSBuild 创建 NuGet 包](https://learn.microsoft.com/zh-cn/nuget/create-packages/creating-a-package-msbuild)
- 一些可以使用的MSBuild属性可以查看该文章:[包目标](https://learn.microsoft.com/zh-cn/nuget/reference/msbuild-targets#pack-target)
:::

创建完项目之后,我们可以直接`构建`一下,在本目录会出现一个`Tools.Config.props`文件

将其中的`<IsPluginLoader>`设置为`true`,标明本项目是一个插件加载器项目
```xml
<?xml version="1.0" encoding="utf-8" ?>
<Project xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
    <PropertyGroup>
        <!-- Whether the current project is a PluginLoader -->
        <IsPluginLoader>true</IsPluginLoader>  // [!code focus]
        <!-- Whether the current project is a Plugin -->
        <IsPlugin>false</IsPlugin>
        <!-- Auto Pack Plugin -->
        <AutoPluginPackage>true</AutoPluginPackage>
    </PropertyGroup>
</Project>
```
## 内容

你的`PluginLoader`库作为给本体和所有插件提供插件信息的部分(可以称为`SDK`),应当包含以下内容:

- [插件元数据类](/zh/init/metaplugin)
- [插件基类](/zh/init/iplugin)
- [插件加载器类](/zh/init/customloaderclass)
- 插件加载逻辑