import React from 'react'

function Profile({data,handleFormData}) {
  const {emailId,name,age}=data
  return (
    <div>
      <div>
        <label>Age:</label>
        <input value={age} name="age " onChange={(e)=>handleFormData("age",e.target.value)}/>
        </div>
        <div>
        <label>Email:</label>
        <input value={emailId} onChange={(e)=>handleFormData("emailId",e.target.value)}/>
        </div>
        <div>
        <label>Name:</label>
        <input value={name} onChange={(e)=>handleFormData("name",e.target.value)}/>
        </div>
    </div>
  )
}

export default Profile