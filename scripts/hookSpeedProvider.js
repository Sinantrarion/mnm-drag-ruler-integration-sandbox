Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class MnMSpeedProvider extends SpeedProvider {
        get colors() {
            return [
                {id: "walk", default: 0x00FF00, name: "MnM.speeds.walk"}
            ]
        }

        getRanges(token) {
            const baseSpeed = token.actor.data.data.attributes.NUM_SPEED_DISTANCE.value

            const ranges = [
                {range: baseSpeed, color: "walk"}
            ]

            return ranges
        }
    }
    dragRuler.registerModule("mnm-drag-ruler-integration-sandbox", MnMSpeedProvider)
})