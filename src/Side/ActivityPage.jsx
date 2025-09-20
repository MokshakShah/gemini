import React, { useContext } from 'react';
import { Context } from './../context/Context';

const ActivityPage = () => {
    const { activity, loadPrompt } = useContext(Context);

    return (
        <div className="activity-page">
            <h2>Activity</h2>
            {activity.length > 0 ? (
                <ul>
                    {activity.map((item, index) => (
                        <li key={index} onClick={() => loadPrompt(item)}>
                            {item.prompt.slice(0, 18)}...
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No recent activity.</p>
            )}
        </div>
    );
};

export default ActivityPage;
