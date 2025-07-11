'use client';

import { useState, useEffect, useCallback } from 'react';
import { getPokemonList, searchPokemon } from '@/lib/api';
import { Pokemon } from '@/types/pokemon';
import PokemonCard from '@/components/PokemonCard';
import SearchBar from '@/components/SearchBar';
import LoadingSpinner from '@/components/LoadingSpinner';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';

export default function HomePage() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await getPokemonList(151, 0);
        const detailedPokemon = await Promise.all(
          response.results.slice(0, 20).map(pokemon => 
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(res => res.json())
          )
        );
        setPokemonList(detailedPokemon);
        setFilteredPokemon(detailedPokemon);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  const debouncedSearch = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;
      return (query: string) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(async () => {
          if (!query.trim()) {
            setFilteredPokemon(pokemonList);
            setSearchLoading(false);
            return;
          }

          try {
            setSearchLoading(true);
            const searchResults = await searchPokemon(query);
            setFilteredPokemon(searchResults);
          } catch (error) {
            console.error('Error searching Pokemon:', error);
            setFilteredPokemon([]);
          } finally {
            setSearchLoading(false);
          }
        }, 500);
      };
    })(),
    [pokemonList]
  );

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setSearchLoading(true);
    debouncedSearch(query);
  }, [debouncedSearch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-red-400/20 dark:from-pink-500/10 dark:to-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 dark:from-yellow-500/5 dark:to-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <header className="relative">
          <nav className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">⚡</span>
                </div>
                <span className="text-xl font-bold text-gray-800 dark:text-white">Pokemon Explorer</span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-300">
                  <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
                  <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link>
                  <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">API</a>
                  <a href="https://github.com/RG4025" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
                </div>
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-4">
                <ThemeToggle />
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Toggle mobile menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {mobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="px-4 py-3 space-y-3">
                  <Link 
                    href="/about" 
                    className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <a 
                    href="https://pokeapi.co/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    API
                  </a>
                  <a 
                    href="https://github.com/RG4025" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            )}
          </nav>

          <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6 animate-fade-in">
                  Discover the World of
                  <span className="block text-6xl md:text-8xl">Pokemon</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Explore over 800+ Pokemon with detailed information, stats, abilities, and moves. 
                  Your ultimate Pokemon encyclopedia powered by the PokeAPI.
                </p>
              </div>

              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <SearchBar onSearch={handleSearch} placeholder="Search for Pokemon (e.g., Pikachu, Charizard)..." />
                  <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full">Popular: Pikachu</span>
                    <span className="bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full">Charizard</span>
                    <span className="bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full">Bulbasaur</span>
                    <span className="bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full">Squirtle</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 dark:border-gray-700/20">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">151</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Original Pokemon</div>
                </div>
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 dark:border-gray-700/20">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">18</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Types</div>
                </div>
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 dark:border-gray-700/20">
                  <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">800+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Total Pokemon</div>
                </div>
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 dark:border-gray-700/20">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">∞</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 pb-20">
          {searchQuery && (
            <div className="mb-8 text-center">
              <div className="inline-flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20 dark:border-gray-700/20">
                <span className="text-gray-600 dark:text-gray-300 mr-2">Search Results:</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {filteredPokemon.length > 0 
                    ? `${filteredPokemon.length} Pokemon found`
                    : 'No Pokemon found'
                  }
                </span>
                <button 
                  onClick={() => handleSearch('')}
                  className="ml-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {(loading || searchLoading) ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative">
                <LoadingSpinner size="lg" />
                <div className="mt-4 text-center">
                  <div className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    {loading ? 'Loading Pokemon...' : 'Searching Pokemon...'}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Gotta catch &apos;em all!</div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {filteredPokemon.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 animate-fade-in">
                  {filteredPokemon.map((pokemon, index) => (
                    <div 
                      key={pokemon.id} 
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <PokemonCard pokemon={pokemon} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="max-w-md mx-auto">
                    <div className="text-8xl mb-6">🔍</div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                      No Pokemon Found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                      Try searching for a different Pokemon name or browse our collection below.
                    </p>
                    <button 
                      onClick={() => handleSearch('')}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 dark:hover:from-blue-700 dark:hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                      View All Pokemon
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </main>

        <footer className="relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">⚡</span>
                </div>
                <span className="text-lg font-bold text-gray-800 dark:text-white">Pokemon Explorer</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Powered by <a href="https://pokeapi.co/" className="text-blue-600 dark:text-blue-400 hover:underline">PokeAPI</a> • 
                Built with <a href="https://nextjs.org/" className="text-blue-600 dark:text-blue-400 hover:underline">Next.js</a> and 
                <a href="https://tailwindcss.com/" className="text-blue-600 dark:text-blue-400 hover:underline"> Tailwind CSS</a>
              </p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
