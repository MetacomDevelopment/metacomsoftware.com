import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import MapFooter from '../views/footer/MapFooter';
import LinksFooter from '../views/footer/LinksFooter';
import TermsFooter from '../views/footer/TermsFooter';
import FormFooter from '../common/forms/FormFooter';
import Section from './Section';
import FadeIn from './FadeIn';

const Footer = ({ type }) => {
  const data = useStaticQuery(graphql`
    query FooterQ {
      imgFormBg: file(
        relativePath: {
          eq: "assets/images/home/request-expert-talent-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const imgFormBg = data.imgFormBg.childImageSharp.gatsbyImageData;

  switch (type) {
    default:
      return (
        <footer aria-labelledby="footerHeading">
          <Section type="none">
            <div className="relative flex flex-col place-content-center place-items-center">
              <div className="absolute inset-0">
                <GatsbyImage
                  image={imgFormBg}
                  className="w-full h-full object-cover"
                  alt="Contact our recruiting agency, All-Star Connections today to find new hires"
                  loading="eager"
                />
                <div
                  className="absolute inset-0 bg-coolGray-600"
                  style={{ mixBlendMode: 'multiply' }}
                  aria-hidden="true"
                />
              </div>
              <FadeIn classes="z-10 px-3 lg:px-0 py-24">
                <FormFooter />
              </FadeIn>
            </div>
          </Section>
          <LinksFooter />
          <TermsFooter />
        </footer>
      );
    case 'brand':
      return (
        <footer aria-labelledby="footerHeading">
          <Section type="none">
            <div className="relative flex flex-col place-content-center place-items-center">
              <div className="absolute inset-0">
                <GatsbyImage
                  image={imgFormBg}
                  className="w-full h-full object-cover"
                  alt="Contact our recruiting agency, All-Star Connections today to find new hires"
                  loading="eager"
                />
                <div
                  className="absolute inset-0 bg-coolGray-600"
                  style={{ mixBlendMode: 'multiply' }}
                  aria-hidden="true"
                />
              </div>
              <FadeIn classes="z-10 px-3 lg:px-0 py-24">
                <FormFooter />
              </FadeIn>
            </div>
          </Section>
          {/* <MapFooter /> */}
          <LinksFooter />
          <TermsFooter />
        </footer>
      );
    case 'boston':
      return (
        <footer aria-labelledby="footerHeading">
          <Section type="none">
            <div className="relative flex flex-col place-content-center place-items-center">
              <div className="absolute inset-0">
                <GatsbyImage
                  image={imgFormBg}
                  className="w-full h-full object-cover"
                  alt="Contact our recruiting agency, All-Star Connections today to find new hires"
                  loading="eager"
                />
                <div
                  className="absolute inset-0 bg-coolGray-600"
                  style={{ mixBlendMode: 'multiply' }}
                  aria-hidden="true"
                />
              </div>
              <FadeIn classes="z-10 px-3 lg:px-0 py-24">
                <FormFooter />
              </FadeIn>
            </div>
          </Section>
          <MapFooter type="boston" />
          <LinksFooter />
          <TermsFooter />
        </footer>
      );
    case 'houston':
      return (
        <footer aria-labelledby="footerHeading">
          <Section type="none">
            <div className="relative flex flex-col place-content-center place-items-center">
              <div className="absolute inset-0">
                <GatsbyImage
                  image={imgFormBg}
                  className="w-full h-full object-cover"
                  alt="Contact our recruiting agency, All-Star Connections today to find new hires"
                  loading="eager"
                />
                <div
                  className="absolute inset-0 bg-coolGray-600"
                  style={{ mixBlendMode: 'multiply' }}
                  aria-hidden="true"
                />
              </div>
              <FadeIn classes="z-10 px-3 lg:px-0 py-24">
                <FormFooter />
              </FadeIn>
            </div>
          </Section>
          <MapFooter type="houston" />
          <LinksFooter />
          <TermsFooter />
        </footer>
      );
    case 'san diego':
      return (
        <footer aria-labelledby="footerHeading">
          <Section type="none">
            <div className="relative flex flex-col place-content-center place-items-center">
              <div className="absolute inset-0">
                <GatsbyImage
                  image={imgFormBg}
                  className="w-full h-full object-cover"
                  alt="Contact our recruiting agency, All-Star Connections today to find new hires"
                  loading="eager"
                />
                <div
                  className="absolute inset-0 bg-coolGray-600"
                  style={{ mixBlendMode: 'multiply' }}
                  aria-hidden="true"
                />
              </div>
              <FadeIn classes="z-10 px-3 lg:px-0 py-24">
                <FormFooter />
              </FadeIn>
            </div>
          </Section>
          <MapFooter type="san diego" />
          <LinksFooter />
          <TermsFooter />
        </footer>
      );
  }
};

export default Footer;
