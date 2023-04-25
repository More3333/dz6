const an1 = ['cat', 'dog', 'turtle', 'cat2', 'cat3']
console.log(an1.length)
const mas = an1.slice(1,5) //  вырезаем часть массива
console.log(mas)

an1.sort()
console.log(an1)

const nums = [2, 4, 5, 1, 2, 30, 33]
nums.sort(function(a, b){return a - b}) //  (function(a, b){return b - a})  по убыванию
console.log(nums)
console.log('min', nums[0], 'max', nums[nums.length - 1])

let n = prompt('chislo')
const nn = []

for(let i=0; i<n; i++){
   r = Math.floor(Math.random() * 100 +1)
nn.push(r)
}
console.log(nn)
nn.sort(function(a, b){return a - b})
console.log(nn)
console.log('min', nn[0], 'max', nn[nn.length - 1])
