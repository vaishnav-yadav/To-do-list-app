import React, { useState ,useEffect } from 'react';
import './App.css';
import {Button,FormControl, InputLabel,Input} from '@material-ui/core';
import Todo  from './Todo';
import db from './firebase';
import firebase from 'firebase/app';



//2 fundamentals of React :
//state : gets cleared after refereshed , component specific
//props 




function App(){

    // const [Todos , setTodos ]= useState(['Chennai Super Kings','Kolkata Knight Riders']); //empty array in useState() and we initally putting these values 
    const [Todos , setTodos ]= useState([]); //empty array in useState() but now our initail data will be fetched from firebase database 
    const [inputText , setInputText] = useState('');
    //now when the app loads we need to listen to the database and fetch new todos as they get added/removed , we need help of useEffect(function, dependencies) this works when app loads

    useEffect(() => {
       // whenever something updation deletion insertion done in database it will fire
       // and this is just readable , we are not inserting this it in database by this 

       //The best part is : page didnt refereshed : power of react 
       
      //this code here... fires when app.js loads : every single time database changes it gives us snapshot
      db.collection('todos').orderBy  ('timestamp','desc').onSnapshot(snapshot=>{
          
        //   console.log(snapshot.docs.map(doc=>doc.data().todo)); //it will give us todo data stored in database of collection named-  todos in firebase

          console.log(snapshot.docs.map(doc=>({id :doc.id , todo: doc.data().todo}))); //it will give us todo data & its unique id now i.e, stored in database of collection named-  todos in firebase

          setTodos(snapshot.docs.map(doc=>({id :doc.id , todo: doc.data().todo}))); //and then setting or updating the values of Todos each time  that we got from database when app loads 
          //todo and id are keys of object
      })
       
        
    }, []);

    
    const addTodo=(event)=>{
        //this func will trigger when we click Add Todo button
        //and we will set values of Todos through it
       
     //adding value in database now : so this will push new inputText or Todos in database which we will get by above useEffect() func
     db.collection('todos').add({
            todo : inputText,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()   // timestamp() : we are now showing todos by time in which we are inserting a todo,latest will be on top
     })


      event.preventDefault() ; //to prevent page  from reloading page
    //   setTodos([...Todos, inputText]);   //setting existed Todos array in new Todos array each time when we hit add button as well as adding new string of inputText in it (locally not database permanent)
      setInputText(''); //after submitting or clicking button addTodo our input text field should clear
     
    }
    
    return (
        <div  className="App">
            <h1>To do List Vyking🔥</h1>
            {/* to submit our todo so that our database updates we need form  */}

            <FormControl>
                <InputLabel id="inputlabel">✅ Write a Todo</InputLabel>
                <Input id="input" value={inputText} onChange={event =>setInputText(event.target.value)} required   />
            
            </FormControl>
                <Button id="todobtn" disabled={!inputText} onClick={addTodo} variant="contained" color="secondary" >
                Add Todo
               </Button>

            <ul >  
                 {/* when we type in input : todos saved in Todos array can be iterated using map method  */}
                 {/* <li>Royal Challengers Banglore</li>
                 <li>Mumbai Indians</li> */}

                 {Todos.map((elem)=>{ //elem is now a object after we took object from database with id and todo 
                     //making component passes text prop which connects this componeent in Todo component
                     return <Todo id="todlistitems" text={elem}></Todo>
                    //  return <li>{elem}</li>
                 })}
            </ul>

            {/* <form>
            {/* now when we type in input field it will change its state : event.target.value  */}
            {/* <input value={inputText} onChange={event =>setInputText(event.target.value)} required    /> */}
            {/* we use disabled because whenever input is empty we dont want to add empty string in our data base  */}
            {/* <button onClick={addTodo}>Add Todo</button> */}
            {/* </form> */} 
        </div>
    )
};

export default App;