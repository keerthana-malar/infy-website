import { FaRegClock, FaLocationDot, FaCartPlus } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  LiaFacebookF,
  LiaInstagram,
  LiaLinkedinIn,
  LiaWhatsapp,
  LiaYoutube,
  LiaTwitter,
} from "react-icons/lia";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import "../css/header.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import Fixedline from "../services/Fixedline";
import { Helmet } from "react-helmet";

function header() {
  function DropdownMenu() {
    let dropBox = document.querySelector(".menu-box-drop");

    if (dropBox.classList.contains("drop-show")) {
      dropBox.classList.remove("drop-show");
    } else {
      dropBox.classList.add("drop-show");
    }
  }
  function DropdownMenuSub(e) {
    let eve = e.target.style.display;
    if (eve == "block") {
      eve = "none";
    } else {
      eve = "block";
    }
  }

  let metaContent = {
    des:"We provide the best computer and laptop service in coimbatore and also we best in networking, cctv camera,b server, billing software, graphic design, amc.",
    key:"computer,laptop,cctv,printer,AMC,networking,web development,graphics",
    ogt:"Best IT Solutions Provider in Coimbatore",
    og:"We provide the best computer and laptop service in coimbatore and also we best in networking, cctv camera,b server, billing software, graphic design, amc.",

  }
 
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metaContent.ogt}</title>
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
        {/* End Twitter summary large card */}


        {/*Facebook Pixel */}
        <script>
          {`
    !function(f,b,e,v,n,t,s) {
      if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)
    }
    (window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1093378958018811');
    fbq('track', 'PageView');
  `}
        </script>
        <noscript>{``}</noscript>
        {/* End Meta Pixel Code  */}

        {/* BreadcrumbList schema for the main navigation */}

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
            "name": "Partner",
            "item": "https://infygain.com/Partner"
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
        {/* End BreadcrumbList schema for the main navigation */}

        {/* Organization schema 27/5/23 */}
        <script type="application/ld+json">
          {`
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Infygain Technologies",
    "alternateName": "Computer Service",
    "url": "https://infygain.com/",
    "logo": "https://infygain.com/images/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "952141444",
      "contactType": "technical support",
      "contactOption": "TollFree",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.instagram.com/infygain/",
      "https://www.facebook.com/infygain/",
      "https://www.linkedin.com/company/infygain-technologies/",
      "https://twitter.com/infygain",
      "https://www.youtube.com/@infygain6707",
      "https://infygain.com/"
    ]
  }
`}
        </script>
        {/* End organization schema */}



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

        {/* Canonical tag */}
        <link rel="canonical" href="https://infygain.com/" />
        {/* End Canonical tag */}

        {/* Robot tag */}
        <meta name="robots" content="index, follow" />
        {/* End Robot tag */}
        <meta
          name="google-site-verification"
          content="ocR-tZ4yt2LD1ePYD1bR4LK6GYUc0keDJcspEtblHoM"
        />

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
      <section>
        {/* Top head section */}
        <div className="top-head  d-none d-md-block">
          <div className="row">
            <div className="d-none d-md-block col-md-6 col-lg-3">
              <p>
                <a className="head-link" href="/contact">
                  <FaLocationDot />
                  &nbsp;&nbsp;&nbsp;&nbsp; Coimbatore, Tamil Nadu 641035
                </a>{" "}
              </p>
            </div>
            <div className="d-none d-md-block col-md-3 col-lg-3">
              <p>
                <a className="head-link" href="mailto:info@infygain.com">
                  <HiOutlineMail />
                  &nbsp;&nbsp;&nbsp;&nbsp; info@infygain.com
                </a>
              </p>
            </div>
            <div className="d-none d-lg-block col-lg-3">
              <div className="headhr">
                <p>
                  <a className="head-link" href="#">
                    <FaRegClock />
                    &nbsp;&nbsp;&nbsp;&nbsp; Office Hours: 9:45 am - 7:30 pm
                  </a>
                </p>
              </div>
            </div>
            <div className="d-none d-md-block col-md-3 col-lg-3">
              <div className="socialicons">
                <a
                  className="head-link sm"
                  href="https://www.facebook.com/infygain/"
                  target="_blank"
                >
                  <LiaFacebookF />
                </a>
                <a
                  className="head-link sm"
                  href="https://www.instagram.com/infygain/"
                  target="_blank"
                >
                  <LiaInstagram />
                </a>
                <a
                  className="head-link sm"
                  href="https://twitter.com/infygain"
                  target="_blank"
                >
                  <LiaTwitter />
                </a>
                <a
                  className="head-link sm"
                  href="https://www.linkedin.com/company/infygain-technologies/"
                  target="_blank"
                >
                  <LiaLinkedinIn />
                </a>
                <a
                  className="head-link sm"
                  href="https://api.whatsapp.com/send/?phone=919952141444&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <LiaWhatsapp />
                </a>
                <a
                  className="head-link sm"
                  href="https://www.youtube.com/@infygain6707"
                  target="_blank"
                >
                  <LiaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main head section */}
        <div className="main-head">
          <div className="main-head-box">
            <div className="logoo-box">
              <img
                className="img-fluid1"
                src="./images/icons/infy-logo.svg"
                alt="best web services"
              ></img>
            </div>
            <div className="menu-box">
              <li>
                <Link className="mlink" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="mlink" to="/about">
                  About
                </Link>
              </li>
              <li className="sub">
                <Link className="mlink">
                  Services <IoMdArrowDropdown />
                </Link>
                <div className="submenu">
                  <li>
                    <Link className="mlink" to="/Iotservice">
                      IT Supports
                    </Link>
                  </li>
                  <li>
                    <Link className="mlink" to="/ispservice">
                      ISP Services
                    </Link>
                  </li>
                  <li>
                    <Link className="mlink" to="/ServiceSeo">
                      Web Services
                    </Link>
                  </li>
                </div>
              </li>
              <li>
                <Link className="mlink" to="/mainblogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="mlink" to="/career">
                  Career
                </Link>
              </li>
              <li>
                <Link className="mlink" to="/Partner">
                  Partner
                </Link>
              </li>
              <li>
                <Link className="mlink" to="/contact">
                  Contact
                </Link>
              </li>
            </div>
            {/* <div className="contact-box">
              <div className="row align-items-center">
                <div className="col-md-2 query">
                  <a className="head-link" href="#">
                    <FaHeadset />
                  </a>
                </div>
                <div className="col-md-10 q-cont">
                  <p>
                    Have Any Questions?<br></br>
                    <span className="">+91 &nbsp;99342567810</span>
                  </p>
                </div>
              </div>
            </div> */}
            <div className="enquiry-box">
              <a className="head-link" href="/contact">
                <button className="btn btns">
                  Get a quote &nbsp;&nbsp;<i className="fa fa-arrow-right"></i>
                </button>
              </a>
              <a
                className="head-links"
                target="_blank"
                href="https://infygain.com/onlinestore/"
              >
                <FaCartPlus />
              </a>

              {/* <a className="head-links" target="_blank" href="https://grayquest.com/institute/united-master">
                < FaCcAmazonPay/>
              </a> */}
            </div>

            <div className="dropDownMenu">
              <HiMenuAlt1 role="button" onClick={() => DropdownMenu()} />
            </div>
          </div>
        </div>
      </section>

      <div className="menu-box-drop">
        <li>
          <Link className="mlink" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="mlink" to="/about">
            About
          </Link>
        </li>
        <li className="sub">
          <Link className="mlink " onClick={DropdownMenuSub}>
            Services <IoMdArrowDropdown />
          </Link>
          <div className="submenu">
            <li>
              <Link className="mlink" to="/Iotservice">
                IT Supports
              </Link>
            </li>
            <li>
              <Link className="mlink" to="/ispservice">
                ISP Services
              </Link>
            </li>
            <li>
              <Link className="mlink" to="/ServiceSeo">
                Web Services
              </Link>
            </li>
          </div>
        </li>
        <li>
          <Link className="mlink" to="/mainblogs">
            Blog
          </Link>
        </li>
        <li>
          <Link className="mlink" to="/career">
            Career
          </Link>
        </li>
        <li>
          <Link className="mlink" to="/partner">
            Partner
          </Link>
        </li>
        <li>
          <Link className="mlink" to="/contact">
            Contact
          </Link>
        </li>
        <Fixedline />
      </div>
    </>
  );
}

export default header;
