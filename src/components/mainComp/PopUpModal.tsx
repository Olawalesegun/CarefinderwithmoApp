import PopUpModalstyles from '@/styles/PopUpModal.module.css';
import ModalNavigation from './ModalNavigation';
import { motion } from 'framer-motion';

interface PopUpModalProps {
  setAppointment: () => void;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export default function PopUpModal({ setAppointment, showModal, setShowModal }: PopUpModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={PopUpModalstyles.modalContainer}
    >
      <div className={PopUpModalstyles.modalBox}>
        <ModalNavigation
          setAppointment={setAppointment}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </motion.div>
  );
}
