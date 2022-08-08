import React from 'react'

function TodoList() {
    return (
        <div>
            <ul>
                {
                    store.getState().map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))
                }

            </ul>
        </div>
    );
}

export default TodoList;