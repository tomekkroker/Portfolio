import React, { useContext } from 'react';
import { ProjectContext } from './ProjectContext';

//MUI
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';

const ProjectList = () => {
    const { projects } = useContext(ProjectContext);
    return (
      <div className='list--body'>
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
            return(        
            <TableBody>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.startDate}</TableCell>
              <TableCell>{project.endDate}</TableCell>
              <TableCell >{project.description}</TableCell>
            </TableBody>
            )})}        
        </Table>
        </TableContainer>
        </div>
    )
}

export default ProjectList;