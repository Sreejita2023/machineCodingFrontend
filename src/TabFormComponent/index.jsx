import React, { useState } from "react";
import Profile from "./components/Profile";
import Interest from "./components/Interest";
import Settings from "./components/Settings";
function Index() {
  const [active, setActive] = useState(0);
  const [data, setData] = useState({
    name: "",
    emailId: "",
    age: 0,
    interests: [],
    mode: "dark",
  });
  const [error, setError] = useState({});
  const handleFormData = (key, value) => {
    console.log("key", key);
    console.log("value", value);
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  const tabs = [
    {
      tabName: "profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.length < 2) {
          err.name = "Invalid name";
        }
        if (!data.emailId || !data.emailId.includes("@gmail.com")) {
          err.emailId = "Invalid Email";
        }
        if (data.age == 0 || data.age > 100) {
          err.age = "Invalid age";
        }
        setError(err);
        return err.age || err.emailId || err.name ? true : false;
      },
    },
    {
      tabName: "interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interests.length == 0) {
          err.interest = "Select interest";
        }
        return err.interest ? true : false;
      },
    },
    {
      tabName: "settings",
      component: Settings,
    },
  ];
  const handlePrevButton = () => {
    if (!tabs[active].validate()) {
      setActive(active - 1);
    }
  };
  const handleNextButton = () => {
    if (!tabs[active].validate()) {
      setActive(active + 1);
    }
  };
  const ActiveComponent = tabs[active].component;
  return (
    <div>
      <div>
        {tabs.map((tab, index) => {
          return (
            <button key={index} onClick={() => setActive(index)}>
              {tab.tabName}
            </button>
          );
        })}
      </div>
      <div>
        <ActiveComponent
          data={data}
          handleFormData={handleFormData}
          error={error}
        />
      </div>
      {active != 0 && <button onClick={handlePrevButton}>Previous</button>}
      {active != tabs.length - 1 && (
        <button onClick={handleNextButton}>Next</button>
      )}
      {active == tabs.length - 1 && (
        <button onClick={() => console.log(data)}>Submit</button>
      )}
    </div>
  );
}

export default Index;
