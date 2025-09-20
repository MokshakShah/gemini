import React from 'react';
import './NotificationSettings.css';

const NotificationSettings = () => {
    return (
        <div className="notification-settings">
            <h3>Notification Settings</h3>
            <p>Enable notifications for new updates:</p>
            <input type="checkbox" />
        </div>
    );
};

export default NotificationSettings;
