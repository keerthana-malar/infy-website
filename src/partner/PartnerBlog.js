import React,{useEffect} from 'react';
import '../css/Partner.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function PartnerBlog() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();

    }, []);
    const partnerLogos = [
        "/images/partner/1.svg",
        "/images/partner/2.svg",
        "/images/partner/3.svg",
        "/images/partner/4.svg",
        "/images/partner/5.svg",
        "/images/partner/6.svg",
        "/images/partner/7.svg",
        "/images/partner/AMD.svg",
        "/images/partner/ARUBA.svg",
        "/images/partner/BENQ.svg",
        "/images/partner/CAMBIUM.svg",
        "/images/partner/CISCO.svg",
        "/images/partner/CITRIX.svg",
        "/images/partner/COMMSCOPE.svg",
        "/images/partner/D LINK.svg",
        "/images/partner/DAHUA.svg",
        "/images/partner/DELL EMC.svg",
        "/images/partner/DRAYTEK.svg",
        "/images/partner/EXTREME.svg",
        "/images/partner/FORTINET.svg",
        "/images/partner/HIKVISION.svg",
        "/images/partner/HOLKOI.svg",
        "/images/partner/HP ENTERPRISE.svg",
        "/images/partner/IBM.svg",
        "/images/partner/INTEL.svg",
        "/images/partner/LENOVA.svg",
        "/images/partner/N COMPUTING.svg",
        "/images/partner/NETFOX.svg",
        "/images/partner/OPTOMA.svg",
        "/images/partner/POSIFLEX.svg",
        "/images/partner/RUCKUS.svg",
        "/images/partner/UBIQUTI.svg",
        "/images/partner/VMWARE.svg",
        "/images/partner/VYAPAR.svg"
    ];

    const logos = partnerLogos.map((item, index) => (
        <div key={index} className="logo-box1">
            <img src={item} alt='best partners' className='infyimg'  />
        </div>
    ));
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1000,


    };
    return (
        <div className='overallpartnerblog'>
            <div className='container mt-4'>
                <div className='row '>
                    <div className='col-md-6 marketing'>
                        <div className='redline'></div>
                        <div className='partnerrow'>
                            <h1>Partners</h1>
                            <div className='paraqueen'>
                                <p>Partners are expected to be reliable and dependable,
                                    creating a foundation of trust in the relationship.
                                    Partners provide emotional, practical, and moral support during
                                    challenging times and in achieving common goals.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-6 slidepoint'>
                        <Slider {...settings}>
                            {logos}
                        </Slider>
                    </div>
                </div>
                {/* first one */}
                <div className='row firstonebox'>
                    <div className='col-md-8 box1withtext' data-aos="fade-right" 
     data-aos-duration="1000">
                        <p className='parabullet'>Effective business partners are those who bring complementary skills,
                            resources, and expertise to a venture, creating a synergy that
                            propels the company forward. They share a common vision and commitment to the business's success.
                            Trust and open communication are paramount, allowing partners to navigate challenges and make decisions
                            together. A well-chosen business partner can provide financial support, industry knowledge,
                            or operational skills that complement your own strengths. The partnership should be built
                            on a strong legal foundation, outlining roles, responsibilities, profit-sharing, and dispute
                            resolution processes.</p>
                    </div>
                    <div className=' col-md-4 partnerphoto' data-aos="fade-left" 
     data-aos-duration="1000">
                        <img src="/images/partner2members.webp" alt='best partners'/>
                    </div>
                </div>
                {/* second one */}
                <div className='row firstonebox '>
                    <div className=' col-md-4 partnerphoto2' data-aos="fade-right" 
     data-aos-duration="1000">
                        <img src="/images/partner_groupcirlce.webp" alt='best partners'/>
                    </div>
                    <div className='col-md-8 box1withtext firsttow1' data-aos="fade-left"
     data-aos-duration="1000">
                        <p className='parapiquename'>As a result of our philosophy to be the most forward thinking home
                            cleaning company and our focus on understanding customer needs,
                            we have and will continue to expand across the UK with franchises
                            in the southwest of England to the north east of Scotland with
                            over 50 territories nationwide.
                            Committed to cultivating strong partnerships with a wide range of
                            stakeholders, we are dedicated to fostering growth and mutual success.
                            From the southwest of England to the north east of Scotland,
                            our network spans over 50 territories, exemplifying our unwavering dedication to collaboration.</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default PartnerBlog;