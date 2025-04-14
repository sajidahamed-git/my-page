export default function Home() {
  return (
    <div className="max-w-2xl mx-auto mt-10 px-4 ">
      {/* Big HI */}
      <div className="text-5xl font-extrabold mb-6">Hi!</div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-lg">
        I'm <span className="font-semibold ">Sajid</span>, a passionate web developer focused on building responsive,
        user-friendly web applications using modern tools like React, Tailwind CSS, and Vite. I love learning new tech and
        building fun side projects that solve real problems or just look cool!
      </p>

      <p className="mt-4 text-gray-700 leading-relaxed text-lg">
        When I'm not coding, you can usually find me exploring design trends, contributing to open source, or just
        watching tech videos and gaming.
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
