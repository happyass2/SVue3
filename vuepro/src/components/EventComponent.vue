<template>
    <div>
        <!-- 绑定事件 -->
        <div v-on:click="num++">{{num}}</div>
        <div @click="num++">{{num}}</div>
        <div @click="sum(1,2,3)">{{num}}</div>
        <!-- 传递事件对象 -->
        <div @click="ev($event),sum(1,2,3)">事件对象</div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                num:1
            }
        },
        methods: {
            sum(...args){
                console.log(args);
                this.num++;
            },
            ev(event){
                console.log(event);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>