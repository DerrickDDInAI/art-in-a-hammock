import React from 'react';
import { Github, Cpu, ExternalLink, Linkedin, Mail } from 'lucide-react';
import { projects } from './data/projects';
import { Logo } from './components/Logo';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* <Cpu className="w-8 h-8 text-blue-400" /> */}
            {/* <img
              src="src/assets/logo.svg"
              alt="Art in a Hammock Logo"
              className="w-8 h-8"
            /> */}
            <Logo className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold text-white">Art in a Hammock</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:artinahammock@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/derrick-van-frausum/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/DerrickDDInAI/art-in-a-hammock.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Interactive Computer Vision Gallery
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore traditional computer vision techniques through interactive examples.
            Each project includes a live demo and access to the source code via Google Colab.
            Hover over the images to see the results of the algorithms in action!
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Hover over the images to see the results of the algorithms in action!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
                <div className="aspect-video relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src={project.hoverImage}
                  alt={`${project.title} Hover`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
                </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex items-center space-x-4">
                  <a
                    href={project.colabLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Try in Colab</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>Built with React and Tailwind CSS • Explore Computer Vision</p>
        </div>
      </footer>
    </div>
  );
}

export default App;