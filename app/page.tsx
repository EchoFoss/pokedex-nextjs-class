import Image from "next/image";
import PokeGrid from "@/components/poke-grid";
import PokeCard from "@/components/PokeCard";
import {getPokemonList} from "@/service/pokemon.service";

export default async function Home() {
  const pokemonList = await getPokemonList()
  return (

      <PokeGrid pokemonList={pokemonList} />

  );
}
