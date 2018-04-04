# Vuex 集中式管理数据

## 是什么
- Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
- Vuex 是专门为 Vue.js 设计的状态管理库，以利用 Vue.js 的细粒度数据响应机制来进行高效的状态更新。

## 概念
![Vuex流程](../../img/vuex.png)
- 每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。<br>
Vuex 和单纯的全局对象有以下两点不同：
  
  -  Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
  
  - 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

### 核心概念
#### State访问状态对象
- const state ，这个就是我们说的访问状态对象，它就是我们SPA（单页应用程序）中的共享值。
- 状态对象赋值给内部对象，也就是把stroe.js中的值，赋值给我们模板里data中的值。<br>
有三种赋值方式:
  ##### 1. 通过computed的计算属性直接赋值

- computed属性可以在输出前，对data中的值进行改变，我们就利用这种特性把store.js中的state值赋值给我们模板中的data值。
````
    computed:{
        count(){
            return this.$store.state.count;
        }
    }
````
- 这里需要注意的是return this.$store.state.count这一句，一定要写this，要不你会找不到$store的。这种写法很好理解，但是写起来是比较麻烦的，那我们来看看第二种写法。

  ##### 2. 通过mapState的对象来赋值

- 我们首先要用import引入mapState。
````
    import {mapState} from 'vuex';
````
- 然后还在computed计算属性里写如下代码：
````
    computed:mapState({
            count:state=>state.count  //理解为传入state对象，修改state.count属性
     })
````
- 这里我们使用ES6的箭头函数来给count赋值。

  ##### 3. 通过mapState的数组来赋值
````
    computed:mapState(["count"])
````
- 这个算是最简单的写法了，在实际项目开发当中也经常这样使用。

#### actions异步修改状态   
  - actions和Mutations功能基本一样，不同点是，actions是异步的改变state状态，而Mutations是同步改变状态。
````
    const actions ={
             addAction(context){
                 context.commit('add',10)
             },
             reduceAction({commit}){
                 commit('reduce')
             }
         }
````
    
 - 在actions里写了两个方法addAction和reduceAction，在方法体里，我们都用commit调用了Mutations里边的方法。<br>
   这两个方法传递的参数不一样:
     - context：上下文对象，这里你可以理解称store本身。
     - {commit}：直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了。

#### Mutations修改状态
````
   const mutations={
        add(state,n){
            state.count+=n;
        },
        reduce(state){
            state.count-=1;
        }
    }
````

#### getters计算过滤操作
- getters从表面是获得的意思，可以把他看作在获取数据之前进行的一种再编辑,相当于对数据的一个过滤和加工。你可以把它看作store.js的计算属性。
- 比如我们现在要对store.js文件中的count进行一个计算属性的操作，就是在它输出前，给它加上100.我们首先要在store.js里用const声明我们的getters属性。
````
    const getters = {
        count:function(state){
            return state.count +=100;
        }
    }
````
###### 用mapGetters简化模板写法

- 首先用import引入我们的mapGetters
````
    import { mapState,mapMutations,mapGetters } from 'vuex';
````
- 在computed属性中加入mapGetters
````
computed:mapGetters(["count"])
````
###### module模块组    
- 随着项目的复杂性增加，我们共享的状态越来越多，这时候我们就需要把我们状态的各种操作进行一个分组，分组后再进行按组编写。
- 声明模块组：<br>
在vuex/store.js中声明模块组，我们还是用我们的const常量的方法声明模块组。代码如下:
````
    const moduleA={
        state,mutations,getters,actions
    }
````
声明好后，我们需要修改原来 Vuex.Stroe里的值：
````
   export default new Vuex.Store({
        modules:{a:moduleA}
    })
````

#### 小结
- state：存储状态。也就是变量；
- getters：派生状态。也就是set、get中的get，有两个可选参数：state、getters分别可以获取state中的变量和其他的getters。外部调用方式：store.getters.personInfo()。就和vue的computed差不多；
- mutations：提交状态修改。也就是set、get中的set，这是vuex中唯一修改state的方式，但不支持异步操作。第一个参数默认是state。外部调用方式：store.commit('SET_AGE', 18)。和vue中的methods类似。
- actions：和mutations类似。不过actions支持异步操作。第一个参数默认是和store具有相同参数属性的对象。外部调用方式：store.dispatch('nameAsyn')。
- modules：store的子模块，内容就相当于是store的一个实例。调用方式和前面介绍的相似，只是要加上当前子模块名，如：store.a.getters.xxx()。
