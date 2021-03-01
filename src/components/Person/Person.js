import React, { useState } from 'react';
import fakeData from '../../fakeData.json';
import Cart from '../Cart/Cart';
import PlayerData from '../PlayerData/PlayerData';
import './Person.css';
const Person = () => {
    const [persons, setPersons] = useState(fakeData);
    const [summary, setSummary] = useState([]);

    const handleAddPlayer = (player) => {
        console.log("jinn", player);
        const newcart = [...summary, player];
        setSummary(newcart);
    }

    console.log(fakeData);
    return (
        <div className="person-container">
            <div className="player-container">
            
            {
                persons.map(person => <PlayerData
                    handleAddPlayer = {handleAddPlayer}
                     person={person}
                     ></PlayerData>)
            }
        
            </div>
            <div className="summary-container">
                <Cart cart = {summary}></Cart>
            </div>
            
        </div>
    );
};

export default Person;