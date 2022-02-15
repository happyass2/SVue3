<template>
    <div>
        <button>
            <slot>提交</slot>
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                content:'子组件的数据'
            }
        },methods: {
            show(v){
                console.log("父组件"+v);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>