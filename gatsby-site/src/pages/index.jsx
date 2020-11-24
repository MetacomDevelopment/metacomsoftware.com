import React from 'react';

import SEO from '../components/common/SEO/seo';
import HeroHome from '../components/views/Home/HeroHome';
import AboutHome from '../components/views/Home/AboutHome';
import PracticesHome from '../components/views/Home/PracticesHome';
import ServicesHome from '../components/views/Home/ServicesHome';
import TeamHome from '../components/views/Home/TeamHome';
import TechHome from '../components/views/Home/TechHome';

const IndexPage = () => {
  return (
    <>
      <SEO
        title="Metacom Development"
        description="Metacom Development"
        canonicalLink="https://www.metacomsoftware.com/"
      />
      <HeroHome className="bg-img-hero-home" />
      <PracticesHome />
      <AboutHome />
      <ServicesHome />
      <TechHome />
      <TeamHome />
    </>
  );
};

export default IndexPage;
