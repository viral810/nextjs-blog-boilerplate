import React, { Fragment } from 'react';

import { withRouter } from 'next/router';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { filterPosts } from '../utils/content';
import SUMMARY_JSON from '../content/summary.json';

const Page = () => {
  const postList = filterPosts(SUMMARY_JSON);
  return (
    <Fragment>
      <Header />
      <Layout>
        {postList.map(article => (
          <h1>{article.title}</h1>
        ))}
      </Layout>
      <Footer />
    </Fragment>
  );
};

export default withRouter(Page);
