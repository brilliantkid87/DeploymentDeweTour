import React, { useEffect, useState } from 'react';
import { Button, Container, FormGroup, FormLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../config/api';
import { useMutation } from 'react-query';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AddCountryButton from './country/country';

function AddTrips() {
    let navigate = useNavigate();

    const [countries, setCountries] = useState([]);
    const [preview, setPreview] = useState(null);
    const [form, setForm] = useState({
        title: '',
        accommodation: '',
        transportation: '',
        eat: '',
        day: '',
        night: '',
        date_trip: '',
        price: '',
        quota: '',
        description: '',
        image: '',
        country_id: '',
    });
    console.log(form);



    // Fetching Country data
    const getCountries = async () => {
        try {
            const response = await API.get('/countries');
            setCountries(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    
    // Handle change data on form
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
                e.target.type === 'file' ? e.target.files : e.target.value,
        });

        if (e.target.type === 'file') {
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url);
        }
    };

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            const config = {
                headers: {
                    'Content-type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.token}`
                },
            };

            const formData = new FormData();
            formData.set('title', form.title);
            formData.set('accommodation', form.accommodation);
            formData.set('transportation', form.transportation);
            formData.set('eat', form.eat);
            formData.set('day', form.day);
            formData.set('night', form.night);
            formData.set('date_trip', form.date_trip);
            formData.set('price', form.price);
            formData.set('quota', form.quota);
            formData.set('description', form.description);
            formData.set('image', form.image[0], form.image[0].name);
            formData.set('country_id', form.country_id);
            console.log(formData.getAll('country_id'))

            const response = await API.post('/trip', formData, config);
            console.log('Yoman : add trip success : ', response);

            navigate('/incometrips');
        } catch (error) {
            console.log('Yoman : add trip failed : ', error);
        }
    });

    useEffect(() => {
        getCountries();
    }, []);

    return (
        <>
            <Container>
                {/* <AddCountryButton /> */}
                <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                    <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title Trip</Form.Label>
                        <Form.Control
                            name="title"
                            onChange={handleChange}
                            className="bg-secondary"
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group as={Row} controlId="formCountry" className="mt-3">
                        <Form.Label>Country</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                as="select"
                                name="country_id"
                                // onChange={handleChangeCountryId}
                                onChange={handleChange}
                                className="bg-secondary"
                            >
                                <option value="">Select a country</option>
                                {countries.map((item, index) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Col>
                        <Col className='d-flex justify-content-end'>
                            <AddCountryButton />
                        </Col>
                    </Form.Group>

                    <Form.Group
                        className="mt-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>accommodation</Form.Label>
                        <Form.Control
                            name="accommodation"
                            onChange={handleChange}
                            className="bg-secondary"
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group
                        className="mt-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Transportation</Form.Label>
                        <Form.Control
                            name="transportation"
                            onChange={handleChange}
                            className="bg-secondary"
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group
                        className="mt-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Eat</Form.Label>
                        <Form.Control
                            name="eat"
                            onChange={handleChange}
                            className="bg-secondary"
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group as={Row} className="mt-4" controlId="formPlaintextPassword">
                        <Form.Label column sm="1">
                            Day
                        </Form.Label>

                        <Col sm="2">
                            <Form.Control
                                className="bg-secondary"
                                type="text"
                                onChange={handleChange}
                                name='day'
                            />
                        </Col>
                        <Form.Label column sm="1">
                            Night
                        </Form.Label>
                        <Col sm="2">
                            <Form.Control
                                className="bg-secondary"
                                type="text"
                                name='night'
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group
                        className="mt-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Date Trip</Form.Label>
                        <Form.Control
                            name="date_trip"
                            onChange={handleChange}
                            className="bg-secondary"
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group
                        className="mt-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            name="price"
                            onChange={handleChange}
                            className="bg-secondary"
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group
                        className="mt-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Quota</Form.Label>
                        <Form.Control
                            name="quota"
                            onChange={handleChange}
                            className="bg-secondary"
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group
                        className="mt-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            name="description"
                            onChange={handleChange}
                            className="bg-secondary"
                            as="textarea"
                            rows={3}
                        />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mt-3 ">
                        <Form.Control
                            name="image"
                            className="bg-secondary"
                            type="file"
                            onChange={handleChange}
                        />
                        {preview && (
                            <img
                                src={preview}
                                style={{
                                    maxWidth: '150px',
                                    maxHeight: '150px',
                                    objectFit: 'cover',
                                }}
                                alt={preview}
                            />
                        )}
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mt-3">
                        <Button type="submit" className="mt=3">
                            Add Trip
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}

export default AddTrips;