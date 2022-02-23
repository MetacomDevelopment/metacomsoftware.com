import React, { useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnchorText } from '.';
import { useSanity } from '../hooks';

const SanityBlockContent = ({ blocks, classes }) => {
  const { primary, secondary, accent, neutral, hero } = useSanity();

  const serializers = {
    list: (props) => {
      const { type } = props;
      const bullet = type === 'bullet';
      if (bullet) {
        return <ul className="sanity-ul">{props.children}</ul>;
      }
      return <ol className="sanity-ol">{props.children}</ol>;
    },

    listItem: ({ children }) => <li className="">{children}</li>,
    marks: {
      highlight: ({ children }) => (
        <span className="font-bold bg-yellow-400">{children}</span>
      ),
      internalLink: ({ mark, children }) => {
        const { reference = {} } = mark;
        const href =
          reference.slug.current === 'home'
            ? '/'
            : `/${reference.slug.current}/`;
        return (
          <AnchorText
            type="internal"
            to={href}
            color={accent.default.color}
            colorHover={accent.dark.color}
          >
            {children}
          </AnchorText>
        );
      },
      externalLink: ({ mark, children }) => {
        const { blank, href } = mark;
        return blank ? (
          <AnchorText
            type="external"
            href={href}
            color={accent.default.color}
            colorHover={accent.dark.color}
          >
            {children}
          </AnchorText>
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
      className={`space-y-6 ${classes}`}
    >
      <BlockContent
        blocks={blocks}
        serializers={serializers}
        className={`space-y-6 sanity-headlines ${classes}`}
      />
    </motion.div>
  );
};

export default SanityBlockContent;
