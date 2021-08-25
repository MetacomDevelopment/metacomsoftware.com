import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import useSanitySettingsCompany from '../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../hooks/useSanitySettingsMetadata';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeaderPage from '../components/layouts/HeroPage';
import PageSidebar from '../components/layouts/PageSidebar';
import Testimonial from '../components/common/Testimonial';
import Container from '../components/layouts/Container';
import Section from '../components/layouts/Section';
import Grid from '../components/layouts/Grid';
import Col from '../components/layouts/Col';

const TestimonialsPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query TestimonialsPageQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/testimonials/recruitment-agency-testimonials-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgMike: file(
        relativePath: {
          eq: "assets/images/testimonials/mike-egli-director-supply-chain-tegra-medical-devices.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgBarry: file(
        relativePath: {
          eq: "assets/images/testimonials/barry-shaw-senior-director-quality-arsenal-medical.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgKatie: file(
        relativePath: {
          eq: "assets/images/testimonials/kate-linkedin-5-star-review-engineering-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgHiro: file(
        relativePath: {
          eq: "assets/images/testimonials/hiro-endo-chief-technology-officer-test-devices-schenck-usa-corp.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgTina: file(
        relativePath: {
          eq: "assets/images/testimonials/tina-vidal-duart-chief-executive-officer-cdr-health.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgAmir: file(
        relativePath: {
          eq: "assets/images/testimonials/amir-selman-manager-manufacturing-excellence-advanced-instruments.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgBruno: file(
        relativePath: {
          eq: "assets/images/testimonials/bruno-ribeiro-quality-manager-line-bore-industries.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgGarrett: file(
        relativePath: {
          eq: "assets/images/testimonials/garrett-krapf-regional-account-manager-yale-cordage.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgInderjit: file(
        relativePath: {
          eq: "assets/images/testimonials/inderjit-panesar-financial-controller-faber-construction.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgMatt: file(
        relativePath: {
          eq: "assets/images/testimonials/matt-vice-lead-packaging-engineer-kimberly-clark-professional.jpg"
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
  const imgMike = data.imgMike.childImageSharp.gatsbyImageData;
  const imgBarry = data.imgBarry.childImageSharp.gatsbyImageData;
  const imgKatie = data.imgKatie.childImageSharp.gatsbyImageData;
  const imgHiro = data.imgHiro.childImageSharp.gatsbyImageData;
  const imgTina = data.imgTina.childImageSharp.gatsbyImageData;
  const imgAmir = data.imgAmir.childImageSharp.gatsbyImageData;
  const imgBruno = data.imgBruno.childImageSharp.gatsbyImageData;
  const imgGarrett = data.imgGarrett.childImageSharp.gatsbyImageData;
  const imgInderjit = data.imgInderjit.childImageSharp.gatsbyImageData;
  const imgMatt = data.imgMatt.childImageSharp.gatsbyImageData;

  const seo = {
    title: `5-Star Recruitment Agency Reviews & Testimonials`,
    description:
      'We have earned many 5-star reviews from satisfied clients. Read how they received high-quality candidates that resulted in permanent placements.',
    slug: 'https://www.allstarconnections.com/testimonials/',
  };

  const hero = {
    header: '5-Star Recruiting Agency Testimonials',
    subheader:
      'Read our 5-star reviews on LinkedIn and Google Reviews from satisfied clients',
    alt: 'All-Star Connections is a recruitment agency that focuses on permanent placements in engineering companies.',
  };

  const testimonials = [
    {
      header: '5-Star Recruiting Review',
      testimonial:
        'Rich and I collaborated several times over the past year to fill positions within my organization. As a recruiter Rich was very professional, providing high-caliber candidates, following up in a timely fashion, and keeping me advised as situations changed with each individual candidate. Rich provided solid advice, sometimes even when it may not have been the best thing for him, but his goal was a long term relationship with me and my organization, not a short term win for himself, and that showed in everything he did.',
      img: imgMike,
      imgAlt: '',
      author: 'Mike Egli',
      position: 'Director of Supply Chain',
      company: 'Tegra Medical',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        'We had been looking to fill a senior level Quality role for over 4 months before we engaged with Rich at All Star Connections. Rich spent the time to learn about what we were looking for and immediate;y produced strong candidates, one of which we hired remotely within a month of working with Rich.',
      img: imgBarry,
      imgAlt: '',
      author: 'Barry Shaw',
      position: 'Senior Director of Quality',
      company: 'Arsenal Medical',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        'I have worked with Rich over the past few years. He has helped me hire a wide variety of roles in at least three different states! Overseeing hiring in multiple states can be daunting, but Rich has made the process seamless. He is attentive, and always willing to provide information necessary for local trends. He delivers quality candidates quickly and I am very appreciative of that! Looking forward to working with Rich for years to come!',
      img: imgKatie,
      imgAlt: '',
      author: 'Katie Melnikoff, SHRM-CP ',
      position: 'Sr. HR Business Partner',
      company: 'LION',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        'Rich has been helping us to hire Engineers. He understands our needs and gears in to action quickly - without wasting time. It has been a pleasure working with Rich.',
      img: imgHiro,
      imgAlt: '',
      author: 'Hiro Endo',
      position: 'Chief Technology Officer',
      company: 'Test Devices - SCHENCK USA CORP.',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        "As Executive Vice President and Director of Human Resources we are always actively recruiting qualified engineers. We've worked with numerous recruiting firms with varying degrees of success. We started working with Rich after he cold called our firm and frankly did so as all the other firms we had been working with failed to deliver candidates that fit our criteria. Once engaged, immediately Rich sent over several candidates that met our firms needs and we ended up hiring one of his recommendations. The process was extremely fast (which we needed) and Rich and his team were thorough and professional and great at follow up and follow through! I highly recommend and will continue using All Star Connections in the future!",
      img: imgTina,
      imgAlt: '',
      author: 'Tina Vidal-Duart',
      position: 'Chief Executive Officer',
      company: 'CDR Health',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        'I worked with Rich on filling two positions. Although those positions were a bit difficult to fill, Rich provided great assistance by selecting and sending resumes of candidates that exactly meet our needs. The candidates selected by Rich met our requirements and both were hired within a couple of weeks. Working with Rich is easy and straight to the point. No floods of resumes, but rather a precise selection of what was requested. Working with Rich was a great experience.',
      img: imgAmir,
      imgAlt: '',
      author: 'Amir Selman',
      position: 'Manufacturing Excellence',
      company: 'Advanced Instruments, LLC.',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        'Richard was very helpful and professional when guiding me throughout the entire recruitment and interview process. He provided a great deal of information every step of the way and was always available and prepared to lend any assistance.',
      img: imgBruno,
      imgAlt: '',
      author: 'Bruno Ribeiro',
      position: 'Quality Manager',
      company: 'Line Bore Industries',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        "Richard recruited me for the position I currently have here at TPI Composites. He was very thorough in his research and very responsive to things I was interested in before starting with the company. Overall, I was very impressed with Richard's professionalism and work ethic through the whole process. I have had recruiters in the past that were a bit over powering and demanding, rather than working to help find the right fit. I would recommend Richard to anyone looking for a professional career and wish him all the success he deserves.",
      img: imgGarrett,
      imgAlt: '',
      author: 'Garrett Krapf',
      position: 'Business Development Manager',
      company: 'TPI Composites',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        'Richard, this is past due on my side but I wanted to say Thank you again for finding me a great opportunity for me. Thanks for making the process so easy and getting it worked out so fast as it was time sensitive. I will definitely be recommending anyone that is looking for a job to you. Thanks again.',
      img: imgInderjit,
      imgAlt: '',
      author: 'Inderjit Panesar',
      position: 'Financial Controller',
      company: 'Faber Construction',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        'Richard helped me every step of the way in being placed with a new company that was a great fit for my career path. From setting up interviews to helping manage my move, i was very satisfied with his helpfulness during the whole process.',
      img: imgMatt,
      imgAlt: '',
      author: 'Matt Vice',
      position: 'Lead Packaging Engineer',
      company: 'Kimberly-Clark Professional',
    },
  ];

  const variants = {
    hidden: { opacity: 0, scale: 0.8, x: -100 },
    visible: { opacity: 1, scale: 1, x: 0 },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

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
      <Section>
        <Container>
          <PageSidebar>
            <div className="space-y-12">
              <div className="space-y-6">
                <h2>Highly Rated Staffing Agency</h2>
                <p>
                  Over the years, All-Star Connections has received numerous
                  5-star reviews on LinkedIn and Google Reviews for our
                  top-notch staffing in highly competitive marketplaces.{' '}
                </p>
                <p>
                  The results of our flexible, friendly recruitment solutions
                  for big corporations as well as small businesses speak for
                  themselves.
                </p>
                <div className="py-10 space-y-16">
                  {testimonials.map((testimonial) => (
                    <Testimonial
                      containerStyles="bg-primary"
                      header={testimonial.header}
                      headerStyles="text-white"
                      testimonial={testimonial.testimonial}
                      testimonialStyles="text-gray-100"
                      imgTestimonial={testimonial.img}
                      imgAlt={testimonial.imgAlt}
                      imgStyles=""
                      author={testimonial.author}
                      authorStyles="text-blue-300"
                      position={testimonial.position}
                      positionStyles="text-gray-50"
                      company={testimonial.company}
                    />
                  ))}
                </div>
              </div>
            </div>
          </PageSidebar>
        </Container>
      </Section>
    </Layout>
  );
};

export default TestimonialsPage;
