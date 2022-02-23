import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/FontAwesomeIconLibrary';

import { Section, Container, Flex, Grid, Col, AnchorText } from '.';
import { useSanity } from '../hooks';

const FooterLinks = () => {
  const {
    logo,
    footers,
    siteSEO,
    primary,
    secondary,
    accent,
    neutral,
    hero,
    info,
    page,
  } = useSanity();

  const nap = [
    {
      icon: 'fas fa-phone',
      anchor: info.phone,
      url: info.phoneUrl,
    },
    {
      icon: 'fas fa-envelope',
      anchor: info.emailAddress,
      url: info.emailUrl,
    },
    {
      icon: 'fas fa-map-marker-alt',
      anchor: info.address,
      url: info.addressUrl,
    },
    {
      icon: 'fas fa-clock',
      anchor: info.hours,
      url: info.hoursUrl,
    },
  ];

  const contact = [
    {
      id: 1,
      anchor: info.phone,
      url: info.phoneUrl,
    },
    {
      id: 2,
      anchor: info.emailAddress,
      url: info.emailUrl,
    },
    {
      id: 3,
      anchor: info.address,
      url: info.addressUrl,
    },
    {
      id: 4,
      day: `Monday`,
      anchor: info.hoursMon,
      url: info.hoursUrl,
    },
    {
      id: 5,
      day: `Tuesday`,
      anchor: info.hoursTue,
      url: info.hoursUrl,
    },
    {
      id: 6,
      day: `Wednesday`,
      anchor: info.hoursWed,
      url: info.hoursUrl,
    },
    {
      id: 7,
      day: `Thursday`,
      anchor: info.hoursThu,
      url: info.hoursUrl,
    },
    {
      id: 8,
      day: `Friday`,
      anchor: info.hoursFri,
      url: info.hoursUrl,
    },
    {
      id: 9,
      day: `Saturday`,
      anchor: info.hoursSat,
      url: info.hoursUrl,
    },
    {
      id: 10,
      day: `Sunday`,
      anchor: info.hoursSun,
      url: info.hoursUrl,
    },
  ];

  return (
    <Section padding="sm" bgColor={neutral.lighter.color}>
      <Container padding="sm" classes="py-12 lg:py-16">
        <Grid classes="lg:grid-cols-3 gap-12">
          <Col classes="lg:col-span-1 space-y-6 flex flex-col justify-self-center lg:justify-self-start">
            <div className="mx-auto text-center">
              <GatsbyImage
                image={logo.footer?.asset?.gatsbyImageData}
                alt={`${info.name} company logo`}
                loading="lazy"
                className="w-56 transition hover:scale-110"
              />
            </div>
            {footers.map((footer) => (
              <p
                key={footer.tagline}
                className="text-primary text-base text-center italic max-w-xs mx-auto gap"
              >
                {footer.tagline}
              </p>
            ))}
            <div className="flex space-x-6 justify-center">
              {footers.map((item) =>
                item.socialLinks.map((social) => (
                  <AnchorText
                    type="external"
                    color={accent.default.color}
                    colorHover={primary.dark.color}
                    key={social.url}
                    href={social.url}
                  >
                    <FontAwesomeIcon
                      className="!text-3xl"
                      icon={['fab', social.icon]}
                    />
                    <span className="text-md font-thin sr-only">
                      {social.anchor}
                    </span>
                  </AnchorText>
                ))
              )}
            </div>
          </Col>
          <Col classes="lg:col-span-2 space-y-6">
            <Grid classes="grid-cols-1 lg:grid-cols-3 gap-12 justify-self-left">
              <Col classes="">
                <h4 className="text-md font-semibold text-zinc-800 tracking-tight uppercase">
                  Our Company
                </h4>
                <ul className="mt-4 space-y-4">
                  {page.map((link) =>
                    link.pageType === 'brand' && link.addToFooter ? (
                      <li key={link.slug.current}>
                        <AnchorText
                          type="internal"
                          color={neutral.default.color}
                          colorHover={accent.default.color}
                          to={link.slug.current}
                          className="text-base break-words"
                        >
                          <span className="break-words">{link.anchor}</span>
                        </AnchorText>
                      </li>
                    ) : null
                  )}
                </ul>
              </Col>
              <Col classes="">
                <h4 className="text-md font-semibold text-zinc-800 tracking-tight uppercase">
                  Our Services
                </h4>
                <ul className="mt-4 space-y-4">
                  {page.map((link) =>
                    link.pageType === 'service' && link.addToFooter ? (
                      <li key={link.slug.current}>
                        <AnchorText
                          type="internal"
                          color={neutral.default.color}
                          colorHover={accent.default.color}
                          to={link.slug.current}
                          className="text-base break-words"
                        >
                          <span className="break-words">{link.anchor}</span>
                        </AnchorText>
                      </li>
                    ) : null
                  )}
                </ul>
              </Col>
              <Col classes="">
                <h4 className="text-md font-semibold text-zinc-800 tracking-tight uppercase">
                  Get In Touch
                </h4>
                <ul className="mt-4">
                  {contact.map((item) => (
                    <li
                      key={item.id}
                      className={item.id >= 5 ? 'pb-0' : 'pt-4 first:pt-0'}
                    >
                      <AnchorText
                        type="external"
                        color={neutral.default.color}
                        colorHover={accent.default.color}
                        href={item.url}
                        className="text-base break-words"
                      >
                        {item.id >= 4 ? (
                          <span className="break-words">
                            <span className="font-medium">{item.day}</span>:{' '}
                            {item.anchor}
                          </span>
                        ) : (
                          <span className="break-words">{item.anchor}</span>
                        )}
                      </AnchorText>
                    </li>
                  ))}
                </ul>
              </Col>
            </Grid>
          </Col>
        </Grid>
      </Container>
    </Section>
  );
};

export default FooterLinks;
