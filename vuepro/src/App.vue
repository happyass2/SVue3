<script>
// 引入组件
import ClassComponentVue from "./components/ClassComponent.vue"
import ClassListVue from "./components/ClassList.vue"
import StyleComponentVue from "./components/StyleComponent.vue"
import StyleComponent from "./components/StyleComponent.vue"
import IfCommentVue from "./components/IfComment.vue"
import IfComment from "./components/IfComment.vue"
import VForComponentVue from "./components/VForComponent.vue"
import VForComponent from "./components/VForComponent.vue"
// 下面是setup语法的注释
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
export default{
// 放入根组件
  components:{ ClassComponentVue, ClassListVue, StyleComponent, IfCommentVue, VForComponent },
  data() {
    return {
      title:'后盾人',
      name:'abc'
    }
  },
}
</script>

<template>
    <!-- 使用组件 -->
    <!-- 下两种写法都可以 -->
    <!-- <ClassComponentVue /> -->
    <!-- <class-component-vue /> -->
    <!-- <class-list-vue class="hdhd" /> -->
    <!-- <style-component /> -->
    <!-- <if-comment-vue /> -->
    <v-for-component />
    <!-- <div class="hd">{{title}}-{{name}}</div> -->
</template>

<style>
/* 也可以在这里写css样式 */
.hd{
  background: blue;
}
</style>
