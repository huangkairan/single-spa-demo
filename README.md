# single-spa-demo

single-spa-demo for practice

### single-spa 中三种类型的微前端应用

1. single-spa-application/parcel

- 微前端架构中的微应用，可以用 vue、react、angular 等

2. single-spa root config

- 创建微前端容器应用

3. utility modules

- 公共模块应用，非渲染组件，用于跨应用共享 js 逻辑的微应用

### 创建子应用

1. 生成子应用

```
  cerate-react-app
  选择single-spa-application/parcel
  选择框架：vue/react/svelte/...
  输入组织名
  输入项目名
```

2. 配置端口 不与容器端口重复

3. 容器中配置

- index.ejs
  - 配置 importmap
- rootconfig.js
  - 注册子应用
