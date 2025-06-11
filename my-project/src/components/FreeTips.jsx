import React, { useState, useEffect } from 'react';
import { 
  Car, 
  Truck, 
  Wrench, 
  AlertTriangle, 
  CheckCircle, 
  Lightbulb, 
  Clock, 
  DollarSign,
  Thermometer,
  Gauge,
  Battery,
  Droplets,
  Wind,
  Shield,
  Search,
  Filter,
  BookOpen,
  Play,
  Pause,
  RotateCcw,
  TrendingUp,
  Award,
  Users,
  MessageCircle,
  Heart,
  Share2,
  ChevronRight,
  Star,
  Calendar,
  Tag
} from 'lucide-react';

const FreeTips = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [animatedVehicles, setAnimatedVehicles] = useState([]);
  const [likedTips, setLikedTips] = useState(new Set());
  const [tipOfTheDay, setTipOfTheDay] = useState(0);

  // Vehicle animation setup
  useEffect(() => {
    const vehicles = [
      { id: 1, type: 'car', x: -100, speed: 1.5, lane: 1, color: 'text-blue-500' },
      { id: 2, type: 'truck', x: -200, speed: 1.2, lane: 2, color: 'text-orange-500' },
      { id: 3, type: 'car', x: -150, speed: 1.8, lane: 3, color: 'text-green-500' },
    ];
    setAnimatedVehicles(vehicles);

    const interval = setInterval(() => {
      setAnimatedVehicles(prev => 
        prev.map(vehicle => ({
          ...vehicle,
          x: vehicle.x >= window.innerWidth + 100 ? -250 : vehicle.x + vehicle.speed
        }))
      );
    }, 50);

    // Rotate tip of the day
    const tipInterval = setInterval(() => {
      setTipOfTheDay(prev => (prev + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(tipInterval);
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All Tips', icon: BookOpen, color: 'bg-gray-500' },
    { id: 'maintenance', name: 'Maintenance', icon: Wrench, color: 'bg-blue-500' },
    { id: 'safety', name: 'Safety', icon: Shield, color: 'bg-red-500' },
    { id: 'performance', name: 'Performance', icon: TrendingUp, color: 'bg-green-500' },
    { id: 'seasonal', name: 'Seasonal', icon: Thermometer, color: 'bg-orange-500' },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: AlertTriangle, color: 'bg-yellow-500' },
  ];

  const dailyTips = [
    {
      title: "Check Your Oil Level Weekly",
      description: "Regular oil checks prevent costly engine damage",
      icon: "🛢️",
      tip: "Pull out the dipstick, clean it, reinsert fully, then check the level"
    },
    {
      title: "Monitor Tire Pressure Monthly", 
      description: "Proper pressure improves fuel economy and safety",
      icon: "🛞",
      tip: "Check when tires are cold, ideally in the morning"
    },
    {
      title: "Listen to Your Brakes",
      description: "Squealing sounds indicate pad replacement needed",
      icon: "🔧",
      tip: "Don't ignore grinding sounds - they indicate rotor damage"
    }
  ];

  const tips = [
    {
      id: 1,
      category: 'maintenance',
      title: 'Engine Oil Change Schedule',
      description: 'Learn when and how often to change your engine oil for optimal performance',
      content: 'Most modern cars need oil changes every 7,500-10,000 miles with synthetic oil. Check your owner\'s manual for specific recommendations. Signs you need an oil change: dark, thick oil, engine noise, or oil change light.',
      difficulty: 'Easy',
      timeRequired: '30 minutes',
      costSaving: '$50-100',
      icon: '🛢️',
      tips: [
        'Use the oil grade specified in your owner\'s manual',
        'Change the oil filter every time you change oil',
        'Check oil level weekly with the dipstick',
        'Warm up engine before checking oil level'
      ],
      likes: 245,
      shares: 89,
      featured: true
    },
    {
      id: 2,
      category: 'safety',
      title: 'Brake System Warning Signs',
      description: 'Recognize early warning signs of brake problems before they become dangerous',
      content: 'Your brakes are your most important safety system. Watch for squealing, grinding, vibration, or soft brake pedal. These signs indicate immediate attention needed.',
      difficulty: 'Easy',
      timeRequired: '5 minutes',
      costSaving: '$200-500',
      icon: '🛑',
      tips: [
        'Squealing means brake pads are wearing thin',
        'Grinding indicates metal-on-metal contact',
        'Vibration suggests warped rotors',
        'Soft pedal could mean brake fluid leak'
      ],
      likes: 312,
      shares: 156,
      featured: true
    },
    {
      id: 3,
      category: 'performance',
      title: 'Improve Fuel Economy',
      description: 'Simple techniques to maximize your vehicle\'s fuel efficiency',
      content: 'Small changes in driving habits can improve fuel economy by 15-20%. Maintain steady speeds, avoid rapid acceleration, and keep tires properly inflated.',
      difficulty: 'Easy',
      timeRequired: 'Ongoing',
      costSaving: '$300-600/year',
      icon: '⛽',
      tips: [
        'Maintain steady highway speeds',
        'Remove excess weight from vehicle',
        'Keep tires inflated to proper pressure',
        'Use cruise control on highways'
      ],
      likes: 189,
      shares: 67,
      featured: false
    },
    {
      id: 4,
      category: 'seasonal',
      title: 'Winter Car Preparation',
      description: 'Essential steps to prepare your vehicle for cold weather',
      content: 'Cold weather is hard on vehicles. Check battery, antifreeze, tires, and keep emergency supplies. Proper preparation prevents roadside emergencies.',
      difficulty: 'Medium',
      timeRequired: '2 hours',
      costSaving: '$150-300',
      icon: '❄️',
      tips: [
        'Test battery and charging system',
        'Check antifreeze concentration',
        'Inspect tire tread and pressure',
        'Keep emergency kit in car'
      ],
      likes: 156,
      shares: 78,
      featured: false
    },
    {
      id: 5,
      category: 'troubleshooting',
      title: 'Engine Won\'t Start Diagnosis',
      description: 'Step-by-step guide to diagnose starting problems',
      content: 'Starting problems usually involve fuel, spark, or compression. Check battery connections first, then fuel delivery, then ignition system.',
      difficulty: 'Medium',
      timeRequired: '30-60 minutes',
      costSaving: '$100-200',
      icon: '🔋',
      tips: [
        'Check battery terminals for corrosion',
        'Listen for fuel pump when key turns on',
        'Check for spark at spark plugs',
        'Verify engine cranks properly'
      ],
      likes: 278,
      shares: 134,
      featured: false
    },
    {
      id: 6,
      category: 'maintenance',
      title: 'Tire Rotation and Care',
      description: 'Extend tire life and improve safety with proper rotation',
      content: 'Regular tire rotation ensures even wear and extends tire life. Most vehicles need rotation every 6,000-8,000 miles. Check pressure monthly.',
      difficulty: 'Medium',
      timeRequired: '45 minutes',
      costSaving: '$200-400',
      icon: '🛞',
      tips: [
        'Rotate tires every 6,000-8,000 miles',
        'Check tire pressure monthly',
        'Inspect for uneven wear patterns',
        'Balance and align when needed'
      ],
      likes: 198,
      shares: 92,
      featured: false
    }
  ];

  const filteredTips = tips.filter(tip => {
    const matchesCategory = selectedCategory === 'all' || tip.category === selectedCategory;
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleLike = (tipId) => {
    setLikedTips(prev => {
      const newSet = new Set(prev);
      if (newSet.has(tipId)) {
        newSet.delete(tipId);
      } else {
        newSet.add(tipId);
      }
      return newSet;
    });
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const VehicleIcon = ({ type, style, color }) => (
    <div 
      className={`absolute text-3xl transition-all duration-100 ${color}`}
      style={style}
    >
      {type === 'truck' ? '🚛' : '🚗'}
    </div>
  );

  const TipCard = ({ tip }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
      {tip.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </span>
        </div>
      )}
      
      <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-blue-100 transition-all duration-300">
        <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {tip.icon}
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${getDifficultyColor(tip.difficulty)}`}>
            {tip.difficulty}
          </span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-lg text-xs font-semibold flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {tip.timeRequired}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {tip.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {tip.description}
        </p>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-700 mb-3">{tip.content}</p>
          <div className="space-y-2">
            {tip.tips.map((tipItem, index) => (
              <div key={index} className="flex items-start text-xs text-gray-600">
                <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>{tipItem}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-green-600 font-semibold">
            <DollarSign className="w-4 h-4 mr-1" />
            Save: {tip.costSaving}
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <button 
              onClick={() => toggleLike(tip.id)}
              className={`flex items-center gap-1 transition-colors ${
                likedTips.has(tip.id) ? 'text-red-500' : 'hover:text-red-500'
              }`}
            >
              <Heart className={`w-4 h-4 ${likedTips.has(tip.id) ? 'fill-current' : ''}`} />
              {tip.likes + (likedTips.has(tip.id) ? 1 : 0)}
            </button>
            <div className="flex items-center gap-1">
              <Share2 className="w-4 h-4" />
              {tip.shares}
            </div>
          </div>
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
          Read Full Guide
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      {/* Animated Background Vehicles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10 z-0">
        {animatedVehicles.map((vehicle) => (
          <VehicleIcon
            key={vehicle.id}
            type={vehicle.type}
            color={vehicle.color}
            style={{
              left: `${vehicle.x}px`,
              top: `${100 + (vehicle.lane * 150)}px`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center z-10">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
            <Lightbulb className="w-4 h-4 mr-2" />
            Free Expert Automotive Tips
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Free Auto
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Tips & Guides
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Learn from our certified mechanics with step-by-step guides, money-saving tips, 
            and expert advice to keep your vehicle running smoothly and safely.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-white px-6 py-3 rounded-lg shadow-md">
              <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
              <span className="font-semibold">50+ Guides</span>
            </div>
            <div className="flex items-center bg-white px-6 py-3 rounded-lg shadow-md">
              <Users className="w-5 h-5 text-green-500 mr-2" />
              <span className="font-semibold">Expert Approved</span>
            </div>
            <div className="flex items-center bg-white px-6 py-3 rounded-lg shadow-md">
              <DollarSign className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="font-semibold">Save $1000s</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tip of the Day */}
      <section className="relative z-10 mb-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                Tip of the Day
              </h2>
              <div className="flex gap-2">
                {dailyTips.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === tipOfTheDay ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-bold mb-2">{dailyTips[tipOfTheDay].title}</h3>
                <p className="opacity-90 mb-4">{dailyTips[tipOfTheDay].description}</p>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm">{dailyTips[tipOfTheDay].tip}</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">{dailyTips[tipOfTheDay].icon}</div>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="relative z-10 mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tips and guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                        selectedCategory === category.id
                          ? `${category.color} text-white shadow-lg transform scale-105`
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="relative z-10 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {selectedCategory === 'all' ? 'All Tips' : 
               categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <span className="text-gray-600 font-medium">
              {filteredTips.length} tips found
            </span>
          </div>
          
          {filteredTips.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No tips found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredTips.map((tip, index) => (
                <div 
                  key={tip.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <TipCard tip={tip} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative z-10 bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Get Weekly Auto Tips</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for exclusive tips, maintenance reminders, and special offers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Subscribe
            </button>
          </div>
          
          <p className="text-sm opacity-75 mt-4">
            Join 5,000+ car owners who save money with our tips
          </p>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default FreeTips;