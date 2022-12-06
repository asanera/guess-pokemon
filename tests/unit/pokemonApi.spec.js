import pokemonApi from "@/api/pokemonApi"

describe('pokemomApi', () => {
    test('axios debe estar bien configurado', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
})