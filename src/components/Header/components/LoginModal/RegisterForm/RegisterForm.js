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
                        password: password
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
                <p>Sign up:</p>
            </div>

            <div className="form-outline mb-4">
                <input type="text" id="registerName" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <label className="form-label" htmlFor="registerName">First Name</label>
            </div>

            <div className="form-outline mb-4">
                <input type="text" id="registerUsername" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <label className="form-label" htmlFor="registerUsername">Last Name</label>
            </div>

            <div className="form-outline mb-4">
                <input type="email" id="registerEmail" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className="form-label" htmlFor="registerEmail">Email</label>
            </div>

            <div className="form-outline mb-4">
                <input type="password" id="registerPassword" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label className="form-label" htmlFor="registerPassword">Password</label>
            </div>

            <div className="form-outline mb-4">
                <input
                    type="password"
                    id="registerRepeatPassword"
                    className="form-control"
                    value={repetedPassword} onChange={(e) => setRepetedPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="registerRepeatPassword">
                    Repeat
                    password
                </label>
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
                    I'm a teacher
                </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-3" onClick={handleClick}>
                Sign in
            </button>
        </form>
    );
}

export default RegisterForm;
