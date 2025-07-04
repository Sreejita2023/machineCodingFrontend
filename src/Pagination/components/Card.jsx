import React from 'react'

function Card({item}) {
  return (
    <div class="box">
        <div>{item?.title}</div>
        <img src={item?.images[0]} alt={item?.title} width="100" height="100"/>
    </div>
  )
}

export default Card