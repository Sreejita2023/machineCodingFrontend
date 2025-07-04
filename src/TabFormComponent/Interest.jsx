import React from 'react'

function Interest({data,handleFormData}) {
  const {interests}=data
  const handleBox=(name)=>{
    const updatedInterests=interests.includes(name)?interests.filter((i)=>i!=name):[...interests,name]
     handleFormData("interests",updatedInterests)
  }
  return (
    <div>
        <div>Tell me about your interests</div>
        <div>
          <label>Cricket</label>
          <input type="checkbox" checked={interests.includes("cricket")} name="cricket" onChange={()=>handleBox("cricket")}/>
        </div>
        <div>
          <label>Music</label>
          <input type="checkbox" checked={interests.includes("music")} name="music" onChange={()=>handleBox("music")}/>
        </div>
        <div>
          <label>Javascript</label>
          <input type="checkbox" checked={interests.includes("javascript")} name="javascript" onChange={()=>handleBox("javascript")}/>
        </div>
    </div>
  )
}

export default Interest