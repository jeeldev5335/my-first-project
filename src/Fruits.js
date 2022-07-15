import React from 'react';

const Fruits = (props) => {
    const myArr = ['Mango', 'Apple', 'Orange', 'Banana'];
    const { name, age } = props;

    return (
        <ul>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            {myArr.map((element, index) => <li key={`fruits-${index}`}>{element}</li>)}
        </ul>)
}

export default Fruits;