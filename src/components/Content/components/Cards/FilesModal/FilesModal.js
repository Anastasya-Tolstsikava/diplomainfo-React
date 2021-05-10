import React from 'react';
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
import UploadButton from './UploadButton/UploadButton';
import ListGroup from './ListGroup/ListGroup';

const FilesModal = ({showFilesModal, setShowFilesModal, toggleFilesModal,fileCategory}) => {
    return (
        <MDBModal show={showFilesModal} getOpenState={(e) => setShowFilesModal(e)} tabIndex="-1">
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Файлы для скачивания</MDBModalTitle>
                        <MDBBtn className="btn-close" onClick={toggleFilesModal} color="none"/>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <ListGroup/>
                       <UploadButton fileCategory={fileCategory}/>
                    </MDBModalBody>
                    <MDBModalFooter/>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
}

export default FilesModal;
