import React, { useState } from 'react'
import { register_calls } from '../../api';

export interface RegisterProps {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    passwordConfirm: string;
}

export const RegisterForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handlePasswordConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirm(event.target.value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data: RegisterProps = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm
        }


        register_calls.post(data)
        setTimeout( () => {window.location.reload()}, 1000)
    }
    return (

        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='username'>Username:</label>
                <input className='form-control' type='text' id='username' defaultValue={username} onChange={handleUsernameChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='firstName'>First Name:</label>
                <input className='form-control' type='text' id='firstName' defaultValue={firstName} onChange={handleFirstNameChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='lastName'>Last Name:</label>
                <input className='form-control' type='text' id='lastName' defaultValue={lastName} onChange={handleLastNameChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input className='form-control' type='email' id='email' defaultValue={email} onChange={handleEmailChange} />
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password:</label>
                <input className='form-control' type='password' id="password" defaultValue={password} onChange={handlePasswordChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor="passwordConfirm">Confirm Password:</label>
                <input className='form-control' type='password' id="passwordConfirm" defaultValue={passwordConfirm} onChange={handlePasswordConfirmChange}/>
            </div>
            <button className='btn btn-primary' type="submit">Register</button>
        </form>
    )
}
