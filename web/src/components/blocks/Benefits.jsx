import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Section from '../layouts/Section';
import Container from '../layouts/Container';
import Grid from '../layouts/Grid';
import Col from '../layouts/Col';

const Benefits = ({ block, raw, index }) => {
  const { headline } = block;

  return (
    /*   const data = useStaticQuery(graphql`
    query BenefitsHomeQ {
      allSa
    }
  `);
  const benefits = {
    col1: [
      {
        icon: sanity.benefits,
        headline: sanity.benefits,
        description: sanity.benefits,
        author: sanity.benefits,
        company: sanity.benefits,
      },
    ],
    col2: [
      {
        icon: sanity.benefits,
        headline: sanity.benefits,
        description: sanity.benefits,
        author: sanity.benefits,
        company: sanity.benefits,
      },
    ],
    col3: [
      {
        icon: sanity.benefits,
        headline: sanity.benefits,
        description: sanity.benefits,
        author: sanity.benefits,
        company: sanity.benefits,
      },
    ],
  }; */

    <Section>
      <Container>
        <h2>{headline}</h2>
        {/* <Grid cols={3} gapXs={8} gapLg={8}>
          {benefits.map((benefit) => (
            <Col>
              <div className="">
                <div className="">
                  <TimeIcon className="h-40 w-40 mx-auto text-primary fill-current" />
                </div>
                <div className="relative z-10">
                  <h3 className="mt-8 text-3xl font-medium text-gray-800">
                    <span className="">{benefit.headline}</span>
                  </h3>
                  <p className="mt-5 mb-8 text-xl text-gray-500 italic">
                    <span className="">{benefit.description}</span>
                  </p>
                  <p className="mt-5 text-base text-primary font-bold">
                    <span>{benefit.author}</span>
                  </p>
                  <p className="mb-8 text-base text-gray-800 font-semibold">
                    <span>{benefit.company}</span>
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Grid> */}
      </Container>
    </Section>
  );
};
export default Benefits;
