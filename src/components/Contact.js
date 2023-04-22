import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className='contact'>
      <div>
        <p>maheletsteinmetz028@gmail.com</p>
        <p>203-558-8570</p>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='name' placeholder='' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Message</Form.Label>
          <Form.Control as='textarea' rows={3} />
        </Form.Group>
        <Button
          className='btn btn-primary btn-large centerButton'
          type='submit'
        >
          Send
        </Button>
      </Form>
    </div>
  );
};
