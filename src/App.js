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
import p2p1 from './images/p2p1.png';
import p2p2 from './images/p2p2.png';
import p2p3 from './images/p2p3.png';
import p2p4 from './images/p2p4.png';
import p2p5 from './images/p2p5.png';
import typeFace from './images/typeface.png';
import typeFace2 from './images/typeface2.png';
import fashion2 from './images/fashion2.png';
import poster from './images/poster.png';
import poster2 from './images/poster2.png';
import spotify from './images/spotify.png';
import spotify2 from './images/spotify2.png';
import spotify3 from './images/spotify3.png';
import pdf1 from './pdfs/p1b1.pdf';
import anthology from './pdfs/anthology.pdf';
import presentation from './pdfs/presentation.pdf';

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
    <div className='project'>
      <h1>Create an Event</h1>
      <Row xs={2} md={4} className='g-4'>
        <Col>
          <Image className='project_thumbnail' thumbnail src={p1p1}></Image>
        </Col>
        <Col>
          <Image className='project_thumbnail' thumbnail src={p1p2}></Image>
        </Col>
        <Col>
          <Image className='project_thumbnail' thumbnail src={p1p3}></Image>
        </Col>
        <Col>
          <Image className='project_thumbnail' thumbnail src={p1p4}></Image>
        </Col>
      </Row>
      <p>
        For this brief, we had to design and hold our events. This event can be
        anything you want it to be but it has to be a 'specific, unique, and
        disputable purpose' (Priya Parker, The Art of Gathering). We had to then
        create a visual system for our event which could be a color palette, a
        specific typography on theme with your event, and other components like
        an invitation, decorations for the event, etc.
      </p>

      <a href={pdf1} target='_blank'>
        View the full process
      </a>
    </div>
  );

  const project2 = (
    <div className='project'>
      <h1>Flexible Visual Systems</h1>
      <Row xs={2} md={4} className='g-4'>
        <Col>
          <Image className='project_thumbnail' thumbnail src={p2p1}></Image>
        </Col>
        <Col>
          <Image className='project_thumbnail' thumbnail src={p2p2}></Image>
        </Col>
        <Col>
          <Image className='project_thumbnail' thumbnail src={p2p3}></Image>
        </Col>
        <Col>
          <Image className='project_thumbnail' thumbnail src={p2p5}></Image>
        </Col>
      </Row>
      <p>
        For this brief, we designed a flexible visual system for a fictional
        city or “imaginary city” as Marco Polo describes in Italo Calvino's
        book, Invisible Cities. First, each student chose a random city from
        Invisible Cities out of a hatful of city names. Then we read the poem
        about our city and then began identifying words in the poem that
        characterized our city the best. From those words, I also chose images
        that corresponded as well as a color palette. My city was the City of
        Isaura and I decided to focus on its abundance of water as described on
        page 20 of Calvinos, Invisible Cities. We then chose a phrase that best
        described our city and then used all of these elements to create 2
        shapes or components which could be used to create a visual
        representation, in this case, a poster of our cities. Finally, we used
        these poster designs to print out a Riso book showcasing every student's
        visual system based on their city.
      </p>
      <p>
        I used a grid system to create two components one which was a corner
        piece and a centerpiece. These two pieces had to be versatile so that we
        could use them to create different visual systems. From there we used
        those components to create poster designs and then designs for the class
        book.
      </p>
      <Image className='project_image' src={p2p4}></Image>
    </div>
  );

  const project3 = (
    <div className='project'>
      <h1>Design Your Own Typeface</h1>
      <Row xs={2} md={2} className='g-4'>
        <Col>
          <Image
            className='project_image-typography'
            thumbnail
            src={typeFace}
          ></Image>
        </Col>
        <Col>
          <Image
            className='project_image-typography'
            thumbnail
            src={typeFace2}
          ></Image>
        </Col>
      </Row>
      <p>
        For this project, create your own fonts based on an already existing one
        of our choosing. I chose Baskerville because I liked the way the stroke
        changed from thin and thick throughout the letterforms. We created our
        typeface by using the pen tool in illustrator to trace the letters in
        the original font so we had a basis to start from. Our typeface also had
        to fit within the alphabet seamlessly.
      </p>
      <p>
        We traced images in illustrator with the use of the pen and had to keep
        each image and tracing on separate layers. The purpose of this exercise
        was to get familiar with the pen tool and organize multiple layers so
        that the design princess is more efficient. We also did an exercise that
        involved identifying part of our chosen typeface that made that typeface
        distinct from others, so we circled things like serifs or other
        distinguishable characteristics.
      </p>
    </div>
  );

  const project4 = (
    <div className='project'>
      <h1>Create an Anthology</h1>
      <Image className='project_image' src={fashion2}></Image>
      <p>
        We created an anthology that combined articles that we had picked based
        on our chosen topic. I chose to research fashion in different cultures
        and so the images and text throughout my anthology are from the articles
        I chose to work with. For this anthology, we also had to create a grid
        that best represented our information.
      </p>
      <p>
        We read multiple articles based on our topic and then used the media
        from the articles to experiment with layouts. We also did an exercise
        after we had completed our anthologies where we had to create a pamphlet
        to review another classmate's antholgy
      </p>
      <a href={anthology} target='_blank'>
        View the full anthology
      </a>
    </div>
  );

  const project5 = (
    <div className='project'>
      <h1>Type As Identity</h1>
      <Row xs={2} md={2} className='g-4'>
        <Col>
          <Image
            className='project_image-typography'
            thumbnail
            src={poster}
          ></Image>
        </Col>
        <Col>
          <Image
            className='project_image-typography'
            thumbnail
            src={poster2}
          ></Image>
        </Col>
      </Row>
      <p>
        Every year our department has a Bachelor of Fine Arts Show where the
        seniors showcase their year-long study and art. So for this project, we
        created a specific visual identity that would act as the basic theme for
        a poster design. The poster had to have the name of the show, the time
        and place, and then creative aspects that represented your theme or
        identity. Then we had to create a presentation to present in front of
        the class and persuade them that our poster identity was the best one.
        At the end, we voted for our favorite and the winner had their poster
        showcased in the show.
      </p>
      <a href={presentation} target='_blank'>
        View the full presentation
      </a>
    </div>
  );

  const project6 = (
    <div className='project'>
      <h1>There's Already an App For That</h1>
      <Row xs={1} md={3} className='g-4'>
        <Col>
          <Image className='project_thumbnail' thumbnail src={spotify}></Image>
        </Col>
        <Col>
          <Image className='project_thumbnail' thumbnail src={spotify2}></Image>
        </Col>
        <Col>
          <Image className='project_thumbnail' thumbnail src={spotify3}></Image>
        </Col>
      </Row>
      <p>
        We had to redesign an app for a specific purpose. My purpose was to
        create a user friendly spotify for older generations.
      </p>
      <a href='' target='_blank'>
        View Figma Design
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
          ) : section === '1' ? (
            project1
          ) : section === '2' ? (
            project2
          ) : section === '3' ? (
            project3
          ) : section === '4' ? (
            project4
          ) : section === '5' ? (
            project5
          ) : (
            section === '6' && project6
          )}
        </Container>
      </>
    </div>
  );
}

export default App;
