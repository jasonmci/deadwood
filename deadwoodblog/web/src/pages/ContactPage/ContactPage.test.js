import { render, screen, fireEvent,  waitFor } from '@redwoodjs/testing/web';
import { MetaTags } from '@redwoodjs/web';
import { Form, TextField, TextAreaField, Submit } from '@redwoodjs/forms';
import userEvent from '@testing-library/user-event'
import ContactPage from './ContactPage';

describe('ContactPage', () => {
  it('renders the contact page with form elements', () => {
    render(<ContactPage />);
    expect(screen.getByTestId('contact-name')).toBeInTheDocument();
    expect(screen.getByTestId('contact-email')).toBeInTheDocument();
    expect(screen.getByTestId('contact-message')).toBeInTheDocument();
    expect(screen.getByTestId('contact-submit')).toBeInTheDocument();
  });

  it('calls onSubmit handler with form data when Save button is clicked', async () => {
    const onSubmit = jest.fn();
    render(<ContactPage onSubmit={onSubmit} />);
    const nameElement = screen.getByTestId('contact-name');
    const emailElement = screen.getByTestId('contact-email');
    const messageElement = screen.getByTestId('contact-message');
    const submitButton = screen.getByTestId('contact-submit');
    await waitFor(() => userEvent.type(nameElement, 'Test Name'));
    await waitFor(() => userEvent.type(emailElement, 'test@example.com'));
    await waitFor(() => userEvent.type(messageElement, 'Test Message'));
    await waitFor(() => userEvent.click(submitButton));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

});
