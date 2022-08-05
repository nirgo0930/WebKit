import { Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import DeleteOutline from '@mui/icons-material/DeleteOutline'
import { useState } from "react";

function Todo({ item, deleteItem, editItem, toggleCheckbox }) {
  const [readOnly, setReadOnly] = useState(true);

  const deleteItemHandler = (e) => {
    deleteItem(item)
  }
  const offReadOnlyMode = function (e) {
    setReadOnly(false);
  }
  const enterKeyEventHandler = function (e) {
    if (e.key === 'Enter') {
      setReadOnly(true);
    }
  }
  const editEventHandler = (e) => {
    let newItem = { ...item };
    newItem.title = e.currentTarget.value;
    editItem(newItem)
  }
  return (
    <ListItem>
      <Checkbox checked={item.done} onChange={(e) => {
        toggleCheckbox(item);
      }} />
      <ListItemText>
        <InputBase
          inputProps={{ "aria-label": "naked", readOnly: readOnly }}
          type="text"
          id={item.id}
          name={item.id}
          value={item.title}
          multiline={true}
          fullWidth={true}
          onClick={offReadOnlyMode}
          onChange={editEventHandler}
          onKeyPress={enterKeyEventHandler}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={deleteItemHandler}>
          <DeleteOutline />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Todo;
