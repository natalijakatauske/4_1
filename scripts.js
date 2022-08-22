console.log("veikia")

//Pratimas 1
let i=0
while (i<3) {
    console.log("Emma")
    i++
}

//Pratimas 2
let combo = ''
const names = 'John'
let times = 5
do {
    combo += names
    times--
} while (times>0)
    console.log(combo)

//Pratimas 1
const random = Math.cos(0)
console.log(random)

//Pratimas 2
const random1 = Math.floor(Math.random()*5) +1
console.log(random1)

//Pratimas 3
const random2 = Math.floor(Math.random()*(12-5+1)) +5
console.log(random2)

//Pratimas 4
const winner = Math.floor(Math.random()*5) +1
if (winner===3) {
    alert("WINNER!!!" + " --> " + winner)
} else {
    console.log(winner)
}

//Pratimas 1 DOM
// document.body.innerHTML = "<h2>Rozalinda</h2>"

//Pratimas 2 (neveikia kartu su Pratimu 1)
document.getElementById("name").textContent = "Adele"

//Pratimas 3
document.getElementsByClassName("produktai")[2].textContent = "Suris"

//Pratimas 1 DOM
document.querySelector(".bluetext > span").textContent = 'blue'

//Pratimas 2
const pirmas = document.querySelector('li:first-child')
const antras = document.querySelector('li:nth-child(2)')
const bwmGroup = pirmas.textContent
const vwGroup = antras.textContent
pirmas.textContent = vwGroup
antras.textContent = bwmGroup