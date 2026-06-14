

import companies from "../data/companies";
import { Link } from "react-router-dom";

const Businesses = () => {
  return (
    <div className="py-20 px-8 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Businesses</h2>

      <div className="grid md:grid-cols-3 gap-8">

        {companies.map((company) => (
          <Link
            to={`/company/${company.id}`}
            key={company.id}
            className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:scale-105 transition"
          >
            <img
              src={company.image}
              alt={company.name}
              className="rounded-lg mb-4 h-40 w-full object-cover"
            />

            <h3 className="text-xl font-semibold">{company.name}</h3>
            <p className="text-gray-600 text-sm">
              {company.description}
            </p>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default Businesses;