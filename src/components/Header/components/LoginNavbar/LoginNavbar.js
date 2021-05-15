import React, { useEffect, useState } from 'react';
import BNTU from "./BNTU";
import LoginModal from "../LoginModal";

const LoginNavbar = ({updateData, userDetails}) => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const toggleLoginModal = () => setShowLoginModal(!showLoginModal);

    const logOut = () =>{
        updateData(null)
        localStorage.removeItem('token')
    }

    return (
        <>
            {userDetails == null ?
                <>
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item"><a className="nav-link" role='button' onClick={toggleLoginModal}>Войти</a></li>
                        <li className="nav-item me-3 me-lg-0"><BNTU /></li>
                    </ul>
                    <LoginModal
                        showLoginModal={showLoginModal}
                        setShowLoginModal={setShowLoginModal}
                        toggleLoginModal={toggleLoginModal}
                        updateData={updateData}
                    /> </>
                :
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item"><a className="nav-link" role='button' onClick={logOut}>Выйти</a></li>
                    <li className="nav-item me-3 me-lg-0"><BNTU /></li>
                </ul>
            }
        </>
    );
}

export default LoginNavbar;
