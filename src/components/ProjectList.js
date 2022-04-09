import React, { useContext } from 'react';
import { ProjectContext } from './ProjectContext';
import ProjectDetails from './ProjectDetails';

//MUI
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ProjectList = () => {
    const { projects } = useContext(ProjectContext);
    return (
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tytuł </TableCell>
            <TableCell >Data rozpoczęcia</TableCell>
            <TableCell >Data zakończenia</TableCell>
            <TableCell >Opis</TableCell>
          </TableRow>
        </TableHead>        
            {projects.map( project =>
            {
            return(<ProjectDetails project={project} key={project.id}/>)
            })}        
        </Table>
        </TableContainer>
    )
}

export default ProjectList;