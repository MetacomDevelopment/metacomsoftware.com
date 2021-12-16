import React from 'react';
import styled from 'styled-components';

import { AnchorText, Section, Container, Flex } from '.';
import { useSanity } from '../hooks';

const StyledCustomAnchorText = styled.a`
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

const NavbarSecondary = function () {
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
    <Section
      padding="none"
      classes="hidden lg:block z-50 w-full"
      bgColor={primary.darker.color}
    >
      <Container padding="sm" classes="max-w-7xl px-4">
        <Flex classes="justify-end align-items-center h-12">
          {navbars.map((item) =>
            item.contactLinks.map((contact) => (
              <Flex key={contact.id} classes="my-auto px-6">
                <StyledCustomAnchorText
                  $iconColor={accent.default.color}
                  $iconColorHover={accent.light.color}
                  $textColor={neutral.white.color}
                  $textColorHover={accent.light.color}
                  href={contact.url}
                  target="_blank"
                  rel="noopener"
                >
                  <i className={`${contact.icon} mr-3`} />
                  <span className="text-md font-thin">{contact.anchor}</span>
                </StyledCustomAnchorText>
              </Flex>
            ))
          )}
          {navbars.map((item) =>
            item.socialLinks.map((social) => (
              <Flex key={social.id} classes="my-auto pl-3">
                <StyledCustomAnchorText
                  $iconColor={accent.default.color}
                  $iconColorHover={accent.light.color}
                  $textColor={neutral.white.color}
                  $textColorHover={accent.light.color}
                  href={social.url}
                  target="_blank"
                  rel="noopener"
                >
                  <i className={`text-2xl ${social.icon}`} />
                  <span className="text-md font-thin sr-only">
                    {social.anchor}
                  </span>
                </StyledCustomAnchorText>
              </Flex>
            ))
          )}
        </Flex>
      </Container>
    </Section>
  );
};

export default NavbarSecondary;
