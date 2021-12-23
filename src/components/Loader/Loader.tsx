import React from 'react';
import './Loader.css';
import LoaderCorp from '../../images/loader-corp-upd.gif';

const Loader = () => {
  return (
    <div className="loader">
      <img className="loader__img" src={LoaderCorp} alt="Загрузка..."/>
    </div>
  );
};

export default Loader;
