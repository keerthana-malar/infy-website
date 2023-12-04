import Header from './common/header';
import Sliders from './home/slider';
import Service from './home/service';
import HomeAbout from './home/about';
import SubService from './home/subService';
import RecentProjects from './home/recentprojects';
import OurExp from './home/experience';
import Testimonial from './home/Testimonial';
import HomeBlog from './home/HomeBlog';
import Footer from './common/footer';
import NewService from './home/NewService';
import Bookservicepage from './Bookservicepage';
import Enquiry from "./common/enquiry";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
function Home() {

    // var slickSlide = document.querySelector(".slick-track");
    // slickSlide.classList.add("d-none");
    let metaContent = {
        des: "We provide the best computer and laptop service in coimbatore and also we best in networking, cctv camera,b server, billing software, graphic design, amc.",
        key: "computer,laptop,cctv,printer,AMC,networking,web development,graphics",
        ogt: "Best IT Solutions Provider in Coimbatore",
        og: "We provide the best computer and laptop service in coimbatore and also we best in networking, cctv camera,b server, billing software, graphic design, amc.",

    }
    // Get the current URL using window.location.href
    const currentUrl = window.location.href;
    return (
        <>
            <Helmet>
                <title>home</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{metaContent.ogt}</title>
                <link rel="canonical" href={currentUrl} />

                <link rel="icon" href={"favicon.ico"} />
                <meta name="description" content={metaContent.des} />
                <meta name="keywords" content={metaContent.key} />
                <meta property="og:title" content={metaContent.ogt} />
                <meta property="og:description" content={metaContent.og} />
                <meta name="description" content="We provide the best computer and laptop service in coimbatore and also we best in networking, cctv camera,b server, billing software, graphic design, amc." />
                <meta name="google-site-verification" content="ocR-tZ4yt2LD1ePYD1bR4LK6GYUc0keDJcspEtblHoM" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Best IT Solutions Provider in Coimbatore" />
                <meta property="og:description" content="We provide the best computer and laptop service in Coimbatore, along with networking, CCTV, server, billing software, graphic design, and AMC." />
                <meta property="og:image" content="https://infygain.com/images/logo.svg" />
                <meta property="og:url" content="https://infygain.com/" />
                <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-videp-preview:-1" />
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
                {/* Organization schema*/}

                <script type="application/ld+json">
                {`
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Infygain Technologies",
    "legalName": "Computer Service",
    "email": "info@infygain.com",
    "url": "https://infygain.com/images/logo.svg",
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
        "name": "About - Us",
        "item": "https://infygain.com/about"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "IT Supports",
        "item": "https://infygain.com/Iotservice"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "ISP Services",
        "item": "https://infygain.com/ispservice"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "WEB Services",
        "item": "https://infygain.com/ServiceSeo"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Blogs",
        "item": "https://infygain.com/mainblogs"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Career",
        "item": "https://infygain.com/career"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Partner",
        "item": "https://infygain.com/Partner"
      },
      {
        "@type": "ListItem",
        "position": 8,
        "name": "Contact",
        "item": "https://infygain.com/contact"
      },
      {
        "@type": "ListItem",
        "position": 9,
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
      "closes": "19:00"
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
            <Header />
            <div className="controlacc">
                <Sliders />
                <NewService />
                {/* <Service/> */}
                <HomeAbout />
                <SubService />
                <RecentProjects />
                <OurExp />
                <Testimonial />

                <HomeBlog />
            </div>
            <Enquiry />
            <Footer />
        </>
    );
}

export default Home;