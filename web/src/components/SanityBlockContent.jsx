import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SanityBlockContent = ({ blocks, classes }) => {
  const serializers = {
    marks: {
      internalLink: ({ mark, children }) => {
        const { metadata = {} } = mark;
        const href =
          metadata.slug.current === 'home' ? '/' : `/${metadata.slug.current}/`;
        return <a href={href}>{children}</a>;
      },
      externalLink: ({ mark, children }) => {
        // Read https://css-tricks.com/use-target_blank/
        const { blank, href } = mark;
        return blank ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ) : (
          <a href={href}>{children}</a>
        );
      },
    },
  };

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
      ref={ref}
      variants={variants}
      initial="initial"
      animate={controls}
      className={`space-y-6 sanity-list ${classes}`}
    >
      <BlockContent
        blocks={blocks}
        serializers={serializers}
        className={`space-y-6 sanity-list ${classes}`}
      />
    </motion.div>
  );
};

// SanityBlockContent.defaultProps = {
//   classes: ``,
//   blocks: `sanity._rawBody`,
// };

// SanityBlockContent.propTypes = {
//   classes: PropTypes.string,
//   blocks: PropTypes.string,
// };

export default SanityBlockContent;
