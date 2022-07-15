import React from 'react';
import Car from './Car';

const getCars = () => {
    return [
        {
            brand: 'Ford',
            model: 'Mustang',
            type: 'car',
            year: 2021,
            color: 'red',
            registration: {
                city: 'Houston',
                state: 'Texas',
                country: 'USA'
            }
        },
        {
            brand: 'Ford',
            model: 'Endevour',
            type: 'car',
            year: 2021,
            color: 'red',
            registration: {
                city: 'Houston',
                state: 'Texas',
                country: 'USA'
            }
        }
    ];
}

const Cars = () => {
    const cars = getCars();

    return (
        <div>        
            {cars.map(el => <Car brand={el.brand} model={el.model} type={el.type} />)}
        </div>
    )
}

export default Cars;