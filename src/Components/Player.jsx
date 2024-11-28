import React, { useState } from "react";

const Player = ({ name, symbol }) => {
    const[isEditing, setIsEditing] = useState(false);

    const handleClick = () => {
        setIsEditing(!isEditing);
    }
  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && <input placeholder="Name"/>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
