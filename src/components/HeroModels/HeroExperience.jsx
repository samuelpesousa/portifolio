import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights'
import Particles from "./Particles";

const HeroExperience = () => {
    const isTable = useMediaQuery({query: '(max-width: 1024px)'});
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    
    const cameraPosition = isMobile ? [3, 1, 3] : isTable ? [6, 1.5, 6] : [8, 2, 8];
    const cameraFov = isMobile ? 75 : isTable ? 55 : 45;
    
    return(
 
       <Canvas
        camera={{
            position: cameraPosition,
            fov: cameraFov,
            near: 0.1,
            far: 1000
        }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
       >

        <HeroLights />

        <OrbitControls 
        enablePan={false} 
        enableZoom={!isMobile && !isTable}
        enableRotate={!isMobile}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0, 0]}
        />

        <Particles count={isMobile ? 50 : 100} />
        <group 
            scale={isMobile ? 0.35 : isTable ? 0.6 : 1}
            position={isMobile ? [0, -1, 0] : isTable ? [0, -1.5, 0] : [0, -2, 0]}
            rotation={[0, isMobile ? -Math.PI / 4 : -Math.PI / 6, 0]}
        >
            <Room />
        </group>

       </Canvas>
    )
}
export default HeroExperience