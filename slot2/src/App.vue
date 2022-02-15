<template>
  <div>
    {{data}}
    <lesson v-for="lesson in lessons" :key="lesson.id" :lesson="lesson">
      <!-- <button @click="del(lesson)">删除</button> -->
      <!-- 接收子组件插槽的数据,=slotProps 全接收 -->
      <!-- <template v-slot:default="{content,title}">
        -{{content}}-{{title}}
      </template> -->
      <!-- 简写 -->
      <!-- <template #default="{content,title}">
        -{{content}}-{{title}}
      </template> -->
      <template #default = "{id}">
            <button @click="del(id)">删除</button>
      </template>
      
    </lesson>
  </div>
</template>

<script>
import lessons from "../data/data"

import Lesson from "./components/Lesson.vue"
  export default {
  components: { Lesson },
    data() {
      return {
        lessons
      }
    },methods: {
      del(id){
        // this.lessons.findIndex(l=>l.id==lesson.id);
        // this.lessons.splice(index,1);
        const index = this.lessons.findIndex(l=>l.id==id);
        this.lessons.splice(index,1);

      }
    },
  }
</script>

<style lang="scss" scoped>

</style>