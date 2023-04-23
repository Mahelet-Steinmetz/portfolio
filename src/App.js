import './App.css';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import resume from './pdfs/resume.pdf';
import { Projects, AboutMe, Contact, Home } from './components';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [section, setSection] = useState('/');
  const location = useLocation();
  const navigate = useNavigate();

  const nav = (
    <Navbar className='nav-bar' sticky='top' expand='lg'>
      <Container className='nav-bar__container'>
        <LinkContainer to='/'>
          <Nav.Link className='nav-bar__name' onClick={() => setSection('/')}>
            Mahelet Steinmetz
          </Nav.Link>
        </LinkContainer>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <LinkContainer to='/about'>
              <Nav.Link onClick={() => setSection('about')}>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/projects'>
              <Nav.Link onClick={() => setSection('projects')}>
                Projects
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <Nav.Link onClick={() => setSection('contact')}>Contact</Nav.Link>
            </LinkContainer>
            <Nav.Link href={resume} target='_blank' rel='noopener noreferrer'>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  const handleProject = (e) => {
    setSection(e);
    navigate('/project');
  };

  return (
    <div className='App'>
      {nav}
      <Container>
        <Routes>
          <Route path='/about' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
          <Route
            path='/projects'
            element={<Home setSection={(e) => handleProject(e)} />}
          />
          <Route
            path='/'
            element={<Home setSection={(e) => handleProject(e)} />}
          />
          <Route path='/project' element={<Projects project={section} />} />
        </Routes>
        {/* {section === 'about' ? (
            <AboutMe />
          ) : section === 'contact' ? (
            <Contact />
          ) : section === 'projects' ? (
            <AnimatePresence mode={'wait'}>
              <Home setSection={(e) => setSection(e)} />
            </AnimatePresence>
          ) : (
            <Projects project={section} />
          )} */}
      </Container>
    </div>
  );
}

export default App;
