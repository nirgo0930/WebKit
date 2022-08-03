import './App.css';
import React, { useState } from 'react';
import TodoList from './TodoList.js'

function InputWork({ todoList, setTodoList }) {
  const [work, setWork] = useState("새로운 일");
  return (<div>
    <label>할 일 : </label>
    <input value={work} onChange={(e) => {
      setWork(e.currentTarget.value)
    }} />
    <button onClick={(e) => {
      setTodoList([...todoList, { work, isDone: false }])
    }}>저장</button>
    <div>{work}</div>
  </div>)
}

function TodoList2(props) {
  const [todoList, setTodoList] = useState([
    { work: '1st', isDone: false },
    { work: '2nd', isDone: false },
    { work: '3rd', isDone: false },
    { work: '4th', isDone: false },
    { work: '5th', isDone: false }
  ]);

  const [work, setWork] = useState("");

  return (<>
    <h3>{props.title}</h3>
    <InputWork todoList={todoList} setTodoList={setTodoList} />
    <div>
      <label>할 일 : </label>
      <input value={work} onChange={e => { setWork(e.currentTarget.value); }} />
      <button onClick={e => setTodoList([...todoList, { work, isDone: false }])} > 저장 </button>
      <div>{work}</div>
    </div>
    <ol>
      {
        todoList.map((item, i) => {
          return (<>
            <li key={i}>
              <span>{item.work}</span>
              <button>완료</button>
              <button>취소</button>
            </li>
          </>)
        })
      }

    </ol>
  </>)
}

function App() {
  return (

    <div>
      <h1>Hello World</h1>
      <TodoList title="할 일 목록1" />
      <TodoList2 title="할 일 목록2" />
    </div>
  );
}

export default App;