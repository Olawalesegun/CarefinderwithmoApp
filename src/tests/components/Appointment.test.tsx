import { render, screen } from '@testing-library/react';
import Appointment from '../../components/mainComp/Appointment';
import '@testing-library/jest-dom';

describe('Appointment component', () => {
  it('renders doctor details', () => {
    render(<Appointment formUpdate={() => {}} formDetails={{}} />);

    const doctorName = screen.getByRole('heading', { level: 1 });
    expect(doctorName).toHaveTextContent('Dr. Setemi Anjola');

    const doctorTitle = screen.getByRole('heading', { level: 2 });
    expect(doctorTitle).toHaveTextContent('Dentist');

    const rating = screen.getByText(/4.5 \(\d+\)/);
    expect(rating).toBeInTheDocument();

    const hospital = screen.getByText(/Elina Hospital/i);
    expect(hospital).toBeInTheDocument();
  });
});
