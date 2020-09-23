// import React, { useState } from 'react';
// import TodoList from './TodoList';
// const App=()=>{

//   const [inputList , setInputList] = useState('');
//   const [Items , setItems] =useState(['First ']);

//   const itemEvent=(event)=>{
//     setInputList(event.target.value);
    
//   }
  
//   const listOfItems=()=>{
//     setItems((oldItems)=>{
//       return [...oldItems,inputList];
//     })
    
//     setInputList('');
//   }


//   const deleteItems=(id)=>{    //delete items if id matches with the selected item
//     // console.log('delete');
//     setItems((oldItems)=>{              
//       return oldItems.filter((arrayElem, index)=>{          //return the array existing if it doesnt match with array element 
//               return index!==id;             
//       })
//     })
// }
//   return <>
//           <div className="main_div">
//             <div className="center_div">
//               <br/>
//               <h1>ToDo List</h1>
//               <br/>
//               <input type="text" placeholder="Add Items" onChange={itemEvent} value={inputList}></input>
//               <button onClick={listOfItems}> + </button>
//                <ol>
//                  {/* <li>{inputList}</li> */}
//                  {/* map function se array  ki id le rhe hai taki delete kar sake us id element ko  */}
//                 { Items.map((itemval ,index) =>{
//                   return <TodoList key={index} 
//                   id={index}
//                    item={itemval}
//                    onSelect={deleteItems}
//                   ></TodoList>
//                  })}
//                </ol>
               
//             </div>
//           </div>
  
//          </>

// };

// export default App;