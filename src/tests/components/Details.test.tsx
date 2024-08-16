import { render, screen } from '@testing-library/react';
import Details from '../../components/mainComp/Details';

describe('Details component', () => {
  it('renders appointment details', () => {
    const mockFormDetails = {};
    const mockFormUpdate = jest.fn();

    render(<Details formDetails={mockFormDetails} formUpdate={mockFormUpdate} />);

    const appointmentDetailsTitle = screen.getByRole('heading', { name: /Appointment Details/i });
    expect(appointmentDetailsTitle).toBeInTheDocument();

    const doctorImage = screen.getByRole('img', { name: /carefinder Doctor/i });
    expect(doctorImage).toBeInTheDocument();

    const patientFormTitle = screen.getByRole('heading', { name: /Patient Form/i });
    expect(patientFormTitle).toBeInTheDocument();
  });
});
