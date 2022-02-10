<template>
    <div style="color:red;"  v-bind:style = "style">
        <!-- v-bind:style="{backgroundColor:'green'}" -->
        后盾人
    </div>
</template>

<script>
    export default {
        data() {
            return {
                styles:{
                    backgroundColor:'green'
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>