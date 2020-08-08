import React from 'react';
import ScrollToTop from './components/ScrollToTop';

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
        modalStatus: false,
    };

    changeProjectSelected = (projectId) => {
        this.setState( {
            projectSelected: projectId,
        });
    };

    changeModalStatus = (status) => {
        this.setState( {
            modalStatus: status
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
                    modalStatus={this.state.modalStatus}
                    changeModalStatus={this.changeModalStatus}
                />
                <ScrollToTop />
            </div>
        );
    };
};

export default App;
