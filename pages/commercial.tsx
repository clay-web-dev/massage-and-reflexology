import CommonLanding from "../components/sections/CommonLanding";
import CommercialSection from "../components/sections/CommercialSection";
import GetQuoteSection from "../components/sections/GetQuoteSection";
import Head from "next/head";

const CommercialPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Commercial Painting & Decorating</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <CommonLanding heading={"Commercial Painting & Decorating"} />
      <CommercialSection />
      <GetQuoteSection />
    </>
  );
};

export default CommercialPage;
