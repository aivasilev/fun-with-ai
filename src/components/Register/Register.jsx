import React from 'react';
import style from './Register.module.css';
import Alert from '../Alert/Alert';

const Register = ({ displayError, onNameChange, onPasswordChange, onSubmitRegister }) => {
  return (
    <div className={style.form}>
      {displayError && <Alert message={displayError} />}
      <input className={style.login} onChange={onNameChange} type='text' placeholder='username' />
      <input
        className={style.password}
        onChange={onPasswordChange}
        type='password'
        placeholder='password'
      />
      <button
        className={style.button}
        onClick={() => {
          onSubmitRegister();
        }}
      >
        Register
      </button>
    </div>
  );
};

export { Register };
