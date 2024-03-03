let clients = ["Mango", "Poly", "Kiwi", "Ajax"]
let string = ""
for(let i = 0; i < clients.length; i++){
    string = clients + ","
    console.log(string)
}

let people = ["Mango", "Poly", "Kiwi", "Ajax"]
console.log(people.join(", "))

let cards = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5",
]
cards.splice(2,1)
cards.splice(5,1, "Карточка-6")
cards.splice(2,1, "Оновлення по індексу")
console.log(cards)