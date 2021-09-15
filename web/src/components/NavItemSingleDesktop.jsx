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

import { Button, Col, Grid, Row } from '.';
import { useSanity } from '../hooks';

const StyledNavItemSingleDesktop = styled.nav`
  background-color: ${(props) => props.bgColor};
`;

const StyledNavLink = styled((props) => <Link {...props} />)`
  cursor: pointer;
  transition: all 0.25s;
  &:hover {
    color: ${(props) => props.colorHover};
    transition: all 0.25s;
  }
  &.active,
  &:active,
  &:focus {
    color: ${(props) => props.colorActive};
    transition: all 0.25s;
    font-weight: bold;
    &:hover {
      color: ${(props) => props.colorHover};
      transition: all 0.25s;
    }
  }
`;

const settings = {
  bg: 'bg-gray-50',
  textColor: 'text-gray-800',
  textColorHover: 'hover:text-accent',
  textColorActive: 'text-primary',
  textColorActiveHover: 'hover:text-primary',
  textSize: 'text-lg',
  textSizeMobile: 'text-lg',
  textWeight: 'font-medium',
  btnLink: '/contact-us/',
};

const dryClasses = {
  navItem: `border-transparent ${settings.textColor} ${settings.textColorHover} inline-flex items-center px-1 pt-1 ${settings.textSize} ${settings.textWeight}`,

  navItemMobile: `border-transparent text-xl ${settings.textColor} ${settings.textColorHover} inline-flex items-center px-1 pt-4 pb-4 ${settings.textSizeMobile} ${settings.textWeight}`,

  activeNavItem: `border-transparent ${settings.textColorActive} ${settings.textColorActiveHover} inline-flex items-center px-1 pt-1 ${settings.textSize} font-bold`,

  activeNavItemMobile: `border-transparent ${settings.textColor} ${settings.textColorHover} inline-flex items-center px-1 pt-1 ${settings.textSize} font-bold`,
};

const NavItemSingleDesktop = () => {
  const { website, logo, navbars, primary, secondary, accent, neutral, hero } =
    useSanity();

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
    // <StyledNavItemSingleDesktop textColorHover={accent.default.color}>
    itemType.pageLinks.map((page) => (
      <StyledNavLink
        key={page.id}
        to={`/${page.metadata.slug.current}/`}
        colorHover={accent.default.color}
        colorActive={primary.default.color}
        className="border-transparent inline-flex items-center px-2 pt-1 text-gray-800 text-lg font-semibold"
        activeClassName="active"
      >
        {page.anchor}
      </StyledNavLink>
    ))
    // </StyledNavItemSingleDesktop>
  );
};

export default NavItemSingleDesktop;
