import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import { useState } from 'react';

function App() {
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

  return (
    <div className="App">
      <Form getMovie={getMovie}/>
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
