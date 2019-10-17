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
        // console.log(member)
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({name: '', email: '', role: ''})
    }

    return (
        // <div>Hello</div>
        <form className = 'form'onSubmit = {submitForm}>
            <label htmlFor = 'name'>Name: </label>
            <input
            type = 'text' 
            placeholder = 'Name'
            name = 'name'
            id = 'name'
            onChange = {changeHandler}
            value = {member.name}
            />

            <label htmlFor = 'email'>Email: </label>
            <input 
            type = 'text'
            placeholder = 'Email'
            name = 'email'
            id = 'email'
            onChange = {changeHandler}
            value = {member.email}
            />

            <label htmlFor = 'role'>Desired Role: </label>
            <input
            type = 'text'
            placeholder = 'Role'
            name = 'role'
            id = 'role'
            onChange = {changeHandler}
            value = {member.role}
            />
            <button type = 'submit'>Join Team Avatar</button>
        </form>
    )
};

export default Form;