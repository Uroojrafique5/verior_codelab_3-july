function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full bg-white dark:bg-gray-900 shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-indigo-600">Urooj</div>
          <div className="space-x-6">
            <button onClick={() => scrollToSection("home")} className="hover:text-indigo-600 transition">Home</button>
            <button onClick={() => scrollToSection("about")} className="hover:text-indigo-600 transition">About</button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-indigo-600 transition">Projects</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-indigo-600 transition">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center px-6 pt-20">
        <h1 className="text-5xl font-bold animate-fade">Hi, I'm Urooj Bajwa</h1>
        <p className="mt-4 text-xl animate-slide">Creative Front-End Developer</p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed animate-fade">
            I’m a passionate developer who loves building beautiful, functional, and accessible websites.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-100 text-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="bg-white p-6 rounded shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-xl font-semibold mb-2">Project {n}</h3>
                <p>This is a brief description of project {n}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded transition duration-300 hover:bg-indigo-100 hover:scale-105">
          Say Hello
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors duration-300">
        © 2025 Urooj Portfolio
      </footer>
    </div>
  );
}

export default App;
