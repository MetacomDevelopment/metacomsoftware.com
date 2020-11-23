import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonInternalLink from '../../common/Buttons/ButtonExternalLink/ButtonExternalLink';

const Header = ({
  className,
  fluid,
  textMain,
  textSecondary,
  alt,
  btnLabel,
  btnLink,
}) => {
  return (
    <BackgroundImage
      Tag="header"
      className={className}
      fluid={fluid}
      backgroundColor="#040e18"
      textMain={textMain}
      textSecondary={textSecondary}
      alt={alt}
      btnLabel={btnLabel}
      btnLink={btnLink}
    >
      <Container>
        <Row className="align-items-center justify-content-center text-center">
          <Col lg={10} className="align-items-center justify-content-center">
            <h1 className="font-weight-bold drop-shadow-darker">{textMain}</h1>
            <span className="display-5 text-white font-weight-bold drop-shadow-darker">
              {textSecondary}
            </span>
            <Container className="text-center mt-5">
              <ButtonInternalLink btnLink={btnLink} btnLabel={btnLabel} />
            </Container>
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
};

export default Header;
