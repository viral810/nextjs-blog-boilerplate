import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const analyticsScriptTag = () => {
  return {
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-XXXXXXX-X');
    `
  };
};

const Header = () => {
  return (
    <header className="o-header">
      <Head>
        <title>Site Title</title>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-134715104-1"
        />
        <script dangerouslySetInnerHTML={analyticsScriptTag()} />
      </Head>
      <p>
        Site &nbsp;{' '}
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        &nbsp;{' '}
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </p>
      <hr />
    </header>
  );
};

export default Header;
