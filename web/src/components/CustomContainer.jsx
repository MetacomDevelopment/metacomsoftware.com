import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StyledContainer = styled.div`
  background-color: ${(props) => props.$bgColor};
`;

const CustomContainer = ({
  padding,
  children,
  classes,
  bgColor,
  xInitial,
  delay,
  duration,
  trigger,
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: xInitial,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration, delay },
    },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: trigger });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  switch (padding) {
    case 'none':
      return (
        <StyledContainer $bgColor={bgColor}>
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            className={`mx-auto w-full ${classes}`}
          >
            {children}
          </motion.div>
        </StyledContainer>
      );
    case 'sm':
      return (
        <StyledContainer $bgColor={bgColor}>
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${classes}`}
          >
            {children}
          </motion.div>
        </StyledContainer>
      );
    case 'lg':
      return (
        <StyledContainer $bgColor={bgColor}>
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${classes}`}
          >
            <motion.div className="mx-auto max-w-3xl">{children}</motion.div>
          </motion.div>
        </StyledContainer>
      );
    case 'breaks':
      return (
        <StyledContainer $bgColor={bgColor}>
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            className={`container mx-auto px-4 sm:px-6 lg:px-8 ${classes}`}
          >
            {children}
          </motion.div>
        </StyledContainer>
      );
    default:
      return (
        <StyledContainer $bgColor={bgColor}>
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            className={`mx-auto sm:px-6 lg:px-8 ${classes}`}
          >
            {children}
          </motion.div>
        </StyledContainer>
      );
  }
};

CustomContainer.defaultProps = {
  padding: `sm`,
  classes: ``,
  bgColor: ``,
  delay: 0,
  duration: 0.5,
  xInitial: 0,
  trigger: false,
};

CustomContainer.propTypes = {
  padding: PropTypes.string,
  bgColor: PropTypes.string,
  classes: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number,
  xInitial: PropTypes.number,
  trigger: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default CustomContainer;
