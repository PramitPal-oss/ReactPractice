import React from 'react';

export default function FormList(props) {
  return (
    <div className='form-group'>
      <form>
        <input
          type='text'
          className='form-group__input input-field'
          value={props.value}
          key={props.id}
          readOnly
        />
      </form>
    </div>
  );
}
