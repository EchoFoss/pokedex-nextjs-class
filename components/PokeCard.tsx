"use client"
import Link from "next/link";
import {useState} from "react";

interface PokeCardProps {
    name: string
}

export default function PokeCard({name}: PokeCardProps) {

    return (
        <Link
            href={name}
            className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors hover:border-gray-300 dark:border-gray-500 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            key={name + "Card"}
        >
            <h2 className="text-2xl font-semibold text-center">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </h2>
        </Link>
    )
}