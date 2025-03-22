# 自动版本号

引用依赖
```xml
<PackageReference Include="ShadowPluginLoader.VersionGen" PrivateAssets="All" />
```

自动在项目构建时生成`yyyy.MM.dd.{build}`格式的版本号

其中`build`为构建次数

信息存储在`.version`文件夹内