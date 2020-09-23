import React from "react";

const TodoList =(props)=>{
     
     return (<>
           <li>{props.item}</li><span>
            <button onClick={()=>{props.onSelect(props.id);
            }}>Delete</button>
            </span>
           </>)
}

export default TodoList;