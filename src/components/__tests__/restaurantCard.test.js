import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from '../../components/mocks/rescardmock.json';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

it("should render restaurant card component with props", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
    expect(name).toBeInTheDocument();
});