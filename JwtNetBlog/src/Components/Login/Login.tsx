import React, { useState } from 'react'

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

export const Login: React.FC<LoginProps> = ({onLogin}) => {
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
        onLogin(username, password);
    }

    return (
        <section className="mt-5 gradient-custom default-bg">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white">
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


