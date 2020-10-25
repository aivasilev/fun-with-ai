import React from 'react';
import s from './ResultImage.module.css';

const ResultImage = ({ imageUrl, box }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2em',
    }}
  >
    <div className={s.imagecontainer}>
      <img id='recogimage' className={s.recogimage} src={imageUrl} alt='' />
      <div
        className={s.boundingBox}
        style={{ top: box.topRow, left: box.leftCol, bottom: box.bottomRow, right: box.rightCol }}
      />
    </div>
  </div>
);

export { ResultImage };
