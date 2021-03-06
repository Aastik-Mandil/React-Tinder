import React, { useState, useEffect } from 'react';
import './Chats.css';
import Chat from './Chat';
import database from './firebase'

const Chats = () => {
    const [matches, setMatches] = useState([
        { name: "Kiran", message: "What's up!", timestamp: "40 sec ago", profilePic: "..." },
        { name: "Preeti", message: "What's up!", timestamp: "40 sec ago", profilePic: "..." },
        { name: "Puja", message: "What's up!", timestamp: "40 sec ago", profilePic: "..." },
        { name: "Pariniti", message: "What's up!", timestamp: "40 sec ago", profilePic: "..." },
    ]);
    useEffect(() => {
        database.collection('matches').onSnapshot(snapshot => {
            snapshot.docs.map(doc => setMatches([...matches,doc.data()]));
        });
    }, []);
    return (
        <div className="chats">
            {matches.map(match => (
                <Chat key={match.name} name={match.name} message={match.message} timestamp={match.timestamp} profilePic={match.profilePic} />
            ))}
        </div>
    )
}

export default Chats;