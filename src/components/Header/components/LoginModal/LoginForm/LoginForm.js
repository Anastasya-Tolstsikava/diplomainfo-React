import axios from 'axios';
import React, { useEffect, useState } from 'react';

const LoginForm = ({ updateData }) => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/diplomainfo/login',
            {
                headers: {
                    'Authorization': localStorage.getItem('token') ? "Bearer " + localStorage.getItem('token') : null
                },
                email: login,
                password: password
            }
        )
            .then(function (response) {
                localStorage.setItem('token', response.data.value);
                axios.get('http://localhost:8080/diplomainfo/login/details',
                    {
                        headers: {
                            'Authorization': localStorage.getItem('token') ? "Bearer " + localStorage.getItem('token') : null
                        }
                    }
                ).then(function (response) {
                    console.log(response.data)
                    updateData(response.data)
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <form>
            <div className="text-center mb-3">
                <p>Вход:</p>
            </div>

            <div className="input-group mb-3">
                <input type="email" id="loginName" name="login" className="form-control" placeholder="Имя пользователя" aria-label="Username" aria-describedby="basic-addon1" value={login} onChange={(e) => setLogin(e.target.value)} />
            </div>


            <div className="input-group mb-3">
            <input type="password" id="loginPassword"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" aria-label="Password" aria-describedby="basic-addon1"/>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handleClick}>
                Войти
            </button>

            {/* <div className="row mb-4">
                <div className="col-md-12 d-flex justify-content-center">
                    <a href="#!">Forgot password?</a>
                </div>
            </div> */}
        </form>
    );
}

export default LoginForm;
