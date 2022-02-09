const app = Vue.createApp({
    data() {
        return {
            num:1,
            tip:''
        }
    },
    // 计算属性
    // 计算属性内可以使用响应式数据（数据发生变化时，模板数据也会发生变化，重新渲染）
    // 有一个缓存的特性
    // 对比与传统方法形式，每次执行都会重新渲染，computed方法结果没变的就不会重新渲染
    // 性能更好
    computed:{
        // error(){
        //     return this.num==0?'不能小于0': this.num==10?'不能超过10':'';
        // }
        error:{
            get(){
                const message = this.num==0?'不能小于0': this.num==10?'不能超过10':'';
                if(message) return this.tip+message;
            },
            set(tip){
                this.tip = tip;
            }
        }
    },
    methods: {
       
        add(event){
            this.error = "提示：";
            if(this.num<10) this.num++;
        },
        des(event){
            this.error = "警告：";
            if(this.num>0) this.num--;
        }
    },
})

const vm = app.mount('#app');



