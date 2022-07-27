import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { onSubmit, useTextInput } from '../hooks/useTextInput'

export const Login = () => {

  const email = useTextInput()
  const password = useTextInput()

  const onSub = {"email": email.value, "password": password.value}
  
  return (
    <Container>

      <h1>Login Page</h1>

      <Form onSubmit={(e)=>onSubmit('login', onSub, e)}>

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
