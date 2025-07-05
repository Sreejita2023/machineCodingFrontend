import React, { useState } from "react";
import Checkbox from "./components/Checkbox";
import data from "./components/data";
function Index() {
  const [checked, setChecked] = useState({});
  const handleCheckBoxChange = (item, isChecked) => {
    setChecked((prev) => {
      const newState = { ...prev, [item.id]: isChecked };
      const updatedStates = (children) => {
        children.forEach((child) => {
          setChecked((prev) => ({ ...prev, [child.id]: isChecked }));
          return child.children && updatedStates(child.children);
        });
      };
      item.children && updatedStates(item.children);
      console.log("newState",newState)
      const verifyNode = (node) => {
        if (!node.children) return newState[node.id] || false;
        node.children.forEach((child) => verifyNode(child));
        const allCheckedValues = node.children.every((child) =>
          verifyNode(child)
        );
        newState[node.id] = allCheckedValues;
        console.log(node.id, allCheckedValues);
        return allCheckedValues;
      };
      data && data.forEach((node) => verifyNode(node));
      console.log(newState);
      return newState;
    });
  };

  return (
    <div>
      <div>Pagination</div>
      <Checkbox
        data={data}
        checked={checked}
        handleCheckBoxChange={handleCheckBoxChange}
      />
    </div>
  );
}

export default Index;
