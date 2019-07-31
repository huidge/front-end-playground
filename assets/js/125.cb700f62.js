(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{348:function(a,e,t){"use strict";t.r(e);var r=t(16),v=Object(r.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("小程序里，自定义组件作为一个贯穿小程序架构核心的组成，你对它又掌握了多少呢？")]),a._v(" "),t("h1",{attrs:{id:"自定义组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件","aria-hidden":"true"}},[a._v("#")]),a._v(" 自定义组件")]),a._v(" "),t("h2",{attrs:{id:"why"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why","aria-hidden":"true"}},[a._v("#")]),a._v(" why")]),a._v(" "),t("h3",{attrs:{id:"代码的复用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码的复用","aria-hidden":"true"}},[a._v("#")]),a._v(" 代码的复用")]),a._v(" "),t("p",[a._v("在起初小程序只支持 Page 的时候，就会有这样蛋疼的问题：多个页面有相同的组件，每个页面都要复制粘贴一遍，每次改动都要全局搜索一遍，还说不准哪里改漏了就出翔了。")]),a._v(" "),t("h3",{attrs:{id:"组件化设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件化设计","aria-hidden":"true"}},[a._v("#")]),a._v(" 组件化设计")]),a._v(" "),t("p",[a._v("在前端项目中，组件化是很常见的方式，某块通用能力的抽象和设计，是一个必备的技能。组件的管理、数据的管理、应用状态的管理，这些在我们设计的过程中都是需要去思考的。当然你也可以说我就堆代码就好了，不过一个真正的码农是不允许自己这么随便的！")]),a._v(" "),t("p",[a._v("所以，组件化是现代前端必须掌握的生存技能！")]),a._v(" "),t("h1",{attrs:{id:"自定义组件的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件的实现","aria-hidden":"true"}},[a._v("#")]),a._v(" 自定义组件的实现")]),a._v(" "),t("h2",{attrs:{id:"一切都从-virtual-dom-说起"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一切都从-virtual-dom-说起","aria-hidden":"true"}},[a._v("#")]),a._v(" 一切都从 Virtual DOM 说起")]),a._v(" "),t("p",[a._v("前面"),t("router-link",{attrs:{to:"/wxapp/wxapp-principle/3-wxapp-set-data.html"}},[a._v("解剖小程序的 setData")]),a._v("有讲过，基于小程序的双线程设计，视图层（Webview 线程）和逻辑层（JS 线程）之间通信（表现为 setData），是基于虚拟 DOM 来实现数据通信和模版更新的。")],1),a._v(" "),t("p",[a._v("自定义组件一样的双线程，所以一样滴基于 Virtual DOM 来实现通信。那在这里，Virtual DOM 的一些基本知识（包括生成 VD 对象、Diff 更新等），就不过多介绍啦~")]),a._v(" "),t("h2",{attrs:{id:"shadow-dom-模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shadow-dom-模型","aria-hidden":"true"}},[a._v("#")]),a._v(" Shadow DOM 模型")]),a._v(" "),t("p",[a._v("基于 Virtual DOM，我们知道在这样的设计里，需要一个框架来支撑维护整个页面的节点树相关信息，包括节点的属性、事件绑定等。在小程序里，Exparser 承担了这个角色。")]),a._v(" "),t("p",[a._v("前面 "),t("a",{attrs:{href:"./5-wxapp-basic-lib"}},[a._v("5.关于小程序的基础库")]),a._v(" 也讲过，Exparser 的主要特点包括：")]),a._v(" "),t("ul",[t("li",[a._v("基于 Shadow DOM 模型")]),a._v(" "),t("li",[a._v("可在纯 JS 环境中运行")])]),a._v(" "),t("p",[a._v("Shadow DOM 是什么呢，它就是我们在写代码时候写的自定义组件、内置组件、原生组件等。Shadow DOM 为 Web 组件中的 DOM 和 CSS 提供了封装。Shadow DOM 使得这些东西与主文档的 DOM 保持分离。")]),a._v(" "),t("p",[a._v("简而言之，Shadow DOM 是一个 HTML 的新规范，其允许开发者封装 HTML 组件（类似 vue 组件，将 html，css，js 独立部分提取）。")]),a._v(" "),t("p",[a._v("例如我们定义了一个自定义组件叫"),t("code",[a._v("<my-component>")]),a._v("，你在开发者工具可以见到：\n"),t("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/wxapp-component-1.jpg",alt:"Shadow DOM"}})]),a._v(" "),t("p",[t("code",[a._v("#shadow-root")]),a._v("称为影子根，DOM 子树的根节点，和文档的主要 DOM 树分开渲染。可以看到它在"),t("code",[a._v("<my-component>")]),a._v("里面，换句话说，"),t("code",[a._v("#shadow-root")]),a._v("寄生在"),t("code",[a._v("<my-component>")]),a._v("上。"),t("code",[a._v("#shadow-root")]),a._v("可以嵌套，形成节点树，即称为影子树（Shadow Tree）。")]),a._v(" "),t("p",[a._v("像这样：\n"),t("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/wxapp-component-2.jpg",alt:"Shadow Tree"}})]),a._v(" "),t("h2",{attrs:{id:"shadow-tree-拼接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shadow-tree-拼接","aria-hidden":"true"}},[a._v("#")]),a._v(" Shadow Tree 拼接")]),a._v(" "),t("p",[a._v("既然组件是基于 Shadow DOM，那组件的嵌套关系，其实也就是 Shadow DOM 的嵌套，也可称为 Shadow Tree 的拼接。")]),a._v(" "),t("p",[a._v("Shadow Tree 拼接是怎么做的呢？一切又得从模版引擎讲起。")]),a._v(" "),t("p",[a._v("我们知道，Virtual DOM 机制会将节点解析成一个对象，那这个对象要怎么生成真正的 DOM 节点呢？数据变更又是怎么更新到界面的呢？这大概就是模版引擎做的事情了。")]),a._v(" "),t("p",[t("router-link",{attrs:{to:"/front-end-basic/understanding/template-engine.html"}},[a._v("《前端模板引擎》")]),a._v("里有详细描述模版引擎的机制，通常来说主要有这些：")],1),a._v(" "),t("ul",[t("li",[a._v("DOM 节点的创建和管理："),t("code",[a._v("appendChild")]),a._v("/"),t("code",[a._v("insertBefore")]),a._v("/"),t("code",[a._v("removeChild")]),a._v("/"),t("code",[a._v("replaceChild")]),a._v("等")]),a._v(" "),t("li",[a._v("DOM 节点的关系（嵌套的处理）："),t("code",[a._v("parentNode")]),a._v("/"),t("code",[a._v("childNodes")])]),a._v(" "),t("li",[a._v("通常创建后的 DOM 节点会保存一个映射，在更新的时候取到映射，然后进行处理（通常包括替换节点、改变内容"),t("code",[a._v("innerHTML")]),a._v("、移动删除新增节点、修改节点属性"),t("code",[a._v("setAttribute")]),a._v("）")])]),a._v(" "),t("p",[a._v("在上面的图我们也可以看到，在 Shadow Tree 拼接的过程中，有些节点并不会最终生成 DOM 节点，例如"),t("code",[a._v("<slot>")]),a._v("这种。")]),a._v(" "),t("p",[a._v("但是，常用的前端模版引擎，能直接用在小程序里吗？")]),a._v(" "),t("h2",{attrs:{id:"双线程的难题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双线程的难题","aria-hidden":"true"}},[a._v("#")]),a._v(" 双线程的难题")]),a._v(" "),t("h3",{attrs:{id:"自定义组件渲染流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件渲染流程","aria-hidden":"true"}},[a._v("#")]),a._v(" 自定义组件渲染流程")]),a._v(" "),t("p",[a._v("双线程的设计，给小程序带来了很多便利，安全性管控力都拥有了，当然什么鬼东西都可以比作一把双刃剑，双线程也不例外。")]),a._v(" "),t("p",[a._v("我们知道，小程序分为 Webview 和 JS 双线程，逻辑层里是没法拿到真正的 DOM 节点，也没法随便动态变更页面的。那在这种情况下，我们要怎么去使用映射来更新模版呢（因为我们压根拿不到 Webview 节点的映射）？")]),a._v(" "),t("p",[a._v("所以在双线程下，其实两个线程都需要保存一份节点信息。这份节点信息怎么来的呢？其实就是我们需要在创建组件的时候，通过事件通知的方式，分别在逻辑层和视图层创建一份节点信息。")]),a._v(" "),t("p",[a._v("同时，视图层里的组件是有层级关系的，但是 JS 里没有怎么办？为了维护好父子嵌套等节点关系，所以我们在 逻辑层也需要维护一棵 Shadow Tree。")]),a._v(" "),t("p",[a._v("那么我们自定义组件的渲染流程大概是：")]),a._v(" "),t("ol",[t("li",[a._v("组件创建。")])]),a._v(" "),t("ul",[t("li",[a._v("逻辑层：先是 wxml + js 生成一个 JS 对象（因为需要访问组件实例 this 呀），然后是 JS 其中节点部分生成 Virtual DOM，拼接 Shadow Tree 什么的，最后通过底层通信通知到 视图层")]),a._v(" "),t("li",[a._v("视图层：拿到节点信息，然后吭哧吭哧开始创建 Shadow DOM，拼接 Shadow Tree 什么的,最后生成真实 DOM，并保留下映射关系")])]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[a._v("组件更新。")])]),a._v(" "),t("p",[a._v("这时候我们知道，不管是逻辑层，还是视图层，都维护了一份 Shadow Tree，要怎么保证他们之间保持一致呢？")]),a._v(" "),t("h3",{attrs:{id:"让-js-和-webview-的组件保持一致"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#让-js-和-webview-的组件保持一致","aria-hidden":"true"}},[a._v("#")]),a._v(" 让 JS 和 Webview 的组件保持一致")]),a._v(" "),t("p",[a._v("为了让两边的 Shadow Tree 保持一致，可以使用同步队列来传递信息。（这样就不会漏掉啦）")]),a._v(" "),t("p",[a._v("同步队列可以，每次变动我们就往队列里塞东西就好了。不过这样还会有个问题，我们也知道 setData 其实在实际项目里是使用比较频繁的，要是像 Component 的 observer 里做了 setData 这类型的操作，那不是每次变动会导致一大堆的 setDate？这样通信效率会很低吧？")]),a._v(" "),t("p",[a._v("所以，其实可以把一次操作里的所有 setData 都整到一次通信里，通过排序保证好顺序就好啦。")]),a._v(" "),t("h2",{attrs:{id:"page-和-component"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#page-和-component","aria-hidden":"true"}},[a._v("#")]),a._v(" Page 和 Component")]),a._v(" "),t("h3",{attrs:{id:"component-是-page-的超集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#component-是-page-的超集","aria-hidden":"true"}},[a._v("#")]),a._v(" Component 是 Page 的超集")]),a._v(" "),t("p",[a._v("事实上，小程序的页面也可以视为自定义组件。因而，页面也可以使用"),t("code",[a._v("Component")]),a._v("构造器构造，拥有与普通组件一样的定义段与实例方法。但此时要求对应 json 文件中包含"),t("code",[a._v("usingComponents")]),a._v("定义段。")]),a._v(" "),t("blockquote",[t("p",[a._v("来自"),t("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档-Component"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("所以，基于 Component 是 Page 的超集，那么其实组件的渲染流程、方式，其实跟页面没多大区别，应该可以一个方式去理解就差不多啦。")]),a._v(" "),t("h3",{attrs:{id:"页面渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面渲染","aria-hidden":"true"}},[a._v("#")]),a._v(" 页面渲染")]),a._v(" "),t("p",[a._v("既然页面就是组件，那其实页面的渲染流程跟组件的渲染流程基本保持一致。")]),a._v(" "),t("p",[a._v("视图层渲染，可以参考"),t("a",{attrs:{href:"https://developers.weixin.qq.com/ebook?action=get_post_info&token=935589521&volumn=1&lang=zh_CN&book=miniprogram&docid=00024a319d00b87b008612f5f5640a",target:"_blank",rel:"noopener noreferrer"}},[a._v("7.4 视图层渲染"),t("OutboundLink")],1),a._v("说明。")]),a._v(" "),t("h1",{attrs:{id:"结束语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结束语","aria-hidden":"true"}},[a._v("#")]),a._v(" 结束语")]),a._v(" "),t("p",[a._v("其实很多新框架新工具出来的时候，经常会让人眼前一亮，觉得哇好厉害，哇好高大上。"),t("br"),a._v("\n但其实更多时候，我们需要挖掘新事物的核心，其实大多数都是在原有的事物上增加了个新视角，从不一样的视角看，看到的就不一样了呢。作为一名码农，我们要看到不变的共性，变化的趋势。")])])},[],!1,null,null,null);e.default=v.exports}}]);