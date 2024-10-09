import { NavbarButtonProps } from './NavbarButton.props';
import styles from './NavbarButton.module.css';
import TasksIcon from './tasks.svg';
import ProfileIcon from './profile.svg';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';


export const NavbarButton = ({ type, text, link }: NavbarButtonProps): JSX.Element => {
    return (
        <Link href={link} aria-label='navbar link' className={styles.navbarButton}>
            {
                type === 'tasks' ?
                    <TasksIcon className={styles.navbarButtonIcon} />
                : 
                    <ProfileIcon className={styles.navbarButtonIcon} />
            }
            <Htag tag='xs' className={styles.navbarButtonText}>
                {text}
            </Htag>
        </Link>
    );
};
