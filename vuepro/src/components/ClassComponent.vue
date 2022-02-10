<!-- 输入vbase弹出 -->
<template>
<!-- 使用多一层嵌套也可以 -->
    <div class="classcomponent">
        <!-- 当b,d的值是true的时候，使用a,c的样式 -->
        <!-- v-bind:class={"a:b,c:d"} -->
        <!-- 可以使用数组 -->
        <!-- v-bind:class={"[a,c]:b"} -->


        <div class="c1"
            
            v-bind:class="{current:active}"
        >
            ClassComponentVue组件
        </div>
        <!-- 可以使用对象 -->
        <div     
            v-bind:class="[classList,'package']"
        >
            ClassComponentVue组件
        </div>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                active:true,
            }
        },
        computed:{
            classList(){
                return {
                    curr:true,
                    xj:true

                }
            }
        }
    }
</script>

<!-- scoped关键字让样式只作用于当前组件，以属性选择器的方式进行声明 -->
<style lang="scss" scoped>
.classcomponent .c1{
    background-color: red;
    color: white;
}
.current{
    background-color: blue;
}
.curr{
    background: black;
}
.xj{
    color: white;
}

.package{
    border:solid 20px #666;
}
</style>