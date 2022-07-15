import React from 'react';

const Car = (props) => {
    const { type, brand, model} = props;
    return (<p>My {type} Name Is {brand} {model}</p>)
}

export default Car;