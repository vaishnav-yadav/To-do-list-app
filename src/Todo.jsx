import React from 'react';
import { List, ListItem, ListItemText, Button,Input, Modal } from '@material-ui/core';
import './Todo.css';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

//props is just a key to connect a component to where it is gonna used thats it
// text is the attribute or chain that connects props here to App.js 

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput]=useState('');

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const updateTodo = () => {
        //update the todo with the new input text
       //updating it in database 
       db.collection('todos').doc(props.text.id).set({
           todo: input
       }, {merge :true});   //merge : true , prevents overwriting 

        setOpen(false);
    }





    return (
        <>
            <Modal 
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >

                <div className={classes.paper} id="modal">
                    {/* <h1>i am a model</h1> */}
                    <Input id="updateInput" value={input} placeholder={props.text.todo}onChange={event=> setInput(event.target.value)}></Input>
                    <Button id="updateTodo" onClick={updateTodo} >Update Todo</Button>
                </div>
            </Modal>
            <List className="todo_list">
                <ListItem>
                    {/* <ListItemText primary="Todo" secondary={props.text}></ListItemText> */}
                    {/* now todo is an key of object that we are returing */}
                    <ListItemText primary={props.text.todo} ></ListItemText>
                </ListItem>
            <Button id="edit" onClick={e => setOpen(true)}>Edit</Button>
            <DeleteIcon id="delete" onClick={event => db.collection('todos').doc(props.text.id).delete()}></DeleteIcon>
            </List>
            {/* deleting todos based on thier id from database  */}
            {/* <Button onClick={event=> db.collection('todos').doc(props.text.id).delete()}>❌ Delete Me</Button> */}

            


            {/* <li>{props.text}</li> */}
        </>
    )
}

export default Todo;
