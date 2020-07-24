import React, {useState} from "react";
import { Link, Route, Switch  } from 'react-router-dom';
import Home from './Home.js';
import PizzaForm from './PizzaForm';
import axios from 'axios'
import styled from 'styled-components'
import * as yup from 'yup'
import formSchema from './valadation/form_schema'


const StyledNav = styled.div`
  padding: 40px;
  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  h1{
    font-size: 30px;
    margin-left: 15px;
  }
  .linkDiv{
    display: flex;
    margin-right: 15px;
  }
  .link{
    color: black;
    text-decoration: none;
    margin-left: 15px;
    margin-right: 15px;
    &:hover{
      color: grey;
    }
  }
`

const initialFormValues = {
  name: '',
  size: '',
  special: '',
  toppings: {
    pepperoni: false,
    olives: false,
    onions: false,
    pineapple: false,
  }
}
const initialErrors = {
  name: ''
}


const App = () => {
  
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialErrors)
  const [ netError, setNetError ] = useState('')

  const inputChange = (name,value) => {
    if(name === 'name'){
      yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    }
    setFormValues({...formValues, [name]: value})
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({...formValues, toppings: {
      ...formValues.toppings, [name]: isChecked
    }})
  }
  
  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/users', newOrder)
      .then(res => {
        console.log(res)
        setFormValues(initialFormValues)
      })
      .catch(err => {
        setNetError('Aye we have some network issues my dude!')
      })
  }
  const submit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      special: formValues.special.trim(),
      toppings: {
        pepperoni: formValues.toppings.pepperoni,
        olives: formValues.toppings.olives,
        onions: formValues.toppings.onions,
        pineapple: formValues.toppings.pineapple,
      }
    }
    postNewOrder(newOrder)
  }
  return (
    <div>
      <StyledNav>
        <nav>
          <h1>Lambda Eats</h1>
          <div className='linkDiv'>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to='/pizza'>Pizza</Link>
          </div>
        </nav>
        <hr/>
      </StyledNav>
      <Switch>
        <Route path='/confirmation'>
          
        </Route>
        <Route path='/pizza'>
          <PizzaForm 
            values={formValues}
            inputChange={inputChange}
            checkboxChange={checkboxChange}
            submit={submit}
            errors={formErrors}
            netError={netError}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
  
};
export default App;
