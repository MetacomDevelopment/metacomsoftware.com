import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';

const FooterMap = () => {
  return (
    <section className="bg-dark section-no-margin py-5 my-5">
      <Container fluid className="py-5 px-0">
        <h2 className="display-4 font-weight-bold text-primary mb-5 drop-shadow-darker">
          Proudly Serving Massachusetts
        </h2>
        <Row noGutters className="justify-content-center mt-5 pt-5">
          <Col className="mb-5 mb-lg-0 drop-shadow-darker" xs={12} lg={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.5414841834045!2d-70.80986368455544!3d41.98865327921355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbef6c18dd52e15fd!2sAngels%20Towing%20-%20Junk%20Car%20Mass!5e0!3m2!1sen!2sus!4v1605062263109!5m2!1sen!2sus"
              width="100%"
              height="500px"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </Col>
          <Col className="mb-5 mb-lg-0" xs={12} lg={6}>
            <Container>
              <h3 className="text-light drop-shadow-dark p-1 font-weight-bold mb-4 text-left">
                Angels Towing - Junk Cars Mass
              </h3>
              <p className="no-drop-shadow">
                We service a 50 mile radius around our junkyard location in 87
                County Rd, Plympton, MA 02367. This includes all of the South
                Shore, Cape Cod, and Boston area.
              </p>
              <p className="no-drop-shadow">
                Our tow trucks will travel to Plymouth County, Barnstable
                County, Bristol County, Norfolk County, and Suffolk County.
              </p>
              <h3 className="text-light drop-shadow-dark p-1 font-weight-bold my-4 text-left">
                Directions to our Junkyard
              </h3>
              <p className="no-drop-shadow">
                Boston Logan International Airport (BOS) Boston, MA 02128, get
                on I-90 W from Transportation Way 2 min (0.7 mi). Head southeast
                20 ft. Slight right 0.1 mi. Use any lane to turn slightly left
                onto Transportation Way 0.2 mi. Turn left onto the Williams
                Tunnel ramp to I-90 W/I-93 Toll road 0.3 mi. Take I-93 S and
                MA-3 S to MA-3A N/Main St in Kingston. Take exit 9 from MA-3 S
                38 min (37.1 mi.) Merge onto I-90 W Toll road 1.5 mi. Take the
                exit onto I-93 S 10.2 mi. Use the left 2 lanes to take exit 7
                for MA-3 S toward Cape Cod 0.7 mi. Continue onto MA-3 S 24.4 mi.
                Take exit 9 to merge onto MA-3A N/Main St 0.3 mi. Drive to
                MA-106 W in Plympton 9 min. (4.9 mi.) Merge onto MA-3A N/Main St
                0.5 mi. Slight left onto Main St 0.8 mi. Continue straight onto
                MA-106 W/Wapping Rd. Continue to follow MA-106 W. Angels Towing
                - Junk Car Mass will be on the right 3.6 mi. at 87 County Rd,
                Plympton, MA 02367.
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FooterMap;
