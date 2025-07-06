import React, { useEffect, useState } from "react";
import json from "./components/data";
import Card from "./components/Card";
function Index() {
  const [data, setData] = useState(json);
  const [opened, setOpened] = useState({});
  const handleOpenFolder = (index, value) => {
    setOpened((prev) => ({
      ...prev,
      [index]: value,
    }));
  };
  const createFolder = (id) => {
    const userName = prompt("Enter your name:");
    const updatedData = (list) => {
      return list.map((sublist, _) => {
        if (sublist.id === id) {
          const obj = {
            id: Date.now().toString(),
            name: userName,
            isFolder: true,
            children: [],
          };
          sublist.children = [...sublist.children, obj];
          return sublist;
        }
        if (sublist.children) {
          return { ...sublist, children: updatedData(sublist.children) };
        }
        return sublist;
      });
    };
    setData((prev) => updatedData(prev));
    handleOpenFolder(id);
  };
  const deleteFolder = (id) => {
    const updatedTrees = (list) => {
      console.log("list", list);
      return list
        .filter((sublist, _) => sublist.id !== id)
        .map((item, _) => {
          if (item.children) {
            return {
              ...item,
              children: updatedTrees(item.children),
            };
          }
          return item;
        });
    };

    setData((prev) => updatedTrees(prev));
  };
  return (
    <div>
      <Card
        data={data}
        opened={opened}
        handleOpenFolder={handleOpenFolder}
        createFolder={createFolder}
        deleteFolder={deleteFolder}
      />
    </div>
  );
}

export default Index;
