import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.emailTitle'),
      details: "iztechracing@iyte.edu.tr",
      description: t('contact.info.emailDescription')
    },
    {
      icon: MapPin,
      title: t('contact.info.visitTitle'),
      details: t('contact.info.address'),
      description: t('contact.info.visitDescription')
    }
  ];

  return (
      <section id="contact" className="py-20 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('contact.title')} <span className="text-[#a02638]">{t('contact.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>

          {/* Contact boxes + Map */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                  <div
                      key={index}
                      className="bg-[#2a2a2a]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-6 hover:bg-[#2a2a2a]/70 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#a02638]/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="w-6 h-6 text-[#a02638]" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{info.title}</h4>
                        <p className="text-[#a02638] font-semibold whitespace-pre-line mb-2">{info.details}</p>
                        <p className="text-[#cccccc] text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
              ))}
            </div>

            {/* Map */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4 text-center">
                {t('contact.map.title')}
              </h4>
              <div className="w-full h-80 border border-[#2a2a2a] rounded-xl overflow-hidden shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3130.4005407668305!2d26.639615299999996!3d38.31655450000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb9058e2303cd9%3A0x703641007a4a291a!2zxLBZVEUgTWFraW5hIE3DvGhlbmRpc2xpxJ9pIELDtmzDvG3DvA!5e0!3m2!1str!2str!4v1755969003795!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title={t('contact.map.iframeTitle')}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;