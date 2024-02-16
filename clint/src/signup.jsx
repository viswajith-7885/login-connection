import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const[name,setName]=useState('')
    const[email,setemail]=useState('')
    const[password,setPassword]=useState('')
    const nav=useNavigate()

    const sumbmitHandle =(e)=>{
      e.preventDefault()
      axios.post('http://localhost:3001/register',{name,email,password})
      .then(result=>{console.log(result)
      nav('/login')
      })
      .catch(err=>console.log(err))
    }

  return (
   
    <Container>
    <h1>Sign Up</h1>
    <Form onSubmit={sumbmitHandle}>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          name="username"
          onChange={(e)=>setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={(e)=>setemail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={(e)=>setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  </Container>
   
  )
}

export default Signup