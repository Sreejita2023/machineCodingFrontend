import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import "./index.css"
function Index() {
  const [data, setData] = useState([]);
  const [button,setButton]=useState(0)
  const [buttonLen,setButtonLen]=useState(0)
  const itemsPerPage=10
  const fetchData = async () => {
    const newData = await fetch(`https://dummyjson.com/products`);
    try {
      const res = await newData.json();
      console.log("res,",res.products)
      setData(res.products);
      const len=res.products.length
      setButtonLen(Math.ceil(len/itemsPerPage))
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
     fetchData();
  }, []);
  return (
    <div>
      <div>Pagination</div>
      <div class="case">
         {data.slice(button*itemsPerPage,(button+1)*itemsPerPage).map((item,index)=>(
            <Card item={item} key={index}/>
         ))}
      </div>
      <div>
        <button disabled={button==0} onClick={()=>setButton(button-1)}>Prev</button>
        {[...Array(buttonLen)].map((_,index)=>(
            <button onClick={()=>setButton(index)}>{index+1}</button>
        ))}
      </div>
      <button disabled={button==buttonLen-1} onClick={()=>setButton(button+1)}>Next</button>
    </div>
  );
}

export default Index;
