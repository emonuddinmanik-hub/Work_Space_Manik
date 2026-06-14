const Contact = () => {
  return (
    <div className="pt-20 px-8">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Contact Us
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded"
          />

          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded h-32"
          ></textarea>

          <button className="bg-blue-900 text-white px-6 py-3 rounded">
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
};

export default Contact;
