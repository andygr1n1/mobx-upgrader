import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BasicTimer, ClickCounter } from './components/ClickCounter'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="App-body">
                <ClickCounter timer={BasicTimer} />
            </div>
        </div>
    )
}

export default App
