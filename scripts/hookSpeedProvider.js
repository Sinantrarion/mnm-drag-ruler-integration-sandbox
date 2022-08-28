Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class MnMSpeedProvider extends SpeedProvider {
        get colors() {
            return [
                {id: "MoveAction", default: 0x04D40B},
                {id: "Athletic", default: 0xF1F505},
                {id: "ActionDash", default: 0x0505F5},
            ]
        }

        getRanges(token) {
            const baseSpeed = token.actor.data.data.attributes.NUM_SPEED_DISTANCE;

            const ranges = [
                {range: baseSpeed, color: "walk"},
                {range: baseSpeed * 2, color: "Athletic"},
                {range: baseSpeed * 4, color: "ActionDash"}
				
            ]

            return ranges
        }
    }
    dragRuler.registerModule("mnm-drag-ruler-integration-sandbox", MnMSpeedProvider)
})
