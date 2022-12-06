<template>
    <h1 v-if="!pokemonPropouse">Espere por favor...</h1>
    <div v-else>
        <h1>¿Quien es este pokemon?</h1>
        <PokemonPicture :pokemon-id="pokemonPropouse.id" :show-pokemon="showPokemon"></PokemonPicture>
        <PokemonOption :pokemons="pokemon" @selection-pokemon="checkAnswer"></PokemonOption>
        <template v-if="showAnswer">
            <h2 class="fade-in">{{message}}</h2>
            <button @click="newGame">Nuevo Juevo</button>
        </template>
        
    </div>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOption from '@/components/PokemonOption.vue';
import getPokemonOptions from '@/helper/getPokemonOptions.js'

export default {
    name: "PokemonPage",
    components: { PokemonPicture, PokemonOption },
    data() {
        return {
            pokemon: [],
            pokemonPropouse: null,
            showPokemon: false,
            showAnswer: false,
            message: ""
        }
    },
    methods: {
        async mixPokemonArray(){
            this.pokemon = await getPokemonOptions();
            const rdnInt = Math.floor(Math.random() * this.MAX_POKEMONS_OPTIONS);
            this.pokemonPropouse = this.pokemon[rdnInt];
            
        },

        checkAnswer(selectedPokemonId){
            this.showPokemon = true;
            this.showAnswer = true;
            if(selectedPokemonId === this.pokemonPropouse.id) {
                this.message = `Correcto, ${this.pokemonPropouse.name}`
            }else {
                this.message = `Ops, era ${this.pokemonPropouse.name}`
            }
        },

        newGame() {
            this.mixPokemonArray()
            this.pokemon = []
            this.pokemonPropouse = null
            this.showPokemon = false
            this.showAnswer = false
            this.message = ""
        }
    },
    computed: {
        MAX_POKEMONS_OPTIONS: {
            get() {
                return 4
            }
        }
    },
    mounted(){
        this.mixPokemonArray();
    }
}
</script>

<style>

</style>