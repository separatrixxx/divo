import { ModelPhotoProps } from './ModelPhoto.props';
import styles from './ModelPhoto.module.css';
import Image from 'next/image';
import { useState } from 'react';


export const ModelPhoto = ({ id, photo }: ModelPhotoProps): JSX.Element => {
    const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });

    const handleMove = (dx: number, dy: number) => {
        const rotateX = -(dy / window.innerHeight) * 360;
        const rotateY = (dx / window.innerWidth) * 360;
        setRotation((prev) => ({
            rotateX: prev.rotateX + rotateX,
            rotateY: prev.rotateY + rotateY,
        }));
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isDragging) {
            handleMove(e.movementX, e.movementY);
        }
    };

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setRotation({ rotateX: 0, rotateY: 0 });
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchStart({
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
        });
        setIsDragging(true);
        document.body.style.overflow = 'hidden';
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (isDragging) {
            const dx = e.touches[0].clientX - touchStart.x;
            const dy = e.touches[0].clientY - touchStart.y;
            handleMove(dx, dy);
            setTouchStart({
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
            });
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        setRotation({ rotateX: 0, rotateY: 0 });
        document.body.style.overflow = '';
    };

    return (
        <div className={styles.modelPhoto}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
            <div className={styles.photoDiv} style={{
                    transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
                }}>
                <Image className={styles.photo}
                    draggable='false'
                    loader={() => photo}
                    src={photo}
                    alt={id + ' image'}
                    width={1}
                    height={1}
                    unoptimized={true}
                    priority
                />
            </div>
        </div>
    );
};
