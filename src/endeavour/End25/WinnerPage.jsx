'use client';
import { useState, useEffect } from 'react';

// Trophy SVG Component
const Trophy = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M12 15.5V18M12 18C10.3431 18 9 19.3431 9 21H15C15 19.3431 13.6569 18 12 18ZM6.5 7.5H3M3 7.5V6C3 5.44772 3.44772 5 4 5H6.5M3 7.5C3 8.32843 3.67157 9 4.5 9H6.5M17.5 7.5H21M21 7.5V6C21 5.44772 20.5523 5 20 5H17.5M21 7.5C21 8.32843 20.3284 9 19.5 9H17.5M6.5 5V3.5C6.5 3.22386 6.72386 3 7 3H17C17.2761 3 17.5 3.22386 17.5 3.5V5M6.5 5V9M17.5 5V9M8 12.25C8 13.7688 9.23122 15 10.75 15H13.25C14.7688 15 16 13.7688 16 12.25V9H8V12.25Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Medal SVG Component
const Medal = ({ className, rank }) => {
  const colors = {
    1: '#00FCB8',
    2: '#00B38A',
    3: '#007A62'
  };
  
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="13" r="7" stroke={colors[rank]} strokeWidth="1.5" />
      <path d="M12 6V2M15 3L12 2L9 3" stroke={colors[rank]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="12" y="16" textAnchor="middle" fontSize="8" fill={colors[rank]} fontWeight="bold">{rank}</text>
    </svg>
  );
};

// LinkedIn Icon
const LinkedInIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V10H9V17ZM7.694 8.717C6.923 8.717 6.408 8.203 6.408 7.517C6.408 6.831 6.922 6.317 7.779 6.317C8.55 6.317 9.065 6.831 9.065 7.517C9.065 8.203 8.551 8.717 7.694 8.717ZM18 17H15.558V13.174C15.558 12.116 14.907 11.872 14.663 11.872C14.419 11.872 13.605 12.035 13.605 13.174C13.605 13.337 13.605 17 13.605 17H11.082V10H13.605V10.977C13.93 10.407 14.581 10 15.802 10C17.023 10 18 10.977 18 13.174V17Z" />
  </svg>
);

// Confetti Animation Component
const Confetti = () => {
  const [confetti, setConfetti] = useState([]);
  
  useEffect(() => {
    const pieces = Array.from({ length: 80 }).map((_, i) => {
      const size = Math.random() * 10 + 5;
      const x = Math.random() * 100;
      const delay = Math.random() * 3;
      const duration = Math.random() * 5 + 2;
      const color = Math.random() > 0.6 ? '#00FCB8' : (Math.random() > 0.5 ? '#00B38A' : '#007A62');
      
      return { id: i, size, x, delay, duration, color };
    });
    
    setConfetti(pieces);
  }, []);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="absolute rounded-full"
          style={{
            left: `${piece.x}%`,
            top: '-10px',
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            animation: `fall ${piece.duration}s linear ${piece.delay}s infinite`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// Hexagon Grid Background
const HexagonGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexGrid" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <path d="M28 0L0 50l28 50h56L112 50 84 0z" stroke="#00FCB8" strokeWidth="0.5" fill="none"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexGrid)" />
      </svg>
    </div>
  );
};

// Spotlight Animation
const Spotlight = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-teal-400/20 to-transparent rounded-full animate-pulse" style={{ filter: 'blur(50px)' }} />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-teal-400/10 to-transparent rounded-full animate-pulse" style={{ animationDelay: '1s', filter: 'blur(40px)' }} />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-radial from-teal-400/15 to-transparent rounded-full animate-pulse" style={{ animationDelay: '2s', filter: 'blur(45px)' }} />
    </div>
  );
};

// Animated Victory Badge
const VictoryBadge = ({ rank }) => {
  const colors = {
    1: 'border-teal-400 text-teal-400',
    2: 'border-teal-600 text-teal-600',
    3: 'border-teal-800 text-teal-800'
  };
  
  const sizes = {
    1: 'w-24 h-24',
    2: 'w-20 h-20',
    3: 'w-16 h-16'
  };
  
  const labels = {
    1: 'GOLD',
    2: 'SILVER', 
    3: 'BRONZE'
  };
  
  return (
    <div className={`relative ${sizes[rank]} flex items-center justify-center`}>
      <div className={`absolute inset-0 ${colors[rank]} border-4 rounded-full animate-ping opacity-30`}></div>
      <div className={`relative flex items-center justify-center ${colors[rank]} border-2 rounded-full ${sizes[rank]} font-bold`}>
        <div className="text-center">
          <div className="text-2xl">{rank}</div>
          <div className="text-xs tracking-wider">{labels[rank]}</div>
        </div>
      </div>
    </div>
  );
};

// Winner Card Component with hover effects and animations
const WinnerCard = ({ rank, teamName, members, eventName, date }) => {
  // Ensure rank is a number
  const numericRank = typeof rank === 'string' ? parseInt(rank) : rank;
  
  const colors = {
    1: 'from-teal-400/20 to-transparent border-teal-400/50',
    2: 'from-teal-600/20 to-transparent border-teal-600/50',
    3: 'from-teal-800/20 to-transparent border-teal-800/50',
  };
  
  const badgeColors = {
    1: 'text-teal-400 border-teal-400',
    2: 'text-teal-600 border-teal-600', 
    3: 'text-teal-800 border-teal-800',
  };
  
  return (
    <div className={`relative rounded-lg p-6 border bg-gradient-to-br ${colors[numericRank]} backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-400/20 group`}>
      <div className="absolute -top-4 -right-4">
        <div className={`w-12 h-12 rounded-full bg-black flex items-center justify-center font-bold shadow-lg text-xl border ${badgeColors[numericRank]}`}>
          {numericRank}
        </div>
      </div>
      
      <div className="flex flex-col h-full">
        <div className="mb-4 flex items-start">
          <Trophy className={`w-8 h-8 ${numericRank === 1 ? 'text-teal-400' : numericRank === 2 ? 'text-teal-600' : 'text-teal-800'} mr-3`} />
          <h3 className="text-2xl font-bold text-teal-400">{teamName}</h3>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-teal-200 mb-2 border-b border-teal-800/30 pb-1">Team Members</h4>
          <div className="grid grid-cols-2 gap-2">
            {members.map((member, idx) => (
              <div key={idx} className="text-sm text-white flex items-center">
                <div className={`w-2 h-2 rounded-full ${numericRank === 1 ? 'bg-teal-400' : numericRank === 2 ? 'bg-teal-600' : 'bg-teal-800'} mr-2`}></div>
                {member}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-grow space-y-4">
          <div>
            <h4 className="text-sm uppercase tracking-wider text-teal-200 mb-1 border-b border-teal-800/30 pb-1">Event</h4>
            <p className="text-white">{eventName}</p>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider text-teal-200 mb-1 border-b border-teal-800/30 pb-1">Date</h4>
            <p className="text-white">{date}</p>
          </div>
        </div>
        
      </div>
      
      {/* Glowing effect on hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-400/0 via-teal-400/10 to-teal-400/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
    </div>
  );
};

// Event Section Component with parallax scrolling effect
const EventSection = ({ title, winners, specialEvent }) => {
  return (
    <div className="mb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/5 to-black/5 rounded-xl"></div>
      <div className="relative bg-black/40 p-8 rounded-xl border border-teal-900/30 backdrop-blur-sm">
        <div className="flex items-center mb-8">
          <div className="w-1 h-12 bg-teal-400 mr-4"></div>
          <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        
        <div className={`grid ${specialEvent ? 'grid-cols-1 md:grid-cols-3 gap-6' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}`}>
          {winners.map((winner, index) => (
            <WinnerCard 
              key={index} 
              rank={winner.rank} 
              teamName={winner.teamName} 
              members={winner.members}
              eventName={winner.eventName}
              date={winner.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Animated counting number
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end, duration]);
  
  return <span>{count}+</span>;
};

// Stats Section
const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 z-50 md:grid-cols-4 gap-6 mb-16">
      <div className="bg-black/30 border border-teal-900/30 rounded-lg p-6 text-center">
        <div className="text-4xl font-bold text-teal-400 mb-2"><CountUp end={250} /></div>
        <div className="text-teal-200 uppercase tracking-wider text-sm">Teams</div>
      </div>
      <div className="bg-black/30 border border-teal-900/30 rounded-lg p-6 text-center">
        <div className="text-4xl font-bold text-teal-400 mb-2"><CountUp end={7} /></div>
        <div className="text-teal-200 uppercase tracking-wider text-sm">Events</div>
      </div>
      <div className="bg-black/30 border border-teal-900/30 rounded-lg p-6 text-center">
        <div className="text-4xl font-bold text-teal-400 mb-2"><CountUp end={1000000} /></div>
        <div className="text-teal-200 uppercase tracking-wider text-sm">Prize Pool</div>
      </div>
      <div className="bg-black/30 border border-teal-900/30 rounded-lg p-6 text-center">
        <div className="text-4xl font-bold text-teal-400 mb-2"><CountUp end={1000} /></div>
        <div className="text-teal-200 uppercase tracking-wider text-sm">Participants</div>
      </div>
    </div>
  );
};

// Hero Section Component with parallax scrolling effect
const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-black via-[#001a1a] to-black h-[80vh] flex items-center justify-center overflow-hidden">
      <HexagonGrid />
      <Spotlight />
      <Confetti />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-20">
        <div className="mb-8 inline-block relative">
          <div className="absolute inset-0 bg-teal-400/20 rounded-full filter blur-xl animate-pulse"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center bg-black/30 px-4 py-2 rounded-full border border-teal-900/30">
            <span className="text-teal-200">Champions</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight">
        ENDEAVOUR <span className="text-teal-400">2025</span>
        </h1>
        
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mb-6"></div>
        
        <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-10">
          Celebrating excellence, innovation, and breakthrough achievements
        </p>
        
        <button className="bg-transparent border-2 border-teal-400 hover:bg-teal-400 text-teal-400 hover:text-black py-3 px-8 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/50"
        onClick={() => window.scrollTo({ top: document.getElementById('winners').offsetTop, behavior: 'smooth' })}
        >
          View Winners
        </button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-10 z-20">
        <div className="animate-bounce">
          <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function WinnersPage() {
  const events = [
    {
      title: "B-Quiz",
      specialEvent: true,
      winners: [
        { 
          rank: 1, 
          teamName: "Team Phoenix", 
          members: ["Sarah Johnson", "Michael Chen", "Aisha Patel", "David Kim"],
          eventName: "B-Quiz",
          date: "April 15, 2025"
        },
        { 
          rank: 2, 
          teamName: "Digital Wizards", 
          members: ["Emma Rodriguez", "James Smith", "Olivia Wang", "Noah Garcia"],
          eventName: "B-Quiz",
          date: "April 15, 2025"
        },
        { 
          rank: 3, 
          teamName: "Innovation Hub", 
          members: ["Sophia Lee", "William Brown", "Isabella Martinez", "Benjamin Wilson"],
          eventName: "B-Quiz",
          date: "April 15, 2025"
        }
      ]
    },
    {
      title: "B-Plan",
      specialEvent: false,
      winners: [
        { 
          rank: 1, 
          teamName: "Code Masters", 
          members: ["Lucas Thompson", "Emily Davis", "Daniel Martin", "Ava Robinson"],
          eventName: "B-Plan",
          date: "March 28, 2025"
        },
        { 
          rank: 2, 
          teamName: "Binary Brigade", 
          members: ["Alexander Wright", "Mia Taylor", "Ethan Adams", "Charlotte Nelson"],
          eventName: "B-Plan",
          date: "March 28, 2025"
        }
      ]
    },
    {
      title: "Market Watch",
      specialEvent: false,
      winners: [
        { 
          rank: 1, 
          teamName: "UX Pioneers", 
          members: ["Ella Scott", "Logan Parker", "Grace Lewis", "Mason Hall"],
          eventName: "Market Watch",
          date: "February 12, 2025"
        },
        { 
          rank: 2, 
          teamName: "Interface Innovators", 
          members: ["Scarlett Young", "Henry King", "Layla Allen", "Jackson Baker"],
          eventName: "Market Watch",
          date: "February 12, 2025"
        }
      ]
    },
    {
      title: "IPL Mania",
      specialEvent: false,
      winners: [
        { 
          rank: 1, 
          teamName: "Data Artisans", 
          members: ["Zoe Turner", "Gabriel Clark", "Audrey Hill", "Leo Mitchell"],
          eventName: "IPL Mania",
          date: "January 30, 2025"
        },
        { 
          rank: 2, 
          teamName: "Insight Team", 
          members: ["Lily Roberts", "Matthew White", "Victoria Green", "Andrew Moore"],
          eventName: "IPL Mania",
          date: "January 30, 2025"
        }
      ]
    },
    {
      title: "Corporate Arena",
      specialEvent: false,
      winners: [
        { 
          rank: 1, 
          teamName: "Future Shapers", 
          members: ["Nora Adams", "Samuel Cooper", "Amelia Hayes", "Thomas Campbell"],
          eventName: "Corporate Arena",
          date: "March 5, 2025"
        },
        { 
          rank: 2, 
          teamName: "Paradigm Shifters", 
          members: ["Ruby Collins", "Julian Reed", "Stella Watson", "Owen Hughes"],
          eventName: "Corporate Arena",
          date: "March 5, 2025"
        }
      ]
    },
    {
      title: "Hacktrepreneur",
      specialEvent: false,
      winners: [
        { 
          rank: 1, 
          teamName: "Green Tech Solutions", 
          members: ["Penelope Brooks", "Theodore Murphy", "Leah Butler", "Caleb Richardson"],
          eventName: "Hacktrepreneur",
          date: "February 22, 2025"
        },
        { 
          rank: 2, 
          teamName: "Sustainable Futures", 
          members: ["Josephine Foster", "Sebastian Gray", "Violet Peterson", "Connor Ward"],
          eventName: "Hacktrepreneur",
          date: "February 22, 2025"
        }
      ]
    },
    {
      title: "Treasure Hunt",
      specialEvent: false,
      winners: [
        { 
          rank: 1, 
          teamName: "Crowd Favorites", 
          members: ["Isabelle Jenkins", "Harrison Bennett", "Madeline Price", "Jonathan Cox"],
          eventName: "Treasure Hunt",
          date: "April 2, 2025"
        }
      ]
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#001a1a] to-black text-white relative overflow-hidden" style={{ backgroundColor: "#002421" }}>
      <div className="absolute top-0 left-0 w-full h-full border-t z-10 border-l border-teal-500/5 grid grid-cols-4 grid-rows-4">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="border-b border-r border-teal-500/5" />
        ))}
      </div>
      <HeroSection />
      
      <div className="container mx-auto px-4 py-16 relative z-10" id='winners'>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-teal-400">
            Hall of Champions
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mb-6"></div>
          <p className="text-teal-200 max-w-2xl mx-auto">
            Recognizing outstanding achievement and innovation across all categories
          </p>
        </div>
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Event Sections */}
        {events.map((event, index) => (
          <EventSection 
            key={index}
            title={event.title}
            winners={event.winners}
            specialEvent={event.specialEvent}
          />
        ))}
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 border border-teal-400/20 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-24 border border-teal-400/20 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Footer gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}