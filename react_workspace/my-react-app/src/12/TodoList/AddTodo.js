import './Todo.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


function AddTodo() {
    const [todo, setTodo] = useState("New Todo");

    let todoList = useSelector((todoList) => { return todoList })
    let dispatch = useDispatch();

    return (
        <div>
            <br />
            <h1 className="center">To-Do List</h1>
            <br />
            <fieldset>
                <div>
                    <input value={todo} onChange={(e) => { setTodo(e.currentTarget.value) }} />
                    <button onClick={(e) => {
                        dispatch({ type: 'add', todo });
                    }}>
                        +
                    </button>
                </div>

                {/* <div>
                    <input type="text" className="" />
                    <button>+</button>
                </div> */}
            </fieldset>
        </div>
    );
}

export default AddTodo;