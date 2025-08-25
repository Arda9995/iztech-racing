import { useTranslation } from 'react-i18next';
import { Wrench, Glasses, Car, Clipboard, Trophy } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Car,
      title: t('about.values.design.title', "Design"),
      description: t('about.values.design.description',
          "After setting our design goals, we use CAD software provided by our sponsors to create " +
          "models, which we then optimize using simulation programs. Creating a virtual model " +
          "of the entire vehicle facilitates the manufacturing process.")
    },
    {
      icon: Glasses,
      title: t('about.values.reviews.title', "Design Reviews"),
      description: t('about.values.reviews.description',
          "Throughout the design process, we conduct design reviews to gather feedback from " +
          "team members, faculty advisors, and sponsors. This feedback ensures we are on the " +
          "right track and provides valuable learning opportunities for new members.")
    },
    {
      icon: Wrench,
      title: t('about.values.manufacturing.title', "Manufacturing"),
      description: t('about.values.manufacturing.description',
          "We assemble parts provided by our sponsors and produced using their facilities in our " +
          "own workshop. By manufacturing precision components, we balance innovative design " +
          "with manufacturability.")
    },
    {
      icon: Clipboard,
      title: t('about.values.test.title', "Test"),
      description: t('about.values.test.description',
          "We place equal importance on testing and design. Through regular test days, we " +
          "continuously improve the vehicle's performance, driving dynamics, and control systems, " +
          "while also ensuring our drivers gain valuable experience and are fully prepared for " +
          "competition conditions.")
    }
  ];

  return (
      <section className="py-20 bg-gradient-to-b from-black-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('about.title', "About")} <span className="text-[#9a0e20]">IZTECH Racing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('about.description',
                  "Established on October 15, 2024, IZTECH RACING is the Formula Student team of " +
                  "İzmir Institute of Technology, Turkey. Our mission is to design and manufacture a " +
                  "Formula SAE vehicle, funded by sponsors, to represent our university and country " +
                  "in international engineering competitions, starting with Formula Student Spain 2026. " +
                  "Formula Student competitions are considered to be the most prestigious engineering " +
                  "competitions in the world. Our faculty advisors are Dr. Büşra Karaş and Dr. Özgür Günelsu.")}
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                {t('about.journey.title', "Our Journey")}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('about.journey.paragraph1',
                    "Formula SAE (Society of Automotive Engineers) is a competition held among " +
                    "universities for over 40 years. This competition is an engineering competition " +
                    "where students from many countries around the world participate by designing and " +
                    "producing Formula-type single-seater small racing vehicles. Formula SAE pushes " +
                    "students to apply what they learn in the classroom to a real-world project. There " +
                    "are four competition categories: internal combustion, hybrid, electric, and driverless.")}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('about.journey.paragraph2',
                    "Since its first recruitment, IZTECH RACING has brought its first electric prototype " +
                    "vehicle, Freakmobile, to life in less than 3 months. Work on the race car continues.")}
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1" style={{ backgroundColor: '#9a0e20' }}></div>
                <span className="font-semibold text-[#9a0e20]">
                {t('about.journey.tagline', "Engineering the Future")}
              </span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
                <img
                    src="/_MG_5113.JPG"
                    alt={t('about.imageAlt', "IZTECH Racing team")}
                    className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div
                  className="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#9a0e20' }}
              >
                <Trophy className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
                <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                      style={{ backgroundColor: 'rgba(154, 14, 32, 0.2)' }}
                  >
                    <value.icon className="w-6 h-6" style={{ color: '#9a0e20' }} />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="mt-20 text-center">
            <div
                className="border rounded-2xl p-8 md:p-12"
                style={{
                  background: 'linear-gradient(to right, rgba(154,14,32,0.1), rgba(154,14,32,0.15))',
                  borderColor: 'rgba(154,14,32,0.2)'
                }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                {t('about.mission.title', "Our Mission")}
              </h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {t('about.mission.statement',
                    `"To inspire the next generation of engineers through competitive motorsport, ` +
                    `fostering innovation, teamwork, and excellence while representing IZTECH ` +
                    `with pride and determination on racing circuits worldwide."`)}
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;