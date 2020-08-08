import React from 'react';
import ScrollToTop from '../ScrollToTop';

/* Components */
import Presentation from '../Presentation';
import Portfolio from '../Portfolio'
import Cv from '../Cv';
import Menu from '../Menu';

/* Data */
import Data from '../../data/projects';

/* Style */
import './app.css';


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
