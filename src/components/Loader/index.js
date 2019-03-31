import React from 'react';
import loaderSrc from '../../assets/loader.gif';
import './index.css';

const Loader = props => (
    <div className="text-center">
        <img
            className="loader-icon"
            alt="Loader icon"
            src={loaderSrc} />
    </div>
);

export default Loader;
