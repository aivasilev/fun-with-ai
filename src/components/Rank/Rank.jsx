import React from 'react';
import style from './Rank.module.css';

const Rank = ({ user }) => {
  return (
    <div className={style.wrapper}>
      <h2>{`${user.name}, your submitted images count is`}</h2>
      <h1>{user.count}</h1>
    </div>
  );
};

export { Rank };
