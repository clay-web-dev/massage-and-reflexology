import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";

const TestimonialsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Testimonials</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <CommonLanding heading={"Testimonials"} />
    </>
  );
};

export default TestimonialsPage;
