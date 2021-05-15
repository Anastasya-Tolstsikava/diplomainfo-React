import React ,{useState, useEffect}from 'react';
import axios from 'axios';
import {MDBContainer} from 'mdb-react-ui-kit';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from "./components/Content";
import './App.css';

function App() {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(()=>{
        axios.get('http://localhost:8080/diplomainfo/login/details',
        {
            headers: {
                'Authorization': localStorage.getItem('token') ? "Bearer " + localStorage.getItem('token') : null
            }
        }
        ).then(function(response){
            console.log(response.data)
            updateData(response.data)
        })
    },[])

    const updateData = (details) => {
        setUserDetails(details)
    }
    return (
        <MDBContainer fluid>
            <Header updateData={updateData} userDetails={userDetails}/>
            <Content userDetails={userDetails}/>
            <Footer />
        </MDBContainer>
    );
}

export default App;
