import PokemonPage from "@/pages/PokemonPage"
import { mount } from "@vue/test-utils"

describe('PokemonPage Component', () => {
    let wrapper
    beforeAll(()=> {
        wrapper = mount(PokemonPage)
    })
    test('Debe de hacer match con el snapshot', () =>{
        
    })
})