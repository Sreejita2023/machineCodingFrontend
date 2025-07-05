import React ,{useEffect, useRef,useState}from "react";
import "./index.css"
function Index() {
  const box = 5;
  const [otp,setOtp]=useState(new Array(box).fill(""))
  const inputRefs=useRef([])
 const handleInput=(index,value)=>{
    const newValue=value.trim()
    if(isNaN(newValue))return
    const res=newValue.slice(-1)
    const newArray=[...otp]
    newArray[index]=res
    setOtp(newArray)
    newValue && inputRefs.current[index+1].focus()
 }
 const handleKeyDown=(e,index)=>{
    if(!otp[index] && e.key==="Backspace"){
        return inputRefs.current[index-1].focus()
    }
 }
 useEffect(()=>{
     inputRefs.current[0].focus()
 },[])
  return (
    <div class="body">
      <div>Otp Screen</div>
      <div class="screen">
        {otp.map((__, index) => (
           <input type="text" key={index} class="box" 
           ref={(el)=>(inputRefs.current[index]=el)}
           value={otp[index]}
           onChange={(e)=>handleInput(index,e.target.value)}
           onKeyDown={(e)=>handleKeyDown(e,index)}
           />
        ))}
       
      </div>
       <button onClick={()=>console.log(otp)}>Submit</button>
    </div>
  );
}

export default Index;
