import chalk from 'chalk'
import ora, { Color, Ora } from 'ora'

const DEFAULT_DELAY_TIME = 3000
export const delay = (time = 100) => {
    let timeout: any
    return new Promise<void>((resolve) => {
        timeout = setTimeout(() => {
            clearTimeout(timeout)
            resolve()
        }, time)
    })
}

let spinner: Ora
export const stopSpinner = () => {
    if (spinner) {
        spinner.clear()
        spinner.stop()
    }
}

export const clearConsole = async () => {
    if (spinner) {
        stopSpinner()
    }

    process.stdout.write('\u033c')
}

export type TShowSpinnerParams = {
    color?: Color
    text?: string
    shouldClear?: boolean
    delayTime?: number
}

export const showSpinner = async (params: TShowSpinnerParams) => {
    const {
        shouldClear,
        text = 'Loading...',
        color = 'blue',
        delayTime = DEFAULT_DELAY_TIME,
    } = params

    shouldClear && (await clearConsole())

    if (!spinner) {
        spinner = ora(text).start()
        spinner.color = color
    } else {
        spinner.text = text
        spinner.color = color
        spinner.start()
    }

    await delay(delayTime)
}

export type TShowMessageParams = {
    color?: Color
    text?: string
    delayTime?: number
    clear?: boolean
}

export const showMessage = async (params: TShowMessageParams) => {
    await stopSpinner()

    if (params.clear) {
        await clearConsole()
    }

    const { 
        color = 'blue',
        text = 'Loading...',
        delayTime = DEFAULT_DELAY_TIME,
    } = params

    const foundColor = chalk[color] || chalk.blue

    console.log(foundColor(text))

    await delay(delayTime)
}