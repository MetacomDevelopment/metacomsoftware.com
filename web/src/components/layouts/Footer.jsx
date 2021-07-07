import React from 'react';

import MapFooter from '../views/footer/MapFooter';
import LinksFooter from '../views/footer/LinksFooter';
import TermsFooter from '../views/footer/TermsFooter';
import FormFooter from '../common/forms/FormFooter';

const Footer = () => (
  <footer aria-labelledby="footerHeading">
    <MapFooter />
    <FormFooter />
    <LinksFooter />
    <TermsFooter />
  </footer>
);

export default Footer;
