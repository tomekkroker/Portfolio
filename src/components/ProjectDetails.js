import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
const ProjectDetails = ({project}) => {
    
    return (
        <TableBody>
        <TableCell>{project.name}</TableCell>
        <TableCell>{project.startDate}</TableCell>
        <TableCell>{project.endDate}</TableCell>
        <TableCell >{project.description}</TableCell>
        </TableBody>
    );
}

export default ProjectDetails;