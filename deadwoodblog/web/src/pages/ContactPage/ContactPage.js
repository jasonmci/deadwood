import { MetaTags } from '@redwoodjs/web'
import { 
  FieldError, 
  Form, 
  Label,
  TextField, 
  TextAreaField, 
  Submit 
} from '@redwoodjs/forms'

const ContactPage = ( { onSubmit }) => {
  // const onSubmit = (data) => {
  //   console.log(data)
  // }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur'}}>
        <label name="name" errorclassname="error">
          Name
        </label>
        <TextField 
          name="name" 
          data-testid="contact-name" 
          validation={{ required: true }} 
          errorClassName="error"/>
        <FieldError name="name" className="error" />

        <label name="email" errorclassname="error">
          Email
        </label>
        <TextField 
          name="email" 
          data-testid="contact-email" 
          validation={{ 
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }} 
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        <label name="message" errorclassname="error">
          Message
        </label>
        <TextAreaField 
          name="message" 
          data-testid="contact-message" 
          validation={{ required: true }}
          errorClassName="error" 
        />
        <FieldError name="message" className="error" />

        <Submit data-testid="contact-submit">Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage