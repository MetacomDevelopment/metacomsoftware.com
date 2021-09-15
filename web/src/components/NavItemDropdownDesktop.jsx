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

const StyledNavItemDropdownDesktop = styled.nav`
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

const NavItemDropdownDesktop = () => {
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

  return itemType.dropdowns.map((dropdown) => (
    <Popover className="z-0 relative">
      {({ open }) => (
        <div>
          <div className="relative z-10">
            <div className="max-w-7xl flex mt-1">
              <Popover.Button
                className={classNames(
                  open ? 'text-primary' : 'text-gray-800',
                  `${dryClasses.navItem} focus:outline-none`
                )}
              >
                <span>{dropdown.label}</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? 'text-primary' : 'text-gray-800',
                    'ml-2 h-5 w-5 group-hover:text-accent'
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
          </div>
          <Transition
            show={open}
            as="div"
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel
              static
              className="absolute mx-auto z-10 inset-x-0 transform shadow-2xl rounded-2xl w-max"
            >
              <div className="bg-white">
                <div className="max-w-max mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-1 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-1 lg:px-8 lg:py-8 xl:py-8">
                  {dropdown.links.map((link) => (
                    <StyledNavLink
                      key={link.id}
                      to={`/${link.metadata.slug.current}/`}
                      colorHover={accent.default.color}
                      colorActive={primary.default.color}
                      className="border-transparent inline-flex items-center px-2 pt-1 text-gray-800 text-lg font-semibold"
                      activeClassName="active"
                    >
                      {link.anchor}
                    </StyledNavLink>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  ));
};

export default NavItemDropdownDesktop;
