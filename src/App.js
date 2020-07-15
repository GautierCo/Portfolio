import React from 'react';

import './App.css';
import Presentation from './components/Presentation';
import Portfolio from './components/Portfolio'
import Cv from './components/Cv';
import Menu from './components/Menu';
import Data from './data/projects';

class App extends React.Component {

    state = {
        projectSelected: null, // ID
        projects: {
            id: 1,
            name: "", 
            description: "", 
            theme: "",
            technology: "",
            url: "",
            logo: null,
            urlGithub: null
        },
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
                <Portfolio projects={Data} projectSelected={this.state.projectSelected} changeProjectSelected={this.changeProjectSelected}  />
            </div>
        );
    };
};

export default App;
