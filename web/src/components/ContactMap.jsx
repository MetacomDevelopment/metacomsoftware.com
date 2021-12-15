import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import {
  Section,
  Container,
  Grid,
  Row,
  Col,
  Flex,
  SanityBlockContent,
  AnchorText,
} from '.';
import { useSanity } from '../hooks';

const StyledServices = styled((props) => <Link {...props} />)`
  background-color: ${(props) => props.$bgColor};
  &:hover {
    background-color: ${(props) => props.$bgColorHover};
  }
`;

const StyledCol = styled((props) => <Col {...props} />)`
  order: ${(props) => props.$classes};
`;

const StyledHeadline = styled.span`
  color: #fff !important;
  &:hover {
    color: #ggg !important;
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
  color: ${(props) => props.$color} !important;
  &:hover {
    color: ${(props) => props.$colorHover} !important;
  }
`;

const ContactMap = ({
  block,
  raw,
  rawMetadata,
  index,
  contact,
  socialLinks,
}) => {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  return (
    <Section
      type="my"
      bgColor={neutral.lighter.color}
      h2Color={neutral.lighter.color}
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
                  <h2 className="text-3xl lg:text-4xl font-bold text-accent">
                    {item.headline}
                  </h2>
                  <div className="mt-6 text-base text-indigo-50 max-w-3xl">
                    <SanityBlockContent blocks={item._rawDescription} />
                  </div>
                  {item.gmb.map((gmb) => (
                    <div key={gmb._id}>
                      <dl className="mt-8 space-y-6">
                        <dt>
                          <span className="sr-only">Phone number</span>
                        </dt>
                        <dd className="flex text-base text-yellow-100">
                          <div className="flex my-auto">
                            <AnchorText
                              type="external"
                              color={accent.default.color}
                              colorHover={accent.light.color}
                              href={gmb.phoneUrl}
                              classes="flex"
                            >
                              <i className="fas fa-2x fa-phone mr-4 text-yellow-500 hover:text-yellow-400" />
                              <span className="text-yellow-100 hover:text-yellow-600 text-lg">
                                {gmb.phone}
                              </span>
                            </AnchorText>
                          </div>
                        </dd>
                        <dt>
                          <span className="sr-only">Email</span>
                        </dt>
                        <dd className="flex text-base">
                          <div className="flex my-auto">
                            <AnchorText
                              type="external"
                              color={accent.default.color}
                              colorHover={accent.light.color}
                              href={gmb.emailUrl}
                              classes="flex"
                            >
                              <i className="fas fa-2x fa-envelope mr-4 text-yellow-500 hover:text-yellow-400" />
                              <span className="text-yellow-100 hover:text-yellow-600 text-lg break-all">
                                {gmb.emailAddress}
                              </span>
                            </AnchorText>
                          </div>
                        </dd>
                        <dt>
                          <span className="sr-only">Address</span>
                        </dt>
                        <dd className="flex text-base text-yellow-100">
                          <div className="flex my-auto">
                            <AnchorText
                              type="external"
                              color={accent.default.color}
                              colorHover={accent.light.color}
                              href={gmb.gmbCid}
                              className="flex"
                            >
                              <i className="fas fa-2x fa-map-marker-alt mr-4 text-yellow-500 hover:text-yellow-400" />
                              <span className="text-yellow-100 hover:text-yellow-600 text-lg ml-2">
                                {gmb.address}
                              </span>
                            </AnchorText>
                          </div>
                        </dd>
                        <dt>
                          <span className="sr-only">Website</span>
                        </dt>
                        <dd className="flex text-base text-yellow-100">
                          <div className="flex my-auto">
                            <AnchorText
                              type="internal"
                              color={accent.default.color}
                              colorHover={accent.light.color}
                              to={
                                gmb.website.metadata.slug.current === 'home'
                                  ? '/'
                                  : `/${gmb.website.metadata.slug.current}/`
                              }
                              classes="flex"
                            >
                              <i className="fas fa-2x fa-globe mr-3 text-yellow-500 hover:text-yellow-400" />
                              <span className="text-yellow-100 hover:text-yellow-600 text-lg ml-2">
                                {gmb.name}
                              </span>
                            </AnchorText>
                          </div>
                        </dd>
                      </dl>
                    </div>
                  ))}
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
                          <i className={`${social.icon} fa-2x`} />
                        </AnchorText>
                      </li>
                    ))}
                    {/* <li>
                      <a
                        href="#"
                        rel="noopener"
                        className="text-zinc-400 hover:text-zinc-500"
                      >
                        <span className="sr-only">Instagram</span>
                        <i className="fab fa-2x fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        rel="noopener"
                        className="text-zinc-400 hover:text-zinc-500"
                      >
                        <span className="sr-only">Twitter</span>
                        <i className="fab fa-2x fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        rel="noopener"
                        className="text-zinc-400 hover:text-zinc-500"
                      >
                        <span className="sr-only">YouTube</span>
                        <i className="fab fa-2x fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        rel="noopener"
                        className="text-zinc-400 hover:text-zinc-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <i className="fab fa-2x fa-linkedin" />
                      </a>
                    </li> */}
                  </ul>
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
