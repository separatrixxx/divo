import { CoinProps } from './Coin.props';
import { Htag } from '../Htag/Htag';
import styles from './Coin.module.css';
import CoinIcon from './logo.svg';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import cn from 'classnames';


export const Coin = ({ isSmall }: CoinProps): JSX.Element => {
    const { tgUser, user } = useSetup();

    const seconds = 24 * 60 * 6;
    const coins = (user.result.daily_stake_income / seconds).toFixed(5);

    return (
        <div className={cn(styles.coin, {
            [styles.smallCoin]: isSmall,
        })}>
            <CoinIcon />
            <Htag tag='xs'>
                {`+${coins} ${setLocale(tgUser?.language_code).token}`}
            </Htag>
        </div>
    );
};