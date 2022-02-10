<template>
    <div>
        <!-- key是索引 -->
        <!-- 通常是字符串和数值 -->
        <div v-for = "n in 8" :key="n">
            {{n}}
        </div>

        <!-- <div v-for = "(value,key) in obj" :key="key">
            {{value}}
        </div> -->

        <div v-for = "lesson in lessons" :key="lesson.id">
            {{lesson.title}}
        </div> 
        <!-- for of -->
        <div v-for = "lesson of lessons" :key="lesson.id">
            {{lesson.title}}
        </div> 


    </div>
</template>

<script>
import lessons from "../../data/lessons"
    export default {
        data() {
            return {
                lessons,
                name:"后盾人",
                url:"houdunren.com"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>