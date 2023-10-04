import React, { Fragment} from 'react';
import { Helmet } from 'react-helmet';
import { PcDisplayHorizontal, Cpu } from 'react-bootstrap-icons';

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
                                <Cpu className='text-2xl ' />
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
            </main>
        </Fragment>
    )
}

export default MainSection;