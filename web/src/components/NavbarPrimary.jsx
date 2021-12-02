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

const MobileNavCtaBg = styled.div`
  background-color: ${({ bgColor }) => bgColor};
`;

const DropdownLabelText = styled.span`
  color: ${(props) => props.color};
  cursor: pointer;
  transition: all 0.25s;
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
  line-height: ${({ lineHeight }) => lineHeight};
  &:hover,
  &:focus,
  &:active {
    color: ${(props) => props.colorHover};
    transition: all 0.25s;
    font-weight: ${({ weightHover }) => weightHover};
    font-size: ${({ sizeHover }) => sizeHover};
    line-height: ${({ lineHeightHover }) => lineHeightHover};
  }
`;

const DropdownLabelChevron = styled.svg`
  color: ${(props) => props.color};
  cursor: pointer;
  transition: all 0.25s;
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  line-height: ${({ lineHeight }) => lineHeight};
  margin-left: ${({ marginLeft }) => marginLeft};
  &:hover,
  &:focus,
  &:active {
    color: ${(props) => props.colorHover};
    transition: all 0.25s;
    font-weight: ${({ weightHover }) => weightHover};
    font-size: ${({ sizeHover }) => sizeHover};
    line-height: ${({ lineHeightHover }) => lineHeightHover};
  }
`;

const NavbarPrimary = () => {
  const { siteSEO, logo, navbars, primary, secondary, accent, neutral, hero } =
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
    <Section padding="none" bgColor={neutral.white.color}>
      <Disclosure as="nav">
        {({ open }) => (
          <div>
            <Container classes="max-w-7xl px-2">
              <div className="relative flex items-center justify-between h-24">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon
                        className="block h-10 w-10 text-primary"
                        aria-hidden="true"
                      />
                    ) : (
                      <MenuIcon
                        className="block h-10 w-10 text-primary"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
                  <motion.div
                    className="flex-shrink-0 flex items-center"
                    variants={variants}
                    initial="initial"
                    animate="animate"
                  >
                    <div className="flex-shrink-0 flex items-center">
                      <Link to="/">
                        <GatsbyImage
                          image={logo.navbar.asset.gatsbyImageData}
                          alt={`${siteSEO.name} company logo`}
                          loading="eager"
                          className="transition hover:scale-110"
                        />
                      </Link>
                    </div>
                  </motion.div>
                  {/* Desktop Nav Links & CTA Button */}
                  <div className="hidden sm:block sm:ml-6 lg:mx-auto self-center justify-center">
                    <div className="flex space-x-8">
                      {navbars.map((item) =>
                        item.navItem.map((itemType) =>
                          itemType.type === 'dropdown'
                            ? itemType.dropdowns.map((dropdown) => (
                                <Popover
                                  key={dropdown._key}
                                  className="z-0 relative"
                                >
                                  {({ open }) => (
                                    <div>
                                      <div className="relative z-10">
                                        <div className="max-w-7xl flex">
                                          <Popover.Button
                                            className={classNames(
                                              open
                                                ? `${accent.default.color}`
                                                : `${neutral.dark.color}`,
                                              `border-transparent inline-flex items-center px-1 focus:outline-none text-lg font-medium`
                                            )}
                                          >
                                            <DropdownLabelText
                                              color={neutral.dark.color}
                                              colorHover={accent.default.color}
                                              weight={500}
                                              size="1.125rem"
                                              lineHeight="1.75rem"
                                            >
                                              {dropdown.label}
                                            </DropdownLabelText>
                                            <DropdownLabelChevron
                                              color={neutral.dark.color}
                                              colorHover={accent.default.color}
                                              weight={500}
                                              size="1.125rem"
                                              lineHeight="1.75rem"
                                              height="1.25rem"
                                              width="1.25rem"
                                              marginLeft="0.5rem"
                                            >
                                              <ChevronDownIcon aria-hidden="true" />
                                            </DropdownLabelChevron>
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
                                                <AnchorText
                                                  type="internal"
                                                  color={neutral.dark.color}
                                                  colorHover={
                                                    accent.default.color
                                                  }
                                                  weight={500}
                                                  size="1.125rem"
                                                  lineHeight="1.75rem"
                                                  key={link._key}
                                                  to={
                                                    link.metadata.slug
                                                      .current === 'home'
                                                      ? '/'
                                                      : `/${link.metadata.slug.current}/`
                                                  }
                                                  classes="border-transparent inline-flex items-center px-2"
                                                  activeClassName="active"
                                                >
                                                  {link.anchor}
                                                </AnchorText>
                                              ))}
                                            </div>
                                          </div>
                                        </Popover.Panel>
                                      </Transition>
                                    </div>
                                  )}
                                </Popover>
                              ))
                            : itemType.type === 'single'
                            ? itemType.pageLinks.map((page) => (
                                <AnchorText
                                  type="internal"
                                  color={neutral.dark.color}
                                  colorHover={accent.default.color}
                                  weight={500}
                                  size="1.125rem"
                                  lineHeight="1.75rem"
                                  key={page._key}
                                  to={
                                    page.metadata.slug.current === 'home'
                                      ? '/'
                                      : `/${page.metadata.slug.current}/`
                                  }
                                  classes="border-transparent inline-flex items-center px-2"
                                  activeClassName="active"
                                >
                                  {page.anchor}
                                </AnchorText>
                              ))
                            : null
                        )
                      )}
                    </div>
                  </div>
                  <motion.div
                    className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0"
                    variants={variants}
                    initial="initial"
                    animate="animate"
                  >
                    <div className="hidden sm:flex sm:items-center">
                      <Button btn="internal" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </Container>
            <Disclosure.Panel className="sm:hidden">
              <Grid classes="gap-y-2 px-6 py-6">
                <Col classes="space-y-6">
                  {navbars.map((item) =>
                    item.navItem.map((itemType) =>
                      itemType.type === 'dropdown'
                        ? itemType.dropdowns.map((dropdown) => (
                            <Disclosure key={dropdown._key}>
                              {({ open }) => (
                                <div>
                                  <Disclosure.Button className="flex justify-between w-full bg-gray-50 text-lg font-medium text-gray-800 hover:text-gray-800 focus:text-gray-800">
                                    <span className="pr-1 hover:text-gray-800 focus:text-gray-800">
                                      {dropdown.label}
                                    </span>
                                    <ChevronUpIcon
                                      className={`${
                                        open ? 'transform rotate-180' : ''
                                      } w-6 h-6 text-accent`}
                                    />
                                  </Disclosure.Button>
                                  <Disclosure.Panel className="p-4 bg-gray-200 space-y-6">
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
                                          to={
                                            link.metadata.slug.current ===
                                            'home'
                                              ? '/'
                                              : `/${link.metadata.slug.current}/`
                                          }
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
                        : itemType.type === 'single'
                        ? itemType.pageLinks.map((page) => (
                            <div key={page._key}>
                              <AnchorText
                                type="internal"
                                color={neutral.dark.color}
                                colorHover={accent.default.color}
                                weight={500}
                                size="1.125rem"
                                lineHeight="1.75rem"
                                to={
                                  page.metadata.slug.current === 'home'
                                    ? '/'
                                    : `/${page.metadata.slug.current}/`
                                }
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
              <Grid>
                <MobileNavCtaBg
                  bgColor={primary.dark.color}
                  className="pt-8 pb-4"
                >
                  <Row classes="text-center">
                    <Button btn="internal" />
                  </Row>
                  <Grid classes="pt-10 pb-4 grid-cols-3">
                    {navbars.map((item) =>
                      item.contactLinks.map((contact) => (
                        <Col key={contact._key} classes="mx-auto">
                          <div className="flex my-auto px-6">
                            <a
                              href={contact.url}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <i
                                className={`${contact.icon} fa-2x text-white hover:text-accent`}
                              />
                            </a>
                          </div>
                        </Col>
                      ))
                    )}
                  </Grid>
                </MobileNavCtaBg>
              </Grid>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </Section>
  );
};

export default NavbarPrimary;
