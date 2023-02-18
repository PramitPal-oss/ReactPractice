import React, { useState } from 'react';
import Form from './Components/Form';
import './App.css';
import FormList from './Components/FormList';
import InvalidInput from './Components/InvalidInput';

let listobj = [];

function App() {
  const [dummyObj, setDummyObj] = useState(listobj);

  const userInputHandler = function (userInput) {
    setDummyObj((prevObj) => [...prevObj, userInput]);
  };

  return (
    <div className='formValidation'>
      <h1>Hey React</h1>
      <Form onInputHandler={userInputHandler} />
      {dummyObj.map((el) => (
        <FormList value={`${el.name} (${el.age} years old)`} key={el.id} />
      ))}
    </div>
  );
}

export default App;
