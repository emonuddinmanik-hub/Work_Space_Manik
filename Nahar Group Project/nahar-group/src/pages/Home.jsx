
import Hero from "../components/Hero";
import Businesses from "../components/Businesses";
import Stats from "../components/Stats";
import Healthcare from "../components/Healthcare";
import Chairman from "../components/Chairman";
import CTA from "../components/CTA";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Nahar Group | Home</title>
        <meta
          name="description"
          content="Nahar Group is a diversified company in healthcare, agro, real estate and more."
        />
      </Helmet>

      <div className="pt-20">
        {/* your sections */}
        <div >
      <Hero />
      <Businesses />
      <Stats />
      <Healthcare />
      <Chairman />
      <CTA />
    </div>
      </div>
    </>
    

  );
};

export default Home;