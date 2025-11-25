import { useTranslations } from 'next-intl';
import styles from './Hero.module.css';
import { Link } from '@/i18n/routing';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>{t('title')}</h1>
                <p>{t('subtitle')}</p>

            </div>
        </section>
    );
}
