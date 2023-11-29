import React from "react";
import Navebar from "../SharePages/Navebar/Navebar";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../SharePages/Footer/Footer";

const MainHomLayouts = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Toy-Guy | HOME</title>
        <meta
          name="description"
          content="A concise description of your page content."
        />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Your Page Title" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:description"
          content="A concise description of your page content."
        />
        <meta
          property="og:image"
          content="URL to an image associated with your page"
        />
        <meta
          property="og:url"
          content="https://www.yourwebsite.com/your-page"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Page Title" />
        <meta
          name="twitter:description"
          content="A concise description of your page content."
        />
        <meta
          name="twitter:image"
          content="URL to an image associated with your page"
        />
      </Helmet>
      <Navebar></Navebar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainHomLayouts;
