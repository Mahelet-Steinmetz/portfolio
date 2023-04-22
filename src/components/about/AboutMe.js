import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import { magicPotluck } from '../../images';
import './AboutMe.css';
import { motion as m } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

export const AboutMe = () => {
  return (
    <AnimatePresence mode={'wait'}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        exit={{ opacity: 0 }}
        className='about-me'
      >
        <Row xs={1} md={2} className='g-4 about-me__row'>
          <Col>
            <Image src={magicPotluck}></Image>
          </Col>
          <Col>
            <div className='about-me__info'>
              I’m in the process of receiving a BFA with a concentration in
              graphic design. My art journey began when I was little when my
              favorite way to spend my time was drawing in my sketchbook. Then
              as I grew up I continued to take art classes throughout middle
              school and high school. When I got to UConn and was deciding on a
              major concentration, Graphic Design caught my interest the most
              because of my growing interest and awareness of digital art. I
              would describe myself as hard working, motivated, and persistent
              and I’m excited to use the skills I have developed to create art
              that can convey messages in a interesting and creative way to
              inspire others to think openly and differently.
            </div>
          </Col>
        </Row>
      </m.div>
    </AnimatePresence>
  );
};
