import PopUpModalstyles from '@/styles/PopUpModal.module.css';
import { useState } from 'react';
import Appointment from './Appointment';
import Details from './Details';
import Book from './Book';
import SucessModal from './SucessModal';

export interface FormDetails {
  appointmentType: string;
  meetingDate: string;
  meetingTime: string;
  firstName: string;
  lastName: string;
  sex: string;
}

interface ModalNavProps {
  setShowModal: (value: boolean) => void;
  appointments: FormDetails[];
  setAppointment: (appointments: FormDetails[]) => void;
}

export default function ModalNavigation({ setShowModal, setAppointment, appointments }: ModalNavProps) {
  const [formDetails, setFormDetails] = useState<FormDetails>({
    appointmentType: 'In-person',
    meetingDate: 'Tue April 25, 2023',
    meetingTime: '7:50AM',
    firstName: '',
    lastName: '',
    sex: '',
  });

  function formUpdate(key: keyof FormDetails, newvalue: string) {
    setFormDetails((item) => ({ ...item, [key]: newvalue }));
  }

  const [progressBar, setProgressBar] = useState(33);
  const [nextModal, setNextModal] = useState(0);

  function progress() {
    if (progressBar < 99) {
      setProgressBar(progressBar + 33);
    }
    if (nextModal < 2) {
      setNextModal(nextModal + 1);
    }
  }

  function bookAppointment() {
    setAppointment([...appointments, { ...formDetails }]);
    setNextModal(nextModal + 1);
  }

  const modalContents: { modal: JSX.Element }[] = [
    { modal: <Appointment formDetails={formDetails} formUpdate={formUpdate} /> },
    { modal: <Details formDetails={formDetails} formUpdate={formUpdate} /> },
    { modal: <Book formDetails={formDetails} formUpdate={formUpdate} /> },
    { modal: <SucessModal formDetails={formDetails} setShowModal={setShowModal} /> },
  ];

  const canNext = [formDetails.firstName, formDetails.lastName, formDetails.sex].every(Boolean);

  return (
    <>
      <div className={PopUpModalstyles.modalNav}>
        <div className={PopUpModalstyles.modalCloseBtn} onClick={() => setShowModal(false)}>
          X
        </div>
        {nextModal < 3 && (
          <div className={PopUpModalstyles.modalNavProgressBar}>
            <div
              style={{ width: `${progressBar}%` }}
              className={PopUpModalstyles.modalNavProgressBarBlue}
            ></div>
          </div>
        )}
        {nextModal < 3 && (
          <div className={PopUpModalstyles.modalNavTexts}>
            <h1>Appointment</h1>
            <h1>Details</h1>
            <h1>Book</h1>
          </div>
        )}
        {modalContents[nextModal].modal}
        {nextModal === 0 ? (
          <button className={PopUpModalstyles.button} onClick={progress}>
            Next
          </button>
        ) : nextModal === 1 ? (
          <button className={PopUpModalstyles.button} onClick={progress} disabled={!canNext}>
            Next
          </button>
        ) : nextModal === 2 ? (
          <button className={PopUpModalstyles.button} onClick={bookAppointment}>
            Book
          </button>
        ) : null}
      </div>
    </>
  );
}
