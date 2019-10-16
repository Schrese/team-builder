import React, {useState} from 'react';
import data from '../data';

const Form = (props) => {
    
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const changeHandler = (e) => {
        setMember({...member, [e.target.name] : e.target.value})
        console.log(e.target.name);
    }

    return (
        // <div>Hello</div>
        <form>
            <label htmlFor = 'name'>Name: </label>
            <input
            type = 'text' 
            placeholder = 'Name'
            name = 'name'
            id = 'name'
            onChange = {changeHandler}
            />

            <label htmlFor = 'email'>Email: </label>
            <input 
            type = 'text'
            placeholder = 'Email'
            name = 'email'
            id = 'email'
            onChange = {changeHandler}
            />

            <label htmlFor = 'role'>Desired Role: </label>
            <input
            type = 'text'
            placeholder = 'Role'
            name = 'role'
            id = 'role'
            onChange = {changeHandler}
            />
        </form>
    )
    


}

export default Form;