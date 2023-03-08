import { render, screen } from '@redwoodjs/testing';
import { routes } from '@redwoodjs/router';
import BlogLayout from './BlogLayout';

describe('BlogLayout', () => {
  it('renders the header and main content', () => {
    render(<BlogLayout>Test Content</BlogLayout>);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Redwood Blog');
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('main')).toHaveTextContent('Test Content');
  });

  it('renders the navigation links for Home with the correct route', () => {
    render(<BlogLayout />);
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
  });

  it('renders the navigation links for About with the correct route', () => {
    render(<BlogLayout />);
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
  });

  it('renders the navigation links for Contact with the correct route', () => {
    render(<BlogLayout />);
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
  });
});
