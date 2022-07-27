import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { onSubmit, useTextInput } from '../hooks/useTextInput'

export const Register = () => {

  const email = useTextInput()
  const password = useTextInput()
  const password2 = useTextInput()

  const onSub = {"email": email.value, "password": password.value, "password2": password2.value}
  
  return (
    <Container>

      <h1>Register Page</h1>

      <Form onSubmit={(e)=>onSubmit('register', onSub, e)}>

        <Form.Group className="mb-3">

          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" id="email" placeholder="Enter email" {...email} />

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>

        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" id="password" placeholder="Password" {...password} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password again</Form.Label>
          <Form.Control type="password" name="password2" id="password2" placeholder="Password again" {...password2} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="checkbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
    </Container>
  )
}
