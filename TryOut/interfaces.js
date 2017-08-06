var Food = (function () {
    function Food(options) {
        this.taste = options.taste;
        this.colour = options.colour;
        this.canEatRaw = options.canEatRaw ? options.canEatRaw : false;
    }
    return Food;
}());
var mango = new Food({
    taste: 'sweet',
    colour: 'yellow',
    canEatRaw: true
});
var omlette = new Food({
    taste: 'salty',
    colour: 'yellow'
});
console.log(omlette.canEatRaw);
