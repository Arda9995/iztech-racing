import { useTranslation } from 'react-i18next';
import { Instagram, Linkedin, Mail, MapPin, Music2 } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/iztechracingteam/",
      label: "Instagram"
    },
    {
      icon: Music2,
      href: "https://www.tiktok.com/@iztechracing?_t=ZS-8z7iEQjl89h&_r=1",
      label: "TikTok"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/search/results/all/?keywords=iztech%20racing%20formula%20student%20team",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:iztechracing@iyte.edu.tr",
      label: "Mail"
    }
  ];

  const quickLinks = [
    { name: t('footer.links.about'), href: "#home" },
    { name: t('footer.links.team'), href: "#team" },
    { name: t('footer.links.vehicles'), href: "#vehicles" },
    { name: t('footer.links.gallery'), href: "#gallery" },
    { name: t('footer.links.sponsors'), href: "#sponsors" },
    { name: t('footer.links.contact'), href: "#contact" }
  ];

  return (
      <footer className="bg-[#0f0f0f] border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-1">
                <div className="flex items-center mb-6">
                  <img
                      src="/logos.png"
                      alt={t('footer.logoAlt')}
                      className="w-12 h-12 mr-4 object-contain"
                  />
                  <span className="text-white font-bold text-2xl">IZTECH RACING</span>
                </div>
                <p className="text-[#cccccc] leading-relaxed mb-6">
                  {t('footer.description')}
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                      <a
                          key={index}
                          href={social.href}
                          aria-label={social.label}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-[#2a2a2a] rounded-lg flex items-center justify-center hover:bg-[#a02638] transition-colors duration-200"
                      >
                        <social.icon className="w-5 h-5 text-[#cccccc] hover:text-white" />
                      </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6">
                  {t('footer.quickLinks')}
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                      <li key={index}>
                        <a
                            href={link.href}
                            className="text-[#cccccc] hover:text-[#a02638] transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6">
                  {t('footer.contact.title')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#a02638] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">
                        {t('footer.contact.location')}
                      </p>
                      <p className="text-[#cccccc]">
                        {t('footer.contact.address')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#a02638] mr-3 flex-shrink-0" />
                    <a
                        href="mailto:iztechracing@iyte.edu.tr"
                        className="text-[#cccccc] hover:text-[#a02638] transition-colors duration-200"
                    >
                      iztechracing@iyte.edu.tr
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#2a2a2a] py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-[#cccccc] text-sm mb-4 md:mb-0">
                {t('footer.copyright', { year: currentYear })}
              </div>
              <div className="flex space-x-6 text-sm">
                <a
                    href="#"
                    className="text-[#cccccc] hover:text-[#a02638] transition-colors duration-200"
                >
                  {t('footer.privacy')}
                </a>
                <a
                    href="#"
                    className="text-[#cccccc] hover:text-[#a02638] transition-colors duration-200"
                >
                  {t('footer.terms')}
                </a>
                <a
                    href="#"
                    className="text-[#cccccc] hover:text-[#a02638] transition-colors duration-200"
                >
                  {t('footer.cookie')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;