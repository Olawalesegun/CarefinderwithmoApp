import { render, screen } from '@testing-library/react';
import Book from '../../components/mainComp/Book';
describe('Book component', () => {
  it('renders appointment details', () => {
    render(<Book />);

    const appointmentDetailsTitle = screen.getByRole('heading', { name: /Appointment Details/i });
    expect(appointmentDetailsTitle).toBeInTheDocument();
  });

  it('renders doctor details', () => {
    render(<Book />);

    const doctorName = screen.getByText(/Dr\. Setemi Ighodalo/i);
    expect(doctorName).toBeInTheDocument();

    const doctorTitle = screen.getByText(/Dentist/i);
    expect(doctorTitle).toBeInTheDocument();

    const hospital = screen.getByText(/Elina Hospital/i);
    expect(hospital).toBeInTheDocument();
  });

  it('renders appointment time details', () => {
    render(<Book />);

    const appointmentDate = screen.getByText(/Today, 12 Mar 2023/i);
    expect(appointmentDate).toBeInTheDocument();

    const appointmentTime = screen.getByText(/7:15 AM/i);
    expect(appointmentTime).toBeInTheDocument();

    const appointmentType = screen.getByText(/In Person/i);
    expect(appointmentType).toBeInTheDocument();
  });

  it('renders patient details form', () => {
    render(<Book />);

    const patientDetailsTitle = screen.getByRole('heading', { name: /Patient Details/i });
    expect(patientDetailsTitle).toBeInTheDocument();

    const emailLabel = screen.getByLabelText(/Email/i);
    expect(emailLabel).toBeInTheDocument();

    const phoneLabel = screen.getByLabelText(/Phone/i);
    expect(phoneLabel).toBeInTheDocument();
  });
});