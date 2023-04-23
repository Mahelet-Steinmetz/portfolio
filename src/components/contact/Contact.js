import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { send } from 'emailjs-com';
import './Contact.css';
import { motion as m } from 'framer-motion';

export const Contact = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [messageClassname, setMessageClassname] = useState('contact__message');
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send('service_h2lvml8', 'template_hhx870d', toSend, '5K7zcJ_TTnouorpmu')
      .then((response) => {
        setResponseMessage('Your message has been sent!');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setResponseMessage('There was a problem with your information.');
        setMessageClassname('contact__message-error');
      });
  };

  const handleChange = (e) => {
    setResponseMessage('');
    setMessageClassname('contact__message');
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      exit={{ opacity: 0 }}
      className='contact'
    >
      <Row xs={1} md={2} className='g-4 contact__row'>
        <Col>
          {' '}
          <div className='contact__info'>
            <p>maheletsteinmetz028@gmail.com</p>
            <p>203-558-8570</p>
          </div>
        </Col>
        <Col>
          {' '}
          <div className='contact__form'>
            <Form onSubmit={onSubmit}>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label className='contact__form__label'>Name</Form.Label>
                <Form.Control
                  type='name'
                  required
                  name='from_name'
                  value={toSend.from_name}
                  placeholder=''
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label className='contact__form__label'>Email</Form.Label>
                <Form.Control
                  type='email'
                  name='reply_to'
                  value={toSend.reply_to}
                  placeholder=''
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label className='contact__form__label'>
                  Message
                </Form.Label>
                <Form.Control
                  required
                  as='textarea'
                  name='message'
                  value={toSend.message}
                  rows={3}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                className='btn btn-primary btn-large centerButton contact__form__btn'
                aria-label='Send'
                type='submit'
              >
                Send
              </Button>
            </Form>
            <div className={messageClassname}>{responseMessage}</div>
          </div>
        </Col>
      </Row>
    </m.div>
  );
};
