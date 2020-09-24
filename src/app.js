import { Led } from "./lib/gpio-helpers";

const test = new Led(14)
console.log('running...')

test.blink(500)

process.on('exit', () => {
    Led.unExportAll()
    console.log('unexport')
})
