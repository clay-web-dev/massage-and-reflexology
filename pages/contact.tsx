import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import GetQuoteSection from "../components/sections/GetQuoteSection";
import Head from "next/head";

const ContactPage: React.FC = () => {

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <section className="flex items-center justify-center bg-gray-200 h-[350px]">
        <div className="max-w-screen-lg m-auto">
          <h3 className="text-blue-900 letter-spacing-1 text-5xl font-bold">
            Contact Us
          </h3>
        </div>
      </section>
      <section className="py-10 max-sm:px-4">
        <div className="max-w-screen-lg flex m-auto max-sm:block">
          <div className="pr-20">
            <h3 className="f-w-900 text-blue-900 text-4xl font-bold pb-1">
              Say Hi!
            </h3>
            <p className="pb-5">
              Send us your query and one of our agents will get back to you!
            </p>
            <ContactForm />
          </div>
          <div>
            <ContactCard
              heading={"Email us"}
              copy={
                "For general inquiries and questions, contact us via email."
              }
              linkText={"info@theperfectpainter.co.uk"}
              link={"mailto:info@theperfectpainter.co.uk"}
            />

            <ContactCard
              heading={"Call us"}
              copy={"Tell us your needs and we’ll send you a free estimate."}
              linkText={"0203 105 5111"}
              link={"tel:02031055111"}
            />
            <ContactCard
              heading={"WhatsApp"}
              copy={
                "For general inquiries and questions, reach us on WhatsApp."
              }
              linkText={"+44 7861 312295"}
              link={"https://wa.link/tmwizz"}
            />
          </div>
        </div>
      </section>
      <GetQuoteSection />
    </>
  );
};

export default ContactPage;
