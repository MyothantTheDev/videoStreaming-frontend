import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSection from './conponents/layout/Navbar';
import MainSection from './conponents/layout/mainSection';
import Footer from './conponents/layout/footer';

const FrontPage = () => {
    return (
        <Fragment>
            <NavSection/>
            <MainSection/>
            <Footer/>
        </Fragment>
    )
}

export default FrontPage;