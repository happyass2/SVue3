import Todo from './components/Todo.js'
import db from './data/todos.js'
export default({
    components:{Todo:Todo},
    data(){
        return {
            title:'后盾人',
            db
        }
    },
});
