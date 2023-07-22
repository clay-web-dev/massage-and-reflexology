import AppointmentButton from "../CTAs/AppointmentButton";
import ContactButton from "../CTAs/ContactButton";
import GetAQuoteButton from "../CTAs/GetAQuoteButton";

const LandingSection: React.FC = () => {
  return (
    <section className="max-w-screen-sm max-lg:max-w-screen-sm max-sm:px-4 m-auto h-[600px] max-lg:h-[450px] flex items-center">
      <div className="text-center">
        <h3 className="">Holistic Wellness Therapies</h3>
        <p>
          I am passionate about helping my clients to feel better! I offer a
          wide variety of massages tailored to person’s individual needs and
          Skincare treatments available : Facials , Microneedling,
          Nanoneedling,Serum infusion for instant hydration , Scalp
          Microneedling for thinning hair , Chemical Peels , Dermaplanning ,
          Microdermabrasion – deep skin exfoliation. COMING SOON – SCULPTURAL
          FACE LIFTING massage – natural alternative to FACE LIFT
        </p>
        <p> **massages currently available to ladies only</p>
        <AppointmentButton />
        <ContactButton />
      </div>
    </section>
  );
};

export default LandingSection;
