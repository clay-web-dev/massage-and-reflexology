import AboutUsSection from "../components/sections/AboutUsSection";
import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <CommonLanding heading={"About Us"} />
      <AboutUsSection />
    </>
  );
};

export default AboutPage;
