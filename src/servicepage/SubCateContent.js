import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AOS from 'aos';

const SubCateContent = () => {
    const {id} = useParams()
    useEffect(() => {
        AOS.init();
        AOS.refresh();

    }, []);
  return (
    <div className='container mt-5 mp-5'>
       

        {id==="networking" &&
            <><div className='about1'>
            <div className='smallsss1'></div>
        <h2 className='aboutline_head1'>
Complete Network Solutions</h2>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Infygain Technologies: Elevate your business with expertly tailored network designs and robust security solutions, ensuring optimal performance and success. Choose us for connectivity excellence—where standard meets excellence.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>At Infygain Technologies, we redefine what it means to have the best Complete network solutions. Our commitment to client satisfaction, coupled with cutting-edge technology, makes us the preferred choice for businesses aiming for unparalleled connectivity. Elevate your network with us – where excellence meets innovation.
                        </p></div>
                </div>
                </>
    }
        {id==="cctv" &&
            <><div className='about1'>
            <div className='smallsss1'></div>
        <h2 className='aboutline_head1'>Security Solutions</h2>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">At Infygain Technologies, we take pride in being the forefront provider of the best Security Solutions in Coimbatore. With an unwavering commitment to your safety, we bring you cutting-edge technology, customized solutions, and a team of experts dedicated to securing your assets.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Our smart surveillance systems redefine the way you monitor and secure your premises. With high-definition cameras, intelligent analytics, and real-time monitoring, we deliver a level of security that goes beyond expectations. Whether it's your home, office, or industrial space, our surveillance solutions are designed to provide unmatched protection.
                        </p></div>
                </div>
                </>
    }

        {id==="Accessories" &&
            <><div className='about1'>
            <div className='smallsss1'></div>
        <h2 className='aboutline_head1'>Computer Accessories</h2>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Infygain Technologies: Elevate your setup with our curated selection of computer accessories. Experience seamless compatibility and enhanced performance, setting a new benchmark for accessory excellence.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>At Infygain Technologies, find a new standard in computer accessories. Our commitment to customer satisfaction, paired with top-of-the-line technology, establishes us as the preferred choice for those seeking exceptional enhancements for their computing setup. Elevate your computing experience with us – where quality converges with innovation
                        </p></div>
                </div>
                </>
    }
        {id==="Projectors" &&
            <><div className='about1'>
            <div className='smallsss1'></div>
        <h2 className='aboutline_head1'>Projectors</h2>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Infygain Technologies: Illuminate brilliance with our precision-engineered projectors. Elevate your visuals with unparalleled clarity and reliability, setting the stage for exceptional presentations.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>
                    At Infygain Technologies, discover a new era of projection excellence. Our unwavering dedication to customer satisfaction, fused with cutting-edge technology, makes us the premier choice for those seeking unmatched visual experiences. Illuminate your presentations with us – where excellence harmonizes with innovation
                        </p></div>
                </div>
                </>
    }
        {id==="TV" &&
            <><div className='about1'>
            <div className='smallsss1'></div>
        <h2 className='aboutline_head1'>TV</h2>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Infygain Technologies: Transform your entertainment experience with our state of the art TVs. Immerse yourself in unparalleled clarity and vibrant visuals, setting a new standard for home viewing excellence</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>At Infygain Technologies, redefine your TV experience. Our unwavering dedication to customer satisfaction, combined with cutting-edge technology, positions us as the prime choice for those seeking unparalleled entertainment. Elevate your viewing pleasure with us – where excellence meets innovation.
                        </p></div>
                </div>
                </>
    }
       

        {id==="InteractivePanel" &&
                    <><div className='about1'>
                    <div className='smallsss1'></div>
                <h2 className='aboutline_head1'>Interactive Panel</h2>
                    </div>
                    <div className='biod biode'>
                        
                            <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Infygain Technologies: Step into a world of interactive brilliance with our cutting-edge panels. Elevate engagement and learning with seamless interactivity, setting a new standard for interactive excellence.</h2>
                            <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>At Infygain Technologies, revolutionize collaboration with our interactive panels. Our unwavering commitment to customer satisfaction, combined with cutting-edge interactive technology, makes us the ultimate choice for those seeking dynamic and engaging visual experiences. Transform your presentations with us – where innovation meets excellence.
                                </p></div>
                        </div>
                        </>
            }
        {id==="UPS" &&
                    <><div className='about1'>
                    <div className='smallsss1'></div>
                <h2 className='aboutline_head1'>UPS</h2>
                    </div>
                    <div className='biod biode'>
                        
                            <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Infygain Technologies: Power up your reliability with our advanced UPS systems. Elevate protection and continuity with seamless power backup, setting new standards for reliability excellence.</h2>
                            <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>At Infygain Technologies, ensure uninterrupted power with our UPS solutions. Our steadfast dedication to customer satisfaction, paired with advanced technology, positions us as the preferred choice for those seeking reliable power backup. Safeguard your systems with us – where excellence in protection meets innovative solutions.
                                </p></div>
                        </div>
                        </>
            }
        {id==="WIFI" &&
                    <><div className='about1'>
                    <div className='smallsss1'></div>
                <h2 className='aboutline_head1'>WIFI</h2>
                    </div>
                    <div className='biod biode'>
                        
                            <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Infygain Technologies: Empower connectivity with our advanced WiFi solutions. Elevate your network with seamless coverage and speed, setting a new standard for wireless excellence.</h2>
                            <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>At Infygain Technologies, redefine connectivity with our WiFi solutions. Our unwavering commitment to customer satisfaction, combined with cutting-edge technology, makes us the premier choice for those seeking seamless and robust wireless networks. Elevate your connectivity with us – where excellence in WiFi meets innovative solutions.
                                </p></div>
                        </div>
                        </>
            }
        {id==="Pos" &&
                    <><div className='about1'>
                    <div className='smallsss1'></div>
                <h2 className='aboutline_head1'>Point Of Sale</h2>
                    </div>
                    <div className='biod biode'>
                        
                            <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Infygain Technologies: Revolutionize transactions with our cutting-edge Point of Sale solutions. Elevate convenience and efficiency in every transaction, setting a new standard for seamless POS excellence</h2>
                            <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>At Infygain Technologies, revolutionize your business transactions with our Point of Sale solutions. Our dedication to customer satisfaction, coupled with advanced technology, positions us as the go-to choice for those seeking efficient and reliable transaction management. Streamline your sales process with us – where innovation meets excellence.
                                </p></div>
                        </div>
                        </>
            }
        {id==="InterCom" &&
                    <><div className='about1'>
                    <div className='smallsss1'></div>
                <h2 className='aboutline_head1'>InterCom</h2>
                    </div>
                    <div className='biod biode'>
                        
                            <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Infygain Technologies: Enhance communication with our state-of-the-art intercom systems. Elevate connectivity and clarity in every interaction, setting a new standard for seamless intercom excellence.</h2>
                            <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>At Infygain Technologies, redefine communication efficiency with our Intercom solutions. Our unwavering commitment to customer satisfaction, combined with cutting-edge technology, positions us as the prime choice for those seeking seamless and reliable communication systems. Enhance your connectivity with us – where excellence in Intercom meets innovative solutions.
                                </p></div>
                        </div>
                        </>
            }
    </div>
  )
}

export default SubCateContent