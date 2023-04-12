import AboutUs from "../../organisms/AboutUs/AboutUs";
import ContactUs from "../../organisms/ContactUs/ContactUs";
import Hero from "../../organisms/Hero/Hero";
import Section from "../../organisms/Section/Section";
import Testimonial from "../../organisms/Testimonial/Testimonial";

export const Home = () => {
  return (
    <>
      <Hero />
      <Section />
      <AboutUs />
      <Testimonial />
      <ContactUs />
    </>
  );
};
