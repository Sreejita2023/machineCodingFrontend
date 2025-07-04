import React, { useState } from 'react'
import Profile from './Profile'
import Interest from './Interest'
import Settings from './Settings'
function Index() {
  const [active,setActive]=useState(0)
  const [data,setData]=useState({
    name:"",
    emailId:"",
    age:0,
    interests:[],
    mode:"dark"
  })
  const handleFormData=(key,value)=>{
    console.log("key",key)
    console.log("value",value)
    setData(prevData=>({
      ...prevData,[key]:value
    }))
  }
  const tabs=[
    {
      tabName:"profile",
      component:Profile

    },
    {
      tabName:"interest",
      component:Interest
    },
    {
      tabName:"settings",
      component:Settings
    }
  ]
  const ActiveComponent=tabs[active].component
  return (
    <div>
        <div>
           {
            tabs.map((tab,index)=>{
              return <button key={index} onClick={()=>setActive(index)}>{tab.tabName}</button>
            })
           }
        </div>
        <div>
          <ActiveComponent data={data} handleFormData={handleFormData} />
        </div>
        {active!=0 && <button onClick={()=>setActive(active-1)}>Previous</button>}
        {active!=tabs.length-1 && <button onClick={()=>setActive(active+1)}>Next</button>}
        {active==tabs.length-1 && <button onClick={()=>console.log(data)}>Submit</button>}
    </div>
  )
}

export default Index