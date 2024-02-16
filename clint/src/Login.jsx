
import axios from 'axios';
import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Login() {
    const[email,setEmail]=useState('')
    const[password,setPass]=useState('')
    const nav = useNavigate()
  
    const sumbmitHandle =(e)=>{
      e.preventDefault()
      axios.post('http://localhost:3001/login',{email,password})
      .then(result=>{
        console.log(result)
        if(result.data === "success"){

          nav('/')
        }
      })
      .catch(err=>console.log(err))
    }
  return (
    <Container>
    <h1>Login</h1>
    <Form onSubmit={sumbmitHandle}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
         
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e)=>setPass(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  </Container>
  )
}

export default Login