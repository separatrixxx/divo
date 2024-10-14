import styles from './Info.module.css';
import ReactMarkdown from 'react-markdown';
import { ByBlock } from '../Common/ByBlock/ByBlock';
import { useSetup } from '../../hooks/useSetup';
import { setLocale } from '../../helpers/locale.helper';


export const Info = (): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.info}>
            <ReactMarkdown className={styles.infoText}>
                {setLocale(tgUser?.language_code).info_text}
            </ReactMarkdown>
            <ByBlock color='dark' />
        </div>
    );
};
