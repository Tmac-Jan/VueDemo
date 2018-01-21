import Home from "./component/Home.vue"//导入home组件
import News from "./component/News.vue"//导入news组件

export default {
  routes:[
    {path:"/home",component:Home},
    {path:"/news",component:News}
  ]
}//导出配置
