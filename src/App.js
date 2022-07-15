import React from 'react';
import './App.css';
import MultipleInputs from './FormMultipleInputs';
// import Cars from './Cars';
// import SubmitForm from './FormSubmit';
// import Form from './Form';
// import MyForm from './Form1';
// import Fruits from './Fruits';

const calculate = (a, b) => {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const App = () => {
  const [add, subtract, multiply, divide] = calculate(4, 7);

  return (
    <React.Fragment>
      {/* <Fruits name="Jeel" age="21" />
      <Cars /> */}
      <p>
        Sum: {add}
      </p>
      <p>
        Sub: {subtract}
      </p>
      <p>
        Production: {multiply}
      </p>
      <p>
        Division: {divide}
      </p>
      {/* <Form /> */}
      {/* <MyForm /> */}
      {/* <SubmitForm /> */}
      <MultipleInputs />
    </React.Fragment>
  );
}

export default App;
