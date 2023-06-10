import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Alert, FormGroup } from "react-bootstrap";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";
import palm from './assets/palm 1.png'
import hibiscius from './assets/hibiscus 1.png'

function RegisterComp(props) {
  const { showModal, handleCloseModal } = props;

  const [message, setMessage] = useState(null)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  })


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  console.log(form.email);

  // let {data: product} = useQuery('registerCache', async () => {
  //   const response = await API.post('/register')
  //   return response.data.data
  // })
  // console.log(product);


  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()
      handleCloseModal()

      const response = await API.post('/register', form)
      console.log("register success : ", response)

      const alert = (
        <Alert variant="success" className="py-1">
          Register Success
        </Alert>
      )
      setMessage(alert)
      setForm({
        fullName: '',
        email: '',
        password: '',
        phone: '',
        address: '',
      })
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed to register
        </Alert>
      )

      setMessage(alert)
      console.log("register failed :", error);
    }
  })

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <div className="position-relative">
        <img
          className="position-absolute top-0 start-0"
          src={palm}
          alt="Left Flower"
        />
        <img
          className="position-absolute top-0 end-0"
          src={hibiscius}
          alt="Right Flower"
        />
        <h3 className="mx-auto my-3 text-center">Register</h3>
      </div>
      <Form className="mt-5" onSubmit={(e) => handleSubmit.mutate(e)}>
        <FormGroup controlId="" className="p-2">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            // value={fullName}
            name="Name"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup controlId="formBasicEmail" className="p-2">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            // value={email}
            name="email"
            onChange={handleChange}
          />
        </FormGroup>

        <Form.Group className="mb-3 p-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            // value={password}
            name="password"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 p-2" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="phone"
            // value={password}
            name="phone"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 p-2" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="address"
            // value={password}
            name="address"
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-center">

          <Button className="m-2 rounded" variant="primary" type="submit">
            Register
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

export default RegisterComp;
