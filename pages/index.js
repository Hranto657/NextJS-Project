import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import NavBar from "./navbar";
import Services from "./section1";
import Shipping from "./section2";
import AboutServices from "./section3";
import ContactUs from "./section4";
import Gallery from "./section5";
import AboutUs from "./section6";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My First Project</title>
      </Head>
      <div className="mainheader">
        <NavBar />
        <Header />
      </div>
      <Services />
      <Shipping />
      <AboutServices />
      <ContactUs />
      <Gallery />
      <AboutUs />
      <Footer />
    </div>
  );
}
