import React from 'react'

function Settings({data,handleFormData}) {
  const {mode}=data
  
  return (
    <div>
        
       <input type='checkbox' checked={mode==="dark"}  onChange={()=>handleFormData("mode","dark")}/>
       <label name="dark">Dark</label>

        <input type='checkbox' checked={mode==="light"} onChange={()=>handleFormData("mode","light")}/>
       <label name="light">Light</label>
    </div>
  )
}

export default Settings