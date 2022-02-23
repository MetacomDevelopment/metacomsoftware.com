/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { Disclosure, Popover, Transition } from '@headlessui/react';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';

import { Button, Col, Container, Grid, Row, AnchorText, Section } from '.';
import { useSanity } from '../hooks';

const StyledMobileNavCtaBg = styled.div`
  background-color: ${(props) => props.$bgColor};
`;

const StyledDisclosureButton = styled((props) => (
  <Disclosure.Button {...props} />
))`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgColor};
  &:hover {
    color: ${(props) => props.$colorHover};
    background-color: ${(props) => props.$bgColorHover};
  }
`;

const StyledXIcon = styled((props) => <XIcon {...props} />)`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgColor};
  &:hover {
    color: ${(props) => props.$colorHover};
    background-color: ${(props) => props.$bgColorHover};
  }
`;

const StyledMenuIcon = styled((props) => <MenuIcon {...props} />)`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgColor};
  &:hover {
    color: ${(props) => props.$colorHover};
    background-color: ${(props) => props.$bgColorHover};
  }
`;

const StyledDropdownLabelText = styled.span`
  color: ${(props) => props.$color};
  cursor: pointer;
  transition: all 0.25s;
  font-weight: ${(props) => props.$weight};
  font-size: ${(props) => props.$size};
  line-height: ${(props) => props.$lineHeight};
  &:hover,
  &:focus,
  &:active {
    color: ${(props) => props.$colorHover};
    transition: all 0.25s;
    font-weight: ${(props) => props.$weightHover};
    font-size: ${(props) => props.$sizeHover};
    line-height: ${(props) => props.$lineHeightHover};
  }
`;

const StyledDropdownLabelChevron = styled.svg`
  color: ${(props) => props.$color};
  cursor: pointer;
  transition: all 0.25s;
  font-weight: ${(props) => props.$weight};
  font-size: ${(props) => props.$size};
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  line-height: ${(props) => props.$lineHeight};
  margin-left: ${(props) => props.$marginLeft};
  &:hover,
  &:focus,
  &:active {
    color: ${(props) => props.$colorHover};
    transition: all 0.25s;
    font-weight: ${(props) => props.$weightHover};
    font-size: ${(props) => props.$sizeHover};
    line-height: ${(props) => props.$lineHeightHover};
  }
`;

const NavbarPrimaryMobileIcon = () => {
  const {
    settings,
    logo,
    navbars,
    primary,
    secondary,
    accent,
    neutral,
    hero,
    info,
  } = useSanity();

  const nap = [
    {
      icon: 'fas fa-map-marker-alt',
      anchor: info.address,
      url: info.addressUrl,
    },
    {
      icon: 'fas fa-envelope',
      anchor: info.emailAddress,
      url: info.emailUrl,
    },
    {
      icon: 'fas fa-phone',
      anchor: info.phone,
      url: info.phoneUrl,
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0,
      },
    },
  };

  return (
    <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
      {/* Mobile menu button */}
      <StyledDisclosureButton
        $color={primary.dark.color}
        $colorHover={primary.dark.color}
        $bgColor={neutral.white.color}
        $bgColorHover={neutral.white.color}
        className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      >
        <span className="sr-only">Open main menu</span>
        {open ? (
          <StyledXIcon
            $color={primary.dark.color}
            $colorHover={primary.dark.color}
            $bgColor={neutral.white.color}
            $bgColorHover={neutral.white.color}
            className="block h-10 w-10"
            aria-hidden="true"
          />
        ) : (
          <StyledMenuIcon
            $color={primary.dark.color}
            $colorHover={primary.dark.color}
            $bgColor={neutral.white.color}
            $bgColorHover={neutral.white.color}
            className="block h-10 w-10"
            aria-hidden="true"
          />
        )}
      </StyledDisclosureButton>
    </div>
  );
};

export default NavbarPrimaryMobileIcon;
