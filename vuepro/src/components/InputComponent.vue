<template>
    <div>
        <!-- 支持双向绑定 -->
        <input type="text" v-model="form.title">
        <hr>
        <textarea name="" id="" v-model="form.content" cols="30" rows="10"></textarea>
        <input type="checkbox" v-model="form.isPost">
        <hr>
        <!-- 多选可以用循环 -->
        <input type="checkbox" v-model="form.lessons" value = 'php'>php
        <input type="checkbox" v-model="form.lessons" value = 'linux'>linux
        <input type="checkbox" v-model="form.lessons" value = 'css'>css
        <hr>
        <!-- 数据绑定用的是表达式，表达式内有数字 -->
        <input type="radio" v-model="form.sex" :value=1>男
        <input type="radio" v-model="form.sex" :value=2>女
        <hr>
            <select v-model="form.city">
                <option value="">请选择</option>
                <option value="beijing">北京</option>
                <option value="wuhan">武汉</option>
            </select>
            <!-- 多选模式 -->
            <!-- <select v-model="form.city" multiple>
                <option value="">请选择</option>
                <option value="beijing">北京</option>
                <option value="wuhan">武汉</option>
            </select> -->
        <hr>
        <!-- .lazy当光标离开后才会提交发送网络请求 -->
        <input type="text" name="" id="" v-model.lazy="hd">
        {{hd}}
        <hr>

        {{form}}
        
        <hr>
        <!-- .number表单返回纯数字 -->
            <input type="text" name="" id="" v-model.number="num">{{num+100}}
        <hr>
        <!-- 清除前后空格 -->
        <input type="text" v-model.trim="title">
    </div>
</template>

<script>
const form ={title:'',content:'',isPost:false,lessons:[],sex:1,city:''};
    export default {
        data() {
            return {
                form,
                hd:"houdunren.com",
                num:1,
                title:'houdunren'
            }
        },
        watch:{
            hd(n){
                // 每次更改数据都会发送网络请求
                console.log("发送网络请求");
            },
            title(n){
                console.log(n.length);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>