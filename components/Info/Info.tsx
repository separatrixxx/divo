import styles from './Info.module.css';
import ReactMarkdown from 'react-markdown';
import { ByBlock } from '../Common/ByBlock/ByBlock';
import { useSetup } from '../../hooks/useSetup';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../Common/Htag/Htag';


export const Info = (): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.info}>
            <ReactMarkdown className={styles.infoText}>
                {setLocale(tgUser?.language_code).info_text}
            </ReactMarkdown>
            <div className={styles.byDiv}>
                <Htag tag='s' className={styles.version}>
                    {process.env.NEXT_PUBLIC_VERSION}
                </Htag>
                <ByBlock color='dark' />
            </div>
        </div>
    );
};
