import React from 'react';
import {MDBContainer} from 'mdb-react-ui-kit';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from "./components/Content";
import './App.css';

function App() {
    return (
        <MDBContainer fluid>
            <Header/>
            <Content />
            <Footer />
        </MDBContainer>
    );
}

export default App;
