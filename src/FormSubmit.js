import React, { useState } from 'react';


const SubmitForm = () => {
    const [name, setName] = useState('Hello');

    const takeAction = (event) => {
        event.preventDefault();
        alert(`The Name you entered was: ${name}`)
    }

    return (
        <form onSubmit={takeAction}>
            <label>Enter Your Name :
                <input 
                    type="text"
                    value={name}
                    onChange = { (elem) => setName(elem.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default SubmitForm;