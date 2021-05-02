import React from 'react';
import Header from './components/Header/Header';
import { MDBContainer } from 'mdb-react-ui-kit';
import './App.css';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdb-react-ui-kit';


function App() {
  return (
    <MDBContainer fluid>
     <Header/>
     <Footer/> 
    </MDBContainer>
  );
}

export default App;
