import React ,{useState, useEffect}from 'react';
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
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";

const FilesModal = ({ showFilesModal, setShowFilesModal, toggleFilesModal, fileCategory,userDetails }) => {
    const [initialView, setInitialView] = useState("dayGridMonth");
    //dayGridMonth

    return (
        <MDBModal show={showFilesModal} getOpenState={(e) => setShowFilesModal(e)} tabIndex="-1">
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Файлы для скачивания</MDBModalTitle>
                        <MDBBtn className="btn-close" onClick={toggleFilesModal} color="none" />
                    </MDBModalHeader>
                    <MDBModalBody>
                        {fileCategory === "calendar" ? <div style={{ minHeight: '400px' }}><FullCalendar
                            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                            initialView={initialView}
                            locale='ru'
                            //dateClick={handleDateClick}
                            events={[
                                { title: 'event 1', date: '2021-05-01' },
                                { title: 'event 2', date: '2021-05-02' }
                            ]} /></div> : <></>}
                            {fileCategory === 'documents' ? <ListGroup fileCategory={fileCategory} /> : <></>}
                        {fileCategory === 'documents' && userDetails?.authorities[0]?.authority == "ROLE_TEACHER"? <UploadButton fileCategory={fileCategory} /> : <></>}
                    </MDBModalBody>
                    <MDBModalFooter />
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
}

export default FilesModal;
