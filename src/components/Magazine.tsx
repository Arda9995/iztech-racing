import { useState } from "react";
import { BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

const Magazines = () => {
    const { t } = useTranslation();
    const [openPdf, setOpenPdf] = useState<string | null>(null);

    const magazines = [
        {
            title: t('magazines.may.title'),
            description: t('magazines.may.description'),
            cover: "/insan.png",
            pdf: "/mayrecap.pdf",
        },
        {
            title: t('magazines.june.title'),
            description: t('magazines.june.description'),
            cover: "/insan.png",
            pdf: "/junerecap.pdf",
        },
        {
            title: t('magazines.july.title'),
            description: t('magazines.july.description'),
            cover: "/insan.png",
            pdf: "/julyrecap.pdf",
        },
    ];

    return (
        <>
            <section id="magazines" className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="text-[#a02638]">{t('magazines.title')}</span> {t('magazines.and')} {t('magazines.recap')}
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            {t('magazines.subtitle')}
                        </p>
                    </div>

                    {/* Magazine Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {magazines.map((mag, index) => (
                            <div
                                key={index}
                                className="group bg-black/80 border border-[#0e669a]/50 rounded-xl overflow-hidden hover:bg-[#0e669a]/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                                onClick={() => setOpenPdf(mag.pdf)}
                            >
                                <div className="h-60 overflow-hidden">
                                    <img
                                        src={mag.cover}
                                        alt={mag.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{mag.title}</h3>
                                    <p className="text-gray-400 mb-4">{mag.description}</p>
                                    <div className="inline-flex items-center text-[#a02638] font-semibold group-hover:text-white transition-colors">
                                        <BookOpen className="w-5 h-5 mr-2" />
                                        {t('magazines.viewPdf')}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PDF Modal */}
            {openPdf && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                    onClick={() => setOpenPdf(null)}
                >
                    <div
                        className="bg-black rounded-lg overflow-hidden shadow-2xl w-full max-w-6xl h-[90vh] relative"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setOpenPdf(null)}
                            className="absolute -top-10 right-0 text-white hover:text-red-500 transition-colors text-3xl z-10"
                            title={t('magazines.close')}
                            aria-label={t('magazines.close')}
                        >
                            &times;
                        </button>
                        <iframe
                            src={openPdf}
                            className="w-full h-full border-none"
                            title={t('magazines.pdfTitle')}
                            aria-label={t('magazines.pdfTitle')}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Magazines;