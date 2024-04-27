# 自定义资源字典

### 资源字典规则

一般来说,我们会将一些常用的`Color`,`Style`塞到一个`theme.xaml`中

这个`theme.xaml`内部是`ResourceDictionary`

正常项目中我们都会塞到`App.xaml`里,但是插件是没有`App.xaml`的,所以在`AbstractPlugin`类中就实现了该功能

比如我们有一个文件在`/Themes/BikaTheme.xaml`

那么我们只需要在`ResourceDictionaries`中塞入该文件路径即可

请用你自己的插件主类实现以下方法

```csharp
public override IEnumerable<string> ResourceDictionaries => new List<string>
{
    "/Themes/BikaTheme.xaml"
};
```

这样会在插件加载进入的时候资源字典会自动合并到`App.xaml`

### 编写

其余用法与普通WinUI项目一致