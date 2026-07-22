/**
 * pxt-robot-ph
 */

//% weight=100 color=#2699BF icon="\uf544" block="Robot"
namespace robot {

    const LED_PIN = DigitalPin.P16
    const LED_COUNT = 16

    const ANTENNE = 0
    const LINKER_OOG = 1
    const RECHTER_OOG = 2
    const NEUS = 3

    const MOND_BEGIN = 4
    const MOND_EIND = 15

    const BOVENLIP_BEGIN = 4
    const BOVENLIP_EIND = 9

    const ONDERLIP_BEGIN = 10
    const ONDERLIP_EIND = 15

    let gezicht: neopixel.Strip = null

    function initGezicht(): void {

        if (gezicht) return

        gezicht = neopixel.create(LED_PIN, LED_COUNT, NeoPixelMode.RGB)
        gezicht.setBrightness(40)
        gezicht.clear()
        gezicht.show()
    }

    function setKleur(van: number, tot: number, kleur: NeoPixelColors): void {

        initGezicht()

        let rgb = neopixel.colors(kleur)

        for (let i = van; i <= tot; i++) {
            gezicht.setPixelColor(i, rgb)
        }

        gezicht.show()
    }

    /**
     * Wis de robot.
     */
    //% blockId=robot_wis
    //% block="wis"
    //% weight=100
    export function wis(): void {

        initGezicht()

        gezicht.clear()
        gezicht.show()
    }

    /**
     * Stel de helderheid in.
     */
    //% blockId=robot_helderheid
    //% block="helderheid %waarde"
    //% waarde.min=0
    //% waarde.max=255
    //% waarde.defl=40
    //% weight=99
    export function helderheid(waarde: number): void {

        initGezicht()

        gezicht.setBrightness(waarde)
        gezicht.show()
    }

    /**
     * Antenne kleur.
     */
    //% blockId=robot_antenne
    //% block="antenne kleur %kleur"
    //% weight=90
    export function antenneKleur(kleur: NeoPixelColors): void {
        setKleur(ANTENNE, ANTENNE, kleur)
    }

    /**
     * Linker oog kleur.
     */
    //% blockId=robot_linkeroog
    //% block="linker oog kleur %kleur"
    //% weight=89
    export function linkerOogKleur(kleur: NeoPixelColors): void {
        setKleur(LINKER_OOG, LINKER_OOG, kleur)
    }

    /**
     * Rechter oog kleur.
     */
    //% blockId=robot_rechteroog
    //% block="rechter oog kleur %kleur"
    //% weight=88
    export function rechterOogKleur(kleur: NeoPixelColors): void {
        setKleur(RECHTER_OOG, RECHTER_OOG, kleur)
    }

    /**
     * Beide ogen kleur.
     */
    //% blockId=robot_ogen
    //% block="ogen kleur %kleur"
    //% weight=87
    export function ogenKleur(kleur: NeoPixelColors): void {
        setKleur(LINKER_OOG, RECHTER_OOG, kleur)
    }

    /**
     * Neus kleur.
     */
    //% blockId=robot_neus
    //% block="neus kleur %kleur"
    //% weight=86
    export function neusKleur(kleur: NeoPixelColors): void {
        setKleur(NEUS, NEUS, kleur)
    }

    /**
     * Mond kleur.
     */
    //% blockId=robot_mond
    //% block="mond kleur %kleur"
    //% weight=85
    export function mondKleur(kleur: NeoPixelColors): void {
        setKleur(MOND_BEGIN, MOND_EIND, kleur)
    }

    /**
     * Bovenlip kleur.
     */
    //% blockId=robot_bovenlip
    //% block="bovenlip kleur %kleur"
    //% weight=84
    export function bovenlipKleur(kleur: NeoPixelColors): void {
        setKleur(BOVENLIP_BEGIN, BOVENLIP_EIND, kleur)
    }

    /**
     * Onderlip kleur.
     */
    //% blockId=robot_onderlip
    //% block="onderlip kleur %kleur"
    //% weight=83
    export function onderlipKleur(kleur: NeoPixelColors): void {
        setKleur(ONDERLIP_BEGIN, ONDERLIP_EIND, kleur)
    }

    /**
     * Hele robot één kleur.
     */
    //% blockId=robot_alles
    //% block="hele robot kleur %kleur"
    //% weight=82
    export function allesKleur(kleur: NeoPixelColors): void {
        setKleur(0, LED_COUNT - 1, kleur)
    }

}