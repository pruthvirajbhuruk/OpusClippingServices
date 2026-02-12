import Header from "./components/Header";
import Promo from "./components/Promo";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Stats from "./components/Stats";
import Problem from "./components/Problem";
import Results from "./components/Results";
import CaseStudies from "./components/CaseStudies";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <>
      <CustomCursor />
      <Hero />
      <Header />
      <Stats/>
      <Problem />
      <Services/>
      <Results />
      <CaseStudies />
      <Testimonials/>
      <Promo />
      <Pricing/>
      <Footer />
      
    </>
  );
}
