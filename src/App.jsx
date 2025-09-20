import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Context from './context/Context';
import Settings from './Side/Settings';
import LanguageSettings from './Side/LanguageSettings';
import NotificationSettings from './Side/NotificationSettings';
import About from './Side/About';
import HelpPage from './Side/HelpPage';

const App = () => {
    return (
        <Router>
            <Context>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/settings/language" element={<LanguageSettings />} />
                    <Route path="/settings/notifications" element={<NotificationSettings />} />
                    <Route path="/settings/about" element={<About />} />
                    <Route path="/help" element={<HelpPage />} />
                    {/* <Route path="/activity" element={<ActivityPage />} /> */}
                </Routes>
            </Context>
        </Router>
    );
};

export default App;
