// todo: add link to question

/*
Solution idea
- keep track of current pointer and current direction
- if rotating 90degrees, directions are swapped
 */

const doesCircleExist = (commands) => {
    const result = []

    for (const mainCommand of commands) {
        console.log(`\n mainCommand: ${mainCommand}`)
        let dirX = 0
        let dirY = 1
        let x = 0
        let y = 0

        const subCommands = mainCommand.split('')
        for (const command of subCommands) {
            if (command === 'G') {
                x += dirX
                y += dirY

                dirX += dirX
                dirY += dirY
            } else if (command === 'L') {
                const temp = dirX
                dirX = -1 * dirY
                dirY = temp
            } else if (command === 'R') {
                // command === R
                const temp = dirY
                dirY = -1 * dirX
                dirX = temp
            }

            console.log(`command ${command} | (x, y) -> (${x}, ${y}) | (dirX, dirY) -> (${dirX}, ${dirY})`)
        }

        // if position did not change | x === 0 && y === 0
        // if direction did not change | dirX === 0 && dirY === 1
        if (x === 0 && y === 0 && (dirX !== 0 && dirY !== 1)) {
            result.push('YES')
        } else {
            result.push('NO')
        }
    }
    return result
}

const sampleA = ['G']
const sampleB = ['L']
const sampleC = ['RGRG']
const sampleD = ['GGLLGG']
const sampleE = [
    'G',
    'L',
    'RGRG'
]
console.log(doesCircleExist(sampleE))