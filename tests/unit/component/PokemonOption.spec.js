import PokemonOption from "@/components/PokemonOption"
import { shallowMount } from "@vue/test-utils"
import { pokemonsMock } from "../mocks/pokemons.mock"

describe('Test PokemonOption', () => {

    let wrapper
    beforeAll(() => {
         wrapper = shallowMount(PokemonOption, {
            props: {
                pokemons: pokemonsMock
            }
         })
    })

    test('Debe hacer match con el snapshot', () => {
        expect(wrapper.element).toMatchSnapshot()
    })

    test('Debe mostrar las cuatro opciones correctamente', async () => {
        const [pokemonOptionA, pokemonOptionB, pokemonOptionC, pokemonOptionD] = await wrapper.findAll("li")
        
        expect(pokemonOptionA.text()).toEqual(pokemonsMock[0].name)
        expect(pokemonOptionB.text()).toEqual(pokemonsMock[1].name)
        expect(pokemonOptionC.text()).toEqual(pokemonsMock[2].name)
        expect(pokemonOptionD.text()).toEqual(pokemonsMock[3].name)
    })

    test('Debe emetir "selection" con sus respectivo parametros', () => {

    })
})