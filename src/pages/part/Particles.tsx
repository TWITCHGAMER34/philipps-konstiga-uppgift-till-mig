import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from 'react';
import { Container } from '@tsparticles/engine';

export default function particles() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async engine => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    if (!init) return null;
    return (
        <Particles
            id='footer-particles'
            particlesLoaded={particlesLoaded}
            options={{
                fullScreen: true,
                fpsLimit: 120,
                particles: {
                    color: {
                        value: '#ffffff',
                    },
                    move: {
                        direction: 'top',
                        enable: true,
                        speed: 0.5,
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 500,
                    },
                    opacity: {
                        value: 0.6,
                        animation: {
                            enable: true,
                            speed: 2
                        },
                    },
                    shape: {
                        type: 'triangle',
                    },
                    size: {
                        value: {min: 1, max: 3},
                    },
                },
            }}
        />
    );
}