/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 24.09.20 - 11:41
 **/
import * as React from 'react'

import Typed from 'typed.js'

function runScripts() {
    const options = {
        strings:
            [
                'Welcome to Coders extreme',
                'You will learn to code in a different way',
                'It\'s ok if you have never coded in your life..',
                'You will be carefully guided to reach your desired level',
                'Let\'s start with a little demo lesson...'
            ],
        typeSpeed: 60,
        loop: false,
    }
    new Typed('.instructor', options)
}


const Instructor = () => {

    React.useEffect(() => {
        runScripts()
    }, [])

    return (
        <div className="instructor-container">
            <div className="instructor"/>
        </div>
    )
}

export default Instructor
