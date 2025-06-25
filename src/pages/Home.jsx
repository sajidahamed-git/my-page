export default function Home() {
  return (
    <div className="max-w-2xl mx-auto  px-4 ">
      {/* Big HI */}
      <div className="text-5xl font-extrabold mb-6">Hi!</div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-lg">
        I'm a full stack web developer, I've been working with React and node.js for over 3 years.

      </p>
      <p className="mt-4 text-gray-700 leading-relaxed text-lg">
        I specialize in building complete solutions, handling everything from intuitive frontends to robust middleware, APIs, and scalable databases.

      </p>

      <p className="mt-4 text-gray-700 leading-relaxed text-lg">
        Checkout the projects section to see some of my work, or visit my GitHub profile for more details.
      </p>

      <p className="mt-4 text-gray-700 leading-relaxed text-lg">
        I'm actively seeking new opportunities to collaborate on innovative projects. If you have something exciting in mind, I'd love to connect and discuss how we can work together!
        <br />
        You can also check out my resume for a detailed overview of my skills and experience.
      </p>



      {/* Contact Info */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-gray-700 space-y-2">
        <p>
          📧 Email: <a href="mailto:mail@sajidahamed.com" className="text-blue-400 hover:underline">mail@sajidahamed.com</a>
        </p>
        <p>
          📱 Phone: <a href="tel:+9789618156" className="text-blue-400 hover:underline">+91 9789618156</a>
        </p>
        <p>
          💻 GitHub: <a href="https://github.com/sajidahamed-git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">sajidahamed-git</a>
        </p>
      </div>
    </div>
  );
}
