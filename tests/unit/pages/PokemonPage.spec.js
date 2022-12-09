import PokemonPage from "@/pages/PokemonPage"
import { mount } from "@vue/test-utils"
import { pokemonsMock } from "../mocks/pokemons.mock"

describe('PokemonPage Component', () => {

    test('Debe de hacer match con el snapshot', () =>{
        const wrapper = mount(PokemonPage, {
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
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Debe llamar mixPokemonArray al montar', () => {
        const mixPokemonArraySyp = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        mount(PokemonPage);
        expect(mixPokemonArraySyp).toHaveBeenCalled()
    })
})