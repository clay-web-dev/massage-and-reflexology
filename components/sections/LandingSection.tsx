import ContactButton from "../CTAs/ContactButton";
import GetAQuoteButton from "../CTAs/GetAQuoteButton";

const LandingSection: React.FC = () => {
  return (
    <section className="max-w-screen-lg max-lg:max-w-screen-sm max-sm:px-4 m-auto h-[600px] max-lg:h-[450px] flex items-center">
      <div className="">
        <h3 className="text-blue-900 text-5xl font-bold max-lg:text-3xl">
          Your local London <br />
          Painters &amp; Decorators
        </h3>
        <p className="py-4">Professional Painters and Decorators in London.</p>

        <GetAQuoteButton />
        <ContactButton />
      </div>
    </section>
  );
};

export default LandingSection;
