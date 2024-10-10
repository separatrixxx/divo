import { NavbarButtonProps } from './NavbarButton.props';
import styles from './NavbarButton.module.css';
import MainIcon from './main.svg';
import CollectionIcon from './collection.svg';
import FriendsIcon from './friends.svg';
import TasksIcon from './tasks.svg';
import ProfileIcon from './profile.svg';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import cn from 'classnames';


export const NavbarButton = ({ type, text, link }: NavbarButtonProps): JSX.Element => {
    const { router } = useSetup();

    return (
        <Link href={link} aria-label='navbar link' className={cn(styles.navbarButton, {
            [styles.active]: router.asPath === link,
        })}>
            <span className={styles.navbarButtonIcon}>
                {
                    type === 'main' ?
                        <MainIcon />
                    : type === 'collection' ?
                        <CollectionIcon />
                    : type === 'friends' ?
                        <FriendsIcon />
                    : type === 'tasks' ?
                        <TasksIcon />
                    : <ProfileIcon />
                }
            </span>
            <Htag tag='xs' className={styles.navbarButtonText}>
                {text}
            </Htag>
        </Link>
    );
};
