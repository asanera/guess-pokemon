import PokemonOption from "@/components/PokemonOption";
import { shallowMount } from "@vue/test-utils";
import { pokemons } from "../mocks/pokemons.mock";

describe('Test PokemonOption', () => {

    let wrapper
    beforeAll(() => {
         wrapper = shallowMount(PokemonOption, {
            props: {
                pokemons
            }
         });
    });

    test('Debe hacer match con el snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
    })

    test('Debe mostrar las cuatro opciones correctamente', () => {
        wrapper = shallowMount(PokemonOption)
        const [pokemonOptionA, pokemonOptionB, pokemonOptionC, pokemonOptionD] = wrapper.findAll("li")
        
        expect(pokemonOptionA).toBe("");
        expect(pokemonOptionB).toBe("");
        expect(pokemonOptionC).toBe("");
        expect(pokemonOptionD).toBe("");


    })

    test('Debe emetir "selection" con sus respectivo parametros', () => {

    })
})