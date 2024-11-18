import { FriendsItemProps } from './FriendsItem.props';
import styles from './FriendsItem.module.css';
import { Htag } from '../../Common/Htag/Htag';
import FriendIcon from './profile.svg';
import BurnIcon from './burn.svg';
import CoinIcon from './coin.svg';
import { numFormat } from '../../../helpers/format.helper';


export const FriendsItem = ({ name, isVote }: FriendsItemProps): JSX.Element => {
    return (
        <div className={styles.friendsItem}>
            <Htag tag='s' className={styles.friendName}>
                <FriendIcon className={styles.friendIcon} />
                {name}
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
