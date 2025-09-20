import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, currentChat } = useContext(Context);

    return (
        <div className="main">
            <div className="nav">
                <p>Mini Gemini</p>
                <img src={assets.user_icon} alt="User" />
            </div>
            <div className="main-container">
                {!showResult ? (
                    <>
                        <div className="greet">
                            <p>
                                <span>Hello, Dev.</span>
                            </p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="Compass" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="Bulb" />
                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="Message" />
                            </div>
                            <div className="card">
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="Code" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="user" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="Gemini" />
                            {loading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <div className="messages-container">
                                    {currentChat.messages.map((msg, index) => (
                                        <div key={index} className={`message ${msg.type}`}>
                                            {msg.type === 'user' ? (
                                                <div className="message-content">
                                                    <img src={assets.arrow_right} alt="Arrow" className="arrow-icon" />
                                                    <p dangerouslySetInnerHTML={{ __html: msg.content }}></p>
                                                </div>
                                            ) : (
                                                <div className="message-content">
                                                    <img src={assets.arrow_left} alt="Arrow" className="arrow-icon" />
                                                    <p dangerouslySetInnerHTML={{ __html: msg.content }}></p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            type="text"
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            placeholder="Enter the prompt here"
                        />
                        {input ? <img onClick={onSent} src={assets.send_icon} alt="Send" /> : null}
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
