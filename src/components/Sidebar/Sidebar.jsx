import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { Link } from 'react-router-dom'; // For routing

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { previousPrompts, newChat, loadPrompt, activity } = useContext(Context);

    return (
        <div className="sidebar">
            <div className="top">
                <img
                    onClick={() => setExtended((prev) => !prev)}
                    className="menu"
                    src={assets.menu_icon}
                    alt="Menu"
                />

                <div onClick={newChat} className="new-chat">
                    <img src={assets.plus_icon} alt="New Chat" />
                    {extended ? <p>New Chat</p> : null}
                </div>

                {extended && (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {previousPrompts.map((item, index) => (
                            <div key={index} onClick={() => loadPrompt(item)} className="recent-entry">
                                <img src={assets.message_icon} alt="Message" />
                                <p>{item.prompt.slice(0, 18)}...</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="Help" />
                    {extended ? <p>Help</p> : null}
                    {extended && (
                        <Link to="/help">
                            <p>Go to Help</p>
                        </Link>
                    )}
                </div>
                {/* <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="Activity" />
                    {extended ? <p>Activity</p> : null}
                    {extended && (
                        <Link to="/activity">
                            <p>Go to Activity</p>
                        </Link>
                    )}
                </div> */}
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="Settings" />
                    {extended ? <p>Settings</p> : null}
                    {extended && (
                        <Link to="/settings">
                            <p>Go to Settings</p>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
