import { render, screen } from '@testing-library/react';
import MeetingCarousel from '../../components/mainComp/MeetingCarousel'; 

describe('MeetingCarousel component', () => {
  const mockFormUpdate = jest.fn();

  it('renders date carousel with navigation elements', () => {
    render(<MeetingCarousel formUpdate={mockFormUpdate} />);

    const swiperContainer = screen.getByTestId('swiper-container'); 
    expect(swiperContainer).toBeInTheDocument();

    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeInTheDocument();

    const prevButton = screen.getByRole('button', { name: /prev/i });
    expect(prevButton).toBeInTheDocument();
  });

  it('renders 7 date slides', () => {
    render(<MeetingCarousel formUpdate={mockFormUpdate} />);

    const dateSlides = screen.getAllByRole('heading', { level: 1 });
    expect(dateSlides).toHaveLength(7);
  });

  it('triggers formUpdate on date click', () => {
    render(<MeetingCarousel formUpdate={mockFormUpdate} />);

    const firstDate = screen.getByText(/Mon/i);
    firstDate.click();

    expect(mockFormUpdate).toHaveBeenCalledWith('meetingDate', expect.any(String));
  });
});