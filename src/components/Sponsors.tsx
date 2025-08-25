import { Heart, Handshake, Star, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Sponsors = () => {
  const { t } = useTranslation();

  const sponsorTiers = [
    {
      tier: t('sponsors.tiers.platinum.title', "Platinum Sponsors"),
      description: t('sponsors.tiers.platinum.description', "Our primary partners who make everything possible"),
      sponsors: []
    },
    {
      tier: t('sponsors.tiers.gold.title', "Gold Sponsors"),
      description: t('sponsors.tiers.gold.description', "Major supporters of our racing endeavors"),
      sponsors: [
        { name: "Altair", logo: "/ALTIN/altair.png", url: "https://altair.com/" },
        { name: "ANSYS", logo: "/ALTIN/ANSYS_logo.png", url: "https://www.ansys.com/" },
        { name: "Bias Mühendislik", logo: "/ALTIN/biasmuhendislik_logo.png", url: "https://bias.com.tr/" },
        { name: "Hexagon", logo: "/ALTIN/hexagon_logo.png", url: "https://hexagon.com/" },
        { name: "Numesys", logo: "/ALTIN/numesys-logo-gri-min.png", url: "https://www.numesys.com.tr/" },
        { name: "Tekyaz", logo: "/ALTIN/TEKYAZ_LOGO_002.png", url: "https://www.tekyaz.com/" },
        { name: "Prokom", logo: "/ALTIN/Logo_Prokom_W.png", url: "https://prokomcomposite.com/" }
      ]
    },
    {
      tier: t('sponsors.tiers.silver.title', "Silver Sponsors"),
      description: t('sponsors.tiers.silver.description', "Valued partners in our journey"),
      sponsors: [
        { name: "Avioni Technologies", logo: "/SILVER/5958e813d0893.png", url: "https://www.avionitech.com/tr/" },
        { name: "IZELTAŞ", logo: "/SILVER/images.png", url: "https://izeltas.com.tr/" }
      ]
    },
    {
      tier: t('sponsors.tiers.bronze.title', "Bronze Sponsors"),
      description: t('sponsors.tiers.bronze.description', "Valued partners in our journey"),
      sponsors: [
        { name: "İnci Akü", logo: "/BRONZ/incilogo-dosya.png", url: "https://www.inciaku.com/tr/" },
        { name: "Yakup Yılmaz", logo: "/BRONZ/yakup.png", url: "https://www.yakupyilmazboru.com/" }
      ]
    },
    {
      tier: t('sponsors.tiers.supporters.title', "Supporters"),
      description: t('sponsors.tiers.supporters.description', "Valued partners in our journey"),
      sponsors: [
        { name: "Urla Solar", logo: "/SUPPORTER/UrlaSolar_Tam_Logo.png", url: "https://urlasolar.com/" },
        { name: "Bilişim Vadisi", logo: "/SUPPORTER/BV_Logo_H.png", url: "https://bilisimvadisi.com.tr/" },
        { name: "Teknopark İzmir", logo: "/SUPPORTER/20190828083905.png", url: "https://teknoparkizmir.com.tr/" },
        { name: "URİKAD", logo: "/SUPPORTER/URiKADW.png", url: "#" }
      ]
    }
  ];

  const partnershipBenefits = [
    {
      icon: Star,
      title: t('sponsors.benefits.innovation.title', "Innovation Partnership"),
      description: t('sponsors.benefits.innovation.description', "Collaborate on cutting-edge automotive technologies")
    },
    {
      icon: Award,
      title: t('sponsors.benefits.visibility.title', "Brand Visibility"),
      description: t('sponsors.benefits.visibility.description', "Showcase your brand at international competitions and events")
    },
    {
      icon: Handshake,
      title: t('sponsors.benefits.talent.title', "Talent Pipeline"),
      description: t('sponsors.benefits.talent.description', "Connect with top engineering students and future employees")
    },
    {
      icon: Heart,
      title: t('sponsors.benefits.community.title', "Community Impact"),
      description: t('sponsors.benefits.community.description', "Support education and inspire the next generation of engineers")
    }
  ];

  const packages = [
    {
      name: t('sponsors.packages.supporter.title', "Supporter"),
      price: t('sponsors.packages.supporter.price', "€200 - €800"),
      features: [
        t('sponsors.packages.features.website', "Name on website"),
        t('sponsors.packages.features.socialMedia', "Social media thank you"),
        t('sponsors.packages.features.newsletter', "Newsletter updates")
      ],
      buttonText: t('sponsors.packages.buttons.join', "Join as Supporter"),
      popular: false
    },
    {
      name: t('sponsors.packages.bronze.title', "Bronze"),
      price: t('sponsors.packages.bronze.price', "€800 - €1,500"),
      features: [
        t('sponsors.packages.features.logoOnVehicle', "Logo on vehicle"),
        t('sponsors.packages.features.websiteRecognition', "Website recognition"),
        t('sponsors.packages.features.socialMediaMentions', "Social media mentions"),
        t('sponsors.packages.features.eventUpdates', "Event updates")
      ],
      buttonText: t('sponsors.packages.buttons.getStarted', "Get Started"),
      popular: false
    },
    {
      name: t('sponsors.packages.silver.title', "Silver"),
      price: t('sponsors.packages.silver.price', "€1,500 - €3,500"),
      features: [
        t('sponsors.packages.features.prominentLogo', "Prominent logo placement"),
        t('sponsors.packages.features.dedicatedPage', "Dedicated webpage"),
        t('sponsors.packages.features.competitionReports', "Competition reports"),
        t('sponsors.packages.features.merchandise', "Team merchandise"),
        t('sponsors.packages.features.vipAccess', "VIP event access")
      ],
      buttonText: t('sponsors.packages.buttons.choose', "Choose Silver"),
      popular: true
    },
    {
      name: t('sponsors.packages.gold.title', "Gold"),
      price: t('sponsors.packages.gold.price', "€3,500 - €7,000"),
      features: [
        t('sponsors.packages.features.premiumPlacement', "Premium logo placement"),
        t('sponsors.packages.features.featureSpotlight', "Feature in team spotlight"),
        t('sponsors.packages.features.exclusiveContent', "Exclusive content access"),
        t('sponsors.packages.features.presentationOpportunity', "Presentation opportunity"),
        t('sponsors.packages.features.premiumMerchandise', "Premium team merchandise")
      ],
      buttonText: t('sponsors.packages.buttons.goGold', "Go Gold"),
      popular: false
    },
    {
      name: t('sponsors.packages.platinum.title', "Platinum"),
      price: t('sponsors.packages.platinum.price', "€7,000+"),
      features: [
        t('sponsors.packages.features.titleSponsorship', "Title sponsorship options"),
        t('sponsors.packages.features.customPackage', "Custom sponsorship package"),
        t('sponsors.packages.features.exclusiveRights', "Exclusive category rights"),
        t('sponsors.packages.features.executiveAccess', "Executive team access"),
        t('sponsors.packages.features.premiumBranding', "Premium branding opportunities")
      ],
      buttonText: t('sponsors.packages.buttons.contactUs', "Contact Us"),
      popular: false
    }
  ];

  return (
      <section id="sponsors" className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('sponsors.title', "Our Sponsors")}
            </h2>
            <p className="text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">
              {t('sponsors.description', "We're proud to partner with industry leaders who share our passion for innovation, excellence, and the future of automotive engineering.")}
            </p>
          </div>

          {/* Sponsor Tiers */}
          <div className="space-y-16 mb-20">
            {sponsorTiers.map((tier, tierIndex) => (
                <div key={tierIndex}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.tier}</h3>
                    <p className="text-[#cccccc]">{tier.description}</p>
                  </div>

                  <div className={`grid gap-8 ${
                      tier.sponsors.length <= 2 ? 'md:grid-cols-2' :
                          tier.sponsors.length === 3 ? 'md:grid-cols-3' :
                              'md:grid-cols-2 lg:grid-cols-4'
                  }`}>
                    {tier.sponsors.map((sponsor, sponsorIndex) => (
                        <a
                            key={sponsorIndex}
                            href={sponsor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#2a2a2a]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-8 text-center hover:bg-[#2a2a2a]/70 transition-all duration-300 hover:scale-105 group"
                        >
                          {sponsor.logo.endsWith(".png") || sponsor.logo.endsWith(".jpg") ? (
                              <img
                                  src={sponsor.logo}
                                  alt={sponsor.name}
                                  className="h-20 object-contain mx-auto"
                              />
                          ) : (
                              <div className="h-20 flex items-center justify-center">
                                <span className="text-white font-bold text-2xl">{sponsor.logo}</span>
                              </div>
                          )}
                        </a>
                    ))}
                  </div>
                </div>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                {t('sponsors.benefits.title', "Partnership Benefits")}
              </h3>
              <p className="text-xl text-[#cccccc] max-w-2xl mx-auto">
                {t('sponsors.benefits.subtitle', "Join our mission and discover the advantages of partnering with IZTECH Racing")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                  <div
                      key={index}
                      className="bg-[#2a2a2a]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-6 text-center hover:bg-[#2a2a2a]/70 transition-all duration-300 hover:scale-105"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#a02638]/20 rounded-full mb-6">
                      <benefit.icon className="w-8 h-8 text-[#a02638]" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">{benefit.title}</h4>
                    <p className="text-[#cccccc] leading-relaxed">{benefit.description}</p>
                  </div>
              ))}
            </div>
          </div>

          {/* Sponsorship Packages */}
          <div className="bg-gradient-to-r from-[#a02638]/10 to-[#7e1c2b]/10 border border-[#a02638]/20 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                {t('sponsors.packages.title', "Become a Sponsor")}
              </h3>
              <p className="text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">
                {t('sponsors.packages.description', "Ready to join our racing family? We offer flexible sponsorship packages tailored to your business goals and budget. Let's build the future together.")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {packages.map((pkg, index) => (
                  <div
                      key={index}
                      className={`flex flex-col items-center justify-between bg-[#2a2a2a]/50 border ${
                          pkg.popular ? 'border-[#a02638]/50' : 'border-[#2a2a2a]'
                      } rounded-xl p-6 text-center relative`}
                  >
                    {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#a02638] text-white px-4 py-1 rounded-full text-sm font-semibold">
                          {t('sponsors.packages.mostPopular', "Most Popular")}
                        </div>
                    )}
                    <h4 className="text-xl font-bold text-white mb-4">{pkg.name}</h4>
                    <div className="text-3xl font-bold text-[#a02638] mb-4">{pkg.price}</div>
                    <ul className="text-[#cccccc] space-y-2 mb-6">
                      {pkg.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Sponsors;