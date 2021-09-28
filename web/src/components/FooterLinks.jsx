import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { Section, Flex, AnchorText } from '.';
import { useSanity } from '../hooks';

const settings = {
  linkColor: 'text-primary',
  linkColorHover: 'hover:text-accent',
  footerBgColor: 'bg-gray-50',
};

const text = {
  logoSubText: 'Engineering Recruitment Consultants',
};

const LinkFooter = () => {
  const data = useStaticQuery(graphql`
    query LinkFooterQ {
      logo: file(
        relativePath: {
          eq: "assets/graphics/all-star-connections-job-recruiting-agency-logo.png"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const { footers, website, primary, secondary, accent, neutral, hero } =
    useSanity();

  const imgLogo = data.logo.childImageSharp.gatsbyImageData;

  return (
    <Section padding="sm" bgColor={neutral.lighter.color}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <Flex classes="justify-around flex-col lg:flex-row">
          <div className="space-y-6">
            <GatsbyImage
              image={imgLogo}
              className="w-56 mx-auto"
              alt={`${website.name} logo`}
            />
            {footers.map((footer) => (
              <p
                key={footer.id}
                className="text-primary text-base text-center italic"
              >
                {footer.tagline}
              </p>
            ))}
            <div className="flex space-x-6 justify-center">
              {footers.map((item) =>
                item.socialLinks.map((social) => (
                  <AnchorText
                    type="external"
                    color={primary.dark.color}
                    colorHover={accent.default.color}
                    key={social.id}
                    href={social.url}
                    rel="noreferrer noopener"
                  >
                    <i className={`${social.icon} fa-2x`} />
                    <span className="text-md font-thin sr-only">
                      {social.anchor}
                    </span>
                  </AnchorText>
                ))
              )}
            </div>
          </div>
          <Flex classes="justify-between grid grid-cols-2 lg:grid-flow-col flex-col lg:flex-row gap-12">
            {footers.map((footer) =>
              footer.footerItem.map((item) => (
                <div key={item._key} className="mt-12 xl:mt-0">
                  <h4 className="text-md font-semibold text-gray-800 tracking-tight uppercase">
                    {item.headline}
                  </h4>
                  <ul className="mt-4 space-y-4">
                    {item.links.map((link) => (
                      <li key={link.id}>
                        <AnchorText
                          type="internal"
                          color={primary.dark.color}
                          colorHover={accent.default.color}
                          to={
                            link.metadata.slug.current === 'home'
                              ? '/'
                              : `/${link.metadata.slug.current}/`
                          }
                          className="text-base break-normal"
                        >
                          {link.anchor}
                        </AnchorText>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
            <div className="mt-12 xl:mt-0">
              <h4 className="text-md font-semibold text-gray-800 tracking-wider uppercase">
                Get In Touch
              </h4>
              <ul className="mt-4 space-y-4">
                {footers.map((item) =>
                  item.contactLinks.map((contact) => (
                    <li key={contact.id}>
                      <AnchorText
                        type="external"
                        color={primary.dark.color}
                        colorHover={accent.default.color}
                        href={contact.url}
                        rel="noreferrer noopener"
                        target="_blank"
                        className="text-base break-all"
                      >
                        {contact.anchor}
                      </AnchorText>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </Flex>
        </Flex>
      </div>
    </Section>
  );
};

export default LinkFooter;
