'use client';

import { useState, useEffect, useCallback } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = "Search Pokemon..." }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        setIsSearching(true);
        onSearch(query.trim());
        setTimeout(() => setIsSearching(false), 100);
      } else {
        onSearch('');
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  const handleClear = useCallback(() => {
    setQuery('');
  }, []);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleSuggestionClick = useCallback((pokemon: string) => {
    setQuery(pokemon);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className={`relative transition-all duration-300 ${isFocused ? 'scale-105' : 'scale-100'}`}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="w-full px-6 py-4 pl-14 pr-12 text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-white/50 dark:border-gray-700/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 shadow-lg hover:shadow-xl transition-all duration-300 text-lg placeholder-gray-500 dark:placeholder-gray-400"
        />
        
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          {isSearching ? (
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-500 dark:border-blue-400 border-t-transparent"></div>
          ) : (
            <svg
              className="h-6 w-6 text-gray-400 dark:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          )}
        </div>
        
        {query && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-5 flex items-center hover:scale-110 transition-transform duration-200"
          >
            <div className="w-6 h-6 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors duration-200">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </button>
        )}
        
        {isFocused && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 animate-pulse"></div>
        )}
      </div>
      
      {isFocused && !query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-xl border border-white/50 dark:border-gray-700/50 p-4 z-50">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Popular searches:</div>
          <div className="grid grid-cols-2 gap-2">
            {['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Mewtwo', 'Gengar'].map((pokemon) => (
              <button
                key={pokemon}
                onClick={() => handleSuggestionClick(pokemon)}
                className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-sm text-gray-700 dark:text-gray-200"
              >
                {pokemon}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 