import styles from './UserInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import Image from 'next/image';
import { ModelStat } from '../../ModelComponents/ModelStat/ModelStat';
import { CoinsInfoList } from '../CoinsInfoList/CoinsInfoList';


export const UserInfo = (): JSX.Element => {
    const { tgUser, user } = useSetup();

    return (
        <div className={styles.userInfo}>
            <Htag tag='m' className={styles.username}>
                {tgUser?.username}
            </Htag>
            <Image className={styles.logo} draggable='false'
                loader={() => '/logo.svg'}
                src='/logo.svg'
                alt='logo image'
                width={1}
                height={1}
                unoptimized={true}
            />
            <Htag tag='xl' className={styles.coins}>
                {user.result.coins.toLocaleString('en-US') + ' ' + setLocale(tgUser?.language_code).token}
            </Htag>
            <ModelStat type='burn' stat={user.result.remaining_votes + '/' + user.result.total_available_votes}
                tooltip={setLocale(tgUser?.language_code).tooltips.remaining_votes} />
            <span className={styles.divider} />
            <Htag tag='xl' className={styles.coinsInfoTitle}>
                {setLocale(tgUser?.language_code).coins_info}
            </Htag>
            <CoinsInfoList />
        </div>
    );
};
