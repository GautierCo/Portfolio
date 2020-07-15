import React from 'react';
import './modal.scss';
// import './modalRes.scss';

const Modal = (props) => {

    const projectId = props.projectId;
    const projectSelect = props.data.find(project => project.id == projectId );
    console.log(projectId)
    console.log(projectSelect)

    return (
        <div className="modal">
            <h3 className="project-name">{ projectSelect.name }</h3>
            <p className="project-description">{ projectSelect.description }</p>
            <p className="project-theme">{ projectSelect.theme }</p>
            <div className="project-technology">{ projectSelect.technology }</div>
            <img className="project-logo" src={ projectSelect.logo } alt=""/>
        </div>
    )
};

export default Modal;