import React, { useState } from 'react'
import { auth_calls } from '../../../api';

export interface LoginProps {
    username: string,
    password: string
}

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data: LoginProps = {
            username: username,
            password: password
        }

        auth_calls.post(data)
        // setTimeout( () => window.location.reload(), 1000)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='username'>Username:</label>
                <input className='form-control' type='text' id='username' value={username} onChange={handleUsernameChange} />
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password:</label>
                <input className='form-control' type='password' id="password" value={password} onChange={handlePasswordChange}/>
            </div>
            <button className='btn btn-primary' type="submit">Login</button>
        </form>
    )
}
