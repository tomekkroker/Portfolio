import React, { createContext, useReducer, useEffect } from 'react';
import { ProjectReducer } from './ProjectReducer';

export const ProjectContext = createContext();
const ProjectContextProvider = (props) => {
    const [projects, dispatch] = useReducer(ProjectReducer,[], () => {
        const localData = localStorage.getItem('projects');
        return localData ? JSON.parse(localData) : []
    });
    useEffect(()=>{
        localStorage.setItem('projects', JSON.stringify(projects))
    }, [projects]);

    return(
        <ProjectContext.Provider value ={{projects, dispatch}}>
            { props.children }
        </ProjectContext.Provider>
    );
}

export default ProjectContextProvider;