const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">

      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-6">Page Not Found</p>

      <a href="/" className="bg-blue-900 text-white px-6 py-2 rounded">
        Go Home
      </a>

    </div>
  );
};

export default NotFound;