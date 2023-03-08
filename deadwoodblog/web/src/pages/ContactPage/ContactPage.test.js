import { render, screen, fireEvent,  waitFor } from '@redwoodjs/testing/web';
import { MetaTags } from '@redwoodjs/web';
import { Form, TextField, TextAreaField, Submit, FieldError } from '@redwoodjs/forms';
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

  it('shows an error message for the name field when it is empty', async () => {
    render(<ContactPage />);
    const submitButton = screen.getByTestId('contact-submit');
    await waitFor(() => userEvent.click(submitButton));
    const nameError = screen.getByText('name is required');
    expect(nameError).toBeInTheDocument();
  });

  it('shows an error message for the email field when it is empty', async () => {
    render(<ContactPage />);
    const submitButton = screen.getByTestId('contact-submit');
    await waitFor(() => userEvent.click(submitButton));
    const emailError = screen.getByText('email is required');
    expect(emailError).toBeInTheDocument();
  });

  it('shows an error message for the message field when it is empty', async () => {
    render(<ContactPage />);
    const submitButton = screen.getByTestId('contact-submit');
    await waitFor(() => userEvent.click(submitButton));
    const messageError = screen.getByText('message is required');
    expect(messageError).toBeInTheDocument();
  });
  it('does not show error messages when all fields are filled in', async () => {
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
    const nameError = screen.queryByText('name is required');
    const emailError = screen.queryByText('email is required');
    const messageError = screen.queryByText('message is required');
    expect(nameError).toBeNull();
    expect(emailError).toBeNull();
    expect(messageError).toBeNull();
    expect(onSubmit).toHaveBeenCalled();
  });
});
