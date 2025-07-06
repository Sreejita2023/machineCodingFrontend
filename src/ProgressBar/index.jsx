import React from 'react'
import Bar from './components/Bar'
function Index() {
  const arr=[0,5,25,50,75,100]
  return (
    <div className="body">
        <div>Progress bar</div>
        {arr.map((item,index)=>(
           <Bar key={index} value={item} delay={index * 200}/>
        ))}
    </div>
  )
}

export default Index