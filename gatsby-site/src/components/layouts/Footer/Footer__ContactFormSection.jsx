import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Container, Row, Col } from 'react-bootstrap';
import FormFooter from '../../common/Forms/FormFooter/FormFooter';

const Footer__ContactFormSection = ({ className }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={10} className="px-0 my-5">
          <FormFooter />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer__ContactFormSection;
