import React, { useState }  from 'react';
import Logo from "./components/Logo";
import MainNavbar from "./components/MainNavbar";
import LoginNavbar from "./components/LoginNavbar";

function Header({updateData, userDetails}) {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{zIndex: 2000}}>
                <div className="container-fluid">
                    <Logo />
                    <div className="collapse navbar-collapse" id="navbarExample01">
                        <MainNavbar />
                        <LoginNavbar updateData={updateData} userDetails={userDetails} />
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Header;
