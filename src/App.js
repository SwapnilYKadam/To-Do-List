import React, { useState } from "react";
import CreateItem from "./Component/CreateItem";
import List from "./Component/List";

const App = () => {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState(false);

    function updateInput(value){
        setInput(value);
    }

    const addItem = () => {
        setItems((prevValue) => {
            return [...prevValue, {value:input, completed:false}];
        });
        setInput("");
        console.log(items);
    }

    const handleCheck = (id) =>{
        setItems(items.map((item, index)=>{
            if(index === id){
                return{
                    ...item, completed: !item.completed
                };
            }
            return item;
        }));
    }

    const handleDelete = (id) => {
        setItems(prevValue => {
            return prevValue.filter((item, index)=>{
                return index !== id;
            });
        });
    }

   return(
     <div className="container">
        <CreateItem input={input} updateInput={updateInput} addItem={addItem}/>
        <div className="mini-container">
      <ul>
        {items.map((item, index) => (
            <List
                text={item.value}
                key={index}
                id={index}
                handleDelete={handleDelete}
                handleCheck={handleCheck}
                status={item.completed}
            />
        ))}
      </ul>
    </div>

     </div>
   );
}

export default App;