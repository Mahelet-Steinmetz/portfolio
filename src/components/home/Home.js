import React from 'react';
import { motion as m } from 'framer-motion';
import { Card, Row, Col } from 'react-bootstrap';
import projects from './projects';
import './Home.css';

export const Home = (props) => {
  const { setSection } = props;
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
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      exit={{ opacity: 0 }}
      className='home'
    >
      <div className='heading'>
        <h1 className='heading__name'>Mahelet Steinmetz</h1>
        <h3>Graphic Design Major at The University of Connecticut</h3>
      </div>
      <div className='project-cards'>{projectCards}</div>
    </m.div>
  );
};
