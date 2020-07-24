import React from 'react';
import styled from 'styled-components'



const StyledForm = styled.form`
display: flex;
button{
    width: 200px;
    margin: 20px;
}
.firstDiv{
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    border-right: 1px solid black;
    label{
        margin: 20px;
    }
}
.secondDiv{
    display: flex;
    flex-direction: column;
    label{
        margin: 6px;
        margin-left: 100px;
    }
}
`


const PizzaForm = props => {
    
    const { values, inputChange, checkboxChange, submit, errors } = props
    
    const onInputChange = evt => {
        const {name, value} = evt.target
        inputChange(name,value)
    }

    const onCheckboxChange = evt => {
        const {name, checked} = evt.target
        checkboxChange(name, checked)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <StyledForm onSubmit={onSubmit}>
            <div className='firstDiv'>
                <label>Name:&nbsp;
                    <input 
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                    />
                </label>
                <label>Size:&nbsp;
                    <select 
                        name='size'
                        value={values.size}
                        onChange={onInputChange}
                    >
                        <option value=''>Choose a Size</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>  
                </label>
                <label>Special Instructions:&nbsp;
                    <input 
                        type='text'
                        name='special'
                        value={values.special}
                        onChange={onInputChange}
                    />
                </label>
            </div>
            <div className='secondDiv'>
                <label>Pepperoni:&nbsp;
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        checked={values.toppings.pepperoni === true}
                        onChange={onCheckboxChange}
                    />
                </label>
                <label>Olives:&nbsp;
                    <input 
                        type='checkbox'
                        name='olives'
                        onChange={onCheckboxChange}
                        checked={values.toppings.olives === true}
                    />
                </label>
                <label>Onions:&nbsp;
                    <input 
                        type='checkbox'
                        name='onions'
                        onChange={onCheckboxChange}
                        checked={values.toppings.onions === true}
                    />
                </label>
                <label>Pineapple:&nbsp;
                    <input 
                        type='checkbox'
                        name='pineapple'
                        onChange={onCheckboxChange}
                        checked={values.toppings.pineapple === true}
                    />
                </label>
                <button>Submit</button>
            </div>
            <div>{errors.name}</div>
        </StyledForm>
    )
}

export default PizzaForm;