import React from "react";
import "../index.css";
function Card({ data, opened, handleOpenFolder,createFolder ,deleteFolder}) {
  return (
    <div>
      {data.map((item, _) => (
        <div key={item.index} class="parent">
          {(item.children && item.children.length>0) &&
            (opened[item.id] ? (
              <button onClick={() => handleOpenFolder(item.id, false)}>
                -
              </button>
            ) : (
              <button onClick={() => handleOpenFolder(item.id, true)}>+</button>
            ))}
          <span>{item.name}</span>
          {item.isFolder && <button onClick={()=>createFolder(item.id)}>📁</button>}
          <button onClick={()=>deleteFolder(item.id)}>🗑️</button>
          {item.children && opened[item.id] && (
            <Card
              data={item.children}
              opened={opened}
              handleOpenFolder={handleOpenFolder}
               createFolder={createFolder}
               deleteFolder={deleteFolder}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Card;
