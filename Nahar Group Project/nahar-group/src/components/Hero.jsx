import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">

      {/* Background Image */}
      <img
        src="../../src/Images/Nahar Hero.png"
        alt="Nahar Group"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* TOP CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center pt-18 px-4">

        {/* Small Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-semibold tracking-wide mb-2"
        >
          NAHAR GROUP
        </motion.h2>

        {/* Big Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold max-w-4xl leading-tight"
        >
          BUILDING LIVES. EMPOWERING COMMUNITIES. SHAPING FUTURES.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-sm md:text-base tracking-wide text-gray-200"
        >
          GREEN CITY HOSPITAL | NAHAR SPECIALIZED HOSPITAL | NAHAR PARK & RESORT | NAHAR BUILDERS | NAHAR FOOD
        </motion.p>

        {/*  CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex gap-4 flex-wrap justify-center"
        >
          <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Explore Group
          </button>

          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-900 transition">
            Contact Us
          </button>
        </motion.div>

      </div>

    </div>
  );
};

export default Hero;