import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Header from 'ds-monorepo/packages/components/lib/Header';
import Footer from 'ds-monorepo/packages/components/lib/Footer';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
