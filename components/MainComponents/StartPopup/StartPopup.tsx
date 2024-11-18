import { StartPopupProps } from './StartPopup.props';
import styles from './StartPopup.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import Sparks from './sparks.svg';
import Logo from './logo.svg';
import { numFormat } from '../../../helpers/format.helper';
import { Button } from '../../Common/Button/Button';
import cn from 'classnames';


export const StartPopup = ({ minutesPassed, setIsActive }: StartPopupProps): JSX.Element => {
    const { tgUser, user } = useSetup();

    const depositEarned = (user.result.daily_stake_income / 1440 * minutesPassed).toFixed(5);

    return (
        <div className={styles.startPopup}>
            <Sparks className={styles.sparks} />
            <Htag tag='xxl' className={styles.welcomeBackText}>
                {setLocale(tgUser?.language_code).welcome_back + '!'}
            </Htag>
            <Htag tag='s' className={styles.popupText}>
                {setLocale(tgUser?.language_code).your_deposit_earned_you.replace('$$$', String(depositEarned))
                    + ' ' + setLocale(tgUser?.language_code).token}
            </Htag>
            {
                user.result.daily_stake_income &&
                <div className={styles.popupDiv}>
                    <Htag tag='xs' className={styles.popupText}>
                        {setLocale(tgUser?.language_code).profit_per_day}
                    </Htag>
                    <Htag tag='s' className={cn(styles.popupText, styles.gridTextS)}>
                        <Logo className={styles.logoS} />
                        <span>{'+' + numFormat(user.result.daily_stake_income)}</span>
                        {setLocale(tgUser?.language_code).token}
                    </Htag>
                </div>
            }
            <Htag tag='xl' className={cn(styles.popupText, styles.gridTextM)}>
                <Logo className={styles.logoM} />
                <span>{numFormat(user.result.coins)}</span>
                {setLocale(tgUser?.language_code).token}
            </Htag>
            <Button className={styles.popupButton} text={setLocale(tgUser?.language_code).great + '!'}
                isPopup={true} onClick={() => setIsActive(false)} />
        </div>
    );
};
