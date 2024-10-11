import { FriendsItemProps } from './FriendsItem.props';
import styles from './FriendsItem.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import FriendIcon from './profile.svg';


export const FriendsItem = ({ id, balance }: FriendsItemProps): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.friendsItem}>
            <Htag tag='m' className={styles.friendsItemBalance}>
                {'+' + balance + ' ' + setLocale(tgUser?.language_code).token}
            </Htag>
            <Htag tag='s' className={styles.friendsItemId}>
                <FriendIcon className={styles.friendIcon} />
                {id}
            </Htag>
        </div>
    );
};
