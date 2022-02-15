<template>
    <div>
        <card>
            <template #header>
                微信支付
            </template>
            <div>
               <x-input title="微信：" v-model="config.wexin.appid" />
               <x-textarea :rows="5" title="密钥：" v-model="config.wexin.secret" />
            </div>
        </card>


    </div>
</template>

<script>



export default {
inject:['config'],
  data() {
      return {
          appName:'向军大叔',
          key:'asdasdasdasd',
          content:"xxxxx"
      }
  },methods: {
      show(){
          alert(this.content)
      }
  },
   
}
</script>

<style lang="scss" scoped>
    
</style>