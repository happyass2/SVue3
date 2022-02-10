<template>
    <div>
        <button @click="orderBy='price'" :class="{'order-type':orderBy=='price'}">价格</button>
        <button @click="orderBy='comments'" :class="{'order-type':orderBy=='comments'}">评论数</button>
        <button @click="lessonList='asc'" :class="{'order-type':orderType=='asc'}">升序</button>
        <button @click="lessonList='dec'" :class="{'order-type':orderType=='dec'}">降序</button>
        
        <!-- <div v-for="lesson in lessonList" :key="lesson.id">
           <div> {{lesson.title}}-价格:{{lesson.price}}-评论数:{{lesson.comments}}</div>
        </div> -->
        
        <div v-for="lesson in lessonList" :key="lesson.id">
           <div> {{lesson.title}}-价格:{{lesson.price}}-评论数:{{lesson.comments}}</div>
        </div>
    </div>
</template>

<script>
import lessons from "../../data/lessons"
    export default {
        data() {
            return {
                lessons,
                orderBy:'price',
                orderType:'asc'
            }
        },
        // 只有相应数据发生变化才变化
        computed:{
            lessonList:{
                get(){
                return this.lessons.sort((a,b)=>{
                    return this.orderType == 'asc'?a[this.orderBy]-b[this.orderBy]:b[this.orderBy]-a[this.orderBy];
                    });
                },
                set(type){
                    this.orderType = type;
                }
            }

        },
        // <!-- 函数性能更差 -->
        method:{
            lessonOrder(){
                return this.lessons.sort((a,b)=>{
                    return a[this.orderBy]-b[this.orderBy];
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
.order-type{
    background-color: red;
    color: white;
}

</style>