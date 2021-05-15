import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RegisterForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repetedPassword, setRepetedPassword] = useState("");
    const [isTeacher, setIsTeacher] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if (password === repetedPassword) {
            if (isTeacher === true) {
                axios.post('http://localhost:8080/diplomainfo/teachers',
                    {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password,
                        headers: {
                            'Authorization': localStorage.getItem('token') ? "Bearer " + localStorage.getItem('token') : null
                        }

                    }
                )
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                axios.post('http://localhost:8080/diplomainfo/students',
                    {
                        headers: {
                            'Authorization': localStorage.getItem('token') ? "Bearer " + localStorage.getItem('token') : null
                        },
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password
                    }
                )
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }

    return (
        <form>
            <div className="text-center mb-3">
                <p>Регистрация:</p>
            </div>

            <div className="input-group mb-3">
                <input type="text" id="registerName" name="firstName" className="form-control" placeholder="Имя" aria-label="Username" aria-describedby="basic-addon1" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div className="input-group mb-3">
                <input type="text" id="registerUsername" name="lastName" className="form-control" placeholder="Фамилиия" aria-label="Username" aria-describedby="basic-addon1" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div className="input-group mb-3">
                <input type="email" id="registerEmail" name="email" className="form-control" placeholder="Адрес электронной почты" aria-label="Username" aria-describedby="basic-addon1"  value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="input-group mb-3">
                <input type="password" id="registerPassword" name="password" className="form-control" placeholder="Пароль" aria-label="Username" aria-describedby="basic-addon1" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="input-group mb-3">
                <input type="password" id="registerRepeatPassword" name="repetedPassword" className="form-control" placeholder="Повторите пароль" aria-label="Username" aria-describedby="basic-addon1" value={repetedPassword} onChange={(e) => setRepetedPassword(e.target.value)}/>
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
                <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value={isTeacher}
                    onChange={(e) => setIsTeacher(e.target.checked)}
                    id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Я преподаватель
                </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-3" onClick={handleClick}>
                Создать аккаунт
            </button>
        </form>
    );
}

export default RegisterForm;
