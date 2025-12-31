import React, { useState } from 'react'

const Todolist = ({id, text, ondelete}) => {

    const [toggle, settoggle] = useState(false)
    function checked(){
        settoggle((prev)=>!prev)
    }

    return (
        <div className="flex justify-between">
            <input onClick={checked} type="checkbox" />
            <h4 className={toggle ? 'line-through' : 'flex'}>{text}</h4>
            <button onClick={()=>ondelete(id)}>Delete</button>
        </div>
    )
}

export default Todolist