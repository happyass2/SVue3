<template>
    <div>
        {{obj.name}}
        <div v-for="(a,index) in arr" :key="index">
            {{a}}
        </div>
    </div>
</template>

<script>
// vue对数值默认方法进行了更改
const obj = {name:'后盾人'};
const arr = ['houdunren'];
    export default {
        data() {
            return {
                obj,
                arr
            }
        },
        // 生命周期函数
        mounted() {
            
            setTimeout(()=>{
                this.obj.name = 'xj';
                this.arr.push('hooooo');
            },2000)
        },
    }
</script>

<style lang="scss" scoped>

</style>