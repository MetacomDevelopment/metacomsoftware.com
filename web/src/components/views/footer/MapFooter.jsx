import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const settings = {
  footerBgColor: 'bg-gray-800',
};

const MapFooter = ({ type }) => {
  const data = useStaticQuery(graphql`
    query MapFooterQ {
      sanitySettingsCompany {
        address
        cityState
        name
      }
      sanitySettingsSocials {
        gmbEmbed
      }
    }
  `);

  const company = data.sanitySettingsCompany;
  const socials = data.sanitySettingsSocials;

  switch (type) {
    default:
      return (
        <div className="bg-primary py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8 lg:col-span-1">
              <iframe
                src={socials.gmbEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <div className="space-y-8 lg:col-span-1 text-white mt-6 lg:mt-0">
              <h2 className="text-3xl font-bold text-accent">
                {company.name} Is Located In {company.cityState}
              </h2>
              <p>
                Are you looking for directions to our central office at{' '}
                {company.address}? Use the Google Map or the directions provided
                from surrounding landmarks.
              </p>
              <div className="w-full p-2 mx-auto rounded-2xl">
                <Disclosure>
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <h3 className="text-xl">
                          Directions From Boston Logan International Airport
                          (BOS)
                        </h3>
                        <ChevronUpIcon
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                        From Boston Logan International Airport (BOS), Boston,
                        MA 02128, Get on I-90 W from Transportation Way, 2 min
                        (0.7 mi), Head southeast, 20 ft, Slight right, 0.1 mi,
                        Use any lane to turn slightly left onto Transportation
                        Way, 0.2 mi, Turn left onto the Williams Tunnel ramp to
                        I-90 W/I-93, Toll road, 0.3 mi, Continue on I-90 W. Take
                        Exit 24 to John F Fitzgerald Surface Rd. Take exit 17
                        from I-93 N 6 min (3.7 mi), Merge onto I-90 W, Toll
                        road, 1.5 mi, Take the I-93 exit toward South Boston,
                        Toll road, 0.3 mi, Keep left to continue on Exit 24,
                        follow signs for I-93 N and merge onto I-93 N, 1.7 mi,
                        Take exit 17 for Government Center toward Quincy Market,
                        0.3 mi, Use the left lane to keep left at the fork and
                        follow signs for Financial Dist/Gov't Ctr, 151 ft,
                        Continue on John F Fitzgerald Surface Rd. Take
                        Mercantile St to Commercial Street, 3 min (0.3 mi), Turn
                        left onto John F Fitzgerald Surface Rd, 0.1 mi, Turn
                        left onto Mercantile St, 0.1 mi, Turn left onto Richmond
                        St, 213 ft, Turn left onto Commercial Street,
                        Destination will be on the left, 203 ft, All-Star
                        Connections, 111 Atlantic Ave, Boston, MA 02110
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <h3 className="text-xl">
                          Directions From Boston Museum of Science
                        </h3>
                        <ChevronUpIcon
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                        From Museum of Science, 1 Museum Of Science Driveway,
                        Boston, MA 02114, Take I-93 S and Exits 17 A-17 B-17 B-A
                        to Richmond St in Boston, 4 min (1.4 mi), Head southeast
                        on MA-28 S/Charles River Dam Rd toward Museum Of Science
                        Driveway, 0.2 mi, Continue straight onto Leverett Cir,
                        207 ft, Take the ramp to I-93 S/Airport/Quincy/Logan
                        Airport, 0.5 mi, Merge onto I-93 S, 0.3 mi, Use the
                        right 2 lanes to take exit 17 A-17 B-17 B-A toward Gov't
                        Center, 0.3 mi, Use the left 2 lanes to turn left onto
                        John F Fitzgerald Surface Rd, 157 ft, Turn left onto
                        Mercantile St, 0.1 mi, Continue on Richmond St. Drive to
                        Commercial Street, 52 s (417 ft), Turn left onto
                        Richmond St, 213 ft, Turn left onto Commercial Street,
                        Destination will be on the left, 203 ft, All-Star
                        Connections, 111 Atlantic Ave, Boston, MA 02110.
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <h3 className="text-xl">
                          Directions From Boston Prudential Center
                        </h3>
                        <ChevronUpIcon
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                        From Prudential Center, 800 Boylston St, Boston, MA
                        02199, Take Boylston St, Berkeley St, MA-28 N and Exits
                        17 A-17 B-17 B-A to Richmond St, 10 min (2.8 mi), Head
                        east on Boylston St toward Ring Rd, 0.4 mi, Turn left
                        onto Berkeley St, 0.5 mi, Merge onto Embankment
                        Rd/Storrow Dr, 390 ft, Continue onto MA-28 N/Embankment
                        Rd/Storrow Dr, 0.5 mi, Use the right 2 lanes to take the
                        MA-28 N exit, 404 ft, Merge onto MA-3 S, 0.1 mi, Take
                        the exit onto I-93 S toward Quincy/Logan Airport, 0.7
                        mi, Use the right 2 lanes to take exit 17 A-17 B-17 B-A
                        toward Gov't Center, 0.3 mi, Use the left 2 lanes to
                        turn left onto John F Fitzgerald Surface Rd, 157 ft,
                        Turn left onto Mercantile St, 0.1 mi, Continue on
                        Richmond St. Drive to Commercial Street, 52 s (417 ft),
                        Turn left onto Richmond St, 213 ft, Turn left onto
                        Commercial Street, Destination will be on the left, 203
                        ft, All-Star Connections, 111 Atlantic Ave, Boston, MA
                        02110.
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <h3 className="text-xl">
                          Directions From Boston Convention and Exhibition
                          Center
                        </h3>
                        <ChevronUpIcon
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                        From Boston Convention and Exhibition Center, 415 Summer
                        St, Boston, MA 02210, Take Congress St to Sleeper St, 6
                        min (0.9 mi), Head southeast on Summer St toward World
                        Trade Center Ave, 0.1 mi, Turn left onto D St, 0.2 mi,
                        Turn left onto Congress St, 0.6 mi, Turn right onto
                        Sleeper St, 53 s (0.1 mi), Take Atlantic Ave to Richmond
                        St, 4 min (0.7 mi), Turn left onto Seaport Blvd, 0.2 mi,
                        Use the right 2 lanes to turn right onto Atlantic Ave,
                        0.5 mi, Turn right onto Atlantic Ave/Mercantile St, 367
                        ft, Continue on Richmond St. Drive to Commercial Street,
                        52 s (417 ft), Turn left onto Richmond St, 213 ft, Turn
                        left onto Commercial Street, Destination will be on the
                        left, 203 ft, All-Star Connections, 111 Atlantic Ave,
                        Boston, MA 02110.
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      );
    case 'boston':
      return (
        <div className="bg-primary py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8 lg:col-span-1">
              <iframe
                src={socials.gmbEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <div className="space-y-8 lg:col-span-1 text-white mt-6 lg:mt-0">
              <h2 className="text-3xl font-bold text-accent">
                {company.name} Is Located In {company.cityState}
              </h2>
              <p>
                Are you looking for directions to our central office at{' '}
                {company.address}? Use the Google Map or the directions provided
                from surrounding landmarks.
              </p>
              <div className="w-full p-2 mx-auto rounded-2xl">
                <Disclosure>
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <h3 className="text-xl">
                          Directions From Boston Logan International Airport
                          (BOS)
                        </h3>
                        <ChevronUpIcon
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                        From Boston Logan International Airport (BOS), Boston,
                        MA 02128, Get on I-90 W from Transportation Way, 2 min
                        (0.7 mi), Head southeast, 20 ft, Slight right, 0.1 mi,
                        Use any lane to turn slightly left onto Transportation
                        Way, 0.2 mi, Turn left onto the Williams Tunnel ramp to
                        I-90 W/I-93, Toll road, 0.3 mi, Continue on I-90 W. Take
                        Exit 24 to John F Fitzgerald Surface Rd. Take exit 17
                        from I-93 N 6 min (3.7 mi), Merge onto I-90 W, Toll
                        road, 1.5 mi, Take the I-93 exit toward South Boston,
                        Toll road, 0.3 mi, Keep left to continue on Exit 24,
                        follow signs for I-93 N and merge onto I-93 N, 1.7 mi,
                        Take exit 17 for Government Center toward Quincy Market,
                        0.3 mi, Use the left lane to keep left at the fork and
                        follow signs for Financial Dist/Gov't Ctr, 151 ft,
                        Continue on John F Fitzgerald Surface Rd. Take
                        Mercantile St to Commercial Street, 3 min (0.3 mi), Turn
                        left onto John F Fitzgerald Surface Rd, 0.1 mi, Turn
                        left onto Mercantile St, 0.1 mi, Turn left onto Richmond
                        St, 213 ft, Turn left onto Commercial Street,
                        Destination will be on the left, 203 ft, All-Star
                        Connections, 111 Atlantic Ave, Boston, MA 02110
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <h3 className="text-xl">
                          Directions From Boston Museum of Science
                        </h3>
                        <ChevronUpIcon
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                        From Museum of Science, 1 Museum Of Science Driveway,
                        Boston, MA 02114, Take I-93 S and Exits 17 A-17 B-17 B-A
                        to Richmond St in Boston, 4 min (1.4 mi), Head southeast
                        on MA-28 S/Charles River Dam Rd toward Museum Of Science
                        Driveway, 0.2 mi, Continue straight onto Leverett Cir,
                        207 ft, Take the ramp to I-93 S/Airport/Quincy/Logan
                        Airport, 0.5 mi, Merge onto I-93 S, 0.3 mi, Use the
                        right 2 lanes to take exit 17 A-17 B-17 B-A toward Gov't
                        Center, 0.3 mi, Use the left 2 lanes to turn left onto
                        John F Fitzgerald Surface Rd, 157 ft, Turn left onto
                        Mercantile St, 0.1 mi, Continue on Richmond St. Drive to
                        Commercial Street, 52 s (417 ft), Turn left onto
                        Richmond St, 213 ft, Turn left onto Commercial Street,
                        Destination will be on the left, 203 ft, All-Star
                        Connections, 111 Atlantic Ave, Boston, MA 02110.
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <h3 className="text-xl">
                          Directions From Boston Prudential Center
                        </h3>
                        <ChevronUpIcon
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                        From Prudential Center, 800 Boylston St, Boston, MA
                        02199, Take Boylston St, Berkeley St, MA-28 N and Exits
                        17 A-17 B-17 B-A to Richmond St, 10 min (2.8 mi), Head
                        east on Boylston St toward Ring Rd, 0.4 mi, Turn left
                        onto Berkeley St, 0.5 mi, Merge onto Embankment
                        Rd/Storrow Dr, 390 ft, Continue onto MA-28 N/Embankment
                        Rd/Storrow Dr, 0.5 mi, Use the right 2 lanes to take the
                        MA-28 N exit, 404 ft, Merge onto MA-3 S, 0.1 mi, Take
                        the exit onto I-93 S toward Quincy/Logan Airport, 0.7
                        mi, Use the right 2 lanes to take exit 17 A-17 B-17 B-A
                        toward Gov't Center, 0.3 mi, Use the left 2 lanes to
                        turn left onto John F Fitzgerald Surface Rd, 157 ft,
                        Turn left onto Mercantile St, 0.1 mi, Continue on
                        Richmond St. Drive to Commercial Street, 52 s (417 ft),
                        Turn left onto Richmond St, 213 ft, Turn left onto
                        Commercial Street, Destination will be on the left, 203
                        ft, All-Star Connections, 111 Atlantic Ave, Boston, MA
                        02110.
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <h3 className="text-xl">
                          Directions From Boston Convention and Exhibition
                          Center
                        </h3>
                        <ChevronUpIcon
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                        From Boston Convention and Exhibition Center, 415 Summer
                        St, Boston, MA 02210, Take Congress St to Sleeper St, 6
                        min (0.9 mi), Head southeast on Summer St toward World
                        Trade Center Ave, 0.1 mi, Turn left onto D St, 0.2 mi,
                        Turn left onto Congress St, 0.6 mi, Turn right onto
                        Sleeper St, 53 s (0.1 mi), Take Atlantic Ave to Richmond
                        St, 4 min (0.7 mi), Turn left onto Seaport Blvd, 0.2 mi,
                        Use the right 2 lanes to turn right onto Atlantic Ave,
                        0.5 mi, Turn right onto Atlantic Ave/Mercantile St, 367
                        ft, Continue on Richmond St. Drive to Commercial Street,
                        52 s (417 ft), Turn left onto Richmond St, 213 ft, Turn
                        left onto Commercial Street, Destination will be on the
                        left, 203 ft, All-Star Connections, 111 Atlantic Ave,
                        Boston, MA 02110.
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      );
    case 'houston':
      return (
        <div className="bg-primary py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8 lg:col-span-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.000044510854!2d-95.42968978489048!3d29.806543081969508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c70523ab679f%3A0xb5ac230d9ab01f4f!2s1544%20W%2023rd%20St%2C%20Houston%2C%20TX%2077008!5e0!3m2!1sen!2sus!4v1630130349612!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <div className="space-y-8 lg:col-span-1 text-white mt-6 lg:mt-0">
              <h2 className="text-3xl font-bold text-accent">
                {company.name} Is Located In Houston, TX
              </h2>
              <p>
                Are you looking for directions to our central office at 1544 W
                23rd St, Houston, TX 77008? Use the Google Map or the directions
                provided from surrounding landmarks.
              </p>
              <div className="w-full p-2 mx-auto rounded-2xl">
                <Disclosure>
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <h3 className="text-xl">
                          Directions From Houston William P. Hobby Airport (HOU)
                        </h3>
                        <ChevronUpIcon
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                        From William P. Hobby Airport (HOU), 7800 Airport Blvd,
                        Houston, TX 77061, Get on I-45 N from Broadway St, 6 min
                        (2.2 mi), Head east on Airport Blvd toward Broadway St,
                        72 ft, Turn left onto Broadway St, Pass by Popeyes
                        Louisiana Kitchen (on the right in 0.9 mi), 1.9 mi, Use
                        the middle lane to turn left onto Gulf Fwy, 0.1 mi, Use
                        the left lane to take the ramp onto I-45 N, 0.1 mi,
                        Follow I-45 N and I-610 W to N Loop W/N Loop W Fwy. Take
                        exit 14 from I-610 W, 17 min (15.0 mi), Merge onto I-45
                        N, 0.6 mi, Keep right to stay on I-45 N, 5.2 mi, Keep
                        left to stay on I-45 N, 0.3 mi, Continue straight to
                        stay on I-45 N, 2.3 mi, Use the middle 3 lanes to stay
                        on I-45 N, 0.4 mi, Keep right to stay on I-45 N, 2.7 mi,
                        Use the right 2 lanes to take exit 51 to merge onto
                        I-610 W, 3.3 mi, Take exit 14 toward Ella Blvd, 0.2 mi,
                        Take Ella Blvd to W 23rd St, 3 min (0.7 mi), Merge onto
                        N Loop W/N Loop W Fwy, Pass by KFC (on the right), 482
                        ft, Use the left 2 lanes to turn left onto Ella Blvd,
                        0.5 mi, Turn left onto W 23rd St, Destination will be on
                        the right, 0.1 mi, All-Star Connections, 1544 W 23rd St,
                        Houston, TX 77008
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <h3 className="text-xl">
                          Directions From Houston George Bush Intercontinental
                          Airport (IAH)
                        </h3>
                        <ChevronUpIcon
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                        From George Bush Intercontinental Airport (IAH), 2800 N
                        Terminal Rd, Houston, TX 77032, Continue to Hardy Toll
                        Rd, 4 min (3.3 mi), Head west on Jetero Blvd/Will
                        Clayton Pkwy, 1.6 mi, Continue onto John F Kennedy Blvd,
                        1.7 mi, Follow Hardy Toll Rd and I-610 W to N Loop W/N
                        Loop W Fwy. Take exit 14 from I-610 W, 17 min (17.8 mi),
                        Keep right to continue on Hardy Toll Rd, Toll road, 2.9
                        mi, Use the left lane to take the exit toward
                        Downtown/Texas 8 Beltway/I-45, Toll road, 0.5 mi, Merge
                        onto Hardy Toll Rd, Toll road, 9.5 mi, Use the right
                        lane to take the exit toward I-610 W, 0.2 mi, Keep
                        right, follow signs for I-610 W and merge onto I-610 W,
                        1.2 mi, Use the middle 2 lanes to stay on I-610 W, 0.2
                        mi, Keep right to stay on I-610 W, 3.1 mi, Take exit 14
                        toward Ella Blvd, 0.2 mi, Take Ella Blvd to W 23rd St, 3
                        min (0.7 mi), Merge onto N Loop W/N Loop W Fwy, Pass by
                        KFC (on the right), 482 ft, Use the left 2 lanes to turn
                        left onto Ella Blvd, 0.5 mi, Turn left onto W 23rd St,
                        Destination will be on the right, 0.1 mi, All-Star
                        Connections, 1544 W 23rd St, Houston, TX 77008,
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <h3 className="text-xl">
                          Directions From Texas Department of Motor Vehicles
                        </h3>
                        <ChevronUpIcon
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                        From Texas Department of Motor Vehicles, 2110 E
                        Governors Cir, Houston, TX 77092, Take Directors Row to
                        N Loop W/N Loop W Fwy, 2 min (0.2 mi), Head southeast,
                        125 ft, Turn right toward Directors Row, 285 ft, Turn
                        left onto Directors Row, 400 ft, Continue on N Loop W/N
                        Loop W Fwy. Take E T C Jester Blvd to W 23rd St, 5 min
                        (1.7 mi), Turn right onto N Loop W/N Loop W Fwy, 0.1 mi,
                        Slight left toward N Loop W/N Loop W Fwy, 0.1 mi, Turn
                        left onto N Loop W/N Loop W Fwy, 0.6 mi, Turn right onto
                        E T C Jester Blvd, 0.7 mi, Turn left onto Ella Blvd, 0.2
                        mi, Turn right onto W 23rd St, Destination will be on
                        the right, 27 s (0.1 mi), All-Star Connections, 1544 W
                        23rd St, Houston, TX 77008
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <h3 className="text-xl">
                          Directions From The Museum of Fine Arts, Houston
                        </h3>
                        <ChevronUpIcon
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                        From The Museum of Fine Arts, Houston, 1001 Bissonnet
                        St, Houston, TX 77005, Get on I-69/US-59 N from San
                        Jacinto St, 4 min (1.0 mi), Head southeast on Bissonnet
                        St toward Main St, 39 ft, Continue onto Binz St, 0.1 mi,
                        Turn left onto San Jacinto St, 0.6 mi, Use the right
                        lane to take the ramp onto I-69/US-59 N, 0.2 mi, Follow
                        I-69 and I-610 W to N Loop W/N Loop W Fwy. Take exit 14
                        from I-610 W, 13 min (12.0 mi), Merge onto I-69/US-59 N,
                        0.5 mi, Keep right to stay on I-69/US-59 N, follow signs
                        for Cleveland/Gray Ave/Pierce Ave, 2.1 mi, Keep left to
                        continue on I-69, 3.2 mi, Use the right 3 lanes to take
                        exit 134 to merge onto I-610 W, 2.7 mi, Use the middle 2
                        lanes to stay on I-610 W, 0.2 mi, Keep right to stay on
                        I-610 W, 3.1 mi, Take exit 14 toward Ella Blvd, 0.2 mi,
                        Take Ella Blvd to W 23rd St, 3 min (0.7 mi), Merge onto
                        N Loop W/N Loop W Fwy, Pass by KFC (on the right), 482
                        ft, Use the left 2 lanes to turn left onto Ella Blvd,
                        0.5 mi, Turn left onto W 23rd St, Destination will be on
                        the right, 0.1 mi, All-Star Connections, 1544 W 23rd St,
                        Houston, TX 77008
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      );
    case 'san diego':
      return (
        <div className="bg-primary py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8 lg:col-span-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.8512720562094!2d-117.12985888481957!3d32.71657958099031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95378b9eec2af%3A0xfb3c142aff5ead4e!2s3093%20C%20St%20%231%2C%20San%20Diego%2C%20CA%2092102!5e0!3m2!1sen!2sus!4v1630130293040!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <div className="space-y-8 lg:col-span-1 text-white mt-6 lg:mt-0">
              <h2 className="text-3xl font-bold text-accent">
                {company.name} Is Located In San Diego, CA
              </h2>
              <p>
                Are you looking for directions to our central office at 3093 C
                St #1, San Diego, CA 92102? Use the Google Map or the directions
                provided from surrounding landmarks.
              </p>
              <div className="w-full p-2 mx-auto rounded-2xl">
                <Disclosure>
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <h3 className="text-xl">
                          Directions From San Diego International Airport (SAN)
                        </h3>
                        <ChevronUpIcon
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                        From San Diego International Airport (SAN), 3225 N
                        Harbor Dr, San Diego, CA 92101, Take N Harbor Dr, I-5 S
                        and Exit 15B to C St, 11 min (5.8 mi), Head east on N
                        Harbor Dr toward McCain Rd, 2.3 mi, Use the left 3 lanes
                        to turn left onto W Grape St, 0.4 mi, Use the right 2
                        lanes to take the ramp onto I-5 S, 1.2 mi, Use the right
                        2 lanes to take exit 15B for CA-94 E/M L King Jr Fwy,
                        0.9 mi, Continue onto CA-94 E, 0.6 mi, Take exit 1 for
                        28th Street, 0.1 mi, Turn right onto 28th St, 0.3 mi,
                        Turn right onto C St, Destination will be on the right,
                        1 min (0.4 mi), All-Star Connections, 3093 C St #1, San
                        Diego, CA 92102
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <h3 className="text-xl">
                          Directions From San Diego DMV
                        </h3>
                        <ChevronUpIcon
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                        From San Diego DMV, 3960 Normal St, San Diego, CA 92103,
                        Head south on Normal St toward Harvey Milk St, 0.1 mi,
                        Turn left onto University Ave, 0.4 mi, Turn right onto
                        Florida St, 1.8 mi, Continue onto 26th St, 0.6 mi, Turn
                        left onto B St, 0.5 mi, Turn right onto 30th St, 377 ft,
                        Turn left onto C St, Destination will be on the right,
                        0.1 mi, All-Star Connections, 3093 C St #1, San Diego,
                        CA 92102
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <h3 className="text-xl">
                          Directions From U.S. District Court Southern District
                          of California
                        </h3>
                        <ChevronUpIcon
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                        From U.S. District Court Southern District of
                        California, 333 W Broadway #420, San Diego, CA 92101,
                        Head east on W Broadway toward Union St, 2.1 mi, Turn
                        left onto 30th St, 387 ft, Turn right onto C St,
                        Destination will be on the right, 0.1 mi, All-Star
                        Connections, 3093 C St #1, San Diego, CA 92102
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <h3 className="text-xl">
                          Directions From San Diego State University
                        </h3>
                        <ChevronUpIcon
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-5 h-5 text-blue-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-50">
                        From San Diego State University, 5500 Campanile Dr, San
                        Diego, CA 92182, Get on CA-15/I-15 S from Montezuma Rd,
                        7 min (3.3 mi), Head north on Campanile Dr/Campanile
                        Mall Dr toward Hardy Ave, 315 ft, Use the left 2 lanes
                        to turn left onto Hardy Ave, 0.3 mi, Turn left onto 55th
                        St, 0.1 mi, Turn right onto Montezuma Rd, 1.4 mi, Slight
                        right onto Fairmount Ave/Fairmount Ave Expy, 0.2 mi, Use
                        the right 2 lanes to take the I-8 W ramp, 0.9 mi, Keep
                        right at the fork, follow signs for CA-15 S and merge
                        onto CA-15/I-15 S, 0.3 mi, Continue on CA-15/I-15 S to
                        Broadway. Take exit 1D from CA-94 W, 5 min (4.9 mi),
                        Merge onto CA-15/I-15 S, 4.2 mi, Take exit 2B for CA-94
                        W/ML King Jr Fwy, 0.2 mi, Merge onto CA-94 W, 0.3 mi,
                        Take exit 1D toward 30th St, 0.2 mi, Continue on
                        Broadway. Drive to C St, 1 min (0.3 mi), Merge onto
                        Broadway, 0.1 mi, Turn right onto 30th St, 387 ft, Turn
                        right onto C St, Destination will be on the right, 0.1
                        mi, All-Star Connections, 3093 C St #1, San Diego, CA
                        92102
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default MapFooter;
