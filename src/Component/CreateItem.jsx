import React from "react";

const CreateItem = (props) => {
    return(
        <div className="mini-container">
        <input onChange={(event) => {
            const value = event.target.value;
            props.updateInput(value);
        }} type="text" className="input-item" value={props.input}></input>
        <button onClick={props.addItem} type="submit" className="add-button">+</button>
      </div>
    );
}

export default CreateItem;