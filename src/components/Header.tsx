import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [animateLogo, setAnimateLogo] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLanguage = () => {
        const newLang = currentLanguage === 'en' ? 'tr' : 'en';
        i18n.changeLanguage(newLang);
        setCurrentLanguage(newLang);
    };

    // Sayfa açıldığında animasyonu başlatma
    useEffect(() => {
        setAnimateLogo(true);
        const timer = setTimeout(() => {
            setAnimateLogo(false); // Animasyon bittiğinde durumu sıfırlama
        }, 2200); // Animasyon süresi ayar kısmı
        return () => clearTimeout(timer);
    }, []);

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <header className="bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-[#9a0e20]/20" style={{ height: 64 }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 relative">

                    {/*Logoların Alanı */}
                    <div className="flex items-center relative" style={{ width: 260, height: 40 }}>
                        {/* Animasyonlu Logo */}
                        <div
                            className="w-10 h-10 rounded-lg overflow-hidden flex items-center "
                            style={{
                                position: animateLogo ? 'absolute' : 'relative',
                                top: 0,
                                left: 0,
                                animation: animateLogo ? 'logoSlide 2.2s ease forwards' : 'none',
                                zIndex: 20,
                            }}
                        >
                            <img
                                src="/amblemSTROKELIGHT.png"
                                alt="Logo"
                                className="w-full h-full object-contain"
                                draggable={false}
                            />
                        </div>

                        {/* Yazı yerine yeni logo */}
                        <img
                            onClick={handleRefresh}
                            src="/logotype2.png"
                            alt="Yeni Logo"
                            className={`ml-4 w-auto h-10 ${animateLogo ? 'animating-text' : ''}`}
                            style={{ position: 'relative', zIndex: 10 }}
                            draggable={false}
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#home" className="text-white hover:text-[#9a0e20] transition-colors duration-200 font-medium">{t('header.home')}</a>
                        <a href="#team" className="text-white hover:text-[#9a0e20] transition-colors duration-200 font-medium">{t('header.team')}</a>
                        <a href="#vehicles" className="text-white hover:text-[#9a0e20] transition-colors duration-200 font-medium">{t('header.vehicles')}</a>
                        <a href="#magazines" className="text-white hover:text-[#9a0e20] transition-colors duration-200 font-medium">{t('header.magazine')}</a>
                        <a href="#gallery" className="text-white hover:text-[#9a0e20] transition-colors duration-200 font-medium">{t('header.gallery')}</a>
                        <a href="#sponsors" className="text-white hover:text-[#9a0e20] transition-colors duration-200 font-medium">{t('header.sponsors')}</a>
                        <a href="#contact" className="text-white hover:text-[#9a0e20] transition-colors duration-200 font-medium">{t('header.contact')}</a>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-[#9a0e20] transition-colors duration-200"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>

                    {/* Language toggle button */}
                    <div className="hidden md:flex items-center space-x-1">
                        <button 
                            onClick={toggleLanguage}
                            className="ml-4 px-3 py-1.5 rounded-md text-sm font-medium text-white bg-[#9a0e20] hover:bg-[#7a0b1a] transition-colors"
                        >
                            {t('language')}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-sm border-t border-[#9a0e20]/20">
                            <a href="#home" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200">{t('header.home')}</a>
                            <a href="#team" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200">{t('header.team')}</a>
                            <a href="#vehicles" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200">{t('header.vehicles')}</a>
                            <a href="#magazines" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200">{t('header.magazine')}</a>
                            <a href="#gallery" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200">{t('header.gallery')}</a>
                            <a href="#sponsors" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200">{t('header.sponsors')}</a>
                            <a href="#contact" className="block px-3 py-2 text-white hover:text-[#9a0e20] transition-colors duration-200">{t('header.contact')}</a>
                        </div>
                    </div>
                )}
            </div>

            {/* Logo ve Yazı Animasyonları */}
            <style>{`
        @keyframes logoSlide {
          0% { transform: translateX(0); }
          50% { transform: translateX(180px); }
          100% { transform: translateX(0); }
        }

        @keyframes textFade {
          0% { opacity: 1; }
          40% { opacity: 0; }
          60% { opacity: 0; }
          100% { opacity: 1; }
        }

        .animating-text {
          animation: textFade 2.2s ease forwards;
        }
      `}</style>
        </header>
    );
};

export default Header;



