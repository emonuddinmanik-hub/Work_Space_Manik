// 

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300 pt-16 pb-8 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-white text-xl font-bold mb-4">
            Nahar Group
          </h2>
          <p>
            Building a better future through healthcare, agro, real estate and innovation.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>Projects</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Businesses</h3>
          <ul className="space-y-2">
            <li>Healthcare</li>
            <li>Agro</li>
            <li>Builders</li>
            <li>Resort</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p>Chattogram, Bangladesh</p>
          <p>Email: info@nahargroup.com</p>
        </div>

      </div>

      <div className="text-center mt-10 border-t border-gray-700 pt-6">
        © 2026 Nahar Group. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;