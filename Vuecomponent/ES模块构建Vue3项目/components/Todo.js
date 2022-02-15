export default{
    // 接收父级的数据
    props:['data'],
    data() {
        return {
            content:'todo'
        }
    },
    // 可以在子组件定义样式
    template:`<div style="background-color:red;color:white;padding:10px;">{{content}}-{{data.title}}</div>`
}