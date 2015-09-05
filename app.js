import _ from "lodash"
const cards = ['1','2','3','4','5','6','7','8','9','10','11','12','13']
const suit = ['S','C','D','H']
let deck =[]
suit.forEach((s)=>
	cards.forEach((c)=>
		deck.push(c+s)
	))
console.log(deck)
const shuffledDeck =_.shuffle(deck)
console.log(shuffledDeck)
// console.log(_.sample(shuffledDeck))
let dealer = parseInt(_.sample(shuffledDeck))
console.log("dealer card 1= "+dealer)
dealer += parseInt(_.sample(shuffledDeck))
console.log("dealer card 2= "+dealer)

let user = parseInt(_.sample(shuffledDeck))
console.log("user try 1= "+user)
user += parseInt(_.sample(shuffledDeck))
console.log("user try 2= "+user)
user += parseInt(_.sample(shuffledDeck))
console.log("user try 3= "+user)
user += parseInt(_.sample(shuffledDeck))
console.log("user try 4= "+user)

