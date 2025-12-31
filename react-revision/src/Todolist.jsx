import React, { useState } from 'react'

const Todolist = ({id, text, ondelete}) => {

    return (
        <div className="flex justify-between">
            <input onClick={checked} type="checkbox" />
            <h4 className={toggle ? 'line-through' : 'flex'}>{text}</h4>
            <button onClick={()=>ondelete(id)}>Delete</button>
        </div>
    )
}

export default Todolist