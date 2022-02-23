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

const NavbarPrimaryLogo = () => {
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
    <div className="flex justify-start content-center items-center">
      <Link
        to="/"
        className="h-24 flex justify-start content-center items-center"
      >
        <GatsbyImage
          image={logo.navbar?.asset?.gatsbyImageData}
          alt={`${info?.name} company logo`}
          loading="eager"
          className="transition hover:scale-110 flex justify-start content-center items-center"
        />
      </Link>
    </div>
  );
};

export default NavbarPrimaryLogo;
