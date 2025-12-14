/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const StarField = ({ count = 6000 }) => {
    const mesh = useRef();
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 100;
            const y = (Math.random() - 0.5) * 100;
            const z = (Math.random() - 0.5) * 100;

            const size = Math.random();
            const speed = Math.random();

            temp.push({ x, y, z, size, speed, t: Math.random() * 100 });
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;

        particles.forEach((particle, i) => {
            const t = state.clock.getElapsedTime() * particle.speed * 2 + particle.t;
            const s = (Math.sin(t) * 0.5 + 0.5) * particle.size * 0.5;

            dummy.position.set(particle.x, particle.y, particle.z);
            dummy.scale.set(s, s, s);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });

        mesh.current.instanceMatrix.needsUpdate = true;
        mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        mesh.current.rotation.z = state.clock.getElapsedTime() * 0.01;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereGeometry args={[0.2, 8, 8]} />
            {/* High color values to trigger Bloom */}
            <meshBasicMaterial color={[1.5, 1.5, 1.5]} toneMapped={false} transparent opacity={0.8} />
        </instancedMesh>
    );
};



const GalaxyBackground = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 30], fov: 60 }}
            style={{ background: '#000' }}
            gl={{ antialias: false }}
        >
            <color attach="background" args={['#050505']} />
            <fog attach="fog" args={['#050505', 10, 60]} />

            <StarField />


            <EffectComposer disableNormalPass>
                <Bloom luminanceThreshold={0.1} mipmapBlur intensity={1.5} radius={0.6} />
            </EffectComposer>
        </Canvas>
    );
};

export default GalaxyBackground;
