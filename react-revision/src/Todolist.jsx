import React from 'react'

const Todolist = ({text, ondelete, id}) => {

    return (
        <div className="flex justify-between">
            <h4>{text}</h4>
            <button onClick={()=>ondelete(id)}>Delete</button>
        </div>
    )
}

export default Todolist