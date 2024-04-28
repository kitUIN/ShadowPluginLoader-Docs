# 资源文件

## 资源文件规则

在插件中,如果我们想要使用插件包内的一些图片或者文件资源,是没有办法直接载入的

我们需要一些方法来修改载入的路径,让程序正确识别

```xml
xmlns:ce="using:CustomExtensions.WinUI"
```
```xml
<Image Source="{ce:PluginImage Source=/Assets/th.jpg}" />
```

如果想在程序里使用:
```csharp
using CustomExtensions.WinUI;
var image = new Image()
{
    Source = "/Assets/Picacgs/picacomic_2.png".AssetPath(),
};
```
