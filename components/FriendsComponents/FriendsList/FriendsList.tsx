import styles from './FriendsList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { FriendsItem } from '../FriendsItem/FriendsItem';


export const FriendsList = (): JSX.Element => {
    const { refs } = useSetup();

    return (
        <div className={styles.friendsList}>
            {refs.result.referral_info.referrals.map(r => (
                <FriendsItem key={r.id} id={r.id} />
            ))}
        </div>
    );
};
