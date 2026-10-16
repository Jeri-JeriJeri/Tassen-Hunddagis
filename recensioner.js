export const jsonRecensioner = [
    {
    "namn": "Anna",
    "recensionen": "Mycket bra upplevelse! Jag är riktigt nöjd och kommer gärna tillbaka.",
    "rating": "9/10"
},
{
    "namn": "Erik",
    "recensionen": "Helt okej, men det finns några saker som skulle kunna förbättras.",
    "rating": "6/10"
},
{
    "namn": "Kim",
    "recensionen": "Fantastiskt personal och trygg miljö - varm rekommendation!",
    "rating": "8/10"
  }
]
class Person {
    constructor(namn, text, rating, stjarnor) {
        this.namn = namn
        this.text = text
        this.rating = rating
        this.stjarnor = stjarnor
    }
}
const Anna = new Person("Anna", "Mycket bra upplevelse! Jag är riktigt nöjd och kommer gärna tillbaka.", "9/10", "★★★★★★★★★☆")
const Erik = new Person("Erik", "Helt okej, men det finns några saker som skulle kunna förbättras.", "6/10", "★★★★★★☆☆☆☆")
const Kim = new Person("Kim", "Fantastiskt personal och trygg miljö - varm rekommendation!", "8/10", "★★★★★★☆☆☆☆")