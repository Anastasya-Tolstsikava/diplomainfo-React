import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListGroup() {
    let files = []

    useEffect(() => {
        const fetchData = async () => {
            let config = {
                params: {
                    category: "documents"
                }
            }
            const resp = await axios.get('http://localhost:8080/diplomainfo/files', config)
                .then(function (response) {
                    console.log(response);
                    files = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        fetchData();
    }, []);

    return (
        <div class="list-group">
            {Array.prototype.forEach.call(files, file => {
                console.log(file);
                <a href="" class="list-group-item list-group-item-action" aria-current="true">
                    {entry.path}</a>
            })};
            {/* {files.forEach(function (entry) {
                console.log(entry);
                <a href="" class="list-group-item list-group-item-action" aria-current="true">
                    {entry.path}</a>
            })}; */}
        </div>
    )
}

export default ListGroup;