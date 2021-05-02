import React from 'react';
import Copyright from "./components/Copyright";
import Socials from "./components/Socials";

const Footer = () => {
    return (
        <footer className="bg-light text-lg-start">
            <div className="text-center py-4 align-items-center">
                <p>Follow BNTU on social media</p>
                <Socials />
            </div>
            <Copyright />
        </footer>
    );
}

export default Footer;
