import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description,
  lang,
  meta,
  title,
  canonicalLink,
  image,
  siteUrl,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const structuredDataLocalBusiness = `
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.mdhconstruction.com/#organization",
        "name": "MDH Construction",
        "url": "https://www.mdhconstruction.com/",
        "sameAs": [],
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.mdhconstruction.com/#logo",
          "inLanguage": "en-US",
          "url": "https://www.mdhconstruction.com/static/800f75406d914563f0f442893d90d280/df308/mdh-construction-general-contractor-plymouth-ma-logo.png",
          "width": 140,
          "height": 45,
          "caption": "MDH Construction"
        },
        "image": {
          "@id": "https://www.mdhconstruction.com/#logo"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.mdhconstruction.com/#website",
        "url": "https://www.mdhconstruction.com/",
        "name": "MDH Construction",
        "description": "General Contractor | Plymouth MA | Plymouth County MA",
        "publisher": {
          "@id": "https://www.mdhconstruction.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": "https://www.mdhconstruction.com/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.mdhconstruction.com/#webpage",
        "url": "https://www.mdhconstruction.com/",
        "name": "General Contractor in Plymouth MA - (774) 269-6002 Local Construction Services - MDH Construction",
        "isPartOf": {
          "@id": "https://www.mdhconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.mdhconstruction.com/#organization"
        },
        "datePublished": "2020-09-08T01:28:41+00:00",
        "dateModified": "2020-09-08T04:14:55+00:00",
        "description": "MDH Construction is a licensed general contractor in Plymouth, MA, servicing gutters, insulation, decks, remodels, additions. Call today for your FREE estimate!",
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": [
              "https://www.mdhconstruction.com/"
            ]
          }
        ]
      },
      {
        "@type": "GeneralContractor",
        "name": "MDH Construction",
        "legalName": "MDH Construction",
        "knowsAbout": "Construction, Home Improvement, Gutters, Insulation",
        "openingHours": "Mo 0900-1700 Tu 0900-1700 We 0900-1700 Th 0900-1700 Fr 0900-1700 Sa 0900-1700",
        "additionalType": "",
        "additionalProperty": "https://www.mdhconstruction.com/about",
        "areaServed": {
          "@type": "GeoCircle",
          "name": "MDH Construction service area",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "postalCode": "02360",
            "latitude": "41.917351",
            "longitude": "-70.724677",
            "description": "Our office location can be found here.",
            "name": "MDH Construction geo location"
          },
          "geoRadius": "40000",
          "description": "MDH Construction proudly serves the entire state of Massachusetts"
        },
        "email": "michael.maher@mdhconstruction.com",
        "address": {
          "@type": "PostalAddress",
          "postalCode": "02360",
          "addressRegion": "Massachusetts",
          "addressCountry": "United States",
          "streetAddress": "186 S Meadow Rd #2",
          "addressLocality": "Plymouth"
        },
        "paymentAccepted": "Cash, Credit Card",
        "telephone": "+17742696002",
        "image": {
          "@type": "ImageObject",
          "name": "MDH Construction image",
          "url": "https://www.mdhconstruction.com/static/800f75406d914563f0f442893d90d280/df308/mdh-construction-general-contractor-plymouth-ma-logo.png"
        },
        "ContactPoint": {
          "@type": "ContactPoint",
          "name": "MDH Construction inquiry",
          "availableLanguage": "https://en.wikipedia.org/wiki/List_of_dialects_of_the_English_language",
          "telephone": "+17742696002",
          "contactType": "customer support",
          "@id": "https://www.mdhconstruction.com/contact-us"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "41.917351",
          "longitude": "-70.724677",
          "description": "Our office location can be found here.",
          "name": "MDH Construction geo location"
        },
        "description": "Plymouth MA General Contractor and Construction Company",
        "priceRange": "$",
        "url": "https://www.mdhconstruction.com",
        "currenciesAccepted": "USD",
        "hasMap": "https://www.google.com/maps?cid=1822779321272037188",
        "logo": "https://www.mdhconstruction.com/static/800f75406d914563f0f442893d90d280/df308/mdh-construction-general-contractor-plymouth-ma-logo.png",
        "serviceArea": {
          "@type": "GeoCircle",
          "name": "MDH Construction service area",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "postalCode": "02360",
            "latitude": "41.917351",
            "longitude": "-70.724677",
            "description": "Our office location can be found here.",
            "name": "MDH Construction geo location"
          },
          "geoRadius": "40000",
          "description": "MDH Construction proudly serves the entire area of Massachusetts including Plymouth MA, Boston MA and Plymouth County MA"
        },
        "sameAs": [
          "https://www.facebook.com/MDHConst"
        ],
        "@id": "https://www.mdhconstruction.com",
        "memberOf": {
          "@type": "Organization",
          "url": "https://www.homeadvisor.com/",
          "sameAs": "https://www.facebook.com/HomeAdvisor",
          "name": "HomeAdvisor",
          "logo": "https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-9/97045157_10158818110674050_7495362266808713216_o.jpg?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=Dzr_Lkr-ppQAX88tzuj&_nc_ht=scontent-bos3-1.xx&oh=56110b4cb801523f13c2e2cef5703012&oe=5F7E9BA0",
          "description": "A leading nationwide digital home services marketplace to match homeowners and prescreened service professionals.",
          "@id": "https://www.homeadvisor.com/"
        },
        "foundingLocation": "https://en.wikipedia.org/wiki/Plymouth,_Massachusetts",
        "foundingDate": "2020-09-08T00:00:00+0000",
        "founder": {
          "@type": "Person",
          "name": "Michael Maher",
          "description": "Founder and owner of MDH Construction",
          "@id": "https://www.mdhconstruction.com/about"
        }
      }
    ]
  }`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
    >
      {/* REMOVE WHEN GOING LIVE */}
      <meta name="robots" content="noindex"></meta>

      <link rel="canonical" href={canonicalLink} />

      <meta name="description" content={metaDescription} />

      {/* Open Graph tags */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />

      <script type="application/ld+json">{structuredDataLocalBusiness}</script>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
