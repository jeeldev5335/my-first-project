import React, { useState } from 'react';


const MyForm = () => {
    const [name, setName] = useState("");

    return (
        <form>
            <label>Enter Your Name :
                <input 
                    type="text"
                    value={name}
                    onChange = { (elem) => setName(elem.target.value)}
                />
            </label>
        </form>
    )
}

export default MyForm;