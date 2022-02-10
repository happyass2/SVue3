<template>
    <div>
        <div>键盘事件</div>
        <input type="text" name="" id="" @keyup="key">
        <!-- .键位 按倒该字母触发操作 -->
        <input type="text" name="" id="" @keyup.k="key">
        <input type="text" name="" id="" @keyup.alt.k="key">

        <!-- 配合鼠标使用，exact去除包容模式 -->
        <!-- .left,.middle,.right 鼠标左中右键 -->
        <div style="height:500px;width:500px;background-color:red" @click.alt.exact="hd"></div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            key(event){
                console.log(event.key);
            },
            hd(event){
            console.log(event);
        }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>