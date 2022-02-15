<template>
<!-- 点击不同的标签时动态加载组件 -->
  <main>
    <div 
    v-for="(component,index) of components" :key="index"
    @click="currentComponent = component.name"
    :class="{active:component.name==currentComponent}"
    >
      {{component.title}}
   </div>
  </main>
  

    <!-- ref关键字调用组件 -->
  <button @click="callComponent">
    调用组件
  </button>
  <input ref='input'>

  <!-- keeplive缓存组件 -->
  <keep-alive>
    <component :is="currentComponent" ref='dycom'/>
  </keep-alive>
  
</template>

<script>

import WeXin from './components/WeXin.vue'
import Site from './components/Site.vue'
import {computed} from 'vue'
import config from'./config'
  export default {
  components: { WeXin, Site },
  // 数据穿透，可以传递到任意子组件，使用inject接收
  // 不能直接传递data中的值
  // 例如传递teacher需要通过函数传递
  // provide(){ return {webname:this.teacher} }
  // 想要传递相应式数据时，可以通过传递对象
  // 也可以把他包装成计算属性
  // provide(){ return {webname:computed(()=>this.teacher)} }
  provide(){
    return {webname:computed(()=>this.teacher),config}
  },
    data() {
      return {
        config,
        teacher:'xjxj',
        // 当前组件
        currentComponent:'we-xin',
        components:[
          {title:'微信管理',name:'we-xin'},
          {title:'网站信息',name:'site'}
        ]
      }
    },methods: {
      callComponent(){
          console.log(this.$refs.input);
          this.$refs.dycom.show();
      }
    },
  }
</script>

<style lang="scss" scoped>
main{
  display: flex;
  div{
    border:solid 1px #ddd;
    margin-right: 20px;
    padding: 10px;
    cursor: pointer;
    &.active{
      background-color: green;
      color: white;
    }
  }
}
</style>