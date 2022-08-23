function loop(x) {
    var total = 1
    while (x >= 1) {
        total *= x
        x--
    }
    console.log(total)
}
var a = loop(10)

document.write(a)