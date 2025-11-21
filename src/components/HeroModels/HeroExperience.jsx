import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const cameraConfig = {
    position: isMobile ? [0, 1.5, 14] : isTablet ? [0, 0, 17] : [0, 0, 12],
    fov: isMobile ? 50 : isTablet ? 50 : 45
  };

  return (
    <Canvas camera={cameraConfig} style={{ width: '100%', height: '100%' }}>
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      {/* Configure OrbitControls to allow rotation and zoom on all devices */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        enableDamping={true}
        dampingFactor={0.05}
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={isMobile ? 40 : isTablet ? 70 : 100} />
        <group
          scale={isMobile ? 0.95 : isTablet ? 0.9 : 1}
          position={isMobile ? [0, -0.5, 0] : isTablet ? [0, -2, 0] : [0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;