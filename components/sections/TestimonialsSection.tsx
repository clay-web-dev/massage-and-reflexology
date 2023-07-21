import TestimonialsCarousel from "../TestimonialsCarousel";
import Image from "next/image";
import Bg from "../../assets/bg.jpg";

const TestimonialsSection: React.FC = () => {
  return (
    <section id="what-they-say">
      <div className="flex max-lg:px-4 max-lg:py-10">
        <div className="h-50 max-lg:hidden">
          <Image src={Bg} alt="" className="h-96" />
        </div>
        <div className="w-96">
          <div className="col flex center-left">
            <div>
              <div>
                <h3 className="font-bold text-blue-900 text-4xl">
                  Testimonials
                </h3>
                <p>Find out what out happy customer have to say!</p>
                <br />
                <TestimonialsCarousel />
                <p>Get your free quote today!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
