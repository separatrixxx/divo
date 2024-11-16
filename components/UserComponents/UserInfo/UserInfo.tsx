import styles from './UserInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import Image from 'next/image';
import { ModelStat } from '../../ModelComponents/ModelStat/ModelStat';
import { CoinsInfoList } from '../CoinsInfoList/CoinsInfoList';
import { Spinner } from '../../Common/Spinner/Spinner';
import LeaderboardIcon from './leaderboard.svg';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../../Common/Button/Button';
import cn from 'classnames';
import { DivositBlock } from '../DivositBlock/DivositBlock';


export const UserInfo = (): JSX.Element => {
    const { router, webApp, tgUser, user } = useSetup();

    const [type, setType] = useState<'coins' | 'divosit'>(router.query.type as 'coins' || 'coins');

    const setName = () => {
        if (tgUser?.username) {
            return tgUser?.username;
        } else if (tgUser?.first_name && tgUser?.last_name) {
            return tgUser?.first_name + ' ' + tgUser?.last_name;
        }

        return tgUser?.first_name;
    }

    if (user.status !== 'success') {
        return <Spinner />
    }

    return (
        <div className={styles.userInfo}>
            {
                user.result.user_status !== 'user' ?
                    <Link href='/leaderboard' className={cn(styles.leaderboardLink, {
                        [styles.weba]: webApp?.platform === 'weba',
                    })} aria-label='leaderboard link'>
                        <LeaderboardIcon />
                    </Link>
                : <></>
            }
            <Htag tag='m' className={styles.username}>
                {setName()}
            </Htag>
            <Image className={styles.userImage} draggable='false'
                loader={() => tgUser?.photo_url || '/logo.svg'}
                src={tgUser?.photo_url || '/logo.svg'}
                alt='logo image'
                width={1}
                height={1}
                unoptimized={true}
            />
            <Htag tag='xl' className={styles.coins}>
                {user.result.coins.toLocaleString('en-US') + ' ' + setLocale(tgUser?.language_code).token}
            </Htag>
            <div className={styles.changeTypeDiv}>
                <Button text={setLocale(tgUser?.language_code).transactions} isActive={type === 'coins'}
                    onClick={() => setType('coins')} />
                <Button text={setLocale(tgUser?.language_code).divosit} isActive={type === 'divosit'}
                    onClick={() => setType('divosit')} />
            </div>
            <Htag tag='xl' className={styles.coinsInfoTitle}>
                {setLocale(tgUser?.language_code)[type === 'coins' ? 'transactions' : 'divosit']}
            </Htag>
            {
                type === 'divosit' ?
                    <Htag tag='m' className={styles.divositInfo}>
                        {setLocale(tgUser?.language_code).divosit_info}
                    </Htag>
                : <></>
            }
            {
                type === 'coins' ?
                    <CoinsInfoList />
                :
                    <DivositBlock />
            }
        </div>
    );
};
