import React from "react";

function List(props){
    return(
        <li className="list-item">
            <p style={{ textDecoration: props.status && "line-through" }}>{props.text}</p>
            <button 
            onClick={()=>{
              props.handleCheck(props.id);
            }} 
            type="submit">✔</button>
            <button
            onClick={()=>{
                props.handleDelete(props.id);
            }}
             type="submit">❌</button>
        </li>
    );
}

export default List; 