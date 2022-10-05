import React from 'react';
import Head from 'next/head';
import { Facebook1 } from './Facebook1';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Ninety5 Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
      <Facebook1/>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout