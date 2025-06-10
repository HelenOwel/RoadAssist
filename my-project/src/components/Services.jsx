import React, { useState, useEffect } from 'react';
import { 
  Wrench, Clock, MapPin, Phone, Star, Heart, Shield, 
  Zap, Award, CheckCircle, ArrowRight, Car, Battery,
  Settings, Droplets, Thermometer, Disc, Users,
  TrendingUp, Coffee, Smile
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [floatingIcons, setFloatingIcons] = useState([]);

  // Floating icons animation
  useEffect(() => {
    const icons = [
      { id: 1, icon: '🔧', x: 10, y: 20, speed: 0.5 },
      { id: 2, icon: '⚡', x: 80, y: 60, speed: 0.3 },
      { id: 3, icon: '🚗', x: 70, y: 30, speed: 0.4 },
      { id: 4, icon: '🛠️', x: 20, y: 70, speed: 0.6 },
      { id: 5, icon: '🔋', x: 90, y: 80, speed: 0.2 },
    ];
    setFloatingIcons(icons);

    const interval = setInterval(() => {
      setFloatingIcons(prev => 
        prev.map(icon => ({
          ...icon,
          y: icon.y <= -10 ? 110 : icon.y - icon.speed
        }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const heroServices = [
    {
      title: "We Don't Just Fix Cars",
      subtitle: "We Create Peace of Mind",
      description: "Every service comes with a smile, a guarantee, and the promise that you'll drive away happier than when you arrived."
    }
  ];

  const mainServices = [
    {
      id: 1,
      title: "Engine Diagnostics & Repair",
      sweetLine: "Your engine's health is our heartbeat 💓",
      description: "We listen to your car like a doctor listens to your heart. Our advanced diagnostic tools and experienced ears can detect the tiniest whisper of trouble before it becomes a roar.",
      features: [
        "Free comprehensive health check",
        "Same-day diagnosis guarantee",
        "Transparent pricing - no surprises",
        "90-day warranty on all repairs"
      ],
      icon: Settings,
      color: "from-blue-500 to-blue-700",
      price: "Starting at $89",
      testimonial: "They found my engine problem in 10 minutes when other shops couldn't figure it out in days!"
    },
    {
      id: 2,
      title: "Mobile Mechanic Services",
      sweetLine: "We come to you - because your time is precious ⏰",
      description: "Stuck at home? At work? On the roadside? No problem! Our mobile mechanics bring the garage to you, complete with professional tools and that same caring service.",
      features: [
        "24/7 emergency response",
        "Fully equipped mobile units",
        "Same quality as in-shop service",
        "Weather-protected service"
      ],
      icon: MapPin,
      color: "from-green-500 to-green-700",
      price: "Starting at $99",
      testimonial: "Changed my oil in my driveway while I worked from home. Absolutely perfect!"
    },
    {
      id: 3,
      title: "Battery & Electrical Services",
      sweetLine: "Sparking joy, one connection at a time ⚡",
      description: "From a simple jump-start to complex electrical diagnostics, we'll get your car's electrical system humming like a happy tune.",
      features: [
        "Free battery testing",
        "Jump-start service anywhere",
        "Alternator & starter repair",
        "LED upgrade installations"
      ],
      icon: Battery,
      color: "from-yellow-500 to-orange-600",
      price: "Starting at $59",
      testimonial: "My headlights are so bright now, I feel like I'm driving a spaceship!"
    },
    {
      id: 4,
      title: "Brake Services",
      sweetLine: "Stopping power that stops your worries 🛑",
      description: "Your safety is our priority. We don't just replace brake pads - we ensure every stop is smooth, confident, and worry-free.",
      features: [
        "Free brake inspection",
        "Lifetime brake pad warranty",
        "Road test included",
        "Premium ceramic options"
      ],
      icon: Disc,
      color: "from-red-500 to-red-700",
      price: "Starting at $149",
      testimonial: "My car stops like butter now. I actually look forward to red lights!"
    },
    {
      id: 5,
      title: "Oil Changes & Maintenance",
      sweetLine: "Love your car longer with liquid gold 🌟",
      description: "Our oil changes aren't just about oil - they're about extending your car's life and keeping it purring like a happy cat.",
      features: [
        "15-minute express service",
        "Full multi-point inspection",
        "Lifetime oil change club",
        "Reminder notifications"
      ],
      icon: Droplets,
      color: "from-purple-500 to-purple-700",
      price: "Starting at $39",
      testimonial: "Best oil change experience ever! They even vacuumed my car for free!"
    },
    {
      id: 6,
      title: "Air Conditioning Services",
      sweetLine: "Cool comfort that makes every drive a breeze 🌬️",
      description: "Whether it's blazing summer or you just want that perfect temperature, we'll make sure your AC keeps you cool, calm, and collected.",
      features: [
        "Complete AC system diagnosis",
        "Eco-friendly refrigerant",
        "Cabin air filter replacement",
        "Performance guarantee"
      ],
      icon: Thermometer,
      color: "from-cyan-500 to-blue-600",
      price: "Starting at $79",
      testimonial: "My AC is so cold now, I need a sweater in summer!"
    }
  ];

  const whyChooseUs = [
    {
      icon: Heart,
      title: "We Actually Care",
      description: "Every car gets the same love and attention we'd give our own family's vehicles."
    },
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "Average service time is 30% faster than industry standard - without cutting corners."
    },
    {
      icon: Shield,
      title: "Rock-Solid Guarantees",
      description: "Every service comes with our 'Drive Happy' guarantee. Not satisfied? We'll make it right."
    },
    {
      icon: Award,
      title: "Award-Winning Team",
      description: "Our mechanics aren't just certified - they're passionate artists who happen to work on cars."
    }
  ];

  const ServiceCard = ({ service, index }) => (
    <div 
      className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 overflow-hidden group cursor-pointer ${
        activeService === service.id ? 'ring-4 ring-blue-400' : ''
      }`}
      onClick={() => setActiveService(activeService === service.id ? null : service.id)}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Gradient Header */}
      <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 opacity-20 transform rotate-12 scale-150">
          <service.icon size={120} />
        </div>
        <div className="relative z-10">
          <service.icon size={40} className="mb-4" />
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
          <p className="text-lg opacity-90 font-medium">{service.sweetLine}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            What's Included:
          </h4>
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-green-600">{service.price}</span>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center group">
              Book Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="flex items-start">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm text-gray-700 italic">"{service.testimonial}"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      {/* Floating Background Icons */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10 z-0">
        {floatingIcons.map((icon) => (
          <div
            key={icon.id}
            className="absolute text-4xl animate-pulse"
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              animationDelay: `${icon.id * 0.5}s`
            }}
          >
            {icon.icon}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center z-10">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-bounce">
            <Heart className="w-4 h-4 mr-2 text-red-500" />
            Services That Make You Smile
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 leading-tight">
            We Don't Just
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Fix Cars
            </span>
          </h1>
          
          <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            We create <span className="text-blue-600 font-semibold">peace of mind</span>, build <span className="text-purple-600 font-semibold">lasting relationships</span>, 
            and turn car troubles into <span className="text-pink-600 font-semibold">success stories</span>. 
            Every service comes with a smile, a guarantee, and the promise that you'll drive away happier than when you arrived.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center bg-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Users className="w-6 h-6 text-blue-500 mr-3" />
              <div className="text-left">
                <div className="font-bold text-2xl text-gray-800">10,000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
            <div className="flex items-center bg-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <TrendingUp className="w-6 h-6 text-green-500 mr-3" />
              <div className="text-left">
                <div className="font-bold text-2xl text-gray-800">99.8%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
            <div className="flex items-center bg-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Coffee className="w-6 h-6 text-orange-500 mr-3" />
              <div className="text-left">
                <div className="font-bold text-2xl text-gray-800">15 min</div>
                <div className="text-sm text-gray-600">Average Wait</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Services That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Wow</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is crafted with love, delivered with expertise, and guaranteed to exceed your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Our Customers Choose Us Again & Again</h2>
            <p className="text-xl opacity-90">It's not just about fixing cars - it's about building relationships that last.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-pink-400 group-hover:to-yellow-500 transition-all duration-300">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="opacity-90 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="mb-8">
            <Smile size={80} className="mx-auto mb-6 animate-bounce" />
          </div>
          <h2 className="text-5xl font-bold mb-6">Ready to Fall in Love with Car Care?</h2>
          <p className="text-2xl mb-8 opacity-90 leading-relaxed">
            Join thousands of happy customers who've discovered what it feels like to have a mechanic who truly cares.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-colors flex items-center justify-center group shadow-2xl">
              <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Call Now: (+234)813-898-6971
            </button>
            <button className="border-3 border-white text-white px-10 py-4 rounded-2xl font-bold text-xl hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center shadow-2xl">
              Book Online
              <ArrowRight className="w-6 h-6 ml-3" />
            </button>
          </div>
          <p className="text-lg mt-6 opacity-75">Available 24/7 • Free Estimates • Guaranteed Satisfaction</p>
        </div>
      </section>
    </div>
  );
};

export default Services;