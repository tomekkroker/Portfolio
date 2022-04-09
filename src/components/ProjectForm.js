import React, { useContext, useState } from 'react';
import { ProjectContext } from './ProjectContext';

const ProjectForm = () => {
    const {dispatch} = useContext(ProjectContext);

    const [ name, setName] = useState('');
    const [ startDate, setStartDate] = useState('');
    const [ endDate, setEndDate] = useState('');
    const [ description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_PROJECT', project:{
            name, startDate, endDate, description
        }});
        setName('');
        setStartDate('');    
        setEndDate('');
        setDescription('');
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='project name' value={name}
                onChange={(e) => setName(e.target.value)} required />
            <input type='text' placeholder='start date' value={startDate}
                onChange={(e) => setStartDate(e.target.value)} required />
            <input type='text' placeholder='end date' value={endDate}
                onChange={(e) => setEndDate(e.target.value)} required />
            <input type='text' placeholder='description' value={description}
                onChange={(e) => setDescription(e.target.value)} required />
            <button type='submit'>submit</button>
        </form>
        </div>
    );

}

export default ProjectForm;