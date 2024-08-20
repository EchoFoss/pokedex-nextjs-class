// localhost:3000/pikachu
import {getPokemon} from "@/service/pokemon.service";
import Image from "next/image";
import PokemonImage from "@/components/pokemon.image";
import {Progress} from "@/components/ui/progress";

export default async function pokemonPage({params}: {params: {pokemonName: string}}) {
    const {pokemonName} = params;

    const pokemonObj = await getPokemon(pokemonName);
    console.log(pokemonObj);

    return (
        <>
            <h1 className="text-4xl font-bold pt-4">{pokemonName}</h1>
            <div className="m4" style={{position: "relative", width: "300px", height: "300px"}}>
                <PokemonImage image={pokemonObj.sprites.front_default} name={pokemonName} />
            </div>
            <h3>Weight: {pokemonObj.weight}</h3>
            <div className="">
                {pokemonObj.stats.map((statObject: any) => {
                    const statName = statObject.stat.name
                    const statValue = statObject.base_stat
                    return (
                        <div className={"flex items-stretch"} style={{width: "500px"}} key={statName}>
                            <h3 className={"p3 w-2/4"}>
                                {statName}: {statValue}
                                <Progress value={statValue} className={"w-2/4 m-auto"}/>

                            </h3>

                        </div>
                    )
                })}
            </div>

        </>
    )

}
