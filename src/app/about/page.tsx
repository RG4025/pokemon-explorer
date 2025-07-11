import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Pokemon Explorer
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
              About Pokemon Explorer
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your ultimate guide to exploring the world of Pokemon
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">What is Pokemon Explorer?</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Pokemon Explorer is a modern, responsive web application that allows you to discover and explore 
                the vast world of Pokemon. Built with Next.js, TypeScript, and Tailwind CSS, it provides a 
                beautiful and intuitive interface to browse Pokemon data from the PokeAPI.
              </p>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Smart Search</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Real-time search with debounced input for optimal performance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Detailed Stats</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive Pokemon information including stats, abilities, and moves</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Dark Mode</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Beautiful dark theme with smooth transitions</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Responsive Design</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Works perfectly on desktop, tablet, and mobile devices</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Fast Performance</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Optimized with Next.js SSR and efficient caching</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Type System</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Color-coded Pokemon types with visual indicators</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">How to Use Pokemon Explorer</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">1. Browse Pokemon</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Start by browsing the Pokemon grid on the homepage. You'll see Pokemon cards with their 
                    images, names, types, and basic information. Click on any Pokemon card to view detailed information.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">2. Search Pokemon</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Use the search bar at the top of the page to find specific Pokemon. Type the name of any 
                    Pokemon (e.g., "Pikachu", "Charizard") and the results will update in real-time. The search 
                    is case-insensitive and supports partial matches.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">3. View Details</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Click on any Pokemon card to navigate to the detail page. Here you'll find comprehensive 
                    information including:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Official artwork and sprites</li>
                    <li>Base stats with visual progress bars</li>
                    <li>Abilities (including hidden abilities)</li>
                    <li>Complete move list</li>
                    <li>Height, weight, and base experience</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">4. Toggle Theme</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Use the theme toggle button in the navigation bar to switch between light and dark modes. 
                    Your preference will be saved and remembered for future visits.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Technical Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Built With</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Next.js 15 with App Router
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      TypeScript for type safety
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Tailwind CSS for styling
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                      PokeAPI for Pokemon data
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Features</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                      Server-side rendering (SSR)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Responsive design
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      Dark mode support
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      Optimized performance
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Data Source</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pokemon Explorer uses the <a href="https://pokeapi.co/" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">PokeAPI</a>, 
                a free and open RESTful API that provides comprehensive Pokemon data. The API includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Complete Pokemon information (stats, abilities, moves)</li>
                <li>High-quality sprites and official artwork</li>
                <li>Type information and effectiveness</li>
                <li>Evolution chains and forms</li>
                <li>Real-time data updates</li>
              </ul>
            </section>

            <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Tips & Tricks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">💡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Quick Search</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Try searching for popular Pokemon like "Pikachu", "Charizard", or "Mewtwo"</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">🎨</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Theme Switching</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Toggle between light and dark themes using the button in the navigation</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">📱</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Mobile Friendly</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">The app works perfectly on mobile devices with touch-optimized interface</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Fast Loading</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Images are optimized and cached for faster loading times</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 dark:hover:from-blue-700 dark:hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Start Exploring Pokemon
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 