import styles from './Fireworks.module.css';
import { useEffect, useRef } from 'react';
import Fireworks from 'fireworks-js';


export const FireworksComponents = (): JSX.Element => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let startTimeout: NodeJS.Timeout;
        let stopTimeout: NodeJS.Timeout;
        let intensityTimeout1: NodeJS.Timeout;
        let intensityTimeout2: NodeJS.Timeout;
        let intensityTimeout3: NodeJS.Timeout;
        let intensityTimeout4: NodeJS.Timeout;

        const container = containerRef.current;

        if (container) {
            const fireworks = new Fireworks(container, {
                rocketsPoint: { min: 50, max: 10 },
                hue: { min: 12, max: 20 },
                delay: { min: 15, max: 30 },
                acceleration: 1.03,
                friction: 0.98,
                gravity: 1.7,
                intensity: 50,
                particles: 55,
                explosion: 6,
                autoresize: true,
                brightness: { min: 30, max: 80 },
                decay: { min: 0.015, max: 0.03 },
                boundaries: {
                    x: 50,
                    y: 50,
                    width: container.clientWidth,
                    height: container.clientHeight,
                },
            });

            startTimeout = setTimeout(() => {
                fireworks.start();

                fireworks.updateOptions({ intensity: 50 });

                intensityTimeout1 = setTimeout(() => {
                    fireworks.updateOptions({ intensity: 30 });
                }, 1200);

                intensityTimeout2 = setTimeout(() => {
                    fireworks.updateOptions({ intensity: 20 });
                }, 1800);

                intensityTimeout3 = setTimeout(() => {
                    fireworks.updateOptions({ intensity: 5 });
                }, 2000);

                intensityTimeout4 = setTimeout(() => {
                    fireworks.updateOptions({ intensity: 2 });
                }, 2200);

                intensityTimeout4 = setTimeout(() => {
                    fireworks.updateOptions({ intensity: 1 });
                }, 2400);
            }, 2000);

            stopTimeout = setTimeout(() => {
                fireworks.stop();
            }, 5700);

            return () => {
                clearTimeout(startTimeout);
                clearTimeout(stopTimeout);
                clearTimeout(intensityTimeout1);
                clearTimeout(intensityTimeout2);
                clearTimeout(intensityTimeout3);
                clearTimeout(intensityTimeout4);

                fireworks.stop();
            };
        }
    }, []);

    return <div ref={containerRef} className={styles.fireworks} />;
};
