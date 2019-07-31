(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{306:function(t,a,s){"use strict";s.r(a);var n=s(16),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("该系列用于探索一些 Angular 中灵活或者新的用法。本文记录启用路由 Router，以及添加静态资源的过程。")]),t._v(" "),s("h2",{attrs:{id:"使用路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用路由","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用路由")]),t._v(" "),s("h3",{attrs:{id:"有关路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有关路由","aria-hidden":"true"}},[t._v("#")]),t._v(" 有关路由")]),t._v(" "),s("p",[t._v("现在流行的前端框架，像 React/Vue/Angular 等，都不可避免地自带路由模块。")]),t._v(" "),s("p",[t._v("要说为什么呢，本骚年是这么认为的（个人意见仅供参考）：")]),t._v(" "),s("ol",[s("li",[t._v("单页应用已经十分流行了，尤其在 PC 端，而使用前端路由，配合模块化，便使得开发单页应用得心应手。")]),t._v(" "),s("li",[t._v("路由的设计很简单，事件的监听配合框架自行封装的一些"),s("code",[t._v("[router-link]")]),t._v("等组件，便在开发效率锦上添花。")])]),t._v(" "),s("p",[t._v("(本骚年也不知道为啥突然懂得这么多的成语，开心逃")]),t._v(" "),s("ul",[s("li",[t._v("Angular 的 Router")])]),t._v(" "),s("p",[t._v("Angular 的 Router 借鉴了浏览器的导航模型。它把浏览器中的 URL 看做一个操作指南， 据此导航到一个由客户端生成的视图，并可以把参数传给支撑视图的相应组件，帮它决定具体该展现哪些内容。")]),t._v(" "),s("p",[t._v("路由器还在浏览器的历史日志中记录下这些活动，这样浏览器的前进和后退按钮也能照常工作。")]),t._v(" "),s("h3",{attrs:{id:"在视图中跳转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在视图中跳转","aria-hidden":"true"}},[t._v("#")]),t._v(" 在视图中跳转")]),t._v(" "),s("p",[t._v("这里只介绍常用的两种，它们都需要在 A 标签上使用：")]),t._v(" "),s("ul",[s("li",[t._v("[routerLink]属性")])]),t._v(" "),s("p",[t._v("不用说，一看就知道"),s("code",[t._v("[routerLink]")]),t._v("属性是用来定位到具体的路由的，当然我们同样可以使用 angular 中常用的绑定来传入需要的变量。")]),t._v(" "),s("ul",[s("li",[t._v("[routerLinkActive]属性")])]),t._v(" "),s("p",[t._v("该属性可配置在带"),s("code",[t._v("[routerLink]")]),t._v("属性的 A 标签上，则当"),s("code",[t._v("[routerLink]")]),t._v("对应的路由被触发了，则"),s("code",[t._v("[routerLinkActive]")]),t._v("绑定的 Class 样式将被激活。")]),t._v(" "),s("h3",{attrs:{id:"注册路由模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册路由模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 注册路由模块")]),t._v(" "),s("p",[t._v("在 Angular 的 release 版本开始，加入了 NgModule 这样一个模块设计，首先我们需注册这样一个路由模块：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" NgModule "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/core'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" RouterModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Routes "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/router'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入其他Component")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" appRoutes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'one-path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" OneComponent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'other-path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" OtherComponent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'**'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" redirectTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'one-path'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NgModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  imports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    RouterModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forRoot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appRoutes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    RouterModule\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppRoutingModule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("根路由注册使用"),s("code",[t._v("RouterModule.forRoot()")])]),t._v(" "),s("li",[t._v("子路由注册使用"),s("code",[t._v("RouterModule.forChild()")])])]),t._v(" "),s("p",[t._v("对于根路由和子路由，一个应用有一个根路由，但可以有多个子路由，像我们的 DOM 树结构一样，层层向下伸展。")]),t._v(" "),s("p",[t._v("这样的设计思想现在也很流行了，像还有 Angular 中的依赖注入 DI，或者是 React 的虚拟 DOM 设计等。")]),t._v(" "),s("h3",{attrs:{id:"使用-router"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-router","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 Router")]),t._v(" "),s("ul",[s("li",[t._v("在 js 中跳转")])]),t._v(" "),s("p",[t._v("一般来说，我们使用"),s("code",[t._v("router.navigate()")]),t._v("来进行跳转，像我们的登陆页面：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Component "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/core'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Router "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/router'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  selector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app-login'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  templateUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./login.component.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoginComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OnInit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OnDestroy "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注入router")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录事件")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onSubmit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("navigate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("当然，"),s("code",[t._v("router.navigate()")]),t._v("还可以传入其他的 params，使用方法大家可以查阅文档。")]),t._v(" "),s("ul",[s("li",[t._v("监听路由")])]),t._v(" "),s("p",[t._v("在 Angular2 的 release 版本之后，路由进行了调整，我们需要通过"),s("code",[t._v("subscribe()")]),t._v("这样的方式对事件进行订阅：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听导航事件变更")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NavigationEnd表示导航事件变更完毕")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过对事件进行filter过滤，我们可以订阅想要的路由事件消息")]),t._v("\nrouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("events\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" event "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NavigationEnd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("若要写面包屑功能，可参考该文章"),s("a",{attrs:{href:"http://brianflove.com/2016/10/23/angular2-breadcrumb-using-router/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular2 Breadcrumb using Router"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"获取路由信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取路由信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取路由信息")]),t._v(" "),s("ul",[s("li",[t._v("ActivatedRoute：一站式获取路由信息")])]),t._v(" "),s("p",[t._v("路由的路径和参数可以通过注入"),s("code",[t._v("ActivatedRoute")]),t._v("的路由服务来获取，包括：")]),t._v(" "),s("ul",[s("li",[t._v("url: 该路由路径的 Observable 对象。它的值是一个由路径中各个部件组成的字符串数组")]),t._v(" "),s("li",[t._v("data: 该路由提供的 data 对象的一个 Observable 对象。还包含从 resolve 中解析出来的值")]),t._v(" "),s("li",[t._v("params: 包含该路由的必选参数和可选参数的 Observable 对象")]),t._v(" "),s("li",[t._v("queryParams: 一个包含对所有路由都有效的查询参数的 Observable 对象")]),t._v(" "),s("li",[t._v("fragment: 一个包含对所有路由都有效的片段值的 Observable 对象")]),t._v(" "),s("li",[t._v("outlet: RouterOutlet 的名字，用于指示渲染该路由的位置")]),t._v(" "),s("li",[t._v("routeConfig: 与该路由的原始路径对应的配置信息")]),t._v(" "),s("li",[t._v("firstChild: 包含子路由列表中的第一个 ActivatedRoute 对象")]),t._v(" "),s("li",[t._v("children: 包含当前路由下激活的全部子路由")])]),t._v(" "),s("p",[t._v("通常我们可能这样使用：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ActivatedRoute "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/router'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其余代码")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注入route")]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ActivatedRoute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ngOnInit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("params")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取名为id的param参数")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其余代码")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其余代码")]),t._v("\n")])])]),s("h3",{attrs:{id:"lazyload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lazyload","aria-hidden":"true"}},[t._v("#")]),t._v(" lazyload")]),t._v(" "),s("p",[t._v("对于一些路由子模块，我们可以通过懒加载来定义，这样就可以只在进入到该路由时进行加载，也算是首屏加载优化的一种方法吧。")]),t._v(" "),s("p",[t._v("一般我们在路由中这样定义：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" AppRoutes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AppComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"home"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loadChildren"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lazy/lazy.module#LazyModule"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("就可以对该部分进行懒加载了，当然懒加载还需要其他依赖或者一些另外的配置支持，其实安装一个"),s("code",[t._v("angular-router-loader")]),t._v("就好了：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm install "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev angular"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("router"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("loader\n")])])]),s("p",[t._v("然后在 webpack 的 rules 中调整：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.ts$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  use"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-loader"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ts-loader"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"angular2-template-loader"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"angular-router-loader"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  exclude"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/node_modules/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("打包的时候我们会发现，除了主文件"),s("code",[t._v("bundle.js")]),t._v("，每一个使用 lazyload 的文件都会单独打包成一个"),s("code",[t._v("n.bundle.js")]),t._v("文件（n 为数字），用于异步请求和加载。")]),t._v(" "),s("h2",{attrs:{id:"添加资源加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加资源加载","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加资源加载")]),t._v(" "),s("p",[t._v("一般来说，项目多业务杂，我们总不能一个个插件都自己实现，故很多时候我们需要使用到像 jQuery 或者 Bootstrap 这样很常用的库。")]),t._v(" "),s("h3",{attrs:{id:"全局注入-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局注入-js","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局注入 js")]),t._v(" "),s("p",[t._v("本骚年使用了一种最蠢的方式来实现[捂脸]：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// jquery")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jQuery"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./assets/js/jquery.min.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// boootstrap")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../node_modules/bootstrap/dist/js/bootstrap.min.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("当然，身为懒癌晚期的我还使用了 typescript 的杀手锏[捂脸+1]：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// declation.d.ts")]),t._v("\ndeclare "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndeclare "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" JQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("其实在 typescript 中使用 jQuery 也有很多现成的"),s("code",[t._v("@types")]),t._v("库，大家可以一键安装使用就好了：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm install @types"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("jquery\n")])])]),s("p",[t._v("完整的项目还是需要完善的，像本骚年这种业余玩玩的小项目就另当其说了，而且说不定后面我也会完善的吧[摊手]。")]),t._v(" "),s("h3",{attrs:{id:"全局注入-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局注入-css","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局注入 css")]),t._v(" "),s("p",[t._v("像"),s("code",[t._v("import 'someStyle.css'")]),t._v("这样的方法竟然没有成功，可能是本骚年的 webpack 配置或者是 loader 哪里出了问题吧。")]),t._v(" "),s("p",[t._v("然后就找了一个懒方法，利用的是"),s("code",[t._v("ViewEncapsulation")]),t._v("，在组件中将"),s("code",[t._v("styleUrls")]),t._v("定义为全局生效，如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ViewEncapsulation "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/core'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  selector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app-root'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' <router-outlet></router-outlet>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  styleUrls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../../node_modules/bootstrap/dist/css/bootstrap.min.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../assets/css/common.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../assets/css/custom.css'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  encapsulation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ViewEncapsulation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("None\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"项目结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 项目结构")]),t._v(" "),s("h3",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),s("p",[t._v("如图：\n"),s("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1495034687%281%29.png",alt:"image"}})]),t._v(" "),s("h3",{attrs:{id:"其他配置文件调整"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他配置文件调整","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他配置文件调整")]),t._v(" "),s("ul",[s("li",[t._v("package.json")])]),t._v(" "),s("p",[t._v("移除"),s("code",[t._v("@angular/compiler-cli")]),t._v("，该依赖为 AOT 使用，而目前本骚年还没做这方面的配置，光一个"),s("code",[t._v("compiler-cli")]),t._v("也是不够的，后面需要的时候再加吧")]),t._v(" "),s("ul",[s("li",[t._v("tsconfig.json")])]),t._v(" "),s("p",[t._v("这个不得不说了，项目一直起不来提示如下：")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("compiler.es5.js:15291\nUncaught Error: Can't resolve all parameters for LoginComponent: (?).\n    at syntaxError (webpack:///./~/@angular/compiler/@angular/compiler.es5.js?:1724:34)\n    at CompileMetadataResolver._getDependenciesMetadata (webpack:///./~/@angular/compiler/@angular/compiler.es5.js?:15061:35)\n    at CompileMetadataResolver._getTypeMetadata (webpack:///./~/@angular/compiler/@angular/compiler.es5.js?:14929:26)\n    at CompileMetadataResolver.getNonNormalizedDirectiveMetadata (webpack:///./~/@angular/compiler/@angular/compiler.es5.js?:14538:24)\n    at CompileMetadataResolver._getEntryComponentMetadata (webpack:///./~/@angular/compiler/@angular/compiler.es5.js?:15182:45)\n    at eval (webpack:///./~/@angular/compiler/@angular/compiler.es5.js?:15168:48)\n    at Array.forEach (native)\n    at CompileMetadataResolver._getEntryComponentsFromProvider (webpack:///./~/@angular/compiler/@angular/compiler.es5.js?:15167:30)\n    at eval (webpack:///./~/@angular/compiler/@angular/compiler.es5.js?:15131:83)\n    at Array.forEach (native)\n")])])]),s("p",[t._v("哭死我了，后面是改了一个"),s("code",[t._v("tsconfig.json")]),t._v("配置解决的：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"emitDecoratorMetadata"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" <= 就是这家伙\n")])])]),s("p",[t._v("大家也可以尽情嘲笑我，本骚年有时候就是转不过来。")]),t._v(" "),s("ul",[s("li",[t._v("webpack.config.js")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加了个插件，关闭之前的黄色warning")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ContextReplacementPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/angular(\\\\|\\/)core(\\\\|\\/)@angular/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("登录页面也还是我们熟悉的：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1495970476%281%29.png",alt:"image"}})]),t._v(" "),s("h2",{attrs:{id:"结束语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结束语","aria-hidden":"true"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),s("p",[t._v("这节主要讲了路由相关的介绍和使用，以及添加静态资源，和调整一些配置使得项目得以启动的过程。项目里代码讲得不多，大家可以自行查看。"),s("br"),t._v(" "),s("a",{attrs:{href:"https://github.com/godbasin/godbasin.github.io/tree/blog-codes/angular2-free/3-init-routes-and-assets",target:"_blank",rel:"noopener noreferrer"}},[t._v("此处查看项目代码"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"http://angular2-free.godbasin.com/3-init-routes-and-assets/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("此处查看页面效果"),s("OutboundLink")],1)])])},[],!1,null,null,null);a.default=e.exports}}]);