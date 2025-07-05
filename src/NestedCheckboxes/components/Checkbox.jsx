import React from 'react'
import "../index.css"
const Checkbox=({data ,checked,handleCheckBoxChange})=>(
    <div >
      {data?.map((item,index)=>(
        <div key={index} className='parent'>
            <input type='checkbox' checked={checked[item.id]} onChange={(e)=>handleCheckBoxChange(item,e.target.checked)}/>
            <span>{item.name}{item.id}</span>
            {item.children && <Checkbox data={item.children} checked={checked} handleCheckBoxChange={handleCheckBoxChange}/>}
        </div>
      ))}
    </div>
)

export default Checkbox