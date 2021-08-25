import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Grid = ({ children, cols, gapXs, gapLg, gapX, gapY, classes }) => {
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
  return (
    <motion.div
      className={`grid grid-cols-1 auto-rows-auto lg:grid-cols-${cols} gap-${gapXs} lg:gap-${gapLg} lg:gap-y-${gapY} lg:gap-x-${gapX} ${classes}`}
      ref={ref}
      variants={variants}
      initial="initial"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

Grid.defaultProps = {
  classes: ``,
  cols: 2,
  gapXs: 16,
  gapLg: 16,
  gapX: 16,
  gapY: 16,
};

Grid.propTypes = {
  cols: PropTypes.number,
  gapXs: PropTypes.number,
  gapLg: PropTypes.number,
  gapX: PropTypes.number,
  gapY: PropTypes.number,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Grid;
