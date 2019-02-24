import React from 'react';

const Layout = props => {
  const { children } = props;

  return (
    <main id="main-content">
      <div>{children}</div>
    </main>
  );
};

export default Layout;
