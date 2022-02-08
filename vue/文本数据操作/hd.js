// 数据是双向绑定的
// 在网页改变或js改变都改变
const app = Vue.createApp({
    data() {
        return {
            name:"后盾人",
            html:`<div style="color:red;">html</div>`,
        }
    },
})

const vm = app.mount('#app');

console.log(vm.name);
console.log(vm.$data.name);

setTimeout(()=>{
    vm.$data.name = "hdr";
},3000)