// 数据是双向绑定的
// 在网页改变或js改变都改变
const app = Vue.createApp({
    data() {
        return {
            name:"后盾人",
            id:"hd",
            n:1
        }
    },
})

const vm = app.mount('#app');

setTimeout(()=>{
    vm.id = "hdr"
},3000)

