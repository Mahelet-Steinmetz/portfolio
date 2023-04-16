import './App.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import projects from './projects';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [section, setSection] = useState('projects');

  const nav = (
    <Navbar sticky='top' bg='light' expand='lg'>
      <Container>
        <Nav.Link onClick={() => setSection('projects')}>
          Mahelet Steinmetz
        </Nav.Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link onClick={() => setSection('about')}>About</Nav.Link>
            <Nav.Link onClick={() => setSection('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => setSection('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  const projectCards = (
    <>
      <Row xs={1} md={2} className='g-4'>
        {projects.map((el) => (
          <Col>
            <Card className='bg-dark text-white project-card'>
              <Card.Img
                src={el.image}
                alt='Card image'
                className='project-card__image'
              />
              <Card.ImgOverlay className='project-card__overlay'>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>{el.text}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );

  return (
    <div className='App'>
      <>
        {nav}
        <Container>
          {section === 'projects' && (
            <>
              {' '}
              <div className='heading'>
                <h1 className='heading__name'>Mahelet Steinmetz</h1>
                <h3>Graphic Design Major at The University of Connecticut</h3>
              </div>
              <div>{projectCards}</div>
            </>
          )}
        </Container>
      </>
    </div>
  );
}

export default App;
