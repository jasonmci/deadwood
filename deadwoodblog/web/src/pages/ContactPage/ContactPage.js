import { MetaTags } from '@redwoodjs/web'
import { Form, TextField, TextAreaField, Submit } from '@redwoodjs/forms'

const ContactPage = ( { onSubmit }) => {
  // const onSubmit = (data) => {
  //   console.log(data)
  // }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <TextField name="name" data-testid="contact-name" validation={{ required: true }} />
        <label htmlFor="email">Email</label>
        <TextField name="email" data-testid="contact-email" validation={{ required: true }} />
        <label htmlFor="message">Message</label>
        <TextAreaField name="message" data-testid="contact-message" validation={{ required: true }} />
        <Submit data-testid="contact-submit">Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage