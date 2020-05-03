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
    Psychic: '--pink',
    Bug: '--light-green',
    Rock: '--grey',
    Ghost: '--indigo-400',
    Dark: '--brown',
    default: '--grey'
};

class ColorUtils {
    static getColorByPokemonType(type) {
        let color = colors[type];

        if (!color) {
            color = colors.default;
        }

        return color;
    }
}

export default ColorUtils;
