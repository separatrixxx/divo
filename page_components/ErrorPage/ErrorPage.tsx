import { ErrorPageProps } from "./ErrorPage.props";
import styles from './ErrorPage.module.css';
import Link from "next/link";
import Image from 'next/image';
import { setLocale } from "../../helpers/locale.helper";
import { Htag } from "../../components/Common/Htag/Htag";
import { useSetup } from "../../hooks/useSetup";


export const ErrorPage = ({ error }: ErrorPageProps): JSX.Element => {
    const { router, webApp } = useSetup();

    if (webApp) {
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function () {
            router.push('/');
        });
    }

    let errorText = "";

    if (error === 404) {
        errorText = setLocale(router.locale).error404;
    } else {
        errorText = setLocale(router.locale).error500;
    }

    return (
        <div className={styles.errorPage}>
            <Link href='/' className={styles.errorBlock} aria-label='error link'>
                <Image className={styles.logo} draggable='false'
                    loader={() => '/logo.svg'}
                    src='/logo.svg'
                    alt='logo image'
                    width={1}
                    height={1}
                    unoptimized={true}
                />
                <Htag tag='m'>
                    {errorText}
                </Htag>
            </Link>
        </div>
    );
};