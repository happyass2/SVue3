const app = Vue.createApp({
    data() {
        return {
            num:1,
            error:'',
            name:'后盾人'
        }
    },
    // watch监听属性选项
    watch:{
        // 监听num的值
        num(newValue,oldValue){

            console.log(newValue,oldValue);
            this.error = newValue==0?'不能小于0':newValue==10?'不能超过10':'';
        }
    },  
    methods: {
       
        add(event){
            // this.error = '';
            if(this.num<10) this.num++;
            // else this.error="不能超过10";
        },
        des(event){
            // this.error = '';
            if(this.num>0) this.num--;
            // else this.error="不能小于0";
        }
    },
})

const vm = app.mount('#app');



