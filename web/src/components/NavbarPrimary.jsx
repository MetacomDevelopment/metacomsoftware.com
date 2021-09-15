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

import {
  Button,
  Col,
  Grid,
  Row,
  NavItemDropdownDesktop,
  NavItemSingleDesktop,
} from '.';
import { useSanity } from '../hooks';

const StyledNavbarPrimary = styled.nav`
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

const NavbarPrimary = () => {
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
    <StyledNavbarPrimary textColorHover={accent.default.color}>
      <Disclosure as="nav" className={settings.bg}>
        {({ open }) => (
          <div>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
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
                          alt={`${website.name} company logo`}
                          loading="eager"
                        />
                      </Link>
                    </div>
                  </motion.div>
                  <div className="hidden sm:block sm:ml-6 lg:mx-auto self-center">
                    <div className="flex space-x-6">
                      {navbars.map((item) =>
                        item.navItem.map((itemType) =>
                          itemType.type === 'dropdown'
                            ? itemType.dropdowns.map((dropdown) => (
                                <Popover className="z-0 relative">
                                  {({ open }) => (
                                    <div>
                                      <div className="relative z-10">
                                        <div className="max-w-7xl flex mt-1">
                                          <Popover.Button
                                            className={classNames(
                                              open
                                                ? 'text-primary'
                                                : 'text-gray-800',
                                              `${dryClasses.navItem} focus:outline-none`
                                            )}
                                          >
                                            <span>{dropdown.label}</span>
                                            <ChevronDownIcon
                                              className={classNames(
                                                open
                                                  ? 'text-primary'
                                                  : 'text-gray-800',
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
                                                  colorHover={
                                                    accent.default.color
                                                  }
                                                  colorActive={
                                                    primary.default.color
                                                  }
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
                              ))
                            : itemType.type === 'single'
                            ? itemType.pageLinks.map((page) => (
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
                    <div className="hidden sm:flex sm:items-center text-3xl font-bold">
                      <Button btn="internal" btnLink={settings.btnLink} />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <Grid classes="gap-y-2 px-6 pt-2 pb-3">
                <Col>
                  {navbars.map((item) =>
                    item.navItem.map((itemType) =>
                      itemType.type === 'dropdown'
                        ? itemType.dropdowns.map((dropdown) => (
                            <Disclosure>
                              {({ open }) => (
                                <div>
                                  <Disclosure.Button className="flex justify-between w-full px-4 py-4 bg-gray-50 text-xl font-medium text-gray-800 hover:text-gray-800 focus:text-gray-800">
                                    <span className="pr-1 hover:text-gray-800 focus:text-gray-800">
                                      {dropdown.label}
                                    </span>
                                    <ChevronUpIcon
                                      className={`${
                                        open ? 'transform rotate-180' : ''
                                      } w-6 h-6 text-accent`}
                                    />
                                  </Disclosure.Button>
                                  <Disclosure.Panel className="px-4 pt-4 pb-2 bg-gray-200">
                                    {dropdown.links.map((link) => (
                                      <Col>
                                        <div>
                                          <Link
                                            key={link.id}
                                            to={`/${link.metadata.slug.current}/`}
                                            className={dryClasses.navItemMobile}
                                            activeClassName={
                                              dryClasses.activeNavItem
                                            }
                                          >
                                            {link.anchor}
                                          </Link>
                                        </div>
                                      </Col>
                                    ))}
                                  </Disclosure.Panel>
                                </div>
                              )}
                            </Disclosure>
                          ))
                        : itemType.type === 'single'
                        ? itemType.pageLinks.map((page) => (
                            <div>
                              <Link
                                key={page.id}
                                to={`/${page.metadata.slug.current}/`}
                                className={dryClasses.navItemMobile}
                                activeClassName={dryClasses.activeNavItem}
                              >
                                {page.anchor}
                              </Link>
                            </div>
                          ))
                        : null
                    )
                  )}
                </Col>
              </Grid>
              <Grid classes="pt-8 pb-4 bg-primary">
                <Row classes="mx-auto">
                  <Button btn="internal" />
                </Row>
                <Grid classes="pt-10 pb-4 grid-cols-3">
                  {navbars.map((item) =>
                    item.contactLinks.map((contact) => (
                      <Col classes="mx-auto">
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
              </Grid>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </StyledNavbarPrimary>
  );
};

export default NavbarPrimary;
