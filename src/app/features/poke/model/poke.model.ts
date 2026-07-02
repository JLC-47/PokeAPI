export interface Pokemon {
    id: number;

    name: string;

    height: number;

    weight: number;

    base_experience: number;

    sprites: Sprites;

    types: PokemonType[];
}


export interface PokemonListResponse {

    count: number;

    next: string | null;

    previous: string | null;


    results: PokemonListItem[];
}


export interface PokemonListItem {

    name: string;

    url: string;
}


export interface Sprites {
    front_default: string;

    front_shiny: string;

    back_default: string;
}


export interface PokemonType {

    slot: number;

    type: Type;


}

export interface Type {

    name: string;

    url: string;
}