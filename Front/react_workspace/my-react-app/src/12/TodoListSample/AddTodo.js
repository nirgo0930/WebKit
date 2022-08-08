import { Button, Grid, Paper, TextField } from "@mui/material";
import { useState } from "react";

function AddTodo({ add }) {
    const [item, setItem] = useState({ title: "" })
    const onInputChange = (e) => {
        let newItem = { title: e.currentTarget.value }
        setItem(newItem);
    }
    const onButtonClick = (e) => {
        add(item);
        setItem({ title: "" });
    }
    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                    <TextField
                        placeholder="Add Todo here"
                        fullWidth
                        onChange={onInputChange}
                        value={item.title}
                        onKeyPress={(e) => { if (e.key === 'Enter') { onButtonClick() } }}
                    />
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button fullWidth color="secondary" variant="outlined" onClick={onButtonClick}>+</Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default AddTodo;