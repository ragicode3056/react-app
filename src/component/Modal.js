export default function Modal(props){
    return (
        <div className = "modal">
            <h1>Are you sure Want to delete</h1>
            <button className="btn--alt btn" onClick={props.onCancel}> Cancel </button>
            <button className="btn" onClick={props.onConfirm}> Confirm</button>
        </div>
    )
}