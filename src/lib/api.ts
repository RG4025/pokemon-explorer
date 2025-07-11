import { Pokemon, PokemonListResponse } from '@/types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

export async function getPokemonList(limit: number = 151, offset: number = 0): Promise<PokemonListResponse> {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch Pokemon list: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    throw error;
  }
}

export async function getPokemonByName(name: string): Promise<Pokemon> {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${name.toLowerCase()}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch Pokemon: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    throw error;
  }
}

export async function getPokemonById(id: number): Promise<Pokemon> {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch Pokemon: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    throw error;
  }
}

export async function searchPokemon(query: string): Promise<Pokemon[]> {
  try {
    const allPokemon = await getPokemonList(151, 0);
    const filteredPokemon = allPokemon.results.filter(pokemon =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    
    const detailedPokemon = await Promise.all(
      filteredPokemon.slice(0, 20).map(pokemon => getPokemonByName(pokemon.name))
    );
    
    return detailedPokemon;
  } catch (error) {
    console.error('Error searching Pokemon:', error);
    throw error;
  }
} 