import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import components
import LogTable from '../components/LogTable';

function HomePage({ setExercise }) {
    // Use the history for updating
    const history = useHistory();

    // Use state to bring in the data
    const [exercises, setExercises] = useState([]);

    // RETRIEVE the list of exercises
    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const exercises = await response.json();
        setExercises(exercises);
    } 
    

    // UPDATE a single exercise
    const onEditExercise = async exercise => {
        setExercise(exercise);
        history.push("/edit-exercise");
    }


    // DELETE a single exercise  
    const onDeleteExercise = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/exercises');
            const exercises = await getResponse.json();
            setExercises(exercises);
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD the exercises
    useEffect(() => {
        loadExercises();
    }, []);

    // DISPLAY the exercises
    return (
        <>
            <h2>List of Exercises</h2>
            <p>Log your exercises here using the icons. Click on the log button to add an exercise, and delete to remove an exercise.</p>
            <LogTable
                exercises={exercises} 
                onEdit={onEditExercise} 
                onDelete={onDeleteExercise} 
            />
            
        </>
    );
}

export default HomePage;