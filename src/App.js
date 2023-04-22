import './App.css';
import React, { useState } from 'react';
import { Container, Nav, Navbar, Card, Row, Col } from 'react-bootstrap';
import projects from './projects';
import { Projects, AboutMe, Contact } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion as m } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [section, setSection] = useState('projects');

  const nav = (
    <Navbar className='nav-bar' sticky='top' expand='lg'>
      <Container className='nav-bar__container'>
        <Nav.Link
          className='nav-bar__name'
          onClick={() => setSection('projects')}
        >
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
                <Card.Title className='project-card__overlay__title'>
                  {el.title}
                </Card.Title>
                <Card.Text className='project-card__overlay__text'>
                  {el.text}
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );

  return (
    <div className='App'>
      {nav}
      <Container>
        {section === 'about' ? (
          <AboutMe />
        ) : section === 'contact' ? (
          <Contact />
        ) : section === 'projects' ? (
          <AnimatePresence mode={'wait'}>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              exit={{ opacity: 0 }}
            >
              <div className='heading'>
                <h1 className='heading__name'>Mahelet Steinmetz</h1>
                <h3>Graphic Design Major at The University of Connecticut</h3>
              </div>
              <div className='project-cards'>{projectCards}</div>
            </m.div>
          </AnimatePresence>
        ) : (
          <Projects project={section} />
        )}
      </Container>
    </div>
  );
}

export default App;
