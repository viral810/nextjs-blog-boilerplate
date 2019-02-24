import React, { Fragment } from 'react';

import { withRouter } from 'next/router';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Page = () => (
  <Fragment>
    <Header />
    <Layout>This is a home page</Layout>
    <Footer />
  </Fragment>
);

export default withRouter(Page);
