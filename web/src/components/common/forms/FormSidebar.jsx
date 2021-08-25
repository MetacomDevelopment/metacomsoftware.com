import React, { useState } from 'react';

import useSanitySettingsCompany from '../../../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../../../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../../../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../../../hooks/useSanitySettingsMetadata';
import Grid from '../../layouts/Grid';
import Col from '../../layouts/Col';

const FormSidebar = () => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    findUs: '',
    message: '',
  });

  const {
    firstName,
    lastName,
    email,
    phone,
    company,
    industry,
    findUs,
    message,
  } = contact;

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const { ...allCompany } = useSanitySettingsCompany();
  const { ...allSocials } = useSanitySettingsSocials();
  const { ...allColors } = useSanitySettingsColors();
  const { ...allMetadata } = useSanitySettingsMetadata();

  return (
    <form
      name="form-sidebar"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="bg-primary p-3 lg:p-5 rounded-xl shadow-xl mx-auto"
      id="form-sidebar"
    >
      <div className="space-y-6 mb-16">
        <p className="text-4xl font-bold text-accent text-center mb-1 mt-4 mt-md-0">
          Request Talent
        </p>
        <p className="text-xl font-italic text-gray-100 text-center pb-10 border-b-2 border-accent">
          Send us a request or give us a call today at{' '}
          <a href={allCompany.phoneHref} className="text-accent">
            {allCompany.phone}
          </a>
          .
        </p>
      </div>
      <input type="hidden" name="form-name" value="form-sidebar" />

      <Grid cols={2} gapX={4} gapY={6} gapXs={8} gapLg={2}>
        <Col>
          <input
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </Col>
        <Col>
          <select
            name="industry"
            as="select"
            value={industry}
            onChange={handleChange}
            required
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
        <Col classes="col-span-2">
          <select
            name="findUs"
            as="select"
            value={findUs}
            onChange={handleChange}
            required
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
        <Col classes="col-span-2">
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
        <button
          className="inline-flex items-center py-3 px-6 bg-accent hover:bg-gray-700 text-lg font-medium text-white hover:text-white border border-white hover:border-gray-100 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:-translate-y-0.5 translate transform"
          type="submit"
          value="Submit"
        >
          <span>Submit Inquiry</span>
        </button>
      </div>
    </form>
  );
};

export default FormSidebar;
