import React, { useState } from 'react';

const MultipleInputs = () => {
    const [names, setName] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setName( values => ({...values, [name]: value}))
    }

    const TakeAction = (event) => {
        event.preventDefault();
        console.log(names);
    }

    return (
        <form onSubmit={TakeAction}>
            <label>Enter your name:
                <input
                    type='text'
                    name='username'
                    value={names.username || ""}  
                    onChange={handleChange}              
                />
            </label>
            <label>Enter your age:
                <input
                    type='number'
                    name='age'
                    value={names.age || ""}
                    onChange={handleChange}          
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default MultipleInputs;