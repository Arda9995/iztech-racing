import { Play, Award, Users, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    const stats = [
        {
            icon: Award,
            value: t('hero.stats.championships.value'),
            label: t('hero.stats.championships.label')
        },
        {
            icon: Users,
            value: t('hero.stats.members.value'),
            label: t('hero.stats.members.label')
        },
        {
            icon: Zap,
            value: t('hero.stats.horsepower.value'),
            label: t('hero.stats.horsepower.label')
        },
        {
            icon: Play,
            value: t('hero.stats.yearsActive.value'),
            label: t('hero.stats.yearsActive.label')
        }
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-[#4b0017]">
                <div
                    className="absolute inset-0 bg-[url('/freakmobile.jpg')] bg-cover bg-center opacity-20"
                    aria-hidden="true"
                ></div>
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"
                    aria-hidden="true"
                ></div>
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#9a0e20]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#9a0e20]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-8">
                    {/* Main heading */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                            <span className="bg-gradient-to-r from-white via-[#b0485e] to-[#9a0e20] bg-clip-text text-transparent">
                                {t('hero.title.firstLine')}
                            </span>
                            <br />
                            <span className="text-[#9a0e20]">{t('hero.title.secondLine')}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            {t('hero.subtitle')}
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center p-4 rounded-xl hover:bg-gray-900/30 transition-colors">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#9a0e20]/20 rounded-full mb-3">
                                    <stat.icon className="w-8 h-8 text-[#9a0e20]" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <a
                    href="#about"
                    className="flex flex-col items-center group"
                    aria-label={t('hero.scrollDown')}
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-[#9a0e20] transition-colors">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-[#9a0e20] transition-colors"></div>
                    </div>
                    <span className="sr-only">{t('hero.scrollDown')}</span>
                </a>
            </div>
        </section>
    );
};

export default Hero;
