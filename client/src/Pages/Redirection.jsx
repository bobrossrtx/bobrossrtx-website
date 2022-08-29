import React from 'react';
import { Navigate } from 'react-router-dom';

const Redirection = (props) => {
    window.location.replace(props.to);
    return null;
}

export default Redirection;