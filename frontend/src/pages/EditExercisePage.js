import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditExercisePage = ({ exercise }) => {
 
    const [name, setName] = useState(exercise.name);
    const [reps, setReps] = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit] = useState(exercise.unit);
    const [date, setDate] = useState(exercise.date);
    
    const history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name,
                reps: reps,
                weight: weight,
                unit: unit,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            history.push("/");
            alert("Successfully edited exercise entry!");
        } else {
            const errMessage = await response.json();
            history.push("/");
            alert(`Failed to update exercise entry. Status ${response.status}. ${errMessage.Error}`);
        }
        //history.push("/");
    }

    return (
        <>
            <h2>Edit an Exercise</h2>
            <p>Use the icons below to update an entry of an exercise completion log.</p>

            <table id="exercises">
                <caption>Edit an exercise entry.</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Unit</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <label for="exercisename">
                                <input type="text" value={name} id="exercisename" name="name"
                                onChange={e => setName(e.target.value)}
                                maxLength="40" size="40" required
                                />
                            </label>
                        </td>

                        <td>
                            <label for="exercisereps">
                                <input type="number" min="1" value={reps} id="exercisereps" name="reps"
                                onChange={e => setReps(e.target.value)}
                                maxLength="3" size="5" required
                                />
                            </label>
                        </td>

                        <td>
                            <label for="exerciseweight">
                                <input type="number" min="1" value={weight} id="exerciseweight" name="weight"
                                onChange={e => setWeight(e.target.value)}
                                maxLength="4" size="5" required
                                />
                            </label>
                        </td>

                        <td>
                            <label for="exerciseunit">
                                {/*<input type="text" value={unit} id="exerciseunit" name="unit"
                                onChange={e => setUnit(e.target.value)} 
                                maxLength="3" size="4" required*/}
                                <select name='unit'
                                    onChange={e => setUnit(e.target.value)}
                                    required="required"
                                >
                                    <option value='lbs' selected>Lbs</option>
                                    <option value='kgs'>Kgs</option>
                                    <option value='miles'>Miles</option>
                                    <option value='kilometers'>Kms</option>
                                    <option value='minutes'>Minutes</option>
                                </select>
                            </label>
                        </td>

                        <td>
                            <label for="exercisedate">
                                <input type="text" id="exercisedate" name="date" value={date.substring(0,10)}
                                onChange={e => setDate(e.target.value)}
                                />
                            </label>
                        </td>

                        <td><button onClick={editExercise}>Save</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
export default EditExercisePage;