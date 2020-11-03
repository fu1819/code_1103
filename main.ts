basic.forever(function () {
    for (let I = 0; I <= 4; I++) {
        for (let j = 0; j <= I + 1; j++) {
            led.plot(4 - I + j, j)
        }
        basic.pause(500)
    }
    for (let I = 0; I <= 3; I++) {
        for (let j = 0; j <= 4 - I; j++) {
            led.plot(j, I + j + 1)
        }
        basic.pause(500)
    }
})
