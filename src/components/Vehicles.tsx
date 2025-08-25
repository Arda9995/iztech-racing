import React from 'react';
import { Zap, Gauge, Weight, Settings } from 'lucide-react';

const Vehicles = () => {
  const vehicles = [
    {
      name: "Freakmobile",
      category: "Formula Student",
      year: "2024-2025",
      image: "photos/freakmobile.jpg",
      specs: {
        power: "- HP",
        weight: "- kg",
        topSpeed: "- km/h",
        acceleration: "- in -s"
      },
      features: [
        "Cardboard fiber monocoque chassis",
        "Semi-Custom aerodynamic package",
        "Advanced telemetry system",
        "Lightweight aluminum suspension"
      ],
      description: "Dehşetsel"
    },
    {
      name: "Corsa",
      category: "Prototype Development ",
      year: "2025-2026",
      image: "photos/amblemCWHITE.png",
      specs: {
        power: "- HP",
        weight: "- kg",
        topSpeed: "- km/h",
        acceleration: "- in -s"
      },
      features: [
        "-",
        "-",
        "-",
        "-"
      ],
      description: "Coming Soon..."
    },
    {
      name: "Doruk",
      category: "Formula Student Main Car Development",
      year: "2025-2026",
      image: "photos/amblemSTROKELIGHT.png",
      specs: {
        power: "- HP",
        weight: "- kg",
        topSpeed: "- km/h",
        acceleration: "- in -s"
      },
      features: [
        "Experimental chassis design",
        "Prototype suspension system",
        "Data acquisition platform",
        "Modular component architecture"
      ],
      description: "Coming Soon..."
    }
  ];

  return (
      <section id="vehicles" className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#a02638]">Vehicles</span>
            </h2>
            <p className="text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed">
              Each vehicle represents years of engineering excellence, innovative design,
              and relentless pursuit of performance. From concept to competition,
              we build machines that dominate the track.
            </p>
          </div>

          <div className="space-y-16">
            {vehicles.map((vehicle, index) => (
                <div
                    key={index}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                        index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                    }`}
                >
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden">
                      <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="w-full h-96 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-[#a02638] text-white px-4 py-2 rounded-lg font-semibold">
                      {vehicle.year}
                    </div>
                  </div>

                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div>
                      <div className="inline-block bg-[#a02638]/20 text-[#a02638] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                        {vehicle.category}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{vehicle.name}</h3>
                      <p className="text-[#cccccc] leading-relaxed mb-6">
                        {vehicle.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Zap className="w-5 h-5 text-[#a02638] mr-2" />
                          <span className="text-[#cccccc] text-sm">Power</span>
                        </div>
                        <div className="text-white font-bold text-lg">{vehicle.specs.power}</div>
                      </div>
                      <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Weight className="w-5 h-5 text-[#a02638] mr-2" />
                          <span className="text-[#cccccc] text-sm">Weight</span>
                        </div>
                        <div className="text-white font-bold text-lg">{vehicle.specs.weight}</div>
                      </div>
                      <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Gauge className="w-5 h-5 text-[#a02638] mr-2" />
                          <span className="text-[#cccccc] text-sm">Top Speed</span>
                        </div>
                        <div className="text-white font-bold text-lg">{vehicle.specs.topSpeed}</div>
                      </div>
                      <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Settings className="w-5 h-5 text-[#a02638] mr-2" />
                          <span className="text-[#cccccc] text-sm">0-100 km/h</span>
                        </div>
                        <div className="text-white font-bold text-lg">{vehicle.specs.acceleration}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {vehicle.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-[#cccccc]">
                              <div className="w-2 h-2 bg-[#a02638] rounded-full mr-3"></div>
                              {feature}
                            </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="bg-gradient-to-r from-[#a02638]/10 to-[#a02638]/5 border border-[#a02638]/20 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Technical Innovation</h3>
              <p className="text-xl text-[#cccccc] max-w-4xl mx-auto leading-relaxed mb-8">
                Every vehicle we build incorporates the latest in automotive technology,
                from advanced materials and manufacturing techniques to cutting-edge
                electronics and data systems. We don't just build cars – we engineer the future.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-[#a02638] to-[#831c2b] text-white font-semibold rounded-lg hover:from-[#831c2b] hover:to-[#6a1623] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-[#a02638]/25">
                View Technical Specifications
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Vehicles;