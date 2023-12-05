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
       
        {id=="laptop" &&
            <><div className='about1'>
            <div className='smallsss1'></div>
        <h4 className='aboutline_head1'>Vci Packaging</h4>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Rust-X application engineers can recommend and implement the best corrosion management system from our
                    large selection of stock products or create a cost-effective custom solution.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Rust-X is one of the leading VCI Film
                        manufacturer & supplier in India and worldwide. We are expert in VCI technology.
                            Integrated combinations of VCI Packaging protection systems, such as VCI corrosion protection
                        with acid-gas scavenger and anti-static (ESD) are available to provide the best result.
                        </p></div>
                </div>
                </>
    }
        {id=="desktop" &&
            <><div className='about1'>
            <div className='smallsss1'></div>
        <h4 className='aboutline_head1'>Vci Packaging</h4>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Rust-X application engineers can recommend and implement the best corrosion management system from our
                    large selection of stock products or create a cost-effective custom solution.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Rust-X is one of the leading VCI Film
                        manufacturer & supplier in India and worldwide. We are expert in VCI technology.
                            Integrated combinations of VCI Packaging protection systems, such as VCI corrosion protection
                        with acid-gas scavenger and anti-static (ESD) are available to provide the best result.
                        </p></div>
                </div>
                </>
    }
        {id=="networking" &&
            <><div className='about1'>
            <div className='smallsss1'></div>
        <h4 className='aboutline_head1'>
Complete Network Solutions</h4>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Infygain Technologies: Elevate your business with expertly tailored network designs and robust security solutions, ensuring optimal performance and success. Choose us for connectivity excellence—where standard meets excellence.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>At Infygain Technologies, we redefine what it means to have the best Complete network solutions. Our commitment to client satisfaction, coupled with cutting-edge technology, makes us the preferred choice for businesses aiming for unparalleled connectivity. Elevate your network with us – where excellence meets innovation.
                        </p></div>
                </div>
                </>
    }
        {id=="cctv" &&
            <><div className='about1'>
            <div className='smallsss1'></div>
        <h4 className='aboutline_head1'>Vci Packaging</h4>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Rust-X application engineers can recommend and implement the best corrosion management system from our
                    large selection of stock products or create a cost-effective custom solution.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Rust-X is one of the leading VCI Film
                        manufacturer & supplier in India and worldwide. We are expert in VCI technology.
                            Integrated combinations of VCI Packaging protection systems, such as VCI corrosion protection
                        with acid-gas scavenger and anti-static (ESD) are available to provide the best result.
                        </p></div>
                </div>
                </>
    }

        {id=="Accessories" &&
            <><div className='about1'>
            <div className='smallsss1'></div>
        <h4 className='aboutline_head1'>Vci Packaging</h4>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Rust-X application engineers can recommend and implement the best corrosion management system from our
                    large selection of stock products or create a cost-effective custom solution.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Rust-X is one of the leading VCI Film
                        manufacturer & supplier in India and worldwide. We are expert in VCI technology.
                            Integrated combinations of VCI Packaging protection systems, such as VCI corrosion protection
                        with acid-gas scavenger and anti-static (ESD) are available to provide the best result.
                        </p></div>
                </div>
                </>
    }
        {id=="Projectors" &&
            <><div className='about1'>
            <div className='smallsss1'></div>
        <h4 className='aboutline_head1'>Vci Packaging</h4>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Rust-X application engineers can recommend and implement the best corrosion management system from our
                    large selection of stock products or create a cost-effective custom solution.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Rust-X is one of the leading VCI Film
                        manufacturer & supplier in India and worldwide. We are expert in VCI technology.
                            Integrated combinations of VCI Packaging protection systems, such as VCI corrosion protection
                        with acid-gas scavenger and anti-static (ESD) are available to provide the best result.
                        </p></div>
                </div>
                </>
    }
        {id=="TV" &&
            <><div className='about1'>
            <div className='smallsss1'></div>
        <h4 className='aboutline_head1'>Vci Packaging</h4>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Rust-X application engineers can recommend and implement the best corrosion management system from our
                    large selection of stock products or create a cost-effective custom solution.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Rust-X is one of the leading VCI Film
                        manufacturer & supplier in India and worldwide. We are expert in VCI technology.
                            Integrated combinations of VCI Packaging protection systems, such as VCI corrosion protection
                        with acid-gas scavenger and anti-static (ESD) are available to provide the best result.
                        </p></div>
                </div>
                </>
    }
        {id=="Printer&Scanner" &&
            <>
            <div className='about1'>
            <div className='smallsss1'></div>
        <h4 className='aboutline_head1'>Vci Packaging</h4>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Rust-X application engineers can recommend and implement the best corrosion management system from our
                    large selection of stock products or create a cost-effective custom solution.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Rust-X is one of the leading VCI Film
                        manufacturer & supplier in India and worldwide. We are expert in VCI technology.
                            Integrated combinations of VCI Packaging protection systems, such as VCI corrosion protection
                        with acid-gas scavenger and anti-static (ESD) are available to provide the best result.
                        </p></div>
                </div>
                </>
    }

        {id=="InteractivePanel" &&
                    <><div className='about1'>
                    <div className='smallsss1'></div>
                <h4 className='aboutline_head1'>Vci Packaging</h4>
                    </div>
                    <div className='biod biode'>
                        
                            <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Rust-X application engineers can recommend and implement the best corrosion management system from our
                            large selection of stock products or create a cost-effective custom solution.</h2>
                            <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Rust-X is one of the leading VCI Film
                                manufacturer & supplier in India and worldwide. We are expert in VCI technology.
                                    Integrated combinations of VCI Packaging protection systems, such as VCI corrosion protection
                                with acid-gas scavenger and anti-static (ESD) are available to provide the best result.
                                </p></div>
                        </div>
                        </>
            }
        {id=="UPS" &&
                    <><div className='about1'>
                    <div className='smallsss1'></div>
                <h4 className='aboutline_head1'>Vci Packaging</h4>
                    </div>
                    <div className='biod biode'>
                        
                            <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Rust-X application engineers can recommend and implement the best corrosion management system from our
                            large selection of stock products or create a cost-effective custom solution.</h2>
                            <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Rust-X is one of the leading VCI Film
                                manufacturer & supplier in India and worldwide. We are expert in VCI technology.
                                    Integrated combinations of VCI Packaging protection systems, such as VCI corrosion protection
                                with acid-gas scavenger and anti-static (ESD) are available to provide the best result.
                                </p></div>
                        </div>
                        </>
            }
        {id=="WIFI" &&
                    <><div className='about1'>
                    <div className='smallsss1'></div>
                <h4 className='aboutline_head1'>Vci Packaging</h4>
                    </div>
                    <div className='biod biode'>
                        
                            <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Rust-X application engineers can recommend and implement the best corrosion management system from our
                            large selection of stock products or create a cost-effective custom solution.</h2>
                            <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Rust-X is one of the leading VCI Film
                                manufacturer & supplier in India and worldwide. We are expert in VCI technology.
                                    Integrated combinations of VCI Packaging protection systems, such as VCI corrosion protection
                                with acid-gas scavenger and anti-static (ESD) are available to provide the best result.
                                </p></div>
                        </div>
                        </>
            }
        {id=="Pos" &&
                    <><div className='about1'>
                    <div className='smallsss1'></div>
                <h4 className='aboutline_head1'>Vci Packaging</h4>
                    </div>
                    <div className='biod biode'>
                        
                            <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Rust-X application engineers can recommend and implement the best corrosion management system from our
                            large selection of stock products or create a cost-effective custom solution.</h2>
                            <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Rust-X is one of the leading VCI Film
                                manufacturer & supplier in India and worldwide. We are expert in VCI technology.
                                    Integrated combinations of VCI Packaging protection systems, such as VCI corrosion protection
                                with acid-gas scavenger and anti-static (ESD) are available to provide the best result.
                                </p></div>
                        </div>
                        </>
            }
        {id=="InterCom" &&
                    <><div className='about1'>
                    <div className='smallsss1'></div>
                <h4 className='aboutline_head1'>Vci Packaging</h4>
                    </div>
                    <div className='biod biode'>
                        
                            <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Rust-X application engineers can recommend and implement the best corrosion management system from our
                            large selection of stock products or create a cost-effective custom solution.</h2>
                            <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Rust-X is one of the leading VCI Film
                                manufacturer & supplier in India and worldwide. We are expert in VCI technology.
                                    Integrated combinations of VCI Packaging protection systems, such as VCI corrosion protection
                                with acid-gas scavenger and anti-static (ESD) are available to provide the best result.
                                </p></div>
                        </div>
                        </>
            }
    </div>
  )
}

export default SubCateContent