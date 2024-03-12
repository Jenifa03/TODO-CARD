import axios from "axios";
import React, { useState } from "react";
import {MdDeleteForever} from "react-icons/md";
import { baseURL } from "../utils/constant";



const Popup = ({setShowPopup, popupContent, setUpdateUI}) => {

    const[input, setInput] = useState(popupContent.text);

    const updateToDo = () => {
      axios
      .put(`${baseURL}/update/${popupContent.id}`, {toDo: input})
      .then((res) => {
        console.log(res.data);
        setUpdateUI ((prevState) => !prevState);
        setShowPopup(false);
      });
    };
  return (
    <div className="backdrop">
        <div className="popup">
        <MdDeleteForever className="cross" onClick={() => setShowPopup(false)} />
        <h1>Update To Do</h1>

        <div className="popup__input_holder">
        <input 
        value={input}
        onChange = {(e)=> setInput(e.target.value)}
        type= "text"
        placeholder="Update To Do...." />

          <button onClick={updateToDo}>Update</button>
        </div>
        </div>
    </div>
  );
};

export default Popup;