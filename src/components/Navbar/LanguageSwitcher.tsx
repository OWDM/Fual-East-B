'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';
import styles from './Navbar.module.css';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();

    const isAr = locale === 'ar';
    const targetLocale = isAr ? 'en' : 'ar';
    const label = isAr ? 'English' : 'العربية';

    function onToggle() {
        startTransition(() => {
            router.replace(pathname, { locale: targetLocale });
        });
    }

    return (
        <button
            className={styles.switcherLink}
            onClick={onToggle}
            disabled={isPending}
        >
            {label}
        </button>
    );
}
