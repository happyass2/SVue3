<template>
<!-- 里面的内容会传递到子组件的slot内 -->
  <card>
    <!-- 插槽的基本使用 -->
    <!-- 后盾人
    <hr>
    <input type="text" value="input组件" />
    <hr>
    <button-v /> -->
    
    <!-- 插槽作用域 -->
    <!-- 插槽定义到哪里，就是用哪里的函数和方法，和插槽放到哪里没关系 -->
    <!-- <div @click="show(content)">
      插槽
    </div> -->

    <!-- 插槽的默认值，当调用插槽没值时，默认使用slot内的值 -->
    
    <!-- <button-v>
      
    </button-v> -->

    <!-- 具名插槽，默认名为default -->
    <template v-slot:header>
        头部标题
    </template>

    <template #main>
        主题内容
    </template>

    <template #footer>
        尾部注释
    </template>
  </card>
</template>

<script>
import Card from './components/Card.vue'

import ButtonV from './components/ButtonV.vue'

export default{
  components: { Card, ButtonV },
  data() {
    return {
      content:'父组件的数据'
    }
  },
  methods: {
    show(v){
      console.log("父组件方法"+v);
    }
  },
}
</script>



<style>

</style>
