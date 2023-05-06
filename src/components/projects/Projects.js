import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import {
  p1p1,
  p1p2,
  p1p3,
  p1p4,
  p2p1,
  p2p2,
  p2p3,
  p2p4,
  p2p5,
  typeFace,
  typeFace2,
  fashion2,
  poster,
  poster2,
  spotify,
  spotify2,
  spotify3,
  wiki,
  wiki2,
  pets,
  pets2,
  pets3,
  soccer,
  soccer2,
  nutmeg,
  stamp,
} from '../../images/index';
import pdf1 from '../../pdfs/p1b1.pdf';
import anthology from '../../pdfs/anthology.pdf';
import presentation from '../../pdfs/presentation.pdf';
import project3PDF from '../../pdfs/project3PDF.pdf';
import soccerPDF from '../../pdfs/soccerPDF.pdf';
import sipNsculpt from '../../pdfs/sipNsculpt.pdf';
import { motion as m } from 'framer-motion';
import './Projects.css';

export const Projects = (props) => {
  const { project } = props;

  const project1 = (
    <div className='project'>
      <h1>Create an Event</h1>
      <Row xs={1} md={4} className='g-4'>
        <Col>
          <div className='project__image'>
            <Image
              className='project__image__thumbnail'
              thumbnail
              src={p1p1}
            ></Image>
          </div>
        </Col>
        <Col>
          <div className='project__image'>
            <Image
              className='project__image__thumbnail'
              thumbnail
              src={p1p2}
            ></Image>
          </div>
        </Col>
        <Col>
          <div className='project__image'>
            <Image
              className='project__image__thumbnail'
              thumbnail
              src={p1p3}
            ></Image>
          </div>
        </Col>
        <Col>
          <div className='project__image'>
            <Image
              className='project__image__thumbnail'
              thumbnail
              src={p1p4}
            ></Image>
          </div>
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

      <div className='project__bottom'>
        <div className='project__bottom__anchor'>
          <a href={pdf1} target='_blank' rel='noopener noreferrer'>
            View the full process
          </a>
        </div>
      </div>
    </div>
  );

  const project2 = (
    <div className='project'>
      <h1>Flexible Visual Systems</h1>
      <Row xs={1} md={4} className='g-4'>
        <Col>
          <div className='project__image'>
            <Image
              className='project__image__thumbnail'
              thumbnail
              src={p2p1}
            ></Image>
          </div>
        </Col>
        <Col>
          <div className='project__image'>
            <Image
              className='project__image__thumbnail'
              thumbnail
              src={p2p2}
            ></Image>
          </div>
        </Col>
        <Col>
          <div className='project__image'>
            <Image
              className='project__image__thumbnail'
              thumbnail
              src={p2p3}
            ></Image>
          </div>
        </Col>
        <Col>
          <div className='project__image'>
            <Image
              className='project__image__thumbnail'
              thumbnail
              src={p2p5}
            ></Image>
          </div>
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
      <div className='project__image'>
        <Image className='project_image__large' src={p2p4}></Image>
      </div>
    </div>
  );

  const project3 = (
    <div className='project'>
      <h1>Design Your Own Typeface</h1>
      <Row xs={1} md={2} className='g-4'>
        <Col>
          <div className='project__image'>
            <Image
              className='project_image-typography'
              thumbnail
              src={typeFace}
            ></Image>
          </div>
        </Col>
        <Col>
          <div className='project__image'>
            <Image
              className='project_image-typography'
              thumbnail
              src={typeFace2}
            ></Image>
          </div>
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
      <div className='project4__image'>
        <Image className='project_image__large' src={fashion2}></Image>
      </div>
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

      <div className='project__bottom'>
        <div className='project__bottom__anchor'>
          <a href={anthology} target='_blank' rel='noopener noreferrer'>
            View the full process
          </a>
        </div>
      </div>
    </div>
  );

  const project5 = (
    <div className='project'>
      <h1>Type As Identity</h1>
      <Row xs={1} md={2} className='g-4'>
        <Col>
          <div className='project__image'>
            <Image
              className='project_image-typography'
              thumbnail
              src={poster}
            ></Image>
          </div>
        </Col>
        <Col>
          <div className='project__image'>
            <Image
              className='project_image-typography'
              thumbnail
              src={poster2}
            ></Image>
          </div>
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

      <div className='project__bottom'>
        <div className='project__bottom__anchor'>
          <a href={presentation} target='_blank' rel='noopener noreferrer'>
            View the full process
          </a>
        </div>
      </div>
    </div>
  );

  const project6 = (
    <div className='project'>
      <h1>There's Already an App For That</h1>
      <Row xs={1} md={3} className='g-4'>
        <Col>
          <div className='project__image'>
            <Image
              className='project__image__thumbnail-2'
              thumbnail
              src={spotify}
            ></Image>
          </div>
        </Col>
        <Col>
          <div className='project__image'>
            <Image
              className='project__image__thumbnail-2'
              thumbnail
              src={spotify2}
            ></Image>
          </div>
        </Col>
        <Col>
          <div className='project__image'>
            <Image
              className='project__image__thumbnail-2'
              thumbnail
              src={spotify3}
            ></Image>
          </div>
        </Col>
      </Row>
      <p>
        We had to redesign an app for a specific purpose. My purpose was to
        create a user friendly spotify for older generations.
      </p>
      <div className='project__bottom'>
        <div className='project__bottom__anchor'>
          <a
            href='https://www.figma.com/proto/j3rRPx5HY0dexzVxwUz1ky/Mahelet-Steinmetz?node-id=24-68&starting-point-node-id=24%3A68'
            target='_blank'
            rel='noopener noreferrer'
          >
            View Figma Design
          </a>
        </div>
      </div>
    </div>
  );

  const project7 = (
    <div className='project'>
      <h1>Make It Pop</h1>
      <Row xs={1} md={2} className='g-4'>
        <Col>
          <div className='project__image'>
            <Image
              className='project__image__thumbnail-2'
              thumbnail
              src={wiki}
            ></Image>
          </div>
        </Col>
        <Col>
          <div className='project__image'>
            <Image
              className='project__image__thumbnail-2'
              thumbnail
              src={wiki2}
            ></Image>
          </div>
        </Col>
      </Row>
      <p>
        I revamped an already existing website. My task was to modernize
        Wikipedia for a more professional look.
      </p>
      <div className='project__bottom'>
        <div className='project__bottom__anchor'>
          <a
            href='https://www.figma.com/proto/HROCL0vHzc9cqZxrrivbIe/Steinmetz---Project-2?node-id=23-61&scaling=contain'
            target='_blank'
            rel='noopener noreferrer'
          >
            View Figma Design
          </a>
        </div>
      </div>
    </div>
  );

  const project8 = (
    <div className='project'>
      <h1>Design For Good</h1>
      <Row xs={1} md={3} className='g-4'>
        <Col>
          <div className='project__image'>
            <Image
              className='project__image__thumbnail'
              thumbnail
              src={pets2}
            ></Image>
          </div>
        </Col>
        <Col>
          <div className='project__image'>
            <Image
              className='project__image__thumbnail'
              thumbnail
              src={pets}
            ></Image>
          </div>
        </Col>
        <Col>
          <div className='project__image'>
            <Image
              className='project__image__thumbnail'
              thumbnail
              src={pets3}
            ></Image>
          </div>
        </Col>
      </Row>
      <p>
        My task was to create a website that can help any disadvantaged group.
      </p>

      <div className='project__bottom'>
        <div className='project__bottom__anchor'>
          <a href={project3PDF} target='_blank' rel='noopener noreferrer'>
            View Presentation
          </a>
        </div>
      </div>
    </div>
  );

  const project9 = (
    <div className='project'>
      <h1>Uconn Nutmeg Publishing</h1>
      <Row xs={1} md={2} className='g-4'>
        <Col>
          <div className='project__image'>
            <Image
              className='project__image-typography'
              thumbnail
              src={soccer}
            ></Image>
          </div>
          <div className='project__bottom project9'>
            <div className='project__bottom__anchor'>
              <a href={soccerPDF} target='_blank' rel='noopener noreferrer'>
                View PDF
              </a>
            </div>
          </div>
        </Col>
        {/* <Col>
          <div className='project__image'>
            <Image
              className='project__image__thumbnail'
              thumbnail
              src={soccer2}
            ></Image>
          </div>
        </Col> */}
        <Col>
          <div className='project__image'>
            <Image
              className='project__image-typography'
              thumbnail
              src={nutmeg}
            ></Image>
          </div>
          <div className='project__bottom project9'>
            <div className='project__bottom__anchor'>
              <a href={sipNsculpt} target='_blank' rel='noopener noreferrer'>
                View PDF
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <p>
        Student run group that creates yearbooks for the graduating seniors and
        a magazine that spotlites UConn student life. My job was to design
        spreads for the yearbook. Yearbook topics could be about sports or Uconn
        clubs and organizations.
      </p>
    </div>
  );

  const project10 = (
    <div className='project'>
      <h1>Typo Texture</h1>
      <div className='project__image'>
        <Image className='project10__image' src={stamp}></Image>
      </div>
      <p>
        This project was called typo texture and we had to create a pattern or
        texture out of letters of different parts or parts of the letter we
        decided to focus on. We then chose two Riso colors and printed them out
        in the Riso printer. The final product was a typo-texture stamp which we
        exchanged with our classmates.
      </p>
    </div>
  );

  return (
    <m.div
      className='projects'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      exit={{ opacity: 0 }}
    >
      <Container className='sections'>
        {project === '1'
          ? project1
          : project === '2'
          ? project2
          : project === '3'
          ? project3
          : project === '4'
          ? project4
          : project === '5'
          ? project5
          : project === '6'
          ? project6
          : project === '7'
          ? project7
          : project === '8'
          ? project8
          : project === '9'
          ? project9
          : project === '10' && project10}
      </Container>
    </m.div>
  );
};
