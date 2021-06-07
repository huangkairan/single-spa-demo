import { registerApplication, start } from "single-spa";

/**
 * 注册应用
 *  name string 应用名称： @组织名称/应用名称
 *  app fn 通过systemjs引用打包好的微前端应用模块代码umd 返回promise
 *  activeMenu array 路由匹配时激活应用
 */
// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// 将 “/” 改为精确匹配
registerApplication(
  "@single-spa/welcome",
  () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  (location) => location.pathname === "/"
);

// 注册react子应用
registerApplication({
  name: "@study/todos",
  app: () => System.import("@study/todos"),
  activeWhen: ["/todos"],
});

// registerApplication({
//   name: "@study/navbar",
//   app: () => System.import("@study/navbar"),
//   activeWhen: ["/"]
// });

start({
  /**
   * urlRerouteOnly
   * 是否可以通过history.pushState()和history.replaceState()更改触发single-spa路由
   * true不允许，false允许
   */
  urlRerouteOnly: true,
});
