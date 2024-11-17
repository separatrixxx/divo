import { ModelStatProps } from './ModelStat.props';
import styles from './ModelStat.module.css';
import EyeIcon from './eye.svg';
import BurnIcon from './burn.svg';
import CoinIcon from './coin.svg';
import RefsIcon from './profile.svg';
import { Htag } from '../../Common/Htag/Htag';
import { useEffect, useRef, useState } from 'react';
import { useSetup } from '../../../hooks/useSetup';
import cn from 'classnames';


export const ModelStat = ({ type, stat, tooltip, isActive, tag }: ModelStatProps): JSX.Element => {
    const { webApp } = useSetup();

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

    let StatIcon = EyeIcon;

    if (type === 'burn') {
        StatIcon = BurnIcon;
    } else if (type === 'coin') {
        StatIcon = CoinIcon;
    } else if (type === 'refs') {
        StatIcon = RefsIcon;
    } else {
        StatIcon = EyeIcon;
    }

    return (
        <div className={cn(styles.modelStat, {
            [styles.active]: isActive,
            [styles.modelStatS]: tag === 's',
            [styles.noIcon]: !type,
            [styles.weba]: webApp?.platform === 'weba',
        })} onClick={toggleTooltip} onMouseEnter={toggleTooltip} onMouseLeave={() => setTooltipVisible(false)}>
            <StatIcon className={cn(styles.statIcon, {
                [styles.statIconS]: tag === 's',
            })} />
            <Htag tag={tag ? tag : 'm'} className={styles.statText}>
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
