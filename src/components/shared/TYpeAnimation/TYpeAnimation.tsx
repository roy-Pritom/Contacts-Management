"use client"
import { Typewriter } from 'react-simple-typewriter'

export const TYpeAnimation = () => {
    return (
        <div className='App'>
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-[800] text-black mb-10 h-[100px] md:h-full">
                Let <span className="text-[#5F4CDD]">Us </span>Be Your
                <br />
                <span className="lg:text-5xl md:text-4xl text-3xl font-[800]  text-[#5F4CDD]">
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['simplified contactsHub', 'go-to contact organizer']}
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
