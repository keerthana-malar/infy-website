import Header from './common/header';
import IotAbout from './services/IotAbout';
import IotActivities from './services/IotActivities';
import IotBanner from './services/IotBanner';
import IotOurService from './services/IotOurService';
import IotService from './services/IotService';
import Footer from './common/footer';
import IotBlogs from './services/IotBlogs';
import { Helmet } from 'react-helmet';
// import Testimonialing from './services/iotTestimonial';
// import BookforServices from './services/BookforServices';
// import Existinguser from './services/Existinguser';
import Aboutclient from "./about/aboutclient";
import Testimonial from './services/iotTestimonial';
import IotFooter from './services/IotFooter';
import IotHeader from './services/IotHeader';
import Enquiry from "./common/enquiry";
import { Link } from 'react-router-dom';
import { useRef } from 'react';

let metaContent = {
  des: "We provide the best computer and laptop service in coimbatore and also we best in networking, cctv camera,b server, billing software, graphic design, amc.",
  key: "computer,laptop,cctv,printer,AMC,networking,web development,graphics",
  ogt: "Best IT Solutions Provider in Coimbatore",
  og: "We provide the best computer and laptop service in coimbatore and also we best in networking, cctv camera,b server, billing software, graphic design, amc.",

}
// Get the current URL using window.location.href
const currentUrl = window.location.href;
function Iotservices() {
  const componentRef = useRef(null);

  const scrollToComponent = () => {
    componentRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="App">
      <Helmet>
        <title>IT supports</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <title>{metaContent.ogt}</title> */}
        <link rel="canonical" href={currentUrl} />

        <link rel="icon" href={"favicon.ico"} />
        <meta name="description" content={metaContent.des} />
        <meta name="keywords" content={metaContent.key} />
        <meta property="og:title" content={metaContent.ogt} />
        <meta property="og:description" content={metaContent.og} />
        <meta name="description" content="We provide the best computer and laptop service in coimbatore and also we best in networking, cctv camera,b server, billing software, graphic design, amc." />
        <meta name="google-site-verification" content="ocR-tZ4yt2LD1ePYD1bR4LK6GYUc0keDJcspEtblHoM" />
        <meta name="robots" content="index,follow" />                {/* <Link rel="canonical" href="https://infygain.com" /> */}

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Best IT Solutions Provider in Coimbatore" />
        <meta property="og:description" content="We provide the best computer and laptop service in Coimbatore, along with networking, CCTV, server, billing software, graphic design, and AMC." />
        <meta property="og:image" content="https://infygain.com/images/logo.svg" />
        <meta property="og:url" content="https://infygain.com/" />
        {/* <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-videp-preview:-1" /> */}
        {/* <Link rel="canonical" href="https://infygain.com" /> */}
        <meta property="og:type" content="website" />
        {/*  FB Open Graph */}
        <meta property="og:title" content="Best computer/laptop sales and service in coimbatore" />
        <meta property="og:description" content="Infygain Technologies is the best computer and laptop, networking service in coimbatore and also we best in cctv camera, server, billing software, graphic design, amc." />
        <meta property="og:image" content="https://infygain.com/images/logo.png" />
        <meta property="og:url" content="https://infygain.com" />
        <meta property="og:site_name" content="Infygain Technologies" />
        {/*  END FB Open Graph */}

        {/* Twitter Card Meta Tags */}

        <meta name="twitter:card" content="Best computer/laptop sales and service in coimbatore" />
        <meta name="twitter:site" content="Infygain Technologies" />
        <meta name="twitter:title" content="Infygain Technologies" />
        <meta name="twitter:description" content="We are provide the best computer and laptop, networking service in coimbatore and also we best in cctv camera, server, billing software, graphic design, amc." />
        <meta name="twitter:image" content="https://infygain.com/images/logo.png" />
        {/* Robot tag */}
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="ocR-tZ4yt2LD1ePYD1bR4LK6GYUc0keDJcspEtblHoM"
        />
        {/* End Robot tag */}
      
        {/* Facebook Pixel Code */}
        <script type="text/javascript">
          {`
               !function(f,b,e,v,n,t,s)
               {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
               n.callMethod.apply(n,arguments):n.queue.push(arguments)};
               if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
               n.queue=[];t=b.createElement(e);t.async=!0;
               t.src=v;s=b.getElementsByTagName(e)[0];
               s.parentNode.insertBefore(t,s)}(window, document,'script',
               'https://connect.facebook.net/en_US/fbevents.js');
               fbq('init', '1093378958018811');
               fbq('track', 'PageView');
               `}
        </script>
        <noscript>{`
               <img height="1" width="1" style="display:none"
               src="https://www.facebook.com/tr?id=1093378958018811&ev=PageView&noscript=1"
               />
               `}
        </noscript>
        {/* End Facebook Pixel Code */}
        {/* Organization schema*/}

        <script type="application/ld+json">
          {`
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Infygain Technologies",
    "legalName": "Computer Service",
    "email": "info@infygain.com",
    "url": "https://infygain.com/",
    "logo": "https://infygain.com/images/logo.svg",
    "sameAs": [
      "https://twitter.com/infygain",
      "https://www.instagram.com/infygain/",
      "https://www.facebook.com/infygain/",
      "https://www.linkedin.com/company/infygain-technologies/",
      "https://www.youtube.com/@infygain6707",
      "https://infygain.com/"
    ],
    "address": {
      "addressLocality": "prozone mall",
      "postalCode": "641035",
      "streetAddress": "Hari complex opp.prozone mall, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu "
    }
  }
  `}
        </script>
        {/* Breadcrumb schema*/}

        <script type="application/ld+json">
          {`
  {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://infygain.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About - Us",
        "item": "https://infygain.com/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "IT Supports",
        "item": "https://infygain.com/Iotservice"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "ISP Services",
        "item": "https://infygain.com/ispservice"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "WEB Services",
        "item": "https://infygain.com/ServiceSeo"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Blogs",
        "item": "https://infygain.com/mainblogs"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Career",
        "item": "https://infygain.com/career"
      },
      {
        "@type": "ListItem",
        "position": 8,
        "name": "Partner",
        "item": "https://infygain.com/Partner"
      },
      {
        "@type": "ListItem",
        "position": 9,
        "name": "Contact",
        "item": "https://infygain.com/contact"
      },
      {
        "@type": "ListItem",
        "position": 10,
        "name": "Online Store",
        "item": "https://infygain.com/onlinestore/"
      }
    ]
  }
  `}
        </script>

        {/* Local business 31/5/23 schema */}
        <script type="application/ld+json">
          {`
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Infygain Technologies",
    "image": "https://infygain.com/images/logo.svg",
    "@id": "",
    "url": "https://infygain.com",
    "telephone": "9952141444",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "hari complex opp.prozone mall, Sathy Rd, Saravanampatti",
      "addressLocality": "Coimbatore",
      "postalCode": "641035",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.0549976,
      "longitude": 76.9951292
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:45",
      "closes": "19:00",
    }
  }
`}
        </script>
        {/* End local business schema */}


        {/* Google Analytics */}
        <script>
          {`
  (function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
      i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)),
      (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "https://www.google-analytics.com/analytics.js",
    "ga"
  );
  ga("create", "UA-XXXXX-Y", "auto");
  ga("send", "pageview");
`}
        </script>
        {/* End Google Analytics */}

        {/* Google Tag Manager */}
        <script>
          {`
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-NRCN7RF");
`}
        </script>
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-89FZ8YHYVL"></script>

        <script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("gtag("js", new Date());
          gtag("config", "G-89FZ8YHYVL");
        `}
        </script>
        {/* End Google tag (gtag.js) */}

        {/* Google optimizer */}
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-NWGHP4M"></script>
        {/* End Google optimizer */}
      </Helmet>
      {/* <Header/> */}
      <IotHeader />
      <IotBanner />
      <IotAbout />
      <IotService scrollToComponent={scrollToComponent} />
      <IotActivities />
      <Aboutclient />
      {/* <Testimonialing/> */}
      <IotBlogs />
      <IotOurService componentRef={componentRef} />
      {/* <BookforServices/>
      <Existinguser/> */}

      <Enquiry />
      <IotFooter />
      {/* <Footer/> */}



    </div>
  );
}

export default Iotservices;
