import styles from './Navbar.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { NavbarButton } from '../NavbarButton/NavbarButton';
import { setLocale } from '../../../helpers/locale.helper';
import Logo from './logo.svg';
import Link from 'next/link';


export const Navbar = (): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <nav className={styles.navbar}>
            <NavbarButton type='tasks' text={setLocale(tgUser?.language_code).tasks} link='/tasks' />
            <Link href='/' aria-label='navbar main link' className={styles.navbarLogoButtonDiv}>
                <Logo className={styles.navbarLogoButton} />
            </Link>
            <NavbarButton type='profile' text={setLocale(tgUser?.language_code).profile} link='/profile' />
        </nav>
    );
};
