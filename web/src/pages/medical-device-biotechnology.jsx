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

const MedicalPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query MedicalPageQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/home/industries-medical-device-biotechnology-job-recruiter-agency-all-star-connections.jpg"
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
    }
  `);

  const { ...allCompany } = useSanitySettingsCompany();
  const { ...allSocials } = useSanitySettingsSocials();
  const { ...allColors } = useSanitySettingsColors();
  const { ...allMetadata } = useSanitySettingsMetadata();

  const imgHeroBg = data.imgHeroBg.childImageSharp.gatsbyImageData;
  const imgBarry = data.imgBarry.childImageSharp.gatsbyImageData;

  const seo = {
    title: `NEED TO COMPLETE`,
    description: 'NEED TO COMPLETE',
    slug: location.pathname,
  };

  const hero = {
    header: 'Medical Device & Biotechnology Staffing',
    subheader:
      'Providing skilled candidates to medical device & biotechnology companies when you need it',
    alt: 'NEED TO COMPLETE',
  };

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
      <PageSidebar>
        <div className="space-y-12">
          <div className="space-y-6">
            <h2>Medical Device Recruiting Agency</h2>
            <p>
              Our team of medical device recruiters has the talent, skills, and
              experience to find high-quality candidates with a passion for
              developing cutting-edge devices.
            </p>
            <p>
              We understand your product is unique and there's no time for
              hoping that your new hire can catch on quickly.
            </p>
            <p>
              Our recruiting firm will find the perfect candidate that has
              experience with a similar product, work environment, and
              regulatory governance to hit the ground running.
            </p>
            <p>
              Recruitment specialists at All-Star Connections have worked within
              the medical device industry, particularly in healthcare fields
              such as:
            </p>
            <ul className="list-disc pl-6">
              <li>Regulatory</li>
              <li>Quality</li>
              <li>Research</li>
              <li>Laboratory</li>
              <li>Engineering</li>
            </ul>
            <p>
              By working closely with innovative technology providers and market
              leaders, we've become experts at finding people who'll love being
              part of this exciting industry.
            </p>
          </div>

          <div className="space-y-6">
            <h2>Biotechnology Recruiting Agency</h2>
            <p>
              All-Star Connections specializes in staffing solutions for
              biotechnology companies in search of life science professionals.
            </p>
            <p>
              Using our unique recruitment process, we recruit highly skilled
              individuals to help develop these life-saving drugs which will
              change today's healthcare landscape forever.
            </p>
            <p>
              As a highly specialized industry, biotech careers present many
              nuances. All-Star Connections understands these unique challenges
              from our extensive experience connecting candidates with
              employment opportunities at top biotech companies.
            </p>
            <p>
              Our biotech industry recruiters have provided staffing support for
              companies by filling positions in the following disciplines:
            </p>
            <ul className="list-disc pl-6">
              <li>Regulatory</li>
              <li>Quality</li>
              <li>Research</li>
              <li>Laboratory</li>
              <li>Engineering</li>
            </ul>
            <p>
              Now you can focus on new projects, developing these miraculous
              life-saving drugs while we handle the search and recruiting
              process.
            </p>
          </div>

          <div className="space-y-6">
            <h2>
              Finding the Right Medical Device & Biotechnology Talent is Hard
            </h2>
            <p>
              We know that finding the right person for your business can be a
              challenge, especially when you’re looking to fill a specialized
              role.
            </p>
            <p>
              That’s why we take the time to understand what you need and only
              introduce you to candidates who are qualified for your position.
            </p>
            <p>
              Not only do we test for skills, but also for personality traits to
              ensure they will be a great technological fit, team fit, and
              cultural fit.
            </p>
          </div>

          <div className="space-y-6">
            <h2>Executive Search Firm Experience You Can Trust</h2>
            <p>
              The staff at All-Star Connections is comprised of some of the top
              industry professionals in our area, and we have the experience to
              match.{' '}
            </p>
            <p>
              We are certified experts in executive search and recruitment,
              which means that our team has successfully placed professionals in
              a variety of positions, from entry-level to executive-level.{' '}
            </p>
            <p>
              There's no challenge too large for our team, as we've been
              tackling both short and long-term projects for years.
            </p>
          </div>

          <div className="space-y-6">
            <h2>Why Work With All-Star Connections?</h2>
            <p>
              All-Star Connections provides a tailored approach to medical
              device & biotech recruitment.
            </p>
            <p>
              We're an experienced and professional staffing agency that
              connects you with top talent for your company's open positions,
              quickly completing the job search process so you can skip right to
              interviewing qualified professionals.
            </p>

            <h3>Save Time & Money</h3>
            <p>
              By allowing our medical device and biotechnology recruiting agents
              to take on the arduous task of finding the best candidates, you'll
              save yourself time and money.
            </p>
            <p>
              We guarantee a high-quality candidate pool and if we don't
              deliver, you won't pay.
            </p>
            <h3>Receive High-Quality Candidates</h3>
            <p>
              Our recruiters perform thorough interviews with candidates and
              extensively evaluate their personality, flexibility, teamwork
              skills, communication skills, and technical expertise.
            </p>
            <p>
              Our purpose is to recruit candidates who can quickly succeed in
              your team and help your company grow.
            </p>
            <h3>Acquire Resources to Scale Your Business</h3>
            <p>
              Scaling is the key to success for any business. But if you're
              going to scale, it's important that you hire properly.
            </p>
            <p>
              Like most businesses, recruiting can be a time-consuming process
              with lots of steps: from sourcing suitable candidates to managing
              interviews and finally hiring someone new. And this is only one
              part of scaling your business - there are also plenty more
              challenges so you must have everything in place before doubling or
              tripling your workforce.
            </p>
            <p>
              Fortunately, All-Star Connections is a staffing agency that
              specializes in helping companies fill their positions quickly but
              carefully (to avoid negative consequences).{' '}
            </p>
            <p>
              We make the process as painless as possible by first identifying
              exactly what type of person would work well for your company, then
              begin narrowing down applicants based on qualifications and
              experience, as needed by your business.
            </p>
          </div>

          <div className="space-y-6">
            <h2>Hight Rated Among Medical Device & Biotechnology Companies</h2>
            <p>
              Over the years, All-Star Connections has received numerous 5-star
              reviews on LinkedIn and Google Reviews for our top-notch staffing
              in highly competitive marketplaces.{' '}
            </p>
            <p>
              The results of our flexible, friendly recruitment solutions for
              big corporations as well as small businesses speak for themselves.
            </p>
            <div className="py-10 space-y-16">
              <div>
                <Testimonial
                  containerStyles="bg-primary"
                  header="5-Star Medical Device Recruiting Review"
                  headerStyles="text-white"
                  testimonial="We had been looking to fill a senior level Quality role for over 4 months before we engaged with Rich at All Star Connections. Rich spent the time to learn about what we were looking for and immediate;y produced strong candidates, one of which we hired remotely within a month of working with Rich."
                  testimonialStyles="text-gray-100"
                  imgTestimonial={imgBarry}
                  imgAlt=""
                  imgStyles=""
                  author="Barry Shaw"
                  authorStyles="text-blue-300"
                  position="Senior Director of Quality"
                  positionStyles="text-gray-50"
                  company="Arsenal Medical"
                />
              </div>
              <div>
                {/* TODO update testimonial #2 */}
                <Testimonial
                  containerStyles="bg-primary"
                  header="5-Star Medical Device Recruiting Review"
                  headerStyles="text-white"
                  testimonial="We had been looking to fill a senior level Quality role for over 4 months before we engaged with Rich at All Star Connections. Rich spent the time to learn about what we were looking for and immediate;y produced strong candidates, one of which we hired remotely within a month of working with Rich."
                  testimonialStyles="text-gray-100"
                  imgTestimonial={imgBarry}
                  imgAlt=""
                  imgStyles=""
                  author="Barry Shaw"
                  authorStyles="text-blue-300"
                  position="Senior Director of Quality"
                  positionStyles="text-gray-50"
                  company="Arsenal Medical"
                />
              </div>
              <div>
                {/* TODO update testimonial #3 */}
                <Testimonial
                  containerStyles="bg-primary"
                  header="5-Star Medical Device Recruiting Review"
                  headerStyles="text-white"
                  testimonial="We had been looking to fill a senior level Quality role for over 4 months before we engaged with Rich at All Star Connections. Rich spent the time to learn about what we were looking for and immediate;y produced strong candidates, one of which we hired remotely within a month of working with Rich."
                  testimonialStyles="text-gray-100"
                  imgTestimonial={imgBarry}
                  imgAlt=""
                  imgStyles=""
                  author="Barry Shaw"
                  authorStyles="text-blue-300"
                  position="Senior Director of Quality"
                  positionStyles="text-gray-50"
                  company="Arsenal Medical"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2>
              Guaranteed Placement Sustainability Or We'll Replace For Free
            </h2>
            <p>
              We value your time and want your new hire to remain permanent.{' '}
            </p>
            <p>
              Our thorough vetting process ensures that our talent pool is
              stocked with candidates who are a perfect match for your business.
            </p>
            <p>
              Since we have such a high success rate, we now{' '}
              <strong>guarantee placement sustainability</strong>.
            </p>
            <p>
              If this is not the case,{' '}
              <em>we will locate and place someone for free</em>.
            </p>
          </div>

          <div className="space-y-6">
            <h2>Build Your World-Class Medical Device Team Today</h2>
            <p>
              Ready to build your team and scale your company? Let's get started
              today!
            </p>
            <p>
              Give us a call or fill out our contact form to schedule an
              appointment. We look forward to working with you and building your
              team.
            </p>
            <p className="lg:w-max mx-auto lg:mx-0 text-center text-white font-semibold text-xl lg:text-2xl italic py-3 px-6 lg:p-6 bg-primary border-2 border-accent rounded-xl shadow-lg">
              Call our staffing agency today at{' '}
              <a
                href={allCompany.phoneHref}
                className="text-accent hover:text-white font-bold text-xl lg:text-2xl"
              >
                {allCompany.phone}
              </a>
            </p>
          </div>

          <div className="space-y-6">
            <h2>FAQ</h2>
            <ol className="space-y-6">
              <li>
                <h3 className="text-lg normal-case">
                  Are there any fees involved in your process?
                </h3>
              </li>
              <li>
                <h3 className="text-lg normal-case">
                  How long does it take to fill an opening?
                </h3>
              </li>
              <li>
                <h3 className="text-lg normal-case">
                  How does the placement process work?
                </h3>
              </li>
              <li>
                <h3 className="text-lg normal-case">
                  What types of qualifications are you looking for in a
                  candidate?
                </h3>
              </li>
              <li>
                <h3 className="text-lg normal-case">
                  What type of candidate pool will you produce for me, and why
                  is this group more likely to fit my needs?
                </h3>
              </li>
              <li>
                <h3 className="text-lg normal-case">
                  Can I offer incentives for new hires like stock options or
                  relocation expenses?
                </h3>
              </li>
              <li>
                <h3 className="text-lg normal-case">
                  Is there an interview process involved in placing someone at
                  my company through your staffing agency?
                </h3>
              </li>
              <li>
                <h3 className="text-lg normal-case">
                  I have a specialization in my company that is unique. Will you
                  still be able to find someone who meets the needs of my
                  business?
                </h3>
              </li>
              <li>
                <h3 className="text-lg normal-case">
                  Can I get a sample of the resumes of someone who fits my
                  business's needs?
                </h3>
              </li>
              <li>
                <h3 className="text-lg normal-case">
                  What if I'm not 100% satisfied with what you've provided to
                  me?
                </h3>
              </li>
              <li>
                <h3 className="text-lg normal-case">
                  How do I know that the person working for me now will be a
                  good fit for my business?
                </h3>
              </li>
              <li>
                <h3 className="text-lg normal-case">
                  How much experience does your medical device recruitment
                  agency have in this area?
                </h3>
              </li>
              <li>
                <h3 className="text-lg normal-case">
                  What types of client relationships do you have?
                </h3>
              </li>
              <li>
                <h3 className="text-lg normal-case">
                  Can I trust that you'll only send qualified candidates to my
                  company?
                </h3>
              </li>
              <li>
                <h3 className="text-lg normal-case">
                  Where are the candidates you've sent in the past from?
                </h3>
              </li>
            </ol>
          </div>

          <div className="space-y-6">
            <h2>
              Contact All-Star Connections for Staffing & Recruitment Support
            </h2>
            <p>
              Learn more about how our professional recruitment firm can help by
              calling us today or fill out our contact form to schedule an
              appointment.
            </p>
            <p>We look forward to helping your company grow.</p>
            <p className="lg:w-max mx-auto lg:mx-0 text-center text-white font-semibold text-xl lg:text-2xl italic py-3 px-6 lg:p-6 bg-primary border-2 border-accent rounded-xl shadow-lg">
              Call our recruiting agency today at{' '}
              <a
                href={allCompany.phoneHref}
                className="text-accent hover:text-white font-bold text-xl lg:text-2xl"
              >
                {allCompany.phone}
              </a>
            </p>
          </div>
        </div>
      </PageSidebar>
    </Layout>
  );
};

export default MedicalPage;
