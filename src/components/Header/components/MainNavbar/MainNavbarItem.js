import React from 'react';

const MainNavbarItem = ({isActive, href, text}) => {
    return (
        <li className={`nav-item ${ isActive ? 'active' : ''}`}>
            <a className="nav-link" href={href || ''}>{text}</a>
        </li>
    );
}

export default MainNavbarItem;
