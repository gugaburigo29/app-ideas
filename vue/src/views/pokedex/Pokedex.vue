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
            <div v-for="pokemon in pokedex" :class="getColor(pokemon.type[0])" :key="pokemon.id" class="pokemon">
                <div class="pokemon-stats">
                    <div class="pokemon-name">
                        {{ pokemon.name }}
                    </div>
                    <div class="pokemon-tags">
                        <div v-for="type in pokemon.type" class="pokemon-tag" :key="pokemon.id + type">{{type}}</div>
                    </div>
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
    import pokedex from "./pokedex.json"

    const colors = {
        Normal: '--brown',
        Fire: '--red',
        Water: '--blue',
        Grass: '--green',
        Electric: '--amber',
        Ice: '--cyan',
        Fighting: '--orange',
        Poison: '--purple',
        Ground: '--orange',
        Flying: '--indigo-200',
        Physic: '--pink',
        Bug: '--light-green',
        Rock: '--grey',
        Ghost: '--indigo-400',
        Dark: '--brown',
        default: '--grey'
    };

    export default {
        name: "Pokedex",
        data() {
            return {
                pokedex: pokedex.pokemon
            }
        },
        methods: {
            getColor(type) {
                let color = colors[type];

                if (!color) {
                    color = colors.default;
                }

                return color;
            }
        }
    }
</script>

<style lang="scss" scoped>
    $colors: (
            'brown': #8D6E63,
            'red': #e74c3c,
            'blue': #3498db,
            'green': #1abc9c,
            'amber': #FFC107,
            'cyan': #00BCD4,
            'orange': #FF9800,
            'purple': #9C27B0,
            'indigo-200': #9FA8DA,
            'indigo-400': #5C6BC0,
            'pink': #EC407A,
            'light-green': #66BB6A,
            'grey': #9E9E9E,
    );

    .pokedex {
        width: 100%;
        max-width: 400px;
        height: 800px;
        margin: 0 auto;
        padding: 15px 25px;
        position: relative;
        z-index: 5;
        background-color: white;
        box-shadow: 0 2px 30px rgba(0, 0, 0, .15);
        border-radius: 10px;
        overflow: hidden;
        display: grid;

        &-background {
            position: absolute;
            z-index: -1;
            top: -75px;
            right: -90px;
            height: 250px;
            width: 250px;
            background: url(../../assets/pokedex/pokeball_dark.png);
            background-repeat: no-repeat;
            background-size: contain;
            opacity: .1;
        }

        &-header {
            display: flex;
            padding: 23px 0;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        &-icon {
            font-size: 20px;
            cursor: pointer;
        }

        &-title {
            flex: 0 0 100%;
            font-size: 30px;
            font-weight: 600;
            margin-top: 30px;
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

        &-tags {
            display: flex;
            flex-direction: column;
            align-items: start;
        }

        &-tag {
            width: content-box;
            font-size: 12px;
            padding: .2em .4em;
            background-color: rgba(255, 255, 255, .25);
            margin-bottom: 5px;
            border-radius: 5px;
        }

        @each $name, $color in $colors {
            &.--#{$name} {
                background-color: $color;
                color: white;
            }
        }
    }
</style>
