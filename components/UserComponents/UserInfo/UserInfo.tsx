import styles from './UserInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { copyToClipboard } from '../../../helpers/clipboard.helper';
import Image from 'next/image';


export const UserInfo = (): JSX.Element => {
    const { tgUser, user } = useSetup();

    return (
        <div className={styles.userInfo}>
            <Image className={styles.logo} draggable='false'
                loader={() => '/logo.svg'}
                src='/logo.svg'
                alt='logo image'
                width={1}
                height={1}
                unoptimized={true}
            />
            <Htag tag='xl' className={styles.coins}>
                {user.result.coins + ' DIVO'}
            </Htag>
            <Htag tag='s' className={styles.userId} onClick={() => copyToClipboard(String(user.result.user_id))}>
                {user.result.user_id}
            </Htag>
            <Htag tag='m'>
                {setLocale(tgUser?.language_code).votes_left + ': ' + user.result.remaining_votes + '/' + user.result.total_available_votes}
            </Htag>
        </div>
    );
};
