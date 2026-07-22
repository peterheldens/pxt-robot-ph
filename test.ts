/**
 * pxt-robot-ph
 * test.ts
 */

basic.showString("ROBOT")

robot.wis()
robot.helderheid(40)

basic.pause(1000)

// ------------------------------------
// Test 1 - Onderdelen afzonderlijk
// ------------------------------------

robot.antenneKleur(NeoPixelColors.Yellow)
basic.pause(500)

robot.linkerOogKleur(NeoPixelColors.Blue)
basic.pause(500)

robot.rechterOogKleur(NeoPixelColors.Blue)
basic.pause(500)

robot.neusKleur(NeoPixelColors.Red)
basic.pause(500)

robot.bovenlipKleur(NeoPixelColors.Green)
basic.pause(500)

robot.onderlipKleur(NeoPixelColors.Violet)
basic.pause(1000)

robot.wis()
basic.pause(1000)

// ------------------------------------
// Test 2 - Blij
// ------------------------------------

robot.antenneKleur(NeoPixelColors.Yellow)
robot.ogenKleur(NeoPixelColors.Blue)
robot.neusKleur(NeoPixelColors.Red)
robot.mondKleur(NeoPixelColors.Green)

basic.pause(2000)

robot.wis()
basic.pause(1000)

// ------------------------------------
// Test 3 - Boos
// ------------------------------------

robot.antenneKleur(NeoPixelColors.Red)
robot.ogenKleur(NeoPixelColors.Red)
robot.neusKleur(NeoPixelColors.Red)
robot.bovenlipKleur(NeoPixelColors.Red)
robot.onderlipKleur(NeoPixelColors.Red)

basic.pause(2000)

robot.wis()
basic.pause(1000)

// ------------------------------------
// Test 4 - Slapen
// ------------------------------------

robot.antenneKleur(NeoPixelColors.Blue)
robot.bovenlipKleur(NeoPixelColors.Blue)

basic.pause(2000)

robot.wis()
basic.pause(1000)

// ------------------------------------
// Test 5 - Disco
// ------------------------------------

robot.allesKleur(NeoPixelColors.Red)
basic.pause(300)

robot.allesKleur(NeoPixelColors.Green)
basic.pause(300)

robot.allesKleur(NeoPixelColors.Blue)
basic.pause(300)

robot.allesKleur(NeoPixelColors.Yellow)
basic.pause(300)

robot.allesKleur(NeoPixelColors.Purple)
basic.pause(300)

robot.allesKleur(NeoPixelColors.White)
basic.pause(300)

robot.wis()

basic.showIcon(IconNames.Yes)