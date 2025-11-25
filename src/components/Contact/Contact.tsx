'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

export default function Contact() {
    const t = useTranslations('Contact');

    return (
        <section id="contact" className={styles.section}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2>{t('title')}</h2>
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h3>{t('infoTitle')}</h3>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <p>{t('address')}</p>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </div>
                            <p>{t('email')}</p>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <p dir="ltr">{t('phone')}</p>
                        </div>
                    </div>
                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">{t('name')}</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">{t('emailLabel')}</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">{t('message')}</label>
                            <textarea id="message" name="message" rows={4} required></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            {t('submit')}
                            <span className={styles.arrowIcon}>
                                <span className={styles.arrow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 12h20" />
                                        <path d="m15 5 7 7-7 7" />
                                    </svg>
                                </span>
                            </span>
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
