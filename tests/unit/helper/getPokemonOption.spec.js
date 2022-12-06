import getPokemonOptions from "@/helper/getPokemonOptions"

describe('getPokemonOption', () => {
    test('Debe regresar un array de pokemons con longitud 4', async ()=> {
        const pokemons = await getPokemonOptions()
        expect(pokemons.length).toBe(4);
    })

    test('Los nombres de los pokemons no estan vacios', async ()=> {
        const pokemon = await getPokemonOptions()
        pokemon.forEach((pokemon) => {
            expect(pokemon.name).not.toBeNull()
        })
    })
})