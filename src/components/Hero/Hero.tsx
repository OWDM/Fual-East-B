'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { Link } from '@/i18n/routing';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className={styles.hero}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1>{t('title')}</h1>
                <p>{t('subtitle')}</p>
            </motion.div>
        </section>
    );
}
