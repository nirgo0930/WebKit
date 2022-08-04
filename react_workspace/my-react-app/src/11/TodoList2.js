import React, { useState } from 'react';
import InputWork from './InputWork';



function TodoList2(props) {
    const [todoList, setTodoList] = useState([
        { work: '첫 번째 할 일', isDone: false },
        { work: '두 번째 할 일', isDone: false },
        { work: '세 번째 할 일', isDone: false }
    ]);

    return (<>
        <h3>{props.title}</h3>
        <InputWork todoList={todoList} setTodoList={setTodoList} />
        <ol>
            {todoList.map((item, i) => {
                return (<li ky={i}>
                    <span>{item.work}</span>
                    <button>완료</button>
                    <button>삭제</button>
                </li>)
            })}
        </ol>
    </>)
}

export default TodoList2;