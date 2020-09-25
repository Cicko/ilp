import React from 'react'
import './Terminal.css'
import Typed from 'typed.js'

function runScripts() {
    const data = [
        {
            action: 'type',
            strings: ['echo "Welcome to Code Extreme"'],
            output: '<span class="gray">Welcome to Code Extreme</span>',
            postDelay: 1000,
        }
    ]
    const options = {
        strings:
            [
                'Welcome to Coders extreme',
                'You will learn to code in a different way',
                'It\'s ok if you have never coded in your life..',
                'You will be carefully guided to reach your desired level',
                'Let\'s start with a little demo lesson...'
            ],
        typeSpeed: 60
    }
    let typed = new Typed('.prompt', options)
}

function Terminal() {

    React.useEffect(() => {
        runScripts();
    }, [])

    return (
        <div className="terminal-window">
            <header>
                <div className="button green"></div>
                <div className="button yellow"></div>
                <div className="button red"></div>
            </header>
            <section className="terminal">
                <div className="history"></div>
                $&nbsp;<span className="prompt"></span>
                <span className="typed-cursor"></span>
            </section>
        </div>
    )
}

export default Terminal
