import React from 'react';
import MainNavbarItem from "./MainNavbarItem";

const MainNavbar = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <MainNavbarItem
                isActive
                text='Home'
            />
            {/* <MainNavbarItem
                text='Learn Bootstrap 5'
                href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
            />
            <MainNavbarItem
                text='Download MDB UI KIT'
                href="https://mdbootstrap.com/docs/standard/"
            /> */}
        </ul>
    );
}

export default MainNavbar;
