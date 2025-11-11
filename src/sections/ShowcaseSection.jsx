import React, { useRef } from "react";




const ShowcaseSection = () => {
const sectionRef = useRef(null);
const project1Ref = useRef(null);
const project2Ref = useRef(null);
const project3Ref = useRef(null);

    return (
        <session id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Projeto 1" />
                        </div>
                        <div className="text-content">
                            <h2>Aplicativo para Concessionária e Aluguel de Veículos</h2>
                            <p className="text-white-50 md:text-xl">Um aplicativo com design moderno, pensado para atender todos os tipos de pessoas com facilidade. Construído com linguagens mais recentes do mercado (React Native) e métodos de Design inovadores, garantindo a maior durabilidade da aplicação e segurança.</p>
                        </div>
                    </div>
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Projeto 2" />
                            </div>
                            <h2>Plataforma de Gerenciamento de Livraria</h2>
                        </div>
                        
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7db]">
                                <img src="/images/project3.png" alt="Projeto 3" />
                            </div>
                            <h2>Plataforma de Conexão Entre Novas Startups</h2>

                        </div>

                    </div> 
                </div>
            </div>
        </session>
    )

}

export default ShowcaseSection