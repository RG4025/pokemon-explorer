'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Pokemon } from '@/types/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const getTypeColor = (type: string) => {
  const colors: { [key: string]: string } = {
    normal: 'bg-gray-400',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    electric: 'bg-yellow-400',
    grass: 'bg-green-500',
    ice: 'bg-blue-200',
    fighting: 'bg-red-700',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-600',
    flying: 'bg-indigo-400',
    psychic: 'bg-pink-500',
    bug: 'bg-green-400',
    rock: 'bg-yellow-800',
    ghost: 'bg-purple-700',
    dragon: 'bg-indigo-700',
    dark: 'bg-gray-700',
    steel: 'bg-gray-500',
    fairy: 'bg-pink-300',
  };
  return colors[type] || 'bg-gray-400';
};

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const imageUrl = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-white/20 dark:border-gray-700/20 hover:border-white/40 dark:hover:border-gray-600/40">
        <div className={`absolute inset-0 bg-gradient-to-br from-${getTypeColor(pokemon.types[0]?.type.name || 'gray').replace('bg-', '')}-50/30 dark:from-${getTypeColor(pokemon.types[0]?.type.name || 'gray').replace('bg-', '')}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        <div className="relative p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-sm font-bold text-gray-400 dark:text-gray-500">
              #{pokemon.id.toString().padStart(3, '0')}
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={pokemon.name}
                  width={48}
                  height={48}
                  className="object-contain"
                  priority={pokemon.id <= 20}
                />
              ) : (
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-500 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-xs">?</span>
                </div>
              )}
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-gray-800 dark:text-white capitalize mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {pokemon.name}
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${getTypeColor(type.type.name)} shadow-sm`}
              >
                {type.type.name}
              </span>
            ))}
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
              <span>Height</span>
              <span className="font-semibold">{(pokemon.height / 10).toFixed(1)}m</span>
            </div>
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
              <span>Weight</span>
              <span className="font-semibold">{(pokemon.weight / 10).toFixed(1)}kg</span>
            </div>
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
              <span>Base Exp</span>
              <span className="font-semibold">{pokemon.base_experience}</span>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 dark:from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 