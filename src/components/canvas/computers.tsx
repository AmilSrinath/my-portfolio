import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import CanvasLoader from "../loader";

type ComputersProps = {
  isMobile: boolean;
};

// Computers
const Computers = ({ isMobile }: ComputersProps) => {
  const computer = useGLTF("./desktop_pc/scene.glb");

  return (
    // Mesh
      <mesh>
        {/* Light */}
        <hemisphereLight intensity={0.35} groundColor="black"/>
        <ambientLight intensity={0.5}/>
        <pointLight intensity={10}/>
        <spotLight
            position={[-20, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
            castShadow
            shadow-mapSize={1024}
        />
        <primitive
            object={computer.scene}
            scale={isMobile ? 0.7 : 0.75}
            position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
            rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>

  );
};

// Computer Canvas
const ComputersCanvas = () => {
  // state to check mobile
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is Mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    // handle screen size change
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event?.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      {/* Canvas Loader show on fallback */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Show Model */}
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Preload all */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
