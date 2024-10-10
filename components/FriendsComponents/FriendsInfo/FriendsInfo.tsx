import styles from './FriendsInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { copyToClipboard } from '../../../helpers/clipboard.helper';
import { ModelStat } from '../../ModelComponents/ModelStat/ModelStat';
import { Button } from '../../Common/Button/Button';
import { shareLink } from '../../../helpers/share.helper';
import { numFormat } from '../../../helpers/format.helper';


export const FriendsInfo = (): JSX.Element => {
    const { router, tgUser, refs } = useSetup();

    return (
        <div className={styles.friendsInfo}>
            <div className={styles.statsDiv}>
                <ModelStat type='refs' stat={numFormat(refs.result.referral_info.referral_count)}
                    tooltip={setLocale(tgUser?.language_code).tooltips.total_referrals} />
                <ModelStat type='coin' stat={numFormat(refs.result.referral_info.referrals_total_coins)}
                    tooltip={setLocale(tgUser?.language_code).tooltips.coins_from_referrals} />
            </div>
            <div className={styles.friendsButtonsDiv}>
                <Button text={setLocale(tgUser?.language_code).copy_link}
                    onClick={() => copyToClipboard(refs.result.referral_link)} />
                <Button text={setLocale(tgUser?.language_code).share_link}
                    onClick={() =>
                        shareLink(refs.result.referral_link, setLocale(tgUser?.language_code).share_text, router)} />
            </div>
        </div>
    );
};
