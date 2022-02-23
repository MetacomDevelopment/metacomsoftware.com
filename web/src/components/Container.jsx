import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { StyledContainer } from './styles/Container.styled';

const Container = ({
  padding,
  children,
  classes,
  bgColor,
  h2Color,
  h3Color,
  h3ColorHover,
  spanColor,
  outerClasses,
}) => {
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

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
    if (!inView) {
      controls.start('initial');
    }
  }, [controls, inView]);

  switch (padding) {
    default:
      return (
        <StyledContainer
          $bgColor={bgColor}
          $h2Color={h2Color}
          $h3Color={h3Color}
          $h3ColorHover={h3ColorHover}
          $spanColor={spanColor}
          className={outerClasses}
        >
          <motion.div
            ref={ref}
            variants={variants}
            initial="initial"
            animate={controls}
            className={`mx-auto sm:px-6 lg:px-8 ${classes}`}
          >
            {children}
          </motion.div>
        </StyledContainer>
      );
    case 'none':
      return (
        <StyledContainer
          $bgColor={bgColor}
          $h2Color={h2Color}
          $h3Color={h3Color}
          $h3ColorHover={h3ColorHover}
          $spanColor={spanColor}
          className={outerClasses}
        >
          <motion.div
            ref={ref}
            variants={variants}
            initial="initial"
            animate={controls}
            className={`mx-auto w-full ${classes}`}
          >
            {children}
          </motion.div>
        </StyledContainer>
      );
    case 'sm':
      return (
        <StyledContainer
          $bgColor={bgColor}
          $h2Color={h2Color}
          $h3Color={h3Color}
          $h3ColorHover={h3ColorHover}
          $spanColor={spanColor}
          className={outerClasses}
        >
          <motion.div
            ref={ref}
            variants={variants}
            initial="initial"
            animate={controls}
            className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${classes}`}
          >
            {children}
          </motion.div>
        </StyledContainer>
      );
    case 'lg':
      return (
        <StyledContainer
          $bgColor={bgColor}
          $h2Color={h2Color}
          $h3Color={h3Color}
          $h3ColorHover={h3ColorHover}
          $spanColor={spanColor}
          className={outerClasses}
        >
          <motion.div
            ref={ref}
            variants={variants}
            initial="initial"
            animate={controls}
            className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${classes}`}
          >
            <motion.div className="mx-auto max-w-3xl">{children}</motion.div>
          </motion.div>
        </StyledContainer>
      );
    case 'breaks':
      return (
        <StyledContainer
          $bgColor={bgColor}
          $h2Color={h2Color}
          $h3Color={h3Color}
          $h3ColorHover={h3ColorHover}
          $spanColor={spanColor}
          className={outerClasses}
        >
          <motion.div
            ref={ref}
            variants={variants}
            initial="initial"
            animate={controls}
            className={`container mx-auto px-4 sm:px-6 lg:px-8 ${classes}`}
          >
            {children}
          </motion.div>
        </StyledContainer>
      );
  }
};

Container.defaultProps = {
  padding: `sm`,
  classes: ``,
};

Container.propTypes = {
  padding: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
