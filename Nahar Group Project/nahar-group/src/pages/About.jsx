import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Nahar Group</title>
        <meta
          name="description"
          content="Learn about Nahar Group, a diversified company in healthcare, agro, real estate, food and hospitality."
        />
      </Helmet>

      <div className="pt-20">

        {/* HERO */}
        <div className="bg-blue-900 text-white py-20 text-center px-6">
          <h1 className="text-5xl font-bold mb-4">
            About Nahar Group
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            A diversified enterprise committed to excellence in healthcare,
            real estate, agro, food, and hospitality sectors.
          </p>
        </div>

        {/* COMPANY OVERVIEW */}
        <div className="py-20 px-8 bg-white">
          <div className="max-w-5xl mx-auto text-center">

            <h2 className="text-4xl font-bold mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Nahar Group is a growing multi-sector organization based in Bangladesh,
              dedicated to delivering quality services and sustainable development
              across various industries. With strong leadership and a vision for the
              future, the group has expanded into healthcare, agro industries,
              real estate, food production, and hospitality.
            </p>

          </div>
        </div>

        {/* CHAIRMAN */}
        <div className="py-20 px-8 bg-gray-100">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

            <img
              src="../../src/Images/Nahar chirman.jpg"
              alt="Chairman"
              className="w-full max-w-sm mx-auto rounded-xl shadow-lg"
            />

            <div>
              <h2 className="text-4xl font-bold mb-4">
                Chairman Message
              </h2>

              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                Engr. Jasim Uddin (Jini)
              </h3>

              <p className="text-gray-600 leading-relaxed">
                As the Chairman of Nahar Group, Engr. Jasim Uddin (Jini) has
                been leading the organization with a vision of innovation,
                sustainability, and excellence. His leadership has enabled
                the group to grow across multiple sectors while maintaining
                quality and trust.
              </p>
            </div>

          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

            <div className="p-8 shadow-lg rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-blue-900">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To provide high-quality services and products that improve
                people’s lives while ensuring sustainable growth and innovation
                across all sectors.
              </p>
            </div>

            <div className="p-8 shadow-lg rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-blue-900">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To become a leading and trusted conglomerate in Bangladesh,
                recognized for excellence, integrity, and long-term value creation.
              </p>
            </div>

          </div>
        </div>

        {/* SECTORS */}
        <div className="py-20 px-8 bg-gray-100 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Our Business Sectors
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold">Healthcare</h3>
              <p className="text-gray-600 text-sm">
                Hospitals and diagnostic services
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold">Agro</h3>
              <p className="text-gray-600 text-sm">
                Agriculture and food production
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold">Real Estate</h3>
              <p className="text-gray-600 text-sm">
                Construction and infrastructure
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold">Food</h3>
              <p className="text-gray-600 text-sm">
                Processing and distribution
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold">Resort</h3>
              <p className="text-gray-600 text-sm">
                Hospitality and leisure services
              </p>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default About;