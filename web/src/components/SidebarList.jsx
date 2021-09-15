import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';

import { useSanity } from '../hooks';
import { TextLink } from '.';

const StyledLink = styled.a`
  color: ${(props) => props.color} !important;
  font-weight: 500;
`;

const SidebarList = ({ type }) => {
  const data = useStaticQuery(graphql`
    query SidebarListQ {
      allBrandSidebarJson {
        nodes {
          headline
          links {
            anchor
            link
          }
        }
      }
      allServiceSidebarJson {
        nodes {
          headline
          links {
            anchor
            link
          }
        }
      }
      allLocationSidebarJson {
        nodes {
          headline
          links {
            anchor
            link
          }
        }
      }
    }
  `);

  const brands = data.allBrandSidebarJson.nodes;
  const services = data.allServiceSidebarJson.nodes;
  const businessLocations = data.allLocationSidebarJson.nodes;
  const { primary, secondary, accent, neutral, hero } = useSanity();

  switch (type) {
    default:
      return (
        <div className="space-y-6 lg:sticky lg:top-44">
          {brands.map((brand) => (
            <h2 className="text-center">{brand.headline}</h2>
          ))}
          <div
            className="p-3 lg:p-5 rounded-xl shadow-xl"
            style={{ backgroundColor: colors.primary.dark.color }}
          >
            <ul className="space-y-3 divide-y">
              {brands.map((brand) =>
                brand.links.map((link) => (
                  <li className="py-3">
                    <TextLink type="internal" light weight="500" to={link.link}>
                      <h3>
                        <span className="text-gray-50 font-bold text-lg mr-2">
                          >
                        </span>
                        {link.anchor}
                      </h3>
                    </TextLink>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      );

    case 'service':
      return (
        <div className="space-y-6 lg:sticky lg:top-44">
          {services.map((service) => (
            <h2 className="text-center">{service.headline}</h2>
          ))}
          <div
            className="p-3 lg:p-5 rounded-xl shadow-xl"
            style={{ backgroundColor: colors.primary.dark.color }}
          >
            <ul className="space-y-3 divide-y">
              {services.map((service) =>
                service.links.map((link) => (
                  <li className="py-3">
                    <TextLink type="internal" light weight="500" to={link.link}>
                      <h3>
                        <span className="text-gray-50 font-bold text-lg mr-2">
                          >
                        </span>
                        {link.anchor}
                      </h3>
                    </TextLink>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      );

    case 'location':
      return (
        <div className="space-y-6 lg:sticky lg:top-44">
          {businessLocations.map((location) => (
            <h2 className="text-center">{location.headline}</h2>
          ))}
          <div
            className="p-3 lg:p-5 rounded-xl shadow-xl"
            style={{ backgroundColor: colors.primary.dark.color }}
          >
            <ul className="space-y-3 divide-y">
              {businessLocations.map((location) =>
                location.links.map((link) => (
                  <li className="py-3">
                    <TextLink type="internal" light weight="500" to={link.link}>
                      <h3>
                        <span className="text-gray-50 font-bold text-lg mr-2">
                          >
                        </span>
                        {link.anchor}
                      </h3>
                    </TextLink>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      );
  }
};

export default SidebarList;
