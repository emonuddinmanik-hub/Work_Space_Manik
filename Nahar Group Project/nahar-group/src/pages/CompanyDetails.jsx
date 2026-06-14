import { useParams } from "react-router-dom";
import companies from "../data/companies";

const CompanyDetails = () => {
  const { id } = useParams();

  const company = companies.find((c) => c.id === id);

  if (!company) return <div className="p-10">Not Found</div>;

  return (
    <div className="pt-20 px-8">

      <div className="max-w-4xl mx-auto">

        <img
          src={company.image}
          className="w-full h-80 object-cover rounded-xl mb-6"
        />

        <h1 className="text-4xl font-bold mb-4">
          {company.name}
        </h1>

        <p className="text-gray-600 mb-6">
          {company.description}
        </p>

        <p className="text-gray-700">
          This section will include detailed information about services,
          facilities, projects, and achievements of this business unit.
        </p>

      </div>

    </div>
  );
};

export default CompanyDetails;