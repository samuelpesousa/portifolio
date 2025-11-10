import React from "react";
import { CounterItems } from '../constanst/index.js'
import CountUp from "react-countup";

const AnimatedCounter = () => {

    return (
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32 "> 
           <div className="mx-auto grid-4-cols">
            {CounterItems.map((item) => (

            <div className="bg-zinc-900 rounded-lg flex p-10 flex-col justify-center">
                <div key={item.label} className="counter-number text-white text-5xl font-bold mb-2">
                    
                    <CountUp suffix={item.suffix} end={item.value}/>
                    <div className="text-white-50 text-lg font-normal">{item.label}</div>
                </div>
            </div>
            ))}
           </div>
        </div>
    )

}

export default AnimatedCounter