import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Section from './Section';

const Body = ({ className }) => {
  return (
    <section className="section-container" id="about-page">
      <Section />
    </section>
  );
};

export default Body;
