<template>
    <div>
        <card>
            <template #header>
                站点信息
            </template>
            <div>
               <x-input title="网站名称" v-model="config.site.title" />
               <x-textarea :rows="5" title="站点介绍" v-model="config.site.desc" />
            </div>
        </card>
        {{config}}

    </div>
</template>

<script>



export default {
  inject:['config'],
  data() {
      return {
          appName:'向军大叔',
          key:'asdasdasdasd'
      }
  },
   
}
</script>

<style lang="scss" scoped>
    
</style>