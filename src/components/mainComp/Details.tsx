import React from "react";
import PopUpModal from "@/styles/PopUpModal.module.css";
import PatientsForm from "./PatientsForm";

interface DetailsProps {
  formDetails: any;
  formUpdate: (formUpdatedDetails: string) => void;
}

export default function Details ({formDetails, formUpdate}: DetailsProps): JSX.Element {
  const updateFn = () => {
    
  }
  return (
    <>
      <div className={PopUpModal.patientFormContainer}>
        <div className={PopUpModal.patientFormTitle}>
          <h1>Patient Form</h1>
          <p>
            Hello!! Your details will be sent to Doctor's office.
          </p>
        </div>
        <PatientsForm formDetails={formDetails} formUpdate={formUpdate} />
      </div>
    </>
  );
}
