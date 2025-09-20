import React from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <ul>
        <li>
          <Link to="/settings/language">Language Settings</Link>
        </li>
        <li>
          <Link to="/settings/notifications">Notification Settings</Link>
        </li>
        <li>
          <Link to="/settings/about">About Gemini</Link>
        </li>
      </ul>
    </div>
  );
};

export default Settings;
