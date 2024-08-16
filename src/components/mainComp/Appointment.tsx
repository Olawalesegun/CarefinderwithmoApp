import PopUpModal from '@/styles/PopUpModal.module.css';
import { AiFillStar } from 'react-icons/ai';
import { RiHospitalLine } from 'react-icons/ri';
import MeetingOption from './MeetingOption';
import MeetingDate from './MeetingDate';
import MeetingTime from './MeetingTime';
import Image from 'next/image';
import { FormDetails } from './ModalNavigation';

interface AppointmentProps {
  formUpdate: (key: keyof FormDetails, newValue: string) => void;
  formDetails: Record<any, any>;
}

export default function Appointment({ formUpdate, formDetails }: AppointmentProps): JSX.Element {
  return (
    <>
      <div className={PopUpModal.appointmentContainer}>
        <div className={PopUpModal.doctorImg}>
          <Image
            src='/Doctor1.webp'
            width={100}
            height={100}
            alt='carefinder Doctor'
          />
        </div>
        <div className={PopUpModal.doctordetails}>
          <h1>Dr. Setemi Anjola</h1>
          <h2>Dentist</h2>
          <p>
            <AiFillStar style={{ color: '#FFD75F' }} /> 4.5 (54)
          </p>
          <p>
            <RiHospitalLine /> Elina Hospital
          </p>
        </div>
      </div>
    </>
  );
}
