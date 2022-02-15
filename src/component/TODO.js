import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
export const TODO = (props) =>{

    const [ModalStatus,setModalIsTrue] = useState(false);
    function deleteHandler(){
      setModalIsTrue(true);
    }

    function closeHandler(){
        setModalIsTrue(false);
    }

    return (
        <div className="card">
            <h1>Learn {props.text}</h1>
            <button className="btn actions" onClick = {deleteHandler}> Delete</button>
            {ModalStatus && <Modal onConfirm = {closeHandler} onCancel = {closeHandler}/>}
            {ModalStatus && <Backdrop onClick = {closeHandler}/>}
        </div>
        
    )
}