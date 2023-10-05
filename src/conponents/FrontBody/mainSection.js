import React, { Fragment} from 'react';
import { Helmet } from 'react-helmet';
import { PcDisplayHorizontal, Cpu, Globe } from 'react-bootstrap-icons';

const MainSection = () => {
    return (
        <Fragment>
            <Helmet>
                <link rel='stylesheet' href='/frontpage.css'></link>
            </Helmet>
            <main id='site-main'>
                {/* banner area */}
                <section className='banner-area'>
                    <div className='banner-title'>
                        <div className='title'>
                            <span className='d-inlineblock Btn Btn-primary bg-gradient-peach'>
                                Why choose us
                            </span>
                            <div className='py-4 text-lg sm-text-xl font-bold xm-text-lg'>
                                <ul className='font-lightblack2'>
                                    <li>Over 10 years of experience</li>
                                    <li>Our advisory team are housed <br/> under one roof</li>
                                    <li>Advisory to financial analysis and <br/> legal/regulatory expertise</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* agency area */}
                <section className='agency-area'>
                    <div className='container mx-auto text-center'>
                        <span className='text-red font-bold text-md'>Join our Company <br /> Work Together</span>
                        <div className='area-title mt-5'>
                            <h1 className='font-lightblack'>Set up a suitable chart of account and <br/> Client's database account in accounting system.</h1>
                        </div>
                        <div className='grid cols-1-grid lg-cols-3-grid mt-5 my-5'>
                            <div className='text-center text-red mx-5'>
                                <PcDisplayHorizontal className='text-2xl ' />
                                <div className='text-red text-center my-4'>
                                    <h4 className='text-md font-simibold py-2'>Support Accounting Softwares</h4>
                                    <div className='text-gray'>
                                        We support <strong className='font-bold'>World Class</strong> accounting softwares like Inutuit Quick Books, Net Suit, Xero, Zoho Books, etc...
                                    </div>
                                </div>
                            </div>
                            <div className='text-center text-red mx-5'>
                                <Cpu className='text-2xl ' />
                                <div className='text-red text-center my-4'>
                                    <h4 className='text-md font-simibold py-2'>Support Virtual Machines</h4>
                                    <div className='text-gray'>
                                        We also support <strong className='font-bold'>Virtual Machines</strong> accounting softwares like Inutuit Quick Books, Net Suit, Xero, Zoho Books, etc...
                                    </div>
                                </div>
                            </div>
                            <div className='text-center text-red mx-5'>
                                <Globe className='text-2xl ' />
                                <div className='text-red text-center my-4'>
                                    <h4 className='text-md font-simibold py-2'>Support Virtual Machines</h4>
                                    <div className='text-gray'>
                                        We also support <strong className='font-bold'>Virtual Machines</strong> accounting softwares like Inutuit Quick Books, Net Suit, Xero, Zoho Books, etc...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='container mx-auto life-area'>
                    <div className='grid cols-1-grid lg-cols-2-grid px-5'>
                        <div className='grid-images'>
                            <div className='image-one'></div>
                            <div className='image-two'></div>
                            <div className='image-three'></div>
                        </div>
                        <div className='py-10'>
                            <div className='background font-simibold'>
                                <div className='blur d-flex center-item text-lg text-dark2'>Work Smart With Digital Life</div>
                            </div>
                            <p className='pt-5 pb-2 text-gray'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel semper lorem. 
                                Vestibulum sed quam id urna feugiat ultricies. Nullam est nisi, tincidunt sagittis sem quis, eleifend consequat mauris. Sed.
                            </p>
                            <p className='text-gray'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel semper lorem. 
                                Vestibulum sed quam id urna feugiat ultricies. Nullam est nisi, tincidunt sagittis sem quis, eleifend consequat mauris. Sed.
                            </p>
                        </div>
                    </div>
                </section>
                <section className='container mx-auto counting-area'>
                    <div className='grid cols-1-grid lg-cols-2-grid px-5'>
                        <div className=''>
                            <h1 className='pb-5 text-black2 font-simibold'>
                                The hundred of <br/>
                                completed works <br/>
                                still counting
                            </h1>
                            <p className='text-gray'>
                                There are many variations of passages of Lorem Ipsum available, 
                                but the majority have suffered alteration in some form, by injected humour, 
                                or randomised words which don't look even slightly believable. 
                                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything 
                                embarrassing hidden in the middle of text.
                            </p>
                        </div>
                        <div className=''>
                            <div className='background font-simibold'>
                                <div className='blur d-flex center-item text-lg text-dark2'>Work Smart With Digital Life</div>
                            </div>
                            <p className='pt-5 pb-2 text-gray'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel semper lorem. 
                                Vestibulum sed quam id urna feugiat ultricies. Nullam est nisi, tincidunt sagittis sem quis, eleifend consequat mauris. Sed.
                            </p>
                            <p className='text-gray'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel semper lorem. 
                                Vestibulum sed quam id urna feugiat ultricies. Nullam est nisi, tincidunt sagittis sem quis, eleifend consequat mauris. Sed.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}

export default MainSection;