import React from 'react'

const words  = [
    { text: 'Ideais', imgPath: '/images/ideas.svg' },
    { text: 'Conceitos', imgPath: '/images/concepts.svg' }
]

const Hero = () => {
    return(
      <session id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt='background' />
        </div>

        <div className='hero-layout'>
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <h1>Moldando 
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word) => (
                                        <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2' > 
                                            <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' />
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>Em Projetos Reais</h1>
                        <h1>Que Entregam Resultados.</h1>
                    </div>
                </div>
            </header>
        </div>
      </session>
    )
}


export default Hero