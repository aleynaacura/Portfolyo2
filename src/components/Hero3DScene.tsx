import { useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Environment, ContactShadows, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function LowPolyCharacter() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.1;
    }
  });

  return (
    <group ref={groupRef} dispose={null}>
      {/* Head */}
      <mesh position={[0, 1.6, 0]} castShadow>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color="#fb923c" flatShading roughness={0.4} metalness={0.3} />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.18, 1.65, 0.4]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#0c0c0f" emissive="#dc2626" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.18, 1.65, 0.4]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#0c0c0f" emissive="#dc2626" emissiveIntensity={0.5} />
      </mesh>
      {/* Body */}
      <mesh position={[0, 0.7, 0]} castShadow>
        <coneGeometry args={[0.55, 1.4, 6]} />
        <meshStandardMaterial color="#ea580c" flatShading roughness={0.5} metalness={0.2} />
      </mesh>
      {/* Shoulders */}
      <mesh position={[-0.65, 1.1, 0]} castShadow>
        <octahedronGeometry args={[0.28, 0]} />
        <meshStandardMaterial color="#c2410c" flatShading roughness={0.4} metalness={0.3} />
      </mesh>
      <mesh position={[0.65, 1.1, 0]} castShadow>
        <octahedronGeometry args={[0.28, 0]} />
        <meshStandardMaterial color="#c2410c" flatShading roughness={0.4} metalness={0.3} />
      </mesh>
      {/* Arms */}
      <mesh position={[-0.7, 0.5, 0]} rotation={[0, 0, 0.3]} castShadow>
        <capsuleGeometry args={[0.12, 0.6, 4, 8]} />
        <meshStandardMaterial color="#9a3412" flatShading roughness={0.5} />
      </mesh>
      <mesh position={[0.7, 0.5, 0]} rotation={[0, 0, -0.3]} castShadow>
        <capsuleGeometry args={[0.12, 0.6, 4, 8]} />
        <meshStandardMaterial color="#9a3412" flatShading roughness={0.5} />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.25, -0.3, 0]} castShadow>
        <capsuleGeometry args={[0.18, 0.7, 4, 8]} />
        <meshStandardMaterial color="#7c2d12" flatShading roughness={0.5} />
      </mesh>
      <mesh position={[0.25, -0.3, 0]} castShadow>
        <capsuleGeometry args={[0.18, 0.7, 4, 8]} />
        <meshStandardMaterial color="#7c2d12" flatShading roughness={0.5} />
      </mesh>
      {/* Weapon/Staff */}
      <mesh position={[0.95, 0.8, 0.2]} rotation={[0.2, 0, -0.1]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 1.5, 6]} />
        <meshStandardMaterial color="#26262a" flatShading roughness={0.3} metalness={0.6} />
      </mesh>
      <mesh position={[0.95, 1.6, 0.2]} castShadow>
        <octahedronGeometry args={[0.2, 0]} />
        <meshStandardMaterial color="#ef4444" emissive="#dc2626" emissiveIntensity={0.8} flatShading roughness={0.2} metalness={0.5} />
      </mesh>
    </group>
  );
}

function FloatingRocks() {
  const rocksRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (rocksRef.current) {
      rocksRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  const rocks = [
    { pos: [-3, 1.5, -2], scale: 0.3, color: '#9a3412' },
    { pos: [3, 2, -1], scale: 0.25, color: '#c2410c' },
    { pos: [-2.5, -1, 1], scale: 0.2, color: '#7c2d12' },
    { pos: [2.8, -0.5, 1.5], scale: 0.35, color: '#ea580c' },
    { pos: [0, 3, -3], scale: 0.15, color: '#fb923c' },
    { pos: [-3.5, 0, 0], scale: 0.18, color: '#dc2626' },
  ];

  return (
    <group ref={rocksRef}>
      {rocks.map((rock, i) => (
        <Float key={i} speed={1.5 + i * 0.2} rotationIntensity={2} floatIntensity={1.5}>
          <mesh position={rock.pos as [number, number, number]} scale={rock.scale} castShadow>
            <dodecahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color={rock.color} flatShading roughness={0.6} metalness={0.2} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function CentralOrb() {
  const orbRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      orbRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={orbRef} position={[0, 0.5, 0]} scale={0.6}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#f97316"
          emissive="#dc2626"
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.8}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function MouseLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  const { mouse } = useThree();

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x = mouse.x * 5;
      lightRef.current.position.y = mouse.y * 3 + 1;
    }
  });

  return <pointLight ref={lightRef} position={[0, 2, 3]} intensity={2} color="#fb923c" distance={10} />;
}

function SceneContents() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 5]} intensity={1} castShadow color="#fb923c" />
      <pointLight position={[-5, 3, -5]} intensity={1.5} color="#dc2626" distance={15} />
      <MouseLight />
      <Suspense fallback={null}>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <LowPolyCharacter />
        </Float>
        <CentralOrb />
        <FloatingRocks />
        <Environment preset="sunset" />
        <ContactShadows position={[0, -1.2, 0]} opacity={0.5} scale={10} blur={2} far={4} color="#dc2626" />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
      />
    </>
  );
}

export default function Hero3DScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <SceneContents />
    </Canvas>
  );
}
