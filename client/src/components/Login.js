import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Alert, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { API, setAuthToken } from "../config/api";
import { UserContext } from "../context/userContext";
import palm from './assets/palm 1.png'
import hibiscius from './assets/hibiscus 1.png'

function LoginComp(props) {
  const { showModal, handleCloseModal } =
    props;

  const [ripplePosition, setRipplePosition] = useState({ top: 0, left: 0 });




  let navigate = useNavigate();

  const [_, dispatch] = useContext(UserContext)

  const [message, setMessage] = useState(null)
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (e) => {
    const buttonRect = e.target.getBoundingClientRect();
    const position = {
      top: e.clientY - buttonRect.top,
      left: e.clientX - buttonRect.left,
    };
    setRipplePosition(position);
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()
      handleCloseModal()
      // Masukkan data untuk proses login, Anda juga bisa membuatnya tanpa konfigurasi apapun, karena axios akan secara otomatis menanganinya.
      await new Promise((resolve) => setTimeout(resolve, 500));

      const response = await API.post('/login', form)
      console.log("login suucces :", response);

      dispatch({
        type: 'LOGIN_SUCCESS',
        // role: response.data.data.role,
        payload: response.data.data,
      })

      setAuthToken(localStorage.token)

      if (response.data.data.role === 'admin') {
        navigate('/HomeAdmin')
      } else {
        navigate('/')
      }

      const alert = (
        <Alert variant="success" className="py-1">
          Login Success
        </Alert>
      )
      setMessage(alert)
    } catch (error) {
      const alert = (
        <Alert variant="success" className="py-1">
          Login Failed
        </Alert>
      )
      setMessage(alert)
      console.log("login failed : ", error);
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
        <h3 className="mx-auto my-3 text-center">Login</h3>
      </div>
      <Form className="mt-3" onSubmit={(e) => handleSubmit.mutate(e)}>
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
        <div className="d-flex justify-content-center bg-success">
          <Button
            className="m-2 rounded btn-success"
            variant="primary"
            type="submit"
          >
            Login
          </Button>
        </div>
      </Form>
      <Form.Group className="mb-3 p-2 m-auto" controlId="formBasicCheckbox">
        <Form.Label>Don't have an account? Click here</Form.Label>
      </Form.Group>
    </Modal>
  );
}

export default LoginComp;

// Jangan dihapus
//
