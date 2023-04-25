

$('#butk').click(function () {
    f1('Дракон')
})
$('#butn').click(function () {
    f1('Водяной')
})
$('#butb').click(function () {
    f1('Русалка')
})

let comp =''
let hum = ''
const turn = ['Дракон','Водяной','Русалка']
const win = ['ДраконВодяной', 'ВодянойРусалка', 'РусалкаДракон']
const loose = ['ДраконРусалка', 'ВодянойДракон', 'РусалкаВодяной']
const draw = ['ДраконДракон', 'ВодянойВодяной', 'РусалкаРусалка']
let scoreh = 0
let scorec = 0
function f1(x){
    hum = x
    let  r = Math.floor(Math.random()*3)
    comp=turn[r]
    console.log(hum, comp)
    $('#out').text('Вы Богатырь ' + hum + "----  Ваш противник Водяной  " + comp)
    proverka()
}
function proverka(){
    let result = hum + comp
    if (win.includes(result)){
        console.log('Победа')
        scoreh +=1
        $('#out').append('----- Вы победили' + scoreh+ ': ' + scorec)
    }
    else  if (loose.includes(result)){
        console.log('НЕ Победа')
        $('#out').append('----Противник победил' + scoreh+ ': ' + scorec)
        scorec +=1
    }
    else {
        console.log('Ничья')
        $('#out').append('-----Ничья' + scoreh+ ': ' + scorec)
    }
}