import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onNameChange,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let btnCaption = isEditing ? "Save" : "Edit";
  let playerNameComp = isEditing ? (
    <input onChange={handleChange} type="text" value={playerName} required />
  ) : (
    <span className="player-name"> {playerName}</span>
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameComp}
        {/* <span className="player-name"> {playerName}</span> */}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
