import 'font-awesome/css/font-awesome.css';
import '../css/ispservice.css';

function Firstsection() {


    return (
        <>
            <div className=' container firstsection' >
                <div className='row fir-con-box'>
                    <div className='col-lg-4 cen-con-imgbefore' data-aos="fade-right" data-aos-duration="2000">
                        <div className='leftsidecontent'>
                            <div className='securebutton'><button className='btns-green another'>secure connection</button><br></br></div>
                            <h1 className='content'>10x faster than the current standard of WiFi.</h1>
                            <p className='text-muted parafirsec'>Experience the future of connectivity with our WiFi service, 10x faster than the current standard. Elevate your digital experience today with infygain technologies.




                            </p>
                            <div className='getbutton'><button className='btns-green '>get started</button></div>
                        </div>
                    </div>
                    <div className='col-lg-3 center-img'>
                        <div className='' ><img src="../images/banner/ispimage.png" alt="Image Description" class="ispimage" />
                        </div>
                    </div>

                    <div className=' col-lg-5 rightsidecontent' data-aos="fade-left" >
                        <div className='row'>
                            <div className='rigonebox' >
                                <div className='col-md-4' >
                                    <i className="fa fa-light fa-globe" style={{ color: "#a3bc24" }}></i>
                                </div>
                                <div className='col-md-6'>
                                    <p className='rigtitle'><b>Ultra fast Connection</b></p>
                                    <p className='text-muted rigpara'>Experience the thrill of seamless online browsing with our ultra-fast connection service</p>
                                </div>
                            </div>

                        </div>
                        <div className='row second'>
                            <div className='rigonebox'>
                                <div className='col-md-4'>
                                    <i class="fa fa-regular fa-desktop " style={{ color: "#9cc723" }}></i>
                                </div>
                                <div className='col-md-6'>
                                    <p className='rigtitletwo'><b>Satellite TV</b></p>
                                    <p className='text-muted rigpara'>Access a world of channels and enjoy crystal-clear picture quality.</p>
                                </div>
                            </div>

                        </div>
                        <div className='row third'>
                            <div className='rigonebox'>
                                <div className='col-md-4'>
                                    <i class="fa fa-phone" style={{ color: "#9cc723" }}></i>
                                </div>
                                <div className='col-md-6 pho-ic-tit'>
                                    <p className='rigtitle'><b>
                                        VOIP</b></p>
                                    <div className='ic-para'><p className='text-muted rigpara'>Stay connected with clarity and reliability through VOIP </p></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='container con-small'>

                <div className=' ispsmallbox' data-aos="fade-up" data-aos-duration="2000">
                    <div className=' row is-sma-box' data-aos="fade-up" data-aos-duration="2000">
                        <div className='col-lg-3' data-aos="fade-up" data-aos-duration="2000">
                            <div className='smallimg' ><img src="../images/banner/smallbox-webp.webp" alt="Image Description" /></div>
                        </div>
                        <div className='col-lg-6   commonbac' data-aos="fade-up" data-aos-duration="1000">
                            <p className='smallconten'>

                                Discover a simple, reliable, and affordable solution for unlimited internet access with Infygain technologies. Stay connected without limits.</p>
                            <p className='smallpara'>Unlock unlimited internet access with our simple, reliable, and affordable solution</p>
                        </div>
                        <div className='col-lg-3 commonbac'>
                            <div className='btncolor'>
                                <button className='btns-green getanobtn'>get started</button>
                            </div>
                            <div className='row'>

                                <div className='col-lg-12 numb-small' data-aos="fade-left" data-aos-duration="1000"><p className='needcon'>
                                    NEED MORE HELP?<br></br>9952141444</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Firstsection;