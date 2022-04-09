import {v4 as uuid } from 'uuid';

export const ProjectReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PROJECT':
            return[...state, {
                name: action.project.name,
                startDate: action.project.startDate,
                endDate: action.project.endDate,
                description: action.project.description,
                id: uuid()
            }]
            default:
                return state
    }
}