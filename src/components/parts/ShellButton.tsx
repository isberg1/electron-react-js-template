import React from 'react'
import { shell } from 'electron'

const ShellButton = () => (
    <button onClick={() => shell.openExternal('https://vg.no')}>
        åpne vg.no
    </button>
)

export default ShellButton
