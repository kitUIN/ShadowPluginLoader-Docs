import { defineConfig } from 'vitepress'
 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ShadowPluginLoader.WinUI",
  description: "WinUI3 Plugin Loader",
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/',
      themeConfig: {
        outline: {
          label: '页面导航'
        },
        lastUpdated: {
          text: '最后更新',
        },
        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        },
        langMenuLabel:"切换语言",
        returnToTopLabel:"返回顶部",
        sidebarMenuLabel:"菜单",
        darkModeSwitchTitle:"切换到深色主题",
        lightModeSwitchTitle:"切换到浅色主题",
        darkModeSwitchLabel:"主题",

        nav: [
          { text: '主页', link: '/zh/' },
          { text: '快速开始', link: '/zh/init/' },
          { text: '插件开发', link: '/zh/plugin/' },
          { text: '高级配置', link: '/zh/advance/' },
        ],
        sidebar: [
          {
            text: '快速开始',
            link: '/',
            base: '/zh/init/',
            items: [
              { text: '创建项目', link: 'customloader' },
              { text: '创建插件元数据类', link: 'metaplugin' },
              { text: '创建插件基类', link: 'iplugin' },
              { text: '创建插件加载器类', link: 'customloaderclass' },
            ]
          },
          {
            text: '插件开发',
            link: '/',
            base: '/zh/plugin/',
            items: [
              { text: '创建插件项目', link: 'create' },
              { text: '自定义控件', link: 'control' },
              { text: '自定义资源字典', link: 'resourcedictionary' },
              { text: '自定义资源文件', link: 'assets' },
              { text: '插件打包', link: 'pack' },
            ]
          },
          {
            text: '高级配置',
            link: '/',
            base: '/zh/advance/',
            items: [
              { text: '自定义插件加载逻辑', link: 'customloadplugin' },
              { text: 'I18N国际化', link: 'i18n' },
              { text: '元数据定义文件', link: 'define' },
              { text: '元数据项编写格式', link: 'meta' },
              { text: 'Tool.Config.props文件', link: 'toolconfig' },
            ]
          }
        ],
    
        socialLinks: [
          { icon: 'github', link: 'https://github.com/kitUIN/ShadowPluginLoader.WinUI' }
        ]
      },
    }
  }
})
