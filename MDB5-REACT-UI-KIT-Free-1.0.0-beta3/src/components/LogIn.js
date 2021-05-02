import React, { useState, Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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

function LogIn() {
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    
    return (
        <>
            <a class="nav-link" rel="nofollow" role="button" target="_blank" onClick={toggleShow}>Мой аккаунт</a>

            <MDBModal show={basicModal} getOpenState={(e) => setBasicModal(e)} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Мой аккаунт</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>

                            <Tabs>
                                <TabList>
                                    <Tab>
                                        LogIn</Tab>
                                    <Tab>
                                        Register
                                    </Tab>
                                </TabList>

                                <TabPanel>
                                    <form >
                                        <div class="text-center mb-3">
                                            <p>Sign in:</p>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="email" id="loginName" name="login" class="form-control"  />
                                            <label class="form-label" for="loginName">Email or username</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" id="loginPassword" name="password" class="form-control"  />
                                            <label class="form-label" for="loginPassword">Password</label>
                                        </div>

                                        <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

                                        <div class="row mb-4">
                                            <div class="col-md-12 d-flex justify-content-center">
                                                <a href="#!">Forgot password?</a>
                                            </div>
                                        </div>
                                    </form>
                                </TabPanel>
                                <TabPanel>
                                    <form>
                                        <div class="text-center mb-3">
                                            <p>Sign up:</p>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="text" id="registerName" class="form-control" />
                                            <label class="form-label" for="registerName">First Name</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="text" id="registerUsername" class="form-control" />
                                            <label class="form-label" for="registerUsername">Last Name</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="email" id="registerEmail" class="form-control" />
                                            <label class="form-label" for="registerEmail">Email</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" id="registerPassword" class="form-control" />
                                            <label class="form-label" for="registerPassword">Password</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" id="registerRepeatPassword" class="form-control" />
                                            <label class="form-label" for="registerRepeatPassword">Repeat password</label>
                                        </div>
                                        <div class="form-check d-flex justify-content-center mb-4">
                                            <input
                                                class="form-check-input me-2"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                            />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                I'm a teacher
  </label>
                                        </div>

                                        <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
                                    </form>
                                </TabPanel>
                            </Tabs>

                        </MDBModalBody>
                        <MDBModalFooter>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}

export default LogIn;
