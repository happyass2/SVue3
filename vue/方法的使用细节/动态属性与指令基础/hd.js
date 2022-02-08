const app = Vue.createApp({
    data() {
        return {
            name:"后盾人",
            event:"click"
        }
    },
    methods: {
        add(){
            alert(3);
        },
        // 默认接受event参数
        go(event){
            // 阻止默认行为
            event.preventDefault();
            
        }
    },
})

const vm = app.mount('#app');



