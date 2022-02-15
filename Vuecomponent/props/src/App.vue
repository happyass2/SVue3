<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import ButtonVue from './components/Button.vue'
import Button2Vue from './components/Button2.vue'
import Button2 from './components/Button2.vue'

export default{
  components:{ ButtonVue, Button2 },
  data(){
    return{
      btnContent:'保存提交',
      btnContent2:'保存'
    }
  },
    methods: {
        show(){
          alert('向军大师');
        }
    }
}
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <button-vue :content="btnContent" />

  <button-vue :content="btnContent" hdTip="后盾:" type="success"/>

  <button-vue :content="btnContent" type="danger"/>

  

  <button-vue :content="btnContent" type="danger" :disabled=true />

  <!-- 批量设置参数 -->
  <button-vue  v-bind="{content:btnContent,type:'success'}"/>

  <!-- 单项数据流：父组件可以影响子组件，子组件不能影响父组件 -->
  <!-- 使用对象可以修改，因为对象是引用类型 -->
  <br>
  <hr>
  <!-- class，id等标签会自动放到根元素的标签上 -->
  <button2 :content="btnContent2" type="danger" class="hd.js" id="aa" />
  <hr>
  <button @click="btnContent2='向军大师'" style="width:200px;height:50px;">父组件-{{btnContent2}}</button>
  <!-- 传递函数，可以直接用@click="show"来自动传递到子组件的根标签中，其是在子组件触发的 -->
  <button2 :content="btnContent2" type="danger" class="hd.js" id="aa2" :click="show" />

  

  
  

</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
