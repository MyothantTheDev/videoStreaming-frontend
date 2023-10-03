import React, { Fragment} from 'react';
import { Helmet } from 'react-helmet';

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
                            <div className='py-4 text-lg sm-text-xl font-bold'>
                                <ul className='font-lightblack2'>
                                    <li>Over 10 years of experience</li>
                                    <li>Our advisory team are housed <br/> under one roof</li>
                                    <li>Advisory to financial analysis and <br/> legal/regulatory expertise</li>
                                </ul>
                            </div>
                            <div className='py-4'>
                                <a className='Btn Btn-primary bg-gradient-peach link-decorator text-white'>Work Together</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* agency area */}
                <section className='agency-area'>
                    <div className='container mx-auto text-center'>
                        <span className='text-red font-bold text-md'>Join our Company</span>
                        <div className='area-title'>
                            <h1 className='font-lightblack'>Set up a suitable chart of account and <br/> Client's database account in accounting system.</h1>
                        </div>
                        <div className='text-red text-center'>
                            <i className='bi bi-bi-pc-display-horizontal'></i>
                            <div>Support Accounting Softwares</div>
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}

export default MainSection;