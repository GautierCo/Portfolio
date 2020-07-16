import React from 'react';

/* Components */
import Presentation from './components/Presentation';
import Portfolio from './components/Portfolio'
import Cv from './components/Cv';
import Menu from './components/Menu';

/* Data */
import Data from './data/projects';

/* Style */
import './App.css';

class App extends React.Component {

    state = {
        projectSelected: null, // ID
    };

    changeProjectSelected = (projectId) => {

        this.setState( {
            projectSelected: projectId,
        });
    };

    render () {

        return (
            <div className="App">
                <Menu />
                <Presentation />
                <Cv />
                <Portfolio 
                    projects={Data} 
                    projectSelected={this.state.projectSelected} 
                    changeProjectSelected={this.changeProjectSelected}  
                />
            </div>
        );
    };
};

export default App;
