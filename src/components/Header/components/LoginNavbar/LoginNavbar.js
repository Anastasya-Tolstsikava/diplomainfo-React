import React, {useState} from 'react';
import BNTU from "./BNTU";
import LoginModal from "../LoginModal";

const LoginNavbar = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const toggleLoginModal = () => setShowLoginModal(!showLoginModal);

    return (
        <>
            <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item"><a className="nav-link" role='button' onClick={toggleLoginModal}>Войти</a></li>
                <li className="nav-item me-3 me-lg-0"><BNTU/></li>
            </ul>
            <LoginModal
                showLoginModal={showLoginModal}
                setShowLoginModal={setShowLoginModal}
                toggleLoginModal={toggleLoginModal}
            />
        </>
    );
}

export default LoginNavbar;
