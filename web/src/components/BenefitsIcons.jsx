import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';

import { SanityBlockContent, Section, Container, Grid, Col } from '.';
import { useSanity } from '../hooks';

const StyledBenefits = styled((props) => <Section {...props} />)`
  background-color: ${(props) => props.$bgColor};
  & span {
    color: ${(props) => props.$spanColor};
  }
`;

const StyledTagline = styled.span`
  color: ${(props) => props.$spanColor};
`;

const StyledIcon = styled.div`
  color: ${(props) => props.$color};
`;

const StyledAuthor = styled.p`
  color: ${(props) => props.$color};
`;

function useDynamicSVGImport(name, options = {}) {
  const ImportedIconRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { onCompleted, onError } = options;
  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(
            `!!@svgr/webpack?-svgo,+titleProp,+ref!../assets/graphics/${name}.svg`
          )
        ).default;

        // ImportedIconRef.current = (
        //   await import(`../assets/graphics/${name}.svg`)
        // ).ReactComponent;

        if (onCompleted) {
          onCompleted(name, ImportedIconRef.current);
        }
      } catch (err) {
        if (onError) {
          onError(err);
        }
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
}

/**
 * Simple wrapper for dynamic SVG import hook. You can implement your own wrapper,
 * or even use the hook directly in your components.
 */
const Icon = ({ name, onCompleted, onError, ...rest }) => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError,
  });
  if (error) {
    return error.message;
  }
  if (loading) {
    return 'Loading...';
  }
  if (SvgIcon) {
    return <SvgIcon {...rest} />;
  }
  return null;
};

const BenefitsIcons = ({
  block,
  raw,
  index,
  idName,
  header,
  benefit,
  icon,
  title,
  _rawDescription,
  author,
  info,
}) => {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  const handleOnCompleted = useCallback(
    (iconName) => console.log(`${iconName} successfully loaded`),
    []
  );

  const handleIconError = useCallback((err) => console.error(err.message), []);

  return (
    <StyledBenefits
      idName={idName}
      type="sm"
      bgColor={neutral.light.color}
      h2Color={neutral.darker.color}
      h3Color={primary.dark.color}
      $spanColor={accent.light.color}
    >
      <Container classes="max-w-md px-4 text-center sm:max-w-3xl lg:max-w-7xl">
        <StyledTagline
          $spanColor={accent.dark.color}
          className="text-base font-semibold tracking-wider uppercase"
        >
          {header.tagline}
        </StyledTagline>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight lg:max-w-lg mx-auto">
          {header.headline}
        </h2>
        <Grid classes="mt-20 gap-3 sm:grid-cols-3 lg:grid-cols-3">
          {benefit.map((item) => (
            <Col
              key={item._key}
              classes="pt-6 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <StyledIcon
                className="h-40 w-40 mx-auto"
                $color={accent.dark.color}
              >
                <Icon
                  name={item?.icon}
                  fill="currentColor"
                  height="10rem"
                  width="10rem"
                  onCompleted={handleOnCompleted}
                  onError={handleIconError}
                  className="transition hover:scale-105"
                />
              </StyledIcon>
              <div className="relative z-10">
                <h3 className="mt-8 text-3xl font-medium">{item.title}</h3>
                <p className="mt-5 mb-8 text-base text-zinc-500 text-left">
                  <SanityBlockContent blocks={item._rawDescription} />
                </p>
                <StyledAuthor
                  className="mt-5 text-base font-bold"
                  $color={primary.dark.color}
                >
                  <span>{item.author}</span>
                </StyledAuthor>
                <p className="mb-8 text-base text-zinc-800 font-semibold">
                  <span>{item.info}</span>
                </p>
              </div>
            </Col>
          ))}
        </Grid>
      </Container>
    </StyledBenefits>
  );
};

export default BenefitsIcons;
