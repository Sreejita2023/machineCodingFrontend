import React, { useState } from 'react'

function Index() {
    const[chips,setChips]=useState([])
    const [value,setValue]=useState("")
    const handleInput=(e)=>{
        if(e.key=="Enter" && value.trim()!=""){
            setChips((prev)=>[...prev,value])
            setValue("")
        }
    }
    const handleDelete=(index)=>{
        const updateChips=[...chips]
        updateChips.splice(index,1)
        setChips(updateChips)
    }
  return (
    <div>
        <input type='text' onChange={(e)=>setValue(e.target.value)}
          value={value}
          onKeyDown={(e)=>handleInput(e)}
        />
        {
            chips.map((chip,index)=>(
                <div key={index}>
                    <span>{chip}</span>
                    <button onClick={()=>handleDelete(index)}>X</button>
                </div>
            ))
        }
    </div>
  )
}

export default Index