import React, { useState } from 'react';
import Col from '../../layouts/Col';
import Grid from '../../layouts/Grid';

const FormFooter = () => {
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

  return (
    <form
      name="form-footer"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="bg-primary p-10 lg:p-16 rounded-xl shadow-xl max-w-4xl mx-auto"
      id="form-footer"
    >
      <div className="space-y-6 mb-16">
        <p className="text-4xl font-bold text-accent text-center mb-1 mt-4 mt-md-0">
          Contact Us Today
        </p>
        <p className="text-xl font-italic text-gray-100 text-center pb-10 border-b-2 border-accent">
          Please let us know how we can help you with your recruiting needs.
        </p>
      </div>
      <input type="hidden" name="form-name" value="form-footer" />

      <Grid classes="lg:grid-cols-2 gap-6">
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
            name="company"
            type="text"
            value={company}
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
              Industry?
            </option>
            <option value="Medical Device & Biotechnology">
              Medical Device & Biotechnology
            </option>
            <option value="IT & Technical" className="bg-gray-100">
              IT & Technical
            </option>
            <option value="Civil & Structural Engineering">
              Civil & Structural Engineering
            </option>
            <option value="Manufacturing" className="bg-gray-100">
              Manufacturing
            </option>
          </select>
        </Col>
        <Col classes="col-span-2">
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
            <option value="Facebook">Facebook</option>
            <option value="LinkedIn" className="bg-gray-100">
              LinkedIn
            </option>
            <option value="Google/Bing">Google/Bing</option>
            <option value="Referral" className="bg-gray-100">
              Referral
            </option>
            <option value="Directory (Yellowpages, etc.)">
              Directory (Yellowpages, etc.)
            </option>
            <option value="Other" className="bg-gray-100">
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
        <p>
          <span className="text-red-500">*</span> All Fields Required
        </p>
        <p>
          <span className="text-red-500">*</span> Your information will never be
          shared with anyone else.
        </p>
      </div>
      <div className="text-center mt-16">
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

export default FormFooter;
