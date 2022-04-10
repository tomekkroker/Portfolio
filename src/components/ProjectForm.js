import React, { useContext, useState } from 'react';
import { ProjectContext } from './ProjectContext';

const ProjectForm = () => {
    const {dispatch} = useContext(ProjectContext);
    const date = new Date().toJSON().slice(0, 10);
    const [ name, setName] = useState('');
    const [ startDate, setStartDate] = useState(date);
    const [ endDate, setEndDate] = useState(date);
    const [ description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_PROJECT', project:{
            name, startDate, endDate, description
        }});
        setName('');
        setStartDate(date);    
        setEndDate(date);
        setDescription('');
    }

    return(
        <div className='form--container'>
        <form onSubmit={handleSubmit}>
            <h1 className='form--title'>Nowy projekt</h1>
            <hr></hr>
            <input 
                type='text' placeholder='Nazwa projektu' value={name}
                onChange={(e) => setName(e.target.value)} required maxLength="32" />
            <input 
                type='date'  value={startDate} min='2000-01-01' max={endDate}
                onChange={(e) => setStartDate(e.target.value)} required />
            <input 
                type='date'  value={endDate} min={startDate} max='2030-01-01'
                onChange={(e) => setEndDate(e.target.value)} required />
            <textarea 
                placeholder='Opis' value={description}
                onChange={(e) => setDescription(e.target.value)} 
                required maxLength="400" />
            <button className='form--button' type='submit'>Dodaj</button>
        </form>
        </div>
    );

}

export default ProjectForm;