import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSection from './Nav/Navbar';
import MainSection from './FrontBody/mainSection';
import Footer from './Footer/footer';

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