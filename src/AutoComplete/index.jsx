import React, { useEffect, useState } from 'react'
import "./index.css"
function Index() {
  const [recipe,setRecipe]=useState([])
  const [search,setSearch]=useState("")
  const [show,setShow]=useState(false)
  const [cache,setCatch]=useState({})
  const fetchData=async(input)=>{
    if(cache[input]){
        console.log("cache is called")
        setRecipe(cache[input])
        return
    }
    const data= await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
    const res=await data.json()
    console.log("api called")
    setRecipe(res.recipes)
    setCatch((prev) => ({ ...prev, [input]: res.recipes }))
  }
  useEffect(()=>{
    const timeId=setTimeout(()=>{
       fetchData(search)
     },300)
     return()=>{
        clearTimeout(timeId)
     }
  },[search])
  return (
    <div class="body">
        <h4>AutoComplete Bar</h4>
        <input  value={search} onChange={(e)=>setSearch(e.target.value)}
        onFocus={()=>setShow(true)}
        onBlur={()=>setShow(false)}/>
        <div class="box">
            {
                show && recipe.map((item,index)=>(
                    <div class="recipe"key={index}>
                        {item.name}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Index