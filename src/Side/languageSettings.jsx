import React from 'react';
import './LanguageSettings.css';

const LanguageSettings = () => {
    return (
        <div className="language-settings">
            <h3>Language Settings</h3>
            <p>Select your preferred language:</p>
            <select>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
            </select>
        </div>
    );
};

export default LanguageSettings;
