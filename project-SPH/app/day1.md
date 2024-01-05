项目目录说明:

node _moudles文件夹 :项目依赖文件夹
public文件夹:一般放置一些静态资源(图片),防砸public文件夹中的静态资源,webpack打包时会原封不动打包到dist文件夹中

scr文件夹:源代码文件夹
    assets文件夹:一般放置静态资源,一般放置多个组件公用的静态资源,放置在assets中的静态资源,webpack会把静态资源当做一个模块,打包到js文件夹

    commonents文件夹:放置非路由组件

    APP.vue:项目唯一跟组件
    main.js:程序入口文件

babel.config.js:配置文件(babel相关)
package.json:记录项目信息,认为是项目的身份证,记住项目叫什么,项目有哪些依赖
package-lock.json:缓存性文件,依赖来源
readme.md:说明性文件

项目运行配置:
1. 在package配置浏览器自动打开:
  "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },

2. 关闭eslint自动校验
    在vue根目录下vue.config.js文件中
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false
})

3. src文件夹简写方法,配置别名@,@代表src文件夹,将来找到时候方便 
在jsconfig.json文件中配置 :
 "paths": {
      "@/*": [
        "src/*"
      ]
    },


项目路由分析:




