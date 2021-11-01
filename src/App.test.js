import { render, screen } from '@testing-library/react';
import Home from './components/home/home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Join us/i);
  expect(linkElement).toBeInTheDocument();
});
