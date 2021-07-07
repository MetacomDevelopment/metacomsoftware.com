import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const settings = {
  bg: 'bg-primary',
  textColor: 'text-white',
  textColorHover: 'hover:text-accent',
  textSize: 'text-md',
  textWeight: 'font-thin',
};

const NavbarSecondary = () => {
  const data = useStaticQuery(graphql`
    query NavbarSecondaryQ {
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
    }
  `);

  const company = data.sanitySettingsCompany;
  const socials = data.sanitySettingsSocials;

  return (
    <nav className={`hidden lg:block ${settings.bg} z-50 w-full`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end align-items-center h-12">
          <div className="flex my-auto px-6">
            <a href={socials.gmbCid} target="_blank" rel="noreferrer noopener">
              <i className="fas fa-map-marker-alt mr-3 text-accent hover:text-gray-50" />
              <span
                className={`${settings.textColor} ${settings.textColorHover} ${settings.textSize} ${settings.textWeight}`}
              >
                {company.address}
              </span>
            </a>
          </div>
          <div className="flex my-auto px-6">
            <a
              href={company.emailHref}
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fas fa-envelope mr-3 text-accent hover:text-gray-50" />
              <span
                className={`${settings.textColor} ${settings.textColorHover} ${settings.textSize} ${settings.textWeight}`}
              >
                {company.email}
              </span>
            </a>
          </div>
          {/* <div className="flex my-auto px-6">
            <a
              href={company.phoneHref}
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fas fa-phone mr-3 text-accent hover:text-gray-50" />
              <span
                className={`${settings.textColor} ${settings.textColorHover} ${settings.textSize} ${settings.textWeight}`}
              >
                {company.phone}
              </span>
            </a>
          </div> */}

          <div className="flex my-auto pl-6">
            <a
              href={socials.facebook}
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab text-2xl fa-facebook mr-3 text-accent hover:text-gray-50" />
              <span
                className={`${settings.textColor} ${settings.textColorHover} ${settings.textSize} ${settings.textWeight} sr-only`}
              >
                Facebook
              </span>
            </a>
          </div>

          <div className="flex my-auto">
            <a href={socials.twitter} target="_blank" rel="noreferrer noopener">
              <i className="fab text-2xl fa-twitter mr-3 text-accent hover:text-gray-50" />
              <span
                className={`${settings.textColor} ${settings.textColorHover} ${settings.textSize} ${settings.textWeight} sr-only`}
              >
                Twitter
              </span>
            </a>
          </div>

          <div className="flex my-auto">
            <a
              href={socials.linkedIn}
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab text-2xl fa-linkedin mr-3 text-accent hover:text-gray-50" />
              <span
                className={`${settings.textColor} ${settings.textColorHover} ${settings.textSize} ${settings.textWeight} sr-only`}
              >
                LinedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSecondary;
