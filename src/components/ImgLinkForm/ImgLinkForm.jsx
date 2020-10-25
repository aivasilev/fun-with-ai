import React from 'react';
import style from './ImgLinkForm.module.css';

const ImgLinkForm = ({ input, onInputChange, onPictureSubmit }) => (
  <div className={style.formWrapper}>
    <input
      id='urlinput'
      className={style.urlInput}
      type='text'
      placeholder='Image URL...'
      onChange={onInputChange}
      value={input}
    />
    <button className={style.button} onClick={onPictureSubmit}>
      Detect
    </button>
  </div>
);

export { ImgLinkForm };
