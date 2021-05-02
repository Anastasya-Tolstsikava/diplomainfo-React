import React from 'react';

const LoginForm = () => {
    return (
        <form>
            <div className="text-center mb-3">
                <p>Sign in:</p>
            </div>

            <div className="form-outline mb-4">
                <input type="email" id="loginName" name="login" className="form-control"/>
                <label className="form-label" htmlFor="loginName">Email or username</label>
            </div>

            <div className="form-outline mb-4">
                <input
                    type="password"
                    id="loginPassword"
                    name="password"
                    className="form-control"
                />
                <label className="form-label" htmlFor="loginPassword">Password</label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
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
