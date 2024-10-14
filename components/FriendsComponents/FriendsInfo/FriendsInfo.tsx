import styles from './FriendsInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { copyToClipboard } from '../../../helpers/clipboard.helper';
import { ModelStat } from '../../ModelComponents/ModelStat/ModelStat';
import { Button } from '../../Common/Button/Button';
import { shareLink } from '../../../helpers/share.helper';
import { numFormat } from '../../../helpers/format.helper';
import { Spinner } from '../../Common/Spinner/Spinner';
import { FriendsList } from '../FriendsList/FriendsList';


export const FriendsInfo = (): JSX.Element => {
    const { webApp, tgUser, user, refs } = useSetup();

    if (refs.status !== 'success') {
        return <Spinner />
    }

    return (
        <div className={styles.friendsInfo}>
            <div className={styles.friendsButtonsDiv}>
                <Button text={setLocale(tgUser?.language_code).copy_link}
                    onClick={() => copyToClipboard(refs.result.referral_link)} />
                <Button text={setLocale(tgUser?.language_code).share_link}
                    onClick={() =>
                        shareLink(refs.result.referral_link, setLocale(tgUser?.language_code).share_text, webApp)} />
            </div>
            <div className={styles.statsDiv}>
                <ModelStat type='refs' stat={numFormat(refs.result.referral_info.referral_count)}
                    tooltip={setLocale(tgUser?.language_code).tooltips.total_friends} />
                <ModelStat type='burn' stat={user.result.votes_for_ref}
                    tooltip={setLocale(tgUser?.language_code).tooltips.picks_from_referrals} />
                <ModelStat type='burn' stat={user.result.votes_for_task}
                    tooltip={setLocale(tgUser?.language_code).tooltips.picks_from_tasks} />
            </div>
            <FriendsList />
        </div>
    );
};
