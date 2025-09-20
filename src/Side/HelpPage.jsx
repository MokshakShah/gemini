import React from 'react';
import './HelpPage.css'; 
import { assets } from '../assets/assets'; 

const HelpPage = () => {
    return (
        <div className="help-page">
            <div className="help-container">
                <h2>Help</h2>
                <div className="help-section">
                    <img src={assets.question_icon} alt="Help Icon" className="help-icon" />
                    <p>
                        This chatbot helps you with various tasks like suggesting places to visit,
                        summarizing concepts, and more. Type your prompt in the input field and
                        press send to get started!
                    </p>
                </div>

                <div className="help-section">
                    <h3>Getting Started</h3>
                    <ul>
                        <li>
                            <strong>New Chat:</strong> Click the "+ New Chat" button to start a new conversation.
                        </li>
                        <li>
                            <strong>Recent:</strong> Your recent chats are displayed in the sidebar for quick access.
                        </li>
                        <li>
                            <strong>Entering Prompts:</strong> Type your query in the input field at the bottom of the screen and press send.
                        </li>
                    </ul>
                </div>

                <div className="help-section">
                    <h3>Examples</h3>
                    <ul>
                        <li>Suggest beautiful places to see on an upcoming road trip.</li>
                        <li>Briefly summarize this concept: urban planning.</li>
                        <li>Brainstorm team bonding activities for our work retreat.</li>
                        <li>Improve the readability of the following code.</li>
                    </ul>
                </div>

                <div className="help-section">
                    <h3>About Gemini</h3>
                    <p>
                    Gemini is a chatbot designed to assist with various tasks and provide helpful information. 
                    It can answer questions, generate text, summarize content, assist with coding, and process images, PDFs, and ZIP files. Gemini is capable of understanding and responding in multiple languages, making it a versatile tool for communication and productivity. 
                    It can also integrate with different applications to enhance user experience and streamline workflows.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;
