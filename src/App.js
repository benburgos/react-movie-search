import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import { useState, useEffect } from 'react';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movie, setMovie] = useState(null);
  const getMovie = async (searchTerm) => {
    // making the api call
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`
    );
    // converting the response to a JS object
    const data = await response.json();
    // updating the state to that object
    setMovie(data);
  };

  const randomMovie = () => {
    const movies = [
      'Swiss Army Man',
      'Her',
      'The Lobster',
      'Everything Everywhere All At Once',
      'I Heart Huckabees',
    ];
    return movies[Math.floor(Math.random() * movies.length)];
  };

  // useEffect must ALWAYS have two arguments, a function and an array
  // the function will run ONCE when the component runs
  // will ONLY repeat if any value in the array changes
  useEffect(() => {
    getMovie(randomMovie());
  }, []);

  return (
    <div className="App">
      <Form getMovie={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
