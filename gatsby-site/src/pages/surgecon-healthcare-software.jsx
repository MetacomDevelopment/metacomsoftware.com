import React from 'react';

import SEO from '../components/common/SEO/seo';
import AboutSurgecon from '../components/views/Surgecon/AboutSurgecon';
import BenefitsSurgecon from '../components/views/Surgecon/BenefitsSurgecon';
import CovidBenefitsSurgecon from '../components/views/Surgecon/CovidBenefitsSurgecon';
import FeaturesSurgecon from '../components/views/Surgecon/FeaturesSurgecon';
import HeroSurgecon from '../components/views/Surgecon/HeroSurgecon';

const SurgeconPage = () => {
  return (
    <>
      <SEO
        title="Metacom Development"
        description="Metacom Development"
        canonicalLink="https://www.metacomsoftware.com/surgecon-healthcare-software/"
      />
      <HeroSurgecon className="bg-img-hero-surgecom" />
      <AboutSurgecon />
      <FeaturesSurgecon />
      <CovidBenefitsSurgecon />
      <BenefitsSurgecon />
    </>
  );
};

export default SurgeconPage;
