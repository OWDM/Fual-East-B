import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './Navbar.module.css';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const t = useTranslations('Navbar');

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/logo/logo.png"
                        alt="Fual East Logo"
                        width={120}
                        height={40}
                        className={styles.logoImage}
                        priority
                    />
                </Link>
                <div className={styles.links}>
                    <Link href="/">{t('home')}</Link>
                    <Link href="#about">{t('about')}</Link>
                    <Link href="#services">{t('services')}</Link>
                    <LanguageSwitcher />
                </div>
                <Link href="#contact" className={styles.cta}>
                    {t('contact')}
                    <span className={styles.arrowIcon}>
                        <span className={styles.arrow}>➜</span>
                    </span>
                </Link>
            </div>
        </nav>
    );
}
