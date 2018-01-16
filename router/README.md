# Vue2.X Router路由
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
          {path:"*",redirect:"/home"}    //重定向（将找不到对应组件的页面重定向到/home页面）
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
[路由嵌套demo](https://github.com/tozlam/VueDemo/blob/master/router/router2.html)

组件

    var User={//父级路由组件
      template:"
        <div>
          <h3>User Page Here!</h3>
          <ul>
            <li>
              <router-link to='/user/username'>用户姓名</router-link>//子路由链接
            </li>
          </ul>
          <div>
            <router-view></router-view>//子路由视图
          </div>
        </div>"
    }
    var Username={//子路由组件
          template:"<h3>I'm User</h3>"
      }

配置路由

    const routes=[
    {
        path:"/user",component:User,//父级路由路径及组件
        children:[//配置子路由
        {path:"/user/username",component:Username}//子路由路径及对应的子路由组件
      ]
    }
    ]
    
  ## 通过路由传参
  [通过路由传参demo](https://github.com/tozlam/VueDemo/blob/master/router/router3.html)
  
  组件
  
    var User={
        template:"
        <div>
          <h3>User Page Here!</h3>
          <ul>
            <li>
              <router-link to='/user/ToZ/age/20'>ToZ</router-link>//链接中包含数据{username：ToZ,age：20}
            </li>
            <li>
              <router-link to='/user/zijian/age/19'>zijian</router-link>
            </li>
            <li>
              <router-link to='/user/lam21/age/21'>Lam21</router-link>
            </li>
          </ul>
          <div>
              <router-view></router-view>
          </div>
         </div>"
    }
    var UserInfo={
        template:"<div>{{$route.params}}</div>"//获取参数
    }
    
    
   配置路由
      
      const routes=[
        {
            path:"/user",component:User,
          children:[
            {path:":username/age/:age",component:UserInfo} //通过路径得到{username：对应得数据，age：对应的数据}，并将数据通过url传递给组件
          ]
        }
      ]
    
 
