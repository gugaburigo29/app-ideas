<template>
    <div class="pokedex">
        <div class="pokedex-background"></div>

        <div class="pokedex-header">
            <div class="pokedex-icon text-left --left">
                <font-awesome-icon icon="arrow-left"/>
            </div>
            <div class="pokedex-icon text-right --right">
                <font-awesome-icon icon="bars"/>
            </div>
            <div class="pokedex-title text-left">
                Pokedex
            </div>
        </div>

        <div class="pokedex-list">
            <div v-for="pokemon in pokedex" :class="getColor(pokemon.type[0])"
                 :key="pokemon.id"
                 @click="toPokemon(pokemon.num)"
                 class="pokemon">
                <div class="pokemon-stats">
                    <div class="pokemon-name">
                        {{ pokemon.name }}
                    </div>
                    <PokemonTags size="sm" :types="pokemon.type"/>
                </div>
                <div class="pokemon-image">
                    <div class="pokemon-image-bg"></div>
                    <img :src="pokemon.img" :alt="pokemon.name">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import pokedex from "./data/pokedex.json"
    import ColorUtils from "@/views/pokedex/utils/ColorUtils";
    import PokemonTags from "@/views/pokedex/PokemonTags";

    export default {
        name: "Pokedex",
        components: {PokemonTags},
        data() {
            return {
                pokedex: pokedex.pokemon
            }
        },
        methods: {
            getColor: ColorUtils.getColorByPokemonType,
            toPokemon(num) {
                this.$router.push({name: 'Pokemon', params: {num}})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pokedex {
        padding: 15px 25px 0 25px;
        background-color: white;
        display: grid;

        &-background {
            top: -75px;
            right: -90px;
        }

        &-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 15px;
            overflow-y: scroll;
            max-height: 100%;
        }
    }

    .pokemon {
        border-radius: 15px;
        padding: 10px;
        display: flex;
        text-align: left;
        box-shadow: 0 0 15px rgba(0, 0, 0, .15);
        transition: .5s all;

        &:hover {
            box-shadow: 10px 5px 15px rgba(0, 0, 0, .15);
        }

        &-stats, &-image {
            flex: 0 0 50%;
        }

        &-image {
            display: flex;
            align-items: flex-end;
        }

        &-image-bg {
            background: url(../../assets/pokedex/pokeball_dark.png);
            background-repeat: no-repeat;
            opacity: .5;
        }

        &-image img {
            max-width: 100%;
        }

        &-name {
            margin-top: 15px;
            margin-bottom: 10px;
            color: white;
            font-weight: bold;
            font-size: 15px;
        }
    }
</style>
