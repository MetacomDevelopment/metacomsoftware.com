/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { Fragment } from 'react';
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
  Container,
  Grid,
  Row,
  AnchorText,
  Section,
  NavbarPrimaryMobileMenuSection,
  NavbarPrimaryMobileCtaSection,
  NavbarPrimaryMobileIcon,
  NavbarPrimaryLogo,
  NavbarPrimaryDesktopCtaButton,
  NavbarPrimaryMobileCtaButton,
} from '.';
import { useSanity } from '../hooks';

const StyledSection = styled.section`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgColor};
  &:hover {
    color: ${(props) => props.$colorHover};
    background-color: ${(props) => props.$bgColorHover};
  }
`;

const StyledMenuLinks = styled.ul`
  & li {
    cursor: pointer !important;
    color: ${(props) => props.$color} !important;
    font-size: 1.125rem !important;
    font-weight: 600 !important;
    transition: all 0.25s;
    &:hover {
      color: ${(props) => props.$colorHover} !important;
    }
    & svg {
      height: 1em !important;
      width: 1em !important;
    }
    & a {
      color: ${(props) => props.$color} !important;
      font-size: 1.125rem !important;
      font-weight: 600 !important;
      transition: all 0.25s;
      &:hover {
        color: ${(props) => props.$colorHover} !important;
      }
    }
  }
`;

const StyledMobileMenuLinks = styled.ul`
  & li {
    cursor: pointer !important;
    color: ${(props) => props.$color} !important;
    font-size: 1.125rem !important;
    font-weight: 600 !important;
    transition: all 0.25s;
    &:hover {
      color: ${(props) => props.$colorHover} !important;
    }
    & svg {
      height: 1em !important;
      width: 1em !important;
    }
    & a {
      color: ${(props) => props.$color} !important;
      font-size: 1.125rem !important;
      font-weight: 600 !important;
      transition: all 0.25s;
      &:hover {
        color: ${(props) => props.$colorHover} !important;
      }
    }
  }
`;

const StyledDropdownItem = styled.div`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgColor};
  &:hover {
    color: ${(props) => props.$colorHover};
    background-color: ${(props) => props.$bgColorHover} !important;
  }
`;

const StyledMobileNavCtaBg = styled.div`
  background-color: ${(props) => props.$bgColor};
`;

const StyledPopoverButton = styled((props) => <Popover.Button {...props} />)`
  color: ${(props) => props.$color};
  background-color: none !important;
  &:hover {
    color: ${(props) => props.$colorHover};
    background-color: ${(props) => props.$bgColorHover};
  }
`;

const StyledXIcon = styled((props) => <XIcon {...props} />)`
  color: ${(props) => props.$color};
  background-color: none !important;
  &:hover {
    color: ${(props) => props.$colorHover};
    background-color: ${(props) => props.$bgColorHover};
  }
`;

const StyledMenuIcon = styled((props) => <MenuIcon {...props} />)`
  color: ${(props) => props.$color};
  background-color: none !important;
  &:hover {
    color: ${(props) => props.$colorHover};
    background-color: ${(props) => props.$bgColorHover};
  }
`;

const StyledDisclosureButton = styled((props) => (
  <Disclosure.Button {...props} />
))`
  & li {
    color: ${(props) => props.$color} !important;
    background-color: ${(props) => props.$bgColor} !important;
    &:hover {
      color: ${(props) => props.$colorHover} !important;
      background-color: ${(props) => props.$bgColorHover} !important;
    }
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

const NavbarPrimary = () => {
  const {
    siteSEO,
    logo,
    navbar,
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

  const solutions = [
    {
      name: 'Insights',
      description: 'Measure actions your users take',
      href: '##',
    },
    {
      name: 'Automations',
      description: 'Create your own targeted content',
      href: '##',
    },
    {
      name: 'Reports',
      description: 'Keep track of your growth',
      href: '##',
    },
  ];

  return (
    <StyledSection
      $bgColor={
        navbar?.primaryNavBgColor?.color
          ? navbar?.primaryNavBgColor?.color
          : 'bg-white'
      }
      $textColor={
        navbar?.primaryNavTextColor?.color
          ? navbar?.primaryNavTextColor?.color
          : 'text-gray-900'
      }
      className={`w-full h-24 ${
        navbar?.primaryNavBgColorCustom
          ? navbar?.primaryNavBgColorCustom
          : 'bg-white'
      }`}
    >
      <Container padding="none" classes="max-w-7xl h-24 m-auto px-4 xl:px-0">
        <div className="h-24 gap-x-2 flex justify-between">
          <NavbarPrimaryLogo />
          <div className="hidden lg:flex justify-center content-center items-center">
            <StyledMenuLinks
              $color={navbar.primaryNavTextColor.color}
              $colorHover={accent.default.color}
              className="flex space-x-8"
            >
              {navbars?.map((primary) =>
                primary?.navItem?.map((link) =>
                  link?.singlePageLink ? (
                    <li>
                      <AnchorText
                        type="internal"
                        color={neutral.default.color}
                        to={link?.singlePageLink?.slug?.current}
                      >
                        {link?.singlePageLink?.anchor}
                      </AnchorText>
                    </li>
                  ) : (
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button>
                            <li className="flex gap-x-2">
                              {link?.dropdownTextLabel}{' '}
                              <ChevronDownIcon
                                aria-hidden="true"
                                className={`${
                                  open ? 'transform rotate-180' : ''
                                } mt-1`}
                              />
                            </li>
                          </Popover.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel
                              className={`absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 ${
                                link?.dropdowns?.length < 4
                                  ? 'lg:max-w-md'
                                  : 'lg:max-w-4xl'
                              }`}
                            >
                              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-800 ring-opacity-5">
                                <div
                                  className={`relative grid gap-8 bg-white p-7 ${
                                    link?.dropdowns?.length < 4
                                      ? 'lg:grid-cols-1'
                                      : 'lg:grid-cols-2'
                                  }`}
                                >
                                  {link?.dropdowns?.map((dropdownLink) =>
                                    dropdownLink?.singlePageLink ? (
                                      <AnchorText
                                        type="internal"
                                        color={neutral.default.color}
                                        key={
                                          dropdownLink?.singlePageLink?.slug
                                            ?.current
                                        }
                                        to={
                                          dropdownLink?.singlePageLink?.slug
                                            ?.current
                                        }
                                        classes="flex items-start p-2 -m-3 transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                      >
                                        <StyledDropdownItem
                                          className="flex p-2 transition duration-150 ease-in-out rounded-lg"
                                          $bgColorHover={accent.lighter.color}
                                        >
                                          {dropdownLink?.singlePageLink?.pageBuilder?.map(
                                            (hero) => (
                                              <div>
                                                <GatsbyImage
                                                  image={
                                                    hero?.bgImg?.asset
                                                      ?.gatsbyImageData
                                                  }
                                                  alt={`${hero?.bgImg?.alt} company logo`}
                                                  loading="eager"
                                                  className="w-16 h-16 rounded-lg shadow-lg flex justify-start content-center items-center"
                                                />
                                              </div>
                                            )
                                          )}
                                          <div className="ml-4">
                                            <p className="text-lg font-medium text-gray-900">
                                              {
                                                dropdownLink?.singlePageLink
                                                  ?.anchor
                                              }
                                            </p>
                                            <p className="text-sm text-gray-500">
                                              {
                                                dropdownLink?.singlePageLink
                                                  ?.shortDescription
                                              }
                                            </p>
                                          </div>
                                        </StyledDropdownItem>
                                      </AnchorText>
                                    ) : (
                                      <Disclosure>
                                        {({ open }) => (
                                          <>
                                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                              {dropdownLink.dropdownTextLabel}
                                              <ChevronUpIcon
                                                className={`${
                                                  open
                                                    ? 'transform rotate-180'
                                                    : ''
                                                } w-5 h-5 text-purple-500`}
                                              />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                              {dropdownLink.dropdowns.map(
                                                (dropdownLink) =>
                                                  dropdownLink.singlePageLink
                                                    .anchor
                                              )}
                                            </Disclosure.Panel>
                                          </>
                                        )}
                                      </Disclosure>
                                    )
                                  )}
                                </div>
                                {/* <div className="p-4 bg-gray-50">
                                  <AnchorText
                                  type="internal"
                                  color={neutral.default.color}
                                    to={}
                                    className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                  >
                                    <span className="flex items-center">
                                      <span className="text-sm font-medium text-gray-900">
                                        Documentation
                                      </span>
                                    </span>
                                    <span className="block text-sm text-gray-500">
                                      Start integrating products and tools
                                    </span>
                                  </AnchorText>
                                </div> */}
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  )
                )
              )}
            </StyledMenuLinks>
          </div>
          <div className="flex justify-end content-center items-center">
            <NavbarPrimaryDesktopCtaButton />
            <Popover className="flex lg:hidden relative">
              {({ open }) => (
                <>
                  <StyledPopoverButton
                    $color={primary.dark.color}
                    $colorHover={primary.dark.color}
                    $bgColor={neutral.white.color}
                    $bgColorHover={neutral.white.color}
                    className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <StyledXIcon
                        $color={accent.default.color}
                        $colorHover={accent.dark.color}
                        className="block h-10 w-10"
                        aria-hidden="true"
                      />
                    ) : (
                      <StyledMenuIcon
                        $color={accent.default.color}
                        $colorHover={accent.dark.color}
                        className="block h-10 w-10"
                        aria-hidden="true"
                      />
                    )}
                  </StyledPopoverButton>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 -translate-y-10"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute top-[4.7rem] -right-4 z-10 w-screen transform overflow-y-auto touch-pan-y max-h-[75vh] shadow-2xl">
                      <div className="shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid grid-cols-1 gap-8 bg-white p-7">
                          <StyledMobileMenuLinks
                            $color={neutral.darker.color}
                            $colorHover={accent.default.color}
                            className="flex flex-col space-y-8"
                          >
                            {navbars?.map((primary) =>
                              primary?.navItem?.map((link) =>
                                link?.singlePageLink ? (
                                  <li>
                                    <AnchorText
                                      type="internal"
                                      color={neutral.default.color}
                                      to={link?.singlePageLink?.slug?.current}
                                    >
                                      {link?.singlePageLink?.anchor}
                                    </AnchorText>
                                  </li>
                                ) : (
                                  <Disclosure>
                                    {({ open }) => (
                                      <>
                                        <Disclosure.Button className="flex flex-col space-y-8 justify-between w-full py-2 text-lg font-medium text-left rounded-lg">
                                          <li className="flex gap-x-2">
                                            {link?.dropdownTextLabel}{' '}
                                            <ChevronDownIcon
                                              aria-hidden="true"
                                              className={`${
                                                open
                                                  ? 'transform rotate-180'
                                                  : ''
                                              } mt-1`}
                                            />
                                          </li>
                                        </Disclosure.Button>
                                        <Transition
                                          enter="transition duration-100 ease-out"
                                          enterFrom="transform scale-95 opacity-0 duration-100"
                                          enterTo="transform scale-100 opacity-100"
                                          leave="transition duration-75 ease-out"
                                          leaveFrom="transform scale-100 opacity-100"
                                          leaveTo="transform scale-95 opacity-0"
                                        >
                                          <Disclosure.Panel className="flex flex-col ml-4 space-y-8 text-lg font-medium text-left">
                                            {link.dropdowns.map(
                                              (dropdownLink) => (
                                                <AnchorText
                                                  type="internal"
                                                  color={neutral.default.color}
                                                  to={
                                                    dropdownLink.singlePageLink
                                                      .slug.current
                                                  }
                                                >
                                                  {
                                                    dropdownLink.singlePageLink
                                                      .anchor
                                                  }
                                                </AnchorText>
                                              )
                                            )}
                                          </Disclosure.Panel>
                                        </Transition>
                                      </>
                                    )}
                                  </Disclosure>
                                )
                              )
                            )}
                          </StyledMobileMenuLinks>
                        </div>
                        <StyledMobileNavCtaBg
                          $bgColor={primary.darker.color}
                          className="p-6 flex justify-center"
                        >
                          <NavbarPrimaryMobileCtaButton />
                        </StyledMobileNavCtaBg>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </Container>
    </StyledSection>
  );
};

export default NavbarPrimary;
