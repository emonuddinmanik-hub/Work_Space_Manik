const Healthcare = () => {
  return (
    <div className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1580281657527-47a8b2bcd5c3"
          alt="hospital"
          className="rounded-xl shadow-lg"
        />

        {/* CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Healthcare Excellence
          </h2>

          <p className="text-gray-600 mb-6">
            Nahar Group is committed to delivering world-class healthcare
            through advanced facilities, modern equipment, and expert medical professionals.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ ICU & NICU Facilities</li>
            <li>✔ Advanced Diagnostics</li>
            <li>✔ Emergency Services 24/7</li>
            <li>✔ Skilled Medical Team</li>
          </ul>

          <button className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Explore Healthcare
          </button>
        </div>

      </div>
    </div>
  );
};

export default Healthcare;