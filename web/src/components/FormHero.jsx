import React, { useState } from 'react';
import styled from 'styled-components';

import { Button, Col, Grid } from '.';
import { useSanity } from '../hooks';

const StyledForm = styled.form`
  background-color: ${(props) => props.$bgColor};
  & h2 {
    color: ${(props) => props.$color} !important;
  }
`;

const StyledBorder = styled.p`
  border-color: ${(props) => props.$borderColor};
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.$bgColor};
  &:hover {
    background-color: ${(props) => props.$bgColorHover};
  }
`;

const FormHero = () => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    findUs: '',
    // message: '',
  });

  const {
    firstName,
    lastName,
    email,
    phone,
    location,
    service,
    findUs,
    // message,
  } = contact;

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const { primary, secondary, accent, neutral, hero } = useSanity();

  return (
    <StyledForm
      name="form-hero"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="p-3 lg:p-6 rounded-xl shadow-xl mx-auto space-y-10"
      id="form-hero"
      $bgColor={primary.darker.color}
      $color={accent.default.color}
    >
      <div>
        <h2 className="text-4xl font-bold text-center drop-shadow-text">
          Request Talent
        </h2>
        {/* <StyledBorder
          className="text-xl font-italic text-gray-100 text-center"
          $borderColor={accent.light.color}
        >
          Send us a request or give us a call today at{' '}
          <AnchorText type="external" light weight="500" href={info.phoneHref}>
            {info.phone}
          </AnchorText>
          .
        </StyledBorder> */}
      </div>
      <input type="hidden" name="form-name" value="form-hero" />
      <Grid classes="gap-x-4 gap-y-6 lg:grid-cols-2">
        <Col>
          <input
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </Col>
        <Col>
          <input
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </Col>
        <Col>
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </Col>
        <Col>
          <input
            name="phone"
            type="tel"
            value={phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </Col>
        <Col>
          <input
            name="location"
            type="text"
            value={location}
            onChange={handleChange}
            placeholder="Location"
            required
            className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </Col>
        <Col>
          <select
            name="service"
            as="select"
            value={service}
            onChange={handleChange}
            required
            className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
          >
            <option value="" disabled hidden>
              Service
            </option>
            <option value="Medical Device">Medical Device</option>
            <option value="Biotechnology" className="bg-light">
              Biotechnology
            </option>
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="Civil & Structural Engineering" className="bg-light">
              Civil & Structural Engineering
            </option>
            <option value="Manufacturing">Manufacturing</option>
          </select>
        </Col>
        <Col classes="lg:col-span-2">
          <select
            name="findUs"
            as="select"
            value={findUs}
            onChange={handleChange}
            required
            className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
          >
            <option value="" disabled hidden>
              How Did You Find Us?
            </option>
            <option value="LinkedIn" className="bg-light">
              LinkedIn
            </option>
            <option value="Google/Bing">Google/Bing</option>
            <option value="Facebook" className="bg-light">
              Facebook
            </option>
            <option value="Referral" className="bg-light">
              Referral
            </option>
            <option value="Directory (Yellowpages, etc.)">
              Directory (Yellowpages, etc.)
            </option>
            <option value="Other" className="bg-light">
              Other
            </option>
          </select>
        </Col>
        {/* <Col classes="lg:col-span-2">
          <textarea
            name="message"
            rows="3"
            value={message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </Col> */}
      </Grid>

      {/* <div className="flex text-gray-100 text-sm my-10">
        <p className="italic">
          <span className="text-red-500">*</span> All fields required
        </p>
        <p className="italic">
          <span className="text-red-500">*</span> Your information will never be
          shared.
        </p>
      </div> */}
      <div className="text-center">
        <Button
          linkType="form"
          label="Submit Inquiry"
          className="inline-flex items-center py-3 px-6 hover:bg-gray-700 text-lg font-medium text-white hover:text-white border border-gray-50 hover:border-gray-100 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:-translate-y-0.5 translate transform"
          type="submit"
          value="Submit"
          $bgColor={accent.default.color}
          $bgColorHover={accent.dark.color}
        />
      </div>
    </StyledForm>
  );
};

export default FormHero;
