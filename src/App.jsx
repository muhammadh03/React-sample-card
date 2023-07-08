import React from 'react';

import CardLink from './CardLink';
import './App.css';

const App = () => {
    return (
        <div className="Container">
            <CardLink 
            title='Self Paced Courses' 
            description='Learn & UpSkill via Online Courses'
            link='https://www.guvi.in/courses'
            />
            <CardLink 
            title='LIVE Classes' 
            description='Live Classes offering Guaranteed Job Placement Support'
            link='https://www.guvi.in/zen-class/'
            />
            <CardLink 
            title='Interactive Practice Platforms' 
            description='Learn through Hands-on Coding Experience'
            link='https://www.guvi.in/code-kata'
            />
            <CardLink 
            title='For Corporate' 
            description='Meet your hiring needs at ease'
            link='https://www.guvi.in/mlp/GUVI-for-corporates'
            />
        </div>
    );
};

export default App;