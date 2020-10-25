import React from 'react';
import style from './Card.module.css';

const Card = (props) => <div className={style.card}>{props.children}</div>;

export { Card };
