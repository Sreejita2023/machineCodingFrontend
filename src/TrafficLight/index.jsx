import React, { useEffect, useState,useRef } from 'react'
import trafficData from './components/data'
import "./index.css"
function Index() {
const sortedLights = trafficData.sort((a, b) => a.order - b.order);
const trafficRef=useRef()
const timer=useRef(null)

const getInfo=()=>{
    const traffic=trafficRef.current
    const lights=traffic.children
    const count=lights.length
    return {lights,count}
}
const getTimer=(order)=>{
   for (let i=0;i<trafficData.length;i++){
      if(trafficData[i].displayOrder==order){
        return trafficData[i].time
      }
   }
}
const interval=useRef(getTimer(0))
 const [currentindex,setIndex]=useState(0)
 useEffect(()=>{
   const {lights,count}=getInfo()
   console.log(count)
   timer.current=setInterval(()=>{
    setIndex((prev)=>{
       const newIndex=prev==count?1:prev+1
       console.log(getTimer(newIndex))
       interval.current=getTimer(newIndex)
       return newIndex
   })
   },interval.current)
   return ()=>clearInterval(timer.current)
 },[currentindex])
  return (
    <div class="traffic" ref={trafficRef}>
        {sortedLights.map((traffic,index)=>(
            <div className="light" style={{ backgroundColor: traffic.displayOrder === currentindex ? traffic.color : "grey" }}>
            </div>
        ))}
    </div>
  )
}

export default Index