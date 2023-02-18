import React, { useState } from 'react';
import './InvalidInput.css';

export default function InvalidInput(props) {
  return (
    <div className='invalid'>
      <h3 className='invalid__heading'>Invalid Input</h3>
      <p className='invalid__text'>
        Please enter a valid name and age (non-empty values)
      </p>
      <button className='invalid__btn' onClick={props.hidePopupHandler}>
        Okay
      </button>
    </div>
  );
}
