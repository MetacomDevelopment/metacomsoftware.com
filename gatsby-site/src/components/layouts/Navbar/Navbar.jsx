import React from 'react';
import { Link } from 'gatsby';
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
            <Link
              to="/"
              className="svg-size-logo js-scroll-trigger text-secondary text-uppercase align-content-center pointer"
            >
              <ImgMetacomLogo />
            </Link>
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
                  <Link className="nav-link text-uppercase" to="/">
                    Practices
                  </Link>
                </li>
                <li className="nav-item d-none d-lg-inline nav-li-m-top">
                  <Link className="nav-link text-uppercase" to="/">
                    Services
                  </Link>
                </li>
                <li className="nav-item d-none d-lg-inline nav-li-m-top">
                  <Link className="nav-link text-uppercase" to="/">
                    About
                  </Link>
                </li>
                <li className="nav-item d-none d-lg-inline nav-li-m-top">
                  <Link className="nav-link text-uppercase" to="/">
                    Team
                  </Link>
                </li>
                <li className="nav-item d-none d-lg-inline nav-li-m-top">
                  <Link className="nav-link text-uppercase" to="/blog/">
                    Blog
                  </Link>
                </li>
                <li className="nav-item my-auto d-none d-lg-inline">
                  <a
                    className="btn-nav nav-link text-uppercase py-2 ml-4 drop-shadow pointer"
                    href="tel:+17819363974"
                  >
                    Contact
                  </a>
                </li>
                {/* Mobile Menu */}
                <Link to="/">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="mt-5 bg-secondary border-menu-item-top">
                      <div className="d-flex">
                        <i className="fas fa-home mt-3 mr-3 text-white"></i>
                        <span
                          className="nav-button text-uppercase drop-shadow"
                          to="/"
                        >
                          Home
                        </span>
                      </div>
                    </Container>
                  </li>
                </Link>
                {/* <Link to="/who-we-are/">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="bg-secondary border-menu-item">
                      <div className="d-flex">
                        <i className="fas fa-address-card mt-3 mr-3 text-white"></i>
                        <span className="nav-button text-uppercase drop-shadow">
                          About
                        </span>
                      </div>
                    </Container>
                  </li>
                </Link>
                <Link to="/services/">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="bg-secondary border-menu-item">
                      <div className="d-flex">
                        <i className="fas fa-tools mt-3 mr-3 text-white"></i>
                        <span className="nav-button text-uppercase drop-shadow">
                          Services
                        </span>
                      </div>
                    </Container>
                  </li>
                </Link>
                <Link to="/gallery/">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="bg-secondary border-menu-item">
                      <div className="d-flex">
                        <i className="fas fa-camera mt-3 mr-3 text-white"></i>
                        <span className="nav-button text-uppercase drop-shadow">
                          Gallery
                        </span>
                      </div>
                    </Container>
                  </li>
                </Link>
                <Link to="/testimonials/">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="bg-secondary border-menu-item">
                      <div className="d-flex">
                        <i className="fas fa-medal mt-3 mr-3 text-white"></i>
                        <span className="nav-button text-uppercase drop-shadow">
                          Testimonials
                        </span>
                      </div>
                    </Container>
                  </li>
                </Link>
                <Link to="/employment/">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="bg-secondary border-menu-item">
                      <div className="d-flex">
                        <i className="fas fa-hard-hat mt-3 mr-3 text-white"></i>
                        <span className="nav-button text-uppercase drop-shadow">
                          Employment
                        </span>
                      </div>
                    </Container>
                  </li>
                </Link>
                <Link to="/blog/">
                  <li className="nav-item mx-3 d-lg-none">
                    <Container className="bg-secondary border-menu-item">
                      <div className="d-flex">
                        <i className="fas fa-pencil-alt mt-3 mr-3 text-white"></i>
                        <span className="nav-button text-uppercase drop-shadow">
                          Blog
                        </span>
                      </div>
                    </Container>
                  </li>
                </Link> */}
                <Link to="/contact-us/">
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
                </Link>
                <li className="nav-item mx-3 d-lg-none">
                  <Row>
                    <Container>
                      <Col
                        xs={6}
                        className="bg-secondary py-3 text-center justify-content-center align-items-center border-menu-item-bottom-left"
                      >
                        <a
                          className="nav-button text-uppercase drop-shadow-dark"
                          href="tel:+17742696002"
                        >
                          <i className="fas fa-phone mr-3 text-white"></i>Call
                        </a>
                      </Col>
                      <Col
                        xs={6}
                        className="bg-secondary py-3 text-center justify-content-center align-items-center border-menu-item-bottom-right"
                      >
                        <a
                          className="nav-button text-uppercase drop-shadow-dark"
                          href="mailto:michael.maher@mdhconstruction.com?Subject=Important%20Email%20From%20Website"
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
