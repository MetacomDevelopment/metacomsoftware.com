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

const NavbarPrimaryMobileMenuSection = () => {
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
    <Grid classes="gap-y-2 px-6 py-6">
      <Col classes="space-y-6">
        {navbars.map((navbar) =>
          navbar.navItems.map((navItem) =>
            navItem.type === 'dropdown'
              ? navItem.dropdowns.map((dropdown) => (
                  <Disclosure key={dropdown._key}>
                    {({ open }) => (
                      <div>
                        <Disclosure.Button className="flex w-full justify-between bg-zinc-50 text-lg font-medium text-zinc-800 hover:text-zinc-800 focus:text-zinc-800">
                          <span className="pr-1 hover:text-zinc-800 focus:text-zinc-800">
                            {dropdown.label}
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-6 w-6 text-accent`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-6 bg-zinc-200 p-4">
                          {dropdown.links.map((link) => (
                            <Col key={link._key} classes="ml-3">
                              <AnchorText
                                type="internal"
                                color={neutral.dark.color}
                                colorHover={accent.default.color}
                                weight={500}
                                size="1.125rem"
                                lineHeight="1.75rem"
                                key={link.id}
                                to={link.metadata.slug.current}
                                classes="border-transparent inline-flex items-center"
                                activeClassName="border-transparent inline-flex items-center px-1"
                              >
                                {link.anchor}
                              </AnchorText>
                            </Col>
                          ))}
                        </Disclosure.Panel>
                      </div>
                    )}
                  </Disclosure>
                ))
              : navItem.type === 'single'
              ? navItem.pageLinks.map((page) => (
                  <div key={page._key}>
                    <AnchorText
                      type="internal"
                      color={neutral.dark.color}
                      colorHover={accent.default.color}
                      weight={500}
                      size="1.125rem"
                      lineHeight="1.75rem"
                      to={page.metadata.slug.current}
                      classes="border-transparent inline-flex items-center px-1"
                      activeClassName="border-transparent inline-flex items-center px-1"
                    >
                      {page.anchor}
                    </AnchorText>
                  </div>
                ))
              : null
          )
        )}
      </Col>
    </Grid>
  );
};

export default NavbarPrimaryMobileMenuSection;
