import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import ImgMetacomLogo from '../../images/Logos/img-metacom-logo';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <>
        <Navbar
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
          expand="lg"
          collapseOnSelect={true}
        >
          <Container className="align-content-center">
            <AnchorLink
              to="/"
              className="svg-size-logo js-scroll-trigger text-secondary text-uppercase align-content-center pointer"
            >
              <ImgMetacomLogo />
            </AnchorLink>
            <Navbar.Toggle
              aria-label="Toggle navigation"
              aria-controls="navbarResponsive"
            >
              <span> </span>
              <span> </span>
              <span> </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarResponsive" aria-expanded="false">
              <Nav className="navbar-nav ml-auto mt-2 my-lg-0 ">
                {/* Desktop Menu */}
                <li className="nav-item d-none d-lg-inline nav-li-m-top">
                  <AnchorLink
                    className="nav-link text-uppercase"
                    to="/#practicesHome"
                    title="Our Practices"
                  >
                    Practices
                  </AnchorLink>
                </li>
                <li className="nav-item d-none d-lg-inline nav-li-m-top">
                  <AnchorLink
                    className="nav-link text-uppercase"
                    to="/#servicesHome"
                    title="Our Services"
                  >
                    Services
                  </AnchorLink>
                </li>
                <li className="nav-item d-none d-lg-inline nav-li-m-top">
                  <AnchorLink
                    className="nav-link text-uppercase"
                    to="/#aboutHome"
                    title="About Us"
                  >
                    About
                  </AnchorLink>
                </li>
                <li className="nav-item d-none d-lg-inline nav-li-m-top">
                  <AnchorLink
                    className="nav-link text-uppercase"
                    to="/#teamHome"
                    title="Our Team"
                  >
                    Team
                  </AnchorLink>
                </li>
                <li className="nav-item d-none d-lg-inline nav-li-m-top">
                  <Link className="nav-link text-uppercase" to="/blog/">
                    Blog
                  </Link>
                </li>
                <li className="nav-item my-auto d-none d-lg-inline">
                  <AnchorLink
                    className="btn-nav nav-link text-uppercase py-2 ml-4 drop-shadow pointer"
                    to="/#contactHome"
                    title="Contact Us"
                  >
                    Contact
                  </AnchorLink>
                </li>
                {/* Mobile Menu */}
                <Link to="/">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="mt-5 bg-white border-menu-item-top">
                      <div className="d-flex">
                        <i className="fas fa-home mt-3 mr-3 text-secondary"></i>
                        <span className="nav-button text-uppercase" to="/">
                          Home
                        </span>
                      </div>
                    </Container>
                  </li>
                </Link>
                <AnchorLink to="/#practicesHome">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="bg-white border-menu-item">
                      <div className="d-flex">
                        <i className="fas fa-toolbox mt-3 mr-3 text-secondary"></i>
                        <span className="nav-button text-uppercase">
                          Practices
                        </span>
                      </div>
                    </Container>
                  </li>
                </AnchorLink>
                <AnchorLink to="/#servicesHome">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="bg-white border-menu-item">
                      <div className="d-flex">
                        <i className="fas fa-tools mt-3 mr-3 text-secondary"></i>
                        <span className="nav-button text-uppercase">
                          Services
                        </span>
                      </div>
                    </Container>
                  </li>
                </AnchorLink>
                <AnchorLink to="/#aboutHome">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="bg-white border-menu-item">
                      <div className="d-flex">
                        <i className="fas fa-address-card mt-3 mr-3 text-secondary"></i>
                        <span className="nav-button text-uppercase">About</span>
                      </div>
                    </Container>
                  </li>
                </AnchorLink>
                <AnchorLink to="/#teamHome">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="bg-white border-menu-item">
                      <div className="d-flex">
                        <i className="fas fa-users mt-3 mr-3 text-secondary"></i>
                        <span className="nav-button text-uppercase">Team</span>
                      </div>
                    </Container>
                  </li>
                </AnchorLink>
                <Link to="/blog/">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="bg-white border-menu-item">
                      <div className="d-flex">
                        <i className="fas fa-pencil-alt mt-3 mr-3 text-secondary"></i>
                        <span className="nav-button text-uppercase">Blog</span>
                      </div>
                    </Container>
                  </li>
                </Link>
                <AnchorLink to="/#contactHome">
                  <li className="nav-item mx-3 d-lg-none">
                    <Row>
                      <Container>
                        <Col
                          xs={12}
                          className="py-3 bg-primary container justify-content-center align-items-center border-menu-contact"
                        >
                          <span className="nav-button text-uppercase text-white">
                            <span className="drop-shadow mobile-menu-contact-text">
                              Contact
                            </span>
                          </span>
                        </Col>
                      </Container>
                    </Row>
                  </li>
                </AnchorLink>
                <li className="nav-item mx-3 d-lg-none">
                  <Row>
                    <Container>
                      <Col
                        xs={6}
                        className="bg-secondary py-3 text-center justify-content-center align-items-center border-menu-item-bottom-left"
                      >
                        <a
                          className="nav-button text-uppercase"
                          href="tel:+11231231234"
                        >
                          <i className="fas fa-phone mr-3 text-white"></i>Call
                        </a>
                      </Col>
                      <Col
                        xs={6}
                        className="bg-secondary py-3 text-center justify-content-center align-items-center border-menu-item-bottom-right"
                      >
                        <a
                          className="nav-button text-uppercase"
                          href="mailto:sales@metcomsoftware.com?Subject=Important%20Email%20From%20Website"
                          target="_blank"
                        >
                          <i className="fas fa-envelope mr-3 text-white"></i>
                          Email
                        </a>
                      </Col>
                    </Container>
                  </Row>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
