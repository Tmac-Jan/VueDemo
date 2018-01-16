# Vue2.+ Router路由
## 基本使用
HTML:
     
     <router-link to="/home">主页<router-link>
     
     <router-view></router-view>
     
JavaScript:

   1.组件
    
    var Home={
          template:"<h3>这是主页<h3>"
          };
    
   2.配置路由
     
     const routes=[                      //不可改变的对象
          {path:"/home",component:Home}, //定义路径对应的组件
          {path:"*",redirect:"/home"}    //重定向
          ];
    
   3.生成路由实例
     
     const router=new VueRouter({
          routes   //routes=routes
          });
   4.挂载到vue上
     
     new Vue({
          router,  //router=router
          el:"#box"
          });
     
     
## 路由嵌套
