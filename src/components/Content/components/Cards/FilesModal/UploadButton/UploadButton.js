import React, { useState } from 'react';
import axios from 'axios';

const UploadButton = ({fileCategory}) => {

    const handleChange = (e) => {
        e.preventDefault();

        let formData = new FormData();
        let uplfile = document.querySelector('#file');
        formData.append("file", uplfile.files[0]);
        formData.append("category", fileCategory);
        console.log(formData)
        axios.post('http://localhost:8080/diplomainfo/files', formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': localStorage.getItem('token') ? "Bearer " + localStorage.getItem('token') : null
                }
            }
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <form encType="multipart/form-data">
            <input type="file" name="file" id="file" onChange={(e) => handleChange(e)} />
        </form>
    );
}

export default UploadButton;