import { Container, List, Paper } from "@mui/material";
import { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

function App() {
  const [items, setItems] = useState([
    { id: "0", title: "Hello World 1", done: true },
    { id: "1", title: "Hello World 2", done: false },
  ]);
  
  const add = (item)=>{
    item.id = "ID-" + items.length;
    item.done = false;
    setItems([...items, item]);
  }

  const deleteItem = (item) => {
    const thisItems = [...items];
    const idx = thisItems.findIndex((elem)=>{
      return elem.id == item.id;
    })
    thisItems.splice(idx, 1);
    setItems(thisItems)
  }

  const editItem = function(newItem) {
    const thisItems = [...items];
    const idx = thisItems.findIndex((elem)=>{
      return elem.id == newItem.id;
    });
    thisItems[idx] = newItem;
    setItems(thisItems)
  }

  const toggleCheckbox = (item) => {
    const thisItems = [...items];
    const idx = thisItems.findIndex((elem)=>{
      return elem.id == item.id;
    });
    thisItems[idx].done = !thisItems[idx].done;
    setItems(thisItems)
  }

  const todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
           <Todo item={item} key={item.id} deleteItem={deleteItem} editItem={editItem} toggleCheckbox={toggleCheckbox}/>
        ))}
      </List>
    </Paper>
  );

  return (
    <div>
      <Container maxWidth="md">
        <AddTodo add={add} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
