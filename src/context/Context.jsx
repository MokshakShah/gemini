import { createContext, useState } from 'react';
import runChat from '../config/gemini';

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('');
    const [previousPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState('');
    const [error, setError] = useState(null);
    const [currentChat, setCurrentChat] = useState({ messages: [] });
    const [activity, setActivity] = useState([]); // New state for activity

    const formatResponse = (response) => {
        let newResponse = response;
        newResponse = newResponse.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        newResponse = newResponse.replace(/\*(.*?)\*/g, '<br/>$1');
        newResponse = newResponse.replace(/^\*(.*)$/gm, '<br/>$1');
        newResponse = newResponse.replace(/\*(.*?)\*/gs, '<b/>$1');

        return newResponse;
    };

    const newChat = () => {
        if (currentChat.messages.length > 0) {
            setPrevPrompts((prev) => [...prev, { prompt: recentPrompt, result: resultData, messages: currentChat.messages }]);
            setActivity((prev) => [...prev, { prompt: recentPrompt, result: resultData, messages: currentChat.messages }]); // Store in activity
        }
        setLoading(false);
        setShowResult(false);
        setResultData('');
        setRecentPrompt('');
        setInput('');
        setCurrentChat({ messages: [] });
    };

    const onSent = async () => {
        if (!input.trim()) {
            alert('Please enter a message.');
            return;
        }

        setLoading(true);
        setShowResult(true);

        try {
            const response = await runChat(input);
            const formattedResponse = formatResponse(response);

            setCurrentChat((prev) => ({ messages: [...prev.messages, { type: 'user', content: input }, { type: 'bot', content: formattedResponse }] }));
            setRecentPrompt(input);
            setResultData(formattedResponse);
        } catch (error) {
            setError(error);
            console.error('Error during chat:', error);
        }

        setLoading(false);
        setInput('');
    };

    const loadPrompt = (item) => {
        setRecentPrompt(item.prompt);
        setResultData(item.result);
        setShowResult(true);
        setLoading(false);
        setInput(item.prompt);
        setCurrentChat({ messages: item.messages });
    };

    const contextValue = {
        previousPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        error,
        input,
        setInput,
        setResultData,
        currentChat,
        newChat,
        loadPrompt,
        activity, // Add activity to context
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
