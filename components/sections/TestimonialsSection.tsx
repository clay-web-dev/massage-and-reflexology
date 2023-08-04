import TestimonialsCarousel from "../TestimonialsCarousel";

const TestimonialsSection: React.FC = () => {
  return (
    <section id="what-they-say">
      <div className="flex max-lg:px-4 max-lg:py-10">
        <div className="w-96">
          <div className="col flex center-left">
            <div>
              <h3 className="font-bold text-blue-900 text-4xl">Testimonials</h3>
              <p>Find out what out happy customer have to say!</p>
              <br />
              <TestimonialsCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
