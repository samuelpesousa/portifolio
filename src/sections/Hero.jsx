import React, { Suspense, lazy } from 'react'
import Button from '../components/Button.jsx'
import { words } from '../constanst/index.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter.jsx'

const HeroExperience = lazy(() => import('../components/HeroModels/HeroExperience.jsx'))

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
        {
            y: 50,
            opacity: 0, 
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: 'power1.inOut'
        },
        )
    })
    return(
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt='background' />
        </div>

        <div className='hero-layout'>
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text relative z-20'>
                        <h1>Moldando 
                            <span  className='slide'>
                                <span className='wrapper'>
                                    {words.map((word) => (
                                        <span key={word.id} className='flex items-center md:gap-3 gap-1 pb-2' > 
                                            <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white' />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>Em Projetos Reais</h1>
                        <h1>Que Entregam Resultados.</h1>
                    </div>
                     <p className='md:text-xl relative z-10' style={{ color: 'var(--text-muted)' }}>Olá, sou Samuel um desenvolvedor apaixonado em tecnologia e programação.</p>
                    <Button className="md:w-80 md:h-16 w-72 h-14" id="button" text="Veja meu trabalho" />
                </div>
            </header>

            <figure>
                <div className='hero-3d-layout'>
                <Suspense fallback={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>Carregando 3D...</div>}>
                  <HeroExperience />
                </Suspense>
                </div>
            </figure>
        </div>
        <AnimatedCounter />
      </section>
    )
}


export default Hero