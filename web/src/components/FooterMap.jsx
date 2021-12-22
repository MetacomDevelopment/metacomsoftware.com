import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

import { useSanity } from '../hooks';
import { Section } from '.';

const FooterMap = () => {
  const { info, footers } = useSanity();

  return (
    <Section classes="bg-primary py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      {footers.map((footer) => (
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="space-y-8 lg:col-span-1">
            <iframe
              src={footer.gmb.gmbEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className="space-y-8 lg:col-span-1 text-white mt-6 lg:mt-0">
            <h2 className="text-3xl font-bold text-accent">
              {info.name} Is Located In {info.cityState}
            </h2>
            <p>
              Are you looking for directions to our central office at{' '}
              {info.address}? Use the Google Map or the directions provided from
              surrounding landmarks.
            </p>
            <div className="w-full p-2 mx-auto rounded-2xl">
              <Disclosure>
                {({ open }) => (
                  <div>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <h3 className="text-xl">{footer.tagline}</h3>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-blue-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-zinc-50">
                      {footer.gmb.gmbEmbed}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default FooterMap;
