import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, useParams } from 'react-router-dom';

const Flags = () => {
    let { id } = useParams();
    return(
        <h1>Hi</h1>
    );
}

export default Flags