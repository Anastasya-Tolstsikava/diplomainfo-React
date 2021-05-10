import axios from 'axios';
import React, { useEffect, useState } from 'react';

const LoginForm = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        // console.log('Была нажата ссылка.');
        // const data = axios.post('localhost:8080/diplomainfo/login', {
        //     headers: { 'Content-Type': 'application/json' },
        //     data: { login, password }
        // });
        // setToken(data);
        axios.post('http://localhost:8080/diplomainfo/login', 
            {
                email: login,
                password: password
            }
        )
            .then(function (response) {
                console.log(token);
                setToken(response.data.value)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <form>
            <div className="text-center mb-3">
                <p>Sign in:</p>
            </div>

            <div className="form-outline mb-4">
                <input type="email" id="loginName" name="login" className="form-control" value={login} onChange={(e) => setLogin(e.target.value)} />
                <label className="form-label" htmlFor="loginName">Email or username</label>
            </div>

            <div className="form-outline mb-4">
                <input
                    type="password"
                    id="loginPassword"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="loginPassword">Password</label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handleClick}>
                Sign in
            </button>

            <div className="row mb-4">
                <div className="col-md-12 d-flex justify-content-center">
                    <a href="#!">Forgot password?</a>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;
