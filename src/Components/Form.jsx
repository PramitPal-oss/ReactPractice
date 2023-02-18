import React, { useState } from 'react';
import './Form.css';
import InvalidInput from './InvalidInput';

export default function Form(props) {
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [isInputvalid, setIsInputValid] = useState(true);

  const nameInputHandler = (e) => setNameInput(e.target.value);

  const ageInputHandler = (e) => setAgeInput(e.target.value);

  const formSubmitHandler = function (e) {
    e.preventDefault();
    if (nameInput === '' || ageInput === '') {
      return setIsInputValid(false);
    } else {
      const inputObj = {
        name: nameInput,
        age: ageInput,
        id: Math.random() * 1000,
      };
      props.onInputHandler(inputObj);
      setNameInput('');
      setAgeInput('');
    }
  };

  const onHideHandler = (e) => setIsInputValid(true);

  return (
    <div>
      {isInputvalid ? (
        <form className='form-group' onSubmit={formSubmitHandler}>
          <label htmlFor='username' className='form-group__label'>
            UserName
          </label>
          <input
            type='text'
            className='form-group__input input-field'
            placeholder='Enter your UserName'
            id='username'
            value={nameInput}
            onChange={nameInputHandler}
          />
          <label htmlFor='age' className='form-group__label'>
            Age (years)
          </label>
          <input
            type='Number'
            className='form-group__input input-field u__margin-buttom'
            placeholder='Enter your age'
            id='age'
            value={ageInput}
            min='5'
            onChange={ageInputHandler}
          />
          <button type='submit' className='form-group__btn btn'>
            Add User
          </button>
        </form>
      ) : (
        <InvalidInput hidePopupHandler={onHideHandler} />
      )}
    </div>
  );
}
