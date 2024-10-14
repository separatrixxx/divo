import { ByBlockProps } from './ByBlock.props';
import styles from './ByBlock.module.css';
import { Htag } from '../Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import cn from 'classnames';


export const ByBlock = ({ color }: ByBlockProps): JSX.Element => {  
    const { webApp } = useSetup();
 
    return (
        <div className={styles.byBlock}>
            <a target='_blank' rel="noreferrer" href='http://banana.codes/' aria-label="banana codes">
                <Htag tag='s' className={cn(styles.byBanana, {
                    [styles.darkColor]: color === 'dark',
                    [styles.weba]: webApp?.platform === 'weba',
                })}>
                    by 🍌 codes
                </Htag>
            </a>
        </div>
    );
};
