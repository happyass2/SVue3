<template>
    <section :class="$attrs.class"></section>
    <main></main>
<!-- vfor 有点像forin -->
    <div class="classlist">
        <div v-for="(lesson,index) in lessons" :key="index">
          <span v-bind:class="{isDelete:lesson.status}">{{lesson.title}}</span>
          <button @click="lesson.status=!lesson.status">{{lesson.status?'取消':'删除'}}</button>
        </div>
    </div>
</template>

<script>
import lessons from "../../data/lessons"
    export default {
        data() {
            return {
                lessons:lessons
            }
        },
    }
</script>

<style lang="scss" scoped>
.classlist{
    div{
        justify-content: space-between;
        display: flex;
        span{
            &.isDelete{
                text-decoration: line-through;
                background-color: red;
                color:white;
            }
        }
    }
}
</style>