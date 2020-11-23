import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col, Container } from 'react-bootstrap';

const FormHomePage = () => {
  const [contact, setContact] = useState({
    fullName: '',
    phone: '',
    email: '',
    pickupLocation: '',
    findUs: '',
  });

  const { fullName, phone, email, pickupLocation, findUs } = contact;

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  return (
    <Form
      name="form-home-page"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="bg-light border border-primary rounded shadow p-2 p-md-4"
      id="form-home-page"
    >
      <p className="lead text-secondary font-weight-bold mb-1 mt-3 mt-lg-0">
        CONTACT US TODAY
      </p>
      <hr className="divider pb-3 drop-shadow" />
      <input type="hidden" name="form-name" value="form-home-page" />
      <Container>
        <Form.Group className="text-secondary" controlId="formHomePageFullName">
          <Form.Control
            name="fullName"
            type="text"
            value={fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formHomePagePhone">
          <Form.Control
            name="phone"
            type="tel"
            value={phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </Form.Group>
        <Form.Group controlId="formHomePageEmail">
          <Form.Control
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </Form.Group>
        <Form.Group controlId="formHomePagePickupLocation">
          <Form.Control
            name="pickupLocation"
            type="text"
            value={pickupLocation}
            onChange={handleChange}
            placeholder="Pickup Location"
            required
          />
        </Form.Group>
        <Form.Group controlId="formHomePageFindUs">
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
            <option value="Website (Yellowpages, etc.)" className="bg-light">
              Directory (Yellowpages, etc.)
            </option>
          </Form.Control>
        </Form.Group>
      </Container>

      <div className="text-center">
        <Button
          className="btn btn-xl drop-shadow mt-4 mb-4 mb-lg-0"
          type="submit"
          value="Submit"
        >
          <span>Get My Cash</span>
        </Button>
      </div>
    </Form>
  );
};

Form.defaultProps = {
  formname: `contact-form-home`,
};

Button.propTypes = {
  formname: PropTypes.string,
};

export default FormHomePage;
