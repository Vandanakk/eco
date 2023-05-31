import React from "react";
import Footer from "../../component/Footer/footer";
import Blog from "../Blog/blog";
import Featured from "../../component/Featured/featured";
import Services from "../Services/service";
import Main from "../Main/main";

export default function Home() {
  return (
    <>
      <Main/>
      <Featured />
      {/* <Services /> */}     
      {/* <Blog/> */}
      <Footer />
    </>
  );
}