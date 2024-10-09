import { ModelStatProps } from './ModelStat.props';
import styles from './ModelStat.module.css';
import EyeIcon from './eye.svg';
import BurnIcon from './burn.svg';
import CoinIcon from './coin.svg';
import { Htag } from '../../Common/Htag/Htag';


export const ModelStat = ({ type, stat }: ModelStatProps): JSX.Element => {
    return (
        <div className={styles.modelStat}>
            {
                type === 'eye' ?
                    <EyeIcon className={styles.eyeIcon} />
                : type === 'burn' ?
                    <BurnIcon className={styles.burnIcon} />
                : 
                    <CoinIcon className={styles.eyeIcon} />
            }
            <Htag tag='m' className={styles.statText}>
                {stat}
            </Htag>
        </div>
    );
};
