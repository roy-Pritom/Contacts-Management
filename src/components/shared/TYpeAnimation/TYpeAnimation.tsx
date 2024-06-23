"use client"
import { Typewriter } from 'react-simple-typewriter'

export const TYpeAnimation = () => {

    // const handleType = (count) => {
    //     // access word count number
    //     console.log(count)
    // }


    // const handleDone = () => {
    //     console.log(`Done after 5 loops!`)
    // }
    // Embark on unforgettable journeys with our curated collection of travel experiences.
    return (
        <div className='App'>
            <h1 className="md:text-6xl text-3xl font-[800] text-black">
                Let <span className="text-[#5F4CDD]">Us </span>Be Your
                <br />
                <span className="md:text-6xl text-3xl font-[800]  text-[#5F4CDD]">
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['adventure buddy',`trusted companion`, 'travel sidekick',]}
                        loop={Infinity}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    
                    />
                </span>
            </h1>
        </div>
    )
}
