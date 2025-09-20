import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-container">
                <h2>About Gemini</h2>
                <p>
                    Gemini is a chatbot designed to assist with various tasks and provide helpful information.
                </p>
                <p>
                    Our goal is to provide a seamless and intuitive experience to help you get the most out of your conversations.
                </p>
                <p>
                    With Gemini, you can explore a wide range of topics, get quick answers, and generate creative content.
                </p>
                <h3>Key Features</h3>
                <ul>
                    <li>
                        <strong>Versatile Assistance:</strong> Gemini can assist with summarizing, generating ideas, providing recommendations, and much more.
                    </li>
                    <li>
                        <strong>User-Friendly Interface:</strong> The intuitive design ensures a smooth and easy-to-use experience.
                    </li>
                    <li>
                        <strong>Recent Chat History:</strong> Access your previous conversations in the sidebar for seamless continuity.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About;
