import styles from './Header.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { numFormat } from '../../../helpers/format.helper';
import BurnIcon from './burn.svg';
import cn from 'classnames';


export const Header = (): JSX.Element => {
    const { webApp, tgUser, user } = useSetup();

    return (
        <header className={styles.header}>
            <div className={styles.headerDiv}>
                <Htag tag='xs' className={styles.title}>
                    {setLocale(tgUser?.language_code).balance}
                </Htag>
                <Htag tag='m' className={styles.text}>
                    {numFormat(user.result.coins) + ' ' + setLocale(tgUser?.language_code).token}
                </Htag>
            </div>
            <Htag tag='m' className={cn(styles.text, styles.burnText)}>
                {numFormat(user.result.remaining_votes) + '/' + numFormat(user.result.total_available_votes)}
                <BurnIcon />
            </Htag>
            <div className={cn(styles.headerDiv, styles.rightHeaderDiv)}>
                <Htag tag='xs' className={styles.title}>
                    {setLocale(tgUser?.language_code).balance}
                </Htag>
                <Htag tag='m' className={styles.text}>
                    {numFormat(user.result.coins) + ' ' + setLocale(tgUser?.language_code).token}
                </Htag>
            </div>
        </header>
    );
};
