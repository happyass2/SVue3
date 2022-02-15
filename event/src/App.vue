<template>
   <div class="lesson">
     <!-- v-model也有修饰符，需要在子组件props默认加modelModfies -->
     <!-- 非默认名字则要加<name>Modfies -->
     <lesson v-for="item in db" :key="item.id" :lesson="item" @del="del(item.id)" v-model.toupper.substr_2="item.title"
      v-model:price="item.price"
     />
     父级title:{{db[0].title}}
     <!-- 手动写v-model -->
     <!-- <input type="text" :value="title" @input="title=$event.target.value"> -->
      <!-- 传递自定义事件给子组件，子组件更新后给父组件 -->
     <!-- <hd-input :value="title" @update:value="change" /> -->
     <!-- v-model语法糖 -->
     <!-- <hd-input  v-model:value="title" /> -->
    <!-- 默认名modelValue  === v-model:modelValue-->
     <!-- <hd-input  v-model="title" /> -->
     <!-- <hr>
     父组件：{{title}} -->
   </div>
   
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'
// 导入数据
import db from '../data/db'
import HdInput from './components/HdInput.vue'

import Lesson from './components/Lesson.vue'

export default{
  components: { Lesson, HdInput },
  data() {
    return {
      db,
      title:'后盾人'
    }
  },methods: {
    del(id){
      console.log(id);
      const index = this.db.findIndex(l=>l.id==id);
      console.log(index);
      this.db.splice(index,1);
    },change(v){
      this.title = v;
    }

  },
}
</script>



<style>
  .lesson{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    column-gap: 20px;
  }
</style>
