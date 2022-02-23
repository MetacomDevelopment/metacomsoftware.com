import React, { useState } from 'react';
import styled from 'styled-components';

import { Col, Grid, AnchorText, Button, SanityBlockContent } from '.';
import { useSanity } from '../hooks';

const StyledForm = styled.form`
  background-color: ${(props) => props.$bgColor};
`;

const StyledHeadline = styled.h2`
  color: ${(props) => props.$color} !important;
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

const Form = ({ formName }) => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const { firstName, lastName, email, phone, company, service, message } =
    contact;

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const { primary, accent, forms } = useSanity();

  return (
    <StyledForm
      name={formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="relative p-3 lg:p-5 rounded-xl shadow-xl max-w-4xl mx-3 lg:mx-auto"
      id={formName}
      $bgColor={primary.dark.color}
    >
      {forms.map((form) => (
        <div>
          <div className="space-y-6 mb-16">
            <StyledHeadline
              className="text-4xl font-bold text-center mb-1 mt-4 mt-md-0"
              $color={accent.default.color}
            >
              {form.headline}
            </StyledHeadline>
            <StyledBorder
              className="text-xl font-italic text-zinc-100 text-center max-w-md mx-auto"
              $borderColor={accent.light.color}
            >
              <SanityBlockContent blocks={form._rawTagline} />
            </StyledBorder>
          </div>
          <input type="hidden" name="form-name" value={formName} />

          <Grid classes="gap-x-4 gap-y-6 lg:grid-cols-2">
            <Col>
              <input
                name="firstName"
                type="text"
                value={firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-zinc-300 rounded-md"
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
                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-zinc-300 rounded-md"
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
                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-zinc-300 rounded-md"
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
                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-zinc-300 rounded-md"
              />
            </Col>
            <Col>
              <input
                name="company"
                type="text"
                value={company}
                onChange={handleChange}
                placeholder="Company"
                required
                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-zinc-300 rounded-md"
              />
            </Col>
            <Col>
              <select
                name="service"
                as="select"
                value={service}
                onChange={handleChange}
                required
                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-zinc-300 rounded-md"
              >
                <option value="" disabled hidden>
                  Service...
                </option>
                <option value="Healthcare Software Development">
                  Healthcare Software Development
                </option>
                <option value="Healthcare Technology Consulting">
                  Healthcare Technology Consulting
                </option>
                <option value="Custom Software Development">
                  Custom Software Development
                </option>
                <option value="Legacy Application Modernization">
                  Legacy Application Modernization
                </option>
                <option value="Website Design & Development">
                  Website Design & Development
                </option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
              </select>
            </Col>
            <Col classes="lg:col-span-2">
              <textarea
                name="message"
                rows="3"
                value={message}
                onChange={handleChange}
                placeholder="Please leave us a detailed message..."
                required
                className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-zinc-300 rounded-md"
              />
            </Col>
          </Grid>
          <div className="text-center mt-10 mb-6">
            <Button linkType="form" label="Get My Custom Solution" />
          </div>
        </div>
      ))}
    </StyledForm>
  );
};

export default Form;
