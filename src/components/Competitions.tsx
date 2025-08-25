import { Trophy, Calendar, MapPin, Medal, Star, Clock } from 'lucide-react';

const Competitions = () => {
  const achievements = [
    {
      year: "-",
      event: "-",
      position: "-",
      category: "-",
      location: "-",
      points: "-",
      highlights: ["-"]
    },
    {
      year: "-",
      event: "-",
      position: "-",
      category: "-",
      location: "-",
      points: "-",
      highlights: ["-"]
    },
    {
      year: "-",
      event: "-",
      position: "-",
      category: "-",
      location: "-",
      points: "-",
      highlights: ["-"]
    },
  ];

  const upcomingEvents = [
    {
      date: "Summer, 2026",
      event: "Formula Student ",
      location: "Hockenheimring",
      status: " Not-Registered",
      category: "Formula Student"
    }
  ];

  return (
    <section id="competitions" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-red-500">Competitions</span> & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            -
          </p>
        </div>

        {/* Achievements Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Recent Achievements</h3>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 md:p-8 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  {/* Achievement Info */}
                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white">{achievement.event}</h4>
                        <div className="flex items-center text-gray-400 mt-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="mr-4">{achievement.year}</span>
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{achievement.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                        {achievement.category}
                      </span>
                      <span className="text-gray-300">Score: {achievement.points}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {achievement.highlights.map((highlight, highlightIndex) => (
                        <span 
                          key={highlightIndex}
                          className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Position Badge */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4">
                      <Medal className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white">{achievement.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Upcoming Events</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-4">
                    <Calendar className="w-8 h-8 text-red-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{event.event}</h4>
                  <p className="text-gray-400 mb-2">{event.location}</p>
                  <div className="flex items-center justify-center text-gray-300 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Category:</span>
                    <span className="text-white font-semibold">{event.category}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      event.status === 'Registered' ? 'bg-green-600/20 text-green-400' :
                      event.status === 'Preparing' ? 'bg-yellow-600/20 text-yellow-400' :
                      'bg-blue-600/20 text-blue-400'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competition Stats */}
        <div className="bg-gradient-to-r from-red-600/10 to-red-800/10 border border-red-600/20 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Competition Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-4">
                <Trophy className="w-8 h-8 text-red-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">-</div>
              <div className="text-gray-400">Competitions</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-4">
                <Medal className="w-8 h-8 text-red-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">-</div>
              <div className="text-gray-400">Podium Finishes</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-4">
                <Star className="w-8 h-8 text-red-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">-</div>
              <div className="text-gray-400">Special Awards</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-red-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">-</div>
              <div className="text-gray-400">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitions;