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
            <a
              href="https://www.google.com/maps/place/1544+W+23rd+St,+Houston,+TX+77008/@29.8065431,-95.4296898,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c70523ab679f:0xb5ac230d9ab01f4f!8m2!3d29.8065431!4d-95.4275011"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fas fa-map-marker-alt mr-3 text-accent hover:text-gray-50" />
              <span
                className={`${settings.textColor} ${settings.textColorHover} ${settings.textSize} ${settings.textWeight}`}
              >
                Houston, TX
              </span>
            </a>
          </div>
          <div className="flex my-auto px-6">
            <a
              href="https://www.google.com/maps/place/3093+C+St+%231,+San+Diego,+CA+92102/@32.7165796,-117.1298589,17z/data=!3m1!4b1!4m5!3m4!1s0x80d95378b9eec2af:0xfb3c142aff5ead4e!8m2!3d32.7165796!4d-117.1276702"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fas fa-map-marker-alt mr-3 text-accent hover:text-gray-50" />
              <span
                className={`${settings.textColor} ${settings.textColorHover} ${settings.textSize} ${settings.textWeight}`}
              >
                San Diego, CA
              </span>
            </a>
          </div>
          <div className="flex my-auto px-6">
            <a href={socials.gmbCid} target="_blank" rel="noreferrer noopener">
              <i className="fas fa-map-marker-alt mr-3 text-accent hover:text-gray-50" />
              <span
                className={`${settings.textColor} ${settings.textColorHover} ${settings.textSize} ${settings.textWeight}`}
              >
                Boston, MA
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
          <div className="flex my-auto px-6">
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
          </div>

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
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSecondary;
