import styles from './UserInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import Image from 'next/image';
import { CoinsInfoList } from '../CoinsInfoList/CoinsInfoList';
import { Spinner } from '../../Common/Spinner/Spinner';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../../Common/Button/Button';
import { DivositBlock } from '../DivositBlock/DivositBlock';
import { numFormat } from '../../../helpers/format.helper';
import InfoIcon from './info.svg';
import Marat from './marat.svg';
import { Coin } from '../../Common/Coin/Coin';
import cn from 'classnames';


export const UserInfo = (): JSX.Element => {
    const { router, webApp, tgUser, user } = useSetup();

    const [type, setType] = useState<'coins' | 'divosit'>(router.query.type as 'coins' || 'coins');

    const [showCoin, setShowCoin] = useState<boolean>(false);
    const animationInterval  = 10;

    const [isMarat, setIsMarat] = useState<boolean>(false);
    const [maratCount, setMaratCount] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowCoin(true);
            setTimeout(() => setShowCoin(false), 5000);
        }, animationInterval * 1000);

        return () => clearInterval(interval);
    }, [animationInterval]);

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
            <div className={styles.usernameDiv}>
                <Image className={styles.userImage} draggable='false'
                    loader={() => tgUser?.photo_url || '/logo.svg'}
                    src={tgUser?.photo_url || '/logo.svg'}
                    alt='logo image'
                    width={1}
                    height={1}
                    unoptimized={true}
                />
                <Htag tag='m' className={styles.username}>
                    {setName()}
                </Htag>
                <Link href='/info' className={cn(styles.infoLink, {
                    [styles.weba]: webApp?.platform === 'weba',
                })} aria-label='info link'>
                    <InfoIcon />
                </Link>
            </div>
            <div className={styles.coinsDiv}>
                <Htag tag={user.result.coins > 1000000 ? 'xxl' : 'xxxl'} className={styles.coins}>
                    <span>{user.result.coins.toLocaleString('ru-RU') + ' '}</span>
                    {setLocale(tgUser?.language_code).token}
                </Htag>
                <Htag tag='s' className={styles.coinsPerDay}>
                    <span>{numFormat(user.result.daily_stake_income) + ' '}</span>
                    {setLocale(tgUser?.language_code).token + ' / ' + (setLocale(tgUser?.language_code).day).toLowerCase()}
                </Htag>
                {showCoin && user.result.daily_stake_income > 0 && <Coin />}
            </div>
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
