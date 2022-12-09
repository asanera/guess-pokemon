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

    })

    test('Debe emetir "selection" con sus respectivo parametros', () => {
        
    })
})