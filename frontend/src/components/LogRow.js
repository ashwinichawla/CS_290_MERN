import React from 'react';
import { TiDeleteOutline, TiBrush} from 'react-icons/ti';

function LogRow({ exercise, onDelete, onEdit }) {
    return(
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            {/*Make sure to truncate date so it doesn't include the time stamp.*/}
            <td>{exercise.date.substring(0,10)}</td>
            <td><TiDeleteOutline onClick={() => onDelete(exercise._id)} /></td>
            <td><TiBrush onClick={() => onEdit(exercise)} /></td>
        </tr>
    );
}

export default LogRow;