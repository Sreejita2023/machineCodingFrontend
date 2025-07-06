import React, { useEffect, useState } from 'react'
import "../index.css"
function Bar({value}) {
  const [currentValue,setValue]=useState(0)
  useEffect(()=>{
    const timeId=setTimeout(()=>{
       setValue((prevValue)=>{
        if(prevValue>=value){
            clearTimeout(timeId)
            return
        }
        else{
            return value
        }
    })
    },1000)
  },[value])
  return (
    <div className="bar">
        <div 
          className="child" 
          style={{ 
            width: `${currentValue}%`,
          }}
        >
          {value}%
        </div>
    </div>
  )
}
// 
export default Bar