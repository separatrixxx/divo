import styles from './FriendsInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
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
                <Button text={setLocale(tgUser?.language_code).share_link}
                    onClick={() =>
                        shareLink(refs.result.referral_link, setLocale('en').share_text, webApp)} />
                <Button isCopy={true}
                    onClick={() => copyToClipboard(refs.result.referral_link)} />
            </div>
            <div className={styles.statsDiv}>
                <ModelStat type='refs' stat={numFormat(refs.result.referral_info.referral_count)}
                    tooltip={setLocale(tgUser?.language_code).tooltips.total_friends} />
                <ModelStat type='coin' stat={numFormat(user.result.money_friends * 1000)}
                    tooltip={setLocale(tgUser?.language_code).tooltips.coins_from_referrals} />
                <ModelStat type='burn' stat={user.result.votes_for_task}
                    tooltip={setLocale(tgUser?.language_code).tooltips.picks_from_tasks} />
            </div>
            <FriendsList />
        </div>
    );
};
