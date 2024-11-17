import { FriendsItemProps } from './FriendsItem.props';
import styles from './FriendsItem.module.css';
import { Htag } from '../../Common/Htag/Htag';
import FriendIcon from './profile.svg';
import BurnIcon from './burn.svg';
import CoinIcon from './coin.svg';
import { numFormat } from '../../../helpers/format.helper';


export const FriendsItem = ({ id, isVote }: FriendsItemProps): JSX.Element => {
    return (
        <div className={styles.friendsItem}>
            <Htag tag='s' className={styles.friendsItemId}>
                <FriendIcon className={styles.friendIcon} />
                {id}
            </Htag>
            <Htag tag='m' className={styles.friendsItemBalance}>
                {'+' + (isVote ? 1 : numFormat(1000))}
                {
                    isVote ?
                        <BurnIcon />
                    :
                        <CoinIcon />
                }
            </Htag>
        </div>
    );
};
