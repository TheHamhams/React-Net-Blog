import React, { useState } from 'react'

interface RegisterProps {
    onRegister: (username: string, firstName: string, lastName: string, email: string, password: string, passwordConfirm: string) => void;
}

export const Register: React.FC<RegisterProps> = ({onRegister}) => {
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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onRegister(username, firstName, lastName, email, password, passwordConfirm);
    }
    return (
        <section className="mt-5 gradient-custom default-bg">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white">
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                        <p className="text-white-50 mb-5">Please enter the following information to register!</p>
                                        <form onSubmit={handleSubmit}>
                                            <div className='form-group'>
                                                <label htmlFor='username'>Username:</label>
                                                <input className='form-control' type='text' id='username' value={username} onChange={handleUsernameChange} />
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='firstName'>First Name:</label>
                                                <input className='form-control' type='text' id='firstName' value={firstName} onChange={handleFirstNameChange} />
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='lastName'>Last Name:</label>
                                                <input className='form-control' type='text' id='lastName' value={lastName} onChange={handleLastNameChange} />
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='email'>Email:</label>
                                                <input className='form-control' type='email' id='email' value={email} onChange={handleEmailChange} />
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor="password">Password:</label>
                                                <input className='form-control' type='password' id="password" value={password} onChange={handlePasswordChange}/>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor="passwordConfirm">Confirm Password:</label>
                                                <input className='form-control' type='password' id="passwordConfirm" value={passwordConfirm} onChange={handlePasswordConfirmChange}/>
                                            </div>
                                            <button className='btn btn-primary' type="submit">Login</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
