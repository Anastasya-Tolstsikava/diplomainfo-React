import React, { useState, useEffect } from 'react';
import FilesModal from '../FilesModal'

const Card = ({ title, text, imgSrc, userDetails }) => {

    const [showFilesModal, setShowFilesModal] = useState(false);
    const toggleFilesModal = () => setShowFilesModal(!showFilesModal);

    const translateCategory = (e) => {
        if (e === "Документы") {
            return("documents")
        } else if (e === "Графики") {
            return("calendar")
        } else {
            return("deadlines")
        }
    };

    const [category, setCategory] = useState(translateCategory(title));    

    return (
        <div>
            <div className="card" style={{ height: '100%' }}>
                <div className="bg-image hover-overlay ripple">
                    <img src={imgSrc} className="img-fluid" />
                    <a href="#!">
                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                    </a>
                </div>
                <div className="card-body" style={{ color: 'black' }}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href="#!" className="btn btn-primary" onClick={toggleFilesModal}>Открыть</a>
                </div>
            </div>
            <FilesModal
                showFilesModal={showFilesModal}
                setShowFilesModal={setShowFilesModal}
                toggleFilesModal={toggleFilesModal}
                fileCategory={category}
                userDetails={userDetails}
            />
        </div>
    );
}

export default Card;
