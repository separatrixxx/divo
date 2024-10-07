import styles from './Navbar.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { NavbarButton } from '../NavbarButton/NavbarButton';
import { setLocale } from '../../../helpers/locale.helper';
import Logo from './logo.svg';
import Link from 'next/link';


export const Navbar = (): JSX.Element => {
    const { router } = useSetup();

    return (
        <nav className={styles.navbar}>
            <NavbarButton type='tasks' text={setLocale(router.locale).tasks} link='/tasks' />
            <Link href='/' className={styles.navbarLogoButtonDiv}>
                <Logo className={styles.navbarLogoButton} />
            </Link>
            <NavbarButton type='profile' text={setLocale(router.locale).profile} link='/profile' />
        </nav>
    );
};
