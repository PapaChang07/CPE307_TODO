import React, {useState} from 'react';

function Form(props) {
  const [person, setPerson] = useState(
     {
        name: "",
        password: "",
     }
  );

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "password")
      setPerson(
         {name: person['name'], password: value}
      );
    else     
       setPerson(
         {name: value, password: person['password']}   
       );
  }

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={person.name}
        onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        id="password"
        value={person.password}
        onChange={handleChange} />
        <input type="button" value="Submit" onClick={submitForm} />
    </form>
);

function submitForm() {
    props.handleSubmit(person);
    setPerson({name: '', password: ''});
  }
}

export default Form;