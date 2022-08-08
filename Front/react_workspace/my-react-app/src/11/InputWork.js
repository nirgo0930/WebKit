import React, { useState } from 'react';

// 구조 분해 할당
function InputWork({todoList, setTodoList}) {
    const [work, setWork] = useState("새로운 일");
    return (<div>
      <label>할 일 : </label>
      <input value={work} onChange={(e)=>{
        setWork(e.currentTarget.value)
      }} />
      <button onClick={(e)=>{
        setTodoList([...todoList, {work, isDone:false}])
      }}>저장</button>
      <div>{work}</div>
    </div>)
  }

  export default InputWork;