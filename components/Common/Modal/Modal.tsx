import { ModalProps } from './Modal.props';
import styles from './Modal.module.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import cn from 'classnames';


export const Modal = ({ isActive, setIsActive, children }: ModalProps): JSX.Element => {
    const variants = {
        visible: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
        }
    };

    const variantsModal = {
        visible: {
            transform: 'scale(1)',
        },
        hidden: {
            transform: 'scale(0.5)',
        }
    };

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isActive]);

    return (
        <motion.div className={cn(styles.modal, {
            [styles.active]: isActive,
        })} onClick={() => setIsActive(false)}
            variants={variants}
            initial={isActive ? 'visible' : 'hidden'}
            transition={{ duration: 0.15 }}
            animate={isActive ? 'visible' : 'hidden'}>
            <motion.div className={styles.modalContent} onClick={e => e.stopPropagation()}
                variants={variantsModal}
                initial={isActive ? 'visible' : 'hidden'}
                transition={{ duration: 0.15 }}
                animate={isActive ? 'visible' : 'hidden'}>
                {children}
            </motion.div>
        </motion.div>
    );
};
