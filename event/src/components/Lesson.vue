<template>
    <div>
        <img :src="lesson.preview" alt="lesson.title">
        <h3 @dblclick="inputShow=true">
            
            <input @blur="inputShow=false" @keyup.enter="inputShow=false" :value="lesson.title" v-if="inputShow" type="text" @input="changeTitle" >

            <strong v-else>{{lesson.title}}</strong>
        </h3>

        <h3 @dblclick="inputPriceShow=true">
            
            <input @blur="inputPriceShow=false" @keyup.enter="inputPriceShow=false" :value="lesson.price" v-if="inputPriceShow" type="text" @input="$emit('update:price',$event.target.value)" >

            <strong v-else>{{lesson.price}}</strong>
        </h3>
        <!-- 注册完在相应位置调用 -->
        <span @click="del">x</span>
    </div>
</template>

<script>
    
    export default {
        data() {
            return {
                inputShow:false,
                inputPriceShow:false,
            }
        },
        // inheritAttrs:false,
        props:['lesson','modelValue','price','modelModifiers'],
        // emits 注册自定义触发事件，会取消默认事件
        emits:{
            // 验证自定义事件
            del(v){

                if(/^\d+$/.test(v)){
                    return true;
                }
                throw new Error('del emit需要数字');
            },
            'update:modelValue':null,
        },
        created() {

            console.log(this.modelModifiers);
        },
        methods: {
            del(){
                this.$emit('del',this.lesson.id)
            }
            ,changeTitle($event){

                let value = $event.target.value;
                if(this.modelModifiers.toupper){
                    value = value.toUpperCase();
                }
                const substr = Object.keys(this.modelModifiers).find(m=>/^substr_/.test(m));
                if(substr){
                    let info = substr.split('_');
                    value = value.substr(0,info[1]);
                }
                this.$emit('update:modelValue',value);
            }
        },
    }
</script>

<style lang="scss" scoped>
    div{
        border:solid 1px #ddd;
        text-align: center;
        transition: 1s;
        position: relative;
        &:hover{
            box-shadow: 0 0 20px #aaa;
            >span{
                opacity: 1;
            }
        }
        h3{
            padding: 0 0 20px 0;
            margin: 0;
        }
        img{
            width:100%;
        }
        span{
            display: block;
            background-color: #666;
            color: #fff;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            font-size: 12px;
            opacity: 0;
            transition: 1s;
            
        }
    }
</style>