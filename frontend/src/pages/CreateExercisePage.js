/*
The Create Exercise Page allows the user to add a new exercise to the database.
There are 5 required properties name, reps, weight, unit, and date.
The date must be implemented as a drop down menu calendar or by entering
in the format month-day-year MM-DD-YY.
*/


import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('1');
    const [weight, setWeight] = useState('1');
    const [unit, setUnit] = useState('miles');
    const [date, setDate] = useState();
    
    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise to a new row in the log database!");
        } else {
            alert(`Failed to add exercise to a new row, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Log your Exercise!</h2>
            <p>Add your completed exercises here.</p>

            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which exercise are you adding?</legend>
                    <label for="name">Exercise title</label>
                    <input
                        type="text"
                        placeholder="Name of exercise"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    <legend>What number of reps are you adding?</legend>

                    <label for="reps">Exercise reps</label>
                    <input
                        type="number"
                        min="1"
                        placeholder="Number of reps"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <label for="weight">Exercise weight</label>
                    <input
                        type="number"
                        min="1"
                        placeholder="Number of weights"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                    <label for="unit">Exercise unit</label>
                    <select name='unit' 
                            value={unit}
                            onChange={e => setUnit(e.target.value)}
                            required="required"
                                >
                                <option value='lbs' selected>Lbs</option>
                                <option value='kgs'>Kgs</option>
                                <option value='miles'>Miles</option>
                                <option value='kilometers'>Kms</option>
                                <option value='minutes'>Minutes</option>
                    </select>

                    <label for="date">Exercise date</label>
                    <input
                        type="date"
                        placeholder="Date of exercise"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />                 

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addExercise}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreateExercisePage;