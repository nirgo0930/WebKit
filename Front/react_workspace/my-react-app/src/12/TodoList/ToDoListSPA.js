import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AddTodo from './12/TodoList/AddTodo';
import TodoList from './12/TodoList/ToDoList';

const [todoList, setTodoList] = [
    { id: 0, todo: "할 일1" },
    { id: 1, todo: "할 일2" },
]

function manageTodo(list = todoList, action) {
    console.log(action);
    if (action.type === 'add') {
        console.log(list)
        list.push({ id: list[list.length - 1].id + 1, todo: action.data })
    }
    else if (action.type === 'delete') {
        list = list.filter(item => item.id !== action.data);
    }
    const newList = { ...list }
    return newList;
}
let store = createStore(manageTodo)

function TodoListSPA() {
    return (<>
        <Provider store={store}>
            <div className='container'>
                <AddTodo />
                <hr />
                <TodoList />
            </div>
        </Provider>
    </>);
}

export default TodoListSPA;