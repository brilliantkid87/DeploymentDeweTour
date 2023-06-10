import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { API } from '../../config/api';
import { Modal, Button, Form } from 'react-bootstrap';

function AddCountryButton() {
  const [showModal, setShowModal] = useState(false);
  const [countryName, setCountryName] = useState('');

  const handleAddCountry = useMutation(async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const data = {
        name: countryName,
      };

      const body = JSON.stringify(data);
      const response = await API.post('/country', body, config);
      console.log('add country success : ', response);

      // Setelah menambahkan negara, atur kembali nama negara dan tutup modal
      setCountryName('');
      setShowModal(false);
      window.location.reload()
    } catch (error) {
      console.log('add country failed', error);
    }
  });

  const handleCloseModal = () => {
    // Jika modal ditutup, atur kembali nama negara dan tutup modal
    setCountryName('');
    setShowModal(false);
  };

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Add Country</Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Country</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCountryName">
              <Form.Label>Country Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country name"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCountry.mutate}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddCountryButton;
