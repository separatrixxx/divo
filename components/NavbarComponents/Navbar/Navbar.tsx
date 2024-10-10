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
            <NavbarButton type='main' text={setLocale(tgUser?.language_code).main} link='/' />
            <NavbarButton type='collection' text={setLocale(tgUser?.language_code).collection} link='/collection' />
            <Link href='/profile' aria-label='navbar main link' className={styles.navbarLogoButtonDiv}>
                <Logo className={styles.navbarLogoButton} />
            </Link>
            <NavbarButton type='friends' text={setLocale(tgUser?.language_code).friends} link='/friends' />
            <NavbarButton type='tasks' text={setLocale(tgUser?.language_code).tasks} link='/tasks' />
        </nav>
    );
};
