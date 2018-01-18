import React from 'react';
import style from './bicycle.scss';

const Bicycle = () => (
  <div className={style.title}>
    <span>Bicyclsdasdasdae</span>
    <span>{process.env.NODE_ENV}</span>
  </div>
);

export default Bicycle;
