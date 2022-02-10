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
import LessonForVue from "./components/LessonFor.vue"
import LessonFor from "./components/LessonFor.vue"
import ArrComponentVue from "./components/ArrComponent.vue"
import ArrComponent from "./components/ArrComponent.vue"
import EventComponentVue from "./components/EventComponent.vue"
import EventComponent from "./components/EventComponent.vue"
import EventFixComponentVue from "./components/EventFixComponent.vue"
import EventFixComponent from "./components/EventFixComponent.vue"
import KeyComponentVue from "./components/KeyComponent.vue"
import KeyComponent from "./components/KeyComponent.vue"
import InputComponentVue from "./components/InputComponent.vue"
import InputComponent from "./components/InputComponent.vue"
// 下面是setup语法的注释
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
export default{
// 放入根组件
  components:{ ClassComponentVue, ClassListVue, StyleComponent, IfCommentVue, VForComponent, LessonFor, ArrComponent, EventComponent, EventFixComponent, KeyComponent, InputComponent },
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
    <!-- <v-for-component /> -->
    <!-- <lesson-for /> -->
    <!-- <arr-component /> -->
    <!-- <event-component /> -->
    <!-- <event-fix-component /> -->
    <!-- <key-component /> -->
    <input-component />
    <!-- <div class="hd">{{title}}-{{name}}</div> -->
</template>

<style>
/* 也可以在这里写css样式 */
.hd{
  background: blue;
}
</style>
