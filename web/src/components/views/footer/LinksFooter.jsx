import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

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
      sanitySettingsCompany {
        address
        cityState
        email
        emailHref
        hours
        name
        owner
        phone
        phoneHref
        street
        zip
      }
      sanitySettingsSocials {
        youTube
        twitter
        linkedIn
        instagram
        gmbShare
        gmbEmbed
        gmbCid
        facebook
      }
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

  const company = data.sanitySettingsCompany;
  const socials = data.sanitySettingsSocials;
  const imgLogo = data.logo.childImageSharp.gatsbyImageData;

  const headlines = {
    col1: 'Company',
    col2: 'Locations',
    col3: 'Industries',
    col4: 'Get In Touch',
  };

  const links = {
    col1: [
      {
        label: 'About Us',
        link: '/about/',
      },
      {
        label: 'Testimonials',
        link: '/testimonials/',
      },
      {
        label: 'Locations',
        link: '/about/',
      },
      {
        label: 'Blog',
        link: '/blog/',
      },
      {
        label: 'Find Us Online',
        link: '/find-us-online/',
      },
    ],
    col2: [
      {
        label: 'Boston, MA',
        link: '/boston-ma/',
      },
      {
        label: 'Houston, TX',
        link: '/houston-tx/',
      },
      {
        label: 'San Diego, CA',
        link: '/san-diego-ca/',
      },
    ],
    col3: [
      {
        label: 'Medical Device & Biotechnology',
        link: '/medical-device-biotechnology/',
      },
      {
        label: 'Information Technology',
        link: '/it-technology/',
      },
      {
        label: 'Civil & Structural Engineering',
        link: '/civil-structural-engineering/',
      },
      {
        label: 'Manufacturing',
        link: '/manufacturing/',
      },
    ],
    col4: [
      {
        label: `${company.phone}`,
        link: `${company.phoneHref}`,
      },
      {
        label: `${company.email}`,
        link: `${company.emailHref}`,
      },
      {
        label: `${company.hours}`,
        link: `${socials.gmbCid}`,
      },
    ],
  };

  const socialLinks = {
    facebook: `${socials.facebook}`,
    instagram: `${socials.instagram}`,
    twitter: `${socials.twitter}`,
    youtube: `${socials.youTube}`,
    linkedIn: `${socials.linkedIn}`,
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          <div className="space-y-6 xl:col-span-1">
            <GatsbyImage
              image={imgLogo}
              className="w-56 mx-auto"
              alt={`${company.name} logo`}
            />
            <p className="text-primary text-base text-center italic">
              {text.logoSubText}
            </p>
            <div className="flex space-x-6 justify-center">
              <a
                href={socialLinks.facebook}
                rel="noreferrer noopener"
                className="text-primary hover:text-accent"
              >
                <span className="sr-only">Facebook</span>
                <i className="fab fa-2x fa-facebook" />
              </a>
              <a
                href={socialLinks.instagram}
                rel="noreferrer noopener"
                className="text-primary hover:text-accent"
              >
                <span className="sr-only">Instagram</span>
                <i className="fab fa-2x fa-instagram" />
              </a>
              <a
                href={socialLinks.twitter}
                rel="noreferrer noopener"
                className="text-primary hover:text-accent"
              >
                <span className="sr-only">Twitter</span>
                <i className="fab fa-2x fa-twitter" />
              </a>
              <a
                href={socialLinks.youtube}
                rel="noreferrer noopener"
                className="text-primary hover:text-accent"
              >
                <span className="sr-only">YouTube</span>
                <i className="fab fa-2x fa-youtube" />
              </a>
              <a
                href={socialLinks.linkedIn}
                rel="noreferrer noopener"
                className="text-primary hover:text-accent"
              >
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-2x fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-md font-semibold text-gray-800 tracking-tight uppercase">
                  {headlines.col1}
                </h4>
                <ul className="mt-4 space-y-4">
                  {links.col1.map((link) => (
                    <li>
                      <Link
                        to={link.link}
                        className={`text-base break-normal ${settings.linkColor} ${settings.linkColorHover}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-md font-semibold text-gray-800 tracking-wider uppercase">
                  {headlines.col2}
                </h4>
                <ul className="mt-4 space-y-4">
                  {links.col2.map((link) => (
                    <li>
                      <Link
                        to={link.link}
                        className={`text-base break-normal ${settings.linkColor} ${settings.linkColorHover}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-md font-semibold text-gray-800 tracking-wider uppercase">
                  {headlines.col3}
                </h4>
                <ul className="mt-4 space-y-4">
                  {links.col3.map((link) => (
                    <li>
                      <Link
                        to={link.link}
                        className={`text-base break-normal ${settings.linkColor} ${settings.linkColorHover}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-md font-semibold text-gray-800 tracking-wider uppercase">
                  {headlines.col4}
                </h4>
                <ul className="mt-4 space-y-4">
                  {links.col4.map((link) => (
                    <li>
                      <a
                        href={link.link}
                        rel="noreferrer noopener"
                        target="_blank"
                        className={`text-base break-normal ${settings.linkColor} ${settings.linkColorHover}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkFooter;
