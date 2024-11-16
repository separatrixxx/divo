import { NavbarButtonProps } from './NavbarButton.props';
import styles from './NavbarButton.module.css';
import MainIcon from './main.svg';
import BurnIcon from './burn.svg';
import FriendsIcon from './friends.svg';
import TasksIcon from './tasks.svg';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import cn from 'classnames';


export const NavbarButton = ({ type, text, link }: NavbarButtonProps): JSX.Element => {
    const { router, webApp } = useSetup();

    return (
        <Link href={link} className={cn(styles.navbarButton, {
            [styles.active]: router.asPath === link || (router.asPath.slice(0, 4) === '/#tg' && link === '/'),
            [styles.weba]: webApp?.platform === 'weba',
        })} aria-label={`navbar ${type} link`}>
            <span className={styles.navbarButtonIcon}>
                {
                    type === 'main' ?
                        <MainIcon />
                    : type === 'collection' ?
                        <BurnIcon />
                    : type === 'friends' ?
                        <FriendsIcon />
                    :
                        <TasksIcon />
                }
            </span>
            <Htag tag='xs' className={styles.navbarButtonText}>
                {text}
            </Htag>
        </Link>
    );
};
