import React, { useState } from 'react';
import PopUpModal from '@/styles/PopUpModal.module.css';

interface MeetingOptionProps {
  formUpdate: (field: string, value: string) => void;
  formDetails: {
    appointmentType?: string;
  };
}

export default function MeetingOption({ formUpdate, formDetails }: MeetingOptionProps): JSX.Element {
  const [selectorBoxPosition, setSelectorBoxPosition] = useState('50%');

  function selector(meetingOption: 'In-Person' | 'Video Call'): void {
    formUpdate('appointmentType', meetingOption);
    if (meetingOption === 'Video Call') {
      setSelectorBoxPosition('0%');
      const videoCall = document.getElementById('videoCall');
      const inPerson = document.getElementById('inPerson');
      if (videoCall) videoCall.style.color = 'white';
      if (inPerson) inPerson.style.color = 'black';
    } else {
      const videoCall = document.getElementById('videoCall');
      const inPerson = document.getElementById('inPerson');
      if (videoCall) videoCall.style.color = 'black';
      if (inPerson) inPerson.style.color = 'white';
      setSelectorBoxPosition('50%');
    }
    console.log(formDetails.appointmentType);
  }

  return (
    <>
      <div className={PopUpModal.meetingOption}>
        <div className={PopUpModal.meetingOptionBox}>
          <div
            className={PopUpModal.selectorBox}
            style={{
              backgroundColor: '#003963',
              color: 'white',
              right: selectorBoxPosition,
            }}
          ></div>
          <div
            style={{ color: 'white' }}
            id='inPerson'
            className={PopUpModal.select}
            onClick={() => selector('In-Person')}
          >
            <h1>In-Person</h1>
          </div>
          <div
            id='videoCall'
            className={PopUpModal.select}
            onClick={() => selector('Video Call')}
          >
            <h1>Video Call</h1>
          </div>
        </div>
      </div>
    </>
  );
}
