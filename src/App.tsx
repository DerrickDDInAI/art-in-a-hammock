import React from 'react';
import { Github, ExternalLink, Linkedin, Mail, Sun, Moon, HelpCircle } from 'lucide-react';
import { projects } from './data/projects';
import { Logo } from './components/Logo';
import { WebsiteName } from './components/WebsiteName';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen bg-cover bg-center bg-no-repeat ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}
      style={{
        backgroundImage: isDark
          ? `linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url('/Background.png')`
          : `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/Background.png')`
      }}
    >
      {/* Header */}
      <header className="w-full py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Logo className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            {/* <img
              src="src/components/Website-name.png"
              alt="Art in a Hammock"
              className="h-8 w-auto"
            /> */}
            <WebsiteName className={`w-auto h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDark
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href="mailto:artinahammock@gmail.com"
              className={`transition-colors ${
                isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/derrick-van-frausum/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/DerrickDDInAI/art-in-a-hammock.git"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Gallery Title and Description */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Interactive Computer Vision Gallery
          </h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Explore computer vision with OpenCV, Pillow, and more through interactive examples. 
          Each project includes a live demo and source code on Google Colab.
          </p>
        </div>

        {/* Tip Box */}
        <div className="flex justify-end mb-6">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
            isDark 
              ? 'bg-gray-800 text-gray-300 border border-gray-700' 
              : 'bg-blue-50 text-gray-700 border border-blue-100'
          }`}>
            <HelpCircle className="w-5 h-5" />
            <p className="text-sm font-medium">
              Hover over the images to see the algorithms in action!
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-lg overflow-hidden transition-transform hover:scale-105 ${
                isDark ? 'bg-gray-800' : 'bg-white shadow-lg'
              }`}
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
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex items-center space-x-4">
                  <a
                    href={project.colabLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 transition-colors ${
                      isDark
                        ? 'text-blue-400 hover:text-blue-300'
                        : 'text-blue-600 hover:text-blue-500'
                    }`}
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
        <div className="max-w-7xl mx-auto text-center">
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            Built with React and Tailwind CSS • Explore Computer Vision
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;