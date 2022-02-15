<template>
    <div  :class="[type,{disabled}]" @click="click">
        <span v-if="hdTip">{{hdTip}}</span>
        子组件text：{{text}} -- 子组件content：{{content}}
        
    </div>
    
</template>

<script>
    export default {
        // 取消自动防止标签
        // inheritAttrs:false,
       
        props:{
            

            // 传递事件
            click:{
                    type:Function
                },
            content:{
                // 限制传递内容类型
                type:String,
                // 默认值
                default:'确定',
                // 设置该属性为必须值
                required:true,
                

            },
            type:{
                type:String,
                default:'info',
                // 对内容进行验证 这里有bug 无论返回那个都会显示
                validator(v){
                    console.log(['success','danger','info'].includes(v));
                    return ['success','danger','info'].includes(v);
                }
            },
            hdTip:{
                type:String,
            },
            // 添加样式
            disabled:{
                type:Boolean,
                default:false,
            },
            
        },
        // 想要子组件传递数据，使用响应式数据
        data() {
            return {
                 text:this.content,
            }
        },methods: {
            onClick(){
                this.text = 'loading...'
                setTimeout(()=>{
                    this.text = this.content;
                },3000)
            }
        },
        watch:{
            content(v){
                this.text = v;
            }
        },
        
    }
</script>

<style scoped>
      div{
        background-color: red;
        color: white;
        padding: 5px;
        opacity: 0.6;
        transition: 1s;
        display: block;
        text-align: center;
        border-radius:5px ;
        cursor: pointer;
        margin-top: 10px;
        clear: both;
    }

    div:hover{
        opacity: 1;
    }
    div.info{
        background-color: #666;
    }
    div.success{
        background-color: green;
    }
    div.danger{
        background-color: red;
    }
     div.disabled{

        opacity: 1;
        background-color: #ddd !important;
        cursor: default;
    }
</style>