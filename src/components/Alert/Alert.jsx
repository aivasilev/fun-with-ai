import React from 'react';
import style from './Alert.module.css';

const Alert = ({ message }) => {
  return <p className={style.alert}>{message}</p>;
};

export default Alert;
