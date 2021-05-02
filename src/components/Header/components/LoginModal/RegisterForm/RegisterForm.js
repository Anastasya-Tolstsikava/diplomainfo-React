import React from 'react';

const RegisterForm = () => {
    return (
        <form>
            <div className="text-center mb-3">
                <p>Sign up:</p>
            </div>

            <div className="form-outline mb-4">
                <input type="text" id="registerName" className="form-control"/>
                <label className="form-label" htmlFor="registerName">First Name</label>
            </div>

            <div className="form-outline mb-4">
                <input type="text" id="registerUsername" className="form-control"/>
                <label className="form-label" htmlFor="registerUsername">Last Name</label>
            </div>

            <div className="form-outline mb-4">
                <input type="email" id="registerEmail" className="form-control"/>
                <label className="form-label" htmlFor="registerEmail">Email</label>
            </div>

            <div className="form-outline mb-4">
                <input type="password" id="registerPassword" className="form-control"/>
                <label className="form-label" htmlFor="registerPassword">Password</label>
            </div>

            <div className="form-outline mb-4">
                <input
                    type="password"
                    id="registerRepeatPassword"
                    className="form-control"
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
                    value=""
                    id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    I'm a teacher
                </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-3">
                Sign in
            </button>
        </form>
    );
}

export default RegisterForm;
