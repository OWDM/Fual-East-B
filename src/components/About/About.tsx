'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import styles from './About.module.css';

import Counter from '../ui/Counter';

export default function About() {
    const t = useTranslations('About');

    return (
        <section id="about" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.textColumn}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>{t('title')}</h2>
                    <p className={styles.description}>{t('description')}</p>
                </motion.div>

                <motion.div
                    className={styles.statsColumn}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.statItem}>
                        <Counter value={15} suffix="+" className={styles.statNumber} />
                        <span className={styles.statLabel}>{t('stat1')}</span>
                    </div>
                    <div className={styles.statItem}>
                        <Counter value={200} suffix="+" className={styles.statNumber} />
                        <span className={styles.statLabel}>{t('stat2')}</span>
                    </div>
                    <div className={styles.statItem}>
                        <Counter value={500} suffix="+" className={styles.statNumber} />
                        <span className={styles.statLabel}>{t('stat3')}</span>
                    </div>
                    <div className={styles.statItem}>
                        <Counter value={1000} suffix="+" className={styles.statNumber} />
                        <span className={styles.statLabel}>{t('stat4')}</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
