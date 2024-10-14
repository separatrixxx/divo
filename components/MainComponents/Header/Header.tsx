import styles from './Header.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { ModelStat } from '../../ModelComponents/ModelStat/ModelStat';
import { setLocale } from '../../../helpers/locale.helper';
import { numFormat } from '../../../helpers/format.helper';
import InfoIcon from './info.svg';
import XIcon from './x_icon.svg';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';
import cn from 'classnames';


export const Header = (): JSX.Element => {
    const { router, tgUser, user } = useSetup();

    return (
        <header className={styles.header}>
            <div className={styles.headerDiv}>
                <Htag tag='s'>
                    {numFormat(user.result.coins) + ' ' + setLocale(tgUser?.language_code).token}
                </Htag>
            </div>
            <XIcon className={styles.xIcon} />
            <div className={cn(styles.headerDiv, styles.headerDiv2)}>
                <ModelStat type='burn' stat={user.result.remaining_votes}
                    tooltip={setLocale(tgUser?.language_code).tooltips.remaining_votes} tag='s' />
                <Link href='/info' className={styles.infoIcon}>
                    <InfoIcon />
                </Link>
            </div>
        </header>
    );
};
