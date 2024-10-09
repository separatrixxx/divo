import { TaskItemProps } from './TaskItem.props';
import styles from './TaskItem.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';


export const TaskItem = ({ name, tag, award }: TaskItemProps): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.taskItem}>
            <Htag tag='xs' className={styles.tag}>
                {tag}
            </Htag>
            <Htag tag='s' className={styles.name}>
                {name}
            </Htag>
            <Htag tag='xs' className={styles.award}>
                {'+' + award + ' ' + setLocale(tgUser?.language_code).token}
            </Htag>
        </div>
    );
};
