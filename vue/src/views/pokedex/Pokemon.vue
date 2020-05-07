<template>
  <div class="pokedex" :class="getColor(this.pokemon.type[0])">
    <div class="pokedex-box-top">
      <div class="pokedex-background"></div>
      <div class="pokedex-header">
        <div class="pokedex-icon text-left --left">
          <font-awesome-icon icon="arrow-left" @click="$router.push('/pokedex')"/>
        </div>
        <div class="pokedex-icon text-right --right">
          <font-awesome-icon icon="bars"/>
        </div>
        <div class="pokedex-title">
          {{ pokemon.name }}

          <small>
            #{{ pokemon.num }}
          </small>
        </div>
        <PokemonTags :types="pokemon.type" direction="row" size="md"/>
      </div>
      <div class="pokedex-image">
        <img :src="pokemon.img" :alt="pokemon.name">
      </div>
    </div>
    <div class="pokedex-box-bottom">
      <div class="tabs">
        <div class="tabs-header">
          <div class="tab-header"
               @click="selectTab('about')"
               :class="isActiveTab('about')">
            About
          </div>
          <div class="tab-header"
               @click="selectTab('base-stats')"
               :class="isActiveTab('base-stats')">
            Base Stats
          </div>
          <div class="tab-header"
               @click="selectTab('evolution')"
               :class="isActiveTab('evolution')">
            Evolution
          </div>
          <div class="tab-header"
               @click="selectTab('moves')"
               :class="isActiveTab('moves')">
            Moves
          </div>
        </div>
        <div class="tabs-content">
          <div class="tab-content" v-if="tab == 'about'">
            <div class="grid">
              <div class="grid-item">
                <div class="grid-item-title">SPECIES</div>
                <div class="grid-item-description">Seed</div>
              </div>
              <div class="grid-item ">
                <div class="grid-item-title">HEIGHT</div>
                <div class="grid-item-description">0.70 cm</div>
              </div>
              <div class="grid-item ">
                <div class="grid-item-title">WEIGHT</div>
                <div class="grid-item-description">6.9 kg</div>
              </div>
            </div>
            <div class="grid">
              <div class="grid-item">
                <div class="grid-item-title">ABILITIES</div>
                <div class="grid-item-description">Obergrow, Chlorophyl</div>
              </div>
              <div class="grid-item">
                <div class="grid-item-title">GENDER</div>
                <div class="grid-item-description">
                  <div>
                    <font-awesome-icon icon="venus"/>
                    87,5%
                  </div>
                  <div>
                    <font-awesome-icon icon="mars"/>
                    12,5%
                  </div>
                </div>
              </div>
              <div class="grid-item">
                <div class="grid-item-title">EGG GROUPS</div>
                <div class="grid-item-description">
                  Monster
                </div>
              </div>
            </div>
            <div class="grid">
              <div class="grid-item">
                <div class="grid-item-title">EGG CYCLE</div>
                <div class="grid-item-description">
                  Grass
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content" v-if="tab == 'base-stats'">
            <div class="grid --two-columns">
              <div class="grid-item">
                <div class="grid-item-title">HP</div>
                <div class="grid-item-description">
                  <div class="stats-bar">
                    <div class="stats-bar-size" :class="getStatsBarClass(pokemon.stats.HP)" :data-stats-value="pokemon.stats.HP" :style="{width: `${getStatsBarWidth(pokemon.stats.HP)}%`}"></div>
                  </div>
                </div>
              </div>
              <div class="grid-item">
                <div class="grid-item-title">Attack</div>
                <div class="grid-item-description">
                  <div class="stats-bar">
                    <div class="stats-bar-size" :class="getStatsBarClass(pokemon.stats.Attack)" :data-stats-value="pokemon.stats.Attack" :style="{width: `${getStatsBarWidth(pokemon.stats.Attack)}%`}"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid --two-columns">
              <div class="grid-item">
                <div class="grid-item-title">Defense</div>
                <div class="grid-item-description">
                  <div class="stats-bar">
                    <div class="stats-bar-size" :class="getStatsBarClass(pokemon.stats.Defense)" :data-stats-value="pokemon.stats.Defense" :style="{width: `${getStatsBarWidth(pokemon.stats.Defense)}%`}"></div>
                  </div>
                </div>
              </div>
              <div class="grid-item">
                <div class="grid-item-title">Sp. Attack</div>
                <div class="grid-item-description">
                  <div class="stats-bar">
                    <div class="stats-bar-size" :class="getStatsBarClass(pokemon.stats['Sp. Attack'])" :data-stats-value="pokemon.stats['Sp. Attack']" :style="{width: `${getStatsBarWidth(pokemon.stats['Sp. Attack'])}%`}"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid --two-columns">
              <div class="grid-item">
                <div class="grid-item-title">Sp. Defense</div>
                <div class="grid-item-description">
                  <div class="stats-bar">
                    <div class="stats-bar-size" :class="getStatsBarClass(pokemon.stats['Sp. Defense'])" :data-stats-value="pokemon.stats['Sp. Defense']" :style="{width: `${getStatsBarWidth(pokemon.stats['Sp. Defense'])}%`}"></div>
                  </div>
                </div>
              </div>
              <div class="grid-item">
                <div class="grid-item-title">Speed</div>
                <div class="grid-item-description">
                  <div class="stats-bar">
                    <div class="stats-bar-size" :class="getStatsBarClass(pokemon.stats.Speed)" :data-stats-value="pokemon.stats.Speed" :style="{width: `${getStatsBarWidth(pokemon.stats.Speed)}%`}"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content" v-if="tab == 'evolution'">
            evolution
          </div>
          <div class="tab-content" v-if="tab == 'moves'">
            moves
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import ColorUtils from "@/views/pokedex/utils/ColorUtils";
    import PokemonTags from "@/views/pokedex/PokemonTags";
    import PokemonService from "@/views/pokedex/services/PokemonService";

    /*   class SwipeListener {
           constructor() {
               if (!SwipeListener.instance) {
                   SwipeListener.instance = this;
               }

               this.observables = {
                   right: [],
                   left: []
               };

               this.touchsStart = {
                   y: null,
                   x: null,
               }

               this.touchsEnd = {
                   y: null,
                   x: null,
               }

               this.initListeners();
           }

           clearState() {
               this.touchsStart = {
                   y: null,
                   x: null,
               }

               this.touchsEnd = {
                   y: null,
                   x: null,
               }
           }

           handleGesture() {
               if (this.touchsEnd.x < this.touchsStart.x) {
                   this.observables.left.forEach(call => call());
                   this.clearState();
               }
               if (this.touchsEnd.x > this.touchsStart.x) {
                   this.observables.right.forEach(call => call());
                   this.clearState();
               }
           }

           initListeners() {
               window.addEventListener('touchstart', event => {
                   this.touchsStart.x = event.touches[0].screenX;
                   this.touchsStart.y = event.touches[0].screenY;
                   this.handleGesture();
               }, false);

               window.addEventListener('touchstart', event => {
                   this.touchsEnd.x = event.touches[0].screenX;
                   this.touchsEnd.y = event.touches[0].screenY;
                   this.handleGesture();
               }, false);
           }

           addObservable(direction, callback) {
               this.observables[direction].push(callback);
           }

           static on(direction, callback) {
               let swipeListener = new SwipeListener();
               swipeListener.addObservable(direction, callback);
           }
       }

       SwipeListener.on('left', () => {
           console.log('Swipped')
       });*/

    export default {
        name: "Pokemon",
        components: {PokemonTags},
        data() {
            return {
                pokemon: null,
                colorClass: null,
                tab: 'about'
            }
        },
        created() {
            const {num} = this.$route.params;

            if (num) {
                this.pokemon = PokemonService.getPokemonByNum(num);
                this.pokemon.stats = PokemonService.getPokemonStatsBaseById(this.pokemon.id)
            }
        },
        methods: {
            getColor: ColorUtils.getColorByPokemonType,
            selectTab(name) {
                this.tab = name;
            },
            getStatsBarClass(value) {
                const isRed = this.getStatsBarWidth(value) < 70;
                return isRed ? '--red' : '--green'
            }
        },
        computed: {
            isActiveTab() {
                return (tab) => this.tab == tab ? '--active' : ''
            },
            maxStats() {
                const {stats} = this.pokemon;
                const values = Object.values(stats);
                return Math.max(...values);
            },
            getStatsBarWidth() {
                return (value) => (100 * value) / this.maxStats;
            }
        }
    }
</script>

<style lang="scss" scoped>
  .pokedex {
    padding: 0;
    display: grid;
    grid-template-rows: 1fr 1.25fr;

    &-background {
      width: 230px;
      height: 230px;
      bottom: -30px;
      right: -10px;
    }

    &-title {
      font-size: 30px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &-title small {
      font-size: 20px;
      bottom: 0;
    }

    &-box-top {
      padding: 15px 25px;
      position: relative;
    }

    &-image {
      max-width: 220px;
      position: absolute;
      bottom: -50px;
      margin: 0 auto;
      left: 0;
      right: 0;
    }

    &-image img {
      max-width: 100%;
    }

    &-box-bottom {
      color: #222222;
      padding: 60px 25px 0;
      border-radius: 30px 30px 0 0;
      background-color: white;
    }
  }

  .tabs {
    &-header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e4e4e4;
    }

    &-content {
      padding: 15px 0;
    }
  }

  .tab {
    &-header {
      color: #bbbbbb;
      font-weight: 600;
      font-size: 14px;
      height: 100%;
      position: relative;
      padding-bottom: 15px;
    }

    &-header.--active {
      color: #333333;
    }

    &-header.--active::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      border-radius: 40px;
      background-color: #7e92d7;
      left: 0;
      bottom: 0;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    padding-top: 10px;
    margin-bottom: 30px;

    &.--two-columns {
      grid-template-columns: 1fr 1fr;
    }

    &.--two-columns &-item:nth-child(2) {
      text-align: left;
    }

    &-item:nth-child(1) {
      text-align: left;
    }

    &-item:nth-child(3) {
      text-align: right;
    }

    &-item-title {
      font-size: 11px;
      font-weight: 600;
      color: grey;
      margin-bottom: 5px;
    }

    &-item-description {
      font-size: 15px;
      font-weight: 600;
      color: #434343;
    }
  }

  .stats-bar {
    width: 100%;
    height: 4px;
    background-color: #cecccc;
    margin-top: 15px;
    position: relative;

    &-size {
      position: absolute;
      height: 4px;
    }

    &-size:after {
      content: attr(data-stats-value);
      position: absolute;
      color: black;
      top: -10px;
      right: 0;
      width: 1.2em;
      height: 1.2em;
      font-size: 12px;
      padding: .3em;
      background-color: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>

