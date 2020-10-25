import React from 'react';
import style from './SignIn.module.css';
import Alert from '../Alert/Alert';

const SignIn = ({
  displayError,
  onNameChange,
  onPasswordChange,
  onSubmitSignIn,
  onRouteChange,
}) => {
  return (
    <div className={style.form}>
      {displayError && <Alert message={displayError} />}
      <input onChange={onNameChange} className={style.login} type='text' placeholder='username' />
      <input
        onChange={onPasswordChange}
        className={style.password}
        type='password'
        placeholder='password'
      />
      <button
        className={style.button}
        onClick={() => {
          onSubmitSignIn();
        }}
      >
        Sign in
      </button>
      <button className={style.register} onClick={() => onRouteChange('register')}>
        Register
      </button>
    </div>
  );
};

export { SignIn };
