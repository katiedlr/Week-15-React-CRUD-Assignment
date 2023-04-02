import React, { useState, useEffect } from 'react';
import './App.css';
import House from './House';

const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

export default function App() {
  const [houses, setHouses] = useState([]);

// Fetch houses data

  useEffect(() => {
    const fetchHouses = async () => {
      const res = await fetch(HOUSES_ENDPOINT);
      const data = await res.json();
      setHouses(data);
    };
    fetchHouses();
  }, []);

  //deleting room in house

  const deleteRoom = async (e, house, room) => {
    e.preventDefault();
    const index = house.rooms.indexOf(room);
    house.rooms.splice(index, 1);
    await updateHouse(house);
    setHouses(houses.map(h => (h._id === house._id ? house : h)));
  };

// adding new room to house
  const addNewRoom = async (e, house, room) => {
    e.preventDefault();
    house.rooms.push(room);
    await updateHouse(house);
    setHouses(houses.map(h => (h._id === house._id ? house : h)));
  };

  return (
    <div>
      {houses.map((house, index) => (
        <House
          key={index}
          data={house}
          addNewRoom={addNewRoom}
          deleteRoom={deleteRoom}
        />
      ))}
    </div>
  );
}

//updates house in the API

async function updateHouse(house) {
  await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(house),
  });
}
