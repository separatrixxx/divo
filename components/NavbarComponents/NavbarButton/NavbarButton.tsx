import { NavbarButtonProps } from './NavbarButton.props';
import styles from './NavbarButton.module.css';
import TasksIconIcon from './tasks.svg';
import ProfileIcon from './profile.svg';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';


export const NavbarButton = ({ type, text, link }: NavbarButtonProps): JSX.Element => {
    return (
        <Link href={link} className={styles.navbarButton}>
            {
                type === 'tasks' ?
                    <TasksIconIcon className={styles.navbarButtonIcon} />
                : 
                    <ProfileIcon className={styles.navbarButtonIcon} />
            }
            <Htag tag='xs' className={styles.navbarButtonText}>
                {text}
            </Htag>
        </Link>
    );
};
