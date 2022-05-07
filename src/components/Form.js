import { useState } from 'react';

const Form = (props) => {
  const [formState, setFormState] = useState({
    searchTerm: '',
  });

  const handleChange = (event) => {
    // make a new copy of the current state
    const newState = { ...formState };
    // update the copy, because you cannot update the original
    // event.target.name will grab the input name,
    // so handleChange can be used on multiple components
    newState[event.target.name] = event.target.value;
    // set the state, replacing the old object with the new
    setFormState(newState);
    // a one line method to do the above is...
    // setFormState({...formState, [event.target.name]: event.target.value})
  };

  const handleSubmit = (event) => {
    // prevent the refresh
    event.preventDefault();
    // pass the searchTerm to getMovie
    props.getMovie(formState.searchTerm);
    // reset the formState
    setFormState({
      searchTerm: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          value={formState.searchTerm}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
