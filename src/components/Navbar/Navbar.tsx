'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './Navbar.module.css';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useState } from 'react';

export default function Navbar() {
    const t = useTranslations('Navbar');
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={`${styles.container} ${isOpen ? styles.navOpen : ''}`}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <Image
                        src="/images/logo/logo.png"
                        alt="Fual East Logo"
                        width={120}
                        height={40}
                        className={styles.logoImage}
                        priority
                    />
                </Link>

                {/* Desktop Links */}
                <div className={styles.links}>
                    <Link href="/">{t('home')}</Link>
                    <Link href="#about">{t('about')}</Link>
                    <Link href="#services">{t('services')}</Link>
                    <LanguageSwitcher />
                </div>

                {/* Desktop CTA */}
                <Link href="#contact" className={styles.cta}>
                    {t('contact')}
                    <span className={styles.arrowIcon}>
                        <span className={styles.arrow}>➜</span>
                    </span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.mobileMenuBtn} ${isOpen ? styles.open : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
                    <Link href="/" className={styles.mobileLink} onClick={closeMenu}>{t('home')}</Link>
                    <Link href="#about" className={styles.mobileLink} onClick={closeMenu}>{t('about')}</Link>
                    <Link href="#services" className={styles.mobileLink} onClick={closeMenu}>{t('services')}</Link>
                    <div className={styles.mobileSwitcher} onClick={closeMenu}>
                        <LanguageSwitcher />
                    </div>
                    <Link href="#contact" className={styles.cta} onClick={closeMenu}>
                        {t('contact')}
                        <span className={styles.arrowIcon}>
                            <span className={styles.arrow}>➜</span>
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
