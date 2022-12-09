import PokemonOption from "@/components/PokemonOption";
import { shallowMount } from "@vue/test-utils";

describe('Test PokemonOption', () => {
    test('Debe hacer match con el snapshot', () => {
        const wrapper = shallowMount(PokemonOption);
        expect(wrapper).toMatchSnapshot();
    })
})