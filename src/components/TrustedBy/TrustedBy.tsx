'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './TrustedBy.module.css';

export default function TrustedBy() {
    const t = useTranslations('TrustedBy');

    // Base logos
    const baseLogos = [
        { src: '/images/clients/haj.png', alt: 'Haj Ministry' },
        { src: '/images/clients/nws2.png', alt: 'National Water Company' },
    ];

    // Repeat base logos enough times to cover a wide screen (e.g., 15 times = 30 logos)
    // Then we will render this list twice in the CSS (or just once very long list and animate it carefully)
    // Actually, for the CSS translateX(-50%) trick to work perfectly, we need two identical halves.
    // So let's create one "set" that is definitely wider than the screen, and then duplicate it in the render.

    const logoSet = Array(10).fill(baseLogos).flat(); // 20 logos
    const logos = [...logoSet, ...logoSet]; // 40 logos total, 2 identical halves

    return (
        <section className={styles.section}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p className={styles.label}>{t('title')}</p>
                <div className={styles.marquee}>
                    <div className={styles.track}>
                        {logos.map((logo, index) => (
                            <div key={index} className={styles.logoItem}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
