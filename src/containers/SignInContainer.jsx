import React, { useState } from 'react';
import { SignIn } from '../components/SignIn/SignIn';

const SignInContainer = ({ loadUser, signIn, onRouteChange }) => {
  // State
  const [signInName, setSignInName] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [displayError, setDisplayError] = useState(null);
  // End of state

  // Functions
  const onNameChange = (e) => {
    setSignInName(e.target.value);
  };
  const onPasswordChange = (e) => {
    setSignInPassword(e.target.value);
  };
  const onSubmitSignIn = async () => {
    try {
      const response = await fetch('http://https://fun-with-ai-api.herokuapp.com:3030/signin', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: signInName,
          password: signInPassword,
        }),
      });
      const data = await response.json();
      if (data === 'failure') {
        setDisplayError('Error logging in');
      } else {
        loadUser(data);
        signIn();
        onRouteChange('home');
      }
    } catch (error) {
      console.log(error);
      setDisplayError('Something went wrong');
    }
  };
  // End of functions

  // Render
  return (
    <SignIn
      displayError={displayError}
      onNameChange={onNameChange}
      onPasswordChange={onPasswordChange}
      onSubmitSignIn={onSubmitSignIn}
      onRouteChange={onRouteChange}
    />
  );
};

export { SignInContainer };
