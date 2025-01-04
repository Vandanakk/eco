import React from "react";
import Footer from "../../component/Footer/footer";
import Blog from "../Blog/BlogView";
import Featured from "../../component/Featured/featured";
import Trending from "../../component/Trending/trending";
import FeaturedProducts from "../../component/FeaturedProducts/featuredproducts";
import Services from "../Services/services";

import Main from "../Main/main";

export default function Home() {
  return (
    <>
      <Main/>
      <Featured />
      <FeaturedProducts/>
      <Trending/>
      {/* <Services /> */}     
      {/* <Blog/> */}
      <Footer />
    </>
  );
}