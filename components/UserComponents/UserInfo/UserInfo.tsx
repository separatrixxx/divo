import styles from './UserInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { copyToClipboard } from '../../../helpers/clipboard.helper';
import Image from 'next/image';
import { ModelStat } from '../../ModelComponents/ModelStat/ModelStat';
import { Button } from '../../Common/Button/Button';
import { shareLink } from '../../../helpers/share.helper';
import { CoinsInfoList } from '../CoinsInfoList/CoinsInfoList';
import { numFormat } from '../../../helpers/format.helper';


export const UserInfo = (): JSX.Element => {
    const { router, tgUser, user, refs } = useSetup();

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
                {user.result.coins + ' ' + setLocale(tgUser?.language_code).token}
            </Htag>
            <Htag tag='s' className={styles.userId} onClick={() => copyToClipboard(String(user.result.user_id))}>
                {user.result.user_id}
            </Htag>
            <ModelStat type='burn' stat={user.result.remaining_votes + '/' + user.result.total_available_votes}
                tooltip={setLocale(tgUser?.language_code).tooltips.remaining_votes} />
            <hr className={styles.divider} />
            <Htag tag='xl' className={styles.refsTitle}>
                {setLocale(tgUser?.language_code).referrals}
            </Htag>
            <div className={styles.statsDiv}>
                <ModelStat type='refs' stat={numFormat(refs.result.referral_info.referral_count)}
                    tooltip={setLocale(tgUser?.language_code).tooltips.total_referrals} />
                <ModelStat type='coin' stat={numFormat(refs.result.referral_info.referrals_total_coins)}
                    tooltip={setLocale(tgUser?.language_code).tooltips.coins_from_referrals} />
            </div>
            <div className={styles.refsButtonsDiv}>
                <Button text={setLocale(tgUser?.language_code).copy_link}
                    onClick={() => copyToClipboard(refs.result.referral_link)} />
                <Button text={setLocale(tgUser?.language_code).share_link}
                    onClick={() =>
                        shareLink(refs.result.referral_link, setLocale(tgUser?.language_code).share_text, router)} />
            </div>
            <hr className={styles.divider} />
            <Htag tag='xl' className={styles.refsTitle}>
                {setLocale(tgUser?.language_code).coins_info}
            </Htag>
            <CoinsInfoList />
        </div>
    );
};
