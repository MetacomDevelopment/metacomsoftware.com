import React, { useState } from 'react';
import styled from 'styled-components';

import { Col, Grid, AnchorText, Button } from '.';
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

const FormSidebar = () => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    type: '',
    findUs: '',
    message: '',
  });

  const { firstName, lastName, email, phone, service, type, findUs, message } =
    contact;

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const { primary, secondary, accent, neutral, hero } = useSanity();

  return (
    <StyledForm
      name="form-sidebar"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="p-3 lg:p-5 rounded-xl shadow-xl mx-auto"
      id="form-sidebar"
      $bgColor={primary.dark.color}
    >
      <div className="space-y-6 mb-16">
        <StyledHeadline
          className="text-4xl font-bold text-center mb-1 mt-4 mt-md-0"
          $color={accent.default.color}
        >
          Request Energy Consultation
        </StyledHeadline>
        <StyledBorder
          className="text-xl font-italic text-zinc-100 text-center"
          $borderColor={accent.light.color}
        >
          Send us a request or give us a call today
          {/* <AnchorText type="external" light weight="500" href={info.phoneHref}>
            {info.phone}
          </AnchorText> */}
          .
        </StyledBorder>
      </div>
      <input type="hidden" name="form-name" value="form-sidebar" />

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
            <option value="HVAC System Design" className="bg-gray-50">
              HVAC System Design
            </option>
            <option value="Duct Leakage Testing">Duct Leakage Testing</option>
            <option
              value="Preventive Maintenance Program"
              className="bg-gray-50"
            >
              Preventive Maintenance Program
            </option>
            <option value="Mass Save HVAC MeasureQuick AC Check">
              Mass Save HVAC MeasureQuick AC Check
            </option>
            <option
              value="Mass Save Heat Pump Installer Network"
              className="bg-gray-50"
            >
              Mass Save Heat Pump Installer Network
            </option>
          </select>
        </Col>
        <Col>
          <select
            name="type"
            as="select"
            value={type}
            onChange={handleChange}
            required
            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-zinc-300 rounded-md"
          >
            <option value="" disabled hidden>
              Type...
            </option>
            <option value="Residential" className="bg-gray-50">
              Residential
            </option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial" className="bg-gray-50">
              Industrial
            </option>
          </select>
        </Col>
        <Col classes="lg:col-span-2">
          <select
            name="findUs"
            as="select"
            value={findUs}
            onChange={handleChange}
            required
            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-zinc-300 rounded-md"
          >
            <option value="" disabled hidden>
              How Did You Find Us?
            </option>
            <option value="Google" className="bg-gray-50">
              Google
            </option>
            <option value="Bing">Bing</option>
            <option value="Facebook" className="bg-gray-50">
              Facebook
            </option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Referral" className="bg-gray-50">
              Referral
            </option>
            <option value="Directory (Yellowpages, etc.)">
              Directory (Yellowpages, etc.)
            </option>
            <option value="Other" className="bg-gray-50">
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
            className="shadow-sm focus:ring-zinc-500 focus:border-zinc-500 block w-full sm:text-sm border-zinc-300 rounded-md"
          />
        </Col>
      </Grid>

      <div className="text-zinc-100 text-sm my-10">
        <p className="italic">
          <span className="text-red-500">*</span> All fields required
        </p>
        <p className="italic">
          <span className="text-red-500">*</span> Your information will never be
          shared.
        </p>
      </div>
      <div className="text-center mt-10 mb-6">
        <Button linkType="form" label="Submit Inquiry" />
      </div>
    </StyledForm>
  );
};

export default FormSidebar;
