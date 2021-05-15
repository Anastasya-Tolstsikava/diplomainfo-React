import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListGroup({ fileCategory }) {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let config = {
                params: {
                    category: fileCategory
                },
                headers: {
                    'Authorization': localStorage.getItem('token') ? "Bearer " + localStorage.getItem('token') : null
                }
            }

            await axios.get('http://localhost:8080/diplomainfo/files', config)
                .then(function (response) {
                    setFiles(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        fetchData();
    }, []);

    function downloadFile(e, path) {
        e.preventDefault;

        const link = document.createElement('a');
        link.href = "http://localhost:8080/diplomainfo/files/file?fileName=" + path;
        link.setAttribute(
            'download', "path.txt"
        )
        // Append to html link element page
        document.body.appendChild(link);
        // Start download
        link.click();
        // Clean up and remove the link
        link.parentNode.removeChild(link);
    }

    return (
        <div>
            <div className="list-group">
                {files.map(file => (
                    <>
                        <a href="" className="list-group-item list-group-item-action" aria-current="true">
                            {file.path}</a>
                        <button type="button" className="btn btn-primary btn-floating" onClick={(e) => downloadFile(e, file.path)}>
                            <i className="fas fa-download"></i>
                        </button>
                    </>
                ))}
            </div>

        </div>

    )
}



export default ListGroup;