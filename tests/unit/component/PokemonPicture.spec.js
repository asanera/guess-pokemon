import PokemonPicture from "@/components/PokemonPicture"
import { shallowMount } from "@vue/test-utils"

describe('PokemonPicture', () => {

    let wrapper;
    beforeAll( async () => {
        wrapper = shallowMount(PokemonPicture)
        await wrapper.setProps({pokemonId: 100})
        await wrapper.setProps({showPokemon: false})
    })

    test('Match con snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
    })

    test('Debe mostrar la imagen oculta del pokemon 100', () => {
        wrapper = shallowMount(PokemonPicture)
        expect(wrapper.find('.hidden-pokemon')).not.toBeNull();
    })

    test('Debe mostrar el pokemon si showPokemon esta a true', async () =>{
        await wrapper.setProps({showPokemon: true})
        expect(wrapper.findAll('img')[1]).not.toBeNull();
    })
})