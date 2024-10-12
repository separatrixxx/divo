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
                hue: { min: 0, max: 360 },
                delay: { min: 15, max: 30 },
                acceleration: 1.05,
                friction: 0.98,
                gravity: 1.5,
                intensity: 30,
                particles: 50,
                explosion: 5,
                autoresize: true,
                brightness: { min: 50, max: 80 },
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

                fireworks.updateOptions({ intensity: 30 });

                intensityTimeout1 = setTimeout(() => {
                    fireworks.updateOptions({ intensity: 20 });
                }, 1200);

                intensityTimeout2 = setTimeout(() => {
                    fireworks.updateOptions({ intensity: 10 });
                }, 1800);

                intensityTimeout3 = setTimeout(() => {
                    fireworks.updateOptions({ intensity: 7 });
                }, 2000);

                intensityTimeout4 = setTimeout(() => {
                    fireworks.updateOptions({ intensity: 5 });
                }, 2200);

                intensityTimeout4 = setTimeout(() => {
                    fireworks.updateOptions({ intensity: 2 });
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
