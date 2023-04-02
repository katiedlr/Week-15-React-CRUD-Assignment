import React, { useState } from 'react';

// renders a form to add new room to house

export default function NewRoomForm({ addNewRoom, data }) {
  const [nameValue, setNameValue] = useState('');
  const [areaValue, setAreaValue] = useState('');

//submit form to add new room

  const handleClick = e => {
    addNewRoom(e, data, { name: nameValue, area: areaValue });
    setNameValue('');
    setAreaValue('');
  };

  return (
    <div>
      <h3>Add a New Room</h3> 
      <input
        type="text"
        placeholder="Name"
        onChange={e => setNameValue(e.target.value)}
        value={nameValue}
      />
      <input
        type="text"
        placeholder="Area"
        onChange={e => setAreaValue(e.target.value)}
        value={areaValue}
      />
      <button onClick={handleClick}>Add Room</button>
    </div>
  );
}
