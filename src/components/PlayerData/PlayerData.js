import React from 'react';
import './PlayerData.css';
const PlayerData = (props) => {
    console.log(props);
    const {img, name, type, salary, email} = props.person;
    return (
        <div className="person-data">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h3>{type}</h3>
                <h3> $ {salary}</h3>
                <h4>{email}</h4>
                <button className="add-btn"
                onClick={() => props.handleAddPlayer(props.person)}
                >Add Player</button>
            </div>
            
        </div>
    );
};

export default PlayerData;