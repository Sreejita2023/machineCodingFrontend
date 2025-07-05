import React, { useState } from "react";
import Checkbox from "./components/Checkbox";
import data from "./components/data";
function Index() {
  const [checked, setChecked] = useState({});
  const handleCheckBoxChange = (item, isChecked) => {
    // Helper to update all descendants
    const updateDescendants = (node, checkedMap, checkedValue) => {
      checkedMap[node.id] = checkedValue;
      if (node.children) {
        node.children.forEach(child => updateDescendants(child, checkedMap, checkedValue));
      } 
    };

    // Helper to update all ancestors
    const updateAncestors = (node, checkedMap, data) => {
      // Find parent recursively
      const findParent = (current, targetId) => {
        if (!current.children) return null;
        for (let child of current.children) {
          if (child.id === targetId) return current;
          const found = findParent(child, targetId);
          if (found) return found;
        }
        return null;
      };

      // For each node in data, check if it's an ancestor
      let parent = null;
      for (let root of data) {
        parent = findParent(root, node.id);
        if (parent) break;
      }
      if (parent) {
        // If all children of parent are checked, parent should be checked
        checkedMap[parent.id] = parent.children.every(child => checkedMap[child.id]);
        updateAncestors(parent, checkedMap, data);
      }
    };

    setChecked(prev => {
      const newChecked = { ...prev };
      // Update descendants
      updateDescendants(item, newChecked, isChecked);
      // Update ancestors
      updateAncestors(item, newChecked, data);
      return newChecked;
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
