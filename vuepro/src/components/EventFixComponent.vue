<template>
    <div @click="d1.self" style="background-color:red;width:200px;height:200px;">
        <!-- 点击d2时会触发d1,反弹 -->
         <!-- .stop 阻止冒泡，阻止父级事件的触发 -->
         <!-- .capture是从父级执行事件，按顺序执行 -->
         <!-- .self：真正单独点击时才执行 -->
         <!-- .once:只执行一次 -->
        <div @click.stop="d2" style="background-color:green;width:100px;height:100px;">d2</div>
        <!-- .prevent 阻止默认行为 -->
        <a href="www.baidu.com" @click.prevent="link">aaaaa</a>
        <!-- 不阻止默认行为，不用判断了，忽略默认行为的检测，提高响应性能 -->
         <a href="www.baidu.com" @click.passive="link">aaaaa</a>

        <!-- 每次滚动都会执行函数，判断有无阻止默认行为 -->
        <div @scroll.passive="d1" style="height:200px; overflow-y:auto;border:solid 10px green;">
            <div @click="d2"  style="background-color:red;height:2000px;">d2</div>
        </div>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            d1(){
                console.log('d1');
            },
            d2(event){
                // 阻止冒泡，阻止父级事件的触发
                // 与.stop相同
                // event.stopPropagation();
                console.log('d2');
            }
            ,
            link(event){
                // 阻止默认行为
                event.preventDefault();
                console.log('link');
                
            }
        },
    }
</script>

<style lang="scss" scoped>


</style>