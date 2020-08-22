// src/components/app.jsx

// Import dependencies
import React from 'react'
import ShellButton from './parts/ShellButton'

// Create main App component
const App = () => (
    <div>
        <h1>test app med electron + react + typescript!</h1>
        <ShellButton />
        <p>
            Let's start building your awesome desktop app with electron and
            React!
        </p>
    </div>
)

// Export the App component
export default App
