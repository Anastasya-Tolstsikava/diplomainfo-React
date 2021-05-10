import React, {useState} from 'react';
import FilesModal from '../FilesModal'

const Card = ({title, text, imgSrc}) => {

    const [showFilesModal, setShowFilesModal] = useState(false);
    const toggleFilesModal = () => setShowFilesModal(!showFilesModal);

    return (
        <div className="card" style={{height: '100%'}}>
            <div className="bg-image hover-overlay ripple">
                <img src={imgSrc} className="img-fluid"/>
                <a href="#!">
                    <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}/>
                </a>
            </div>
            <div className="card-body" style={{color: 'black'}}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#!" className="btn btn-primary" onClick = {toggleFilesModal}>Открыть</a>
            </div>
        </div>
        <FilesModal
                showFilesModal={showFilesModal}
                setShowFilesModal={setShowFilesModal}
                toggleFilesModal={toggleFilesModal}
                fileCategory={title}
            />
        </div>
    );
}

export default Card;
