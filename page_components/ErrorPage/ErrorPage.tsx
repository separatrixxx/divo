import { ErrorPageProps } from "./ErrorPage.props";
import styles from './ErrorPage.module.css';
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";
import { Htag } from "../../components/Common/Htag/Htag";


export const ErrorPage = ({ error }: ErrorPageProps): JSX.Element => {
    const router = useRouter();

    let errorText = "";

    if (error === 404) {
        errorText = setLocale(router.locale).error404;
    } else {
        errorText = setLocale(router.locale).error500;
    }

    return (
        <div className={styles.errorPage}>
            <Link href='/' className={styles.errorBlock}>
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