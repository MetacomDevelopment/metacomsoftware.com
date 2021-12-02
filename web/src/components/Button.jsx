import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import { useSanity } from '../hooks';

const StyledButtonInternal = styled((props) => <Link {...props} />)`
  color: rgba(250, 250, 250) !important;
  background-color: ${(props) => props.bgColor};
  &:hover {
    background-color: ${(props) => props.bgColorHover};
  }
`;

const StyledButtonForm = styled.button`
  background-color: ${(props) => props.bgColor};
  &:hover {
    background-color: ${(props) => props.bgColorHover};
  }
`;

const Button = ({
  btn,
  bgColor,
  secondaryBtn,
  internalLink,
  link,
  url,
  label,
  anchor,
}) => {
  const { website, primary, secondary, accent, neutral, hero } = useSanity();

  switch (btn) {
    default:
      return (
        <StyledButtonInternal
          to={
            internalLink.metadata.slug.current === 'home'
              ? '/'
              : `/${internalLink.metadata.slug.current}/`
          }
          className="inline-flex items-center py-3 px-6 text-lg font-bold text-gray-50 hover:text-white border border-gray-50 hover:border-gray-50 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:-translate-y-0.5 translate transform transition-all"
          bgColor={accent.default.color}
          bgColorHover={accent.dark.color}
        >
          <span className="drop-shadow-text-cta">{label}</span>
        </StyledButtonInternal>
      );
    case 'internal':
      return (
        <StyledButtonInternal
          to={internalLink === 'home' ? '/' : `/${internalLink}/`}
          className="inline-flex items-center py-3 px-6 text-lg font-bold text-gray-50 hover:text-white border border-gray-50 hover:border-gray-50 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:-translate-y-0.5 translate transform transition-all"
          bgColor={accent.default.color}
          bgColorHover={accent.dark.color}
        >
          <span className="drop-shadow-text-cta">{label}</span>
        </StyledButtonInternal>
      );
    case 'external':
      return (
        <StyledButtonInternal
          href={url}
          className="inline-flex items-center py-3 px-6 text-lg font-bold text-gray-50 hover:text-white border border-gray-50 hover:border-gray-50 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:-translate-y-0.5 translate transform transition-all"
          secondaryBtn={secondaryBtn}
          bgColor={secondaryBtn ? 'transparent' : accent.default.color}
          bgColorHover={secondaryBtn ? accent.default.color : accent.dark.color}
        >
          <span className="drop-shadow-text-cta">
            {website.cta !== null ? website.cta : label}
          </span>
        </StyledButtonInternal>
      );
    case 'form':
      return (
        <StyledButtonForm
          type="submit"
          value="Submit"
          className="inline-flex items-center py-3 px-6 text-lg font-bold text-gray-50 hover:text-white border border-gray-50 hover:border-gray-50 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:-translate-y-0.5 translate transform transition-all"
          secondaryBtn={secondaryBtn}
          bgColor={secondaryBtn ? 'transparent' : accent.default.color}
          bgColorHover={secondaryBtn ? accent.default.color : accent.dark.color}
        >
          <span className="drop-shadow-text-cta">
            {website.cta !== null ? website.cta : label}
          </span>
        </StyledButtonForm>
      );
    case 'anchor':
      return (
        <AnchorLink
          to={anchor}
          className="inline-flex items-center py-3 px-6 text-lg font-bold text-gray-50 hover:text-white border border-gray-50 hover:border-gray-50 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:-translate-y-0.5 translate transform transition-all cursor-pointer"
          secondaryBtn={secondaryBtn}
          bgColor={secondaryBtn ? 'transparent' : accent.default.color}
          bgColorHover={secondaryBtn ? accent.default.color : accent.dark.color}
        >
          <span className="drop-shadow-text-cta">{label}</span>
        </AnchorLink>
      );
  }
};

Button.defaultProps = {
  btn: `internal`,
  link: `/contact/`,
  label: `Schedule Consultation`,
};

Button.propTypes = {
  btn: PropTypes.string,
  link: PropTypes.string,
  label: PropTypes.string,
};

export default Button;
