import styles from './FriendsList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { FriendsItem } from '../FriendsItem/FriendsItem';


export const FriendsList = (): JSX.Element => {
    const { user, refs } = useSetup();

    const { referrals } = refs.result.referral_info;
    const moneyFriendsCount = user.result.money_friends;
    const firstFriends = referrals.slice(0, moneyFriendsCount);
    const otherFriends = referrals.slice(moneyFriendsCount);

    return (
        <div className={styles.friendsList}>
            {firstFriends.map(r => (
                <FriendsItem key={r.id} id={r.id} />
            ))}
            {otherFriends.map(r => (
                <FriendsItem key={r.id} id={r.id} isVote={true} />
            ))}
        </div>
    );
};
