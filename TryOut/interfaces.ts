
interface FoodOptions {
  taste: string,
  colour: string,
  canEatRaw?: boolean
}

class Food {
  taste: string
  colour: string
  canEatRaw: boolean
  constructor(options: FoodOptions) {
    this.taste = options.taste
    this.colour = options.colour
    this.canEatRaw = options.canEatRaw ? options.canEatRaw : false
  }
}

let mango: Food = new Food({
  colour: 'yellow',
  taste: 'sweet',
  canEatRaw: true
})

let omlette: Food = new Food({
  taste: 'salty',
  colour: 'yellow'
})

console.log(omlette.canEatRaw);