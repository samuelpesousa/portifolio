import React from "react";
import { CounterItems } from '../constanst/index.js'
import CountUp from "react-countup";

const AnimatedCounter = () => {

    return (
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32 "> 
           <div className="mx-auto grid-4-cols">
            {CounterItems.map((item) => (

            <div className="rounded-lg flex p-10 flex-col justify-center" style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                boxShadow: 'var(--shadow-sm)'
            }}>
                <div key={item.label} className="counter-number text-5xl font-bold mb-2" style={{ color: 'var(--text-main)' }}>
                    
                    <CountUp suffix={item.suffix} end={item.value}/>
                    <div className="text-lg font-normal" style={{ color: 'var(--text-muted)' }}>{item.label}</div>
                </div>
            </div>
            ))}
           </div>
        </div>
    )

}

export default AnimatedCounter