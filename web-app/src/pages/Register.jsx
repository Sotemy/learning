import React from 'react'
import axios from "axios"
import { toast } from 'react-toastify';
import { Container, Form, Button } from 'react-bootstrap'

import { useTextInput } from '../hooks/useTextInput'

export const Register = () => {

  const [input, onChange] = useTextInput()

  const sendData = (e) => {

    e.preventDefault()

    const response = axios.post('http://localhost:4000/auth/register', input)

    toast.promise(
      response,
      {
        pending: {
          render() {
            return "I'm loading"
          },
        },
        success: {
          render() {
            return "Redirecting"
          },

        },
        error: {
          render({ data }) {
            // When the promise reject, data will contains the error
            return data.response.data.message
          }
        }
      }
    )

    response.then(
      (result) => {
        return console.log(result.status);
      },
      (error) => {
        return console.log(error);
      }

    );

  }
  
  
  return (
    <Container>

      <h1>Register Page</h1>

      <Form onSubmit={sendData}>

        <Form.Group className="mb-3">

          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" id="email" placeholder="Enter email" value={input.email || ""} onChange={onChange} />

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>

        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" id="username" placeholder="username" value={input.username || ""} onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" id="password" placeholder="Password" value={input.password || ""} onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password again</Form.Label>
          <Form.Control type="password" name="password2" id="password2" placeholder="Password again" value={input.password2 || ""} onChange={onChange} />
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
