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
      label: 'Chinese',
      lang: 'zh',
      link: '/zh/',
      themeConfig: {
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
              { text: '插件主类', link: 'main' },
              { text: 'I18N国际化', link: 'i18n' },
              { text: '元数据定义文件', link: 'define' },
              { text: 'Tool.Config.props文件', link: 'toolconfig' },
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
