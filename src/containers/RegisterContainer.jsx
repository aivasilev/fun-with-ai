import React, { useState } from 'react';
import { Register } from '../components/Register/Register';

const RegisterContainer = ({ onRouteChange }) => {
  // State
  const [registerName, setRegisterName] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [displayError, setDisplayError] = useState('');
  // End of state

  // Functions
  const onNameChange = (e) => {
    setRegisterName(e.target.value);
  };
  const onPasswordChange = (e) => {
    setRegisterPassword(e.target.value);
  };
  const onSubmitRegister = async () => {
    try {
      const response = await fetch('http://https://fun-with-ai-api.herokuapp.com:3030/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: registerName,
          password: registerPassword,
        }),
      });
      const data = await response.json();
      if (data === 'failure') {
        setDisplayError('Unable to register');
      } else {
        onRouteChange('signin');
      }
    } catch (error) {
      console.log(error);
      setDisplayError('Something went wrong');
    }
  };
  // End of functions

  // Render
  return (
    <Register
      displayError={displayError}
      onNameChange={onNameChange}
      onPasswordChange={onPasswordChange}
      onSubmitRegister={onSubmitRegister}
    />
  );
};

export { RegisterContainer };
