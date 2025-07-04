import React from "react";

function Profile({ data, handleFormData, error }) {
  const { emailId, name, age } = data;
  return (
    <div>
      <div>
        <label>Age:</label>
        <input
          value={age}
          name="age "
          onChange={(e) => handleFormData("age", e.target.value)}
        />
        {error.age && <div>{error.age}</div>}
      </div>
      <div>
        <label>Email:</label>
        <input
          value={emailId}
          onChange={(e) => handleFormData("emailId", e.target.value)}
        />
        {error.emailId && <div>{error.emailId}</div>}
      </div>
      <div>
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => handleFormData("name", e.target.value)}
        />
        {error.name && <div>{error.name}</div>}
      </div>
    </div>
  );
}

export default Profile;
