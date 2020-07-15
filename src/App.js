import React from 'react';

import './App.css';
import Presentation from './components/Presentation';
import Portfolio from './components/Portfolio'
import Cv from './components/Cv';
import Menu from './components/Menu';

const App = () => {
    return (
        <div className="App">
            <Menu />
            <Presentation />
            <Cv />
            <Portfolio />
        </div>
    );
};

export default App;
