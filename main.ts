radio.setGroup(200)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # . .
    . # . # .
    `)
basic.pause(2000)
input.calibrateCompass()
basic.forever(function () {
    radio.sendValue("Red", Math.map(input.compassHeading(), 0, 360, 0, 255))
    serial.writeValue("x", input.compassHeading())
    led.plotBarGraph(
    input.compassHeading(),
    360
    )
})
