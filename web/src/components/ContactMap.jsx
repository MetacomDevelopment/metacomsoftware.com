import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/FontAwesomeIconLibrary';

import {
  Section,
  Container,
  Grid,
  Row,
  Col,
  Flex,
  FadeIn,
  SanityBlockContent,
  AnchorText,
} from '.';
import { useSanity } from '../hooks';

const StyledContactLinks = styled.a`
  & i {
    color: ${(props) => props.$iconColor};
    transition: all 0.25s;
    &:hover {
      color: ${(props) => props.$iconColorHover};
      transition: all 0.25s;
    }
  }
  & span {
    color: ${(props) => props.$textColor};
    transition: all 0.25s;
    &:hover {
      color: ${(props) => props.$textColorHover};
      transition: all 0.25s;
    }
  }
`;

const ContactMap = function ({ block, raw, index, contact, socialLinks }) {
  const { primary, secondary, accent, neutral, hero, info } = useSanity();

  const nap = [
    {
      id: 1,
      icon: 'fas fa-phone',
      anchor: info.phone,
      url: info.phoneUrl,
    },
    {
      id: 2,
      icon: 'fas fa-envelope',
      anchor: info.emailAddress,
      url: info.emailUrl,
    },
    {
      id: 3,
      icon: 'fas fa-map-marker-alt',
      anchor: info.address,
      url: info.addressUrl,
    },
    {
      id: 4,
      icon: 'fas fa-clock',
      anchor: info.hours,
      url: info.hoursUrl,
    },
  ];

  return (
    <Section
      type="my"
      bgColor={neutral.lighter.color}
      h2Color={accent.default.color}
    >
      <Container classes="space-y-24">
        <Grid classes="lg:grid-cols-1 gap-x-12 gap-y-32">
          {contact.map((item) => (
            <Col key={item._key} classes="relative bg-white shadow-xl">
              <h2 className="sr-only">{item.headline}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden py-10 px-6 bg-zinc-700 sm:px-10 xl:p-12">
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <FadeIn>
                    <h2 className="text-3xl lg:text-4xl font-bold">
                      {item.headline}
                    </h2>
                    <div className="mt-6 text-base text-white max-w-3xl">
                      <SanityBlockContent blocks={item._rawDescription} />
                    </div>
                    <ul className="mt-10 space-y-4">
                      {nap.map((contact) => (
                        <li key={contact.id}>
                          <StyledContactLinks
                            $iconColor={accent.default.color}
                            $iconColorHover={accent.light.color}
                            $textColor={neutral.white.color}
                            $textColorHover={accent.light.color}
                            href={contact.url}
                            target="_blank"
                            rel="noopener"
                          >
                            <i className={`${contact.icon} mr-3`} />
                            <span className="text-lg">{contact.anchor}</span>
                          </StyledContactLinks>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-12 flex space-x-6">
                      {socialLinks.map((social) => (
                        <li key={social._id}>
                          <AnchorText
                            type="external"
                            color={neutral.light.color}
                            colorHover={accent.light.color}
                            href={social.url}
                          >
                            <span className="sr-only">{social.anchor}</span>
                            <FontAwesomeIcon
                              className="!text-3xl"
                              icon={['fab', social.icon]}
                            />
                          </AnchorText>
                        </li>
                      ))}
                    </ul>
                  </FadeIn>
                </div>
                {item.gmb.map((gmb) => (
                  <div key={gmb._id}>
                    <iframe
                      title={`Google Map of ${gmb.name}`}
                      src={gmb.gmbEmbed}
                      width="100%"
                      height="100%"
                      className="w-full h-full"
                      allowFullScreen=""
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </Col>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default ContactMap;
