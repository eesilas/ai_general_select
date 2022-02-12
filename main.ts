function RecColor () {
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `)
}
function LineFollow () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
}
function ObjRec () {
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # # .
        # . # . .
        # . . # .
        `)
}
input.onButtonPressed(Button.A, function () {
    color2 += 1
})
function TagRec () {
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        . . # # #
        `)
}
function HumanFace () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # . .
        # . . . .
        # . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
}
function ObjTrack () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
}
huskylens.initI2c()
let color2 = 0
let dial = Math.trunc(color2 % 5)
basic.showIcon(IconNames.Asleep)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    if (dial == 0) {
        huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
        HumanFace()
    } else if (dial == 1) {
        huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)
        ObjRec()
    } else if (dial == 2) {
        huskylens.initMode(protocolAlgorithm.ALGORITHM_LINE_TRACKING)
        LineFollow()
    } else if (dial == 3) {
        huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
        RecColor()
    } else if (dial == 4) {
        huskylens.initMode(protocolAlgorithm.ALGORITHM_TAG_RECOGNITION)
        TagRec()
    } else {
        basic.showIcon(IconNames.Angry)
    }
})
