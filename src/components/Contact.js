function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Contact Me</h2>
        <div className="w-16 h-1 bg-orange-500 mb-8 mx-auto"></div>
        <p className="text-gray-400 text-lg mb-8">
          Feel free to reach out - I am open to opportunities and collaborations!
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="mailto:rajthalapari@gmail.com" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600">
            rajthalapari@gmail.com
          </a>
          <a href="tel:9818222066" className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white">
            9818222066
          </a>
          <a href="https://www.linkedin.com/in/parisha-rajthala" target="_blank" rel="noreferrer" className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;