import React from 'react';

import {
  CustomSectionText,
  // CustomSectionImgText,
  // CustomSectionSvgText,
} from '.';

const CustomSections = ({ block, raw, index }) => {
  const {
    _rawColOneContentText,
    _rawColTwoContentText,
    _rawColThreeContentText,
    _rawColFourContentText,
    content,
    idName,
    paddingPosition,
    paddingSize,
    bg,
    twColor,
    customColor,
    bgImg,
    headline,
    subheadline,
    tagline,
    layout,
    contentImg,
    contentSvg,
    contentText,
  } = block;

  switch (content) {
    case 'text':
      return (
        <CustomSectionText
          block={block}
          raw={raw}
          index={index}
          _rawColOneContentText={_rawColOneContentText}
          _rawColTwoContentText={_rawColTwoContentText}
          _rawColThreeContentText={_rawColThreeContentText}
          _rawColFourContentText={_rawColFourContentText}
          idName={idName}
          paddingPosition={paddingPosition}
          paddingSize={paddingSize}
          bg={bg}
          twColor={twColor}
          customColor={customColor}
          bgImg={bgImg}
          headline={headline}
          subheadline={subheadline}
          tagline={tagline}
          layout={layout}
          contentImg={contentImg}
          contentSvg={contentSvg}
          contentText={contentText}
        />
      );
    case 'imgText':
      return (
        <CustomSectionImgText
          block={block}
          raw={raw}
          index={index}
          _rawColOneContentText={_rawColOneContentText}
          _rawColTwoContentText={_rawColTwoContentText}
          _rawColThreeContentText={_rawColThreeContentText}
          _rawColFourContentText={_rawColFourContentText}
          idName={idName}
          paddingPosition={paddingPosition}
          paddingSize={paddingSize}
          bg={bg}
          twColor={twColor}
          customColor={customColor}
          bgImg={bgImg}
          headline={headline}
          subheadline={subheadline}
          tagline={tagline}
          layout={layout}
          contentImg={contentImg}
          contentSvg={contentSvg}
          contentText={contentText}
        />
      );
    case 'svgText':
      return (
        <CustomSectionSvgText
          block={block}
          raw={raw}
          index={index}
          _rawColOneContentText={_rawColOneContentText}
          _rawColTwoContentText={_rawColTwoContentText}
          _rawColThreeContentText={_rawColThreeContentText}
          _rawColFourContentText={_rawColFourContentText}
          idName={idName}
          paddingPosition={paddingPosition}
          paddingSize={paddingSize}
          bg={bg}
          twColor={twColor}
          customColor={customColor}
          bgImg={bgImg}
          headline={headline}
          subheadline={subheadline}
          tagline={tagline}
          layout={layout}
          contentImg={contentImg}
          contentSvg={contentSvg}
          contentText={contentText}
        />
      );
    default:
      return (
        <CustomSectionText
          block={block}
          raw={raw}
          index={index}
          _rawColOneContentText={_rawColOneContentText}
          _rawColTwoContentText={_rawColTwoContentText}
          _rawColThreeContentText={_rawColThreeContentText}
          _rawColFourContentText={_rawColFourContentText}
          idName={idName}
          paddingPosition={paddingPosition}
          paddingSize={paddingSize}
          bg={bg}
          twColor={twColor}
          customColor={customColor}
          bgImg={bgImg}
          headline={headline}
          subheadline={subheadline}
          tagline={tagline}
          layout={layout}
          contentImg={contentImg}
          contentSvg={contentSvg}
          contentText={contentText}
        />
      );
  }
};

export default CustomSections;
