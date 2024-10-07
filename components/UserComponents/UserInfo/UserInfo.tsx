import styles from './UserInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const UserInfo = (): JSX.Element => {
    const { router, user } = useSetup();

    return (
        <div className={styles.userInfo}>
            <Htag tag='s'>
                {setLocale(router.locale).id + ': ' + user.result.user_id}
            </Htag>
            <Htag tag='s'>
                {setLocale(router.locale).coins + ': ' + user.result.coins}
            </Htag>
            <Htag tag='s'>
                {setLocale(router.locale).votes_left + ': ' + user.result.remaining_votes + '/' + user.result.total_available_votes}
            </Htag>
        </div>
    );
};
