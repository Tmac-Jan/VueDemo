# VUE2.X transition组件
## 基本用法：
### 单元素
    <transition>
        要移动的元素(只可以有一个元素)
    </transition>
[单元素demo](https://github.com/tozlam/VueDemo/blob/master/transition/transition1.html)
### 多元素
    <transition-group>
        要移动的元素（元素列表）
    </transition-group>
 [多元素demo](https://github.com/tozlam/VueDemo/blob/master/transition/transition-group.html)
## 类的定义
在HTML的transition便签中添加属性name="fade"

 .fade-enter{}: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除
 
 .fade-enter-active{}：定义过渡的状态,即当元素完全显示时的效果。在元素整个过渡过程中作用。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
       
.fade-leave{}：定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除

 .fade-leave-active{}：定义过渡的状态，即当元素完全消失时的效果。在元素整个过渡过程中作用。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
 
 ## Javascript钩子
 在属性中绑定js事件使用

 HTML：
 
     <transition 
     @before-enter="beforeEnter"
     @enter="enter"
     @after-enter="afterEnter"
     
     @before-leave="beforeLeave"
     @leave="leave"
     @after-leave="afterLeave"
     >
     <p v-show="show">
     </transition>
     
JavaScript:
   
    <script>
        new Vue({
        ...,
        method:{ 
              beforeEnter(el){ //注意参数el
                console.log('动画enter之前');
                        },
              enter(el){
                console.log('动画enter');
                        },
              afterEnter(el){
                 console.log('动画进入之后');
                        },
              eforeLeave(){
                 console.log('动画leave之前');
                        },
              leave(){
                 console.log('动画leave');
                        },
              afterLeave(){
                 console.log('动画leave之后');
                        }
                      }
     </script>
     
可以通过钩子函数来改变动画的样式
例如：

    enter(el){
       el.style.background="red" 
       }
 
## 配合Animated.css使用
用法1：

    <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight>
         <p  v-show="show"></p>
     </transition>
     
用法2：

    <transition enter-active-class="bounceInLeft" leave-active-class="bounceOutRight>
         <p  v-show="show" class="animated"></p>
     </transition>

区别在于可以将animated类引用在transition组件中的enter-active-class和leave-active-class属性中，
也可以引用在元素中。
    
 ## 内容相关——CSS中的transition属性
 
transition是一个复合属性，有四个子属性构成（包括transition-property、transition-duration、transition-timing-function、transition-delay）。通过这四个子属性的配合来完成整个过渡动画。

    transition-property: 过渡属性名称(默认值为all) 
    transition-duration: 过渡持续时间(默认值为0s)
    transiton-timing-function: 过渡函数(默认值为ease函数)
    transition-delay: 过渡延迟时间(默认值为0s)

·四个子属性中只有transition-duration是必须值，且不可以为0。
·各个子属性通过空格隔开，而不可以使用逗号隔开。
