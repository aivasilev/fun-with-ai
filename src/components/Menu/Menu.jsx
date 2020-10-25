import React from 'react';
import style from './Menu.module.css';

const Menu = ({ onRouteChange, isSignedIn, signOut }) =>
  isSignedIn ? (
    <nav className={style.navbar}>
      <button
        className={style.button}
        onClick={() => {
          signOut();
          onRouteChange('signin');
        }}
      >
        Sign out
      </button>
    </nav>
  ) : (
    <nav className={style.navbar}>
      <button className={style.button} onClick={() => onRouteChange('register')}>
        Register
      </button>
      <button className={style.button} onClick={() => onRouteChange('signin')}>
        Sign in
      </button>
    </nav>
  );

export { Menu };
