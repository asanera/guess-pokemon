import PokemonPage from "@/pages/PokemonPage"
import { shallowMount } from "@vue/test-utils"
import { pokemonsMock } from "../mocks/pokemons.mock"

describe('PokemonPage Component', () => {

    let wrapper = shallowMount(PokemonPage)
    beforeAll(() => {
       wrapper =  shallowMount(PokemonPage, {
            data() {
                return {
                    pokemon: pokemonsMock,
                    pokemonPropouse: pokemonsMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ""                    
                }
            }
        })
    })

    test('Debe de hacer match con el snapshot', () =>{
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Debe llamar mixPokemonArray al montar', () => {
        const mixPokemonArraySyp = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        shallowMount(PokemonPage);
        expect(mixPokemonArraySyp).toHaveBeenCalled()
    })

    test('Debe mostras los componentes de PokemonPicture y PokemonOption', () => {
        const pokemonPicture = wrapper.find("pokemon-picture-stub")
        expect(pokemonPicture.exists).toBeTruthy()
        expect(pokemonPicture.attributes("pokemonid")).toEqual("5")
        
        const pokemonOption = wrapper.find("pokemon-option-stub")
        expect(pokemonOption.exists).toBeTruthy()
        expect(pokemonOption.attributes("pokemons")).not.toBeNull()

    })
})