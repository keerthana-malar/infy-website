// Modal.js

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Modal = ({ showModal, closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    DOB: '',
    whatsappNumber: '',
    location: '',
    aboutWork: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
    // Clear form data or close the modal as needed
    setFormData({
      name: '',
      email: '',
      DOB: '',
      whatsappNumber: '',
      location: '',
      aboutWork: '',
    });
    closeModal();
  };

  return (
    <div className={`modals ${showModal ? 'shows' : ''}`}>
      <div className="modal-content">
        <span className="closes" onClick={closeModal}>&times;</span>
        <h2>Partner Application Form</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="DOB">
            <Form.Label>DOB:</Form.Label>
            <Form.Control type="date" name="DOB" value={formData.DOB} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="whatsappNumber">
            <Form.Label>WhatsApp Number:</Form.Label>
            <Form.Control type="text" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="location">
            <Form.Label>Location/City:</Form.Label>
            <Form.Control type="text" name="location" value={formData.location} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="aboutWork">
            <Form.Label>About Work:</Form.Label>
            <Form.Control as="textarea" rows={3} name="aboutWork" value={formData.aboutWork} onChange={handleChange} required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Modal;
