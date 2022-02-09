const app = Vue.createApp({
    data() {
        return {
            name:"后盾人",
            event:"click",
            num:1,
            error:''
        }
    },
    methods: {
        add(){
            alert(3);
        },
        // 默认接受event参数
        go(event,name){
            // 阻止默认行为
            event.preventDefault();
            alert(name);
            
        },
        add2(){
            // this为当前组件
            if(this.num<10) this.num++;
            else this.error = "不能超过10";
        }
    },
})

const vm = app.mount('#app');



