import React, { useState, useEffect } from 'react'
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';
import { useLocation } from 'react-router-dom';

const ChatScreen = () => {
    const location = useLocation();
    console.log(location);
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([
        { name: 'Eilen', image: '...', message: 'Whats up!' },
        { name: 'Eilen', image: '...', message: 'How is it going' },
        { message: 'Everything good' },
    ]);
    useEffect(() => {
        setMessages([...messages]);
    }, []);
    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput("");
    }
    return (
        <>
            <div className="chatScreen">
                <p className="chatScreen__timestamp">You matched with {location.name} on 10/08/20</p>
                {messages.map(message => (
                    message.name ? (<div className="chatScreen__message">
                        <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>) : (
                            <div className="chatScreen__message">
                                <p className="chatScreen__textUser">{message.message}</p>
                            </div>
                        )
                ))}
            </div>
            <div>
                <form className="chatScreen_input">
                    <input type="text" placeholder="Type a message" className="chatScreen_inputField" onChange={(e) => setInput(e.target.value)} value={input} />
                    <button type="submit" className="chatScreen_inputButton" onClick={handleSend}>SEND</button>
                </form>
            </div>
        </>
    )
}

export default ChatScreen
