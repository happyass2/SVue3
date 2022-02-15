<template>
  <div>
    {{lesson.title}}
    <!-- 传递数据给父组件 -->
    <slot :id="lesson.id" />
  </div>
</template>

<script>
  export default {
    props:['lesson'],
  
  }
</script>

<style lang="scss" scoped>
  div{
    display: flex;
    margin-bottom: 10px;
    padding: 10px;
    border:solid 1px #ddd;
  }
</style>