import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSection from './layout/Navbar';
import MainSection from './layout/mainSection';
import Footer from './layout/footer';

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