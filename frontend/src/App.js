// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';

// Define the function that renders the content in routes using State.
function App() {

  const [exercise, setExercise] = useState([]);

  return (
    <>
      <Router>

          <header>
            <h1>This is the Log of Exercises</h1>
            <p>This app uses MERN to keep track of your exercises completed.</p>
          </header>

          <Navigation />

          <main>
            <article className='Exercise App-article'>
              <Route path="/" exact><HomePage setExercise={setExercise} /></Route>
              <Route path="/add-exercise"><CreateExercisePage /></Route>
              <Route path="/edit-exercise"><EditExercisePage exercise={exercise} /></Route>
            </article>
          </main>

          <footer>
            <p><cite>&copy; 2022 Ashwini Chawla, CS 290 Portfolio Assignment 7</cite></p>
          </footer>

      </Router>
    </>
  );
}

export default App;