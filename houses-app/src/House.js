import React from 'react';
import NewRoomForm from './new-room-form';

//renders house with its rooms and form to add new room

export default function House({ data, addNewRoom, deleteRoom }) {
    //creates a list of rooms for current house
  const rooms = data.rooms
    ? data.rooms.map((room, index) => (
        <li key={index}>
          {room.name} Area: {room.area}
          <button onClick={e => deleteRoom(e, data, room)}>Delete</button>
        </li>
      ))
    : null;

  return (
    <div>
      <h1>{data.name}</h1>
      <ul>{rooms}</ul>
      <NewRoomForm addNewRoom={addNewRoom} data={data} />
    </div>
  );
}
