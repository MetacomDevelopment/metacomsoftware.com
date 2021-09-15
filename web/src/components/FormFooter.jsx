import React, { useState } from 'react';
import styled from 'styled-components';

import { Col, Grid, TextLink } from '.';
import { useSanity } from '../hooks';

const StyledForm = styled.form`
  background-color: ${(props) => props.bgColor};
`;

const StyledHeadline = styled.h2`
  color: ${(props) => props.color} !important;
`;

const StyledBorder = styled.p`
  border-color: ${(props) => props.borderColor};
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.bgColor};
  &:hover {
    background-color: ${(props) => props.bgColorHover};
  }
`;

const FormFooter = () => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    industry: '',
    findUs: '',
    message: '',
  });

  const {
    firstName,
    lastName,
    email,
    phone,
    companyName,
    industry,
    findUs,
    message,
  } = contact;

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const { primary, secondary, accent, neutral, hero } = useSanity();

  return (
    <StyledForm
      name="form-footer"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="p-3 lg:p-5 rounded-xl shadow-xl mx-auto"
      id="form-footer"
      bgColor={primary.dark.color}
    >
      <div className="space-y-6 mb-16">
        <StyledHeadline
          className="text-4xl font-bold text-center mb-1 mt-4 mt-md-0"
          color={secondary.light.color}
        >
          Request Talent
        </StyledHeadline>
        <StyledBorder
          className="text-xl font-italic text-gray-100 text-center"
          borderColor={accent.light.color}
        >
          Send us a request or give us a call today at{' '}
          {/* <TextLink type="external" light weight="500" href={info.phoneHref}>
            {info.phone}
          </TextLink> */}
          .
        </StyledBorder>
      </div>
      <input type="hidden" name="form-name" value="form-footer" />

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
            name="companyName"
            type="text"
            value={companyName}
            onChange={handleChange}
            placeholder="Company"
            required
            className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </Col>
        <Col>
          <select
            name="industry"
            as="select"
            value={industry}
            onChange={handleChange}
            required
            className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
          >
            <option value="" disabled hidden>
              Industry
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
        <Col classes="lg:col-span-2">
          <textarea
            name="message"
            rows="3"
            value={message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </Col>
      </Grid>

      <div className="text-gray-100 text-sm my-10">
        <p className="italic">
          <span className="text-red-500">*</span> All fields required
        </p>
        <p className="italic">
          <span className="text-red-500">*</span> Your information will never be
          shared.
        </p>
      </div>
      <div className="text-center mt-10 mb-6">
        <StyledButton
          className="inline-flex items-center py-3 px-6 hover:bg-gray-700 text-lg font-medium text-white hover:text-white border border-gray-50 hover:border-gray-100 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:-translate-y-0.5 translate transform"
          type="submit"
          value="Submit"
          bgColor={accent.default.color}
          bgColorHover={accent.dark.color}
        >
          <span>Submit Inquiry</span>
        </StyledButton>
      </div>
    </StyledForm>
  );
};

export default FormFooter;
