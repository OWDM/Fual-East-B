'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import styles from './Footer.module.css';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <Image
                                src="/images/logo/logo-dark.png"
                                alt="Fual East Logo"
                                width={210}
                                height={69}
                                className={styles.logoImage}
                            />
                        </Link>
                    </div>
                    <div className={styles.socials}>
                        <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn" className={styles.socialLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a href="#" onClick={(e) => e.preventDefault()} aria-label="X (Twitter)" className={styles.socialLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.bottomSection}>
                    <div className={styles.links}>
                        <Link href="/">{t('home')}</Link>
                        <Link href="#about">{t('about')}</Link>
                        <Link href="#services">{t('services')}</Link>
                        <Link href="#contact">{t('contact')}</Link>
                    </div>
                    <p className={styles.copyright}>{t('copyright')}</p>
                </div>
            </div>
        </footer>
    );
}
