import { FriendsItemProps } from './FriendsItem.props';
import styles from './FriendsItem.module.css';
import { Htag } from '../../Common/Htag/Htag';
import FriendIcon from './profile.svg';
import BurnIcon from './burn.svg';


export const FriendsItem = ({ id }: FriendsItemProps): JSX.Element => {
    return (
        <div className={styles.friendsItem}>
            <Htag tag='m' className={styles.friendsItemBalance}>
                {'+1'}
                <BurnIcon />
            </Htag>
            <Htag tag='s' className={styles.friendsItemId}>
                <FriendIcon className={styles.friendIcon} />
                {id}
            </Htag>
        </div>
    );
};
