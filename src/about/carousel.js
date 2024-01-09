// carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Carousel() {

  
  const partnerLogos = [
    { 
        src: "/images/partner/1.svg",
        url: "https://www.epson.co.in/"
    },
    { 
        src: "/images/partner/2.svg",
        url: "https://www.acer.com/in-en"
    },
    { 
        src: "/images/partner/3.svg",
        url: "https://www.asus.com/in/"
    },
    { 
        src: "/images/partner/4.svg",
        url: "https://www.dell.com/en-in"
    },
    { 
        src: "/images/partner/5.svg",
        url: "https://www.hp.com/in-en/shop/?optly_qa_cookie=optly_hp_test&gad_source=1&gclid=CjwKCAiA1-6sBhAoEiwArqlGPoZA3nZ701JMGIkdHqV6jCEPVvbT0R1DgYPJ-u4h_5kf6UtSKwSfexoC15wQAvD_BwE&gclid=SEM&gclsrc=aw.ds"
    },
    { 
        src: "/images/partner/6.svg",
        url: "https://in.canon/en/consumer"
    },
    { 
        src: "/images/partner/7.svg",
        url: "https://www.samsung.com/in/"
    },
    { 
        src: "/images/partner/AMD.svg",
        url: "https://www.amd.com/en.html"
    },
    { 
        src: "/images/partner/ARUBA.svg",
        url: "https://www.arubanetworks.com/"
    },
    { 
        src: "/images/partner/BENQ.svg",
        url: "https://www.benq.com/en-in/index.html"
    },
    { 
        src: "/images/partner/CAMBIUM.svg",
        url: "https://www.cambiumnetworks.com/"
    },
    { 
        src: "/images/partner/CISCO.svg",
        url: "https://www.cisco.com/site/in/en/index.html"
    },
    { 
        src: "/images/partner/CITRIX.svg",
        url: "https://www.citrix.com/"
    },
    { 
        src: "/images/partner/COMMSCOPE.svg",
        url: "https://www.commscope.com/"
    },
    { 
        src: "/images/partner/D LINK.svg",
        url: "https://in.dlink.com/en/consumer"
    },
    { 
        src: "/images/partner/DAHUA.svg",
        url: "https://www.dahuasecurity.com/"
    },
    { 
        src: "/images/partner/DELL EMC.svg",
        url: "https://www.dell.com/en-us/blog/tags/dell-emc/"
    },
    { 
        src: "/images/partner/DRAYTEK.svg",
        url: "https://www.draytek.com/"
    },
    { 
        src: "/images/partner/EXTREME.svg",
        url: "https://example.com/partner1"
    },
    { 
        src: "/images/partner/FORTINET.svg",
        url: "https://www.fortinet.com/"
    },
    { 
        src: "/images/partner/HIKVISION.svg",
        url: "https://www.hikvision.com/en/"
    },
    { 
        src: "/images/partner/HOLKOI.svg",
        url: "https://www.holkoigroup.com/"
    },
    { 
        src: "/images/partner/HP ENTERPRISE.svg",
        url: "https://www.hpe.com/us/en/home.html"
    },
    { 
        src: "/images/partner/IBM.svg",
        url: "https://www.ibm.com/in-en"
    },
    { 
        src: "/images/partner/INTEL.svg",
        url: "https://www.intel.com/content/www/us/en/homepage.html"
    },
    { 
        src: "/images/partner/LENOVA.svg",
        url: "https://www.lenovo.com/in/en/?orgRef=https%253A%252F%252Fwww.google.com%252F"
    },
    { 
        src: "/images/partner/N COMPUTING.svg",
        url: "https://www.ncomputing.com/"
    },
    { 
        src: "/images/partner/NETFOX.svg",
        url: "https://netfox.co.in/"
    },
    { 
        src: "/images/partner/OPTOMA.svg",
        url: "https://www.optoma.co.in/"
    },
    { 
        src: "/images/partner/POSIFLEX.svg",
        url: "https://www.posiflex.com/en-global"
    },
    { 
        src: "/images/partner/RUCKUS.svg",
        url: "https://www.ruckusnetworks.com/"
    },
    { 
        src: "/images/partner/UBIQUTI.svg",
        url: "https://www.ui.com/introduction"
    },
    { 
        src: "/images/partner/VMWARE.svg",
        url: "https://www.vmware.com/in.html"
    },
    { 
        src: "/images/partner/VYAPAR.svg",
        url: "https://vyaparapp.in/?campaign_id=GBA&adgroupid=108697283895&creative=535123163435&keyword=vyapar&targetid=aud-390177058078:kwd-391056922771&placement=&adposition=&g=g&device=c&devicemodel=&matchtype=b&loc_physical_ms=9148884&gclid=CjwKCAiA1-6sBhAoEiwArqlGPidMnYoJ2JiMsVFQ5h1ikvQlSBS4XfE7Acab6ubFWimiECxfgKHOThoCtlwQAvD_BwE&gad_source=1"
    },
  ]
 
  const logos = partnerLogos.map((item, index) => (
    <Link to={item.url} target="_blank">
    <div key={index} className="logo-box">
      
        <img src={item.src} alt={`Logo ${index}`} title="Our Partners" />
      
    </div>
    </Link>
  ));

  const settings = {
    // Configure your slick slider settings here
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds (3 seconds in this case)
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          speed: 1000,
          autoplaySpeed: 1000,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          speed: 1000,
          autoplaySpeed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="enqbx-head mt-4 mb-4">
        <h5 className="mini-title main-color">OUR PARTNERS</h5>
        <p className="home-about-ttle">Empowering Growth Together</p>
      </div>
      <Slider {...settings}>{logos}</Slider>
    </>
  );
}

export default Carousel;
