import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import PropTypes from 'prop-types';
import { Form, Button, Col, Container } from 'react-bootstrap';

const FormFooter = ({ className }) => {
  const [contact, setContact] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    findUs: '',
    message: '',
  });

  const { fullName, email, phone, company, service, findUs, message } = contact;

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const data = useStaticQuery(graphql`
    query Form_FooterQ {
      footerContact: file(
        relativePath: {
          eq: "assets/images/pages/footer/world-map-united-states-metacom-development.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.footerContact.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="Metacom Development does business nationwide and internationally"
    >
      <Container>
        <Form
          name="form-footer"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="rounded shadow mx-lg-0 p-2 p-md-5"
          id="form-footer"
        >
          <p className="display-5 font-weight-bold text-secondary text-center mb-1 mt-4 mt-md-0">
            Contact Us Today
          </p>
          <p className="lead font-italic text-center">
            Please let us know how we can help you with your software
            development needs.
          </p>
          <hr className="divider pb-5 drop-shadow" />
          <input type="hidden" name="form-name" value="form-footer" />

          <Form.Row>
            <Col xs={12} md={6} className="order-0">
              <Form.Group
                className="text-secondary"
                controlId="formFooterFullName"
              >
                <Form.Control
                  name="fullName"
                  type="text"
                  value={fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} className="order-1">
              <Form.Group controlId="formFooterEmail">
                <Form.Control
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} className="order-2">
              <Form.Group controlId="formFooterPhone">
                <Form.Control
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} className="order-3">
              <Form.Group
                className="text-secondary"
                controlId="formFooterCompany"
              >
                <Form.Control
                  name="company"
                  type="text"
                  value={company}
                  onChange={handleChange}
                  placeholder="Company"
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} className="order-4">
              <Form.Group controlId="formFooterService">
                <Form.Control
                  name="service"
                  as="select"
                  value={service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden>
                    Service of Interest...
                  </option>
                  <option value="New Application Development">
                    New Application Development
                  </option>
                  <option
                    value="Legacy Application Transformation"
                    className="bg-light"
                  >
                    Legacy Application Transformation
                  </option>
                  <option value="Healthcare Software Solutions">
                    Healthcare Software Solutions
                  </option>
                  <option
                    value="Financial Application Solutions"
                    className="bg-light"
                  >
                    Financial Application Solutions
                  </option>
                  <option value="Website Design & Development">
                    Website Design & Development
                  </option>
                  <option
                    value="Mobile Apps - iOS and Android"
                    className="bg-light"
                  >
                    Mobile Apps - iOS and Android
                  </option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={6} className="order-5">
              <Form.Group controlId="formFooterFindUs">
                <Form.Control
                  name="findUs"
                  as="select"
                  value={findUs}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden>
                    How Did You Find Us?
                  </option>
                  <option value="Facebook" className="bg-light">
                    Facebook
                  </option>
                  <option value="Family/Friend">Family/Friend</option>
                  <option value="Google/Bing" className="bg-light">
                    Google/Bing
                  </option>
                  <option value="Referral">Referral</option>
                  <option
                    value="Website (Yellowpages, etc.)"
                    className="bg-light"
                  >
                    Directory (Yellowpages, etc.)
                  </option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} className="order-6">
              <Form.Group controlId="formFooterMessage">
                <Form.Control
                  name="message"
                  as="textarea"
                  rows={3}
                  value={message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Text className="text-danger small mb-3">
            * All Fields Required
          </Form.Text>
          <Form.Text className="text-white small mb-3">
            Your information will never be shared with anyone else.
          </Form.Text>
          <div className="text-center mb-5 mb-md-0">
            <Button
              className="btn btn-xl drop-shadow mt-4"
              type="submit"
              value="Submit"
            >
              <span>Contact Us</span>
            </Button>
          </div>
        </Form>
      </Container>
    </BackgroundImage>
  );
};

Form.defaultProps = {
  formname: `contact-form-footer`,
};

Button.propTypes = {
  formname: PropTypes.string,
};

export default FormFooter;
