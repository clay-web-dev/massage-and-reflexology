import IntroSection from "../components/sections/IntroSection";
import AboutUsSection from "../components/sections/AboutUsSection";
import GetQuoteSection from "../components/sections/GetQuoteSection";
import PerfectPainterSection from "../components/sections/PerfectPainterSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import LandingSection from "../components/sections/LandingSection";
import Head from "next/head";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <LandingSection />
      <IntroSection />
      <PerfectPainterSection />
      <AboutUsSection />
      <WhyUsSection />
      <GetQuoteSection />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;
