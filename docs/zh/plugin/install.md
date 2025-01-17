# 安装/更新/删除

## 安装

提供了多种方式进行安装

- `ImportFromZipAsync(string path)` 从zip进行加载
  - 支持本地zip路径
  - 支持网络zip路径(自动下载)
- `ImportFromDirAsync(string zipPath)` 加载文件夹内所有插件
- 加载单个插件
  - `Import(Type)`
  - `Import<TPlugin>()`
- `Import(IEnumerable<Type>)` 加载多个插件

程序启动时推荐使用`ImportFromDirAsync`一次性加载所有插件,内置插件可以通过`Import<TPlugin>()`直接加载,运行时安装插件建议使用`ImportFromZipAsync(string)` 

## 更新

由于WindowsAppSdk的限制,目前没有办法在运行时直接更新插件,只能重启程序后更新

- `UpgradePlugin(string id, string newVersionZip)`
  - 支持本地zip路径
  - 支持网络zip路径(自动下载)

执行该函数后,重启程序后在`ImportFromDirAsync`时会自动更新插件

## 删除

由于WindowsAppSdk的限制,目前没有办法在运行时直接删除插件,只能重启程序后删除

- `RemovePlugin(string id)`

执行该函数后,重启程序后在`ImportFromDirAsync`时会自动删除插件