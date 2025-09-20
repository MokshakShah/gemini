import React from 'react';
import './Settings.css';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Settings = () => {
    return (
        <div className="settings-page">
            <div className="settings-container">
                <h2>Settings</h2>
                <div className="settings-section">
                    <div className="setting-item">
                        <img src={assets.language_icon} alt="Language" className="setting-icon" />
                        <Link to="/settings/language">
                            Language Settings
                        </Link>
                    </div>
                    <div className="setting-item">
                        <img src={assets.notification_icon} alt="Notifications" className="setting-icon" />
                        <Link to="/settings/notifications">
                            Notification Settings
                        </Link>
                    </div>
                    <div className="setting-item">
                        <img src={assets.info_icon} alt="About" className="setting-icon" />
                        <Link to="/settings/about">
                            About Gemini
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
