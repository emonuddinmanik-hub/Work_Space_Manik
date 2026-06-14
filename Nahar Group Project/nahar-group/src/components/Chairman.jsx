const Chairman = () => {
  return (
    <div className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <img
          src="../../src/Images/Nahar chirman.jpg"
          alt="Chairman"
          className="w-full max-w-sm mx-auto rounded-xl shadow-lg"
        />

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Chairman Message
          </h2>

          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            Engr. Jasim Uddin (Jini)
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Chairman & Managing Director of Nahar Group. With a vision to
            build a diversified and sustainable enterprise, he leads multiple
            sectors including healthcare, agro, real estate, and hospitality.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Chairman;