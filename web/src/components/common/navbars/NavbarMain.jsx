/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Disclosure, Menu, Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

import useSanitySettingsCompany from '../../../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../../../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../../../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../../../hooks/useSanitySettingsMetadata';

import NavLogo from './NavLogo';
import Button from '../Button';

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

const navLinksDesktop = [
  { name: 'About Us', to: '/about/' },
  { name: 'Request Talent', to: '/clients/' },
  { name: 'Testimonials', to: '/testimonials/' },
  { name: 'Blog', to: '/blog/' },
];

const navLinksIndustries = [
  {
    name: 'Medical Device & Biotechnology',
    description: 'Regulatory, Quality, Research, Laboratory, Engineering',
    to: '/medical-device-biotechnology/',
    icon: 'fas fa-laptop-medical',
  },
  {
    name: 'Information Technology',
    description:
      "Mobile, UI, Front/Back End Developers, SWE's, Network Engineers, Embedded/Firmware Engineers, Database Admins/Engineers, DevOps/Cloud Developers, Project Management",
    to: '/it-technology/',
    icon: 'fas fa-network-wired',
  },
  {
    name: 'Civil & Structural Engineering',
    description:
      'Structural, Transportation, Geotechnical, Water Resource, Forensics, Surveying, Construction/Project Management, Environmental Health & Safety',
    to: '/civil-structural-engineering/',
    icon: 'fas fa-drafting-compass',
  },
  {
    name: 'Manufacturing',
    description:
      'Quality Engineering, Mechanical Engineering, Electrical Engineering, Manufacturing Engineering, Process Engineering, Operations Excellence, Chemical Engineering, Industrial Engineering, Aerospace Engineering, Environmental Health & Safety',
    to: '/manufacturing/',
    icon: 'fas fa-city',
  },
];

const callsToAction = [
  { name: 'Request Talent', to: '/contact-us/', icon: 'fas fa-user-plus' },
  { name: 'Contact Us', to: '/contact-us/', icon: 'fas fa-phone' },
];

const navLinksMobile = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about/' },
  { name: 'Industries', to: '/industries/' },
  { name: 'Request Talent', to: '/clients/' },
  { name: 'Testimonials', to: '/testimonials/' },
  { name: 'Blog', to: '/blog/' },
  { name: 'Contact Us', to: '/contact-us/' },
];

const dryClasses = {
  navItem: `border-transparent ${settings.textColor} ${settings.textColorHover} inline-flex items-center px-1 pt-1 ${settings.textSize} ${settings.textWeight}`,
  navItemMobile: `border-transparent ${settings.textColor} ${settings.textColorHover} inline-flex items-center px-1 pt-4 pb-4 ${settings.textSizeMobile} ${settings.textWeight}`,
  activeNavItem: `border-transparent ${settings.textColorActive} ${settings.textColorActiveHover} inline-flex items-center px-1 pt-1 ${settings.textSize} font-bold`,
};

const NavbarMain = () => {
  const data = useStaticQuery(graphql`
    query NavbarMainQ {
      imgLogo: file(
        relativePath: {
          eq: "assets/graphics/all-star-connections-job-recruiting-agency-logo.png"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            height: 75
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  const { ...allCompany } = useSanitySettingsCompany();
  const { ...allSocials } = useSanitySettingsSocials();
  const { ...allColors } = useSanitySettingsColors();
  const { ...allMetadata } = useSanitySettingsMetadata();

  const imgLogo = data.imgLogo.childImageSharp.gatsbyImageData;

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Disclosure as="nav" className={settings.bg}>
      {({ open }) => (
        <div>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-24">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <NavLogo>
                    <GatsbyImage
                      image={imgLogo}
                      alt={`${allCompany.name} company logo`}
                      loading="eager"
                    />
                  </NavLogo>
                </div>

                <div className="hidden sm:block sm:ml-6 lg:mx-auto self-center">
                  <div className="flex space-x-6">
                    <div className={dryClasses.navItem}>
                      <Link
                        to={navLinksDesktop[0].to}
                        className={dryClasses.navItem}
                        activeClassName={dryClasses.activeNavItem}
                      >
                        {navLinksDesktop[0].name}
                      </Link>
                    </div>

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
                                <span>Industries</span>
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
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 -translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-1"
                          >
                            <Popover.Panel
                              static
                              className="fixed mx-auto z-10 inset-x-0 transform shadow-2xl rounded-2xl w-max"
                            >
                              <div className="bg-white">
                                <div className="max-w-6xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-2 lg:px-8 lg:py-8 xl:py-8">
                                  {navLinksIndustries.map((item) => (
                                    <Link
                                      key={item.name}
                                      to={item.to}
                                      className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-100 transition ease-in-out duration-150"
                                    >
                                      <div className="flex md:h-full lg:flex-col">
                                        <div className="flex-shrink-0">
                                          <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white sm:h-12 sm:w-12">
                                            <i
                                              className={`${item.icon} text-xl`}
                                              aria-hidden="true"
                                            />
                                          </div>
                                        </div>
                                        <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                          <div>
                                            <p className="text-base font-medium text-gray-900">
                                              {item.name}
                                            </p>
                                            <p className="mt-1 text-sm text-gray-500 max-w-2xl">
                                              {item.description}
                                            </p>
                                          </div>
                                          <p className="my-2 text-sm font-medium text-accent lg:my-4">
                                            Learn more{' '}
                                            <span aria-hidden="true">
                                              &rarr;
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                              <div className="bg-blue-50">
                                <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                                  {callsToAction.map((item) => (
                                    <div key={item.name} className="flow-root">
                                      <Link
                                        key={item.name}
                                        to={item.to}
                                        className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-blue-100 transition ease-in-out duration-150"
                                      >
                                        <i
                                          className={`${item.icon} flex-shrink text-xl text-gray-400`}
                                          aria-hidden="true"
                                        />
                                        <span className="ml-3">
                                          {item.name}
                                        </span>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </div>
                      )}
                    </Popover>

                    <div className={dryClasses.navItem}>
                      <Link
                        to={navLinksDesktop[1].to}
                        className={dryClasses.navItem}
                        activeClassName={dryClasses.activeNavItem}
                      >
                        {navLinksDesktop[1].name}
                      </Link>
                    </div>

                    <div className={dryClasses.navItem}>
                      <Link
                        to={navLinksDesktop[2].to}
                        className={dryClasses.navItem}
                        activeClassName={dryClasses.activeNavItem}
                      >
                        {navLinksDesktop[2].name}
                      </Link>
                    </div>

                    <div className={dryClasses.navItem}>
                      <Link
                        to={navLinksDesktop[3].to}
                        className={dryClasses.navItem}
                        activeClassName={dryClasses.activeNavItem}
                      >
                        {navLinksDesktop[3].name}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                  <div className="hidden sm:flex sm:items-center text-3xl font-bold">
                    {/* <Button type="internal" btnLink={settings.btnLink} /> */}
                    <a
                      href={allCompany.phoneHref}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <i className="fas fa-phone mr-2 text-accent hover:text-primary" />
                      <span className="text-primary hover:text-accent italic tracking-tight">
                        {allCompany.phone}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col lg:flex-row px-2 pt-2 pb-3 space-y-1">
              {navLinksMobile.map((item) => (
                <div className="text-center">
                  <Link
                    key={item.name}
                    to={item.to}
                    className={dryClasses.navItemMobile}
                    activeClassName={dryClasses.activeNavItem}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default NavbarMain;
