import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import TrustedBy from '@/components/TrustedBy/TrustedBy';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

import About from '@/components/About/About';
import Services from '@/components/Services/Services';

export default function HomePage() {
    return (
        <main>
            <Navbar />
            <Hero />
            <TrustedBy />
            <About />
            <Services />
            <Contact />
            <Footer />
        </main>
    );
}
