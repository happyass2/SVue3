// 先声明一个家庭
const app = Vue.createApp({
    // 创建父亲，根组件
    data() {
        return {
            name:'根组件-父亲'
        }
    },
    // 父亲的外壳 引用孩子组件
    template:`<div>{{name}} - <xj /></div>`,
    methods: {
        
    },
})


// console.log(vm.name);
// 创建根组件的孩子
app.component('xj',{
    data() {
        return {
            name: '孩子组件'
        }
    },
    // 孩子的外壳
    template:`<h2 style="background-color:red;color:white;">{{name}}</h2>`
})

// 把家安到app内
const vm = app.mount('#app');//返回根组件实例
