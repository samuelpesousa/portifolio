import React from 'react';
import { abilities } from '../constanst/index.js';


const FeatureCards = () => {

    return(
        <div className="w-full padding-x-lg">
            <div className='mx-auto grid-3-cols'>
                {abilities.map(({ imgPath, title, desc }) => (
                    <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4'>
                      
                    <div className='size-14 flex items-center justify-center rounded-full'>
                        <img src={imgPath} alt={title}/>
                    </div>  
                    
                    <h3 className='text-2xl font-semibold mt-2' style={{ color: 'var(--text-main)' }}>{title}</h3>

                    <p className='text-lg' style={{ color: 'var(--text-muted)' }}>{desc}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default FeatureCards