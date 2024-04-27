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
          { text: '插件开发', link: '/zh/init/' },
          { text: '高级配置', link: '/zh/init/' },
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
          }
        ],
    
        socialLinks: [
          { icon: 'github', link: 'https://github.com/kitUIN/ShadowPluginLoader.WinUI' }
        ]
      },
    }
  }
})
