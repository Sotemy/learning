import React from 'react'
import axios from "axios"
import { Container, Form, Button } from 'react-bootstrap'
import { toast } from 'react-toastify';

import { useTextInput } from '../hooks/useTextInput'

export const Login = () => {

  const [input, onChange] = useTextInput()

  const sendData = (e) => {

    e.preventDefault()

    const response = axios.post('http://localhost:4000/auth/login', input)
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
            if (data.response.data) {
              return data.response.data.message
            }
            return 'Error. Please try later'
          }
        }
      }
    )

    response.then(
      (result) => {
        return console.log(result.status);
      },
      (error) => {
        return console.log(error.message);
      }

    );

  }

  return (
    <Container>


      <h1>Login Page</h1>


      <Form onSubmit={sendData}>

        <Form.Group className="mb-3">

          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" id="email" placeholder="Enter email" value={input.email || ""} onChange={onChange} />

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>

        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" id="password" placeholder="Password" value={input.password || ""} onChange={onChange} />
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
