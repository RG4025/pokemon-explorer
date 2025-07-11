import { getPokemonById } from '@/lib/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

interface PokemonDetailPageProps {
  params: Promise<{
    id: string;
  }>;
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

const getStatColor = (statName: string) => {
  const colors: { [key: string]: string } = {
    hp: 'bg-red-500',
    attack: 'bg-orange-500',
    defense: 'bg-yellow-500',
    'special-attack': 'bg-purple-500',
    'special-defense': 'bg-blue-500',
    speed: 'bg-green-500',
  };
  return colors[statName] || 'bg-gray-500';
};

export default async function PokemonDetailPage({ params }: PokemonDetailPageProps) {
  try {
    const resolvedParams = await params;
    const pokemon = await getPokemonById(parseInt(resolvedParams.id));
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Pokemon List
          </Link>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="text-4xl font-bold mr-4">
                    #{pokemon.id.toString().padStart(3, '0')}
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold capitalize">
                      {pokemon.name}
                    </h1>
                    <div className="flex gap-2 mt-2">
                      {pokemon.types.map((type) => (
                        <span
                          key={type.type.name}
                          className={`px-3 py-1 text-sm font-semibold rounded-full ${getTypeColor(type.type.name)}`}
                        >
                          {type.type.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  {pokemon.sprites.other['official-artwork'].front_default ? (
                    <Image
                      src={pokemon.sprites.other['official-artwork'].front_default}
                      alt={pokemon.name}
                      width={200}
                      height={200}
                      className="object-contain"
                      priority
                    />
                  ) : (
                    <div className="w-48 h-48 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center">
                      <span className="text-white/60">No Image</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Basic Information</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Height:</span>
                      <span className="font-semibold text-gray-800 dark:text-white">{pokemon.height / 10}m</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Weight:</span>
                      <span className="font-semibold text-gray-800 dark:text-white">{pokemon.weight / 10}kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Base Experience:</span>
                      <span className="font-semibold text-gray-800 dark:text-white">{pokemon.base_experience}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Abilities</h3>
                    <div className="space-y-2">
                      {pokemon.abilities.map((ability, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                          <span className="font-medium capitalize text-gray-800 dark:text-white">{ability.ability.name.replace('-', ' ')}</span>
                          {ability.is_hidden && (
                            <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">
                              Hidden
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Base Stats</h2>
                  <div className="space-y-4">
                    {pokemon.stats.map((stat) => (
                      <div key={stat.stat.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="capitalize font-medium text-gray-800 dark:text-white">
                            {stat.stat.name.replace('-', ' ')}
                          </span>
                          <span className="font-semibold text-gray-800 dark:text-white">{stat.base_stat}</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${getStatColor(stat.stat.name)}`}
                            style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Moves</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {pokemon.moves.slice(0, 20).map((move, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <span className="font-medium capitalize text-sm text-gray-800 dark:text-white">
                        {move.move.name.replace('-', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
                {pokemon.moves.length > 20 && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-3">
                    And {pokemon.moves.length - 20} more moves...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    notFound();
  }
} 