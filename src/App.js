import './App.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import projects from './projects';
import Image from 'react-bootstrap/Image';
import p1p1 from './images/project1_process1.png';
import p1p2 from './images/project1_process2.png';
import p1p3 from './images/project1_process3.png';
import p1p4 from './images/project1_process4.png';
import pdf1 from './pdfs/p1b1.pdf';

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
          <Col key={el.id}>
            <Card
              className='bg-dark text-white project-card'
              onClick={() => setSection(el.id)}
            >
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

  const project1 = (
    <div className='project_1'>
      <h1>Create an Event</h1>
      <Row xs={2} md={4} className='g-4'>
        <Col>
          <Image thumbnail src={p1p1}></Image>
        </Col>
        <Col>
          <Image thumbnail src={p1p2}></Image>
        </Col>
        <Col>
          <Image thumbnail src={p1p3}></Image>
        </Col>
        <Col>
          <Image thumbnail src={p1p4}></Image>
        </Col>
      </Row>
      <div>
        For this brief, we had to design and hold our events. This event can be
        anything you want it to be but it has to be a 'specific, unique, and
        disputable purpose' (Priya Parker, The Art of Gathering). We had to then
        create a visual system for our event which could be a color palette, a
        specific typography on theme with your event, and other components like
        an invitation, decorations for the event, etc
      </div>
      <a href={pdf1} target='_blank'>
        View the full process.
      </a>
    </div>
  );

  return (
    <div className='App'>
      <>
        {nav}
        <Container>
          {section === 'projects' ? (
            <>
              {' '}
              <div className='heading'>
                <h1 className='heading__name'>Mahelet Steinmetz</h1>
                <h3>Graphic Design Major at The University of Connecticut</h3>
              </div>
              <div>{projectCards}</div>
            </>
          ) : (
            section === '1' && <>{project1}</>
          )}
        </Container>
      </>
    </div>
  );
}

export default App;
