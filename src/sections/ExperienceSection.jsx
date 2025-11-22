import React  from "react";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constanst";
import GlowCard from "../components/GlowCard";
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const ExperienceSection = () => {

    useGSAP(() => {
        gsap.utils.toArray('.expText').forEach((text) =>{

            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: text, 
                    start: 'top 60%'
                }
            })
        })

        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '70% center',
                onUpdate: (self) => {
                gsap.to('.timeline', {
                    scaleY: 1 - self.progress
                })
            }
            },
           
        })
    }, []);

    return(
        <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title="Minha Experiência Profissional" sub="Minha Carreira" />

                <div className="mt-32 relative">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {expCards.map((card, index) => (
                            <div key={card.title} className="exp-card-wrapper">
                                <div className="xl:w-2/6">
                                    <GlowCard card={card} index={index}>
                                        <div>
                                            <img src={card.imgPath} alt={card.title} />
                                        </div>
                                    </GlowCard>

                                </div>
                                <div className="xl:w-4/6">
                                    <div className="flex items-start">
                                        <div className="timeline-wrapper">
                                            <div className="timeline" />
                                            <div className="gradient-line w-1 h-full" />
                                        
                                        </div>

                                        <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">

                                            <div className="timeline-logo">
                                                <img src={card.logoPath} alt="Logo" />
                                            </div>

                                            <div className="">
                                                <h1 className="font-semibold text-3xl" style={{ color: 'var(--text-main)' }}>{card.title}</h1>
                                                <p className="my-5" style={{ color: 'var(--text-muted)' }}>
                                                    {card.date}
                                                </p>
                                                <p className="italic" style={{ color: 'var(--text-muted)' }}>
                                                    Responsabilidades
                                                </p>
                                                <ul className="list-disc ms-5 mt-5 flex flex-col gap-5" style={{ color: 'var(--text-muted)' }}>
                                                    {card.responsibilities.map((responsibility) => (
                                                        <li key={responsibility}>
                                                            {responsibility}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ExperienceSection;