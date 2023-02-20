radio.setGroup(200)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # . .
    . # . # .
    `)
basic.pause(2000)
basic.forever(function () {
    radio.sendValue("Red", Math.map(input.compassHeading(), 0, 360, 0, 255))
    radio.sendValue("Green", 0)
    radio.sendValue("Blue", 0)
    radio.sendValue("Bright", 50)
    serial.writeValue("x", input.compassHeading())
    led.plotBarGraph(
    input.compassHeading(),
    360
    )
})
