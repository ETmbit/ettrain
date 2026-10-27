/*
File:       github.com/ETmbit/ettrain.ts
Version:	2026-1
Copyright:  ElecTricks, 2026
License:    GNU GPL 3 or later
Disclaimer: Distributed without any warranty
Depends on: etbasic.ts, etinput.ts, etradio, px-nezhapro.ts, px-wheelsone.ts
*/

//////////////////
//  INCLUDE     //
//  etbasic.ts  //
//////////////////

const ET_LOW = 0
const ET_HIGH = 1

enum ETpins {
    //% block="pin P0"
    //% block.loc.nl="pin P0"
    P0 = DigitalPin.P0,
    //% block="pin P1"
    //% block.loc.nl="pin P1"
    P1 = DigitalPin.P1,
    //% block="pin P2"
    //% block.loc.nl="pin P2"
    P2 = DigitalPin.P2,
    //% block="pin P8"
    //% block.loc.nl="pin P8"
    P8 = DigitalPin.P8,
    //% block="pin P12"
    //% block.loc.nl="pin P12"
    P12 = DigitalPin.P12,
    //% block="pin P13"
    //% block.loc.nl="pin P13"
    P13 = DigitalPin.P13,
    //% block="pin P14"
    //% block.loc.nl="pin P14"
    P14 = DigitalPin.P14,
    //% block="pin P15"
    //% block.loc.nl="pin P15"
    P15 = DigitalPin.P15,
    //% block="pin P16"
    //% block.loc.nl="pin P16"
    P16 = DigitalPin.P16
}

enum ETstate {
    //% block="off"
    //% block.loc.nl="uit"
    Off,
    //% block="on"
    //% block.loc.nl="aan"
    On,
}

enum ETpace {
    //% block="slow"
    //% block.loc.nl="langzame"
    Slow,
    //% block="normal"
    //% block.loc.nl="normale"
    Normal,
    //% block="fast"
    //% block.loc.nl="snelle"
    Fast,
}

/*
The ETrotate, ETturn and ETmove... enumerations
have comparable values:

Start = -1
Stop = 0
Forward = 1
Backward = 2
Left, AntiClockwise = 3
Right, Clockwise = 4
Up = 5
Down = 6
*/

enum ETrotate {
    //% block="anticlockwise"
    //% block.loc.nl="linksom"
    AntiClockwise = 3,
    //% block="clockwise"
    //% block.loc.nl="rechtsom"
    Clockwise = 4,
}

enum ETturn {
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
}

enum ETmove {
    //% block="stop"
    //% block.loc.nl="stop"
    Stop = 0,
    //% block="start"
    //% block.loc.nl="start"
    Start = -1,

}

enum ETmoveX {
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
}

enum ETmoveY {
    //% block="forward"
    //% block.loc.nl="vooruit"
    Forward = 1,
    //% block="backward"
    //% block.loc.nl="achteruit"
    Backward = 2,
}

enum ETmoveZ {
    //% block="up"
    //% block.loc.nl="omhoog"
    Up = 5,
    //% block="down"
    //% block.loc.nl="omlaag"
    Down = 6,
}

enum ETmoveXY {
    //% block="forward"
    //% block.loc.nl="naar voren"
    Forward = 1,
    //% block="backward"
    //% block.loc.nl="naar achteren"
    Backward = 2,
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
}

enum ETmoveXZ {
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
    //% block="up"
    //% block.loc.nl="omhoog"
    Up = 5,
    //% block="down"
    //% block.loc.nl="omlaag"
    Down = 6,
}

enum ETmoveYZ {
    //% block="forward"
    //% block.loc.nl="naar voren"
    Forward = 1,
    //% block="backward"
    //% block.loc.nl="naar achteren"
    Backward = 2,
    //% block="up"
    //% block.loc.nl="omhoog"
    Up = 5,
    //% block="down"
    //% block.loc.nl="omlaag"
    Down = 6,
}

enum ETmoveXYZ {
    //% block="forward"
    //% block.loc.nl="naar voren"
    Forward = 1,
    //% block="backward"
    //% block.loc.nl="naar achteren"
    Backward = 2,
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
    //% block="up"
    //% block.loc.nl="omhoog"
    Up = 5,
    //% block="down"
    //% block.loc.nl="omlaag"
    Down = 6,
}

enum ETcolor {
    //% block="red"
    //% block.loc.nl="rood"
    Red = 1,
    //% block="green"
    //% block.loc.nl="groen"
    Green = 2,
    //% block="blue"
    //% block.loc.nl="blauw"
    Blue = 3,
    //% block="yellow"
    //% block.loc.nl="geel"
    Yellow = 4,
    //% block="cyan"
    //% block.loc.nl="cyaan"
    Cyan = 5,
    //% block="magenta"
    //% block.loc.nl="magenta"
    Magenta = 6,
    //% block="black"
    //% block.loc.nl="zwart"
    Black = 7,
    //% block="dark grey"
    //% block.loc.nl="donkergrijs"
    DarkGrey = 8,
    //% block="grey"
    //% block.loc.nl="grijs"
    Grey = 9,
    //% block="light grey"
    //% block.loc.nl="lichtgrijs"
    LightGrey = 10,
    //% block="white"
    //% block.loc.nl="wit"
    White = 11,
    //% block="orange"
    //% block.loc.nl="oranje"
    Orange = 12,
    //% block="brown"
    //% block.loc.nl="bruin"
    Brown = 13,
    //% block="pink"
    //% block.loc.nl="roze"
    Pink = 14,
    //% block="indigo"
    //% block.loc.nl="indigo"
    Indigo = 15,
    //% block="violet"
    //% block.loc.nl="violet"
    Violet = 16,
    //% block="purple"
    //% block.loc.nl="paars"
    Purple = 17,
}

function etRgbValue(red: number, green: number, blue: number): number {
    let rgb = ((red & 0xFF) << 16) | ((green & 0xFF) << 8) | (blue & 0xFF)
    return rgb;
}

function etRedValue(rgb: number): number {
    let r = (rgb >> 16) & 0xFF
    return r;
}

function etGreenValue(rgb: number): number {
    let g = (rgb >> 8) & 0xFF
    return g;
}

function etBlueValue(rgb: number): number {
    let b = (rgb) & 0xFF
    return b;
}

function etFromColor(color: ETcolor): number {
    let val = 0
    switch (color) {
        case ETcolor.Red: val = 0xFF0000; break;
        case ETcolor.Green: val = 0x00FF00; break;
        case ETcolor.Blue: val = 0x0000FF; break;
        case ETcolor.Yellow: val = 0xFFFF00; break;
        case ETcolor.Cyan: val = 0x00FFFF; break;
        case ETcolor.Magenta: val = 0xFF00FF; break;
        case ETcolor.Black: val = 0x000000; break;
        case ETcolor.DarkGrey: val = 0xA9A9A9; break;
        case ETcolor.Grey: val = 0x808080; break;
        case ETcolor.LightGrey: val = 0xD3D3D3; break;
        case ETcolor.White: val = 0xFFFFFF; break;
        case ETcolor.Orange: val = 0xFFA500; break;
        case ETcolor.Brown: val = 0xA52A2A; break;
        case ETcolor.Pink: val = 0xFFC0CB; break;
        case ETcolor.Indigo: val = 0x4b0082; break;
        case ETcolor.Violet: val = 0x8a2be2; break;
        case ETcolor.Purple: val = 0x800080; break;
    }
    return val
}

function etFromRgbValues(red: number, green: number, blue: number, clearch?: number): ETcolor {

    let max = Math.max(red, Math.max(green, blue))
    let min = Math.min(red, Math.min(green, blue))

    if (Math.abs(max - min) < 60) {
        if (clearch == undefined) {
            let bright = Math.round(0.21 * red + 0.72 * green + 0.07 * blue)
            if (bright > 100) return ETcolor.White
            if (bright < 90) return ETcolor.Black
            return ETcolor.Grey
        }
        else {
            if (clearch > 75) return ETcolor.White
            if (clearch < 30) return ETcolor.Black
            return ETcolor.Grey
        }
    }

    let hue: number
    if (red == max) hue = (0 + (green - blue) / (max - min)) * 60
    if (green == max) hue = (2 + (blue - red) / (max - min)) * 60
    if (blue == max) hue = (4 + (red - green) / (max - min)) * 60

    if (hue < 0) hue += 360

    // translate hue to color names
    if (hue < 20) return ETcolor.Red
    if (hue < 50) return ETcolor.Orange
    if (hue < 100) return ETcolor.Yellow
    if (hue < 190) return ETcolor.Green
    if (hue < 206) return ETcolor.Cyan
    if (hue < 230) return ETcolor.Blue
    if (hue < 272) return ETcolor.Purple
    if (hue < 300) return ETcolor.Magenta

    return ETcolor.Red
}

function etFromRgb(rgb: number): ETcolor {
    let red = etRedValue(rgb)
    let green = etGreenValue(rgb)
    let blue = etBlueValue(rgb)
    return etFromRgbValues(red, green, blue)
}

//% color="#61CBF4" icon="\uf075"
//% block="General"
//% block.loc.nl="Algemeen"
namespace etbasic {

    //% color="#008800"
    //% block="comment: %dummy"
    //% block.loc.nl="uitleg: %dummy"
    //% dummy.defl="schrijf hier je uitleg"
    export function comment(dummy: string) {
    }

    //% block="a number from %min upto %max"
    //% block.loc.nl="een getal van %min t/m %max"
    //% min.defl=0 max.defl=10
    export function randomInt(min: number, max: number): number {
        let i = 0
        if (min > max) {
            i = min
            min = max
            max = i
        }
        i = max - min + 1
        i = min + Math.floor(Math.random() * i)
        return i
    }

    //% block="wait %sec seconds"
    //% block.loc.nl="wacht %sec seconden"
    export function wait(sec: number) {
        basic.pause(sec * 1000)
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

//////////////////
//  INCLUDE     //
//  etradio.ts  //
//////////////////

// the micro:bit radio buffer size is 19 bytes only
// therefore, messages are sent in chunks
// a sender sends the chunks with format: id|ix|chunk
// the final chunk has a unique ack_id: id|-1|ack_id
// a receiver acknowledges with: id|-2|ack_id

//##### GROUP HANDLING #####\\

const ET_EVENT = 200 + Math.randomRange(0, 100) // semi-unique id

let ETgroup = 1
let ETgroupTimer = 0
let ETgroupSet = false
let ETgroupHandlers: ((group: number) => void)[] = []

function etHandleGroup() {
    basic.showNumber(ETgroup)
    if (ETgroupHandlers.length) {
        for (let ix = 0; ix < ETgroupHandlers.length; ix++)
            ETgroupHandlers[ix](ETgroup)
    }
    else
        basic.showIcon(IconNames.Yes)
}

control.onEvent(ET_EVENT, 0, function () {
    while (ETgroupTimer > control.millis()) { basic.pause(1) }
    etHandleGroup()
    ETgroupTimer = 0
    ETgroupSet = false
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (ETgroupSet) {
        ETgroup++
        if (ETgroup > 9) ETgroup = 1
        radio.setGroup(ETgroup)
    }
    else
        ETgroupSet = true
    basic.showNumber(ETgroup)
    if (!ETgroupTimer) {
        ETgroupTimer = control.millis() + 1000
        control.raiseEvent(ET_EVENT, 0)
    }
    else
        ETgroupTimer = control.millis() + 1000
})

radio.setGroup(ETgroup)
etHandleGroup()

//##### DATA HANDLING #####\\

const ET_EOM = -1
const ET_ACK = -2

interface ETradioMessages {
    sent: string[]  // id's of sent messages that have no ACK yet
    received: string[]	// received messages that have not been read yet
    chunks: string[]	// temporary buffer for received chunks
    handler: (message: string) => void // will be called when a radio message is received
}

let ETradioMsg: { [id: string]: ETradioMessages } = {}
let ETradioTime = 0

radio.onReceivedString(function (chunk: string) {
    ETradioTime = input.runningTime()

    let parts = chunk.split("|")
    if (parts.length != 3) return
    let id = parts[0]
    let ix = +parts[1]
    let msg = parts[2]

    // create a buffer for id if not existing
    etradio.createBuffer(id)

    // EOM handling (receiver side)
    // (1) send ACK
    // (2) store message or call handler
    // see: etradio.send()
    if (ix === ET_EOM) {
        // (1) msg contains msg id
        msg = id + "|" + ET_ACK.toString() + "|" + msg
        radio.sendString(msg)
        // (2)
        msg = ETradioMsg[id].chunks.join("")
        if (ETradioMsg[id].handler)
            ETradioMsg[id].handler(msg)
        else
            ETradioMsg[id].received.push(msg)
        ETradioMsg[id].chunks = []
        return
    }

    // ACK handling (sender side)
    // (1) clear the ACK flag when acknowledged
    // see: etradio.send()
    if (ix === ET_ACK) {
        if (ETradioMsg[id] && ((ix = ETradioMsg[id].sent.indexOf(msg)) >= 0))
            // (1)
            ETradioMsg[id].sent.splice(ix, 1)
        return
    }

    // CHUNK handling (receiver side)
    ETradioMsg[id].chunks[ix] = msg
})

namespace etradio {

    export function createBuffer(id: string) {
        if (!ETradioMsg[id])
            ETradioMsg[id] = { sent: [], received: [], chunks: [], handler: null }
    }

    export function clearBuffer(id: string) {
        if (ETradioMsg[id])
            delete ETradioMsg[id]
    }

    export function send(id: string, msg: string, timeout: number = 0) {
        // messages are broadcasted

        let len = Math.max(1, 15 - id.length)
        let ix = 0
        let chunk = ""
        let ack_id = control.millis().toString() + Math.randomRange(0, 999).toString()
        ack_id = ack_id.substr(0, len)

        // create a buffer for id if not existing
        createBuffer(id)

        // send message in chunks
        while (msg.length > 0) {
            chunk = id + "|" + ix.toString() + "|" + msg.substr(0, len)
            msg = msg.substr(len)
            radio.sendString(chunk)
            basic.pause(1)
            ix += 1
        }

        // (1) raise ACK flag
        // (2) sent ack_id so that receiver can ACK
        // (3) wait for ACK flag being cleared by radio.onReceivedString
        // (4) clear ACK flag in case of timeout
        // Not fully fail save, but best in terms of successfull transmission
        // Timeout is the savety net
        // After timeout clear the ACK flag anyway

        // (1)
        ETradioMsg[id].sent.push(ack_id)

        // (2)
        chunk = id + "|" + ET_EOM.toString() + "|" + ack_id
        radio.sendString(chunk)

        // (3)
        let tm = control.millis() + timeout
        while (control.millis() < tm && ETradioMsg[id].sent.indexOf(ack_id) >= 0)
            basic.pause(1)

        // (4)
        if ((ix = ETradioMsg[id].sent.indexOf(ack_id)) >= 0)
            ETradioMsg[id].sent.splice(ix, 1)
    }

    export function available(id: string): boolean {
        return !!(ETradioMsg[id] && (ETradioMsg[id].received.length > 0))
    }

    export function read(id: string): string {
        if (!ETradioMsg[id] || !ETradioMsg[id].received.length)
            return ""
        let msg = ETradioMsg[id].received.shift()
        return msg
    }

    export function ellapsed(): number {
        return input.runningTime() - ETradioTime
    }

    export function registerMessageHandler(id: string, handler: (msg: string) => void) {
        createBuffer(id)
        ETradioMsg[id].handler = handler
    }

    export function registerGroupHandler(handler: (group: number) => void) {
        ETgroupHandlers.push(handler)
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

////////////////////////////
//  INCLUDE               //
//  ettiltpad-shared.ts  //
////////////////////////////

const ET_TILTPADID = "TP"

const ET_TILT = "T"
const ET_BUTTON = "B"

enum ETtouchButton {
    //% block="left"
    //% block.loc.nl="linker"
    Left,
    //% block="a-"
    //% block.loc.nl="a-"
    A,
    //% block="b-"
    //% block.loc.nl="b-"
    B,
    //% block="c-"
    //% block.loc.nl="c-"
    C,
    //% block="d-"
    //% block.loc.nl="d-"
    D,
    //% block="right"
    //% block.loc.nl="rechter"
    Right,
}

enum ETtouchEvent {
    //% block="released"
    //% block.loc.nl="losgelaten"
    Released,
    //% block="pressed"
    //% block.loc.nl="aangeraakt"
    Pressed,
}

/////////////////
// END INCLUDE //
/////////////////

/////////////////////////
//  INCLUDE            //
//  ettiltpad-slave.ts //
/////////////////////////

// the next constants agree with 'et-tiltpad-app.ts'

enum ETtilt {
    //% block="pitch"
    //% block.loc.nl="pitch"
    Pitch,
    //% block="roll"
    //% block.loc.nl="roll"
    Roll,
    //% block="yaw"
    //% block.loc.nl="yaw"
    Yaw,
}

function etTiltpadRadio(msg: string) {
    let parts = msg.split(";")
    if (parts.length != 3) return
    let num = +parts[0]
    let prm = parts[1]
    let val = +parts[2]
    EtTiltpad.handleTilt(num, prm, val)
}
etradio.registerMessageHandler(ET_TILTPADID, etTiltpadRadio)

//% color="#C4C80E" icon="\uf065"
//% block="Tiltpad"
//% block.loc.nl="Tiltpad"
namespace EtTiltpad {

    interface itilt {
        pitch: number
        roll: number
        yaw: number
    }

    let tilt: itilt[] = []

    let onTiltHandler: (() => void)[] = []
    let onRollHandler: (() => void)[] = []
    let onPitchHandler: (() => void)[] = []
    let onYawHandler: (() => void)[] = []

    let onLeftHandler: (() => void)[] = []
    let onRightHandler: (() => void)[] = []
    let onAHandler: (() => void)[] = []
    let onBHandler: (() => void)[] = []
    let onCHandler: (() => void)[] = []
    let onDHandler: (() => void)[] = []

    let onLeftHandlerR: (() => void)[] = []
    let onRightHandlerR: (() => void)[] = []
    let onAHandlerR: (() => void)[] = []
    let onBHandlerR: (() => void)[] = []
    let onCHandlerR: (() => void)[] = []
    let onDHandlerR: (() => void)[] = []

    tilt.push({ pitch: 999, roll: 999, yaw: 999 })

    onTiltHandler.push(null)
    onRollHandler.push(null)
    onPitchHandler.push(null)
    onYawHandler.push(null)

    onLeftHandler.push(null)
    onRightHandler.push(null)
    onAHandler.push(null)
    onBHandler.push(null)
    onCHandler.push(null)
    onDHandler.push(null)

    onLeftHandlerR.push(null)
    onRightHandlerR.push(null)
    onAHandlerR.push(null)
    onBHandlerR.push(null)
    onCHandlerR.push(null)
    onDHandlerR.push(null)

    export function handleTilt(num: number, prm: string, val: number) {
        if (num < 1) return
        num--
        if (prm == ET_TILT) {
            let parts = prm.split("|")
            if (parts.length != 3) return
            if (num < tilt.length)
                tilt[num] = { pitch: +parts[0], roll: +parts[1], yaw: +parts[2] }
            if ((num < onTiltHandler.length) && onTiltHandler[num])
                onTiltHandler[num]()
        }
        else
            if (prm == ET_BUTTON) {
                if (val < 6) {
                    switch (val) {
                        case ETtouchButton.Left:
                            if ((num < onLeftHandler.length) && onLeftHandler[num]) {
                                onLeftHandler[num]()
                            }
                            break
                        case ETtouchButton.Right:
                            if ((num < onRightHandler.length) && onRightHandler[num])
                                onRightHandler[num]()
                            break
                        case ETtouchButton.A:
                            if ((num < onAHandler.length) && onAHandler[num])
                                onAHandler[num]()
                            break
                        case ETtouchButton.B:
                            if ((num < onBHandler.length) && onBHandler[num])
                                onBHandler[num]()
                            break
                        case ETtouchButton.C:
                            if ((num < onCHandler.length) && onCHandler[num])
                                onCHandler[num]()
                            break
                        case ETtouchButton.D:
                            if ((num < onDHandler.length) && onDHandler[num])
                                onDHandler[num]()
                            break
                    }
                    return
                }
                else {
                    val -= 6
                    switch (val) {
                        case ETtouchButton.Left:
                            if ((num < onLeftHandlerR.length) && onLeftHandlerR[num])
                                onLeftHandlerR[num]()
                            break
                        case ETtouchButton.Right:
                            if ((num < onRightHandlerR.length) && onRightHandlerR[num])
                                onRightHandlerR[num]()
                            break
                        case ETtouchButton.A:
                            if ((num < onAHandlerR.length) && onAHandlerR[num])
                                onAHandlerR[num]()
                            break
                        case ETtouchButton.B:
                            if ((num < onBHandlerR.length) && onBHandlerR[num])
                                onBHandlerR[num]()
                            break
                        case ETtouchButton.C:
                            if ((num < onCHandlerR.length) && onCHandlerR[num])
                                onCHandlerR[num]()
                            break
                        case ETtouchButton.D:
                            if ((num < onDHandlerR.length) && onDHandlerR[num])
                                onDHandlerR[num]()
                            break
                    }
                }
            }
    }

    //% color="#802080"
    //% block="when button %but is released"
    //% block.loc.nl="wanneer een knop wordt losgelaten"
    export function onButtonReleased(but: ETtouchButton, code: () => void): void {
        onTiltpadButtonReleased(but, 1, code)
    }

    //% color="#802080"
    //% block="when button %but is touched"
    //% block.loc.nl="wanneer de %but knop wordt aangeraakt"
    export function onButton(but: ETtouchButton, code: () => void): void {
        onTiltpadButton(but, 1, code)
    }

    //% color="#802080"
    //% block="when the %tilt changes"
    //% block.loc.nl="wanneer de %tilt wijzigt"
    export function onTilt(tilt: ETtilt, code: () => void): void {
        onTiltpadTilt(tilt, 1, code)
    }

    //% block="pitch"
    //% block.loc.nl="pitch"
    export function readPitch(): number {
        if (tilt.length) return tilt[0].pitch
        return 999
    }

    //% block="roll"
    //% block.loc.nl="roll"
    export function readRoll(): number {
        if (tilt.length) return tilt[0].roll
        return 999
    }

    //% block="yaw"
    //% block.loc.nl="yaw"
    export function readYaw(): number {
        if (tilt.length) return tilt[0].yaw
        return 999
    }

    //% subcategory="Meerdere pads"
    //% color="#802080"
    //% block="when button %but of touchpad %num is released"
    //% block.loc.nl="wanneer de %but knop van tiltpad %num wordt losgelaten"
    //% num.min=1 num.max=10
    export function onTiltpadButtonReleased(but: ETtouchButton, num: number, code: () => void): void {
        num -= 1
        if (num < 0) return
        switch (but) {
            case ETtouchButton.Left:
                if (onLeftHandlerR.length > num) onLeftHandlerR[num] = code
                break
            case ETtouchButton.A:
                if (onAHandlerR.length > num) onAHandlerR[num] = code;
                break
            case ETtouchButton.B:
                if (onBHandlerR.length > num) onBHandlerR[num] = code
                break
            case ETtouchButton.C:
                if (onCHandlerR.length > num) onCHandlerR[num] = code
                break
            case ETtouchButton.D:
                if (onDHandlerR.length > num) onDHandlerR[num] = code
                break
            case ETtouchButton.Right:
                if (onRightHandlerR.length > num) onRightHandlerR[num] = code
                break
        }
    }

    //% subcategory="Meerdere pads"
    //% color="#802080"
    //% block="when button %but of touchpad %num is touched"
    //% block.loc.nl="wanneer de %but knop van tiltpad %num wordt aangeraakt"
    //% num.min=1 num.max=10
    export function onTiltpadButton(but: ETtouchButton, num: number, code: () => void): void {
        num -= 1
        if (num < 0) return
        switch (but) {
            case ETtouchButton.Left:
                if (onLeftHandler.length > num) onLeftHandler[num] = code
                break
            case ETtouchButton.A:
                if (onAHandler.length > num) onAHandler[num] = code;
                break
            case ETtouchButton.B:
                if (onBHandler.length > num) onBHandler[num] = code
                break
            case ETtouchButton.C:
                if (onCHandler.length > num) onCHandler[num] = code
                break
            case ETtouchButton.D:
                if (onDHandler.length > num) onDHandler[num] = code
                break
            case ETtouchButton.Right:
                if (onRightHandler.length > num) onRightHandler[num] = code
                break
        }
    }

    //% subcategory="Meerdere pads"
    //% color="#802080"
    //% block="when the %tilt of tiltpad %num changes"
    //% block.loc.nl="wanneer de %tilt van tiltpad %num wijzigt"
    //% num.min=1 num.max=10
    export function onTiltpadTilt(tilt: ETtilt, num: number, code: () => void): void {
        num -= 1
        if (num < 0) return
        switch (tilt) {
            case ETtilt.Pitch:
                if (onPitchHandler.length > num) onPitchHandler[num] = code
                break
            case ETtilt.Roll:
                if (onRollHandler.length > num) onRollHandler[num] = code
                break
            case ETtilt.Yaw:
                if (onYawHandler.length > num) onYawHandler[num] = code
                break
        }
    }

    //% subcategory="Meerdere pads"
    //% block="pitch of tiltpad %num"
    //% block.loc.nl="pitch van tiltpad %num"
    export function readTiltpadPitch(num: number): number {
        num -= 1
        if (num >= 0 && num < tilt.length)
            return tilt[num].pitch
        return 999
    }

    //% subcategory="Meerdere pads"
    //% block="roll of tiltpad %num"
    //% block.loc.nl="roll van tiltpad %num"
    export function readTiltpadRoll(num: number): number {
        num -= 1
        if (num >= 0 && num < tilt.length)
            return tilt[num].roll
        return 999
    }

    //% subcategory="Meerdere pads"
    //% block="yaw of tiltpad %num"
    //% block.loc.nl="yaw van tiltpad %num"
    export function readTiltpadYaw(num: number): number {
        num -= 1
        if (num >= 0 && num < tilt.length)
            return tilt[num].yaw
        return 999
    }

    //% subcategory="Meerdere pads"
    //% block="use %cnt tiltpads"
    //% block.loc.nl="gebruik %cnt tiltpads"
    //% cnt.min=1 cnt.max=10 cnt.defl=2
    export function setTiltpadCount(cnt: number) {

        if (cnt < 1) cnt = 1

        onPitchHandler.splice(0, onPitchHandler.length)
        onRollHandler.splice(0, onRollHandler.length)
        onYawHandler.splice(0, onYawHandler.length)
        onLeftHandler.splice(0, onLeftHandler.length)
        onRightHandler.splice(0, onRightHandler.length)
        onAHandler.splice(0, onAHandler.length)
        onBHandler.splice(0, onBHandler.length)
        onCHandler.splice(0, onCHandler.length)
        onDHandler.splice(0, onDHandler.length)
        onLeftHandlerR.splice(0, onLeftHandler.length)
        onRightHandlerR.splice(0, onRightHandler.length)
        onAHandlerR.splice(0, onAHandler.length)
        onBHandlerR.splice(0, onBHandler.length)
        onCHandlerR.splice(0, onCHandler.length)
        onDHandlerR.splice(0, onDHandler.length)
        tilt.splice(0, tilt.length)

        for (let i = 0; i < cnt; i++) {
            onPitchHandler.push(null)
            onRightHandler.push(null)
            onYawHandler.push(null)
            onLeftHandler.push(null)
            onRightHandler.push(null)
            onAHandler.push(null)
            onBHandler.push(null)
            onCHandler.push(null)
            onDHandler.push(null)
            onLeftHandlerR.push(null)
            onRightHandlerR.push(null)
            onAHandlerR.push(null)
            onBHandlerR.push(null)
            onCHandlerR.push(null)
            onDHandlerR.push(null)
            tilt.push({ pitch: 999, roll: 999, yaw: 999 })
        }
    }
}

/////////////////
// END INCLUDE //
/////////////////

/////////////////////
//  INCLUDE        //
//  nezhaports.ts  //
/////////////////////

enum RJPort {
    //% block="J1"
    J1,
    //% block="J2"
    J2,
    //% block="J3"
    J3,
    //% block="J4"
    J4,
}

enum RJLine {
    //% block="L1"
    L1,
    //% block="L2"
    L2,
}

enum MotorPort {
    //% block="M1"
    M1,
    //% block="M2"
    M2,
    //% block="M3"
    M3,
    //% block="M4"
    M4,
}

enum ServoPort {
    //% block="S1"
    S1,
    //% block="S2"
    S2,
    //% block="S3"
    S3,
    //% block="S4"
    S4,
}

namespace RJ {
    const AnalogRJ = [AnalogPin.P8, AnalogPin.P1,
    AnalogPin.P12, AnalogPin.P2,
    AnalogPin.P14, AnalogPin.P13,
    AnalogPin.P16, AnalogPin.P15]

    const DigitalRJ = [DigitalPin.P8, DigitalPin.P1,
    DigitalPin.P12, DigitalPin.P2,
    DigitalPin.P14, DigitalPin.P13,
    DigitalPin.P16, DigitalPin.P15]

    export function analogPin(port: RJPort, line: RJLine): AnalogPin {
        return AnalogRJ[port * 2 + line]
    }

    export function digitalPin(port: RJPort, line: RJLine): DigitalPin {
        return DigitalRJ[port * 2 + line]
    }
}

type Motor = { Port: MotorPort, Revert: boolean }
type Servo = { Port: ServoPort, Revert: boolean }

///////////////////
//  END INCLUDE  //
///////////////////

///////////////////////
//  INCLUDE          //
//  px-wheelsone.ts  //
///////////////////////

namespace PxWheelsOne {

    export class Device {

        private M: Motor
        private calForw = 0 // pos: perc. slowing down left motor
        private calRev = 0  // neg: perc. slowing down right motor
        private diameter: number = 67

        constructor(motor: Motor) {
            this.M = motor
        }

        private _speed(motor: MotorPort, rotation: ETrotate, speed: number): void {
            // speed in %
            if (speed > 100) speed = 100
            let buf = pins.createBuffer(8)
            buf[0] = 0xFF;
            buf[1] = 0xF9;
            buf[2] = motor + 1;
            buf[3] = rotation - 2;
            buf[4] = 0x60;
            buf[5] = Math.floor(speed);
            buf[6] = 0xF5;
            buf[7] = 0x00;
            pins.i2cWriteBuffer(0x10, buf);
        }

        private _read(): number {
            // speed in rotations per second (rps)
            let buf = pins.createBuffer(8)
            buf[0] = 0xFF;
            buf[1] = 0xF9;
            buf[2] = this.M.Port + 1;
            buf[3] = 0x00;
            buf[4] = 0x47;
            buf[5] = 0x00;
            buf[6] = 0xF5;
            buf[7] = 0x00;
            pins.i2cWriteBuffer(0x10, buf);
            basic.pause(1)
            let arr = pins.i2cReadBuffer(0x10, 2);
            let retData = (arr[1] << 8) | (arr[0]);
            let motor = Math.floor(retData / 3.6) * 0.01;
            return motor
        }

        setDiameter(diameter: number) {
            // diameter in mm
            this.diameter = diameter
        }

        speed(spd: number) {
            // speed in % [-100, 100]
            spd = (this.M.Revert ? -spd : spd)
            this._speed(this.M.Port, spd >= 0 ? ETrotate.Clockwise : ETrotate.AntiClockwise, Math.abs(spd))
        }

        speedRps(rps: number) {
            this.speed(Math.round(rps * 38.46))
        }

        speedCps(cps: number) {
            cps = Math.round(cps * 0.314 * this.diameter)
            this.speed(cps)
        }

        stop() {
            let buf = pins.createBuffer(8)
            buf[0] = 0xFF;
            buf[1] = 0xF9;
            buf[2] = this.M.Port + 1;
            buf[3] = 0x00;
            buf[4] = 0x5F;
            buf[5] = 0x00;
            buf[6] = 0xF5;
            buf[7] = 0x00;
            pins.i2cWriteBuffer(0x10, buf);
        }

        read(): number {
            // speed in %
            let val = this._read()
            let motor = Math.round(val * 38.46)
            return motor
        }

        readRps(): number {
            // rotations per second
            let val = this._read()
            let motor = Math.round(val)
            return motor
        }

        readCps(): number {
            // centimeters per second
            let val = this._read()
            let motor = Math.round(val * 0.314 * this.diameter)
            return motor
        }
    }

    export function create(motor: Motor): Device {
        let device = new Device(motor)
        return device
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

/////////////////
//  INCLUDE    //
//  ettrain.ts //
/////////////////

//% color="#FF8844" icon="\uf238"
//% block="Train"
//% block.loc.nl="Trein"
namespace EtTrain {

    let train = PxWheelsOne.create({ Port: MotorPort.M2, Revert: true })
    let direction = ETmoveY.Forward
    let curspeed = 0    // 0 .. 100
    let newspeed = 0    // 0 .. 100
    let showspeed = 0   // 0 .. 9

    basic.forever(function() {
        if (newspeed > curspeed)
            curspeed ++
        if (newspeed < curspeed)
            curspeed --
        train.speed(direction == ETmoveY.Forward ? curspeed : -curspeed)

        let spd = Math.floor( curspeed / 11) // values 0 .. 9
        if (showspeed != spd) {
            showspeed  = spd
            etradio.send(ET_TILTPADID, showspeed.toString())
        }
        basic.pause(50)
    })

    //% block="drive forward"
    //% block.loc.nl="rijd vooruit"
    export function forward() {
        newspeed = 0
        while (curspeed) pause(10)
        direction = ETmoveY.Forward
    }

    //% block="drive backward"
    //% block.loc.nl="rijd achteruit"
    export function backward() {
        newspeed = 0
        while (curspeed) pause(10)
        direction = ETmoveY.Backward
    }

    //% block="drive with speed %newspeed"
    //% block.loc.nl="rijd met snelheid %newspeed"
    //% newspeed.min = 0 newspeed.max=100 newspeed.defl=0
    export function drive(speed: number) {
        if (speed < 0) speed = 0
        if (speed > 100) speed = 100
        newspeed = speed
    }

    //% block="decellerate"
    //% block.loc.nl="vertraag"
    export function slowDown() {
        newspeed = 0
    }

    //% block="constant speed"
    //% block.loc.nl="constante snelheid"
    export function keepSpeed() {
        newspeed = curspeed
    }

    //% block="accellerate"
    //% block.loc.nl="versnel"
    export function speedUp() {
        newspeed = 100
    }

    //% block="emergency stop"
    //% block.loc.nl="noodstop"
    export function stop() {
        newspeed = 0
        curspeed = 0
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

input.onButtonPressed(Button.A, function () {
    EtTrain.speedUp()
})

input.onButtonPressed(Button.B, function () {
    EtTrain.slowDown()
})

input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    EtTrain.keepSpeed()
})
