var n = 2
var list = new Array()
list[0] = 1
list[1] = 1
while (n < 20) {
    list[n] = list[n - 1] + list[n - 2]
    n = n++
}
console.log(list)