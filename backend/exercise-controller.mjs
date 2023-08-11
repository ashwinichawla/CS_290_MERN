import 'dotenv/config';
import express from 'express';
import * as exercises from './exercise-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());


// CREATE controller ******************************************
app.post ('/exercises', (req,res) => { 
    exercises.createExercise(
        req.body.name, 
        req.body.reps, 
        req.body.weight,
        req.body.unit,
        req.body.date
        )
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Creation of an exercise failed due to invalid syntax.' });
        });
});


// RETRIEVE controller ****************************************************
// GET exercises by using REST's GET
app.get('/exercises', (req, res) => {
    // const exercises = req.params;
    // console.log('exercise = ' + exercise)
    // const movieId = req.params._id;
    exercises.findExercise({})
        .then(exercise => { 
            if (exercise !== null) {
                res.json(exercise);
            } else {
                res.status(404).json({ Error: 'Exercise document not found' });
            }         
         })
        .catch(error => {
            res.status(400).json({ Error: 'Request to retrieve exercise document failed' });
        });

});


// UPDATE controller ************************************
// UPDATE using REST and PUT
app.put('/exercises/:id', (req, res) => {
    exercises.replaceExercise(
        req.params.id, 
        req.body.name, 
        req.body.reps,
        req.body.weight, 
        req.body.unit,
        req.body.date
    )

    .then(exercise => {
        // if found, must update exercise
        res.json(exercise);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Request to replace a document failed.'})
    })
});        


// DELETE Controller ******************************
app.delete('/exercises/:id', (req, res) => {
    exercises.deleteById(req.params.id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Document does not exist.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request to delete an exercise by ID failed.' });
        });
});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});