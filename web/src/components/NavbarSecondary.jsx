import React from 'react';
import styled from 'styled-components';

import { useSanity } from '../hooks';

const StyledNavbarSecondary = styled.nav`
  background-color: ${(props) => props.bgColor};
  & i {
    color: ${(props) => props.iconColor};
    transition: all 0.25s;
    &:hover {
      color: ${(props) => props.iconColorHover};
      transition: all 0.25s;
    }
  }
  & span {
    color: #fff;
    transition: all 0.25s;
    &:hover {
      color: ${(props) => props.textColorHover};
      transition: all 0.25s;
    }
  }
`;

const NavbarSecondary = () => {
  const {
    navbars,
    navContacts,
    navSocials,
    primary,
    secondary,
    accent,
    neutral,
    hero,
  } = useSanity();

  return (
    <StyledNavbarSecondary
      className="hidden lg:block z-50 w-full"
      bgColor={primary.darker.color}
      iconColor={accent.default.color}
      iconColorHover={accent.light.color}
      textColorHover={accent.light.color}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end align-items-center h-12">
          {navbars.map((item) =>
            item.contactLinks.map((contact) => (
              <div key={contact.id} className="flex my-auto px-6">
                <a href={contact.url} target="_blank" rel="noreferrer noopener">
                  <i className={`${contact.icon} mr-3`} />
                  <span className="text-md font-thin">{contact.anchor}</span>
                </a>
              </div>
            ))
          )}
          {navbars.map((item) =>
            item.socialLinks.map((social) => (
              <div key={social.id} className="flex my-auto pl-3">
                <a href={social.url} target="_blank" rel="noreferrer noopener">
                  <i className={`text-2xl ${social.icon}`} />
                  <span className="text-md font-thin sr-only">
                    {social.anchor}
                  </span>
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </StyledNavbarSecondary>
  );
};

export default NavbarSecondary;
