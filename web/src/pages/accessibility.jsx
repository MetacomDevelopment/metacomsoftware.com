import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import useSanitySettingsCompany from '../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../hooks/useSanitySettingsMetadata';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeaderPage from '../components/layouts/HeroPage';
import Container from '../components/layouts/Container';

const AccessibilityPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query AccessibilityPageQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/accessibility/accessibility-job-recruiter-staffing-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const { ...allCompany } = useSanitySettingsCompany();
  const { ...allSocials } = useSanitySettingsSocials();
  const { ...allColors } = useSanitySettingsColors();
  const { ...allMetadata } = useSanitySettingsMetadata();

  const imgHeroBg = data.imgHeroBg.childImageSharp.gatsbyImageData;

  const seo = {
    title: `Read Our Accessibility Statement - WCAG Compliance`,
    description:
      'Website accessibility is important to us. We make sure our website is compliant with WCAG standards & meets all recommendations for proper user experience.',
    slug: 'https://www.allstarconnections.com/accessibility/',
  };

  const hero = {
    header: 'Accessibility',
    subheader:
      'Website accessibility is important to us. Our goal is to be WCAG compliant',
    alt: 'All-Star Connections is a recruitment agency that is WCAG compliant with website accessibility standards.',
  };

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} canonical={seo.slug}>
        <script type="application/ld+json">
          {`{
            '@context': 'https://schema.org',
						'@type': 'Organization',
						'@id': ${allCompany.website}${seo.slug},
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': ${allCompany.cityState},
              'postalCode': ${allCompany.zip},
              'streetAddress': ${allCompany.street}
            },
            'email': ${allCompany.email},
            'member': [
              {
                '@type': 'Organization'
              },
              {
                '@type': 'Organization'
              }
            ],
            'alumni': [
              {
                '@type': 'Person',
                'name': ${allCompany.owner}
              },
            ],
            'name': ${allCompany.name},
            'telephone': ${allCompany.phone}
          }`}
        </script>
      </SEO>
      <HeaderPage
        imgHeroBg={imgHeroBg}
        altText={hero.alt}
        headerText={hero.header}
        subheaderText={hero.subheader}
      />
      <Container type="sm">
        <div className="py-10 lg:max-w-3xl mx-auto space-y-8">
          <h2 className="text-center">
            <span className="text-base text-gray-500 uppercase break-normal">
              {allCompany.name}
              <br />
            </span>
            <span className="break-normal text-3xl">
              Accessibility Statement
            </span>
          </h2>
          <p>
            {allCompany.name} is committed to ensuring digital accessibility for
            people with disabilities. We are continually improving the user
            experience for everyone, and applying the relevant accessibility
            standards.
          </p>
          <h3 className="font-bold capitalize">
            Measures to support accessibility
          </h3>
          <p>
            {allCompany.name} takes the following measures to ensure
            accessibility of our website (&quot;
            <a
              className="italic"
              href={allCompany.website}
              target="_blank"
              rel="noreferrer"
            >
              {allCompany.website}
            </a>
            &quot;):
          </p>
          <ul className="list-disc list-inside">
            <li>Include accessibility as part of our mission statement.</li>
            <li>Integrate accessibility into our procurement practices.</li>
            <li>Integrate accessibility into our procurement practices.</li>
            <li>Provide continual accessibility training for our staff.</li>
            <li>Include people with disabilities in our design personas.</li>
          </ul>

          <h3 className="font-bold capitalize">Conformance status</h3>
          <p>
            The{' '}
            <a
              target="_blank"
              href="https://www.w3.org/WAI/standards-guidelines/wcag/"
              rel="noreferrer"
            >
              Web Content Accessibility Guidelines (WCAG)
            </a>{' '}
            defines requirements for designers and developers to improve
            accessibility for people with disabilities. It defines three levels
            of conformance: Level A, Level AA, and Level AAA. Citylights
            WebStore is partially conformant with WCAG 2.1 level AA. Partially
            conformant means that some parts of the content do not fully conform
            to the accessibility standard.
          </p>

          <h4 className="py-5 font-bold capitalize">
            Additional accessibility considerations
          </h4>
          <p>
            Although our goal is WCAG 2.1 Level AA conformance, we have also
            applied some Level AAA Success Criteria: Images of text are only
            used for decorative purposes. Re-authentication after a session
            expires does not cause loss of data. Some videos have sign language
            interpretation.
          </p>
          <h3 className="font-bold">Feedback</h3>
          <p>
            We welcome your feedback on the accessibility of our website. Please
            let us know if you encounter accessibility barriers on{' '}
            <a
              className="italic"
              href={allCompany.website}
              target="_blank"
              rel="noreferrer"
            >
              {allCompany.website}
            </a>
            .
          </p>
          <ul className="list-disc list-inside">
            <li>
              Phone:{' '}
              <a href={allCompany.phoneHref} target="_blank" rel="noreferrer">
                {allCompany.phone}
              </a>
            </li>
            <li>
              Email:{' '}
              <a href={allCompany.emailHref} target="_blank" rel="noreferrer">
                {allCompany.email}
              </a>
            </li>
            <li>
              Address:{' '}
              <a href={allSocials.gmbCid} target="_blank" rel="noreferrer">
                {allCompany.address}
              </a>
            </li>
          </ul>
          <p>We try to respond to feedback within 5 business days.</p>
          <h3 className="font-bold capitalize">
            Compatibility with browsers and assistive technology
          </h3>
          <p>
            {allCompany.name}'s website is designed to be compatible with the
            following assistive technologies:
          </p>
          <ul className="list-disc list-inside">
            <li>
              &quot;browser X with assistive technology Y on operating system
              Z&quot;
            </li>
          </ul>
          <p>{allCompany.name}'s website is not compatible with:</p>
          <ul className="list-disc list-inside">
            <li>
              &quot;browsers older than 3 major versions&quot; or &quot;Mobile
              operating systems older than 5 year&quot;
            </li>
          </ul>
          <h3 className="font-bold capitalize">Technical specifications</h3>
          <p>
            Accessibility of Citylights WebStore relies on the following
            technologies to work with the particular combination of web browser
            and any assistive technologies or plugins installed on your
            computer:
          </p>
          <ul className="list-disc list-inside">
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <h3 className="font-bold capitalize">Limitations and alternatives</h3>
          <p>
            Despite our best efforts to ensure accessibility of Citylights
            WebStore, there may be some limitations. Below is a description of
            known limitations, and potential solutions. Please contact us if you
            observe an issue not listed below.
          </p>
          <p>Known limitations for {allCompany.name}'s website:</p>
          <ol className="list-decimal list-inside">
            <li>
              <span className="font-bold">Comments from users</span>: uploaded
              images may not have text alternatives because we cannot ensure the
              quality of contributions. We monitor user comments and typically
              repair issues within 10 business days. Please use the 'report
              issue' button if you encounter an issue.
            </li>
            <li>
              <span className="font-bold">Archived documents</span>: might not
              work with current assistive technologies because they use outdated
              technologies that do not support accessibility. We convert
              documents to new formats upon request within 3 business days.
              Please contact documents@example.org for support.
            </li>
          </ol>
          <h3 className="font-bold capitalize">Assessment approach</h3>
          <p>
            {allCompany.name} assessed the accessibility of our website by the
            following approaches:
          </p>
          <ul className="list-disc list-inside">
            <li>External evaluation</li>
          </ul>
          <h3 className="font-bold capitalize">
            Formal approval of this accessibility statement
          </h3>
          <p>This Accessibility Statement is approved by:</p>
          <ul className="list-inside">
            <li>{allCompany.name}</li>
            <li className="italic">Communication Department</li>
            <li className="italic">Director of Communication</li>
          </ul>
          <h3 className="font-bold capitalize">Formal complaints</h3>
          <p>
            We aim to respond to accessibility feedback within 5 business days,
            and to propose a solution within 10 business days. You are entitled
            to escalate a complaint to the national authority, should you be
            dissatisfied with our response to you.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default AccessibilityPage;
