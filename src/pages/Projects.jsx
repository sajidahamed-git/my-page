export default function Projects() {
    const projects = [
            {
        title: "Cipher Docs",
        description: "End-to-end encrypted online text editor ",
        url: "https://cipherdocs.sajidahamed.com",
      },
      {
        title: "To-Do and Notes App",
        description: "A sleek and minimal productivity app built using JavaScript and TailwindCSS, designed to help you stay organized with ease.",
        url: "https://tasks.sajidahamed.com",
      },
      {
        title: "Resume Builder",
        description: "A lightweight and user-friendly tool that helps you craft clean, professional resumes in minutes.",
        url: "https://resumebuilder.sajidahamed.com",
      },
      {
        title: "Battleship",
        description: "A classic naval warfare game reimagined for the browser, delivering a smooth and interactive experience.",
        url: "https://battleship.sajidahamed.com",
      },
      {
        title: "Instant Messaging App (under development)",
        description: "Inspired by popular platforms like WhatsApp, Telegram, and Discord",
        
      },
      {title:'Wheres Waldo (under development)',
        description:'A fun and challenging visual puzzle game where your goal is simple: find Waldo hidden in a crowded scene!'
      },
      {
        title: "Blog API (under development)",
        description: "This project focuses on building a robust API-only backend for a blog platform.",
        
      },
    ];
  
    return (
      <div className="max-w-5xl mx-auto mt-10 px-4 text-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow transition cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    );
  }
  