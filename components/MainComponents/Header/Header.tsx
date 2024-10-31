import styles from './Header.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { ModelStat } from '../../ModelComponents/ModelStat/ModelStat';
import { setLocale } from '../../../helpers/locale.helper';
import { numFormat } from '../../../helpers/format.helper';
import InfoIcon from './info.svg';
import IncreaseIcon from './increase.svg';
import DecreaseIcon from './decrease.svg';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';
import { ToastSuccess } from '../../Common/Toast/Toast';
import cn from 'classnames';


export const Header = (): JSX.Element => {
    const { webApp, tgUser, user } = useSetup();

    const IconComponent = user.result.blocked_in_stake ? IncreaseIcon : DecreaseIcon;

    return (
        <header className={styles.header}>
            <div className={styles.headerDiv}>
                <Htag tag='s' className={styles.balance}>
                    {numFormat(user.result.coins) + ' ' + setLocale(tgUser?.language_code).token}
                </Htag>
            </div>
            <div className={styles.iconDiv}>
                <IconComponent className={cn(styles.divositIcon, {
                    [styles.webaIcon]: webApp?.platform === 'weba',
                    [styles.goodIcon]: user.result.blocked_in_stake,
                    [styles.badIcon]: !user.result.blocked_in_stake,
                })} onClick={() => {
                    ToastSuccess(setLocale(tgUser?.language_code).header_divosit[
                        user.result.blocked_in_stake ? 'good' : 'bad'
                    ].replace('$$$', numFormat(user.result.blocked_in_stake)));
                }} />
                <ModelStat stat={user.result.remaining_votes + '/' + user.result.total_available_votes}
                    tooltip={setLocale(tgUser?.language_code).tooltips.remaining_votes} tag='s' />
            </div>
            <div className={cn(styles.headerDiv, styles.rightDiv)}>
                <Link href={{ pathname: '/profile', query: { type: 'divosit' } }}
                    className={cn(styles.balanceLink, {
                        [styles.weba]: webApp?.platform === 'weba',
                    })}>
                    <Htag tag='s' className={cn(styles.balance, {
                        [styles.balanceGreen]: user.result.blocked_in_stake,
                        [styles.balanceRed]: !user.result.blocked_in_stake,
                    })}>
                        {numFormat(user.result.daily_stake_income) + ' / ' + setLocale(tgUser?.language_code).day.toLowerCase()}
                    </Htag>
                </Link>
                <Link href='/info' className={cn(styles.infoLink, {
                    [styles.webaInfo]: webApp?.platform === 'weba',
                })} aria-label='info link'>
                    <InfoIcon />
                </Link>
            </div>
        </header>
    );
};
