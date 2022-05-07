const MovieDisplay = (props) => {
  if (props.movie) {
    return (
      <div>
        <h1>{props.movie.Title}</h1>
        <img src={props.movie.Poster} alt={props.movie.Title} />
        <h3>{props.movie.Writer}</h3>
      </div>
    );
  } else {
    return <h1>Search for a Movie</h1>;
  }
};

export default MovieDisplay;
