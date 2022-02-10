<template>
    <div class="ifcomment">
        <div v-for="(lesson,index) in lessons" :key="index">
            <!-- 作判断的语句渲染时会多套一层div -->
            <!-- 使用template可以不渲染 -->
            <!-- 使用template不支持v-show -->

            <!-- show和if的区别在于，if对于不符合条件的不会渲染，而show则是display:none -->
            <div v-if="lesson.status" style="background-color:red">{{lesson.title}}</div>
            <div v-else-if="lesson.price>100" style="background-color:green">{{lesson.title}}</div>
            <template v-else>{{lesson.title}}</template>
        </div>
        <div v-for="(lesson,index) in lessons" :key="index">
            <div v-show="lesson.status" style="background-color:red">{{lesson.title}}</div>
        </div>
    </div>
</template>

<script>
import lessons from "../../data/lessons"
    export default {
        data() {
            return {
                lessons
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>