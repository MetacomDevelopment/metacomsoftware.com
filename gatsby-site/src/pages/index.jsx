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
        title="We Pay The Most Cash For Junk Cars - No Tow Fees | Angels Towing - Junk Car Mass"
        description="Angels Towing - Junk Car Mass will pay the highest amount of CASH for your junk car. We buy any vehicle make, model, and condition. Call (781) 936-3974 for your quote!"
        canonicalLink="https://junkcarsmass.com/"
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
