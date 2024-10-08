import PopUpModal from "@/styles/PopUpModal.module.css";

interface FormDetails {
  firstName: string;
  lastName: string;
  sex: string;
}

interface PatientsFormProps {
  formDetails: FormDetails;
  formUpdate: (field: keyof FormDetails, value: string) => void;
}

export default function PatientsForm({ formDetails, formUpdate }: PatientsFormProps) {
  return (
    <form className={PopUpModal.form}>
      <label className={PopUpModal.nameLabel}>Name</label>
      <div className={PopUpModal.patientName}>
        <input
          type="text"
          placeholder="First Name"
          value={formDetails.firstName}
          onChange={(e) => formUpdate('firstName', e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formDetails.lastName}
          onChange={(e) => formUpdate('lastName', e.target.value)}
        />
      </div>
      <div className={PopUpModal.nameLabel}>
        <label>Date Of Birth</label>
      </div>
      <div className={PopUpModal.patientDOF}>
        <input type="number" placeholder="Day" />
        <input type="number" placeholder="Month" />
        <input type="number" placeholder="Year" />
      </div>
      <div className={PopUpModal.nameLabel}>
        <label>Sex</label>
      </div>
      <div className={PopUpModal.patientSex}>
        <select
          value={formDetails.sex}
          name="sex"
          onChange={(e) => formUpdate('sex', e.target.value)}
        >
          <option value="" disabled defaultValue={"Select your option"}>
            select
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className={PopUpModal.nameLabel}>
        <label>Vitals</label>
      </div>
      <div className={PopUpModal.patientDOF}>
        <select name="bloodGroup">
          <option value="" disabled defaultValue={"Select your option"}>
            Blood Group
          </option>
          <option value="A+">A+</option>
          <option value="B">B</option>
        </select>
        <input type="text" placeholder="Height" />
        <input type="text" placeholder="Weight" />
      </div>
      <div className={PopUpModal.additionalInfo}>
        <input type="text" placeholder="Additional Information e.g Allergies" />
      </div>
    </form>
  );
}
