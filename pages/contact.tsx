import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
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
      <section className="py-10 max-sm:px-4">
        <div className="max-w-screen-lg flex m-auto max-sm:block">

          <div>
            Contact Me Get In Touch With Me Do you have a question? Or perhaps
            you would like to know more about my services? Contact me by filling
            the form, and I will get back to you within 24 hours. the quickest
            way to contact me is on WHATSAPP 07757373426 Holistic Wellness
            Therapies sandra@holisticwellnesstherapies.co.uk +44 7757 373426 3
            Warwick Place, Leamington Spa, CV325BH
          </div>
            <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
