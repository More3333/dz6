const nuns = [40, 55, 15, 66,88]
const nuns2 = []

for (let i=0; i<nuns.length; i++){
    console.log(nuns[i]*2)
}
console.log(nuns)
console.log(nuns2)

const ani = ['cat', 'dog', 'turtle', 'cat2', 'cat3']
for (let i=0; i<nuns.length; i++){
    console.log('Привет ', ani[i])
}

for (i in ani){
    console.log('Hi ', ani[i])
}
//
// let k = 0
// while (k<10){
//     console.log(k)
//     k+=1
// }


let  r=0
let popit = 0
while (r!==95){
    r=Math.floor(Math.random()*100 + 1)
    console.log(r)
    popit++
}
console.log('попытка ', popit)