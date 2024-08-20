"use client"
import {useState} from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import PokeCard from "@/components/PokeCard";


interface PokemonGridProps {
    pokemonList: any
}

export default function PokeGrid({pokemonList}: PokemonGridProps) {
    const [searchText, setSearchText] = useState('');

    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter((pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase()));
    }


    console.log(pokemonList);
    const filteredPokeList = searchFilter(pokemonList);

    return (
        <>
            <div>
                <h3 className="text-2xl py-6 text-center">Search for your pokemon</h3>
                <div className="grid w-full max-w-sm items-center gap-2">
                    <Label htmlFor="pokemonName">Pokemon Name</Label>
                    <Input
                        type="text"
                        value={searchText}
                        autoComplete="off"
                        id="pokemonName"
                        placeholder="varporeon, gardevoir, etc."
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
            </div>
            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-5 lg:text-left">
                {filteredPokeList.map((pokemon: any) => {
                    return (
                        <PokeCard name={pokemon.name} key={pokemon.id} />
                    )
                })}

            </div>
        </>
    )
}