import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSection from './Nav/Navbar';
import MainSection from './FrontBody/mainSection';

const FrontPage = () => {
    return (
        <Fragment>
            <NavSection/>
            <MainSection/>
        </Fragment>
    )
}

export default FrontPage;