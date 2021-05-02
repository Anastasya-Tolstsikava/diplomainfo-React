import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import 'react-tabs/style/react-tabs.css';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginModal = ({showLoginModal, setShowLoginModal, toggleLoginModal}) => {
    return (
        <MDBModal show={showLoginModal} getOpenState={(e) => setShowLoginModal(e)} tabIndex="-1">
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Мой аккаунт</MDBModalTitle>
                        <MDBBtn className="btn-close" onClick={toggleLoginModal} color="none"/>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <Tabs>
                            <TabList>
                                <Tab>Login</Tab>
                                <Tab>Register</Tab>
                            </TabList>
                            <TabPanel><LoginForm /></TabPanel>
                            <TabPanel><RegisterForm /></TabPanel>
                        </Tabs>
                    </MDBModalBody>
                    <MDBModalFooter/>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
}

export default LoginModal;
