input.onButtonPressed(Button.A, function () {
    running = !(running)
})
input.onButtonPressed(Button.B, function () {
    volume = music.volume()
    volume = volume + 20
    if (volume > 255) {
        volume = 0
    }
    music.setVolume(volume)
})
let volume = 0
let running = false
music.setVolume(200)
led.setBrightness(255)
basic.forever(function () {
    if (running) {
        basic.showIcon(IconNames.Heart)
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.pause(150)
        basic.clearScreen()
    }
    basic.pause(500)
})
