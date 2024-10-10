import { ModelStatProps } from './ModelStat.props';
import styles from './ModelStat.module.css';
import EyeIcon from './eye.svg';
import BurnIcon from './burn.svg';
import CoinIcon from './coin.svg';
import RefsIcon from './profile.svg';
import { Htag } from '../../Common/Htag/Htag';
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';


export const ModelStat = ({ type, stat, tooltip, isActive }: ModelStatProps): JSX.Element => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const toggleTooltip = () => {
        setTooltipVisible(!isTooltipVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
                setTooltipVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={cn(styles.modelStat, {
            [styles.active]: isActive,
        })} onClick={toggleTooltip} onMouseEnter={toggleTooltip} onMouseLeave={() => setTooltipVisible(false)}>
            {
                type === 'eye' ?
                    <EyeIcon className={styles.eyeIcon} />
                    : type === 'burn' ?
                        <BurnIcon className={styles.burnIcon} />
                        : type === 'coin' ?
                            <CoinIcon className={styles.eyeIcon} />
                            :
                            <RefsIcon className={styles.burnIcon} />
            }
            <Htag tag='m' className={styles.statText}>
                {stat}
            </Htag>
            {
                isTooltipVisible ?
                    <div ref={tooltipRef} className={styles.tooltip}>
                        <Htag tag='xs'>
                            {tooltip}
                        </Htag>
                    </div>
                : <></>
            }
        </div>
    );
};
