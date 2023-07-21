import CommonLanding from "../components/sections/CommonLanding";
import ExteriorSection from "../components/sections/ExteriorSection";
import GetQuoteSection from "../components/sections/GetQuoteSection";
import Head from "next/head";

const ExteriorPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Exterior Painting & Decorating</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <CommonLanding heading={"Exterior Painting & Decorating"} />
      <ExteriorSection />
      <GetQuoteSection />
    </>
  );
};

export default ExteriorPage;
